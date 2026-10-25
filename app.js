/**
 * GeoQuiz Explorer 🌍 | Institutional Geography Learning Platform
 * Core Engine v3.4 (Zero-Lag Submit & Custom Q&A Study Sheet Export)
 */

'use strict';

const VALID_CONTINENTS = [
  'Whole World', 'Asia', 'Africa', 'Europe', 
  'North America', 'South America', 'Australia/Oceania', 'Antarctica'
];

/* ==========================================================================
   COMPLETE 197 COUNTRY FLAG & GEOGRAPHY REPOSITORY
   ========================================================================== */
const WORLD_FLAGS = [
  // --- Africa (54 Sovereign Countries) ---
  { code: 'dz', name: 'Algeria', continent: 'Africa', coords: [28.0339, 1.6596] },
  { code: 'ao', name: 'Angola', continent: 'Africa', coords: [-11.2027, 17.8739] },
  { code: 'bj', name: 'Benin', continent: 'Africa', coords: [9.3077, 2.3158] },
  { code: 'bw', name: 'Botswana', continent: 'Africa', coords: [-22.3285, 24.6849] },
  { code: 'bf', name: 'Burkina Faso', continent: 'Africa', coords: [12.2383, -1.5616] },
  { code: 'bi', name: 'Burundi', continent: 'Africa', coords: [-3.3731, 29.9189] },
  { code: 'cv', name: 'Cabo Verde', continent: 'Africa', coords: [16.5388, -23.0418], isSmall: true },
  { code: 'cm', name: 'Cameroon', continent: 'Africa', coords: [7.3697, 12.3547] },
  { code: 'cf', name: 'Central African Republic', continent: 'Africa', coords: [6.6111, 20.9394] },
  { code: 'td', name: 'Chad', continent: 'Africa', coords: [15.4542, 18.7322] },
  { code: 'km', name: 'Comoros', continent: 'Africa', coords: [-11.8795, 43.4473], isSmall: true },
  { code: 'cg', name: 'Republic of the Congo', continent: 'Africa', coords: [-0.2280, 15.8277] },
  { code: 'cd', name: 'DR Congo', continent: 'Africa', coords: [-4.0383, 21.7587] },
  { code: 'dj', name: 'Djibouti', continent: 'Africa', coords: [11.8251, 42.5903], isSmall: true },
  { code: 'eg', name: 'Egypt', continent: 'Africa', coords: [26.8206, 30.8025] },
  { code: 'gq', name: 'Equatorial Guinea', continent: 'Africa', coords: [1.6508, 10.2679] },
  { code: 'er', name: 'Eritrea', continent: 'Africa', coords: [15.1794, 39.7823] },
  { code: 'sz', name: 'Eswatini', continent: 'Africa', coords: [-26.5225, 31.4659], isSmall: true },
  { code: 'et', name: 'Ethiopia', continent: 'Africa', coords: [9.1450, 40.4897] },
  { code: 'ga', name: 'Gabon', continent: 'Africa', coords: [-0.8037, 11.6094] },
  { code: 'gm', name: 'Gambia', continent: 'Africa', coords: [13.4432, -15.3101], isSmall: true },
  { code: 'gh', name: 'Ghana', continent: 'Africa', coords: [7.9465, -1.0232] },
  { code: 'gn', name: 'Guinea', continent: 'Africa', coords: [9.9456, -9.6966] },
  { code: 'gw', name: 'Guinea-Bissau', continent: 'Africa', coords: [11.8037, -15.1804] },
  { code: 'ci', name: 'Ivory Coast', continent: 'Africa', coords: [7.5400, -5.5471] },
  { code: 'ke', name: 'Kenya', continent: 'Africa', coords: [-0.0236, 37.9062] },
  { code: 'ls', name: 'Lesotho', continent: 'Africa', coords: [-29.6099, 28.2336], isSmall: true },
  { code: 'lr', name: 'Liberia', continent: 'Africa', coords: [6.4281, -9.4295] },
  { code: 'ly', name: 'Libya', continent: 'Africa', coords: [26.3351, 17.2283] },
  { code: 'mg', name: 'Madagascar', continent: 'Africa', coords: [-18.7669, 46.8691] },
  { code: 'mw', name: 'Malawi', continent: 'Africa', coords: [-13.2543, 34.3015] },
  { code: 'ml', name: 'Mali', continent: 'Africa', coords: [17.5707, -3.9962] },
  { code: 'mr', name: 'Mauritania', continent: 'Africa', coords: [21.0079, -10.9408] },
  { code: 'mu', name: 'Mauritius', continent: 'Africa', coords: [-20.3484, 57.5522], isSmall: true },
  { code: 'ma', name: 'Morocco', continent: 'Africa', coords: [31.7917, -7.0926] },
  { code: 'mz', name: 'Mozambique', continent: 'Africa', coords: [-18.6657, 35.5296] },
  { code: 'na', name: 'Namibia', continent: 'Africa', coords: [-22.9576, 18.4904] },
  { code: 'ne', name: 'Niger', continent: 'Africa', coords: [17.6078, 8.0817] },
  { code: 'ng', name: 'Nigeria', continent: 'Africa', coords: [9.0820, 8.6753] },
  { code: 'rw', name: 'Rwanda', continent: 'Africa', coords: [-1.9403, 29.8739], isSmall: true },
  { code: 'st', name: 'Sao Tome and Principe', continent: 'Africa', coords: [0.1864, 6.6131], isSmall: true },
  { code: 'sn', name: 'Senegal', continent: 'Africa', coords: [14.4974, -14.4524] },
  { code: 'sc', name: 'Seychelles', continent: 'Africa', coords: [-4.6796, 55.4920], isSmall: true },
  { code: 'sl', name: 'Sierra Leone', continent: 'Africa', coords: [8.4606, -11.7799] },
  { code: 'so', name: 'Somalia', continent: 'Africa', coords: [5.1521, 46.1996] },
  { code: 'za', name: 'South Africa', continent: 'Africa', coords: [-30.5595, 22.9375] },
  { code: 'ss', name: 'South Sudan', continent: 'Africa', coords: [6.8770, 31.3070] },
  { code: 'sd', name: 'Sudan', continent: 'Africa', coords: [12.8628, 30.2176] },
  { code: 'tz', name: 'Tanzania', continent: 'Africa', coords: [-6.3690, 34.8888] },
  { code: 'tg', name: 'Togo', continent: 'Africa', coords: [8.6195, 0.8248] },
  { code: 'tn', name: 'Tunisia', continent: 'Africa', coords: [33.8869, 9.5375] },
  { code: 'ug', name: 'Uganda', continent: 'Africa', coords: [1.3733, 32.2903] },
  { code: 'zm', name: 'Zambia', continent: 'Africa', coords: [-13.1339, 27.8493] },
  { code: 'zw', name: 'Zimbabwe', continent: 'Africa', coords: [-19.0154, 29.1549] },

  // --- Asia (49 Sovereign Countries) ---
  { code: 'af', name: 'Afghanistan', continent: 'Asia', coords: [33.9391, 67.7100] },
  { code: 'am', name: 'Armenia', continent: 'Asia', coords: [40.0691, 45.0382], isSmall: true },
  { code: 'az', name: 'Azerbaijan', continent: 'Asia', coords: [40.1431, 47.5769] },
  { code: 'bh', name: 'Bahrain', continent: 'Asia', coords: [26.0667, 50.5577], isSmall: true },
  { code: 'bd', name: 'Bangladesh', continent: 'Asia', coords: [23.6850, 90.3563] },
  { code: 'bt', name: 'Bhutan', continent: 'Asia', coords: [27.5142, 90.4336], isSmall: true },
  { code: 'bn', name: 'Brunei', continent: 'Asia', coords: [4.5353, 114.7277], isSmall: true },
  { code: 'kh', name: 'Cambodia', continent: 'Asia', coords: [12.5657, 104.9910] },
  { code: 'cn', name: 'China', continent: 'Asia', coords: [35.8617, 104.1954] },
  { code: 'cy', name: 'Cyprus', continent: 'Asia', coords: [35.1264, 33.4299], isSmall: true },
  { code: 'ge', name: 'Georgia', continent: 'Asia', coords: [42.3154, 43.3569] },
  { code: 'in', name: 'India', continent: 'Asia', coords: [20.5937, 78.9629] },
  { code: 'id', name: 'Indonesia', continent: 'Asia', coords: [-0.7893, 113.9213] },
  { code: 'ir', name: 'Iran', continent: 'Asia', coords: [32.4279, 53.6880] },
  { code: 'iq', name: 'Iraq', continent: 'Asia', coords: [33.2232, 43.6793] },
  { code: 'il', name: 'Israel', continent: 'Asia', coords: [31.0461, 34.8516], isSmall: true },
  { code: 'jp', name: 'Japan', continent: 'Asia', coords: [36.2048, 138.2529] },
  { code: 'jo', name: 'Jordan', continent: 'Asia', coords: [30.5852, 36.2384] },
  { code: 'kz', name: 'Kazakhstan', continent: 'Asia', coords: [48.0196, 66.9237] },
  { code: 'kw', name: 'Kuwait', continent: 'Asia', coords: [29.3117, 47.4818], isSmall: true },
  { code: 'kg', name: 'Kyrgyzstan', continent: 'Asia', coords: [41.2044, 74.7661] },
  { code: 'la', name: 'Laos', continent: 'Asia', coords: [19.8563, 102.4955] },
  { code: 'lb', name: 'Lebanon', continent: 'Asia', coords: [33.8547, 35.8623], isSmall: true },
  { code: 'my', name: 'Malaysia', continent: 'Asia', coords: [4.2105, 101.9758] },
  { code: 'mv', name: 'Maldives', continent: 'Asia', coords: [3.2028, 73.2207], isSmall: true },
  { code: 'mn', name: 'Mongolia', continent: 'Asia', coords: [46.8625, 103.8467] },
  { code: 'mm', name: 'Myanmar', continent: 'Asia', coords: [21.9162, 95.9560] },
  { code: 'np', name: 'Nepal', continent: 'Asia', coords: [28.3949, 84.1240] },
  { code: 'kp', name: 'North Korea', continent: 'Asia', coords: [40.3399, 127.5101] },
  { code: 'om', name: 'Oman', continent: 'Asia', coords: [21.4735, 55.9754] },
  { code: 'pk', name: 'Pakistan', continent: 'Asia', coords: [30.3753, 69.3451] },
  { code: 'ps', name: 'Palestine', continent: 'Asia', coords: [31.9522, 35.2332], isSmall: true },
  { code: 'ph', name: 'Philippines', continent: 'Asia', coords: [12.8797, 121.7740] },
  { code: 'qa', name: 'Qatar', continent: 'Asia', coords: [25.3548, 51.1839], isSmall: true },
  { code: 'sa', name: 'Saudi Arabia', continent: 'Asia', coords: [23.8859, 45.0792] },
  { code: 'sg', name: 'Singapore', continent: 'Asia', coords: [1.3521, 103.8198], isSmall: true },
  { code: 'kr', name: 'South Korea', continent: 'Asia', coords: [35.9078, 127.7669] },
  { code: 'lk', name: 'Sri Lanka', continent: 'Asia', coords: [7.8731, 80.7718] },
  { code: 'sy', name: 'Syria', continent: 'Asia', coords: [34.8021, 38.9968] },
  { code: 'tw', name: 'Taiwan', continent: 'Asia', coords: [23.6978, 120.9605] },
  { code: 'tj', name: 'Tajikistan', continent: 'Asia', coords: [38.8610, 71.2761] },
  { code: 'th', name: 'Thailand', continent: 'Asia', coords: [15.8700, 100.9925] },
  { code: 'tl', name: 'Timor-Leste', continent: 'Asia', coords: [-8.8742, 125.7275], isSmall: true },
  { code: 'tr', name: 'Turkey', continent: 'Asia', coords: [38.9637, 35.2433] },
  { code: 'tm', name: 'Turkmenistan', continent: 'Asia', coords: [38.9697, 59.5563] },
  { code: 'ae', name: 'United Arab Emirates', continent: 'Asia', coords: [23.4241, 53.8478] },
  { code: 'uz', name: 'Uzbekistan', continent: 'Asia', coords: [41.3775, 64.5853] },
  { code: 'vn', name: 'Vietnam', continent: 'Asia', coords: [14.0583, 108.2772] },
  { code: 'ye', name: 'Yemen', continent: 'Asia', coords: [15.5527, 48.5164] },

  // --- Europe (45 Sovereign Countries) ---
  { code: 'al', name: 'Albania', continent: 'Europe', coords: [41.1533, 20.1683] },
  { code: 'ad', name: 'Andorra', continent: 'Europe', coords: [42.5063, 1.5218], isSmall: true },
  { code: 'at', name: 'Austria', continent: 'Europe', coords: [47.5162, 14.5501] },
  { code: 'by', name: 'Belarus', continent: 'Europe', coords: [53.7098, 27.9534] },
  { code: 'be', name: 'Belgium', continent: 'Europe', coords: [50.5039, 4.4699] },
  { code: 'ba', name: 'Bosnia and Herzegovina', continent: 'Europe', coords: [43.9159, 17.6791] },
  { code: 'bg', name: 'Bulgaria', continent: 'Europe', coords: [42.7339, 25.4858] },
  { code: 'hr', name: 'Croatia', continent: 'Europe', coords: [45.1000, 15.2000] },
  { code: 'cz', name: 'Czech Republic', continent: 'Europe', coords: [49.8175, 15.4730] },
  { code: 'dk', name: 'Denmark', continent: 'Europe', coords: [56.2639, 9.5018] },
  { code: 'ee', name: 'Estonia', continent: 'Europe', coords: [58.5953, 25.0136] },
  { code: 'fi', name: 'Finland', continent: 'Europe', coords: [61.9241, 25.7482] },
  { code: 'fr', name: 'France', continent: 'Europe', coords: [46.2276, 2.2137] },
  { code: 'de', name: 'Germany', continent: 'Europe', coords: [51.1657, 10.4515] },
  { code: 'gr', name: 'Greece', continent: 'Europe', coords: [39.0742, 21.8243] },
  { code: 'hu', name: 'Hungary', continent: 'Europe', coords: [47.1625, 19.5033] },
  { code: 'is', name: 'Iceland', continent: 'Europe', coords: [64.9631, -19.0208] },
  { code: 'ie', name: 'Ireland', continent: 'Europe', coords: [53.1424, -7.6921] },
  { code: 'it', name: 'Italy', continent: 'Europe', coords: [41.8719, 12.5674] },
  { code: 'xk', name: 'Kosovo', continent: 'Europe', coords: [42.6026, 20.9030] },
  { code: 'lv', name: 'Latvia', continent: 'Europe', coords: [56.8796, 24.6032] },
  { code: 'li', name: 'Liechtenstein', continent: 'Europe', coords: [47.1660, 9.5554], isSmall: true },
  { code: 'lt', name: 'Lithuania', continent: 'Europe', coords: [55.1694, 23.8813] },
  { code: 'lu', name: 'Luxembourg', continent: 'Europe', coords: [49.8153, 6.1296], isSmall: true },
  { code: 'mt', name: 'Malta', continent: 'Europe', coords: [35.9375, 14.3754], isSmall: true },
  { code: 'md', name: 'Moldova', continent: 'Europe', coords: [47.4116, 28.3699] },
  { code: 'mc', name: 'Monaco', continent: 'Europe', coords: [43.7384, 7.4246], isSmall: true },
  { code: 'me', name: 'Montenegro', continent: 'Europe', coords: [42.7087, 19.3744] },
  { code: 'nl', name: 'Netherlands', continent: 'Europe', coords: [52.1326, 5.2913] },
  { code: 'mk', name: 'North Macedonia', continent: 'Europe', coords: [41.6086, 21.7453] },
  { code: 'no', name: 'Norway', continent: 'Europe', coords: [60.4720, 8.4689] },
  { code: 'pl', name: 'Poland', continent: 'Europe', coords: [51.9194, 19.1451] },
  { code: 'pt', name: 'Portugal', continent: 'Europe', coords: [39.3999, -8.2245] },
  { code: 'ro', name: 'Romania', continent: 'Europe', coords: [45.9432, 24.9668] },
  { code: 'ru', name: 'Russia', continent: 'Europe', coords: [61.5240, 105.3188] },
  { code: 'sm', name: 'San Marino', continent: 'Europe', coords: [43.9424, 12.4578], isSmall: true },
  { code: 'rs', name: 'Serbia', continent: 'Europe', coords: [44.0165, 21.0059] },
  { code: 'sk', name: 'Slovakia', continent: 'Europe', coords: [48.6690, 19.6990] },
  { code: 'si', name: 'Slovenia', continent: 'Europe', coords: [46.1512, 14.9955] },
  { code: 'es', name: 'Spain', continent: 'Europe', coords: [40.4637, -3.7492] },
  { code: 'se', name: 'Sweden', continent: 'Europe', coords: [60.1282, 18.6435] },
  { code: 'ch', name: 'Switzerland', continent: 'Europe', coords: [46.8182, 8.2275] },
  { code: 'ua', name: 'Ukraine', continent: 'Europe', coords: [48.3794, 31.1656] },
  { code: 'gb', name: 'United Kingdom', continent: 'Europe', coords: [55.3781, -3.4360] },
  { code: 'va', name: 'Vatican City', continent: 'Europe', coords: [41.9029, 12.4534], isSmall: true },

  // --- North America & Caribbean (23 Sovereign Countries) ---
  { code: 'ag', name: 'Antigua and Barbuda', continent: 'North America', coords: [17.0608, -61.7964], isSmall: true },
  { code: 'bs', name: 'Bahamas', continent: 'North America', coords: [25.0343, -77.3963] },
  { code: 'bb', name: 'Barbados', continent: 'North America', coords: [13.1939, -59.5432], isSmall: true },
  { code: 'bz', name: 'Belize', continent: 'North America', coords: [17.1899, -88.4976] },
  { code: 'ca', name: 'Canada', continent: 'North America', coords: [56.1304, -106.3468] },
  { code: 'cr', name: 'Costa Rica', continent: 'North America', coords: [9.7489, -83.7534] },
  { code: 'cu', name: 'Cuba', continent: 'North America', coords: [21.5218, -77.7812] },
  { code: 'dm', name: 'Dominica', continent: 'North America', coords: [15.4150, -61.3710], isSmall: true },
  { code: 'do', name: 'Dominican Republic', continent: 'North America', coords: [18.7357, -70.1627] },
  { code: 'sv', name: 'El Salvador', continent: 'North America', coords: [13.7942, -88.8965] },
  { code: 'gd', name: 'Grenada', continent: 'North America', coords: [12.1165, -61.6790], isSmall: true },
  { code: 'gt', name: 'Guatemala', continent: 'North America', coords: [15.7835, -90.2308] },
  { code: 'ht', name: 'Haiti', continent: 'North America', coords: [18.9712, -72.2852] },
  { code: 'hn', name: 'Honduras', continent: 'North America', coords: [15.2000, -86.2419] },
  { code: 'jm', name: 'Jamaica', continent: 'North America', coords: [18.1096, -77.2975], isSmall: true },
  { code: 'mx', name: 'Mexico', continent: 'North America', coords: [23.6345, -102.5528] },
  { code: 'ni', name: 'Nicaragua', continent: 'North America', coords: [12.8654, -85.2072] },
  { code: 'pa', name: 'Panama', continent: 'North America', coords: [8.5380, -80.7821] },
  { code: 'kn', name: 'Saint Kitts and Nevis', continent: 'North America', coords: [17.3578, -62.7830], isSmall: true },
  { code: 'lc', name: 'Saint Lucia', continent: 'North America', coords: [13.9094, -60.9789], isSmall: true },
  { code: 'vc', name: 'Saint Vincent and the Grenadines', continent: 'North America', coords: [13.2528, -61.1971], isSmall: true },
  { code: 'tt', name: 'Trinidad and Tobago', continent: 'North America', coords: [10.6918, -61.2225], isSmall: true },
  { code: 'us', name: 'United States', continent: 'North America', coords: [37.0902, -95.7129] },

  // --- South America (12 Sovereign Countries) ---
  { code: 'ar', name: 'Argentina', continent: 'South America', coords: [-38.4161, -63.6167] },
  { code: 'bo', name: 'Bolivia', continent: 'South America', coords: [-16.2902, -63.5887] },
  { code: 'br', name: 'Brazil', continent: 'South America', coords: [-14.2350, -51.9253] },
  { code: 'cl', name: 'Chile', continent: 'South America', coords: [-35.6751, -71.5430] },
  { code: 'co', name: 'Colombia', continent: 'South America', coords: [4.5709, -74.2973] },
  { code: 'ec', name: 'Ecuador', continent: 'South America', coords: [-1.8312, -78.1834] },
  { code: 'gy', name: 'Guyana', continent: 'South America', coords: [4.8604, -58.9302] },
  { code: 'py', name: 'Paraguay', continent: 'South America', coords: [-23.4425, -58.4438] },
  { code: 'pe', name: 'Peru', continent: 'South America', coords: [-9.1899, -75.0152] },
  { code: 'sr', name: 'Suriname', continent: 'South America', coords: [3.9193, -56.0278] },
  { code: 'uy', name: 'Uruguay', continent: 'South America', coords: [-32.5228, -55.7658] },
  { code: 've', name: 'Venezuela', continent: 'South America', coords: [6.4238, -66.5897] },

  // --- Australia & Oceania (14 Sovereign Countries) ---
  { code: 'au', name: 'Australia', continent: 'Australia/Oceania', coords: [-25.2744, 133.7751] },
  { code: 'fj', name: 'Fiji', continent: 'Australia/Oceania', coords: [-17.7134, 178.0650], isSmall: true },
  { code: 'ki', name: 'Kiribati', continent: 'Australia/Oceania', coords: [1.4518, 172.9717], isSmall: true },
  { code: 'mh', name: 'Marshall Islands', continent: 'Australia/Oceania', coords: [7.1315, 171.1845], isSmall: true },
  { code: 'fm', name: 'Micronesia', continent: 'Australia/Oceania', coords: [7.4256, 150.5508], isSmall: true },
  { code: 'nr', name: 'Nauru', continent: 'Australia/Oceania', coords: [-0.5228, 166.9315], isSmall: true },
  { code: 'nz', name: 'New Zealand', continent: 'Australia/Oceania', coords: [-40.9006, 174.8860] },
  { code: 'pw', name: 'Palau', continent: 'Australia/Oceania', coords: [7.5150, 134.5825], isSmall: true },
  { code: 'pg', name: 'Papua New Guinea', continent: 'Australia/Oceania', coords: [-6.3150, 143.9555] },
  { code: 'ws', name: 'Samoa', continent: 'Australia/Oceania', coords: [-13.7590, -172.1046], isSmall: true },
  { code: 'sb', name: 'Solomon Islands', continent: 'Australia/Oceania', coords: [-9.6457, 160.1562], isSmall: true },
  { code: 'to', name: 'Tonga', continent: 'Australia/Oceania', coords: [-21.1790, -175.1982], isSmall: true },
  { code: 'tv', name: 'Tuvalu', continent: 'Australia/Oceania', coords: [-7.1095, 177.6493], isSmall: true },
  { code: 'vu', name: 'Vanuatu', continent: 'Australia/Oceania', coords: [-15.3767, 166.9592], isSmall: true }
];

