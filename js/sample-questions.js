/**
 * Default Sample Question Bank for GeoQuiz Explorer
 * 4 sample questions per Continent & Difficulty combination (84 questions total)
 */

const SAMPLE_QUESTIONS = [
  {
    "id": "asia-e-1",
    "continent": "Asia",
    "difficulty": "Easy",
    "topic": "Mountains & Relief",
    "question": "What is the highest mountain peak in Asia and the world?",
    "options": [
      "Mount Everest",
      "K2",
      "Kangchenjunga",
      "Mount Fuji"
    ],
    "correctIndex": 0,
    "explanation": "Mount Everest, located in the Himalayas between Nepal and China, rises to 8,848.86 meters above sea level.",
    "status": "published"
  },
  {
    "id": "asia-e-2",
    "continent": "Asia",
    "difficulty": "Easy",
    "topic": "Water Bodies",
    "question": "Which is the longest river in Asia?",
    "options": [
      "Ganges River",
      "Yellow River",
      "Yangtze River",
      "Mekong River"
    ],
    "correctIndex": 2,
    "explanation": "The Yangtze River in China flows approximately 6,300 kilometers, making it the longest river in Asia.",
    "status": "published"
  },
  {
    "id": "asia-e-3",
    "continent": "Asia",
    "difficulty": "Easy",
    "topic": "Capitals & Cities",
    "question": "What is the capital city of Japan?",
    "options": [
      "Kyoto",
      "Osaka",
      "Tokyo",
      "Hiroshima"
    ],
    "correctIndex": 2,
    "explanation": "Tokyo is the capital and most populous metropolitan area of Japan.",
    "status": "published"
  },
  {
    "id": "asia-e-4",
    "continent": "Asia",
    "difficulty": "Easy",
    "topic": "Capitals & Cities",
    "question": "What is the capital city of China?",
    "options": [
      "Shanghai",
      "Beijing",
      "Guangzhou",
      "Hong Kong"
    ],
    "correctIndex": 1,
    "explanation": "Beijing is the national capital of the People's Republic of China.",
    "status": "published"
  },
  {
    "id": "asia-m-1",
    "continent": "Asia",
    "difficulty": "Medium",
    "topic": "Political Geography",
    "question": "Which landlocked country is situated between Russia and China?",
    "options": [
      "Kazakhstan",
      "Mongolia",
      "Kyrgyzstan",
      "Nepal"
    ],
    "correctIndex": 1,
    "explanation": "Mongolia is a vast landlocked nation bordered exclusively by Russia to the north and China to the south.",
    "status": "published"
  },
  {
    "id": "asia-m-2",
    "continent": "Asia",
    "difficulty": "Medium",
    "topic": "General Geography",
    "question": "Which body of water separates the Arabian Peninsula from Iran?",
    "options": [
      "Red Sea",
      "Persian Gulf",
      "Arabian Sea",
      "Dead Sea"
    ],
    "correctIndex": 1,
    "explanation": "The Persian Gulf is a Mediterranean sea in Western Asia situated between Iran and the Arabian Peninsula.",
    "status": "published"
  },
  {
    "id": "asia-m-3",
    "continent": "Asia",
    "difficulty": "Medium",
    "topic": "General Geography",
    "question": "What is the vast triangular plateau covering most of southern peninsular India called?",
    "options": [
      "Tibetan Plateau",
      "Deccan Plateau",
      "Malwa Plateau",
      "Chota Nagpur Plateau"
    ],
    "correctIndex": 1,
    "explanation": "The Deccan Plateau is a large elevated volcanic basalt plateau located between the Western and Eastern Ghats in India.",
    "status": "published"
  },
  {
    "id": "asia-m-4",
    "continent": "Asia",
    "difficulty": "Medium",
    "topic": "General Geography",
    "question": "Which narrow strait separates the state of Tamil Nadu in India from the Mannar district of Sri Lanka?",
    "options": [
      "Malacca Strait",
      "Palk Strait",
      "Sunda Strait",
      "Strait of Hormuz"
    ],
    "correctIndex": 1,
    "explanation": "The Palk Strait connects the Bay of Bengal with the Palk Bay, separating southeastern India from Sri Lanka.",
    "status": "published"
  },
  {
    "id": "asia-h-1",
    "continent": "Asia",
    "difficulty": "Hard",
    "topic": "General Geography",
    "question": "What is the lowest dry point of land on Earth, located in Asia?",
    "options": [
      "Turpan Depression",
      "Dead Sea Shore",
      "Caspian Sea Basin",
      "Lake Baikal floor"
    ],
    "correctIndex": 1,
    "explanation": "The shores of the Dead Sea (bordering Jordan, Israel, and the West Bank) sit approximately 430 meters below sea level.",
    "status": "published"
  },
  {
    "id": "asia-h-2",
    "continent": "Asia",
    "difficulty": "Hard",
    "topic": "Water Bodies",
    "question": "Which strait connects the Andaman Sea (Indian Ocean) to the South China Sea (Pacific Ocean)?",
    "options": [
      "Strait of Hormuz",
      "Strait of Malacca",
      "Bering Strait",
      "Sunda Strait"
    ],
    "correctIndex": 1,
    "explanation": "The Strait of Malacca is one of the most critical shipping lanes in the world, running between the Malay Peninsula and Sumatra.",
    "status": "published"
  },
  {
    "id": "asia-h-3",
    "continent": "Asia",
    "difficulty": "Hard",
    "topic": "Water Bodies",
    "question": "What is the deepest oceanic trench in the world, located in the western Pacific Ocean east of the Philippines?",
    "options": [
      "Puerto Rico Trench",
      "Mariana Trench",
      "Java Trench",
      "Kuril-Kamchatka Trench"
    ],
    "correctIndex": 1,
    "explanation": "The Mariana Trench reaches a maximum known depth of approximately 10,994 meters at Challenger Deep.",
    "status": "published"
  },
  {
    "id": "asia-h-4",
    "continent": "Asia",
    "difficulty": "Hard",
    "topic": "Ecosystems & Climate",
    "question": "Which desert in southeastern Iran frequently records some of the highest land surface skin temperatures on Earth (exceeding 70\u00b0C)?",
    "options": [
      "Dasht-e Kavir",
      "Dasht-e Lut",
      "Karakum Desert",
      "Thar Desert"
    ],
    "correctIndex": 1,
    "explanation": "Satellite measurements from NASA's MODIS have repeatedly recorded Earth's highest land surface skin temperatures in the Dasht-e Lut.",
    "status": "published"
  },
  {
    "id": "afr-e-1",
    "continent": "Africa",
    "difficulty": "Easy",
    "topic": "Ecosystems & Climate",
    "question": "What is the largest hot desert in the world, located in Northern Africa?",
    "options": [
      "Kalahari Desert",
      "Namib Desert",
      "Sahara Desert",
      "Danakil Desert"
    ],
    "correctIndex": 2,
    "explanation": "The Sahara Desert spans over 9 million square kilometers across most of Northern Africa.",
    "status": "published"
  },
  {
    "id": "afr-e-2",
    "continent": "Africa",
    "difficulty": "Easy",
    "topic": "Mountains & Relief",
    "question": "What is the highest mountain in Africa?",
    "options": [
      "Mount Kenya",
      "Mount Kilimanjaro",
      "Mount Stanley",
      "Ras Dashen"
    ],
    "correctIndex": 1,
    "explanation": "Mount Kilimanjaro in Tanzania is a dormant volcano and the highest point in Africa at 5,895 meters.",
    "status": "published"
  },
  {
    "id": "afr-e-3",
    "continent": "Africa",
    "difficulty": "Easy",
    "topic": "Capitals & Cities",
    "question": "What is the capital city of Egypt?",
    "options": [
      "Alexandria",
      "Cairo",
      "Giza",
      "Luxor"
    ],
    "correctIndex": 1,
    "explanation": "Cairo is the capital and largest metropolitan area of Egypt, situated along the Nile River.",
    "status": "published"
  },
  {
    "id": "afr-e-4",
    "continent": "Africa",
    "difficulty": "Easy",
    "topic": "Capitals & Cities",
    "question": "What is the capital city of Kenya?",
    "options": [
      "Mombasa",
      "Kisumu",
      "Nairobi",
      "Nakuru"
    ],
    "correctIndex": 2,
    "explanation": "Nairobi is the capital and largest city of Kenya, known as the 'Green City in the Sun'.",
    "status": "published"
  },
  {
    "id": "afr-m-1",
    "continent": "Africa",
    "difficulty": "Medium",
    "topic": "Water Bodies",
    "question": "Which is the largest lake by surface area on the African continent?",
    "options": [
      "Lake Tanganyika",
      "Lake Malawi",
      "Lake Victoria",
      "Lake Chad"
    ],
    "correctIndex": 2,
    "explanation": "Lake Victoria spans roughly 59,947 square kilometers, shared by Tanzania, Uganda, and Kenya.",
    "status": "published"
  },
  {
    "id": "afr-m-2",
    "continent": "Africa",
    "difficulty": "Medium",
    "topic": "Political Geography",
    "question": "Victoria Falls is located on the border between which two countries?",
    "options": [
      "Kenya and Tanzania",
      "Zambia and Zimbabwe",
      "South Africa and Namibia",
      "Angola and Botswana"
    ],
    "correctIndex": 1,
    "explanation": "Victoria Falls, one of the world's greatest waterfalls, is located on the Zambezi River between Zambia and Zimbabwe.",
    "status": "published"
  },
  {
    "id": "afr-m-3",
    "continent": "Africa",
    "difficulty": "Medium",
    "topic": "Water Bodies",
    "question": "What is the largest inland river delta in the world, located in northern Botswana where the river empties into the Kalahari sands?",
    "options": [
      "Niger Delta",
      "Okavango Delta",
      "Nile Delta",
      "Danube Delta"
    ],
    "correctIndex": 1,
    "explanation": "The Okavango Delta is an endorheic wetland created where the Okavango River terminates in a vast tectonic trough in the Kalahari.",
    "status": "published"
  },
  {
    "id": "afr-m-4",
    "continent": "Africa",
    "difficulty": "Medium",
    "topic": "General Geography",
    "question": "What is the vast swamp and wetland in South Sudan formed by the White Nile, one of the largest freshwater wetlands in the world?",
    "options": [
      "The Pantanal",
      "The Sudd",
      "The Everglades",
      "The Okavango"
    ],
    "correctIndex": 1,
    "explanation": "The Sudd is a vast labyrinth of papyrus marshes and channels where roughly half of the White Nile's inflow is lost to evaporation.",
    "status": "published"
  },
  {
    "id": "afr-h-1",
    "continent": "Africa",
    "difficulty": "Hard",
    "topic": "Political Geography",
    "question": "Which enclave country is completely surrounded by South Africa?",
    "options": [
      "Swaziland (Eswatini)",
      "Lesotho",
      "Botswana",
      "Mozambique"
    ],
    "correctIndex": 1,
    "explanation": "The Kingdom of Lesotho is completely landlocked and encircled by the Republic of South Africa.",
    "status": "published"
  },
  {
    "id": "afr-h-2",
    "continent": "Africa",
    "difficulty": "Hard",
    "topic": "Water Bodies",
    "question": "What is the deepest lake in Africa and second deepest in the world?",
    "options": [
      "Lake Tanganyika",
      "Lake Victoria",
      "Lake Kivu",
      "Lake Turkana"
    ],
    "correctIndex": 0,
    "explanation": "Lake Tanganyika reaches an estimated maximum depth of 1,470 meters, second only to Lake Baikal.",
    "status": "published"
  },
  {
    "id": "afr-h-3",
    "continent": "Africa",
    "difficulty": "Hard",
    "topic": "General Geography",
    "question": "Which prominent geological feature in Mauritania, known as the 'Eye of the Sahara', is a deeply eroded circular anticline dome 40 km in diameter?",
    "options": [
      "Aouelloul Crater",
      "Richat Structure (Guelb er Richat)",
      "Tenoumer Crater",
      "Kebira Crater"
    ],
    "correctIndex": 1,
    "explanation": "The Richat Structure in the Adrar Plateau was initially thought to be a meteorite crater but is actually a deeply eroded symmetrical geological dome.",
    "status": "published"
  },
  {
    "id": "afr-h-4",
    "continent": "Africa",
    "difficulty": "Hard",
    "topic": "Mountains & Relief",
    "question": "What is the highest mountain peak in Namibia, located in the Brandberg Massif in the Erongo Region at 2,573 meters?",
    "options": [
      "Spitzkoppe",
      "K\u00f6nigstein",
      "Moltkeblick",
      "Omatako"
    ],
    "correctIndex": 1,
    "explanation": "K\u00f6nigstein ('King's Stone') is the summit of the granite Brandberg Massif, famous for prehistoric rock art like the 'White Lady'.",
    "status": "published"
  },
  {
    "id": "eur-e-1",
    "continent": "Europe",
    "difficulty": "Easy",
    "topic": "General Geography",
    "question": "What is the smallest independent state in Europe and the world by area?",
    "options": [
      "Monaco",
      "San Marino",
      "Vatican City",
      "Liechtenstein"
    ],
    "correctIndex": 2,
    "explanation": "Vatican City covers an area of about 0.49 square kilometers (121 acres) completely enclosed within Rome, Italy.",
    "status": "published"
  },
  {
    "id": "eur-e-2",
    "continent": "Europe",
    "difficulty": "Easy",
    "topic": "Mountains & Relief",
    "question": "Which mountain range forms a traditional natural boundary between Europe and Asia?",
    "options": [
      "The Alps",
      "The Pyrenees",
      "The Ural Mountains",
      "The Carpathians"
    ],
    "correctIndex": 2,
    "explanation": "The Ural Mountains in western Russia traditionally mark the geographic boundary between Europe and Asia.",
    "status": "published"
  },
  {
    "id": "eur-e-3",
    "continent": "Europe",
    "difficulty": "Easy",
    "topic": "Capitals & Cities",
    "question": "What is the capital city of France?",
    "options": [
      "Lyon",
      "Marseille",
      "Paris",
      "Nice"
    ],
    "correctIndex": 2,
    "explanation": "Paris is the capital and largest city of France, situated on the Seine River.",
    "status": "published"
  },
  {
    "id": "eur-e-4",
    "continent": "Europe",
    "difficulty": "Easy",
    "topic": "Capitals & Cities",
    "question": "What is the capital city of Germany?",
    "options": [
      "Munich",
      "Frankfurt",
      "Berlin",
      "Hamburg"
    ],
    "correctIndex": 2,
    "explanation": "Berlin is the capital and largest city of Germany, reunited in 1990.",
    "status": "published"
  },
  {
    "id": "eur-m-1",
    "continent": "Europe",
    "difficulty": "Medium",
    "topic": "Capitals & Cities",
    "question": "Which river flows through more capital cities than any other river in the world?",
    "options": [
      "Rhine River",
      "Danube River",
      "Volga River",
      "Elbe River"
    ],
    "correctIndex": 1,
    "explanation": "The Danube flows through four European capitals: Vienna (Austria), Bratislava (Slovakia), Budapest (Hungary), and Belgrade (Serbia).",
    "status": "published"
  },
  {
    "id": "eur-m-2",
    "continent": "Europe",
    "difficulty": "Medium",
    "topic": "Mountains & Relief",
    "question": "Which mountain range separates Spain from France?",
    "options": [
      "Apennines",
      "Pyrenees",
      "Balkans",
      "Scandes"
    ],
    "correctIndex": 1,
    "explanation": "The Pyrenees mountains form a natural border between France and Spain, with the microstate Andorra nestled within them.",
    "status": "published"
  },
  {
    "id": "eur-m-3",
    "continent": "Europe",
    "difficulty": "Medium",
    "topic": "Mountains & Relief",
    "question": "Which mountain range extends along the spine of the Scandinavian Peninsula between Norway and Sweden?",
    "options": [
      "Kjolen (Scandinavian Mountains / Scandes)",
      "Urals",
      "Carpathians",
      "Pennines"
    ],
    "correctIndex": 0,
    "explanation": "The Scandinavian Mountains run over 1,700 kilometers, with Galdh\u00f8piggen as the highest peak.",
    "status": "published"
  },
  {
    "id": "eur-m-4",
    "continent": "Europe",
    "difficulty": "Medium",
    "topic": "Mountains & Relief",
    "question": "What is the highest mountain peak in Norway and Northern Europe, rising to 2,469 meters in the Jotunheimen range?",
    "options": [
      "Glittertind",
      "Galdhopiggen",
      "Kebnekaise",
      "Sn\u00f8hetta"
    ],
    "correctIndex": 1,
    "explanation": "Galdh\u00f8piggen in Jotunheimen National Park is the highest mountain in Scandinavia.",
    "status": "published"
  },
  {
    "id": "eur-h-1",
    "continent": "Europe",
    "difficulty": "Hard",
    "topic": "Mountains & Relief",
    "question": "What is the highest mountain peak in geographic Europe?",
    "options": [
      "Mont Blanc",
      "Mount Elbrus",
      "Matterhorn",
      "Mount Olympus"
    ],
    "correctIndex": 1,
    "explanation": "Mount Elbrus in the Caucasus Mountains of Russia rises to 5,642 meters, making it Europe's highest peak.",
    "status": "published"
  },
  {
    "id": "eur-h-2",
    "continent": "Europe",
    "difficulty": "Hard",
    "topic": "Water Bodies",
    "question": "Which strait connects the Atlantic Ocean to the Mediterranean Sea?",
    "options": [
      "Strait of Messina",
      "Strait of Gibraltar",
      "Bosphorus Strait",
      "Dardanelles"
    ],
    "correctIndex": 1,
    "explanation": "The Strait of Gibraltar connects the Atlantic Ocean to the Mediterranean Sea and separates Spain from Morocco.",
    "status": "published"
  },
  {
    "id": "eur-h-3",
    "continent": "Europe",
    "difficulty": "Hard",
    "topic": "General Geography",
    "question": "What is the southernmost point of mainland continental Europe, located in Andalusia, Spain, facing the Strait of Gibraltar?",
    "options": [
      "Cabo da Roca",
      "Punta de Tarifa",
      "Cape Matapan",
      "Cape St. Vincent"
    ],
    "correctIndex": 1,
    "explanation": "Punta de Tarifa sits at 36\u00b000'N latitude, the southernmost point of the European continent.",
    "status": "published"
  },
  {
    "id": "eur-h-4",
    "continent": "Europe",
    "difficulty": "Hard",
    "topic": "General Geography",
    "question": "What is the westernmost point of the mainland European continent, located in Sintra, Portugal?",
    "options": [
      "Cabo Finisterre",
      "Cabo da Roca",
      "Punta de Tarifa",
      "Cape St. Vincent"
    ],
    "correctIndex": 1,
    "explanation": "Cabo da Roca sits at longitude 9\u00b030'W, celebrated by poet Lu\u00eds de Cam\u00f5es as 'where the land ends and the sea begins'.",
    "status": "published"
  },
  {
    "id": "na-e-1",
    "continent": "North America",
    "difficulty": "Easy",
    "topic": "Political Geography",
    "question": "Which is the largest country by land area in North America?",
    "options": [
      "United States",
      "Canada",
      "Mexico",
      "Greenland"
    ],
    "correctIndex": 1,
    "explanation": "Canada is the largest country in North America and the second largest in the world by total surface area.",
    "status": "published"
  },
  {
    "id": "na-e-2",
    "continent": "North America",
    "difficulty": "Easy",
    "topic": "Water Bodies",
    "question": "Which major river system is the longest in North America?",
    "options": [
      "Colorado River",
      "Rio Grande",
      "Mississippi-Missouri River System",
      "Columbia River"
    ],
    "correctIndex": 2,
    "explanation": "The combined Mississippi-Missouri river system stretches over 6,275 kilometers across the heart of North America.",
    "status": "published"
  },
  {
    "id": "na-e-3",
    "continent": "North America",
    "difficulty": "Easy",
    "topic": "Capitals & Cities",
    "question": "What is the capital city of the United States?",
    "options": [
      "New York City",
      "Philadelphia",
      "Washington, D.C.",
      "Los Angeles"
    ],
    "correctIndex": 2,
    "explanation": "Washington, D.C. is the federal capital of the United States, established along the Potomac River in 1790.",
    "status": "published"
  },
  {
    "id": "na-e-4",
    "continent": "North America",
    "difficulty": "Easy",
    "topic": "Capitals & Cities",
    "question": "What is the capital city of Canada?",
    "options": [
      "Toronto",
      "Montreal",
      "Ottawa",
      "Vancouver"
    ],
    "correctIndex": 2,
    "explanation": "Ottawa in Ontario was chosen by Queen Victoria in 1857 as Canada's capital.",
    "status": "published"
  },
  {
    "id": "na-m-1",
    "continent": "North America",
    "difficulty": "Medium",
    "topic": "Water Bodies",
    "question": "Which of the Great Lakes is located entirely within the United States?",
    "options": [
      "Lake Superior",
      "Lake Huron",
      "Lake Michigan",
      "Lake Erie"
    ],
    "correctIndex": 2,
    "explanation": "Lake Michigan is the only one of the five Great Lakes situated entirely within the borders of the United States.",
    "status": "published"
  },
  {
    "id": "na-m-2",
    "continent": "North America",
    "difficulty": "Medium",
    "topic": "Mountains & Relief",
    "question": "What is the highest peak in North America?",
    "options": [
      "Mount Logan",
      "Denali (Mount McKinley)",
      "Mount Rainier",
      "Mount Whitney"
    ],
    "correctIndex": 1,
    "explanation": "Denali, located in Alaska, rises to 6,190 meters (20,310 feet) above sea level.",
    "status": "published"
  },
  {
    "id": "na-m-3",
    "continent": "North America",
    "difficulty": "Medium",
    "topic": "General Geography",
    "question": "What is the massive exposed area of ancient Precambrian crystalline rock that forms the geological core of Canada around Hudson Bay?",
    "options": [
      "Appalachian Basin",
      "Canadian Shield (Laurentian Plateau)",
      "Interior Plains",
      "Western Cordillera"
    ],
    "correctIndex": 1,
    "explanation": "The Canadian Shield covers over 8 million square kilometers, rich in minerals, boreal forests, and lakes.",
    "status": "published"
  },
  {
    "id": "na-m-4",
    "continent": "North America",
    "difficulty": "Medium",
    "topic": "Water Bodies",
    "question": "What is the longest river entirely within Canada, flowing 1,738 kilometers from Great Slave Lake into the Arctic Ocean?",
    "options": [
      "Yukon River",
      "Mackenzie River",
      "Fraser River",
      "Churchill River"
    ],
    "correctIndex": 1,
    "explanation": "The Mackenzie River drainage basin is the second-largest in North America after the Mississippi.",
    "status": "published"
  },
  {
    "id": "na-h-1",
    "continent": "North America",
    "difficulty": "Hard",
    "topic": "Political Geography",
    "question": "Which body of water lies between the Canadian mainland and Baffin Island?",
    "options": [
      "Hudson Bay",
      "Foxe Basin",
      "Beaufort Sea",
      "Davis Strait"
    ],
    "correctIndex": 1,
    "explanation": "Foxe Basin is a shallow oceanic basin north of Hudson Bay, situated between Baffin Island and the Melville Peninsula.",
    "status": "published"
  },
  {
    "id": "na-h-2",
    "continent": "North America",
    "difficulty": "Hard",
    "topic": "Political Geography",
    "question": "What is the southernmost country located on the North American continent mainland?",
    "options": [
      "Costa Rica",
      "Nicaragua",
      "Panama",
      "Belize"
    ],
    "correctIndex": 2,
    "explanation": "Panama is the southernmost country of Central America (part of North America), connecting to Colombia in South America.",
    "status": "published"
  },
  {
    "id": "na-h-3",
    "continent": "North America",
    "difficulty": "Hard",
    "topic": "General Geography",
    "question": "What is the peninsular exclave of Whatcom County, Washington, situated on the southern tip of the Tsawwassen Peninsula below the 49th parallel, accessible by land only through Canada?",
    "options": [
      "Northwest Angle",
      "Point Roberts",
      "Alburgh Tongue",
      "Elm Point"
    ],
    "correctIndex": 1,
    "explanation": "Point Roberts was created by the 1846 Oregon Treaty setting the border at 49\u00b0N, isolating it from mainland Washington.",
    "status": "published"
  },
  {
    "id": "na-h-4",
    "continent": "North America",
    "difficulty": "Hard",
    "topic": "Water Bodies",
    "question": "What is the small practical exclave of Minnesota that is the only part of the contiguous 48 US states located north of the 49th parallel, surrounded by Lake of the Woods and Manitoba?",
    "options": [
      "Point Roberts",
      "Northwest Angle",
      "Isle Royale",
      "Grand Portage"
    ],
    "correctIndex": 1,
    "explanation": "The Northwest Angle resulted from a 1783 Treaty of Paris surveying error assuming the Mississippi's source lay northwest of Lake of the Woods.",
    "status": "published"
  },
  {
    "id": "sa-e-1",
    "continent": "South America",
    "difficulty": "Easy",
    "topic": "Political Geography",
    "question": "Which is the largest country by area and population in South America?",
    "options": [
      "Argentina",
      "Colombia",
      "Brazil",
      "Peru"
    ],
    "correctIndex": 2,
    "explanation": "Brazil covers nearly half of South America's land area and contains the majority of the Amazon Rainforest.",
    "status": "published"
  },
  {
    "id": "sa-e-2",
    "continent": "South America",
    "difficulty": "Easy",
    "topic": "Mountains & Relief",
    "question": "What is the longest continental mountain range in the world, located in South America?",
    "options": [
      "The Andes",
      "Sierra Madre",
      "Appalachians",
      "Atlas Mountains"
    ],
    "correctIndex": 0,
    "explanation": "The Andes mountains extend over 7,000 kilometers along the western edge of South America across seven countries.",
    "status": "published"
  },
  {
    "id": "sa-e-3",
    "continent": "South America",
    "difficulty": "Easy",
    "topic": "Capitals & Cities",
    "question": "What is the capital city of Argentina?",
    "options": [
      "C\u00f3rdoba",
      "Buenos Aires",
      "Rosario",
      "Mendoza"
    ],
    "correctIndex": 1,
    "explanation": "Buenos Aires is the autonomous capital and largest city of Argentina, located on the western shore of the R\u00edo de la Plata.",
    "status": "published"
  },
  {
    "id": "sa-e-4",
    "continent": "South America",
    "difficulty": "Easy",
    "topic": "Capitals & Cities",
    "question": "What is the planned federal capital city of Brazil, inaugurated in 1960?",
    "options": [
      "Rio de Janeiro",
      "S\u00e3o Paulo",
      "Bras\u00edlia",
      "Salvador"
    ],
    "correctIndex": 2,
    "explanation": "Bras\u00edlia was designed by urban planner L\u00facio Costa and architect Oscar Niemeyer in the shape of an airplane.",
    "status": "published"
  },
  {
    "id": "sa-m-1",
    "continent": "South America",
    "difficulty": "Medium",
    "topic": "General Geography",
    "question": "What is the highest uninterrupted waterfall in the world, located in Venezuela?",
    "options": [
      "Iguazu Falls",
      "Angel Falls",
      "Kaieteur Falls",
      "Gocta Cataracts"
    ],
    "correctIndex": 1,
    "explanation": "Angel Falls (Salto \u00c1ngel) in Venezuela drops 979 meters from the summit of the Auy\u00e1n-tepui plateau.",
    "status": "published"
  },
  {
    "id": "sa-m-2",
    "continent": "South America",
    "difficulty": "Medium",
    "topic": "Political Geography",
    "question": "Which two South American countries are landlocked?",
    "options": [
      "Bolivia and Paraguay",
      "Ecuador and Peru",
      "Guyana and Suriname",
      "Uruguay and Chile"
    ],
    "correctIndex": 0,
    "explanation": "Bolivia and Paraguay are the only two nations in South America without direct access to the sea.",
    "status": "published"
  },
  {
    "id": "sa-m-3",
    "continent": "South America",
    "difficulty": "Medium",
    "topic": "Political Geography",
    "question": "Which South American nation shares land borders with every other country on the continent except Chile and Ecuador?",
    "options": [
      "Argentina",
      "Brazil",
      "Colombia",
      "Bolivia"
    ],
    "correctIndex": 1,
    "explanation": "Brazil borders ten sovereign nations: Uruguay, Argentina, Paraguay, Bolivia, Peru, Colombia, Venezuela, Guyana, Suriname, and French Guiana (France).",
    "status": "published"
  },
  {
    "id": "sa-m-4",
    "continent": "South America",
    "difficulty": "Medium",
    "topic": "Water Bodies",
    "question": "Which river forms a significant portion of the international border between Colombia and Venezuela before joining the Orinoco?",
    "options": [
      "Magdalena River",
      "Arauca River",
      "Meta River",
      "Cauca River"
    ],
    "correctIndex": 1,
    "explanation": "The Arauca River flows eastward from the Cordillera Oriental in Colombia, defining roughly 296 km of the Colombia-Venezuela border.",
    "status": "published"
  },
  {
    "id": "sa-h-1",
    "continent": "South America",
    "difficulty": "Hard",
    "topic": "Water Bodies",
    "question": "What is the highest navigable lake in the world, located between Peru and Bolivia?",
    "options": [
      "Lake Maracaibo",
      "Lake Titicaca",
      "Lake Poop\u00f3",
      "Lake Buenos Aires"
    ],
    "correctIndex": 1,
    "explanation": "Lake Titicaca sits at an altitude of 3,812 meters above sea level in the Andes.",
    "status": "published"
  },
  {
    "id": "sa-h-2",
    "continent": "South America",
    "difficulty": "Hard",
    "topic": "Ecosystems & Climate",
    "question": "What is the name of the driest non-polar desert in the world, located mainly in Chile?",
    "options": [
      "Patagonian Desert",
      "Atacama Desert",
      "Sechura Desert",
      "Monte Desert"
    ],
    "correctIndex": 1,
    "explanation": "The Atacama Desert in northern Chile receives less than 15 millimeters of precipitation per year on average.",
    "status": "published"
  },
  {
    "id": "sa-h-3",
    "continent": "South America",
    "difficulty": "Hard",
    "topic": "Water Bodies",
    "question": "What is the famous natural river canal that connects the Orinoco river basin with the Rio Negro and Amazon basin, representing the world's largest natural river bifurcation?",
    "options": [
      "Casiquiare Canal (Brazo Casiquiare)",
      "Carata Channel",
      "Trombetas Fork",
      "Japur\u00e1 Bifurcation"
    ],
    "correctIndex": 0,
    "explanation": "The Casiquiare splits from the upper Orinoco in Venezuela and flows 326 km into the Rio Negro, discharging 12-20% of the Orinoco's upper flow directly into the Amazon basin.",
    "status": "published"
  },
  {
    "id": "sa-h-4",
    "continent": "South America",
    "difficulty": "Hard",
    "topic": "General Geography",
    "question": "What is the exact height of the uninterrupted single free-fall plunge of Angel Falls (Salto \u00c1ngel) in Venezuela, within its total 979-meter drop?",
    "options": [
      "650 meters",
      "807 meters",
      "912 meters",
      "740 meters"
    ],
    "correctIndex": 1,
    "explanation": "Angel Falls plunges 979 meters total from Auy\u00e1n-tepui, with its primary uninterrupted vertical plunge measuring 807 meters.",
    "status": "published"
  },
  {
    "id": "oc-e-1",
    "continent": "Australia/Oceania",
    "difficulty": "Easy",
    "topic": "Capitals & Cities",
    "question": "What is the capital city of Australia?",
    "options": [
      "Sydney",
      "Melbourne",
      "Canberra",
      "Brisbane"
    ],
    "correctIndex": 2,
    "explanation": "Canberra was selected as Australia's purpose-built capital city in 1908 as a compromise between Sydney and Melbourne.",
    "status": "published"
  },
  {
    "id": "oc-e-2",
    "continent": "Australia/Oceania",
    "difficulty": "Easy",
    "topic": "General Geography",
    "question": "What is the world's largest coral reef system, located off the coast of Queensland?",
    "options": [
      "Belize Barrier Reef",
      "Great Barrier Reef",
      "Red Sea Coral Reef",
      "New Caledonia Barrier Reef"
    ],
    "correctIndex": 1,
    "explanation": "The Great Barrier Reef stretches over 2,300 kilometers and can be seen from space.",
    "status": "published"
  },
  {
    "id": "oc-e-3",
    "continent": "Australia/Oceania",
    "difficulty": "Easy",
    "topic": "Capitals & Cities",
    "question": "What is the capital city of New Zealand?",
    "options": [
      "Auckland",
      "Christchurch",
      "Wellington",
      "Hamilton"
    ],
    "correctIndex": 2,
    "explanation": "Wellington sits at the southern tip of the North Island on Cook Strait, making it the southernmost national capital in the world.",
    "status": "published"
  },
  {
    "id": "oc-e-4",
    "continent": "Australia/Oceania",
    "difficulty": "Easy",
    "topic": "Capitals & Cities",
    "question": "What is the largest city in New Zealand by population, known as the 'City of Sails'?",
    "options": [
      "Wellington",
      "Auckland",
      "Christchurch",
      "Dunedin"
    ],
    "correctIndex": 1,
    "explanation": "Auckland is home to over 1.6 million residents, situated on a narrow isthmus between the Manukau and Waitemat\u0101 harbours.",
    "status": "published"
  },
  {
    "id": "oc-m-1",
    "continent": "Australia/Oceania",
    "difficulty": "Medium",
    "topic": "Political Geography",
    "question": "Which body of water separates Australia from the island state of Tasmania?",
    "options": [
      "Cook Strait",
      "Bass Strait",
      "Torres Strait",
      "Timor Sea"
    ],
    "correctIndex": 1,
    "explanation": "Bass Strait is a maritime channel separating the Australian mainland state of Victoria from the island of Tasmania.",
    "status": "published"
  },
  {
    "id": "oc-m-2",
    "continent": "Australia/Oceania",
    "difficulty": "Medium",
    "topic": "Water Bodies",
    "question": "Which island country in Oceania consists of North Island and South Island?",
    "options": [
      "Fiji",
      "New Zealand",
      "Papua New Guinea",
      "Samoa"
    ],
    "correctIndex": 1,
    "explanation": "New Zealand is comprised of two main landmasses: the North Island (Te Ika-a-M\u0101ui) and the South Island (Te Waipounamu).",
    "status": "published"
  },
  {
    "id": "oc-m-3",
    "continent": "Australia/Oceania",
    "difficulty": "Medium",
    "topic": "Ecosystems & Climate",
    "question": "What is the largest desert in Australia by area, covering roughly 348,750 square kilometers across Western Australia and South Australia?",
    "options": [
      "Great Sandy Desert",
      "Great Victoria Desert",
      "Simpson Desert",
      "Tanami Desert"
    ],
    "correctIndex": 1,
    "explanation": "The Great Victoria Desert was named by explorer Ernest Giles in 1875 in honor of Queen Victoria, characterized by red sand dunes and grassland.",
    "status": "published"
  },
  {
    "id": "oc-m-4",
    "continent": "Australia/Oceania",
    "difficulty": "Medium",
    "topic": "Ecosystems & Climate",
    "question": "Which Australian desert is world-famous for having the world's longest parallel longitudinal sand dunes, including the 40-meter-tall dune known as 'Big Red'?",
    "options": [
      "Gibson Desert",
      "Simpson Desert",
      "Tanami Desert",
      "Strzelecki Desert"
    ],
    "correctIndex": 1,
    "explanation": "The Simpson Desert spans 176,500 square kilometers across the borders of the Northern Territory, Queensland, and South Australia.",
    "status": "published"
  },
  {
    "id": "oc-h-1",
    "continent": "Australia/Oceania",
    "difficulty": "Hard",
    "topic": "Mountains & Relief",
    "question": "What is the highest mountain peak on the Australian mainland?",
    "options": [
      "Mount Kosciuszko",
      "Mount Bogong",
      "Mount Feathertop",
      "Mount Townsend"
    ],
    "correctIndex": 0,
    "explanation": "Mount Kosciuszko in the Snowy Mountains of New South Wales reaches 2,228 meters above sea level.",
    "status": "published"
  },
  {
    "id": "oc-h-2",
    "continent": "Australia/Oceania",
    "difficulty": "Hard",
    "topic": "Water Bodies",
    "question": "Which strait connects the Coral Sea with the Arafura Sea, separating Australia from New Guinea?",
    "options": [
      "Bass Strait",
      "Torres Strait",
      "Dampier Strait",
      "Clarence Strait"
    ],
    "correctIndex": 1,
    "explanation": "The Torres Strait is a narrow waterway between the northern tip of Cape York Peninsula and Papua New Guinea.",
    "status": "published"
  },
  {
    "id": "oc-h-3",
    "continent": "Australia/Oceania",
    "difficulty": "Hard",
    "topic": "Mountains & Relief",
    "question": "What is the highest mountain peak in all sovereign Australian territory, rising to 2,745 meters on a remote subantarctic volcanic island in the Southern Ocean?",
    "options": [
      "Mount Kosciuszko",
      "Mawson Peak (Heard Island)",
      "Mount Ossa",
      "Mount Bogong"
    ],
    "correctIndex": 1,
    "explanation": "Mawson Peak is an active stratovolcano on Big Ben massif on Heard Island, 4,000 km southwest of Perth in the Southern Ocean.",
    "status": "published"
  },
  {
    "id": "oc-h-4",
    "continent": "Australia/Oceania",
    "difficulty": "Hard",
    "topic": "Mountains & Relief",
    "question": "What is the second-highest mountain peak on the Australian mainland, rising to 2,209 meters in the Snowy Mountains just 3.7 km north of Mount Kosciuszko?",
    "options": [
      "Mount Townsend",
      "Mount Bogong",
      "Mount Twynam",
      "Rams Head"
    ],
    "correctIndex": 0,
    "explanation": "Mount Townsend was originally thought to be the highest mountain until surveyor Paul Strzelecki remeasured Kosciuszko's peak in 1840.",
    "status": "published"
  },
  {
    "id": "ant-e-1",
    "continent": "Antarctica",
    "difficulty": "Easy",
    "topic": "General Geography",
    "question": "What percentage of the world's ice is estimated to be held by the Antarctic ice sheet?",
    "options": [
      "About 30%",
      "About 50%",
      "About 70%",
      "About 90%"
    ],
    "correctIndex": 3,
    "explanation": "Antarctica holds approximately 90% of the world's ice and about 70% of the world's total fresh water.",
    "status": "published"
  },
  {
    "id": "ant-e-2",
    "continent": "Antarctica",
    "difficulty": "Easy",
    "topic": "General Geography",
    "question": "Because of its extremely low precipitation, Antarctica is geographically classified as a:",
    "options": [
      "Tundra",
      "Polar Desert",
      "Savanna",
      "Steppe"
    ],
    "correctIndex": 1,
    "explanation": "With average precipitation under 166 millimeters annually across the interior, Antarctica is technically a polar desert.",
    "status": "published"
  },
  {
    "id": "ant-e-3",
    "continent": "Antarctica",
    "difficulty": "Easy",
    "topic": "General Geography",
    "question": "What is the exact geographical latitude of the Geographic South Pole?",
    "options": [
      "0\u00b0",
      "66.5\u00b0 South",
      "90\u00b0 South",
      "180\u00b0 South"
    ],
    "correctIndex": 2,
    "explanation": "The Geographic South Pole sits at 90\u00b0 S latitude, the southernmost point on the Earth's axis of rotation.",
    "status": "published"
  },
  {
    "id": "ant-e-4",
    "continent": "Antarctica",
    "difficulty": "Easy",
    "topic": "General Geography",
    "question": "Who was the Norwegian polar explorer who led the first expedition to reach the Geographic South Pole on December 14, 1911?",
    "options": [
      "Robert Falcon Scott",
      "Roald Amundsen",
      "Ernest Shackleton",
      "Douglas Mawson"
    ],
    "correctIndex": 1,
    "explanation": "Roald Amundsen and his four companions reached the South Pole using skis and sled dogs, beating Scott's British party by 34 days.",
    "status": "published"
  },
  {
    "id": "ant-m-1",
    "continent": "Antarctica",
    "difficulty": "Medium",
    "topic": "Mountains & Relief",
    "question": "What is the highest mountain peak in Antarctica?",
    "options": [
      "Mount Erebus",
      "Vinson Massif",
      "Mount Kirkpatrick",
      "Mount Jackson"
    ],
    "correctIndex": 1,
    "explanation": "Vinson Massif in the Sentinel Range of the Ellsworth Mountains rises to 4,892 meters (16,050 feet).",
    "status": "published"
  },
  {
    "id": "ant-m-2",
    "continent": "Antarctica",
    "difficulty": "Medium",
    "topic": "Water Bodies",
    "question": "Which active volcano is located on Ross Island in Antarctica, famous for its persistent lava lake?",
    "options": [
      "Mount Erebus",
      "Mount Terror",
      "Mount Melbourne",
      "Mount Berlin"
    ],
    "correctIndex": 0,
    "explanation": "Mount Erebus is the second-highest volcano in Antarctica and the southernmost historically active volcano on Earth.",
    "status": "published"
  },
  {
    "id": "ant-m-3",
    "continent": "Antarctica",
    "difficulty": "Medium",
    "topic": "Mountains & Relief",
    "question": "What is the name of the deep gorge carved through the Transantarctic Mountains by the Beardmore Glacier, used as the route by Shackleton (1908) and Scott (1911) to reach the polar plateau?",
    "options": [
      "Axel Heiberg Glacier",
      "Beardmore Glacier route",
      "Darwin Glacier",
      "Nimrod Glacier"
    ],
    "correctIndex": 1,
    "explanation": "At 160 km long, the Beardmore Glacier is one of the world's largest glaciers, connecting the Ross Ice Shelf to the East Antarctic Plateau.",
    "status": "published"
  },
  {
    "id": "ant-m-4",
    "continent": "Antarctica",
    "difficulty": "Medium",
    "topic": "Water Bodies",
    "question": "What is the largest subglacial lake in Antarctica, buried under approximately 4 km of East Antarctic ice near Vostok Station?",
    "options": [
      "Lake Ellsworth",
      "Lake Vostok",
      "Lake Mercer",
      "Lake Whillans"
    ],
    "correctIndex": 1,
    "explanation": "Lake Vostok covers roughly 15,690 square kilometers and may have been isolated from the atmosphere for 15\u201325 million years.",
    "status": "published"
  },
  {
    "id": "ant-h-1",
    "continent": "Antarctica",
    "difficulty": "Hard",
    "topic": "Water Bodies",
    "question": "What is the name of the vast subglacial lake buried underneath approximately 4 kilometers of Antarctic ice?",
    "options": [
      "Lake Vostok",
      "Lake Concordia",
      "Lake Ellsworth",
      "Lake Mercer"
    ],
    "correctIndex": 0,
    "explanation": "Lake Vostok is the largest of Antarctica's known subglacial lakes, sealed beneath the ice sheet for millions of years.",
    "status": "published"
  },
  {
    "id": "ant-h-2",
    "continent": "Antarctica",
    "difficulty": "Hard",
    "topic": "Water Bodies",
    "question": "What international agreement signed in 1959 preserves Antarctica exclusively for peaceful scientific research?",
    "options": [
      "Kyoto Protocol",
      "Antarctic Treaty",
      "Geneva Convention",
      "Madrid Protocol"
    ],
    "correctIndex": 1,
    "explanation": "The Antarctic Treaty was signed in Washington in 1959 by 12 nations active in Antarctica during the International Geophysical Year.",
    "status": "published"
  },
  {
    "id": "ant-h-3",
    "continent": "Antarctica",
    "difficulty": "Hard",
    "topic": "Water Bodies",
    "question": "What is the thickness of ice above Lake Vostok, the largest subglacial lake in Antarctica?",
    "options": [
      "1 km",
      "2.5 km",
      "Approximately 4 km",
      "6 km"
    ],
    "correctIndex": 2,
    "explanation": "Lake Vostok lies beneath approximately 3.7 to 4.3 km of ice, sealed from the atmosphere for an estimated 15 to 25 million years, maintained liquid by geothermal heat.",
    "status": "published"
  },
  {
    "id": "ant-h-4",
    "continent": "Antarctica",
    "difficulty": "Hard",
    "topic": "General Geography",
    "question": "What chemical element ratio in ice cores is the primary proxy used by paleoclimatologists to reconstruct past Antarctic temperatures?",
    "options": [
      "Carbon-12 to Carbon-14",
      "Deuterium-to-hydrogen ratio (deltaD) or oxygen-18 to oxygen-16 (delta18O)",
      "Nitrogen isotope ratios",
      "Beryllium-10 concentrations"
    ],
    "correctIndex": 1,
    "explanation": "Heavier water isotopes (H2-18O or HDO) preferentially condense and fall as snow at lower temperatures; the isotopic ratio in ice layers directly records paleotemperature.",
    "status": "published"
  }
];

if (typeof window !== 'undefined') {
  window.SAMPLE_QUESTIONS = SAMPLE_QUESTIONS;
}
