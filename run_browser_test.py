import http.server, socketserver, threading, subprocess, json, time, sys

PORT = 8923
results_received = None

class TestHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        global results_received
        if self.path == '/test-result':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            results_received = json.loads(post_data.decode('utf-8'))
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(b'{"status":"ok"}')
        else:
            self.send_response(404)
            self.end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def log_message(self, format, *args):
        pass # suppress server logs

def start_server():
    with socketserver.TCPServer(("127.0.0.1", PORT), TestHandler) as httpd:
        httpd.timeout = 1
        while results_received is None:
            httpd.handle_request()

server_thread = threading.Thread(target=start_server, daemon=True)
server_thread.start()

edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
test_url = f"http://127.0.0.1:{PORT}/test_runner.html"

# Launch Edge headless
proc = subprocess.Popen([
    edge_path,
    "--headless",
    "--disable-gpu",
    "--no-sandbox",
    test_url
])

# Wait up to 10 seconds for results
start_time = time.time()
while results_received is None and (time.time() - start_time) < 10:
    time.sleep(0.5)

proc.terminate()

if results_received is not None:
    print("=== BROWSER TEST RESULTS RECEIVED ===")
    all_passed = True
    for item in results_received.get('logs', []):
        print(item)
        if item.startswith('[FAIL]'):
            all_passed = False
    if results_received.get('error'):
        print(f"Error: {results_received['error']}")
        all_passed = False
    if all_passed:
        print("\n>>> ALL TESTS PASSED INSIDE REAL MICROSOFT EDGE BROWSER! <<<")
        sys.exit(0)
    else:
        print("\n>>> SOME TESTS FAILED <<<")
        sys.exit(1)
else:
    print("Timed out waiting for test results from Edge.")
    sys.exit(1)