// Fast Country to Continent Lookup Dictionary
const COUNTRY_TO_CONTINENT = {};
WORLD_FLAGS.forEach(c => {
  COUNTRY_TO_CONTINENT[c.name.toLowerCase()] = c.continent;
});

const SEED_QUESTIONS = [
  {
    id: "GEO-AS-001",
    continent: "Asia",
    batch: "Batch 1",
    difficulty: "Easy",
    topic: "Mountain Ranges",
    question: "Which mountain range contains Mount Everest, the highest peak above sea level on Earth?",
    optionA: "The Andes",
    optionB: "The Himalayas",
    optionC: "The Urals",
    optionD: "The Alps",
    correctAnswer: "B",
    explanation: "The Himalayas host Mount Everest at 8,848.86 m on the border of Nepal and China.",
    source: "Survey of Nepal & China Geodetic Survey",
    status: "Published",
    createdAt: "2026-01-10T08:00:00.000Z"
  },
  {
    id: "GEO-AF-001",
    continent: "Africa",
    batch: "Batch 1",
    difficulty: "Easy",
    topic: "Hydrography",
    question: "Which river is widely recognized as the longest river in Africa?",
    optionA: "Congo River",
    optionB: "Zambezi River",
    optionC: "Nile River",
    optionD: "Niger River",
    correctAnswer: "C",
    explanation: "The Nile River flows northward through northeastern Africa into the Mediterranean Sea.",
    source: "UNESCO World Water Assessment",
    status: "Published",
    createdAt: "2026-01-10T08:15:00.000Z"
  },
  {
    id: "GEO-EU-001",
    continent: "Europe",
    batch: "Batch 1",
    difficulty: "Medium",
    topic: "Physical Geography",
    question: "Which strait connects the Atlantic Ocean to the Mediterranean Sea and separates Spain from Morocco?",
    optionA: "Strait of Bosphorus",
    optionB: "Strait of Gibraltar",
    optionC: "Strait of Hormuz",
    optionD: "Strait of Malacca",
    correctAnswer: "B",
    explanation: "The Strait of Gibraltar is approximately 13 km wide at its narrowest point.",
    source: "International Hydrographic Organization",
    status: "Published",
    createdAt: "2026-01-10T08:30:00.000Z"
  }
];

/* ==========================================================================
   STORAGE ENGINE ADAPTER (FIRESTORE + DEDUPLICATION)
   ========================================================================== */
class StorageAdapter {
  constructor() {
    this.useFirestore = false;
    this.db = null;
    this.KEY_QUESTIONS = 'geoquiz_questions_store_v2';
    this.KEY_ATTEMPTS = 'geoquiz_attempts_store_v2';
    this.init();
  }

  init() {
    if (window.firebase && window.firebase.firestore && window.firebase.apps && window.firebase.apps.length > 0) {
      try {
        this.db = window.firebase.firestore();
        this.useFirestore = true;
        console.log('[StorageAdapter] Firebase Firestore active backend.');
      } catch (e) {
        console.warn('[StorageAdapter] Firestore fallback active.', e);
        this.useFirestore = false;
      }
    }
  }

  async getAllQuestions() {
    if (this.useFirestore) {
      try {
        const snap = await this.db.collection('questions').get();
        if (!snap.empty) {
          return snap.docs.map(doc => {
            const data = doc.data();
            return { id: doc.id, batch: data.batch || 'Batch 1', ...data };
          });
        }
      } catch (err) {
        console.warn('[StorageAdapter] Firestore read failed; loading local storage.', err);
      }
    }
    const raw = localStorage.getItem(this.KEY_QUESTIONS);
    const list = raw ? JSON.parse(raw) : SEED_QUESTIONS;
    return list.map(q => ({ batch: q.batch || 'Batch 1', ...q }));
  }

  async clearAllQuestions() {
    if (this.useFirestore) {
      try {
        const snap = await this.db.collection('questions').get();
        const batch = this.db.batch();
        snap.docs.forEach(doc => batch.delete(doc.ref));
        await batch.commit();
      } catch (err) {
        console.error('[StorageAdapter] Failed to clear Firestore questions:', err);
      }
    }
    localStorage.removeItem(this.KEY_QUESTIONS);
    return true;
  }

  async saveBatchQuestions(questions, purgeExisting = false) {
    if (purgeExisting) {
      await this.clearAllQuestions();
    }

    const existing = purgeExisting ? [] : await this.getAllQuestions();
    const map = new Map(existing.map(q => [q.id, q]));

    for (const q of questions) {
      map.set(q.id, q);
    }
    const merged = Array.from(map.values());

    if (this.useFirestore) {
      try {
        const CHUNK_SIZE = 400;
        for (let i = 0; i < questions.length; i += CHUNK_SIZE) {
          const chunk = questions.slice(i, i + CHUNK_SIZE);
          const batch = this.db.batch();
          for (const item of chunk) {
            const ref = this.db.collection('questions').doc(item.id);
            batch.set(ref, item);
          }
          await batch.commit();
        }
      } catch (err) {
        console.error('[StorageAdapter] Firestore batch error:', err);
      }
    }

    localStorage.setItem(this.KEY_QUESTIONS, JSON.stringify(merged));
    return { success: true, count: questions.length };
  }

  async saveQuestion(question) {
    if (this.useFirestore) {
      try {
        await this.db.collection('questions').doc(question.id).set(question);
      } catch (e) {
        console.warn(e);
      }
    }
    const list = await this.getAllQuestions();
    const idx = list.findIndex(q => q.id === question.id);
    if (idx >= 0) list[idx] = question;
    else list.push(question);
    localStorage.setItem(this.KEY_QUESTIONS, JSON.stringify(list));
    return question;
  }

  async deleteQuestion(id) {
    if (this.useFirestore) {
      try {
        await this.db.collection('questions').doc(id).delete();
      } catch (e) {
        console.error(e);
      }
    }
    const list = await this.getAllQuestions();
    const filtered = list.filter(q => q.id !== id);
    localStorage.setItem(this.KEY_QUESTIONS, JSON.stringify(filtered));
    return true;
  }

  async getAllAttempts() {
    let rawList = [];
    if (this.useFirestore) {
      try {
        const snap = await this.db.collection('attempts').orderBy('timestamp', 'desc').get();
        if (!snap.empty) {
          rawList = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        }
      } catch (err) {
        console.warn('[StorageAdapter] Firestore attempts error, fallback to local.', err);
      }
    }

    if (rawList.length === 0) {
      const raw = localStorage.getItem(this.KEY_ATTEMPTS);
      rawList = raw ? JSON.parse(raw) : [];
    }

    return this._deduplicateAttempts(rawList);
  }

  _deduplicateAttempts(attempts) {
    if (!attempts || attempts.length === 0) return [];
    const sorted = [...attempts].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    const unique = [];

    for (const cur of sorted) {
      const curDateStr = cur.formattedDate || new Date(cur.timestamp).toLocaleDateString();
      const isDuplicate = unique.some(prev => {
        const prevDateStr = prev.formattedDate || new Date(prev.timestamp).toLocaleDateString();
        return (
          prev.studentId === cur.studentId &&
          prev.type === cur.type &&
          prev.continent === cur.continent &&
          prev.correctCount === cur.correctCount &&
          prev.totalQuestions === cur.totalQuestions &&
          prevDateStr === curDateStr
        );
      });

      if (!isDuplicate) {
        unique.push(cur);
      }
    }
    return unique;
  }

  async saveAttempt(attempt) {
    if (this.useFirestore) {
      try {
        await this.db.collection('attempts').doc(attempt.id).set(attempt);
      } catch (e) {
        console.error(e);
      }
    }
    const raw = localStorage.getItem(this.KEY_ATTEMPTS);
    const list = raw ? JSON.parse(raw) : [];
    const updated = this._deduplicateAttempts([attempt, ...list]);
    localStorage.setItem(this.KEY_ATTEMPTS, JSON.stringify(updated));
    return attempt;
  }

  async purgeDuplicateAttempts() {
    if (this.useFirestore) {
      try {
        const snap = await this.db.collection('attempts').get();
        const seen = new Set();
        const batch = this.db.batch();
        let deleteCount = 0;

        snap.docs.forEach(doc => {
          const d = doc.data();
          const dDate = d.formattedDate || new Date(d.timestamp).toLocaleDateString();
          const key = `${d.studentId}_${d.type || 'qna'}_${d.continent}_${d.correctCount}_${d.totalQuestions}_${dDate}`;
          if (seen.has(key)) {
            batch.delete(doc.ref);
            deleteCount++;
          } else {
            seen.add(key);
          }
        });

        if (deleteCount > 0) {
          await batch.commit();
        }
      } catch (err) {
        console.error('Purge error:', err);
      }
    }
    localStorage.removeItem(this.KEY_ATTEMPTS);
    return true;
  }
}

/* ==========================================================================
   PERMISSIVE CSV INGESTION ENGINE
   ========================================================================== */
class PermissiveCsvEngine {
  static parse(text) {
    const rows = [];
    let currentRow = [];
    let currentField = '';
    let inQuotes = false;
    let i = 0;

    if (text.charCodeAt(0) === 0xFEFF) text = text.substring(1);

    while (i < text.length) {
      const char = text[i];
      const nextChar = text[i + 1];

      if (inQuotes) {
        if (char === '"') {
          if (nextChar === '"') {
            currentField += '"';
            i += 2;
            continue;
          } else {
            inQuotes = false;
            i++;
            continue;
          }
        } else {
          currentField += char;
          i++;
          continue;
        }
      } else {
        if (char === '"') {
          inQuotes = true;
          i++;
          continue;
        } else if (char === ',') {
          currentRow.push(currentField);
          currentField = '';
          i++;
          continue;
        } else if (char === '\r') {
          if (nextChar === '\n') i++;
          currentRow.push(currentField);
          rows.push(currentRow);
          currentRow = [];
          currentField = '';
          i++;
          continue;
        } else if (char === '\n') {
          currentRow.push(currentField);
          rows.push(currentRow);
          currentRow = [];
          currentField = '';
          i++;
          continue;
        } else {
          currentField += char;
          i++;
          continue;
        }
      }
    }
    if (currentField.length > 0 || currentRow.length > 0) {
      currentRow.push(currentField);
      rows.push(currentRow);
    }
    return rows;
  }

  static ingestAllRows(rawRows, batchTag = 'Batch 2') {
    if (!rawRows || rawRows.length === 0) return [];

    let headerIndex = -1;
    const headerMap = {};

    for (let r = 0; r < Math.min(rawRows.length, 5); r++) {
      const row = rawRows[r].map(c => String(c).trim().toLowerCase());
      if (row.some(c => c.includes('question') || c.includes('continent') || c.includes('option'))) {
        headerIndex = r;
        row.forEach((colName, idx) => {
          if (colName.includes('id')) headerMap.id = idx;
          else if (colName.includes('batch')) headerMap.batch = idx;
          else if (colName.includes('continent') || colName.includes('scope')) headerMap.continent = idx;
          else if (colName.includes('diff')) headerMap.difficulty = idx;
          else if (colName.includes('topic') || colName.includes('cat')) headerMap.topic = idx;
          else if (colName.includes('question') || colName.includes('text')) headerMap.question = idx;
          else if (colName.includes('optiona') || colName === 'a') headerMap.optA = idx;
          else if (colName.includes('optionb') || colName === 'b') headerMap.optB = idx;
          else if (colName.includes('optionc') || colName === 'c') headerMap.optC = idx;
          else if (colName.includes('optiond') || colName === 'd') headerMap.optD = idx;
          else if (colName.includes('correct') || colName.includes('key') || colName.includes('ans')) headerMap.correct = idx;
          else if (colName.includes('exp')) headerMap.explanation = idx;
          else if (colName.includes('source')) headerMap.source = idx;
          else if (colName.includes('status')) headerMap.status = idx;
        });
        break;
      }
    }

    const startRow = headerIndex >= 0 ? headerIndex + 1 : 0;
    const result = [];

    for (let i = startRow; i < rawRows.length; i++) {
      const row = rawRows[i];
      if (!row || row.every(cell => String(cell).trim() === '')) continue;

      const getVal = (colKey, fallbackIdx) => {
        const pos = headerMap[colKey] !== undefined ? headerMap[colKey] : fallbackIdx;
        return (pos !== undefined && row[pos] !== undefined) ? String(row[pos]).trim() : '';
      };

      const qText = getVal('question', 4) || getVal('question', 0) || `Question ${i + 1}`;
      const optA = getVal('optA', 5) || getVal('optA', 1) || 'True';
      const optB = getVal('optB', 6) || getVal('optB', 2) || 'False';
      const optC = getVal('optC', 7) || getVal('optC', 3) || 'None of the above';
      const optD = getVal('optD', 8) || getVal('optD', 4) || 'All of the above';

      let correctKey = (getVal('correct', 9) || 'A').toUpperCase().charAt(0);
      if (!['A', 'B', 'C', 'D'].includes(correctKey)) correctKey = 'A';

      let continent = getVal('continent', 1);
      if (!VALID_CONTINENTS.some(c => c.toLowerCase() === continent.toLowerCase())) {
        continent = 'Whole World';
      }

      let difficulty = getVal('difficulty', 2);
      if (!['Easy', 'Medium', 'Hard'].some(d => d.toLowerCase() === difficulty.toLowerCase())) {
        difficulty = 'Medium';
      }

      const assignedBatch = getVal('batch') || batchTag || 'Batch 2';
      const id = getVal('id', 0) || `GEO-${assignedBatch.replace(/\s+/g, '')}-${Date.now().toString(36)}-${i}`;
      const topic = getVal('topic', 3) || 'General Geography';
      const explanation = getVal('explanation', 10) || '';
      const source = getVal('source', 11) || 'CSV Bulk Import';
      const status = getVal('status', 12) || 'Published';

      result.push({
        id,
        batch: assignedBatch,
        continent,
        difficulty,
        topic,
        question: qText,
        optionA: optA,
        optionB: optB,
        optionC: optC,
        optionD: optD,
        correctAnswer: correctKey,
        explanation,
        source,
        status: ['Published', 'Draft', 'Archived'].includes(status) ? status : 'Published',
        createdAt: new Date().toISOString()
      });
    }

    return result;
  }

  static stringify(questions) {
    const headers = [
      'id', 'batch', 'continent', 'difficulty', 'topic', 'question',
      'optionA', 'optionB', 'optionC', 'optionD',
      'correctAnswer', 'explanation', 'source', 'status'
    ];
    const lines = [headers.join(',')];
    for (const q of questions) {
      const row = headers.map(h => {
        let val = q[h] || '';
        val = String(val).replace(/"/g, '""');
        if (val.search(/("|,|\n|\r)/g) >= 0) val = `"${val}"`;
        return val;
      });
      lines.push(row.join(','));
    }
    return lines.join('\r\n');
  }
}

/* ==========================================================================
   MAIN APPLICATION CONTROLLER
   ========================================================================== */
class GeoQuizApp {
  constructor() {
    this.storage = new StorageAdapter();
    this.currentUser = null;

    this.questions = [];
    this.attempts = [];

    this.qbState = {
      page: 1,
      pageSize: 25,
      search: '',
      continent: 'All',
      batch: 'All',
      difficulty: 'All',
      status: 'All'
    };

    this.stagedCsvQuestions = [];

    // Standard Q&A Quiz Session
    this.quizSession = {
      active: false,
      sessionId: null,
      sessionFinalized: false,
      mode: 'practice',
      continent: 'Whole World',
      batch: 'All',
      difficulty: 'All',
      topic: 'All',
      questions: [],
      currentIndex: 0,
      userAnswers: {},
      startTime: null,
      secondsRemaining: 0,
      timerInterval: null
    };

    // Flag Quiz Session (All 197 Countries)
    this.flagSession = {
      active: false,
      continent: 'Whole World',
      items: [],
      currentIndex: 0,
      score: 0,
      timerSec: 15,
      secondsRemaining: 15,
      timerInterval: null,
      answered: false,
      snapshots: []
    };

    // Leaflet Seterra-Style Map Pointing Session
    this.mapSession = {
      active: false,
      scope: 'Continents',
      leafletMap: null,
      geoJsonLayer: null,
      markerGroup: null,
      cachedWorldGeoJson: null,
      targets: [],
      currentTargetIndex: 0,
      attemptsOnCurrent: 0,
      totalCompleted: 0,
      correctPoints: 0,
      secondsElapsed: 0,
      timerInterval: null,
      countryLayersByName: {},
      beaconMarkersByName: {},
      hintInterval: null,
      snapshots: []
    };

    this.init();
  }

  async init() {
    this.bindEvents();
    await this.refreshData();
    this.populateBatchDropdowns();
    this.populateTopicDropdown();
    this.checkSession();
    this.renderQuestionBank();
    this.renderAdminOverview();
    this.renderLeaderboard();
    this.updateAvailabilityBadge();
    this.updateDownloadDialogCounts();
  }

  async refreshData() {
    this.questions = await this.storage.getAllQuestions();
    this.attempts = await this.storage.getAllAttempts();
  }

  showToast(msg, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  }

  checkSession() {
    const raw = localStorage.getItem('geoquiz_session_user');
    if (raw) {
      this.currentUser = JSON.parse(raw);
      this.updateUserSessionUI();
    } else {
      this.openAuthModal();
    }
  }

  openAuthModal() {
    document.getElementById('authModal').classList.remove('hidden');
  }

  handleLoginSubmit() {
    const role = document.getElementById('authRole').value;
    const name = document.getElementById('authStudentName').value.trim();
    const id = document.getElementById('authStudentId').value.trim();
    const pwd = document.getElementById('authPassword').value.trim();

    if (!name || !id || !pwd) {
      this.showToast('Please provide your name, ID, and password.', 'error');
      return;
    }

    if (role === 'admin' && pwd !== 'admin123') {
      this.showToast('Invalid administrator password.', 'error');
      return;
    }

    this.currentUser = { name, id, role };
    localStorage.setItem('geoquiz_session_user', JSON.stringify(this.currentUser));

    this.updateUserSessionUI();
    document.getElementById('authModal').classList.add('hidden');
    this.showToast(`Authenticated as ${name} (${role === 'admin' ? 'Teacher/Admin' : 'Student'})`, 'success');

    if (role === 'admin') this.switchPortal('admin');
    else this.switchPortal('student');

    this.renderStudentDashboard();
    this.renderLeaderboard();
  }

  handleLogout() {
    this.currentUser = null;
    localStorage.removeItem('geoquiz_session_user');
    this.updateUserSessionUI();
    this.openAuthModal();
  }

  updateUserSessionUI() {
    const nameEl = document.getElementById('navUserName');
    const roleEl = document.getElementById('navUserRole');
    const avatarEl = document.getElementById('navAvatar');
    const btnAuth = document.getElementById('btnAuthAction');

    if (this.currentUser) {
      nameEl.textContent = this.currentUser.name;
      roleEl.textContent = `${this.currentUser.role === 'admin' ? 'Teacher/Admin' : 'Student'} (${this.currentUser.id})`;
      avatarEl.textContent = this.currentUser.name.charAt(0).toUpperCase();
      btnAuth.textContent = 'Sign Out';
    } else {
      nameEl.textContent = 'Not Signed In';
      roleEl.textContent = 'Please authenticate';
      avatarEl.textContent = '?';
      btnAuth.textContent = 'Sign In';
    }
  }

  populateBatchDropdowns() {
    const batches = Array.from(new Set(this.questions.map(q => q.batch || 'Batch 1'))).sort();
    
    // Quiz Setup Batch
    const setupBatch = document.getElementById('setupBatch');
    if (setupBatch) {
      const prev = setupBatch.value;
      setupBatch.innerHTML = '<option value="All">All Questions (All Batches)</option>';
      batches.forEach(b => {
        const opt = document.createElement('option');
        opt.value = b;
        opt.textContent = `🏷️ ${b}`;
        setupBatch.appendChild(opt);
      });
      if (batches.includes(prev)) setupBatch.value = prev;
    }

    // Admin QB Filter Batch
    const qbFilterBatch = document.getElementById('qbFilterBatch');
    if (qbFilterBatch) {
      const prev = qbFilterBatch.value;
      qbFilterBatch.innerHTML = '<option value="All">All Batches</option>';
      batches.forEach(b => {
        const opt = document.createElement('option');
        opt.value = b;
        opt.textContent = b;
        qbFilterBatch.appendChild(opt);
      });
      if (batches.includes(prev)) qbFilterBatch.value = prev;
    }

    // Download Modal Batch Dropdown
    const dlFilterBatch = document.getElementById('dlFilterBatch');
    if (dlFilterBatch) {
      const prev = dlFilterBatch.value;
      dlFilterBatch.innerHTML = '<option value="All">All Questions (All Batches)</option>';
      batches.forEach(b => {
        const opt = document.createElement('option');
        opt.value = b;
        opt.textContent = `🏷️ ${b}`;
        dlFilterBatch.appendChild(opt);
      });
      if (batches.includes(prev)) dlFilterBatch.value = prev;
    }
  }

  populateTopicDropdown() {
    const topicSelect = document.getElementById('setupTopic');
    if (!topicSelect) return;

    const selectedContinent = document.getElementById('setupContinent')?.value || 'Whole World';
    const selectedBatch = document.getElementById('setupBatch')?.value || 'All';

    const matchingQuestions = this.questions.filter(q => {
      const isPub = q.status === 'Published';
      const matchCont = (selectedContinent === 'Whole World' || selectedContinent === 'All') 
        ? true 
        : q.continent === selectedContinent;
      const matchBatch = (selectedBatch === 'All') ? true : (q.batch === selectedBatch);
      return isPub && matchCont && matchBatch;
    });

    const uniqueTopics = Array.from(
      new Set(matchingQuestions.map(q => q.topic).filter(Boolean))
    ).sort();

    const previousValue = topicSelect.value;
    topicSelect.innerHTML = '<option value="All">All Topics</option>';

    uniqueTopics.forEach(top => {
      const opt = document.createElement('option');
      opt.value = top;
      opt.textContent = top;
      topicSelect.appendChild(opt);
    });

    if (uniqueTopics.includes(previousValue)) {
      topicSelect.value = previousValue;
    } else {
      topicSelect.value = 'All';
    }
  }

  /* ==========================================================================
     STUDY SHEET DOWNLOAD MODAL LOGIC (CUSTOM Q&A FORMAT)
     ========================================================================== */
  openDownloadModal() {
    this.populateBatchDropdowns();
    this.populateDownloadTopicDropdown();
    this.updateDownloadDialogCounts();
    document.getElementById('downloadQuestionsModal').classList.remove('hidden');
  }

  populateDownloadTopicDropdown() {
    const topicSelect = document.getElementById('dlFilterTopic');
    if (!topicSelect) return;

    const selectedContinent = document.getElementById('dlFilterContinent')?.value || 'Whole World';
    const selectedBatch = document.getElementById('dlFilterBatch')?.value || 'All';

    const matchingQuestions = this.questions.filter(q => {
      const matchCont = (selectedContinent === 'Whole World' || selectedContinent === 'All') 
        ? true 
        : q.continent === selectedContinent;
      const matchBatch = (selectedBatch === 'All') ? true : (q.batch === selectedBatch);
      return matchCont && matchBatch;
    });

    const uniqueTopics = Array.from(
      new Set(matchingQuestions.map(q => q.topic).filter(Boolean))
    ).sort();

    const previousValue = topicSelect.value;
    topicSelect.innerHTML = '<option value="All">All Topics</option>';

    uniqueTopics.forEach(top => {
      const opt = document.createElement('option');
      opt.value = top;
      opt.textContent = top;
      topicSelect.appendChild(opt);
    });

    if (uniqueTopics.includes(previousValue)) {
      topicSelect.value = previousValue;
    } else {
      topicSelect.value = 'All';
    }
  }

  getDownloadFilteredQuestions() {
    const continent = document.getElementById('dlFilterContinent')?.value || 'Whole World';
    const batch = document.getElementById('dlFilterBatch')?.value || 'All';
    const difficulty = document.getElementById('dlFilterDifficulty')?.value || 'All';
    const topic = document.getElementById('dlFilterTopic')?.value || 'All';

    return this.questions.filter(q => {
      const matchCont = (continent === 'Whole World' || continent === 'All') ? true : q.continent === continent;
      const matchBatch = (batch === 'All') ? true : (q.batch || 'Batch 1') === batch;
      const matchDiff = (difficulty === 'All') ? true : q.difficulty === difficulty;
      const matchTopic = (topic === 'All') ? true : q.topic === topic;
      return matchCont && matchBatch && matchDiff && matchTopic;
    });
  }

  updateDownloadDialogCounts() {
    const badge = document.getElementById('dlReadyCountBadge');
    if (!badge) return;
    const count = this.getDownloadFilteredQuestions().length;
    badge.textContent = `${count} Questions`;
    badge.className = count > 0 ? 'badge badge-success' : 'badge badge-danger';
  }

  generateFormattedQnAText(questions) {
    if (!questions || questions.length === 0) return 'No questions found matching criteria.';

    const lines = [];
    questions.forEach((q, idx) => {
      // Find full text of the correct answer
      const key = (q.correctAnswer || 'A').toUpperCase().charAt(0);
      let ansText = q['option' + key] || q.correctAnswer;
      if (typeof ansText === 'string') ansText = ansText.trim();

      lines.push(`Q${idx + 1}. ${q.question}`);
      lines.push(`Ans. ${ansText}`);
      lines.push(''); // blank line between questions
    });

    return lines.join('\r\n');
  }

  downloadQnATextFile() {
    const questions = this.getDownloadFilteredQuestions();
    if (questions.length === 0) {
      this.showToast('No questions found matching the selected filters.', 'warning');
      return;
    }

    const content = this.generateFormattedQnAText(questions);
    const continent = document.getElementById('dlFilterContinent').value.replace(/\s+/g, '_');
    const batch = document.getElementById('dlFilterBatch').value.replace(/\s+/g, '_');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `GeoQuiz_${continent}_${batch}_Questions.txt`;
    link.click();

    this.showToast(`Exported ${questions.length} questions in Q&A format!`, 'success');
    document.getElementById('downloadQuestionsModal').classList.add('hidden');
  }

  copyQnATextToClipboard() {
    const questions = this.getDownloadFilteredQuestions();
    if (questions.length === 0) {
      this.showToast('No questions found to copy.', 'warning');
      return;
    }

    const content = this.generateFormattedQnAText(questions);
    navigator.clipboard.writeText(content).then(() => {
      this.showToast(`Copied ${questions.length} formatted questions to clipboard!`, 'success');
    }).catch(err => {
      this.showToast('Clipboard copy failed: ' + err, 'error');
    });
  }

  bindEvents() {
    // Portal Navigation
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const portal = e.target.dataset.portal;
        if (portal === 'admin' && (!this.currentUser || this.currentUser.role !== 'admin')) {
          this.showToast('Administrator privileges required. Sign in as Admin.', 'error');
          this.openAuthModal();
          return;
        }
        this.switchPortal(portal);
      });
    });

    // Sub Navigation
    document.querySelectorAll('.sub-nav .sub-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const subview = e.target.dataset.subview;
        const parentPortal = e.target.closest('.portal-view');
        this.switchSubView(parentPortal, subview, e.target);
      });
    });

    // Auth Actions
    document.getElementById('btnAuthAction')?.addEventListener('click', () => {
      if (this.currentUser) this.handleLogout();
      else this.openAuthModal();
    });
    document.getElementById('btnCloseAuthModal')?.addEventListener('click', () => {
      if (!this.currentUser) this.showToast('Login is required to access the platform.', 'warning');
      else document.getElementById('authModal').classList.add('hidden');
    });
    document.getElementById('authForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleLoginSubmit();
    });

    // Custom Count Input Reveal
    const countSelect = document.getElementById('setupCount');
    const customCountInput = document.getElementById('setupCustomCount');
    countSelect?.addEventListener('change', () => {
      if (countSelect.value === 'custom') {
        customCountInput.classList.remove('hidden');
        customCountInput.focus();
      } else {
        customCountInput.classList.add('hidden');
      }
      this.updateAvailabilityBadge();
    });
    customCountInput?.addEventListener('input', () => this.updateAvailabilityBadge());

    // Filter Change Handlers
    document.getElementById('setupContinent')?.addEventListener('change', () => {
      this.populateTopicDropdown();
      this.updateAvailabilityBadge();
    });
    document.getElementById('setupBatch')?.addEventListener('change', () => {
      this.populateTopicDropdown();
      this.updateAvailabilityBadge();
    });
    ['setupDifficulty', 'setupTopic'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', () => this.updateAvailabilityBadge());
    });

    // Download Modal Listeners
    document.querySelectorAll('.btn-open-download-modal').forEach(btn => {
      btn.addEventListener('click', () => this.openDownloadModal());
    });
    document.getElementById('btnCloseDownloadModal')?.addEventListener('click', () => {
      document.getElementById('downloadQuestionsModal').classList.add('hidden');
    });
    document.getElementById('btnCancelDownloadModal')?.addEventListener('click', () => {
      document.getElementById('downloadQuestionsModal').classList.add('hidden');
    });
    document.getElementById('dlFilterContinent')?.addEventListener('change', () => {
      this.populateDownloadTopicDropdown();
      this.updateDownloadDialogCounts();
    });
    document.getElementById('dlFilterBatch')?.addEventListener('change', () => {
      this.populateDownloadTopicDropdown();
      this.updateDownloadDialogCounts();
    });
    document.getElementById('dlFilterDifficulty')?.addEventListener('change', () => {
      this.updateDownloadDialogCounts();
    });
    document.getElementById('dlFilterTopic')?.addEventListener('change', () => {
      this.updateDownloadDialogCounts();
    });
    document.getElementById('btnExecuteDownloadTxt')?.addEventListener('click', () => {
      this.downloadQnATextFile();
    });
    document.getElementById('btnCopyDownloadText')?.addEventListener('click', () => {
      this.copyQnATextToClipboard();
    });

    // Standard Quiz Launch & Actions
    document.getElementById('quizSetupForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.startAssessment();
    });
    document.getElementById('btnNextQuestion')?.addEventListener('click', () => this.handleNextQuestion());
    document.getElementById('btnPrevQuestion')?.addEventListener('click', () => this.handlePrevQuestion());
    document.getElementById('btnSubmitExam')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.confirmSubmitExam();
    });

    // Flag Quiz Form Submission & Next
    document.getElementById('flagSetupForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.startFlagQuiz();
    });
    document.getElementById('btnNextFlag')?.addEventListener('click', () => this.handleNextFlag());

    // Map Pointing Form Submission & Actions
    document.getElementById('mapSetupForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.startMapPointing();
    });
    document.getElementById('btnSkipMapTarget')?.addEventListener('click', () => this.skipMapTarget());
    document.getElementById('btnExitMapArena')?.addEventListener('click', () => this.exitMapPointing());

    // Admin Quick Launch Buttons
    document.getElementById('btnAdminLaunchFlag')?.addEventListener('click', () => {
      this.switchPortal('student');
      this.switchSubView(document.getElementById('portalStudent'), 'flagSetup', document.querySelector('[data-subview="flagSetup"]'));
    });
    document.getElementById('btnAdminLaunchMap')?.addEventListener('click', () => {
      this.switchPortal('student');
      this.switchSubView(document.getElementById('portalStudent'), 'mapSetup', document.querySelector('[data-subview="mapSetup"]'));
    });

    // Results Actions
    document.getElementById('btnRetakeQuiz')?.addEventListener('click', () => {
      this.switchSubView(document.getElementById('portalStudent'), 'quizSetup', document.querySelector('[data-subview="quizSetup"]'));
    });
    document.getElementById('btnGoToDashboard')?.addEventListener('click', () => {
      this.switchSubView(document.getElementById('portalStudent'), 'studentDashboard', document.querySelector('[data-subview="studentDashboard"]'));
    });

    // Leaderboard Refresh & Cleanup
    document.getElementById('btnRefreshLeaderboard')?.addEventListener('click', async () => {
      await this.refreshData();
      this.renderLeaderboard();
      this.showToast('Leaderboard refreshed.', 'info');
    });

    document.getElementById('btnPurgeDuplicateAttempts')?.addEventListener('click', async () => {
      const btn = document.getElementById('btnPurgeDuplicateAttempts');
      btn.disabled = true;
      btn.textContent = 'Cleaning...';
      await this.storage.purgeDuplicateAttempts();
      await this.refreshData();
      this.renderAdminOverview();
      this.renderStudentDashboard();
      this.renderLeaderboard();
      btn.disabled = false;
      btn.textContent = '🧹 Clean Database Duplicates';
      this.showToast('Duplicate attempts removed!', 'success');
    });

    // Question Bank Filters & Pagination
    document.getElementById('qbSearchInput')?.addEventListener('input', (e) => {
      this.qbState.search = e.target.value.trim().toLowerCase();
      this.qbState.page = 1;
      this.renderQuestionBank();
    });
    document.getElementById('qbFilterContinent')?.addEventListener('change', (e) => {
      this.qbState.continent = e.target.value;
      this.qbState.page = 1;
      this.renderQuestionBank();
    });
    document.getElementById('qbFilterBatch')?.addEventListener('change', (e) => {
      this.qbState.batch = e.target.value;
      this.qbState.page = 1;
      this.renderQuestionBank();
    });
    document.getElementById('qbFilterDifficulty')?.addEventListener('change', (e) => {
      this.qbState.difficulty = e.target.value;
      this.qbState.page = 1;
      this.renderQuestionBank();
    });
    document.getElementById('qbFilterStatus')?.addEventListener('change', (e) => {
      this.qbState.status = e.target.value;
      this.qbState.page = 1;
      this.renderQuestionBank();
    });
    document.getElementById('qbPageSize')?.addEventListener('change', (e) => {
      this.qbState.pageSize = parseInt(e.target.value, 10);
      this.qbState.page = 1;
      this.renderQuestionBank();
    });
    document.getElementById('pgPrevBtn')?.addEventListener('click', () => {
      if (this.qbState.page > 1) { this.qbState.page--; this.renderQuestionBank(); }
    });
    document.getElementById('pgNextBtn')?.addEventListener('click', () => {
      this.qbState.page++;
      this.renderQuestionBank();
    });
    document.getElementById('pgJumpBtn')?.addEventListener('click', () => {
      const target = parseInt(document.getElementById('pgJumpInput').value, 10);
      if (!isNaN(target) && target >= 1) {
        this.qbState.page = target;
        this.renderQuestionBank();
      }
    });

    // CSV Modal Handlers
    document.getElementById('btnOpenCsvModal')?.addEventListener('click', () => {
      this.stagedCsvQuestions = [];
      document.getElementById('csvFileInput').value = '';
      document.getElementById('csvPreviewSection').classList.add('hidden');
      document.getElementById('btnConfirmImport').disabled = true;
      const purgeBtn = document.getElementById('btnPurgeAndImport');
      if (purgeBtn) purgeBtn.disabled = true;
      document.getElementById('csvImportModal').classList.remove('hidden');
    });
    document.getElementById('btnCloseCsvModal')?.addEventListener('click', () => document.getElementById('csvImportModal').classList.add('hidden'));
    document.getElementById('btnCancelCsvImport')?.addEventListener('click', () => document.getElementById('csvImportModal').classList.add('hidden'));
    document.getElementById('csvFileInput')?.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) this.processPermissiveCsv(file);
    });

    document.getElementById('btnConfirmImport')?.addEventListener('click', () => this.commitCsvImport(false));
    document.getElementById('btnPurgeAndImport')?.addEventListener('click', () => {
      if (confirm("WARNING: This will permanently delete ALL existing questions and replace them entirely with the new CSV. Proceed?")) {
        this.commitCsvImport(true);
      }
    });

    document.getElementById('btnExportCsv')?.addEventListener('click', () => this.exportQuestionBankCsv());
    document.getElementById('btnOpenAddModal')?.addEventListener('click', () => this.openQuestionModal());
    document.getElementById('btnCloseQModal')?.addEventListener('click', () => document.getElementById('questionModal').classList.add('hidden'));
    document.getElementById('btnCancelQModal')?.addEventListener('click', () => document.getElementById('questionModal').classList.add('hidden'));
    document.getElementById('questionForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.saveSingleQuestion();
    });

    document.getElementById('btnCloseAttemptModal')?.addEventListener('click', () => document.getElementById('attemptDetailModal').classList.add('hidden'));
    document.getElementById('btnCloseAttemptModalFooter')?.addEventListener('click', () => document.getElementById('attemptDetailModal').classList.add('hidden'));
  }

  switchPortal(portalName) {
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.portal-view').forEach(p => p.classList.add('hidden'));

    if (portalName === 'student') {
      document.getElementById('btnNavStudent').classList.add('active');
      document.getElementById('portalStudent').classList.remove('hidden');
      this.renderStudentDashboard();
      this.renderLeaderboard();
    } else {
      document.getElementById('btnNavAdmin').classList.add('active');
      document.getElementById('portalAdmin').classList.remove('hidden');
      this.renderAdminOverview();
      this.renderQuestionBank();
    }
  }

  switchSubView(parentPortal, subviewName, tabElement) {
    parentPortal.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
    parentPortal.querySelectorAll('.sub-view-pane').forEach(p => p.classList.add('hidden'));

    if (tabElement) tabElement.classList.add('active');
    const target = document.getElementById('subView' + subviewName.charAt(0).toUpperCase() + subviewName.slice(1));
    if (target) target.classList.remove('hidden');

    if (subviewName === 'leaderboard') this.renderLeaderboard();
    if (subviewName === 'studentDashboard') this.renderStudentDashboard();
    if (subviewName === 'adminOverview') this.renderAdminOverview();
    if (subviewName === 'adminQuestionBank') this.renderQuestionBank();
    if (subviewName === 'adminStudentMonitoring') this.renderAdminOverview();
  }

  /* ==========================================================================
     FLAG QUIZ MODULE (EXPANDED TO ALL 197 SOVEREIGN COUNTRIES)
     ========================================================================== */
  startFlagQuiz() {
    if (!this.currentUser) {
      this.showToast('Please authenticate before launching the Flag Quiz.', 'error');
      this.openAuthModal();
      return;
    }

    const continent = document.getElementById('flagContinent').value;
    const countVal = document.getElementById('flagCount').value;
    const timerSec = parseInt(document.getElementById('flagTimerLimit').value, 10);

    let pool = WORLD_FLAGS.filter(f => (continent === 'Whole World' ? true : f.continent === continent));
    if (pool.length < 4) pool = WORLD_FLAGS;

    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const count = countVal === 'all' ? shuffled.length : Math.min(parseInt(countVal, 10), shuffled.length);
    const selected = shuffled.slice(0, count);

    this.flagSession = {
      active: true,
      continent,
      items: selected,
      currentIndex: 0,
      score: 0,
      timerSec,
      secondsRemaining: timerSec,
      timerInterval: null,
      answered: false,
      snapshots: []
    };

    document.querySelectorAll('.sub-view-pane').forEach(p => p.classList.add('hidden'));
    document.getElementById('subViewFlagArena').classList.remove('hidden');

    document.getElementById('flagTotalCount').textContent = selected.length;
    document.getElementById('flagLiveScore').textContent = '0';

    this.renderCurrentFlag();
  }

  renderCurrentFlag() {
    const { items, currentIndex, timerSec } = this.flagSession;
    const current = items[currentIndex];

    this.flagSession.answered = false;
    document.getElementById('btnNextFlag').disabled = true;
    document.getElementById('flagCurrentIndex').textContent = currentIndex + 1;
    document.getElementById('flagTimesUpLabel').classList.remove('active');

    const img = document.getElementById('flagDisplayImg');
    img.src = `https://flagcdn.com/w640/${current.code}.png`;

    const poolForDistractors = WORLD_FLAGS.filter(f => f.code !== current.code);
    const distractors = poolForDistractors
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(f => f.name);

    const options = [current.name, ...distractors].sort(() => 0.5 - Math.random());

    const grid = document.getElementById('flagOptionsGrid');
    grid.innerHTML = '';

    options.forEach(optName => {
      const btn = document.createElement('button');
      btn.className = 'flag-option-btn';
      btn.textContent = optName;
      btn.addEventListener('click', () => this.handleFlagChoice(optName, current.name));
      grid.appendChild(btn);
    });

    if (timerSec > 0) {
      this.flagSession.secondsRemaining = timerSec;
      const badge = document.getElementById('flagTimerBadge');
      badge.textContent = timerSec;
      if (this.flagSession.timerInterval) clearInterval(this.flagSession.timerInterval);

      this.flagSession.timerInterval = setInterval(() => {
        this.flagSession.secondsRemaining--;
        badge.textContent = this.flagSession.secondsRemaining;

        if (this.flagSession.secondsRemaining <= 0) {
          clearInterval(this.flagSession.timerInterval);
          this.handleFlagTimeout(current.name);
        }
      }, 1000);
    } else {
      document.getElementById('flagTimerContainer').style.display = 'none';
    }
  }

  handleFlagChoice(chosenName, correctName) {
    if (this.flagSession.answered) return;
    this.flagSession.answered = true;
    if (this.flagSession.timerInterval) clearInterval(this.flagSession.timerInterval);

    const isCorrect = (chosenName === correctName);
    if (isCorrect) {
      this.flagSession.score++;
      document.getElementById('flagLiveScore').textContent = this.flagSession.score;
    }

    const currentItem = this.flagSession.items[this.flagSession.currentIndex];
    this.flagSession.snapshots.push({
      questionText: `Identify flag of ${currentItem.name}`,
      selectedAnswer: chosenName,
      correctAnswer: correctName,
      isCorrect
    });

    document.querySelectorAll('.flag-option-btn').forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correctName) {
        btn.classList.add('selected-correct');
      } else if (btn.textContent === chosenName && !isCorrect) {
        btn.classList.add('selected-incorrect');
      }
    });

    document.getElementById('btnNextFlag').disabled = false;
  }

  handleFlagTimeout(correctName) {
    if (this.flagSession.answered) return;
    this.flagSession.answered = true;
    document.getElementById('flagTimesUpLabel').classList.add('active');

    const currentItem = this.flagSession.items[this.flagSession.currentIndex];
    this.flagSession.snapshots.push({
      questionText: `Identify flag of ${currentItem.name}`,
      selectedAnswer: 'Timed Out',
      correctAnswer: correctName,
      isCorrect: false
    });

    document.querySelectorAll('.flag-option-btn').forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correctName) {
        btn.classList.add('revealed-correct');
      }
    });
    document.getElementById('btnNextFlag').disabled = false;
  }

  handleNextFlag() {
    if (this.flagSession.currentIndex < this.flagSession.items.length - 1) {
      this.flagSession.currentIndex++;
      this.renderCurrentFlag();
    } else {
      this.finalizeFlagQuiz();
    }
  }

  // Instant optimistic submit for Flag Quiz
  finalizeFlagQuiz() {
    if (this.flagSession.timerInterval) clearInterval(this.flagSession.timerInterval);

    const total = this.flagSession.items.length;
    const correct = this.flagSession.score;
    const accuracyPct = Math.round((correct / total) * 100);

    const attempt = {
      id: `ATT-FLAG-${Date.now().toString(36)}`,
      studentId: this.currentUser.id,
      studentName: this.currentUser.name,
      userRole: this.currentUser.role,
      type: '🚩 Flag Quiz',
      mode: 'Flag Challenge',
      continent: this.flagSession.continent,
      difficulty: 'Medium',
      totalQuestions: total,
      correctCount: correct,
      accuracyPct,
      durationSeconds: total * 15,
      timestamp: new Date().toISOString(),
      formattedDate: new Date().toLocaleDateString(),
      formattedTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      snapshots: this.flagSession.snapshots
    };

    // Instant local UI render
    this.attempts.unshift(attempt);
    this.renderResultsScreen(attempt);
    this.renderLeaderboard();
    this.renderStudentDashboard();

    // Async background database save
    this.storage.saveAttempt(attempt).catch(err => console.error('Background flag attempt save error:', err));
  }

  /* ==========================================================================
     HIGH-PRECISION SETERRA MAP POINTING (WITH CONTINENT ISOLATION & BEACONS)
     ========================================================================== */
  normalizeName(name) {
    if (!name) return '';
    const clean = String(name).trim().toLowerCase();
    const map = {
      'united states of america': 'united states',
      'usa': 'united states',
      'czechia': 'czech republic',
      'russian federation': 'russia',
      'dem. rep. congo': 'dr congo',
      'democratic republic of the congo': 'dr congo',
      'congo': 'republic of the congo',
      'côte d\'ivoire': 'ivory coast',
      'cote d\'ivoire': 'ivory coast',
      'swaziland': 'eswatini',
      'macedonia': 'north macedonia',
      'burma': 'myanmar',
      'korea, republic of': 'south korea',
      'korea, democratic people\'s republic of': 'north korea',
      'syrian arab republic': 'syria',
      'iran, islamic republic of': 'iran',
      'lao people\'s democratic republic': 'laos',
      'viet nam': 'vietnam',
      'tanzania, united republic of': 'tanzania'
    };
    return map[clean] || clean;
  }

  async fetchWorldGeoJson() {
    if (this.mapSession.cachedWorldGeoJson) return this.mapSession.cachedWorldGeoJson;

    const urls = [
      'https://cdn.jsdelivr.net/gh/vasturiano/three-globe@2.31.0/example/country-polygons/ne_110m_admin_0_countries.geojson',
      'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson'
    ];

    for (const url of urls) {
      try {
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          this.mapSession.cachedWorldGeoJson = data;
          return data;
        }
      } catch (e) {
        console.warn(`GeoJSON fetch failed from ${url}, trying fallback...`, e);
      }
    }
    throw new Error('Could not download world country boundaries.');
  }

  async startMapPointing() {
    if (!this.currentUser) {
      this.showToast('Please authenticate before launching Map Pointing.', 'error');
      this.openAuthModal();
      return;
    }

    const scope = document.getElementById('mapScopeSelect').value;
    const countVal = document.getElementById('mapTargetCountSelect').value;

    document.querySelectorAll('.sub-view-pane').forEach(p => p.classList.add('hidden'));
    document.getElementById('subViewMapArena').classList.remove('hidden');
    document.getElementById('mapLoadingSpinner').classList.remove('hidden');

    // Initialize Leaflet Map
    if (!this.mapSession.leafletMap) {
      this.mapSession.leafletMap = L.map('leafletMapContainer', {
        center: [20, 0],
        zoom: 2,
        minZoom: 1,
        maxZoom: 7,
        zoomControl: true,
        attributionControl: false
      });
    }

    // Load GeoJSON data
    let geoJsonData;
    try {
      geoJsonData = await this.fetchWorldGeoJson();
    } catch (err) {
      this.showToast('Failed to load map dataset: ' + err.message, 'error');
      document.getElementById('mapLoadingSpinner').classList.add('hidden');
      return;
    }

    document.getElementById('mapLoadingSpinner').classList.add('hidden');

    let eligibleTargets = [];
    if (scope === 'Continents') {
      eligibleTargets = [
        'Europe', 'Asia', 'Africa', 'North America', 
        'South America', 'Australia/Oceania', 'Antarctica'
      ];
    } else if (scope === 'Whole World') {
      eligibleTargets = WORLD_FLAGS.map(f => f.name);
    } else {
      eligibleTargets = WORLD_FLAGS.filter(f => f.continent === scope).map(f => f.name);
    }

    const shuffled = [...eligibleTargets].sort(() => 0.5 - Math.random());
    const targetCount = countVal === 'all' ? shuffled.length : Math.min(parseInt(countVal, 10), shuffled.length);
    const selectedTargets = shuffled.slice(0, targetCount);

    this.mapSession.active = true;
    this.mapSession.scope = scope;
    this.mapSession.targets = selectedTargets;
    this.mapSession.currentTargetIndex = 0;
    this.mapSession.attemptsOnCurrent = 0;
    this.mapSession.totalCompleted = 0;
    this.mapSession.correctPoints = 0;
    this.mapSession.countryLayersByName = {};
    this.mapSession.beaconMarkersByName = {};
    this.mapSession.snapshots = [];

    if (this.mapSession.geoJsonLayer) {
      this.mapSession.leafletMap.removeLayer(this.mapSession.geoJsonLayer);
    }
    if (this.mapSession.markerGroup) {
      this.mapSession.leafletMap.removeLayer(this.mapSession.markerGroup);
    }
    this.mapSession.markerGroup = L.layerGroup().addTo(this.mapSession.leafletMap);

    const defaultStyle = {
      fillColor: '#21794b',
      weight: 1.2,
      opacity: 1,
      color: '#a2cad8',
      fillOpacity: 1
    };

    // Filter GeoJSON to isolate selected continent
    this.mapSession.geoJsonLayer = L.geoJSON(geoJsonData, {
      filter: (feature) => {
        if (scope === 'Whole World' || scope === 'Continents') return true;
        const rawName = feature.properties.NAME || feature.properties.ADMIN || feature.properties.name || feature.properties.admin || '';
        const continentOfCountry = COUNTRY_TO_CONTINENT[this.normalizeName(rawName)];
        return continentOfCountry === scope;
      },
      style: () => defaultStyle,
      onEachFeature: (feature, layer) => {
        const rawName = feature.properties.NAME || feature.properties.ADMIN || feature.properties.name || feature.properties.admin || '';
        const normName = this.normalizeName(rawName);

        this.mapSession.countryLayersByName[normName] = layer;

        layer.on('mouseover', () => {
          if (!layer.isCompleted) {
            layer.setStyle({ fillColor: '#2ea466', weight: 2, color: '#ffffff' });
          }
        });
        layer.on('mouseout', () => {
          if (!layer.isCompleted) {
            layer.setStyle(defaultStyle);
          }
        });

        layer.on('click', () => {
          this.handleMapClick(rawName, layer);
        });
      }
    }).addTo(this.mapSession.leafletMap);

    // Island & Microstate Beacons
    const countriesInScope = (scope === 'Whole World' || scope === 'Continents')
      ? WORLD_FLAGS
      : WORLD_FLAGS.filter(f => f.continent === scope);

    countriesInScope.forEach(c => {
      if (c.coords && c.isSmall) {
        const normName = this.normalizeName(c.name);
        const marker = L.circleMarker(c.coords, {
          radius: 7,
          fillColor: '#21794b',
          color: '#ffffff',
          weight: 2,
          opacity: 1,
          fillOpacity: 1,
          className: 'small-country-pin'
        });

        marker.on('click', () => {
          this.handleMapClick(c.name, marker);
        });

        marker.on('mouseover', () => {
          if (!marker.isCompleted) {
            marker.setStyle({ fillColor: '#2ea466', radius: 9 });
          }
        });

        marker.on('mouseout', () => {
          if (!marker.isCompleted) {
            marker.setStyle({ fillColor: '#21794b', radius: 7 });
          }
        });

        marker.addTo(this.mapSession.markerGroup);
        this.mapSession.beaconMarkersByName[normName] = marker;
      }
    });

    this.focusMapRegion(scope);
    this.updateMapMissionBar();
    this.startMapTimer();
  }

  focusMapRegion(scope) {
    const map = this.mapSession.leafletMap;
    const viewports = {
      'Europe': { center: [54, 15], zoom: 4 },
      'Asia': { center: [34, 88], zoom: 3 },
      'Africa': { center: [2, 20], zoom: 3 },
      'North America': { center: [40, -100], zoom: 3 },
      'South America': { center: [-15, -60], zoom: 3 },
      'Australia/Oceania': { center: [-22, 140], zoom: 4 },
      'Whole World': { center: [20, 0], zoom: 2 },
      'Continents': { center: [20, 0], zoom: 2 }
    };
    const vp = viewports[scope] || { center: [20, 0], zoom: 2 };
    map.setView(vp.center, vp.zoom);
    setTimeout(() => map.invalidateSize(), 300);
  }

  updateMapMissionBar() {
    const { targets, currentTargetIndex, totalCompleted, correctPoints } = this.mapSession;
    const target = targets[currentTargetIndex];

    document.getElementById('mapScoreRatio').textContent = `${totalCompleted} / ${targets.length}`;
    const pct = totalCompleted > 0 ? Math.round((correctPoints / totalCompleted) * 100) : 0;
    document.getElementById('mapAccuracyPct').textContent = `${pct}%`;
    document.getElementById('mapTargetName').textContent = target || 'Completed';
  }

  startMapTimer() {
    if (this.mapSession.timerInterval) clearInterval(this.mapSession.timerInterval);
    this.mapSession.secondsElapsed = 0;

    this.mapSession.timerInterval = setInterval(() => {
      this.mapSession.secondsElapsed++;
      const m = Math.floor(this.mapSession.secondsElapsed / 60);
      const s = this.mapSession.secondsElapsed % 60;
      document.getElementById('mapTimerDisplay').textContent = 
        `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }, 1000);
  }

  handleMapClick(clickedRawName, element) {
    if (!this.mapSession.active || element.isCompleted) return;

    const targetName = this.mapSession.targets[this.mapSession.currentTargetIndex];
    const normalizedTarget = this.normalizeName(targetName);
    const normalizedClicked = this.normalizeName(clickedRawName);

    // Continents Selection Mode
    if (this.mapSession.scope === 'Continents') {
      const clickedContinent = COUNTRY_TO_CONTINENT[normalizedClicked] || clickedRawName;
      const isCorrectContinent = (clickedContinent.toLowerCase() === targetName.toLowerCase());

      if (isCorrectContinent) {
        WORLD_FLAGS.filter(f => f.continent === targetName).forEach(f => {
          const norm = this.normalizeName(f.name);
          const layer = this.mapSession.countryLayersByName[norm];
          if (layer) {
            layer.isCompleted = true;
            layer.setStyle({ fillColor: '#15803d', weight: 1.5, color: '#ffffff', fillOpacity: 1 });
          }
          const beacon = this.mapSession.beaconMarkersByName[norm];
          if (beacon) {
            beacon.isCompleted = true;
            beacon.setStyle({ fillColor: '#15803d', color: '#ffffff' });
          }
        });

        if (this.mapSession.hintInterval) clearInterval(this.mapSession.hintInterval);

        const pts = this.mapSession.attemptsOnCurrent === 0 ? 1 : 0.5;
        this.mapSession.correctPoints += pts;
        this.mapSession.totalCompleted++;

        this.mapSession.snapshots.push({
          questionText: `Locate continent: ${targetName}`,
          selectedAnswer: `Identified in ${this.mapSession.attemptsOnCurrent + 1} attempt(s)`,
          correctAnswer: targetName,
          isCorrect: (this.mapSession.attemptsOnCurrent === 0)
        });

        this.showMapToast(`✅ Correct! You found ${targetName}`, 'success');
        this.advanceMapTarget();
      } else {
        this.mapSession.attemptsOnCurrent++;
        element.setStyle({ fillColor: '#dc2626', color: '#ffffff' });
        setTimeout(() => {
          if (!element.isCompleted) {
            element.setStyle({ fillColor: '#21794b', color: '#a2cad8' });
          }
        }, 500);

        this.showMapToast(`That was ${clickedContinent}, try again!`, 'warning');

        if (this.mapSession.attemptsOnCurrent >= 2) {
          let toggle = false;
          if (this.mapSession.hintInterval) clearInterval(this.mapSession.hintInterval);
          this.mapSession.hintInterval = setInterval(() => {
            toggle = !toggle;
            WORLD_FLAGS.filter(f => f.continent === targetName).forEach(f => {
              const layer = this.mapSession.countryLayersByName[this.normalizeName(f.name)];
              if (layer && !layer.isCompleted) {
                layer.setStyle({ fillColor: toggle ? '#f59e0b' : '#dc2626', color: '#ffffff' });
              }
            });
          }, 400);
        }
      }
      return;
    }

    // Country Selection Mode
    if (normalizedClicked === normalizedTarget) {
      element.isCompleted = true;
      element.setStyle({ fillColor: '#15803d', weight: 1.5, color: '#ffffff', fillOpacity: 1 });

      const associatedBeacon = this.mapSession.beaconMarkersByName[normalizedTarget];
      if (associatedBeacon) {
        associatedBeacon.isCompleted = true;
        associatedBeacon.setStyle({ fillColor: '#15803d', color: '#ffffff' });
      }
      const associatedPolygon = this.mapSession.countryLayersByName[normalizedTarget];
      if (associatedPolygon) {
        associatedPolygon.isCompleted = true;
        associatedPolygon.setStyle({ fillColor: '#15803d', color: '#ffffff' });
      }

      if (this.mapSession.hintInterval) clearInterval(this.mapSession.hintInterval);

      const pts = this.mapSession.attemptsOnCurrent === 0 ? 1 : 0.5;
      this.mapSession.correctPoints += pts;
      this.mapSession.totalCompleted++;

      this.mapSession.snapshots.push({
        questionText: `Locate country: ${targetName}`,
        selectedAnswer: `Identified in ${this.mapSession.attemptsOnCurrent + 1} attempt(s)`,
        correctAnswer: targetName,
        isCorrect: (this.mapSession.attemptsOnCurrent === 0)
      });

      this.showMapToast(`✅ Correct! ${targetName}`, 'success');
      this.advanceMapTarget();
    } else {
      this.mapSession.attemptsOnCurrent++;

      element.setStyle({ fillColor: '#dc2626', color: '#ffffff' });
      setTimeout(() => {
        if (!element.isCompleted) {
          element.setStyle({ fillColor: '#21794b', color: '#a2cad8' });
        }
      }, 500);

      this.showMapToast(`That was ${clickedRawName}, try again!`, 'warning');

      if (this.mapSession.attemptsOnCurrent >= 2) {
        const targetLayer = this.mapSession.countryLayersByName[normalizedTarget];
        const targetBeacon = this.mapSession.beaconMarkersByName[normalizedTarget];
        let toggle = false;

        if (this.mapSession.hintInterval) clearInterval(this.mapSession.hintInterval);
        this.mapSession.hintInterval = setInterval(() => {
          toggle = !toggle;
          const pulseColor = toggle ? '#f59e0b' : '#dc2626';
          if (targetLayer && !targetLayer.isCompleted) {
            targetLayer.setStyle({ fillColor: pulseColor, weight: 2.5, color: '#ffffff' });
          }
          if (targetBeacon && !targetBeacon.isCompleted) {
            targetBeacon.setStyle({ fillColor: pulseColor, radius: toggle ? 10 : 7, color: '#ffffff' });
          }
        }, 400);
      }
    }
  }

  showMapToast(text, type = 'info') {
    const toast = document.getElementById('mapFeedbackToast');
    toast.textContent = text;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2200);
  }

  skipMapTarget() {
    if (!this.mapSession.active) return;
    if (this.mapSession.hintInterval) clearInterval(this.mapSession.hintInterval);

    const targetName = this.mapSession.targets[this.mapSession.currentTargetIndex];
    this.mapSession.snapshots.push({
      questionText: `Locate: ${targetName}`,
      selectedAnswer: 'Skipped',
      correctAnswer: targetName,
      isCorrect: false
    });

    this.mapSession.totalCompleted++;
    this.advanceMapTarget();
  }

  advanceMapTarget() {
    this.mapSession.attemptsOnCurrent = 0;
    this.mapSession.currentTargetIndex++;

    if (this.mapSession.currentTargetIndex < this.mapSession.targets.length) {
      this.updateMapMissionBar();
    } else {
      this.finalizeMapPointing();
    }
  }

  // Instant optimistic submit for Map Pointing
  finalizeMapPointing() {
    if (this.mapSession.timerInterval) clearInterval(this.mapSession.timerInterval);
    if (this.mapSession.hintInterval) clearInterval(this.mapSession.hintInterval);
    this.mapSession.active = false;

    const total = this.mapSession.targets.length;
    const score = Math.round(this.mapSession.correctPoints);
    const accuracyPct = Math.round((this.mapSession.correctPoints / total) * 100);

    const attempt = {
      id: `ATT-MAP-${Date.now().toString(36)}`,
      studentId: this.currentUser.id,
      studentName: this.currentUser.name,
      userRole: this.currentUser.role,
      type: '🗺️ Map Pointing',
      mode: `Map Drill (${this.mapSession.scope})`,
      continent: this.mapSession.scope,
      difficulty: 'Medium',
      totalQuestions: total,
      correctCount: score,
      accuracyPct,
      durationSeconds: this.mapSession.secondsElapsed,
      timestamp: new Date().toISOString(),
      formattedDate: new Date().toLocaleDateString(),
      formattedTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      snapshots: this.mapSession.snapshots
    };

    // Instant local UI render
    this.attempts.unshift(attempt);
    this.renderResultsScreen(attempt);
    this.renderLeaderboard();
    this.renderStudentDashboard();

    // Async background database save
    this.storage.saveAttempt(attempt).catch(err => console.error('Background map attempt save error:', err));
  }

  exitMapPointing() {
    if (this.mapSession.timerInterval) clearInterval(this.mapSession.timerInterval);
    if (this.mapSession.hintInterval) clearInterval(this.mapSession.hintInterval);
    this.mapSession.active = false;
    this.switchSubView(document.getElementById('portalStudent'), 'mapSetup', document.querySelector('[data-subview="mapSetup"]'));
  }

  /* ==========================================================================
     STANDARD Q&A QUIZ MODULE (ZERO-LAG SUBMIT)
     ========================================================================== */
  getEligibleQuestions(continent, difficulty, topic, batch = 'All') {
    return this.questions.filter(q => {
      const isPub = q.status === 'Published';
      const matchCont = (continent === 'Whole World' || continent === 'All') ? true : q.continent === continent;
      const matchBatch = (batch === 'All') ? true : (q.batch === batch);
      const matchDiff = difficulty === 'All' || q.difficulty === difficulty;
      const matchTopic = topic === 'All' || q.topic === topic;
      return isPub && matchCont && matchBatch && matchDiff && matchTopic;
    });
  }

  updateAvailabilityBadge() {
    const cont = document.getElementById('setupContinent')?.value || 'Whole World';
    const batch = document.getElementById('setupBatch')?.value || 'All';
    const diff = document.getElementById('setupDifficulty')?.value || 'All';
    const top = document.getElementById('setupTopic')?.value || 'All';
    const pool = this.getEligibleQuestions(cont, diff, top, batch);

    const badge = document.getElementById('availabilityNotice');
    if (badge) {
      const batchTxt = batch === 'All' ? '' : ` [${batch}]`;
      badge.textContent = `${pool.length} published questions available in ${cont}${batchTxt}`;
      badge.className = pool.length > 0 ? 'badge badge-info' : 'badge badge-danger';
    }
    const btn = document.getElementById('btnStartQuiz');
    if (btn) btn.disabled = (pool.length === 0);
  }

  startAssessment() {
    if (!this.currentUser) {
      this.showToast('Authentication required before starting a quiz.', 'error');
      this.openAuthModal();
      return;
    }

    const continent = document.getElementById('setupContinent').value;
    const batch = document.getElementById('setupBatch').value;
    const difficulty = document.getElementById('setupDifficulty').value;
    const topic = document.getElementById('setupTopic').value;
    const countOption = document.getElementById('setupCount').value;
    const mode = document.querySelector('input[name="assessmentMode"]:checked').value;

    let pool = this.getEligibleQuestions(continent, difficulty, topic, batch);
    if (pool.length === 0) {
      this.showToast('No matching questions available for this selection.', 'error');
      return;
    }

    let targetCount = 10;
    if (countOption === 'all') {
      targetCount = pool.length;
    } else if (countOption === 'custom') {
      const customVal = parseInt(document.getElementById('setupCustomCount').value, 10);
      targetCount = (!isNaN(customVal) && customVal > 0) ? Math.min(customVal, pool.length) : pool.length;
    } else {
      targetCount = Math.min(parseInt(countOption, 10), pool.length);
    }

    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, targetCount);

    this.quizSession = {
      active: true,
      sessionId: `SES-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`,
      sessionFinalized: false,
      mode,
      continent,
      batch,
      difficulty,
      topic,
      questions: selected,
      currentIndex: 0,
      userAnswers: {},
      startTime: new Date(),
      secondsRemaining: mode === 'exam' ? selected.length * 60 : 0,
      timerInterval: null
    };

    document.querySelectorAll('.sub-view-pane').forEach(p => p.classList.add('hidden'));
    document.getElementById('subViewQuizArena').classList.remove('hidden');

    document.getElementById('arenaModeBadge').textContent = mode === 'exam' ? 'Exam Mode' : 'Practice Mode';
    document.getElementById('arenaModeBadge').className = mode === 'exam' ? 'badge badge-danger' : 'badge badge-primary';
    document.getElementById('arenaContinentBadge').textContent = continent;
    document.getElementById('arenaDifficultyBadge').textContent = difficulty;
    document.getElementById('totalQCount').textContent = selected.length;

    const submitBtn = document.getElementById('btnSubmitExam');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = mode === 'exam' ? 'Submit Final Exam' : 'Complete Practice';
    }

    if (mode === 'exam') {
      document.getElementById('arenaTimerWrapper').classList.remove('hidden');
      this.startTimer();
    } else {
      document.getElementById('arenaTimerWrapper').classList.add('hidden');
    }

    this.renderCurrentQuestion();
  }

  startTimer() {
    if (this.quizSession.timerInterval) clearInterval(this.quizSession.timerInterval);
    const updateTimer = () => {
      const m = Math.floor(this.quizSession.secondsRemaining / 60);
      const s = this.quizSession.secondsRemaining % 60;
      document.getElementById('arenaTimer').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

      if (this.quizSession.secondsRemaining <= 0) {
        clearInterval(this.quizSession.timerInterval);
        this.showToast('Time expired! Submitting assessment.', 'warning');
        this.finalizeAssessment(true);
      }
      this.quizSession.secondsRemaining--;
    };
    updateTimer();
    this.quizSession.timerInterval = setInterval(updateTimer, 1000);
  }

  renderCurrentQuestion() {
    const { questions, currentIndex, userAnswers, mode } = this.quizSession;
    const q = questions[currentIndex];

    document.getElementById('currentQIndex').textContent = currentIndex + 1;
    const pct = ((currentIndex + 1) / questions.length) * 100;
    document.getElementById('quizProgressBar').style.width = `${pct}%`;

    document.getElementById('qTopicTag').textContent = `${q.continent} • ${q.topic}`;
    const batchBadge = document.getElementById('qBatchBadge');
    if (batchBadge) batchBadge.textContent = `🏷️ ${q.batch || 'Batch 1'}`;

    document.getElementById('qIdTag').textContent = `ID: ${q.id}`;
    document.getElementById('qText').textContent = q.question;

    const container = document.getElementById('qOptionsList');
    container.innerHTML = '';

    const options = [
      { key: 'A', text: q.optionA },
      { key: 'B', text: q.optionB },
      { key: 'C', text: q.optionC },
      { key: 'D', text: q.optionD }
    ];

    const chosenKey = userAnswers[currentIndex];
    const isAnswered = chosenKey !== undefined;

    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      if (chosenKey === opt.key) btn.classList.add('selected');

      if (mode === 'practice' && isAnswered) {
        btn.disabled = true;
        if (opt.key === q.correctAnswer) btn.classList.add('correct');
        else if (chosenKey === opt.key) btn.classList.add('incorrect');
      }

      btn.innerHTML = `<span class="opt-badge">${opt.key}</span><span>${this.escapeHtml(opt.text)}</span>`;
      btn.addEventListener('click', () => {
        if (mode === 'practice' && userAnswers[currentIndex] !== undefined) return;
        userAnswers[currentIndex] = opt.key;
        this.renderCurrentQuestion();
      });
      container.appendChild(btn);
    });

    const fb = document.getElementById('qFeedbackPane');
    if (mode === 'practice' && isAnswered) {
      fb.classList.remove('hidden');
      const ok = chosenKey === q.correctAnswer;
      fb.className = `feedback-pane ${ok ? 'correct' : 'incorrect'}`;
      document.getElementById('feedbackTitle').textContent = ok ? '✅ Correct Answer!' : `❌ Incorrect (Correct: Option ${q.correctAnswer})`;
      document.getElementById('feedbackExplanation').textContent = q.explanation || 'No detailed explanation provided.';
      document.getElementById('feedbackSource').textContent = q.source ? `Source: ${q.source}` : '';
    } else {
      fb.classList.add('hidden');
    }

    document.getElementById('btnPrevQuestion').disabled = (currentIndex === 0);
    const nextBtn = document.getElementById('btnNextQuestion');
    const submitBtn = document.getElementById('btnSubmitExam');

    if (currentIndex === questions.length - 1) {
      nextBtn.classList.add('hidden');
      submitBtn.classList.remove('hidden');
      submitBtn.textContent = mode === 'exam' ? 'Submit Final Exam' : 'Complete Practice';
    } else {
      nextBtn.classList.remove('hidden');
      submitBtn.classList.add('hidden');
    }
  }

  handleNextQuestion() {
    if (this.quizSession.currentIndex < this.quizSession.questions.length - 1) {
      this.quizSession.currentIndex++;
      this.renderCurrentQuestion();
    }
  }

  handlePrevQuestion() {
    if (this.quizSession.currentIndex > 0) {
      this.quizSession.currentIndex--;
      this.renderCurrentQuestion();
    }
  }

  confirmSubmitExam() {
    if (this.quizSession.sessionFinalized) return;

    const { questions, userAnswers, mode } = this.quizSession;
    const answered = Object.keys(userAnswers).length;
    if (mode === 'exam' && answered < questions.length) {
      if (!confirm(`You left ${questions.length - answered} questions unanswered. Submit now?`)) return;
    }

    const submitBtn = document.getElementById('btnSubmitExam');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';
    }

    this.finalizeAssessment(false);
  }

  // Instant optimistic submit: zero UI freeze, background Firestore save
  finalizeAssessment(isTimeout = false) {
    if (this.quizSession.timerInterval) clearInterval(this.quizSession.timerInterval);

    if (this.quizSession.sessionFinalized) return;
    this.quizSession.sessionFinalized = true;

    const { sessionId, questions, userAnswers, mode, continent, difficulty, topic, startTime } = this.quizSession;
    const now = new Date();
    const durationSeconds = Math.max(1, Math.round((now - startTime) / 1000));

    let correctCount = 0;
    const snapshots = questions.map((q, idx) => {
      const selected = userAnswers[idx] || null;
      const isCorrect = (selected === q.correctAnswer);
      if (isCorrect) correctCount++;
      return {
        questionId: q.id,
        questionText: q.question,
        continent: q.continent,
        batch: q.batch || 'Batch 1',
        difficulty: q.difficulty,
        selectedAnswer: selected,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation || '',
        isCorrect
      };
    });

    const accuracyPct = Math.round((correctCount / questions.length) * 100);

    const attemptRecord = {
      id: `ATT-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 5)}`,
      sessionId,
      studentId: this.currentUser.id,
      studentName: this.currentUser.name,
      userRole: this.currentUser.role,
      type: '📝 Question Quiz',
      mode,
      continent,
      difficulty,
      topic,
      totalQuestions: questions.length,
      correctCount,
      accuracyPct,
      durationSeconds,
      timestamp: now.toISOString(),
      formattedTime: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      formattedDate: now.toLocaleDateString(),
      status: isTimeout ? 'Completed (Timeout)' : 'Completed',
      snapshots
    };

    // Instant local memory update and view switch (<50ms!)
    this.attempts.unshift(attemptRecord);
    this.renderResultsScreen(attemptRecord);
    this.renderLeaderboard();
    this.renderStudentDashboard();

    // Background asynchronous database write
    this.storage.saveAttempt(attemptRecord).catch(err => {
      console.error('Background attempt save failed:', err);
    });
  }

  renderResultsScreen(att) {
    document.querySelectorAll('.sub-view-pane').forEach(p => p.classList.add('hidden'));
    document.getElementById('subViewQuizResults').classList.remove('hidden');

    document.getElementById('resultsScorePct').textContent = `${att.accuracyPct}%`;
    document.getElementById('resultsFraction').textContent = `${att.correctCount} / ${att.totalQuestions}`;
    document.getElementById('resMode').textContent = att.type || (att.mode === 'exam' ? 'Exam' : 'Practice');
    document.getElementById('resContinent').textContent = att.continent;
    document.getElementById('resAccuracy').textContent = `${att.accuracyPct}%`;

    const m = Math.floor(att.durationSeconds / 60);
    const s = att.durationSeconds % 60;
    document.getElementById('resTime').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

    const reviewContainer = document.getElementById('resultsReviewList');
    reviewContainer.innerHTML = '';

    (att.snapshots || []).forEach((snap, idx) => {
      const item = document.createElement('div');
      item.className = `review-item ${snap.isCorrect ? 'pass' : 'fail'}`;
      item.innerHTML = `
        <div class="review-header">
          <span>Question ${idx + 1} (${snap.continent || att.continent})</span>
          <span class="badge ${snap.isCorrect ? 'badge-success' : 'badge-danger'}">${snap.isCorrect ? 'Correct' : 'Incorrect'}</span>
        </div>
        <div class="review-question">${this.escapeHtml(snap.questionText)}</div>
        <div class="review-answers">
          <span>Your Answer: <strong>${this.escapeHtml(snap.selectedAnswer || 'Unanswered')}</strong></span>
          ${!snap.isCorrect ? `<span>Correct Key: <strong>${this.escapeHtml(snap.correctAnswer)}</strong></span>` : ''}
          ${snap.explanation ? `<div class="feedback-source">${this.escapeHtml(snap.explanation)}</div>` : ''}
        </div>
      `;
      reviewContainer.appendChild(item);
    });
  }

  /* ==========================================================================
     ADMIN & COMMON MODULE FUNCTIONS
     ========================================================================== */
  renderLeaderboard() {
    const tbody = document.getElementById('leaderboardTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    if (this.attempts.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" class="text-center">No assessments recorded yet. Be the first to play!</td></tr>`;
      return;
    }

    const sorted = [...this.attempts].sort((a, b) => {
      if (b.accuracyPct !== a.accuracyPct) return b.accuracyPct - a.accuracyPct;
      if (b.correctCount !== a.correctCount) return b.correctCount - a.correctCount;
      return (a.durationSeconds || 9999) - (b.durationSeconds || 9999);
    }).slice(0, 10);

    sorted.forEach((att, idx) => {
      const tr = document.createElement('tr');
      const rankIcon = idx === 0 ? '🥇 1' : (idx === 1 ? '🥈 2' : (idx === 2 ? '🥉 3' : `${idx + 1}`));
      const roleBadge = att.userRole === 'admin' ? '<span class="badge badge-warning">Teacher/Admin</span>' : '<span class="badge badge-info">Student</span>';
      const m = Math.floor(att.durationSeconds / 60);
      const s = att.durationSeconds % 60;

      tr.innerHTML = `
        <td><strong class="rank-badge">${rankIcon}</strong></td>
        <td><strong>${this.escapeHtml(att.studentName)}</strong></td>
        <td>${roleBadge}</td>
        <td><span class="badge badge-primary">${att.type || 'Question Quiz'}</span></td>
        <td><span class="badge badge-secondary">${att.continent}</span></td>
        <td>${att.correctCount} / ${att.totalQuestions}</td>
        <td><strong class="text-success">${att.accuracyPct}%</strong></td>
        <td>${m}m ${s}s</td>
        <td>${att.formattedDate || new Date(att.timestamp).toLocaleDateString()}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  renderStudentDashboard() {
    if (!this.currentUser) return;
    document.getElementById('studentDashName').textContent = this.currentUser.name;
    document.getElementById('studentDashId').textContent = this.currentUser.id;

    const myAttempts = this.attempts.filter(a => a.studentId === this.currentUser.id);
    document.getElementById('dashTotalAttempts').textContent = myAttempts.length;

    let totalQ = 0, totalC = 0, best = 0, totalSec = 0;
    myAttempts.forEach(a => {
      totalQ += a.totalQuestions;
      totalC += a.correctCount;
      totalSec += (a.durationSeconds || 0);
      if (a.accuracyPct > best) best = a.accuracyPct;
    });

    const overallAcc = totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0;
    document.getElementById('dashOverallAccuracy').textContent = `${overallAcc}%`;
    document.getElementById('dashBestScore').textContent = `${best}%`;
    document.getElementById('dashTotalTime').textContent = `${Math.round(totalSec / 60)}m`;

    const tbody = document.getElementById('studentHistoryTableBody');
    tbody.innerHTML = '';

    if (myAttempts.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" class="text-center">No quiz attempts recorded yet.</td></tr>`;
      return;
    }

    myAttempts.forEach(att => {
      const tr = document.createElement('tr');
      const dateStr = att.formattedDate || new Date(att.timestamp).toLocaleDateString();
      const timeStr = att.formattedTime || new Date(att.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const m = Math.floor(att.durationSeconds / 60);
      const s = att.durationSeconds % 60;

      tr.innerHTML = `
        <td>${dateStr} <small class="text-muted">${timeStr}</small></td>
        <td><span class="badge badge-info">${att.type || 'Question Quiz'}</span></td>
        <td>${att.continent}</td>
        <td>${att.difficulty || 'Normal'}</td>
        <td>${att.correctCount} / ${att.totalQuestions}</td>
        <td><strong>${att.accuracyPct}%</strong></td>
        <td>${m}m ${s}s</td>
        <td><button class="btn btn-outline-sm btn-view-attempt" data-id="${att.id}">Review</button></td>
      `;
      tr.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn-view-attempt')) this.openAttemptDetailModal(att.id);
      });
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll('.btn-view-attempt').forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openAttemptDetailModal(b.dataset.id);
      });
    });
  }

  renderAdminOverview() {
    document.getElementById('adminTotalQuestions').textContent = this.questions.length;
    document.getElementById('adminPublishedQuestions').textContent = this.questions.filter(q => q.status === 'Published').length;
    document.getElementById('adminTotalStudents').textContent = new Set(this.attempts.map(a => a.studentId)).size;
    document.getElementById('adminTotalAttempts').textContent = this.attempts.length;

    const tbody = document.getElementById('adminAttemptsTableBody');
    tbody.innerHTML = '';

    if (this.attempts.length === 0) {
      tbody.innerHTML = `<tr><td colspan="10" class="text-center">No attempts logged yet.</td></tr>`;
      return;
    }

    this.attempts.forEach(att => {
      const tr = document.createElement('tr');
      const dateStr = att.formattedDate || new Date(att.timestamp).toLocaleDateString();
      const timeStr = att.formattedTime || new Date(att.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const m = Math.floor(att.durationSeconds / 60);
      const s = att.durationSeconds % 60;
      const roleBadge = att.userRole === 'admin' ? '<span class="badge badge-warning">Admin</span>' : '<span class="badge badge-info">Student</span>';

      tr.innerHTML = `
        <td>${dateStr} <small class="text-muted">${timeStr}</small></td>
        <td><code>${this.escapeHtml(att.studentId)}</code></td>
        <td><strong>${this.escapeHtml(att.studentName)}</strong></td>
        <td>${roleBadge}</td>
        <td><span class="badge badge-primary">${att.type || 'Question Quiz'}</span></td>
        <td>${att.continent}</td>
        <td>${att.correctCount} / ${att.totalQuestions}</td>
        <td><strong>${att.accuracyPct}%</strong></td>
        <td>${m}m ${s}s</td>
        <td><button class="btn btn-outline-sm btn-view-attempt" data-id="${att.id}">Review</button></td>
      `;
      tr.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn-view-attempt')) this.openAttemptDetailModal(att.id);
      });
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll('.btn-view-attempt').forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openAttemptDetailModal(b.dataset.id);
      });
    });
  }

  openAttemptDetailModal(attemptId) {
    const att = this.attempts.find(a => a.id === attemptId);
    if (!att) return;

    document.getElementById('attemptDetailTitle').textContent = `Assessment Review — ${att.studentName} (${att.studentId})`;

    const summary = document.getElementById('attemptModalSummary');
    const m = Math.floor(att.durationSeconds / 60);
    const s = att.durationSeconds % 60;

    summary.innerHTML = `
      <div class="stat-box"><span class="stat-label">Date &amp; Time</span><span class="stat-val">${att.formattedDate} ${att.formattedTime || ''}</span></div>
      <div class="stat-box"><span class="stat-label">Module Type</span><span class="stat-val">${att.type || 'Q&amp;A'}</span></div>
      <div class="stat-box"><span class="stat-label">Target Scope</span><span class="stat-val">${att.continent}</span></div>
      <div class="stat-box"><span class="stat-label">Score</span><span class="stat-val text-success">${att.correctCount} / ${att.totalQuestions} (${att.accuracyPct}%)</span></div>
      <div class="stat-box"><span class="stat-label">Duration</span><span class="stat-val">${m}m ${s}s</span></div>
    `;

    const sectionTitle = document.getElementById('attemptDetailSectionTitle');
    if (sectionTitle) {
      if (att.type?.includes('Map')) sectionTitle.textContent = 'Map Locations & Identification Log';
      else if (att.type?.includes('Flag')) sectionTitle.textContent = 'Flags Identified & Submitted Answers';
      else sectionTitle.textContent = 'Itemized Question Responses';
    }

    const qList = document.getElementById('attemptModalQuestionsList');
    qList.innerHTML = '';

    if (!att.snapshots || att.snapshots.length === 0) {
      qList.innerHTML = `<div class="text-center text-muted" style="padding: 1.5rem;">Total summary score logged: ${att.correctCount} / ${att.totalQuestions} correct (${att.accuracyPct}%).</div>`;
    } else {
      att.snapshots.forEach((snap, idx) => {
        const item = document.createElement('div');
        item.className = `review-item ${snap.isCorrect ? 'pass' : 'fail'}`;
        item.innerHTML = `
          <div class="review-header">
            <span>#${idx + 1} (${snap.continent || att.continent})</span>
            <span class="badge ${snap.isCorrect ? 'badge-success' : 'badge-danger'}">${snap.isCorrect ? 'Correct' : 'Missed'}</span>
          </div>
          <div class="review-question">${this.escapeHtml(snap.questionText)}</div>
          <div class="review-answers">
            <span>Student Input: <strong>${this.escapeHtml(snap.selectedAnswer || 'Unanswered')}</strong></span>
            ${!snap.isCorrect ? `<span>Target Location / Key: <strong>${this.escapeHtml(snap.correctAnswer)}</strong></span>` : ''}
            ${snap.explanation ? `<div class="feedback-source">${this.escapeHtml(snap.explanation)}</div>` : ''}
          </div>
        `;
        qList.appendChild(item);
      });
    }

    document.getElementById('attemptDetailModal').classList.remove('hidden');
  }

  processPermissiveCsv(file) {
    const reader = new FileReader();
    const batchTag = document.getElementById('csvBatchTag')?.value.trim() || 'Batch 2';

    reader.onload = (e) => {
      try {
        const text = e.target.result;
        const rawRows = PermissiveCsvEngine.parse(text);
        const parsed = PermissiveCsvEngine.ingestAllRows(rawRows, batchTag);

        if (parsed.length === 0) {
          this.showToast('No valid rows found in CSV file.', 'warning');
          return;
        }

        this.stagedCsvQuestions = parsed;
        document.getElementById('csvPreviewSection').classList.remove('hidden');
        document.getElementById('csvValidCountBadge').textContent = `Total Questions Staged: ${parsed.length}`;
        document.getElementById('btnConfirmImport').disabled = false;
        const purgeBtn = document.getElementById('btnPurgeAndImport');
        if (purgeBtn) purgeBtn.disabled = false;

        const tbody = document.getElementById('csvPreviewTableBody');
        tbody.innerHTML = '';
        parsed.slice(0, 15).forEach((item, idx) => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${idx + 1}</td>
            <td><span class="badge badge-info">${item.continent}</span> <span class="badge badge-warning">🏷️ ${item.batch}</span></td>
            <td>${this.escapeHtml(item.question.substring(0, 50))}...</td>
            <td>${this.escapeHtml(item.optionA)}</td>
            <td>${this.escapeHtml(item.optionB)}</td>
            <td>${this.escapeHtml(item.optionC)}</td>
            <td>${this.escapeHtml(item.optionD)}</td>
            <td><strong>${item.correctAnswer}</strong></td>
          `;
          tbody.appendChild(tr);
        });
      } catch (err) {
        this.showToast('CSV parsing error: ' + err.message, 'error');
      }
    };
    reader.readAsText(file, 'UTF-8');
  }

  async commitCsvImport(purgeExisting = false) {
    if (this.stagedCsvQuestions.length === 0) return;
    const btn = purgeExisting ? document.getElementById('btnPurgeAndImport') : document.getElementById('btnConfirmImport');
    btn.disabled = true;
    btn.textContent = purgeExisting ? 'Purging & Saving...' : 'Saving Questions...';

    const res = await this.storage.saveBatchQuestions(this.stagedCsvQuestions, purgeExisting);
    await this.refreshData();
    this.populateBatchDropdowns();
    this.populateTopicDropdown();
    this.renderQuestionBank();
    this.renderAdminOverview();
    this.updateAvailabilityBadge();
    this.updateDownloadDialogCounts();

    btn.disabled = false;
    btn.textContent = purgeExisting ? '🗑️ Delete All & Upload Fresh CSV' : '➕ Add to Existing Bank';
    document.getElementById('csvImportModal').classList.add('hidden');
    
    if (purgeExisting) {
      this.showToast(`Clean Slate: Loaded ${res.count} fresh questions!`, 'success');
    } else {
      this.showToast(`Import Success: Added ${res.count} questions to bank!`, 'success');
    }
  }

  exportQuestionBankCsv() {
    if (this.questions.length === 0) {
      this.showToast('Question bank is empty.', 'warning');
      return;
    }
    const csv = PermissiveCsvEngine.stringify(this.questions);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `GeoQuiz_Bank_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    this.showToast(`Exported ${this.questions.length} questions.`, 'success');
  }

  renderQuestionBank() {
    const tbody = document.getElementById('qbTableBody');
    tbody.innerHTML = '';

    const filtered = this.questions.filter(q => {
      const matchSearch = !this.qbState.search ||
        q.id.toLowerCase().includes(this.qbState.search) ||
        (q.batch && q.batch.toLowerCase().includes(this.qbState.search)) ||
        q.question.toLowerCase().includes(this.qbState.search) ||
        q.topic.toLowerCase().includes(this.qbState.search);
      const matchCont = this.qbState.continent === 'All' || q.continent === this.qbState.continent;
      const matchBatch = this.qbState.batch === 'All' || (q.batch || 'Batch 1') === this.qbState.batch;
      const matchDiff = this.qbState.difficulty === 'All' || q.difficulty === this.qbState.difficulty;
      const matchStatus = this.qbState.status === 'All' || q.status === this.qbState.status;
      return matchSearch && matchCont && matchBatch && matchDiff && matchStatus;
    });

    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / this.qbState.pageSize));
    if (this.qbState.page > totalPages) this.qbState.page = totalPages;

    const start = (this.qbState.page - 1) * this.qbState.pageSize;
    const end = Math.min(start + this.qbState.pageSize, total);
    const slice = filtered.slice(start, end);

    document.getElementById('pgStart').textContent = total > 0 ? start + 1 : 0;
    document.getElementById('pgEnd').textContent = end;
    document.getElementById('pgTotal').textContent = total;
    document.getElementById('pgCurrent').textContent = `Page ${this.qbState.page} of ${totalPages}`;
    document.getElementById('pgPrevBtn').disabled = this.qbState.page <= 1;
    document.getElementById('pgNextBtn').disabled = this.qbState.page >= totalPages;
    document.getElementById('pgJumpInput').max = totalPages;

    if (slice.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" class="text-center" style="padding: 2rem;">No questions matching active filters.</td></tr>`;
      return;
    }

    slice.forEach(q => {
      const tr = document.createElement('tr');
      const badgeClass = q.status === 'Published' ? 'badge-success' : 'badge-warning';
      const batchLabel = q.batch || 'Batch 1';
      const isNewBatch = batchLabel !== 'Batch 1';

      tr.innerHTML = `
        <td><code>${this.escapeHtml(q.id)}</code></td>
        <td><span class="badge ${isNewBatch ? 'badge-warning' : 'badge-secondary'}">${isNewBatch ? '🆕 ' : ''}${this.escapeHtml(batchLabel)}</span></td>
        <td><span class="badge badge-info">${this.escapeHtml(q.continent)}</span></td>
        <td>${this.escapeHtml(q.difficulty)}</td>
        <td>${this.escapeHtml(q.topic)}</td>
        <td>${this.escapeHtml(q.question)}</td>
        <td><strong>${q.correctAnswer}</strong></td>
        <td><span class="badge ${badgeClass}">${q.status}</span></td>
        <td>
          <button class="btn btn-outline-sm btn-edit" data-id="${q.id}">Edit</button>
          <button class="btn btn-outline-sm btn-del" data-id="${q.id}" style="color:var(--danger)">Del</button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll('.btn-edit').forEach(b => b.addEventListener('click', () => this.openEditQuestionModal(b.dataset.id)));
    tbody.querySelectorAll('.btn-del').forEach(b => b.addEventListener('click', () => this.confirmDeleteQuestion(b.dataset.id)));
  }

  openQuestionModal() {
    document.getElementById('questionModalTitle').textContent = 'Add Geography Question';
    document.getElementById('questionForm').reset();
    document.getElementById('editQuestionId').value = '';
    document.getElementById('questionModal').classList.remove('hidden');
  }

  openEditQuestionModal(id) {
    const q = this.questions.find(item => item.id === id);
    if (!q) return;
    document.getElementById('questionModalTitle').textContent = `Edit Question (${id})`;
    document.getElementById('editQuestionId').value = q.id;
    document.getElementById('qfContinent').value = q.continent;
    document.getElementById('qfBatch').value = q.batch || 'Batch 1';
    document.getElementById('qfDifficulty').value = q.difficulty;
    document.getElementById('qfTopic').value = q.topic;
    document.getElementById('qfStatus').value = q.status;
    document.getElementById('qfText').value = q.question;
    document.getElementById('qfOptA').value = q.optionA;
    document.getElementById('qfOptB').value = q.optionB;
    document.getElementById('qfOptC').value = q.optionC;
    document.getElementById('qfOptD').value = q.optionD;
    document.getElementById('qfCorrect').value = q.correctAnswer;
    document.getElementById('qfSource').value = q.source || '';
    document.getElementById('qfExplanation').value = q.explanation || '';
    document.getElementById('questionModal').classList.remove('hidden');
  }

  async saveSingleQuestion() {
    const editId = document.getElementById('editQuestionId').value;
    const continent = document.getElementById('qfContinent').value;
    const batch = document.getElementById('qfBatch').value.trim() || 'Batch 1';
    const difficulty = document.getElementById('qfDifficulty').value;
    const topic = document.getElementById('qfTopic').value.trim();
    const status = document.getElementById('qfStatus').value;
    const questionText = document.getElementById('qfText').value.trim();
    const optA = document.getElementById('qfOptA').value.trim();
    const optB = document.getElementById('qfOptB').value.trim();
    const optC = document.getElementById('qfOptC').value.trim();
    const optD = document.getElementById('qfOptD').value.trim();
    const correctAnswer = document.getElementById('qfCorrect').value;
    const source = document.getElementById('qfSource').value.trim();
    const explanation = document.getElementById('qfExplanation').value.trim();

    const id = editId || `GEO-${continent.substring(0, 2).toUpperCase()}-${Date.now().toString(36)}`;

    const questionObj = {
      id,
      batch,
      continent,
      difficulty,
      topic,
      status,
      question: questionText,
      optionA: optA,
      optionB: optB,
      optionC: optC,
      optionD: optD,
      correctAnswer,
      source: source || 'Curriculum',
      explanation,
      createdAt: new Date().toISOString()
    };

    await this.storage.saveQuestion(questionObj);
    await this.refreshData();
    this.populateBatchDropdowns();
    this.populateTopicDropdown();
    this.renderQuestionBank();
    this.renderAdminOverview();
    this.updateAvailabilityBadge();
    this.updateDownloadDialogCounts();

    document.getElementById('questionModal').classList.add('hidden');
    this.showToast(`Saved question ${id}`, 'success');
  }

  async confirmDeleteQuestion(id) {
    if (confirm(`Delete question ${id}? This action is irreversible.`)) {
      await this.storage.deleteQuestion(id);
      await this.refreshData();
      this.populateBatchDropdowns();
      this.populateTopicDropdown();
      this.renderQuestionBank();
      this.renderAdminOverview();
      this.updateAvailabilityBadge();
      this.updateDownloadDialogCounts();
      this.showToast(`Deleted question ${id}`, 'info');
    }
  }

  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.geoQuizApp = new GeoQuizApp();
});