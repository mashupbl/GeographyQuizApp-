/**
 * Geography Quiz Application - Sample Question Bank
 * 
 * Organized by:
 * - 7 Continents: Asia, Africa, Europe, North America, South America, Australia/Oceania, Antarctica
 * - 3 Difficulty Levels: Easy, Medium, Hard
 * 
 * Schema aligned with future Cloud Firestore document structure.
 */

const QUESTION_BANK = [
  // ==========================================
  // ASIA
  // ==========================================
  {
    id: "asia-e-1",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the highest mountain peak in Asia and the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Mount Fuji"],
    correctIndex: 0,
    explanation: "Mount Everest, located in the Himalayas between Nepal and China, rises to 8,848.86 meters above sea level.",
    status: "published"
  },
  {
    id: "asia-e-2",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which is the longest river in Asia?",
    options: ["Ganges River", "Yellow River", "Yangtze River", "Mekong River"],
    correctIndex: 2,
    explanation: "The Yangtze River in China flows approximately 6,300 kilometers, making it the longest river in Asia.",
    status: "published"
  },
  {
    id: "asia-e-3",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Japan?",
    options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
    correctIndex: 2,
    explanation: "Tokyo is the capital and most populous metropolitan area of Japan.",
    status: "published"
  },
  {
    id: "asia-e-4",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of China?",
    options: ["Shanghai", "Beijing", "Guangzhou", "Hong Kong"],
    correctIndex: 1,
    explanation: "Beijing is the national capital of the People's Republic of China.",
    status: "published"
  },
  {
    id: "asia-e-5",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of India?",
    options: ["Mumbai", "Kolkata", "New Delhi", "Bengaluru"],
    correctIndex: 2,
    explanation: "New Delhi serves as the seat of the government and capital of India.",
    status: "published"
  },
  {
    id: "asia-e-6",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of South Korea?",
    options: ["Busan", "Incheon", "Seoul", "Daegu"],
    correctIndex: 2,
    explanation: "Seoul is the capital and largest metropolis of South Korea.",
    status: "published"
  },
  {
    id: "asia-e-7",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Thailand?",
    options: ["Chiang Mai", "Phuket", "Pattaya", "Bangkok"],
    correctIndex: 3,
    explanation: "Bangkok is the capital and chief port of Thailand.",
    status: "published"
  },
  {
    id: "asia-e-8",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Saudi Arabia?",
    options: ["Jeddah", "Mecca", "Riyadh", "Medina"],
    correctIndex: 2,
    explanation: "Riyadh is the capital and financial hub of Saudi Arabia.",
    status: "published"
  },
  {
    id: "asia-e-9",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of the Philippines?",
    options: ["Cebu City", "Davao", "Manila", "Quezon City"],
    correctIndex: 2,
    explanation: "Manila, located on the island of Luzon, is the capital of the Philippines.",
    status: "published"
  },
  {
    id: "asia-e-10",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Vietnam?",
    options: ["Ho Chi Minh City", "Da Nang", "Hanoi", "Hue"],
    correctIndex: 2,
    explanation: "Hanoi is the historic and political capital of Vietnam.",
    status: "published"
  },
  {
    id: "asia-e-11",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Malaysia?",
    options: ["George Town", "Kuala Lumpur", "Johor Bahru", "Ipoh"],
    correctIndex: 1,
    explanation: "Kuala Lumpur is the national capital and largest city of Malaysia.",
    status: "published"
  },
  {
    id: "asia-e-12",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Pakistan?",
    options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    correctIndex: 2,
    explanation: "Islamabad was built in the 1960s to replace Karachi as Pakistan's capital.",
    status: "published"
  },
  {
    id: "asia-e-13",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Bangladesh?",
    options: ["Chittagong", "Dhaka", "Sylhet", "Khulna"],
    correctIndex: 1,
    explanation: "Dhaka is the capital and largest city of Bangladesh.",
    status: "published"
  },
  {
    id: "asia-e-14",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Iraq?",
    options: ["Basra", "Mosul", "Erbil", "Baghdad"],
    correctIndex: 3,
    explanation: "Baghdad, located along the Tigris River, is the capital of Iraq.",
    status: "published"
  },
  {
    id: "asia-e-15",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Iran?",
    options: ["Isfahan", "Shiraz", "Tehran", "Tabriz"],
    correctIndex: 2,
    explanation: "Tehran is the capital and economic heart of Iran.",
    status: "published"
  },
  {
    id: "asia-e-16",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Jordan?",
    options: ["Zarqa", "Aqaba", "Amman", "Irbid"],
    correctIndex: 2,
    explanation: "Amman is the capital and largest city of the Hashemite Kingdom of Jordan.",
    status: "published"
  },
  {
    id: "asia-e-17",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Lebanon?",
    options: ["Tripoli", "Sidon", "Tyre", "Beirut"],
    correctIndex: 3,
    explanation: "Beirut is the capital and major seaport of Lebanon on the Mediterranean coast.",
    status: "published"
  },
  {
    id: "asia-e-18",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Nepal?",
    options: ["Pokhara", "Kathmandu", "Lalitpur", "Biratnagar"],
    correctIndex: 1,
    explanation: "Kathmandu is the capital and largest city of Nepal, situated in the Kathmandu Valley.",
    status: "published"
  },
  {
    id: "asia-e-19",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Mongolia?",
    options: ["Darkhan", "Erdenet", "Ulaanbaatar", "Choibalsan"],
    correctIndex: 2,
    explanation: "Ulaanbaatar is the capital and largest urban center of Mongolia.",
    status: "published"
  },
  {
    id: "asia-e-20",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Afghanistan?",
    options: ["Kandahar", "Herat", "Kabul", "Mazar-i-Sharif"],
    correctIndex: 2,
    explanation: "Kabul is the capital and largest city of Afghanistan.",
    status: "published"
  },
  {
    id: "asia-e-21",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Uzbekistan?",
    options: ["Samarkand", "Bukhara", "Tashkent", "Namangan"],
    correctIndex: 2,
    explanation: "Tashkent is the capital and most populous city of Uzbekistan.",
    status: "published"
  },
  {
    id: "asia-e-22",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Qatar?",
    options: ["Al Rayyan", "Doha", "Al Wakrah", "Al Khor"],
    correctIndex: 1,
    explanation: "Doha is the coastal capital city of Qatar located on the Persian Gulf.",
    status: "published"
  },
  {
    id: "asia-e-23",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of the United Arab Emirates?",
    options: ["Dubai", "Sharjah", "Abu Dhabi", "Ajman"],
    correctIndex: 2,
    explanation: "Abu Dhabi is the federal capital of the United Arab Emirates.",
    status: "published"
  },
  {
    id: "asia-e-24",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Oman?",
    options: ["Salalah", "Sohar", "Nizwa", "Muscat"],
    correctIndex: 3,
    explanation: "Muscat is the port capital and largest metropolitan area of Oman.",
    status: "published"
  },
  {
    id: "asia-e-25",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Kuwait?",
    options: ["Hawalli", "Kuwait City", "Salmiya", "Ahmadi"],
    correctIndex: 1,
    explanation: "Kuwait City is the political, cultural, and economic capital of Kuwait.",
    status: "published"
  },
  {
    id: "asia-e-26",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Cambodia?",
    options: ["Siem Reap", "Battambang", "Phnom Penh", "Sihanoukville"],
    correctIndex: 2,
    explanation: "Phnom Penh is the capital and most populous city of Cambodia.",
    status: "published"
  },
  {
    id: "asia-e-27",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Laos?",
    options: ["Luang Prabang", "Vientiane", "Pakse", "Savannakhet"],
    correctIndex: 1,
    explanation: "Vientiane is the capital city of Laos, situated on the Mekong River.",
    status: "published"
  },
  {
    id: "asia-e-28",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Myanmar?",
    options: ["Yangon", "Mandalay", "Naypyidaw", "Bagan"],
    correctIndex: 2,
    explanation: "Naypyidaw succeeded Yangon as the official administrative capital of Myanmar in 2005.",
    status: "published"
  },
  {
    id: "asia-e-29",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Bhutan?",
    options: ["Paro", "Punakha", "Thimphu", "Phuntsholing"],
    correctIndex: 2,
    explanation: "Thimphu is the capital and largest city of the Kingdom of Bhutan.",
    status: "published"
  },
  {
    id: "asia-e-30",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of the Maldives?",
    options: ["Addu City", "Mal\u00e9", "Fuvahmulah", "Kulhudhuffushi"],
    correctIndex: 1,
    explanation: "Malé is the densely populated island capital of the Republic of Maldives.",
    status: "published"
  },
  {
    id: "asia-e-31",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of North Korea?",
    options: ["Kaesong", "Hamhung", "Pyongyang", "Nampo"],
    correctIndex: 2,
    explanation: "Pyongyang is the capital and largest city of North Korea.",
    status: "published"
  },
  {
    id: "asia-e-32",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Bahrain?",
    options: ["Riffa", "Muharraq", "Manama", "Hamad Town"],
    correctIndex: 2,
    explanation: "Manama is the capital and largest city of Bahrain.",
    status: "published"
  },
  {
    id: "asia-e-33",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Kazakhstan?",
    options: ["Almaty", "Astana", "Shymkent", "Aktobe"],
    correctIndex: 1,
    explanation: "Astana is the planned capital city of Kazakhstan, located in the northern plains.",
    status: "published"
  },
  {
    id: "asia-e-34",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the official legislative and administrative capital of Sri Lanka?",
    options: ["Colombo", "Kandy", "Galle", "Sri Jayawardenepura Kotte"],
    correctIndex: 3,
    explanation: "Sri Jayawardenepura Kotte is the official administrative capital, while Colombo remains the commercial capital.",
    status: "published"
  },
  {
    id: "asia-e-35",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the capital city of Turkey (Türkiye)?",
    options: ["Istanbul", "Izmir", "Ankara", "Antalya"],
    correctIndex: 2,
    explanation: "Ankara is the capital of Turkey, while Istanbul is its largest city.",
    status: "published"
  },
  {
    id: "asia-e-36",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the highest mountain and iconic volcano in Japan?",
    options: ["Mount Kita", "Mount Fuji", "Mount Hotaka", "Mount Aso"],
    correctIndex: 1,
    explanation: "Mount Fuji is an active volcano and Japan's highest peak at 3,776 meters.",
    status: "published"
  },
  {
    id: "asia-e-37",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which vast desert covers parts of northern China and southern Mongolia?",
    options: ["Taklamakan Desert", "Gobi Desert", "Karakum Desert", "Thar Desert"],
    correctIndex: 1,
    explanation: "The Gobi Desert is a large cold desert region spanning northern China and southern Mongolia.",
    status: "published"
  },
  {
    id: "asia-e-38",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which vast elevated plateau in Central/East Asia is often called the 'Roof of the World'?",
    options: ["Deccan Plateau", "Tibetan Plateau", "Anatolian Plateau", "Iranian Plateau"],
    correctIndex: 1,
    explanation: "The Tibetan Plateau is the world's highest and largest plateau, averaging over 4,500 meters in elevation.",
    status: "published"
  },
  {
    id: "asia-e-39",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which mountain range separates the Indian subcontinent from the Tibetan Plateau?",
    options: ["The Urals", "The Andes", "The Himalayas", "The Alps"],
    correctIndex: 2,
    explanation: "The Himalayas stretch across five countries and contain many of Earth's highest peaks.",
    status: "published"
  },
  {
    id: "asia-e-40",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which sacred river flows through northern India and Bangladesh into the Bay of Bengal?",
    options: ["Indus River", "Ganges River", "Mekong River", "Brahmaputra River"],
    correctIndex: 1,
    explanation: "The Ganges River is sacred to Hindus and flows over 2,500 kilometers across India and Bangladesh.",
    status: "published"
  },
  {
    id: "asia-e-41",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which major river flows primarily through Pakistan before emptying into the Arabian Sea?",
    options: ["Indus River", "Ganges River", "Tigris River", "Euphrates River"],
    correctIndex: 0,
    explanation: "The Indus River is the longest river in Pakistan and the historic cradle of the Indus Valley Civilization.",
    status: "published"
  },
  {
    id: "asia-e-42",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which international river flows through China, Myanmar, Laos, Thailand, Cambodia, and Vietnam?",
    options: ["Yangtze River", "Mekong River", "Irrawaddy River", "Red River"],
    correctIndex: 1,
    explanation: "The Mekong River flows through six Asian countries before discharging into the South China Sea.",
    status: "published"
  },
  {
    id: "asia-e-43",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which river in northern China is named for the vast amount of yellow silt it carries?",
    options: ["Yellow River (Huang He)", "Yangtze River", "Pearl River", "Amur River"],
    correctIndex: 0,
    explanation: "The Yellow River (Huang He) gets its color and name from the yellow loess sediment it transports.",
    status: "published"
  },
  {
    id: "asia-e-44",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which two historic rivers flow through Iraq and defined the ancient region of Mesopotamia?",
    options: ["Nile and Jordan", "Tigris and Euphrates", "Indus and Ganges", "Amu Darya and Syr Darya"],
    correctIndex: 1,
    explanation: "The Tigris and Euphrates rivers supported early human civilizations in ancient Mesopotamia.",
    status: "published"
  },
  {
    id: "asia-e-45",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the deepest freshwater lake on Earth, located in Siberia, Russia?",
    options: ["Lake Baikal", "Caspian Sea", "Lake Balkhash", "Aral Sea"],
    correctIndex: 0,
    explanation: "Lake Baikal in southern Russia reaches a depth of 1,642 meters, making it the deepest lake on Earth.",
    status: "published"
  },
  {
    id: "asia-e-46",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the world's largest inland body of water by surface area, bordered by Asia and Europe?",
    options: ["Black Sea", "Red Sea", "Caspian Sea", "Baltic Sea"],
    correctIndex: 2,
    explanation: "The Caspian Sea is an endorheic inland basin with a surface area of approximately 371,000 square kilometers.",
    status: "published"
  },
  {
    id: "asia-e-47",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which extremely salty lake borders Israel, Jordan, and the West Bank?",
    options: ["Dead Sea", "Sea of Galilee", "Lake Urmia", "Lake Van"],
    correctIndex: 0,
    explanation: "The Dead Sea is nearly ten times saltier than the ocean, allowing swimmers to float effortlessly.",
    status: "published"
  },
  {
    id: "asia-e-48",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which prominent peninsula in East Asia is divided between North Korea and South Korea?",
    options: ["Indochina Peninsula", "Kamchatka Peninsula", "Korean Peninsula", "Malay Peninsula"],
    correctIndex: 2,
    explanation: "The Korean Peninsula extends southward from continental Asia into the Pacific Ocean.",
    status: "published"
  },
  {
    id: "asia-e-49",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the largest country in the world by land area, extending across both Northern Asia and Europe?",
    options: ["China", "Canada", "Russia", "India"],
    correctIndex: 2,
    explanation: "Russia spans over 17 million square kilometers across northern Eurasia.",
    status: "published"
  },
  {
    id: "asia-e-50",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which country is the world's largest archipelago state, made up of over 17,000 islands?",
    options: ["Japan", "Philippines", "Indonesia", "Maldives"],
    correctIndex: 2,
    explanation: "Indonesia is the largest island country in the world, spanning between the Indian and Pacific Oceans.",
    status: "published"
  },
  {
    id: "asia-e-51",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which tear-drop shaped island nation is situated just southeast of India in the Indian Ocean?",
    options: ["Madagascar", "Sri Lanka", "Maldives", "Mauritius"],
    correctIndex: 1,
    explanation: "Sri Lanka is an island nation located in the northern Indian Ocean off the southern coast of India.",
    status: "published"
  },
  {
    id: "asia-e-52",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which island nation in the Indian Ocean is famous for its coral atolls and turquoise lagoons?",
    options: ["Maldives", "Seychelles", "Cyprus", "Bahrain"],
    correctIndex: 0,
    explanation: "The Maldives is an archipelago of 26 natural atolls located southwest of India and Sri Lanka.",
    status: "published"
  },
  {
    id: "asia-e-53",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which long peninsula connects mainland Southeast Asia to the island of Singapore?",
    options: ["Korean Peninsula", "Malay Peninsula", "Arabian Peninsula", "Sinai Peninsula"],
    correctIndex: 1,
    explanation: "The Malay Peninsula includes parts of Myanmar, Thailand, and Peninsular Malaysia.",
    status: "published"
  },
  {
    id: "asia-e-54",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which ocean lies directly to the south of the Asian continent?",
    options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Southern Ocean"],
    correctIndex: 2,
    explanation: "The Indian Ocean washes against the southern shores of Asia, including India and the Arabian Sea.",
    status: "published"
  },
  {
    id: "asia-e-55",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which ocean borders Asia to the east?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Arctic Ocean", "Indian Ocean"],
    correctIndex: 0,
    explanation: "The Pacific Ocean is the world's largest ocean, bordering East and Southeast Asia.",
    status: "published"
  },
  {
    id: "asia-e-56",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which ocean borders Asia to the north?",
    options: ["Indian Ocean", "Pacific Ocean", "Arctic Ocean", "Atlantic Ocean"],
    correctIndex: 2,
    explanation: "The icy Arctic Ocean bounds northern Siberia in Russia.",
    status: "published"
  },
  {
    id: "asia-e-57",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the largest bay in the world by area, located in the northeastern Indian Ocean?",
    options: ["Hudson Bay", "Bay of Bengal", "Bay of Biscay", "San Francisco Bay"],
    correctIndex: 1,
    explanation: "The Bay of Bengal is bounded by India, Bangladesh, Myanmar, and the Andaman and Nicobar Islands.",
    status: "published"
  },
  {
    id: "asia-e-58",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which sea lies directly to the west of the Indian subcontinent?",
    options: ["Red Sea", "Arabian Sea", "South China Sea", "Coral Sea"],
    correctIndex: 1,
    explanation: "The Arabian Sea is a region of the northern Indian Ocean bounded by India, Pakistan, Iran, and the Arabian Peninsula.",
    status: "published"
  },
  {
    id: "asia-e-59",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which large marginal sea is bordered by China, Vietnam, the Philippines, and Malaysia?",
    options: ["East China Sea", "South China Sea", "Yellow Sea", "Philippine Sea"],
    correctIndex: 1,
    explanation: "The South China Sea is a major shipping thoroughfare in the western Pacific Ocean.",
    status: "published"
  },
  {
    id: "asia-e-60",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which sea separates the Arabian Peninsula from the northeast coast of Africa?",
    options: ["Red Sea", "Mediterranean Sea", "Black Sea", "Baltic Sea"],
    correctIndex: 0,
    explanation: "The Red Sea is an inlet of the Indian Ocean lying between Africa and the Arabian Peninsula.",
    status: "published"
  },
  {
    id: "asia-e-61",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which narrow man-made waterway connects the Mediterranean Sea to the Red Sea?",
    options: ["Panama Canal", "Suez Canal", "Kiel Canal", "Corinth Canal"],
    correctIndex: 1,
    explanation: "The Suez Canal in Egypt connects the Mediterranean Sea to the Red Sea, enabling direct sea trade between Europe and Asia.",
    status: "published"
  },
  {
    id: "asia-e-62",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which country is historically nicknamed the 'Land of the Rising Sun'?",
    options: ["China", "Japan", "Thailand", "South Korea"],
    correctIndex: 1,
    explanation: "Japan is known as the Land of the Rising Sun because from China's perspective, the sun rises from Japan.",
    status: "published"
  },
  {
    id: "asia-e-63",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which Himalayan kingdom is known for measuring Gross National Happiness and called the 'Land of the Thunder Dragon'?",
    options: ["Nepal", "Bhutan", "Tibet", "Mongolia"],
    correctIndex: 1,
    explanation: "Bhutan is culturally known as Druk Yul, which translates to the Land of the Thunder Dragon.",
    status: "published"
  },
  {
    id: "asia-e-64",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which Southeast Asian country is popularly nicknamed the 'Land of Smiles'?",
    options: ["Vietnam", "Philippines", "Thailand", "Indonesia"],
    correctIndex: 2,
    explanation: "Thailand is widely known by the friendly tourism moniker 'The Land of Smiles'.",
    status: "published"
  },
  {
    id: "asia-e-65",
    continent: "Asia",
    difficulty: "Easy",
    question: "In which Asian country is Angkor Wat, the largest religious temple complex in the world, located?",
    options: ["Thailand", "Cambodia", "Laos", "Myanmar"],
    correctIndex: 1,
    explanation: "Angkor Wat is a 12th-century temple complex located in northwestern Cambodia.",
    status: "published"
  },
  {
    id: "asia-e-66",
    continent: "Asia",
    difficulty: "Easy",
    question: "In which Indian city is the iconic white marble Taj Mahal mausoleum located?",
    options: ["Jaipur", "Agra", "New Delhi", "Varanasi"],
    correctIndex: 1,
    explanation: "The Taj Mahal was commissioned in 1631 by Mughal Emperor Shah Jahan in the city of Agra.",
    status: "published"
  },
  {
    id: "asia-e-67",
    continent: "Asia",
    difficulty: "Easy",
    question: "In which city is Burj Khalifa, the tallest human-made skyscraper in the world, located?",
    options: ["Doha", "Riyadh", "Dubai", "Kuwait City"],
    correctIndex: 2,
    explanation: "The Burj Khalifa stands 828 meters tall in Dubai, United Arab Emirates.",
    status: "published"
  },
  {
    id: "asia-e-68",
    continent: "Asia",
    difficulty: "Easy",
    question: "In which country is the famous ancient rock-carved city of Petra located?",
    options: ["Egypt", "Jordan", "Syria", "Lebanon"],
    correctIndex: 1,
    explanation: "Petra is an archaeological site in southwestern Jordan famous for its rock-cut architecture.",
    status: "published"
  },
  {
    id: "asia-e-69",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the largest island in the Japanese archipelago?",
    options: ["Hokkaido", "Honshu", "Kyushu", "Shikoku"],
    correctIndex: 1,
    explanation: "Honshu is Japan's main and largest island, home to Tokyo, Mount Fuji, and Kyoto.",
    status: "published"
  },
  {
    id: "asia-e-70",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which Indonesian island is the most populous island on Earth, home to over half of Indonesia's population?",
    options: ["Sumatra", "Bali", "Java", "Sulawesi"],
    correctIndex: 2,
    explanation: "Java is home to more than 150 million people, making it the world's most populous island.",
    status: "published"
  },
  {
    id: "asia-e-71",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which famous tropical Indonesian island is renowned worldwide for its Hindu culture, beaches, and rice terraces?",
    options: ["Bali", "Lombok", "Timor", "Flores"],
    correctIndex: 0,
    explanation: "Bali is a world-renowned Indonesian island known for its rich arts, temple architecture, and tourism.",
    status: "published"
  },
  {
    id: "asia-e-72",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which large island in Southeast Asia is divided among three sovereign countries: Indonesia, Malaysia, and Brunei?",
    options: ["Borneo", "Sumatra", "New Guinea", "Sulawesi"],
    correctIndex: 0,
    explanation: "Borneo is the third-largest island in the world, shared by Malaysia, Indonesia (Kalimantan), and Brunei.",
    status: "published"
  },
  {
    id: "asia-e-73",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which tiny, prosperous sultanate is located entirely on the northern coast of Borneo, bordered by Malaysia?",
    options: ["Singapore", "Bahrain", "Brunei", "Qatar"],
    correctIndex: 2,
    explanation: "Brunei is a sovereign sultanate surrounded by the Malaysian state of Sarawak on Borneo.",
    status: "published"
  },
  {
    id: "asia-e-74",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which sea lies between mainland China and the western coast of the Korean Peninsula?",
    options: ["Yellow Sea", "Sea of Japan", "South China Sea", "Bering Sea"],
    correctIndex: 0,
    explanation: "The Yellow Sea is the northern part of the East China Sea, bounded by China and Korea.",
    status: "published"
  },
  {
    id: "asia-e-75",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which body of water lies between the Japanese archipelago and the Asian mainland?",
    options: ["Sea of Japan (East Sea)", "Yellow Sea", "Philippine Sea", "Okhotsk Sea"],
    correctIndex: 0,
    explanation: "The Sea of Japan separates Japan from Russia, North Korea, and South Korea.",
    status: "published"
  },
  {
    id: "asia-e-76",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which body of water separates the island of Taiwan from mainland China?",
    options: ["Taiwan Strait", "Luzon Strait", "Malacca Strait", "Hormuz Strait"],
    correctIndex: 0,
    explanation: "The Taiwan Strait is a 180-kilometer-wide strait separating Taiwan from Fujian province in mainland China.",
    status: "published"
  },
  {
    id: "asia-e-77",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the largest desert located in northwestern India and eastern Pakistan?",
    options: ["Thar Desert", "Gobi Desert", "Karakum Desert", "Dasht-e Kavir"],
    correctIndex: 0,
    explanation: "The Thar Desert, also known as the Great Indian Desert, covers parts of Rajasthan, Punjab, and Sindh.",
    status: "published"
  },
  {
    id: "asia-e-78",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which city is famously situated across two continents, with its western half in Europe and eastern half in Asia?",
    options: ["Moscow", "Istanbul", "Baku", "Tbilisi"],
    correctIndex: 1,
    explanation: "Istanbul spans the Bosphorus Strait in Turkey, connecting Europe and Asia.",
    status: "published"
  },
  {
    id: "asia-e-79",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which Asian island nation was officially known as Ceylon until 1972?",
    options: ["Maldives", "Cyprus", "Sri Lanka", "Madagascar"],
    correctIndex: 2,
    explanation: "Sri Lanka was known under British colonial rule and early independence as Ceylon.",
    status: "published"
  },
  {
    id: "asia-e-80",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which Southeast Asian country was historically known as the Kingdom of Siam until 1939?",
    options: ["Cambodia", "Laos", "Thailand", "Vietnam"],
    correctIndex: 2,
    explanation: "Thailand was officially known as Siam before adopting its modern name in 1939.",
    status: "published"
  },
  {
    id: "asia-e-81",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which country was formerly known internationally as Burma until 1989?",
    options: ["Bangladesh", "Bhutan", "Myanmar", "Nepal"],
    correctIndex: 2,
    explanation: "Myanmar adopted its current official name in 1989, replacing Burma.",
    status: "published"
  },
  {
    id: "asia-e-82",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which island nation in the Mediterranean Sea is geographically in Western Asia and divided between Greek and Turkish communities?",
    options: ["Malta", "Crete", "Cyprus", "Rhodes"],
    correctIndex: 2,
    explanation: "Cyprus is an island nation located in the eastern Mediterranean Sea south of Turkey.",
    status: "published"
  },
  {
    id: "asia-e-83",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the northernmost of the four main islands of Japan?",
    options: ["Honshu", "Hokkaido", "Kyushu", "Okinawa"],
    correctIndex: 1,
    explanation: "Hokkaido is the northernmost and second-largest of Japan's main islands, famous for snowy winters.",
    status: "published"
  },
  {
    id: "asia-e-84",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the southernmost of the four main home islands of Japan?",
    options: ["Hokkaido", "Honshu", "Kyushu", "Shikoku"],
    correctIndex: 2,
    explanation: "Kyushu is the third-largest and southernmost of Japan's four main islands.",
    status: "published"
  },
  {
    id: "asia-e-85",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which inland sea in Central Asia has dramatically shrunk since the 1960s due to extensive irrigation projects?",
    options: ["Caspian Sea", "Aral Sea", "Dead Sea", "Red Sea"],
    correctIndex: 1,
    explanation: "The Aral Sea between Kazakhstan and Uzbekistan lost over 90% of its volume after Soviet cotton irrigation diverted its feeder rivers.",
    status: "published"
  },
  {
    id: "asia-e-86",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which landlocked country contains eight of the world's fourteen peaks exceeding 8,000 meters in elevation?",
    options: ["Bhutan", "Nepal", "Mongolia", "Kyrgyzstan"],
    correctIndex: 1,
    explanation: "Nepal is home to eight of the world's fourteen 'eight-thousander' peaks, including Everest, Kanchenjunga, and Annapurna.",
    status: "published"
  },
  {
    id: "asia-e-87",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which Southeast Asian country is the only one in the region that was never colonized by a European power?",
    options: ["Vietnam", "Indonesia", "Thailand", "Malaysia"],
    correctIndex: 2,
    explanation: "Thailand successfully preserved its independence through diplomatic modernization during European colonial expansion.",
    status: "published"
  },
  {
    id: "asia-e-88",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which sovereign city-state is connected to the southern tip of Malaysia by a short causeway?",
    options: ["Monaco", "Hong Kong", "Singapore", "Macau"],
    correctIndex: 2,
    explanation: "Singapore is an island city-state located just off the southern tip of the Malay Peninsula.",
    status: "published"
  },
  {
    id: "asia-e-89",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which Asian country has the longest total coastline in the continent due to its thousands of tropical islands?",
    options: ["India", "China", "Indonesia", "Japan"],
    correctIndex: 2,
    explanation: "Indonesia's vast archipelago gives it over 54,000 kilometers of coastline, the longest in Asia.",
    status: "published"
  },
  {
    id: "asia-e-90",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which peninsula in Southwest Asia is surrounded by the Red Sea, Arabian Sea, and Persian Gulf?",
    options: ["Sinai Peninsula", "Arabian Peninsula", "Anatolian Peninsula", "Balkan Peninsula"],
    correctIndex: 1,
    explanation: "The Arabian Peninsula is the world's largest peninsula, covering over 3.2 million square kilometers.",
    status: "published"
  },
  {
    id: "asia-e-91",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the vast cold region spanning the entire northern third of Asia called?",
    options: ["Siberia", "Manchuria", "Punjab", "Anatolia"],
    correctIndex: 0,
    explanation: "Siberia spans from the Ural Mountains in the west to the Pacific Ocean in the east.",
    status: "published"
  },
  {
    id: "asia-e-92",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which desert is famous for its rolling red sand dunes and forms the vast southern portion of the Arabian Desert?",
    options: ["Rub' al Khali (Empty Quarter)", "Kalahari Desert", "Gobi Desert", "Atacama Desert"],
    correctIndex: 0,
    explanation: "The Rub' al Khali is the largest continuous sand desert in the world, covering the southern Arabian Peninsula.",
    status: "published"
  },
  {
    id: "asia-e-93",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the principal currency used in Japan?",
    options: ["Won", "Yuan", "Yen", "Ringgit"],
    correctIndex: 2,
    explanation: "The Japanese Yen is the official currency of Japan and a major global reserve currency.",
    status: "published"
  },
  {
    id: "asia-e-94",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which of these countries is completely landlocked in South Asia?",
    options: ["Pakistan", "Bangladesh", "Nepal", "India"],
    correctIndex: 2,
    explanation: "Nepal is completely bordered by land, nestled between India to the south and China (Tibet) to the north.",
    status: "published"
  },
  {
    id: "asia-e-95",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which body of water lies between the eastern coast of mainland Asia and the Kamchatka Peninsula?",
    options: ["Sea of Okhotsk", "Baltic Sea", "Black Sea", "Red Sea"],
    correctIndex: 0,
    explanation: "The Sea of Okhotsk is an arm of the northern Pacific Ocean bounded by Russia's Far East and Kamchatka.",
    status: "published"
  },
  {
    id: "asia-e-96",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which famous strait connects the Persian Gulf to the Gulf of Oman and is vital for international petroleum transport?",
    options: ["Strait of Malacca", "Strait of Hormuz", "Bab-el-Mandeb", "Bosphorus Strait"],
    correctIndex: 1,
    explanation: "The Strait of Hormuz is one of the world's most critical maritime oil transit chokepoints.",
    status: "published"
  },
  {
    id: "asia-e-97",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which Asian river system is traditionally considered the cradle of Chinese civilization?",
    options: ["Yellow River (Huang He)", "Mekong River", "Irrawaddy River", "Ganges River"],
    correctIndex: 0,
    explanation: "The fertile basin of the Yellow River was the birthplace of northern Chinese agricultural civilizations.",
    status: "published"
  },
  {
    id: "asia-e-98",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which narrow waterway connects the Red Sea to the Gulf of Aden and the Indian Ocean?",
    options: ["Strait of Hormuz", "Bab-el-Mandeb", "Strait of Malacca", "Suez Canal"],
    correctIndex: 1,
    explanation: "The Bab-el-Mandeb strait separates Yemen on the Arabian Peninsula from Djibouti and Eritrea in the Horn of Africa.",
    status: "published"
  },
  {
    id: "asia-e-99",
    continent: "Asia",
    difficulty: "Easy",
    question: "Which body of water is bordered by Azerbaijan, Iran, Kazakhstan, Russia, and Turkmenistan?",
    options: ["Caspian Sea", "Black Sea", "Aral Sea", "Red Sea"],
    correctIndex: 0,
    explanation: "The five littoral states bordering the Caspian Sea are Azerbaijan, Iran, Kazakhstan, Russia, and Turkmenistan.",
    status: "published"
  },
  {
    id: "asia-e-100",
    continent: "Asia",
    difficulty: "Easy",
    question: "What is the ancient trans-Eurasian trade route network that historically connected China with the Mediterranean called?",
    options: ["Amber Road", "Silk Road", "Spice Route", "Incense Route"],
    correctIndex: 1,
    explanation: "The Silk Road was an ancient network of Eurasian trade routes active from the Han dynasty onwards.",
    status: "published"
  },
  {
    id: "asia-m-1",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which landlocked country is situated between Russia and China?",
    options: ["Kazakhstan", "Mongolia", "Kyrgyzstan", "Nepal"],
    correctIndex: 1,
    explanation: "Mongolia is a vast landlocked nation bordered exclusively by Russia to the north and China to the south.",
    status: "published"
  },
  {
    id: "asia-m-2",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which body of water separates the Arabian Peninsula from Iran?",
    options: ["Red Sea", "Persian Gulf", "Arabian Sea", "Dead Sea"],
    correctIndex: 1,
    explanation: "The Persian Gulf is a Mediterranean sea in Western Asia situated between Iran and the Arabian Peninsula.",
    status: "published"
  },
  {
    id: "asia-m-3",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the vast triangular plateau covering most of southern peninsular India called?",
    options: ["Tibetan Plateau", "Deccan Plateau", "Malwa Plateau", "Chota Nagpur Plateau"],
    correctIndex: 1,
    explanation: "The Deccan Plateau is a large elevated volcanic basalt plateau located between the Western and Eastern Ghats in India.",
    status: "published"
  },
  {
    id: "asia-m-4",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which narrow strait separates the state of Tamil Nadu in India from the Mannar district of Sri Lanka?",
    options: ["Malacca Strait", "Palk Strait", "Sunda Strait", "Strait of Hormuz"],
    correctIndex: 1,
    explanation: "The Palk Strait connects the Bay of Bengal with the Palk Bay, separating southeastern India from Sri Lanka.",
    status: "published"
  },
  {
    id: "asia-m-5",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which major mountain range forms the northern edge of the Tibetan Plateau in western China?",
    options: ["Kunlun Mountains", "Altai Mountains", "Zagros Mountains", "Ural Mountains"],
    correctIndex: 0,
    explanation: "The Kunlun Mountains extend more than 3,000 kilometers along the northern border of Tibet.",
    status: "published"
  },
  {
    id: "asia-m-6",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which mountain system, meaning 'Celestial Mountains' in Chinese, spans Kazakhstan, Kyrgyzstan, Uzbekistan, and Xinjiang?",
    options: ["Tian Shan", "Pamir", "Karakoram", "Altai"],
    correctIndex: 0,
    explanation: "The Tian Shan is a massive Central Asian mountain system featuring peaks rising over 7,400 meters.",
    status: "published"
  },
  {
    id: "asia-m-7",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which highland junction in Central Asia is often referred to as the 'Pamir Knot' where several major mountain ranges meet?",
    options: ["Tibetan Plateau", "Pamir Mountains", "Caucasus", "Anatolian Plateau"],
    correctIndex: 1,
    explanation: "The Pamir Knot is an orogenic convergence where the Himalayas, Tian Shan, Karakoram, Kunlun, and Hindu Kush ranges converge.",
    status: "published"
  },
  {
    id: "asia-m-8",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which mountain range extends across eastern and central Afghanistan into northwestern Pakistan?",
    options: ["Zagros Mountains", "Hindu Kush", "Elburz Mountains", "Altai Mountains"],
    correctIndex: 1,
    explanation: "The Hindu Kush is an 800-kilometer mountain range whose highest peak is Tirich Mir in Pakistan (7,708 m).",
    status: "published"
  },
  {
    id: "asia-m-9",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which mountain range spans the borders of Pakistan, China, and India, and contains the world's second-highest peak, K2?",
    options: ["Himalayas", "Karakoram Range", "Kunlun Mountains", "Pamir Mountains"],
    correctIndex: 1,
    explanation: "The Karakoram range contains K2 (8,611 m) and four other 8,000-meter peaks, as well as the world's longest non-polar glaciers.",
    status: "published"
  },
  {
    id: "asia-m-10",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the largest river delta in the world, formed in southern Bangladesh and West Bengal, India?",
    options: ["Mekong Delta", "Ganges-Brahmaputra Delta", "Pearl River Delta", "Irrawaddy Delta"],
    correctIndex: 1,
    explanation: "The Ganges-Brahmaputra Delta covers roughly 105,000 square kilometers before discharging into the Bay of Bengal.",
    status: "published"
  },
  {
    id: "asia-m-11",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the name of the vast tidal mangrove forest situated in the delta of the Ganges and Brahmaputra rivers?",
    options: ["Sundarbans", "Western Ghats", "Terai", "Dooars"],
    correctIndex: 0,
    explanation: "The Sundarbans is a UNESCO World Heritage site and the largest coastal mangrove forest on Earth, home to Bengal tigers.",
    status: "published"
  },
  {
    id: "asia-m-12",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which peninsula in northeastern Siberia separates the Sea of Okhotsk from the Pacific Ocean, famous for active volcanoes?",
    options: ["Chukchi Peninsula", "Kamchatka Peninsula", "Yamal Peninsula", "Kola Peninsula"],
    correctIndex: 1,
    explanation: "The Kamchatka Peninsula is 1,250 kilometers long and contains about 160 volcanoes, 29 of which are currently active.",
    status: "published"
  },
  {
    id: "asia-m-13",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the primary and longest river flowing through the heart of Myanmar from north to south?",
    options: ["Salween River", "Irrawaddy (Ayeyarwady) River", "Chindwin River", "Mekong River"],
    correctIndex: 1,
    explanation: "The Irrawaddy River flows over 2,200 kilometers across Myanmar and empties into the Andaman Sea via a vast delta.",
    status: "published"
  },
  {
    id: "asia-m-14",
    continent: "Asia",
    difficulty: "Medium",
    question: "Into which body of water does the Mekong River empty at its southern delta?",
    options: ["Andaman Sea", "Gulf of Thailand", "South China Sea", "Philippine Sea"],
    correctIndex: 2,
    explanation: "The Mekong Delta in southern Vietnam discharges its waters directly into the South China Sea.",
    status: "published"
  },
  {
    id: "asia-m-15",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which major transboundary river originates in southwestern Tibet as the Yarlung Tsangpo before entering India and Bangladesh?",
    options: ["Indus River", "Brahmaputra River", "Ganges River", "Salween River"],
    correctIndex: 1,
    explanation: "The Brahmaputra originates in Tibet, flows east through the Himalayas, turns south into Assam (India), and joins the Ganges in Bangladesh.",
    status: "published"
  },
  {
    id: "asia-m-16",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which body of water connects the Persian Gulf to the Arabian Sea via the Strait of Hormuz?",
    options: ["Gulf of Aden", "Gulf of Oman", "Red Sea", "Gulf of Aqaba"],
    correctIndex: 1,
    explanation: "The Gulf of Oman connects the Strait of Hormuz with the open waters of the Arabian Sea.",
    status: "published"
  },
  {
    id: "asia-m-17",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which desert occupies approximately 70% of the total land area of Turkmenistan?",
    options: ["Karakum Desert", "Kyzylkum Desert", "Thar Desert", "Dasht-e Kavir"],
    correctIndex: 0,
    explanation: "The Karakum (Black Sand) Desert covers about 350,000 square kilometers in central Turkmenistan.",
    status: "published"
  },
  {
    id: "asia-m-18",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which desert lies between the Amu Darya and Syr Darya rivers, spanning Uzbekistan and Kazakhstan?",
    options: ["Kyzylkum Desert", "Karakum Desert", "Taklamakan Desert", "Gobi Desert"],
    correctIndex: 0,
    explanation: "The Kyzylkum (Red Sand) Desert is the 15th largest desert in the world, situated in the Central Asian doab.",
    status: "published"
  },
  {
    id: "asia-m-19",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which hyper-arid desert occupies the Tarim Basin in northwestern China, bounded by the Kunlun and Tian Shan ranges?",
    options: ["Gobi Desert", "Taklamakan Desert", "Ordos Desert", "Karakum Desert"],
    correctIndex: 1,
    explanation: "The Taklamakan Desert is China's largest desert, famous for shifting sand dunes and extreme continental dryness.",
    status: "published"
  },
  {
    id: "asia-m-20",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which fault-bounded depression in Xinjiang, China, drops to 154 meters below sea level, the second-lowest depression in Asia?",
    options: ["Qattara Depression", "Turpan Depression", "Danakil Depression", "Dead Sea Basin"],
    correctIndex: 1,
    explanation: "The Turpan Depression is an intensely hot, arid basin in northwest China that features Lake Ayding at its lowest point.",
    status: "published"
  },
  {
    id: "asia-m-21",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which strait connects the Java Sea to the Indian Ocean, separating the Indonesian islands of Java and Sumatra?",
    options: ["Malacca Strait", "Sunda Strait", "Lombok Strait", "Makassar Strait"],
    correctIndex: 1,
    explanation: "The Sunda Strait is an important maritime passage between Sumatra and Java containing the volcanic island of Krakatoa.",
    status: "published"
  },
  {
    id: "asia-m-22",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which deep strait between Bali and Lombok serves as an important maritime route and marks the boundary of the Wallace Line?",
    options: ["Lombok Strait", "Sunda Strait", "Torres Strait", "Bass Strait"],
    correctIndex: 0,
    explanation: "The Lombok Strait is notably deep (over 250 meters), allowing large vessels (Capesize) to pass when Malacca is too shallow.",
    status: "published"
  },
  {
    id: "asia-m-23",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the famous faunal boundary line named after a British naturalist that separates Asian and Australasian wildlife in the Indonesian archipelago?",
    options: ["Lydekker's Line", "Wallace Line", "Weber's Line", "Huxley's Line"],
    correctIndex: 1,
    explanation: "The Wallace Line, delineated by Alfred Russel Wallace in 1859, runs between Borneo/Bali and Sulawesi/Lombok.",
    status: "published"
  },
  {
    id: "asia-m-24",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which mountain range extends along the western coast of peninsular India and is recognized as a global biodiversity hotspot?",
    options: ["Aravalli Range", "Vindhya Range", "Western Ghats (Sahyadri)", "Eastern Ghats"],
    correctIndex: 2,
    explanation: "The Western Ghats traverse Maharashtra, Goa, Karnataka, Kerala, and Tamil Nadu, capturing monsoon moisture.",
    status: "published"
  },
  {
    id: "asia-m-25",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the oldest mountain range in India, extending from Gujarat through Rajasthan to Delhi?",
    options: ["Satpura Range", "Aravalli Range", "Vindhya Range", "Himalayas"],
    correctIndex: 1,
    explanation: "The Aravalli Range is an eroded remnant of an ancient Precambrian fold mountain belt.",
    status: "published"
  },
  {
    id: "asia-m-26",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which river is the second-longest river in India and frequently referred to as 'Dakshin Ganga' (Ganges of the South)?",
    options: ["Krishna River", "Godavari River", "Kaveri River", "Narmada River"],
    correctIndex: 1,
    explanation: "The Godavari originates in Maharashtra and flows 1,465 kilometers eastward across the Deccan Plateau into the Bay of Bengal.",
    status: "published"
  },
  {
    id: "asia-m-27",
    continent: "Asia",
    difficulty: "Medium",
    question: "What seasonal meteorological wind system delivers the majority of rainfall to South and Southeast Asia from June through September?",
    options: ["Northeast Monsoon", "Southwest Monsoon", "Trade Winds", "Harmattan"],
    correctIndex: 1,
    explanation: "The Southwest Monsoon develops as summer heating over the Asian landmass draws moist maritime air from the Indian Ocean.",
    status: "published"
  },
  {
    id: "asia-m-28",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which Central Asian nation is one of only two 'doubly landlocked' countries in the world (surrounded exclusively by landlocked countries)?",
    options: ["Tajikistan", "Uzbekistan", "Kyrgyzstan", "Turkmenistan"],
    correctIndex: 1,
    explanation: "Uzbekistan is doubly landlocked, bordered solely by Kazakhstan, Kyrgyzstan, Tajikistan, Afghanistan, and Turkmenistan.",
    status: "published"
  },
  {
    id: "asia-m-29",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the largest landlocked nation on Earth by geographical surface area?",
    options: ["Mongolia", "Kazakhstan", "Chad", "Bolivia"],
    correctIndex: 1,
    explanation: "Kazakhstan spans over 2.7 million square kilometers in Central Asia, making it the world's largest landlocked country.",
    status: "published"
  },
  {
    id: "asia-m-30",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the only river that flows out of Lake Baikal in Siberia?",
    options: ["Yenisey River", "Angara River", "Lena River", "Ob River"],
    correctIndex: 1,
    explanation: "The Angara River is Lake Baikal's sole surface outlet, carrying its water northward to meet the Yenisey.",
    status: "published"
  },
  {
    id: "asia-m-31",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which Siberian river forms the Gulf of Ob, the world's longest estuary, on the Kara Sea?",
    options: ["Ob River", "Lena River", "Yenisey River", "Amur River"],
    correctIndex: 0,
    explanation: "The Ob River flows north across western Siberia into the Gulf of Ob on the Arctic Ocean.",
    status: "published"
  },
  {
    id: "asia-m-32",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which great Siberian river flows past Krasnoyarsk and divides the Western Siberian Plain from the Central Siberian Plateau?",
    options: ["Lena River", "Yenisey River", "Volga River", "Irtysh River"],
    correctIndex: 1,
    explanation: "The Yenisey River is the central of the three great Siberian rivers that drain into the Arctic Ocean.",
    status: "published"
  },
  {
    id: "asia-m-33",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which eastern Siberian river has a massive delta on the Laptev Sea and is the longest river entirely within Russia?",
    options: ["Lena River", "Ob River", "Amur River", "Don River"],
    correctIndex: 0,
    explanation: "The Lena River flows 4,294 kilometers from the Baikal Mountains northward to the Arctic Ocean.",
    status: "published"
  },
  {
    id: "asia-m-34",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which major river forms a long natural boundary between the Russian Far East and northeastern China (where it is known as Heilong Jiang)?",
    options: ["Ussuri River", "Amur River", "Songhua River", "Liao River"],
    correctIndex: 1,
    explanation: "The Amur River flows over 2,800 kilometers, forming a major border between China and Russia before emptying into the Strait of Tartary.",
    status: "published"
  },
  {
    id: "asia-m-35",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the name of the massive freshwater lake in Cambodia that connects to the Mekong River and reverses its flow during monsoons?",
    options: ["Inle Lake", "Tonl\u00e9 Sap", "Songkhla Lake", "Laguna de Bay"],
    correctIndex: 1,
    explanation: "Tonlé Sap expands dramatically during the summer monsoon when Mekong floodwaters push backward into the lake.",
    status: "published"
  },
  {
    id: "asia-m-36",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which arm of the South China Sea lies off the coasts of northern Vietnam and southern China?",
    options: ["Gulf of Thailand", "Gulf of Tonkin", "Bohai Sea", "Moro Gulf"],
    correctIndex: 1,
    explanation: "The Gulf of Tonkin is bounded by northern Vietnam, China's Guangxi province, and Hainan Island.",
    status: "published"
  },
  {
    id: "asia-m-37",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which shallow gulf is bordered by Cambodia, Thailand, and southern Vietnam?",
    options: ["Gulf of Martaban", "Gulf of Thailand (Gulf of Siam)", "Gulf of Oman", "Lingayen Gulf"],
    correctIndex: 1,
    explanation: "The Gulf of Thailand connects with the South China Sea and has an average depth of around 50 meters.",
    status: "published"
  },
  {
    id: "asia-m-38",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which archipelago of 36 coral islands in the Arabian Sea is governed as a union territory of India?",
    options: ["Andaman Islands", "Lakshadweep", "Nicobar Islands", "Maldives"],
    correctIndex: 1,
    explanation: "Lakshadweep is India's smallest union territory, situated 200 to 440 kilometers off the southwestern coast of Kerala.",
    status: "published"
  },
  {
    id: "asia-m-39",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which island chain separates the Bay of Bengal to the west from the Andaman Sea to the east?",
    options: ["Mergui Archipelago", "Andaman and Nicobar Islands", "Riau Archipelago", "Sulu Archipelago"],
    correctIndex: 1,
    explanation: "The Andaman and Nicobar Islands are an Indian archipelago forming the eastern boundary of the Bay of Bengal.",
    status: "published"
  },
  {
    id: "asia-m-40",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which strait connects the Red Sea to the Gulf of Aden and the Indian Ocean?",
    options: ["Strait of Hormuz", "Bab-el-Mandeb", "Bosphorus Strait", "Strait of Malacca"],
    correctIndex: 1,
    explanation: "Bab-el-Mandeb ('Gate of Grief') lies between Yemen on the Arabian Peninsula and Djibouti/Eritrea in Africa.",
    status: "published"
  },
  {
    id: "asia-m-41",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the vast upland plateau covering most of central Turkey between the Pontic and Taurus mountain ranges?",
    options: ["Iranian Plateau", "Anatolian Plateau", "Deccan Plateau", "Colorado Plateau"],
    correctIndex: 1,
    explanation: "The Anatolian Plateau occupies the central interior of Turkey with an average elevation between 800 and 1,200 meters.",
    status: "published"
  },
  {
    id: "asia-m-42",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which mountain range extends along northern Turkey parallel to the southern coast of the Black Sea?",
    options: ["Taurus Mountains", "Pontic Mountains", "Zagros Mountains", "Caucasus Mountains"],
    correctIndex: 1,
    explanation: "The Pontic Mountains run through northern Anatolia, heavily forested and capturing maritime Black Sea precipitation.",
    status: "published"
  },
  {
    id: "asia-m-43",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which mountain chain extends along southern Turkey, separating the Mediterranean coastal region from the central Anatolian Plateau?",
    options: ["Taurus Mountains", "Alborz Mountains", "Zagros Mountains", "Carpathian Mountains"],
    correctIndex: 0,
    explanation: "The Taurus Mountains are a complex fold mountain belt running along the Mediterranean coast of southern Turkey.",
    status: "published"
  },
  {
    id: "asia-m-44",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which long mountain range extends from northwestern Iran through western and southern Iran to the Strait of Hormuz?",
    options: ["Alborz Mountains", "Zagros Mountains", "Kopet Dag", "Caucasus"],
    correctIndex: 1,
    explanation: "The Zagros Mountains stretch approximately 1,600 kilometers across southwestern Iran and northern Iraq.",
    status: "published"
  },
  {
    id: "asia-m-45",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which mountain range in northern Iran skirts the southern shore of the Caspian Sea and contains Mount Damavand?",
    options: ["Zagros Mountains", "Alborz (Elburz) Mountains", "Ural Mountains", "Hindu Kush"],
    correctIndex: 1,
    explanation: "The Alborz range forms a barrier between the humid South Caspian depression and the arid central Iranian Plateau.",
    status: "published"
  },
  {
    id: "asia-m-46",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the highest mountain peak in Iran and the highest volcano in all of Asia?",
    options: ["Mount Ararat", "Mount Damavand", "Mount Sabalan", "Mount Hermon"],
    correctIndex: 1,
    explanation: "Mount Damavand is a potentially active stratovolcano rising to 5,610 meters in the Alborz range of northern Iran.",
    status: "published"
  },
  {
    id: "asia-m-47",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which endorheic salt lake in northwestern Iran was once one of the largest lakes in the Middle East before shrinking due to damming?",
    options: ["Lake Van", "Lake Urmia", "Lake Sevan", "Lake Tuz"],
    correctIndex: 1,
    explanation: "Lake Urmia is a hyper-saline lake in Iranian Azerbaijan that has suffered critical desiccation since the late 1990s.",
    status: "published"
  },
  {
    id: "asia-m-48",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the largest lake in Turkey, situated in the mountainous eastern Anatolia region?",
    options: ["Lake Tuz", "Lake Van", "Lake Bey\u015fehir", "Lake E\u011firdir"],
    correctIndex: 1,
    explanation: "Lake Van is a saline soda lake in eastern Turkey that does not freeze in winter despite high elevation.",
    status: "published"
  },
  {
    id: "asia-m-49",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which narrow strait in northwestern Turkey connects the Sea of Marmara with the Aegean Sea?",
    options: ["Bosphorus Strait", "Dardanelles Strait", "Kerch Strait", "Otranto Strait"],
    correctIndex: 1,
    explanation: "The Dardanelles (historically the Hellespont) connects the Sea of Marmara to the Aegean Sea.",
    status: "published"
  },
  {
    id: "asia-m-50",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which small inland sea lies entirely within the borders of Turkey, separating European Turkey (Thrace) from Asian Turkey (Anatolia)?",
    options: ["Black Sea", "Sea of Marmara", "Aegean Sea", "Levantine Sea"],
    correctIndex: 1,
    explanation: "The Sea of Marmara is connected to the Black Sea by the Bosphorus and to the Aegean by the Dardanelles.",
    status: "published"
  },
  {
    id: "asia-m-51",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which triangular peninsula connects the continents of Asia and Africa and is bordered by the Gulf of Suez and Gulf of Aqaba?",
    options: ["Arabian Peninsula", "Sinai Peninsula", "Anatolian Peninsula", "Qatari Peninsula"],
    correctIndex: 1,
    explanation: "The Sinai Peninsula belongs politically to Egypt and is situated geographically in Southwest Asia.",
    status: "published"
  },
  {
    id: "asia-m-52",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which northeastern arm of the Red Sea provides port access for Jordan (Aqaba) and Israel (Eilat)?",
    options: ["Gulf of Suez", "Gulf of Aqaba", "Gulf of Aden", "Gulf of Oman"],
    correctIndex: 1,
    explanation: "The Gulf of Aqaba is bounded by Egypt, Israel, Jordan, and Saudi Arabia at the northeastern end of the Red Sea.",
    status: "published"
  },
  {
    id: "asia-m-53",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the historical geographical term for the eastern Mediterranean coastal region comprising Lebanon, Syria, Jordan, and Israel?",
    options: ["The Maghreb", "The Levant", "Mesopotamia", "Anatolia"],
    correctIndex: 1,
    explanation: "The Levant refers historically to the fertile crossroads region along the eastern shores of the Mediterranean Sea.",
    status: "published"
  },
  {
    id: "asia-m-54",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the lowest freshwater lake on Earth, located at roughly 215 meters below sea level in northern Israel?",
    options: ["Dead Sea", "Sea of Galilee (Lake Kinneret)", "Lake Hula", "Lake Tiberias"],
    correctIndex: 1,
    explanation: "The Sea of Galilee is fed and drained by the Jordan River and is the lowest freshwater lake in the world.",
    status: "published"
  },
  {
    id: "asia-m-55",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which mountain range runs parallel to the Mediterranean coast throughout Lebanon, historically famed for its cedar forests?",
    options: ["Anti-Lebanon Mountains", "Mount Lebanon Range", "Jabal al-Druze", "Golan Heights"],
    correctIndex: 1,
    explanation: "The Mount Lebanon range reaches over 3,000 meters at Qurnat as Sawda', creating a rain-shadow in the Beqaa Valley.",
    status: "published"
  },
  {
    id: "asia-m-56",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which is the only completely landlocked nation in Southeast Asia?",
    options: ["Cambodia", "Laos", "Myanmar", "Thailand"],
    correctIndex: 1,
    explanation: "Laos is bordered by Myanmar, China, Vietnam, Cambodia, and Thailand, with no direct access to the ocean.",
    status: "published"
  },
  {
    id: "asia-m-57",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which major river flows from southwestern China through northern Vietnam, passing through Hanoi before emptying into the Gulf of Tonkin?",
    options: ["Mekong River", "Red River (S\u00f4ng H\u1ed3ng)", "Black River", "Pearl River"],
    correctIndex: 1,
    explanation: "The Red River is northern Vietnam's economic lifeblood, forming a vast agricultural delta around Hanoi and Haiphong.",
    status: "published"
  },
  {
    id: "asia-m-58",
    continent: "Asia",
    difficulty: "Medium",
    question: "On which coastal island is the financial capital and most populous urban area of India, Mumbai, primarily built?",
    options: ["Elephanta Island", "Salsette Island", "Willingdon Island", "St. Mary's Island"],
    correctIndex: 1,
    explanation: "Mumbai was originally an archipelago of seven islands that were merged through land reclamation on Salsette Island.",
    status: "published"
  },
  {
    id: "asia-m-59",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which ancient Silk Road oasis city in Uzbekistan is renowned for the Registan, an ensemble of grand Islamic madrasas?",
    options: ["Tashkent", "Samarkand", "Bukhara", "Khiva"],
    correctIndex: 1,
    explanation: "Samarkand is one of the oldest continuously inhabited cities in Central Asia, prosperous due to its location on the Silk Road.",
    status: "published"
  },
  {
    id: "asia-m-60",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which historical Silk Road trading city in Uzbekistan is home to the Po-i-Kalyan complex and preserved domed bazaars?",
    options: ["Bukhara", "Andijan", "Nukus", "Fergana"],
    correctIndex: 0,
    explanation: "Bukhara was a prominent medieval center of Islamic theology, scholarship, and commerce along the Silk Road.",
    status: "published"
  },
  {
    id: "asia-m-61",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which Central Asian river, historically known to Greeks as the Oxus, flows from the Pamir Mountains toward the Aral Sea basin?",
    options: ["Syr Darya", "Amu Darya", "Ili River", "Chu River"],
    correctIndex: 1,
    explanation: "The Amu Darya forms parts of the borders of Afghanistan with Tajikistan, Uzbekistan, and Turkmenistan.",
    status: "published"
  },
  {
    id: "asia-m-62",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which Central Asian river, historically known to the Greeks as the Jaxartes, flows through the Fergana Valley into the northern Aral Sea?",
    options: ["Amu Darya", "Syr Darya", "Ural River", "Zarafshan River"],
    correctIndex: 1,
    explanation: "The Syr Darya originates in the Tian Shan mountains in Kyrgyzstan and flows over 2,200 kilometers.",
    status: "published"
  },
  {
    id: "asia-m-63",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the fertile, densely populated triangular intermontane basin shared by Uzbekistan, Kyrgyzstan, and Tajikistan in Central Asia?",
    options: ["Tarim Basin", "Fergana Valley", "Chuy Valley", "Vakhsh Valley"],
    correctIndex: 1,
    explanation: "The Fergana Valley is the agricultural heart of Central Asia, surrounded by the Tian Shan and Alay ranges.",
    status: "published"
  },
  {
    id: "asia-m-64",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which large lake in southeastern Kazakhstan is unusual because its western half is fresh water while its eastern half is saline?",
    options: ["Lake Zaysan", "Lake Balkhash", "Lake Alakol", "Lake Tengiz"],
    correctIndex: 1,
    explanation: "Lake Balkhash is divided by a narrow strait; the freshwater western part is fed by the Ili River, while the eastern part is saline.",
    status: "published"
  },
  {
    id: "asia-m-65",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which deep alpine lake in the Tian Shan mountains of Kyrgyzstan is the second-largest mountain lake in the world after Titicaca?",
    options: ["Song-K\u00f6l", "Issyk-Kul", "Chatyr-K\u00f6l", "Sarez Lake"],
    correctIndex: 1,
    explanation: "Issyk-Kul ('Warm Lake') never freezes during winter despite its altitude of 1,607 meters due to slight salinity and depth.",
    status: "published"
  },
  {
    id: "asia-m-66",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which historic mountain pass cuts through the Spin Ghar mountains, linking Peshawar in Pakistan with Jalalabad in Afghanistan?",
    options: ["Bolan Pass", "Khyber Pass", "Khojak Pass", "Salang Pass"],
    correctIndex: 1,
    explanation: "The Khyber Pass has been a vital trade route and strategic military choke-point between Central and South Asia for millennia.",
    status: "published"
  },
  {
    id: "asia-m-67",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the highest mountain peak in the Philippine archipelago, located on the island of Mindanao?",
    options: ["Mount Pulag", "Mount Apo", "Mount Mayon", "Mount Kanlaon"],
    correctIndex: 1,
    explanation: "Mount Apo is a dormant stratovolcano rising to 2,954 meters above sea level in southern Mindanao.",
    status: "published"
  },
  {
    id: "asia-m-68",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which is the largest and most populous island in the Philippines, containing the capital city of Manila?",
    options: ["Mindanao", "Luzon", "Samar", "Palawan"],
    correctIndex: 1,
    explanation: "Luzon accounts for roughly one-third of the total land area of the Philippines and over half its population.",
    status: "published"
  },
  {
    id: "asia-m-69",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which is the second-largest island in the Philippines, located in the southern part of the country?",
    options: ["Panay", "Mindanao", "Negros", "Leyte"],
    correctIndex: 1,
    explanation: "Mindanao is the southernmost major island group of the Philippines, known for diverse geography and agriculture.",
    status: "published"
  },
  {
    id: "asia-m-70",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which strait connects the South China Sea to the Philippine Sea, separating Taiwan from the Philippine island of Luzon?",
    options: ["Taiwan Strait", "Luzon Strait", "Sunda Strait", "Mindoro Strait"],
    correctIndex: 1,
    explanation: "The Luzon Strait is an approximately 250-kilometer wide maritime passage containing the Batanes and Babuyan islands.",
    status: "published"
  },
  {
    id: "asia-m-71",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which active stratovolcano in Albay province, Philippines, is renowned for having an almost perfectly symmetrical cone?",
    options: ["Mount Pinatubo", "Mayon Volcano", "Taal Volcano", "Mount Bulusan"],
    correctIndex: 1,
    explanation: "Mayon Volcano is the most active volcano in the Philippines, famed globally for its symmetric conical shape.",
    status: "published"
  },
  {
    id: "asia-m-72",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which volcano on the Philippine island of Luzon produced a massive cataclysmic eruption in June 1991 that cooled global temperatures?",
    options: ["Mayon Volcano", "Mount Pinatubo", "Mount Banahaw", "Taal Volcano"],
    correctIndex: 1,
    explanation: "Mount Pinatubo's 1991 eruption injected roughly 20 million tons of sulfur dioxide into the stratosphere, lowering global temperatures by ~0.5°C.",
    status: "published"
  },
  {
    id: "asia-m-73",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which active volcano located within a caldera in East Java, Indonesia, is sacred to the local Tenggerese Hindu people?",
    options: ["Mount Merapi", "Mount Bromo", "Mount Agung", "Mount Rinjani"],
    correctIndex: 1,
    explanation: "Mount Bromo sits inside the massive Tengger caldera in Bromo Tengger Semeru National Park.",
    status: "published"
  },
  {
    id: "asia-m-74",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which volcanic island in the Sunda Strait between Java and Sumatra experienced a catastrophic eruption in August 1883?",
    options: ["Tambora", "Krakatoa (Krakatau)", "Kelud", "Semeru"],
    correctIndex: 1,
    explanation: "Krakatoa's 1883 explosion generated massive tsunamis and acoustic shockwaves heard thousands of miles away.",
    status: "published"
  },
  {
    id: "asia-m-75",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the largest volcanic caldera lake in the world, located in the mountains of northern Sumatra, Indonesia?",
    options: ["Lake Maninjau", "Lake Toba", "Lake Singkarak", "Lake Pos\u00f3"],
    correctIndex: 1,
    explanation: "Lake Toba occupies the caldera of a supervolcano that produced a massive VEI-8 eruption approximately 74,000 years ago.",
    status: "published"
  },
  {
    id: "asia-m-76",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the largest island located entirely within Indonesian territory, and the sixth-largest island in the world?",
    options: ["Java", "Sumatra", "Sulawesi", "Flores"],
    correctIndex: 1,
    explanation: "Sumatra covers over 473,000 square kilometers, situated west of Java and south of the Malay Peninsula.",
    status: "published"
  },
  {
    id: "asia-m-77",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which large Indonesian island, formerly called Celebes, is renowned for its unique four-armed spidery geographic outline?",
    options: ["Halmahera", "Sulawesi", "Seram", "Buru"],
    correctIndex: 1,
    explanation: "Sulawesi features four mountainous peninsulas separated by deep gulfs, located east of Borneo across the Makassar Strait.",
    status: "published"
  },
  {
    id: "asia-m-78",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the second-largest island in Japan, famous for volcanic caldera lakes, national parks, and Sapporo?",
    options: ["Honshu", "Hokkaido", "Kyushu", "Shikoku"],
    correctIndex: 1,
    explanation: "Hokkaido is Japan's northernmost prefecture and second-largest island, separated from Honshu by the Tsugaru Strait.",
    status: "published"
  },
  {
    id: "asia-m-79",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the smallest and least populous of the four main islands of Japan?",
    options: ["Kyushu", "Shikoku", "Okinawa", "Sado"],
    correctIndex: 1,
    explanation: "Shikoku is situated south of western Honshu and northeast of Kyushu, bordered by the Seto Inland Sea.",
    status: "published"
  },
  {
    id: "asia-m-80",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which chain of subtropical Japanese islands stretches southwest from Kyushu toward Taiwan, historically the Ryukyu Kingdom?",
    options: ["Kurile Islands", "Ryukyu Islands (Okinawa Prefecture)", "Izu Islands", "Ogasawara Islands"],
    correctIndex: 1,
    explanation: "The Ryukyu Islands extend for about 1,100 kilometers, separating the East China Sea from the Philippine Sea.",
    status: "published"
  },
  {
    id: "asia-m-81",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which body of water separates the Japanese main islands of Honshu, Shikoku, and Kyushu?",
    options: ["Sea of Japan", "Seto Inland Sea", "Tokyo Bay", "Ise Bay"],
    correctIndex: 1,
    explanation: "The Seto Inland Sea is a calm natural waterway dotted with hundreds of small islands between Honshu, Shikoku, and Kyushu.",
    status: "published"
  },
  {
    id: "asia-m-82",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which strait separates the Japanese islands of Honshu and Hokkaido, beneath which the 53.8-kilometer Seikan Tunnel was built?",
    options: ["Bungo Strait", "Tsugaru Strait", "La P\u00e9rouse Strait", "Kanmon Strait"],
    correctIndex: 1,
    explanation: "The Tsugaru Strait connects the Sea of Japan with the Pacific Ocean between northern Honshu and southern Hokkaido.",
    status: "published"
  },
  {
    id: "asia-m-83",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which strait separates the Korean Peninsula from Kyushu and southwestern Honshu?",
    options: ["Taiwan Strait", "Korea Strait", "Tartary Strait", "Bashi Channel"],
    correctIndex: 1,
    explanation: "The Korea Strait connects the East China Sea with the Sea of Japan, containing Tsushima Island.",
    status: "published"
  },
  {
    id: "asia-m-84",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the highest mountain on the Korean Peninsula, an active volcano with a caldera lake on the border with China?",
    options: ["Mount Halla", "Mount Paektu (Changbai)", "Mount Jiri", "Mount Seorak"],
    correctIndex: 1,
    explanation: "Mount Paektu rises to 2,744 meters on the China–North Korea border and contains the crater lake Heaven Lake (Tianchi).",
    status: "published"
  },
  {
    id: "asia-m-85",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which river forms the western segment of the border between North Korea and China, emptying into Korea Bay?",
    options: ["Tumen River", "Yalu (Amnok) River", "Taedong River", "Han River"],
    correctIndex: 1,
    explanation: "The Yalu River flows over 790 kilometers from Mount Paektu into the Yellow Sea, dividing China from North Korea.",
    status: "published"
  },
  {
    id: "asia-m-86",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which river forms the northeastern border between North Korea and China, and the final 17 kilometers of border between North Korea and Russia?",
    options: ["Yalu River", "Tumen River", "Amur River", "Liao River"],
    correctIndex: 1,
    explanation: "The Tumen River flows northeast from Mount Paektu into the Sea of Japan.",
    status: "published"
  },
  {
    id: "asia-m-87",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which major river flows directly through the center of Seoul, South Korea, before joining the Imjin River?",
    options: ["Nakdong River", "Han River", "Geum River", "Yeongsan River"],
    correctIndex: 1,
    explanation: "The Han River is the fourth longest river on the Korean Peninsula and plays a major role in Korean history and commerce.",
    status: "published"
  },
  {
    id: "asia-m-88",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which river system in southern China flows into the South China Sea between Hong Kong and Macau?",
    options: ["Yangtze River", "Pearl River (Zhujiang)", "Huai River", "Min River"],
    correctIndex: 1,
    explanation: "The Pearl River system drains southern China into the Pearl River Delta, one of the world's most populous megacity regions.",
    status: "published"
  },
  {
    id: "asia-m-89",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which colossal hydroelectric gravity dam on the Yangtze River in Hubei, China, is the world's largest power station by installed capacity?",
    options: ["Baihetan Dam", "Three Gorges Dam", "Xiluodu Dam", "Nurek Dam"],
    correctIndex: 1,
    explanation: "The Three Gorges Dam spans 2,335 meters across the Yangtze River and has an electrical generating capacity of 22,500 MW.",
    status: "published"
  },
  {
    id: "asia-m-90",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the name of the highest railway line in the world, traversing Permafrost and mountain passes over 5,000 meters above sea level to Lhasa?",
    options: ["Trans-Siberian Railway", "Qinghai-Tibet Railway", "Baikal-Amur Mainline", "Konkan Railway"],
    correctIndex: 1,
    explanation: "The Qinghai-Tibet Railway reaches Tanggula Pass at an elevation of 5,072 meters, the highest railway pass on Earth.",
    status: "published"
  },
  {
    id: "asia-m-91",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the largest freshwater lake in China, located in Jiangxi province on the south bank of the Yangtze River?",
    options: ["Dongting Lake", "Poyang Lake", "Taihu Lake", "Hongze Lake"],
    correctIndex: 1,
    explanation: "Poyang Lake is China's largest freshwater lake, serving as a vital winter habitat for migratory Siberian cranes.",
    status: "published"
  },
  {
    id: "asia-m-92",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the largest saline lake in China, located in an endorheic basin on the northeastern Tibetan Plateau?",
    options: ["Poyang Lake", "Qinghai Lake", "Lake Namtso", "Lake Yamdrok"],
    correctIndex: 1,
    explanation: "Qinghai Lake (historically Koko Nor) covers roughly 4,500 square kilometers in Qinghai province.",
    status: "published"
  },
  {
    id: "asia-m-93",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the highest mountain peak in the world that has never been climbed, protected by Bhutanese religious prohibition?",
    options: ["Kanchenjunga", "Gangkhar Puensum", "Machapuchare", "Nanda Devi"],
    correctIndex: 1,
    explanation: "Gangkhar Puensum (7,570 m) in Bhutan is the highest unclimbed peak on Earth; Bhutan bans mountaineering on peaks above 6,000 m out of spiritual respect.",
    status: "published"
  },
  {
    id: "asia-m-94",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which narrow mountain pass at 5,540 meters elevation connects Ladakh in India to the Tarim Basin in China across the Karakoram range?",
    options: ["Nathu La", "Karakoram Pass", "Rohtang Pass", "Zoji La"],
    correctIndex: 1,
    explanation: "The Karakoram Pass was a critical, high-altitude pass on the historical caravan route connecting Leh with Yarkand.",
    status: "published"
  },
  {
    id: "asia-m-95",
    continent: "Asia",
    difficulty: "Medium",
    question: "What is the name of the narrow panhandle strip of territory in northeastern Afghanistan that separates Tajikistan from Pakistan and touches China?",
    options: ["Khyber Corridor", "Wakhan Corridor", "Fergana Gap", "Bolor Valley"],
    correctIndex: 1,
    explanation: "The Wakhan Corridor was created in the late 19th century as a buffer zone between the Russian and British empires during the Great Game.",
    status: "published"
  },
  {
    id: "asia-m-96",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which mountain pass in the Himalayas connects Sikkim in India with Tibet in China and was historically part of the Tea Horse Road?",
    options: ["Khyber Pass", "Nathu La", "Shipki La", "Bolan Pass"],
    correctIndex: 1,
    explanation: "Nathu La sits at 4,310 meters on the India-China border, serving as an official border trade post.",
    status: "published"
  },
  {
    id: "asia-m-97",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which great river basin in Russia covers over 2.9 million square kilometers of the vast Western Siberian Plain?",
    options: ["Volga Basin", "Ob-Irtysh Basin", "Don Basin", "Dnieper Basin"],
    correctIndex: 1,
    explanation: "The Ob-Irtysh drainage basin is one of the largest in Asia, flowing across vast taiga and tundra regions to the Arctic Ocean.",
    status: "published"
  },
  {
    id: "asia-m-98",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which historical region in Western Asia lies in the arid plateau bounded by the Black Sea, Mediterranean Sea, and Armenian Highlands?",
    options: ["Mesopotamia", "Anatolia (Asia Minor)", "Bactria", "Sogdia"],
    correctIndex: 1,
    explanation: "Anatolia forms the Asian portion of modern Turkey, bounded on three sides by the Black, Aegean, and Mediterranean seas.",
    status: "published"
  },
  {
    id: "asia-m-99",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which sea lies between the southern coast of Ukraine, the western coast of Russia, and the Crimean Peninsula, connecting to the Black Sea via the Kerch Strait?",
    options: ["Caspian Sea", "Sea of Azov", "Baltic Sea", "White Sea"],
    correctIndex: 1,
    explanation: "The Sea of Azov is the shallowest sea in the world, with a maximum depth of only 14 meters.",
    status: "published"
  },
  {
    id: "asia-m-100",
    continent: "Asia",
    difficulty: "Medium",
    question: "Which major strait in Southeast Asia separates the Malay Peninsula from the island of Sumatra and carries roughly a quarter of world maritime trade?",
    options: ["Sunda Strait", "Strait of Malacca", "Torres Strait", "Lombok Strait"],
    correctIndex: 1,
    explanation: "The Strait of Malacca is an 800-kilometer waterway that forms the main shipping channel between the Indian and Pacific Oceans.",
    status: "published"
  },
  {
    id: "asia-h-1",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the lowest dry point of land on Earth, located in Asia?",
    options: ["Turpan Depression", "Dead Sea Shore", "Caspian Sea Basin", "Lake Baikal floor"],
    correctIndex: 1,
    explanation: "The shores of the Dead Sea (bordering Jordan, Israel, and the West Bank) sit approximately 430 meters below sea level.",
    status: "published"
  },
  {
    id: "asia-h-2",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which strait connects the Andaman Sea (Indian Ocean) to the South China Sea (Pacific Ocean)?",
    options: ["Strait of Hormuz", "Strait of Malacca", "Bering Strait", "Sunda Strait"],
    correctIndex: 1,
    explanation: "The Strait of Malacca is one of the most critical shipping lanes in the world, running between the Malay Peninsula and Sumatra.",
    status: "published"
  },
  {
    id: "asia-h-3",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the deepest oceanic trench in the world, located in the western Pacific Ocean east of the Philippines?",
    options: ["Puerto Rico Trench", "Mariana Trench", "Java Trench", "Kuril-Kamchatka Trench"],
    correctIndex: 1,
    explanation: "The Mariana Trench reaches a maximum known depth of approximately 10,994 meters at Challenger Deep.",
    status: "published"
  },
  {
    id: "asia-h-4",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which desert in southeastern Iran frequently records some of the highest land surface skin temperatures on Earth (exceeding 70°C)?",
    options: ["Dasht-e Kavir", "Dasht-e Lut", "Karakum Desert", "Thar Desert"],
    correctIndex: 1,
    explanation: "Satellite measurements from NASA's MODIS have repeatedly recorded Earth's highest land surface skin temperatures in the Dasht-e Lut.",
    status: "published"
  },
  {
    id: "asia-h-5",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the longest glacier in the Karakoram Mountains and the second-longest non-polar glacier in the world?",
    options: ["Fedchenko Glacier", "Siachen Glacier", "Baltoro Glacier", "Biafo Glacier"],
    correctIndex: 1,
    explanation: "The Siachen Glacier spans roughly 76 kilometers in the eastern Karakoram range near the Line of Control.",
    status: "published"
  },
  {
    id: "asia-h-6",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the longest glacier outside the polar regions, located in the Pamir Mountains of Tajikistan?",
    options: ["Siachen Glacier", "Fedchenko Glacier", "Batura Glacier", "Hubbard Glacier"],
    correctIndex: 1,
    explanation: "The Fedchenko Glacier in north-central Tajikistan extends 77 kilometers and covers over 700 square kilometers.",
    status: "published"
  },
  {
    id: "asia-h-7",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which town in Meghalaya, India, holds the official Guinness World Record for the highest average annual rainfall on Earth?",
    options: ["Cherrapunji", "Mawsynram", "Agumbe", "Mahabaleshwar"],
    correctIndex: 1,
    explanation: "Mawsynram receives an average annual precipitation of roughly 11,872 millimeters due to orographic uplift over the Khasi Hills.",
    status: "published"
  },
  {
    id: "asia-h-8",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which Siberian settlement in the Sakha Republic (Yakutia) is widely regarded as the coldest permanently inhabited place on Earth?",
    options: ["Norilsk", "Oymyakon", "Yakutsk", "Tiksi"],
    correctIndex: 1,
    explanation: "Oymyakon recorded a certified minimum temperature of -67.7°C (-89.9°F) in 1933 in its thermal inversion valley.",
    status: "published"
  },
  {
    id: "asia-h-9",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which narrow mountain pass at 4,693 meters altitude serves as the highest paved international border crossing in the world, connecting Pakistan and China?",
    options: ["Khyber Pass", "Khunjerab Pass", "Torugart Pass", "Nathu La"],
    correctIndex: 1,
    explanation: "The Khunjerab Pass carries the Karakoram Highway over the Karakoram range between Gilgit-Baltistan and Xinjiang.",
    status: "published"
  },
  {
    id: "asia-h-10",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the name of the dried, salt-encrusted lake basin in Xinjiang, China, that historically hosted nuclear tests and the ancient Loulan Kingdom?",
    options: ["Lop Nur", "Ayding Lake", "Bosten Lake", "Ebinur Lake"],
    correctIndex: 0,
    explanation: "Lop Nur was once a vast terminal marsh and lake in the eastern Tarim Basin before completely drying up in the 1970s.",
    status: "published"
  },
  {
    id: "asia-h-11",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the deepest lake in Southeast Asia, reaching a cryptodepression depth of 590 meters on the island of Sulawesi, Indonesia?",
    options: ["Lake Toba", "Lake Matano", "Lake Towuti", "Lake Pos\u00f3"],
    correctIndex: 1,
    explanation: "Lake Matano is a graben rift lake in South Sulawesi and the tenth-deepest lake in the world, home to unique endemic cichlids.",
    status: "published"
  },
  {
    id: "asia-h-12",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which mountain pass in the Dzhungarian Alatau forms a historic natural corridor between Kazakhstan and Xinjiang, China?",
    options: ["Dzhungarian Gate (Alataw Pass)", "Khyber Pass", "Salang Pass", "Bolan Pass"],
    correctIndex: 0,
    explanation: "The Dzhungarian Gate is a narrow valley connecting the Balkhash and Junggar basins, historically traversed by nomadic horse confederacies.",
    status: "published"
  },
  {
    id: "asia-h-13",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which strait separates the Russian island of Sakhalin from the mainland Asian coast of Siberia?",
    options: ["La P\u00e9rouse Strait", "Strait of Tartary", "Tsugaru Strait", "Nemuro Strait"],
    correctIndex: 1,
    explanation: "The Strait of Tartary connects the Sea of Okhotsk with the Sea of Japan, narrowing to just 7.3 kilometers at Nevelskoy Strait.",
    status: "published"
  },
  {
    id: "asia-h-14",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which strait separates the Russian island of Sakhalin from the northern Japanese island of Hokkaido?",
    options: ["Tsugaru Strait", "La P\u00e9rouse Strait (Soya Strait)", "Kuril Strait", "Bashi Channel"],
    correctIndex: 1,
    explanation: "La Pérouse Strait (known as Soya Strait in Japan) connects the Sea of Japan with the Sea of Okhotsk.",
    status: "published"
  },
  {
    id: "asia-h-15",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which natural landslide dam, formed by a 1911 earthquake in Tajikistan, created Lake Sarez and is the tallest dam in the world at 567 meters?",
    options: ["Nurek Dam", "Usoi Dam", "Rogun Dam", "Vakhsh Dam"],
    correctIndex: 1,
    explanation: "The Usoi Dam was created when a massive seismic rockslide dammed the Murghab River in the Pamir Mountains.",
    status: "published"
  },
  {
    id: "asia-h-16",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the only exclusively freshwater seal species in the world, endemic to Lake Baikal in Siberia?",
    options: ["Caspian seal", "Baikal seal (Nerpa)", "Ringed seal", "Harbor seal"],
    correctIndex: 1,
    explanation: "Pusa sibirica (the Baikal seal or Nerpa) lives solely in the deep freshwater waters of Lake Baikal.",
    status: "published"
  },
  {
    id: "asia-h-17",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which Yemeni island archipelago in the northwestern Indian Ocean is famous for its bizarre dragon blood trees and high floral endemism?",
    options: ["Lakshadweep", "Socotra", "Kuril Islands", "Andaman Islands"],
    correctIndex: 1,
    explanation: "Socotra has been isolated from continental plates since the Miocene, resulting in over 37% of its plant species being endemic.",
    status: "published"
  },
  {
    id: "asia-h-18",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which territory of Oman is a coastal exclave separated from the rest of the country by the United Arab Emirates, commanding the Strait of Hormuz?",
    options: ["Dhofar", "Musandam Peninsula", "Madha", "Al Buraimi"],
    correctIndex: 1,
    explanation: "The Musandam Peninsula is an Omani exclave projecting into the Strait of Hormuz, featuring fjord-like drowned river valleys (khors).",
    status: "published"
  },
  {
    id: "asia-h-19",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the rare geographic anomaly of Nahwa, an Emirati village located inside the Omani enclave of Madha, which itself is inside the UAE?",
    options: ["Condominium", "Counter-enclave (second-order enclave)", "Protectorate", "Neutral Zone"],
    correctIndex: 1,
    explanation: "Nahwa is an enclave of the UAE located inside Madha, which is an enclave of Oman located inside the UAE.",
    status: "published"
  },
  {
    id: "asia-h-20",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the triangular geographic tripoint region in Southeast Asia where the borders of Thailand, Laos, and Myanmar meet at the Ruak and Mekong rivers?",
    options: ["Golden Crescent", "Golden Triangle", "Emerald Triangle", "Seven Sisters"],
    correctIndex: 1,
    explanation: "The Golden Triangle is the tripoint junction of Myanmar, Laos, and Thailand where the Ruak River flows into the Mekong.",
    status: "published"
  },
  {
    id: "asia-h-21",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which vast depression in northern Qinghai province, China, contains extensive salt flats, yardangs, and rich lithium reserves?",
    options: ["Tarim Basin", "Qaidam Basin", "Junggar Basin", "Sichuan Basin"],
    correctIndex: 1,
    explanation: "The Qaidam Basin is an endorheic hyper-arid intermontane basin in northern Tibet sitting between 2,600 and 3,000 meters elevation.",
    status: "published"
  },
  {
    id: "asia-h-22",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which Asian desert in Inner Mongolia features the tallest stationary sand dunes on Earth (rising over 450 meters) and more than 100 spring-fed lakes?",
    options: ["Taklamakan Desert", "Badain Jaran Desert", "Tengger Desert", "Ordos Desert"],
    correctIndex: 1,
    explanation: "The Badain Jaran Desert is famous for megadunes held stable by underground acoustic resonance and spring water tables.",
    status: "published"
  },
  {
    id: "asia-h-23",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the geological name of the unique tower karst landscapes found in Guilin, China, and Ha Long Bay, Vietnam?",
    options: ["Fenglin and Fengcong karst", "Thermokarst", "Pseudokarst", "Sinkhole karst"],
    correctIndex: 0,
    explanation: "Fenglin (isolated limestone towers) and Fengcong (cluster peaks with common bases) are distinctive subtropical karst landforms.",
    status: "published"
  },
  {
    id: "asia-h-24",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which volcanic belt runs through Kamchatka, the Kurils, Japan, the Philippines, and Indonesia, causing high seismic activity?",
    options: ["Alpine-Himalayan belt", "Pacific Ring of Fire", "Mid-Atlantic Ridge", "East African Rift"],
    correctIndex: 1,
    explanation: "The Pacific Ring of Fire is a horseshoe-shaped basin where subducting oceanic plates generate roughly 90% of Earth's earthquakes.",
    status: "published"
  },
  {
    id: "asia-h-25",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which deep submarine trench extends parallel to the southern coast of Java and Sumatra in the northeastern Indian Ocean?",
    options: ["Philippine Trench", "Sunda (Java) Trench", "Mariana Trench", "Japan Trench"],
    correctIndex: 1,
    explanation: "The Sunda Trench is formed by the subduction of the Indo-Australian Plate beneath the Sunda Plate, reaching depths of 7,290 meters.",
    status: "published"
  },
  {
    id: "asia-h-26",
    continent: "Asia",
    difficulty: "Hard",
    question: "What ocean-atmosphere coupled climate phenomenon across the tropical Indian Ocean causes alternating droughts and floods in East Africa and Australasia?",
    options: ["El Ni\u00f1o-Southern Oscillation", "Indian Ocean Dipole (IOD)", "Madden-Julian Oscillation", "North Atlantic Oscillation"],
    correctIndex: 1,
    explanation: "The Indian Ocean Dipole is characterized by an anomalous sea surface temperature gradient between the western and eastern Indian Ocean.",
    status: "published"
  },
  {
    id: "asia-h-27",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which strong northwesterly wind blows across Iraq and the Persian Gulf during summer, driving dust storms and reducing humidity?",
    options: ["Khamsin", "Shamal", "Sirocco", "Ghibli"],
    correctIndex: 1,
    explanation: "The Shamal is a hot northwesterly wind channelled between the Zagros Mountains and the Arabian Plateau.",
    status: "published"
  },
  {
    id: "asia-h-28",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the deepest point in the Indian Ocean, located within the Sunda Trench south of Java?",
    options: ["Diamantina Deep", "D\u00f6rr Deep (Java Deep)", "Challenger Deep", "Milwaukee Deep"],
    correctIndex: 1,
    explanation: "The Java Deep (or Dörr Deep) in the Sunda Trench reaches approximately 7,290 meters below sea level.",
    status: "published"
  },
  {
    id: "asia-h-29",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which mountain range extends along the spine of the Indochinese Peninsula, separating the Mekong River basin from the South China Sea coast of Vietnam?",
    options: ["Cardamom Mountains", "Annamite Range (Truong Son)", "Dangrek Mountains", "Arakan Mountains"],
    correctIndex: 1,
    explanation: "The Annamite Range runs roughly 1,100 kilometers through Laos, Vietnam, and a small portion of Cambodia.",
    status: "published"
  },
  {
    id: "asia-h-30",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which mountain range in southwestern Cambodia is one of Southeast Asia's most isolated rainforest regions, home to endangered Indochinese tigers and elephants?",
    options: ["Annamite Range", "Cardamom Mountains", "Tenasserim Range", "Barisan Mountains"],
    correctIndex: 1,
    explanation: "The Cardamom Mountains (Kravanh) stretch across southwestern Cambodia into eastern Thailand.",
    status: "published"
  },
  {
    id: "asia-h-31",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which volcanic mountain range forms the 1,700-kilometer geological spine of the island of Sumatra?",
    options: ["Barisan Mountains (Bukit Barisan)", "Crocker Range", "Schwaner Mountains", "Maoke Mountains"],
    correctIndex: 0,
    explanation: "The Bukit Barisan contains 35 active volcanoes running along the western side of Sumatra.",
    status: "published"
  },
  {
    id: "asia-h-32",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which deep strait separates the islands of Borneo and Sulawesi in Indonesia?",
    options: ["Karimata Strait", "Makassar Strait", "Sunda Strait", "Gaspar Strait"],
    correctIndex: 1,
    explanation: "The Makassar Strait connects the Celebes Sea to the Java Sea, forming an important maritime corridor for deep-draft ships.",
    status: "published"
  },
  {
    id: "asia-h-33",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which strait connects the South China Sea to the Java Sea between the islands of Sumatra and Borneo?",
    options: ["Makassar Strait", "Karimata Strait", "Lombok Strait", "Bangka Strait"],
    correctIndex: 1,
    explanation: "The Karimata Strait is roughly 200 kilometers wide, bounded by Belitung island to the west and Borneo to the east.",
    status: "published"
  },
  {
    id: "asia-h-34",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the highest mountain peak in the Indonesian archipelago and all of Oceania, located in the Sudirman Range of Papua?",
    options: ["Mount Kerinci", "Puncak Jaya (Carstensz Pyramid)", "Mount Rinjani", "Mount Semeru"],
    correctIndex: 1,
    explanation: "Puncak Jaya rises to 4,884 meters, making it the highest island peak in the world and one of the Seven Summits.",
    status: "published"
  },
  {
    id: "asia-h-35",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the highest mountain peak on the island of Borneo, located in the Crocker Range of Sabah, Malaysia?",
    options: ["Mount Trusmadi", "Mount Kinabalu", "Mount Murud", "Mount Tambuyukon"],
    correctIndex: 1,
    explanation: "Mount Kinabalu reaches 4,095 meters and is recognized as a UNESCO World Heritage site for extreme botanical diversity.",
    status: "published"
  },
  {
    id: "asia-h-36",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which high-altitude lake in Tibet sits at 4,718 meters elevation and is sacred to Tibetan Buddhists as one of the Great Three Holy Lakes?",
    options: ["Qinghai Lake", "Lake Namtso", "Poyang Lake", "Dongting Lake"],
    correctIndex: 1,
    explanation: "Lake Namtso ('Heavenly Lake') is the highest large salt lake in China, surrounded by the snow-capped Nyenchen Tanglha range.",
    status: "published"
  },
  {
    id: "asia-h-37",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which freshwater lake in southwestern Tibet sits at 4,590 meters and is venerated by Hindus, Jains, Buddhists, and Bönpos near Mount Kailash?",
    options: ["Lake Rakshastal", "Lake Manasarovar", "Lake Yamdrok", "Pangong Tso"],
    correctIndex: 1,
    explanation: "Lake Manasarovar lies near the source of four of Asia's great rivers: the Indus, Brahmaputra, Sutlej, and Karnali.",
    status: "published"
  },
  {
    id: "asia-h-38",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which transboundary endorheic lake in the Himalayas is two-thirds controlled by China (Tibet) and one-third by India (Ladakh)?",
    options: ["Tso Moriri", "Pangong Tso", "Lake Manasarovar", "Chushul Lake"],
    correctIndex: 1,
    explanation: "Pangong Tso is a 134-kilometer-long endorheic lake famous for changing shades of blue, green, and turquoise.",
    status: "published"
  },
  {
    id: "asia-h-39",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the highest paved road pass in the world traversed by normal traffic, located in the Kailash Range of Ladakh at 5,798 meters?",
    options: ["Khardung La", "Umling La", "Chang La", "Tanglang La"],
    correctIndex: 1,
    explanation: "Umling La was paved by India's Border Roads Organisation in 2021 at an elevation of 19,024 feet (5,798 m).",
    status: "published"
  },
  {
    id: "asia-h-40",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which mountain pass connects the Kashmir Valley with the high-altitude cold desert of Ladakh through the Great Himalayas?",
    options: ["Rohtang Pass", "Zoji La", "Shipki La", "Banihal Pass"],
    correctIndex: 1,
    explanation: "Zoji La sits at 3,528 meters, providing the primary road link (NH 1) between Srinagar and Leh.",
    status: "published"
  },
  {
    id: "asia-h-41",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which river canyon in Tibet carved by the Yarlung Tsangpo is recognized as the deepest and longest land canyon in the world?",
    options: ["Grand Canyon", "Yarlung Tsangpo Grand Canyon", "Tiger Leaping Gorge", "Kali Gandaki Gorge"],
    correctIndex: 1,
    explanation: "The Yarlung Tsangpo Grand Canyon reaches depths of over 5,300 meters between Mount Namcha Barwa and Gyala Peri.",
    status: "published"
  },
  {
    id: "asia-h-42",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which river in Nepal flows between Dhaulagiri and Annapurna, creating what many geographers consider the deepest valley on Earth?",
    options: ["Koshi River", "Kali Gandaki River", "Karnali River", "Sun Koshi"],
    correctIndex: 1,
    explanation: "The Kali Gandaki Gorge has a vertical drop of more than 5,500 meters between the summits of Dhaulagiri (8,167 m) and Annapurna I (8,091 m).",
    status: "published"
  },
  {
    id: "asia-h-43",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the high-altitude plateau in southwestern Arabia called, where the capital Sana'a sits at over 2,200 meters?",
    options: ["Yemeni Highlands (Sarawat Mountains)", "Najd", "Hejaz", "Hadramawt Plateau"],
    correctIndex: 0,
    explanation: "The western highlands of Yemen receive significant orographic rainfall and contain the highest peak in Arabia, Jabal An-Nabi Shu'ayb (3,666 m).",
    status: "published"
  },
  {
    id: "asia-h-44",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which valley and historical region in southern Yemen is famous for mudbrick high-rise buildings like those in Shibam?",
    options: ["Wadi Hadramawt", "Wadi Rum", "Wadi Hanifa", "Wadi Mujib"],
    correctIndex: 0,
    explanation: "Wadi Hadramawt is an arid valley running parallel to the Arabian Sea coast, home to Shibam, the 'Manhattan of the Desert'.",
    status: "published"
  },
  {
    id: "asia-h-45",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which river in southern Lebanon flows into the Mediterranean Sea north of Tyre and marks an important geopolitical boundary?",
    options: ["Orontes River", "Litani River", "Hasbani River", "Barada River"],
    correctIndex: 1,
    explanation: "The Litani River is the longest river entirely within Lebanon, originating in the fertile Beqaa Valley.",
    status: "published"
  },
  {
    id: "asia-h-46",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which river originates in Lebanon, flows northward through western Syria into Turkey, and empties into the Mediterranean Sea?",
    options: ["Litani River", "Orontes (Asi) River", "Euphrates River", "Yarmouk River"],
    correctIndex: 1,
    explanation: "The Orontes River is unusual in the region because it flows predominantly northward from Lebanon through Syria into Antakya, Turkey.",
    status: "published"
  },
  {
    id: "asia-h-47",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the name of the oasis city in Syria that historically depended on the Barada River and claims to be the oldest continuously inhabited capital?",
    options: ["Aleppo", "Damascus", "Homs", "Palmyra"],
    correctIndex: 1,
    explanation: "Damascus was nurtured by the Ghouta oasis fed by the waters of the Barada River flowing from the Anti-Lebanon mountains.",
    status: "published"
  },
  {
    id: "asia-h-48",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the name of the vast desert plateau that covers the central interior of Saudi Arabia, home to Riyadh?",
    options: ["Hejaz", "Najd", "Tihamah", "Asir"],
    correctIndex: 1,
    explanation: "Najd is the central geographical region of the Arabian Peninsula, bounded by the mountains of Hejaz to the west and the Dahna desert to the east.",
    status: "published"
  },
  {
    id: "asia-h-49",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the narrow coastal plain running along the eastern shore of the Red Sea in Saudi Arabia and Yemen?",
    options: ["Nejd", "Tihamah", "Rub' al Khali", "Hadramawt"],
    correctIndex: 1,
    explanation: "The Tihamah is an intensely hot, humid coastal plain lying at the foot of the Sarawat mountains.",
    status: "published"
  },
  {
    id: "asia-h-50",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which large endorheic salt desert occupies the central northern interior of the Iranian Plateau?",
    options: ["Dasht-e Lut", "Dasht-e Kavir (Great Salt Desert)", "Karakum", "Thar"],
    correctIndex: 1,
    explanation: "Dasht-e Kavir covers about 77,000 square kilometers, characterized by thick, treacherous crusts of salt mud (kavir).",
    status: "published"
  },
  {
    id: "asia-h-51",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which narrow sea channel connects the Bohai Sea to the Yellow Sea between the Liaodong and Shandong peninsulas in China?",
    options: ["Taiwan Strait", "Bohai Strait", "Korea Strait", "Qiongzhou Strait"],
    correctIndex: 1,
    explanation: "The Bohai Strait is about 90 kilometers wide and links the busy industrial inner gulf of Bohai to the Yellow Sea.",
    status: "published"
  },
  {
    id: "asia-h-52",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which strait separates the Chinese tropical island province of Hainan from the Leizhou Peninsula in Guangdong?",
    options: ["Bohai Strait", "Qiongzhou Strait", "Taiwan Strait", "Luzon Strait"],
    correctIndex: 1,
    explanation: "The Qiongzhou Strait (or Hainan Strait) connects the Gulf of Tonkin to the South China Sea.",
    status: "published"
  },
  {
    id: "asia-h-53",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which chain of 56 volcanic islands stretches between Hokkaido in Japan and the Kamchatka Peninsula in Russia?",
    options: ["Aleutian Islands", "Kuril Islands", "Ryukyu Islands", "Sakhalin"],
    correctIndex: 1,
    explanation: "The Kuril Islands separate the Sea of Okhotsk from the open Pacific Ocean and are subject to a territorial dispute over the southernmost islands.",
    status: "published"
  },
  {
    id: "asia-h-54",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which island is the largest island of the Kuril archipelago, located near its northern end?",
    options: ["Iturup", "Paramushir", "Kunashir", "Shikotan"],
    correctIndex: 0,
    explanation: "Iturup is the largest island in the Kuril chain, covering 3,174 square kilometers.",
    status: "published"
  },
  {
    id: "asia-h-55",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the name of the volcanic caldera lake on Hokkaido that is renowned for having the clearest water of any lake in Japan?",
    options: ["Lake Toya", "Lake Mashu", "Lake Shikotsu", "Lake Akan"],
    correctIndex: 1,
    explanation: "Lake Mashu is a caldera lake with measured Secchi disk transparency depths exceeding 40 meters.",
    status: "published"
  },
  {
    id: "asia-h-56",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the largest freshwater lake in Japan, located northeast of Kyoto in Shiga Prefecture?",
    options: ["Lake Biwa", "Lake Kasumigaura", "Lake Towada", "Lake Suwa"],
    correctIndex: 0,
    explanation: "Lake Biwa covers 670 square kilometers and is one of the world's ancient lakes, dating back over 4 million years.",
    status: "published"
  },
  {
    id: "asia-h-57",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which river is the longest river in Japan, flowing 367 kilometers through Nagano and Niigata to the Sea of Japan?",
    options: ["Tone River", "Shinano River", "Ishikari River", "Kiso River"],
    correctIndex: 1,
    explanation: "The Shinano River (known as Chikuma in Nagano) drains the Japanese Alps into the fertile Niigata Plain.",
    status: "published"
  },
  {
    id: "asia-h-58",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which river in Japan has the largest drainage basin in the country, flowing through the Kanto Plain past Tokyo into the Pacific?",
    options: ["Shinano River", "Tone River", "Kitakami River", "Mogami River"],
    correctIndex: 1,
    explanation: "The Tone River drains 16,840 square kilometers of the Kanto region and historically caused major floods before extensive civil engineering.",
    status: "published"
  },
  {
    id: "asia-h-59",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the name of the active volcano on Kyushu, Japan, that has one of the largest calderas in the world (over 120 km in circumference)?",
    options: ["Mount Unzen", "Mount Aso", "Sakurajima", "Mount Kirishima"],
    correctIndex: 1,
    explanation: "Mount Aso's massive caldera contains numerous peaks and towns, with the Nakadake crater regularly emitting steam and ash.",
    status: "published"
  },
  {
    id: "asia-h-60",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which highly active composite volcano sits across Kagoshima Bay from Kagoshima city on the island of Kyushu, Japan?",
    options: ["Mount Aso", "Sakurajima", "Mount Fuji", "Mount Asama"],
    correctIndex: 1,
    explanation: "Sakurajima was formerly an island until a massive 1914 lava flow connected it directly to the Osumi Peninsula.",
    status: "published"
  },
  {
    id: "asia-h-61",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which river is the longest river in South Korea, flowing past Daegu and Busan into the Korea Strait?",
    options: ["Han River", "Nakdong River", "Geum River", "Yeongsan River"],
    correctIndex: 1,
    explanation: "The Nakdong River flows 510 kilometers southward across southeastern South Korea.",
    status: "published"
  },
  {
    id: "asia-h-62",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the highest mountain peak in South Korea, located on the volcanic island of Jeju?",
    options: ["Mount Jiri", "Hallasan (Mount Halla)", "Mount Seorak", "Mount Odae"],
    correctIndex: 1,
    explanation: "Hallasan is a shield volcano rising to 1,947 meters, forming the central core of Jeju Island.",
    status: "published"
  },
  {
    id: "asia-h-63",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the name of the volcanic peak and UNESCO site on Jeju Island famous for its tuff cone rising out of the ocean like a fortress?",
    options: ["Seongsan Ilchulbong (Sunrise Peak)", "Manjanggul Cave", "Mount Songak", "Sanbangsan"],
    correctIndex: 0,
    explanation: "Seongsan Ilchulbong is a hydrovolcanic tuff cone formed by hydroclastic eruptions roughly 5,000 years ago.",
    status: "published"
  },
  {
    id: "asia-h-64",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the primary river flowing through the North Korean capital of Pyongyang into the Yellow Sea?",
    options: ["Yalu River", "Taedong River", "Tumen River", "Chongchon River"],
    correctIndex: 1,
    explanation: "The Taedong River is North Korea's second-longest river, flowing southwest across the Pyongyang Plain.",
    status: "published"
  },
  {
    id: "asia-h-65",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which narrow mountain range forms the backbone of the Korean Peninsula, running along the eastern coast from North to South Korea?",
    options: ["Sobaek Mountains", "Taebaek Mountains", "Charyeong Mountains", "Nangnim Mountains"],
    correctIndex: 1,
    explanation: "The Taebaek Mountains run along the Sea of Japan coast, serving as the main watershed of the peninsula.",
    status: "published"
  },
  {
    id: "asia-h-66",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which landlocked country in Central Asia has over 90% of its territory covered by mountainous terrain, dominated by the Tian Shan?",
    options: ["Kazakhstan", "Kyrgyzstan", "Uzbekistan", "Turkmenistan"],
    correctIndex: 1,
    explanation: "Kyrgyzstan is an alpine Central Asian country whose average elevation is over 2,750 meters.",
    status: "published"
  },
  {
    id: "asia-h-67",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the highest mountain peak in Kyrgyzstan and the entire Tian Shan mountain range, located on the border with China?",
    options: ["Khan Tengri", "Jengish Chokusu (Pik Pobedy)", "Ismoil Somoni Peak", "Lenin Peak"],
    correctIndex: 1,
    explanation: "Jengish Chokusu rises to 7,439 meters, making it the most northerly 7,000-meter peak in the world.",
    status: "published"
  },
  {
    id: "asia-h-68",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the highest mountain peak in Tajikistan and the former Soviet Union, located in the Pamir Mountains?",
    options: ["Lenin Peak", "Ismoil Somoni Peak (Communism Peak)", "Korzhenevskaya Peak", "Independence Peak"],
    correctIndex: 1,
    explanation: "Ismoil Somoni Peak reaches an elevation of 7,495 meters in the Academy of Sciences Range.",
    status: "published"
  },
  {
    id: "asia-h-69",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which major river flowing through southern Kazakhstan originates in the Tian Shan of China as the Tekes and joins Lake Balkhash?",
    options: ["Chu River", "Ili River", "Syr Darya", "Talas River"],
    correctIndex: 1,
    explanation: "The Ili River supplies 70-80% of the total water inflow into Lake Balkhash.",
    status: "published"
  },
  {
    id: "asia-h-70",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the name of the famous burning natural gas crater located in the Karakum Desert near Derweze, Turkmenistan?",
    options: ["Eternal Flame Falls", "Gates of Hell (Darvaza gas crater)", "Yanar Dag", "Baba Gurgur"],
    correctIndex: 1,
    explanation: "The Darvaza gas crater has burned continuously since Soviet geologists ignited leaking methane gas in 1971.",
    status: "published"
  },
  {
    id: "asia-h-71",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which large peninsula in Azerbaijan projects 60 kilometers into the western Caspian Sea, home to the capital city Baku?",
    options: ["Cheleken Peninsula", "Absheron Peninsula", "Mangyshlak Peninsula", "Tubkaragan Peninsula"],
    correctIndex: 1,
    explanation: "The Absheron Peninsula is rich in oil fields, mud volcanoes, and natural hydrocarbon gas seepages.",
    status: "published"
  },
  {
    id: "asia-h-72",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which large mountain lake in Armenia is one of the highest alpine freshwater lakes in Eurasia at 1,900 meters elevation?",
    options: ["Lake Urmia", "Lake Sevan", "Lake Van", "Lake Ritsa"],
    correctIndex: 1,
    explanation: "Lake Sevan occupies roughly one-sixth of Armenia's surface area, fed by 28 rivers and streams.",
    status: "published"
  },
  {
    id: "asia-h-73",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which autonomous republic of Azerbaijan is an exclave completely separated from the rest of the country by Armenia and Iran?",
    options: ["Nagorno-Karabakh", "Nakhchivan Autonomous Republic", "Ajaria", "Gorno-Badakhshan"],
    correctIndex: 1,
    explanation: "Nakhchivan borders Armenia to the north and east, Iran to the south and west, and has an 11-kilometer border with Turkey.",
    status: "published"
  },
  {
    id: "asia-h-74",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the name of the ancient high-altitude cave city and monastery complex carved into the Erusheti Mountain in southern Georgia?",
    options: ["Uplistsikhe", "Vardzia", "Petra", "Derinkuyu"],
    correctIndex: 1,
    explanation: "Vardzia was constructed in the 12th century during the reign of Queen Tamar as a fortified cave monastery complex.",
    status: "published"
  },
  {
    id: "asia-h-75",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which valley and autonomous region covers nearly half of eastern Tajikistan within the high Pamir Mountains?",
    options: ["Fergana Valley", "Gorno-Badakhshan Autonomous Region", "Rasht Valley", "Sughd Province"],
    correctIndex: 1,
    explanation: "Gorno-Badakhshan covers 45% of Tajikistan's area but holds only about 3% of its population due to high alpine terrain.",
    status: "published"
  },
  {
    id: "asia-h-76",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which transboundary river originates in the Tibetan Plateau as the Lancang Jiang before flowing into Southeast Asia?",
    options: ["Salween River", "Mekong River", "Irrawaddy River", "Red River"],
    correctIndex: 1,
    explanation: "In China, the upper half of the Mekong River is officially designated as the Lancang Jiang.",
    status: "published"
  },
  {
    id: "asia-h-77",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which international river originates in Tibet as the Nu Jiang and flows through eastern Myanmar into the Andaman Sea without major dams on its main stem?",
    options: ["Irrawaddy River", "Salween River", "Chindwin River", "Sitaung River"],
    correctIndex: 1,
    explanation: "The Salween River flows 3,289 kilometers through deep mountain gorges, making it one of the longest undammed rivers in Asia.",
    status: "published"
  },
  {
    id: "asia-h-78",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the name of the unique UNESCO World Heritage region in Yunnan, China, where the upper Yangtze, Mekong, and Salween flow parallel within 75 km of each other?",
    options: ["Three Gorges", "Three Parallel Rivers of Yunnan Protected Areas", "Golden Triangle", "Tarim Basin"],
    correctIndex: 1,
    explanation: "The Three Parallel Rivers region features the Jinsha (Yangtze), Lancang (Mekong), and Nu (Salween) running parallel through deep mountain gorges.",
    status: "published"
  },
  {
    id: "asia-h-79",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which plateau region in northeastern Thailand is characterized by poor sandy soils, frequent droughts, and a distinct Lao-related culture?",
    options: ["Central Plain", "Khorat Plateau", "Chiang Mai Valley", "Shan Hills"],
    correctIndex: 1,
    explanation: "The Khorat Plateau covers eastern Thailand (Isan), drained by the Mun and Chi rivers toward the Mekong.",
    status: "published"
  },
  {
    id: "asia-h-80",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the highest mountain peak in Vietnam and the entire Indochina Peninsula, located in the Hoang Lien Son range at 3,147 meters?",
    options: ["Fansipan", "Pu Si Lung", "Pu Ta Leng", "Bach Ma"],
    correctIndex: 0,
    explanation: "Fansipan is frequently dubbed the 'Roof of Indochina', situated in northwestern Vietnam near Sa Pa.",
    status: "published"
  },
  {
    id: "asia-h-81",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which national park in Quang Binh province, Vietnam, contains Son Doong, the world's largest known natural cave by cross-sectional volume?",
    options: ["Cuc Phuong", "Phong Nha-Ke Bang National Park", "Cat Ba", "Ba Be"],
    correctIndex: 1,
    explanation: "Phong Nha-Ke Bang contains hundreds of cave systems, including Hang Son Doong, with chambers large enough to fit a Boeing 747.",
    status: "published"
  },
  {
    id: "asia-h-82",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the narrowest point of the Malay Peninsula in southern Thailand, measuring just 44 kilometers wide between the Gulf of Thailand and the Andaman Sea?",
    options: ["Isthmus of Kra", "Isthmus of Suez", "Isthmus of Panama", "Isthmus of Tehuantepec"],
    correctIndex: 0,
    explanation: "The Kra Isthmus connects the Malay Peninsula to mainland Asia and has been proposed for maritime canal construction for centuries.",
    status: "published"
  },
  {
    id: "asia-h-83",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which Indonesian volcano on Sumbawa island produced the most powerful volcanic eruption in recorded human history in April 1815 (VEI-7)?",
    options: ["Krakatoa", "Mount Tambora", "Mount Merapi", "Mount Kelud"],
    correctIndex: 1,
    explanation: "Mount Tambora's 1815 eruption ejected over 150 cubic kilometers of tephra and caused 1816 to be known globally as the 'Year Without a Summer'.",
    status: "published"
  },
  {
    id: "asia-h-84",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which active volcano on the island of Java is considered Indonesia's most active, erupting regularly since 1548 near the city of Yogyakarta?",
    options: ["Mount Bromo", "Mount Merapi", "Mount Semeru", "Mount Lawu"],
    correctIndex: 1,
    explanation: "Mount Merapi ('Fire Mountain') produces dangerous pyroclastic flows (wedhus gembel) and sits close to dense agricultural populations.",
    status: "published"
  },
  {
    id: "asia-h-85",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the name of the volcanic lake in East Java, Indonesia, famous for the world's largest highly acidic crater lake and nocturnal electric-blue sulfur fires?",
    options: ["Kawah Ijen", "Lake Kelimutu", "Lake Batur", "Lake Sarangan"],
    correctIndex: 0,
    explanation: "Kawah Ijen contains a turquoise-colored sulfuric acid lake (pH < 0.5) and an active volcanic vent mined for elemental sulfur.",
    status: "published"
  },
  {
    id: "asia-h-86",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which Indonesian volcano on the island of Flores is famous for its three summit crater lakes that periodically change colors (red, blue, and green)?",
    options: ["Mount Kelimutu", "Mount Rinjani", "Mount Egon", "Mount Lewotobi"],
    correctIndex: 0,
    explanation: "Kelimutu's three lakes change color independently due to subaqueous fumarolic chemical oxidation reactions.",
    status: "published"
  },
  {
    id: "asia-h-87",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which active stratovolcano on the island of Lombok is the second-highest volcano in Indonesia and contains the caldera lake Segara Anak?",
    options: ["Mount Agung", "Mount Rinjani", "Mount Tambora", "Mount Batur"],
    correctIndex: 1,
    explanation: "Mount Rinjani rises to 3,726 meters; its ancestral 1257 Samalas eruption was one of the largest volcanic events of the Holocene.",
    status: "published"
  },
  {
    id: "asia-h-88",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the highest mountain peak on the island of Bali, regarded as sacred by Balinese Hindus as the center of the universe?",
    options: ["Mount Batur", "Mount Agung", "Mount Abang", "Mount Batukaru"],
    correctIndex: 1,
    explanation: "Mount Agung is Bali's highest point at 3,031 meters, site of the mother temple Pura Besakih.",
    status: "published"
  },
  {
    id: "asia-h-89",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which Indonesian island group located between Sulawesi and New Guinea was historically known as the 'Spice Islands' for nutmeg and cloves?",
    options: ["Lesser Sunda Islands", "Maluku Islands (Moluccas)", "Riau Islands", "Banda Islands only"],
    correctIndex: 1,
    explanation: "The Maluku Islands were the historical world monopoly source of cloves, mace, and nutmeg during the Age of Exploration.",
    status: "published"
  },
  {
    id: "asia-h-90",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which tiny volcanic archipelago in Maluku was the world's sole source of nutmeg until the mid-19th century?",
    options: ["Banda Islands", "Aru Islands", "Kai Islands", "Tanimbar Islands"],
    correctIndex: 0,
    explanation: "Run Island in the Banda Islands was famously traded by the English to the Dutch in 1667 in exchange for Manhattan.",
    status: "published"
  },
  {
    id: "asia-h-91",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which boundary line proposed in 1914 by a British colonial administrator forms the disputed eastern border between India (Arunachal Pradesh) and Tibet/China?",
    options: ["Radcliffe Line", "McMahon Line", "Durand Line", "Curzon Line"],
    correctIndex: 1,
    explanation: "The McMahon Line was negotiated at the 1914 Simla Convention between Great Britain and Tibet.",
    status: "published"
  },
  {
    id: "asia-h-92",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which 1893 border demarcation line between British India and Afghanistan established a boundary that remains contentious in modern geopolitics?",
    options: ["McMahon Line", "Durand Line", "Radcliffe Line", "Line of Control"],
    correctIndex: 1,
    explanation: "The Durand Line splits the traditional Pashtun tribal homelands between modern Pakistan and Afghanistan.",
    status: "published"
  },
  {
    id: "asia-h-93",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which high-altitude mountain pass in the Ladakh Range connects Leh with the Nubra and Shyok valleys, historically celebrated as one of the world's highest motorable passes?",
    options: ["Zoji La", "Khardung La", "Bara-lacha La", "Rohtang Pass"],
    correctIndex: 1,
    explanation: "Khardung La sits at an elevation of 5,359 meters (17,582 ft) north of Leh.",
    status: "published"
  },
  {
    id: "asia-h-94",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the term for the vast high-latitude coniferous forest belt covering the vast majority of northern Siberia in Russia?",
    options: ["Steppe", "Taiga (Boreal Forest)", "Tundra", "Pampas"],
    correctIndex: 1,
    explanation: "The Siberian taiga is the world's largest terrestrial biome, dominated by larches, pines, spruces, and firs.",
    status: "published"
  },
  {
    id: "asia-h-95",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which peninsula in northwestern Siberia contains the world's largest known natural gas reserves and is inhabited by indigenous Nenets reindeer herders?",
    options: ["Chukchi Peninsula", "Yamal Peninsula", "Taimyr Peninsula", "Kola Peninsula"],
    correctIndex: 1,
    explanation: "The Yamal Peninsula ('Edge of the Earth' in Nenets) extends into the Kara Sea and holds the Bovanenkovo gas field.",
    status: "published"
  },
  {
    id: "asia-h-96",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which peninsula forms the northernmost point of the Asian mainland at Cape Chelyuskin, extending between the Kara and Laptev seas?",
    options: ["Yamal Peninsula", "Taymyr Peninsula", "Chukchi Peninsula", "Kamchatka Peninsula"],
    correctIndex: 1,
    explanation: "Cape Chelyuskin on the Taymyr Peninsula sits at 77°43'N, representing the northernmost continental land point in Eurasia.",
    status: "published"
  },
  {
    id: "asia-h-97",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the easternmost continental point of Asia, located on the Chukchi Peninsula facing the Bering Strait?",
    options: ["Cape Baba", "Cape Dezhnev", "Cape Piai", "Cape Chelyuskin"],
    correctIndex: 1,
    explanation: "Cape Dezhnev in Chukotka sits at 169°39'W, just 82 kilometers across the Bering Strait from Cape Prince of Wales in Alaska.",
    status: "published"
  },
  {
    id: "asia-h-98",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the southernmost continental point of the Asian mainland, located in Johor, Malaysia?",
    options: ["Cape Baba", "Cape Piai", "Cape Comorin (Kanyakumari)", "Cape Byron"],
    correctIndex: 1,
    explanation: "Tanjung Piai in Pontian District, Johor, Malaysia, sits at latitude 1°16'N, the southern tip of the Eurasian landmass.",
    status: "published"
  },
  {
    id: "asia-h-99",
    continent: "Asia",
    difficulty: "Hard",
    question: "What is the westernmost continental point of the Asian mainland, located on the Anatolian coast of Turkey near the Aegean Sea?",
    options: ["Cape Dezhnev", "Cape Baba", "Cape Piai", "Cape Finisterre"],
    correctIndex: 1,
    explanation: "Cape Baba (Babakale) in Çanakkale province, Turkey, sits at longitude 26°03'E, the westernmost point of the Asian continent.",
    status: "published"
  },
  {
    id: "asia-h-100",
    continent: "Asia",
    difficulty: "Hard",
    question: "Which tripoint in northeastern Asia on the Tumen River marks where the international borders of China, Russia, and North Korea meet?",
    options: ["Fangchuan Tripoint", "Manzhouli Junction", "Khorgos Gate", "Dandong Junction"],
    correctIndex: 0,
    explanation: "Near Fangchuan village in Jilin province, the Chinese border narrows to a strip along the Tumen River where Russia, North Korea, and China converge just 15 km from the Sea of Japan.",
    status: "published"
  },

  // ==========================================
  // AFRICA
  // ==========================================
  {
    id: "afr-e-1",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the largest hot desert in the world, located in Northern Africa?",
    options: ["Kalahari Desert", "Namib Desert", "Sahara Desert", "Danakil Desert"],
    correctIndex: 2,
    explanation: "The Sahara Desert spans over 9 million square kilometers across most of Northern Africa.",
    status: "published"
  },
  {
    id: "afr-e-2",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the highest mountain in Africa?",
    options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Stanley", "Ras Dashen"],
    correctIndex: 1,
    explanation: "Mount Kilimanjaro in Tanzania is a dormant volcano and the highest point in Africa at 5,895 meters.",
    status: "published"
  },
  {
    id: "afr-e-3",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Egypt?",
    options: ["Alexandria", "Cairo", "Giza", "Luxor"],
    correctIndex: 1,
    explanation: "Cairo is the capital and largest metropolitan area of Egypt, situated along the Nile River.",
    status: "published"
  },
  {
    id: "afr-e-4",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Kenya?",
    options: ["Mombasa", "Kisumu", "Nairobi", "Nakuru"],
    correctIndex: 2,
    explanation: "Nairobi is the capital and largest city of Kenya, known as the 'Green City in the Sun'.",
    status: "published"
  },
  {
    id: "afr-e-5",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which city is the administrative capital and seat of government of South Africa?",
    options: ["Johannesburg", "Cape Town", "Pretoria", "Durban"],
    correctIndex: 2,
    explanation: "Pretoria is the administrative capital, while Cape Town is legislative and Bloemfontein is judicial.",
    status: "published"
  },
  {
    id: "afr-e-6",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Nigeria?",
    options: ["Lagos", "Kano", "Abuja", "Ibadan"],
    correctIndex: 2,
    explanation: "Abuja was purpose-built in the center of Nigeria to replace Lagos as the federal capital in 1991.",
    status: "published"
  },
  {
    id: "afr-e-7",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Ethiopia?",
    options: ["Dire Dawa", "Addis Ababa", "Gondar", "Mekelle"],
    correctIndex: 1,
    explanation: "Addis Ababa is the capital of Ethiopia and the headquarters of the African Union.",
    status: "published"
  },
  {
    id: "afr-e-8",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Morocco?",
    options: ["Casablanca", "Marrakesh", "Rabat", "Fez"],
    correctIndex: 2,
    explanation: "Rabat is the political capital of Morocco, located on the Atlantic coast.",
    status: "published"
  },
  {
    id: "afr-e-9",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Ghana?",
    options: ["Kumasi", "Accra", "Tamale", "Sekondi-Takoradi"],
    correctIndex: 1,
    explanation: "Accra is the coastal capital and largest city of Ghana.",
    status: "published"
  },
  {
    id: "afr-e-10",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Senegal?",
    options: ["Saint-Louis", "Dakar", "Touba", "Thi\u00e8s"],
    correctIndex: 1,
    explanation: "Dakar is the capital of Senegal, located on the Cap-Vert Peninsula, the westernmost point of mainland Africa.",
    status: "published"
  },
  {
    id: "afr-e-11",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Uganda?",
    options: ["Entebbe", "Jinja", "Kampala", "Gulu"],
    correctIndex: 2,
    explanation: "Kampala is the capital and largest city of Uganda, located near the northern shores of Lake Victoria.",
    status: "published"
  },
  {
    id: "afr-e-12",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the official legislative and administrative capital of Tanzania?",
    options: ["Dar es Salaam", "Arusha", "Dodoma", "Mwanza"],
    correctIndex: 2,
    explanation: "Dodoma is Tanzania's designated national capital, though Dar es Salaam remains its chief commercial hub.",
    status: "published"
  },
  {
    id: "afr-e-13",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Rwanda?",
    options: ["Butare", "Kigali", "Gisenyi", "Ruhengeri"],
    correctIndex: 1,
    explanation: "Kigali is the economic, cultural, and transport hub of Rwanda.",
    status: "published"
  },
  {
    id: "afr-e-14",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Madagascar?",
    options: ["Toamasina", "Antsirabe", "Antananarivo", "Mahajanga"],
    correctIndex: 2,
    explanation: "Antananarivo is the capital of Madagascar, situated in the central highlands of the island.",
    status: "published"
  },
  {
    id: "afr-e-15",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Algeria?",
    options: ["Oran", "Constantine", "Algiers", "Annaba"],
    correctIndex: 2,
    explanation: "Algiers is the capital and chief seaport of Algeria on the Mediterranean Sea.",
    status: "published"
  },
  {
    id: "afr-e-16",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Tunisia?",
    options: ["Sfax", "Sousse", "Tunis", "Kairouan"],
    correctIndex: 2,
    explanation: "Tunis is the capital of Tunisia, situated on the Gulf of Tunis near the ancient ruins of Carthage.",
    status: "published"
  },
  {
    id: "afr-e-17",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Libya?",
    options: ["Benghazi", "Misrata", "Tripoli", "Tobruk"],
    correctIndex: 2,
    explanation: "Tripoli is the capital and most populous city of Libya on the Mediterranean coast.",
    status: "published"
  },
  {
    id: "afr-e-18",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Sudan?",
    options: ["Omdurman", "Khartoum", "Port Sudan", "Kassala"],
    correctIndex: 1,
    explanation: "Khartoum sits at the confluence of the White Nile and the Blue Nile rivers.",
    status: "published"
  },
  {
    id: "afr-e-19",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Angola?",
    options: ["Huambo", "Benguela", "Luanda", "Lobito"],
    correctIndex: 2,
    explanation: "Luanda is the coastal capital and primary seaport of Angola.",
    status: "published"
  },
  {
    id: "afr-e-20",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Mozambique?",
    options: ["Beira", "Nampula", "Maputo", "Quelimane"],
    correctIndex: 2,
    explanation: "Maputo is the capital and largest city of Mozambique, located on Maputo Bay in the south.",
    status: "published"
  },
  {
    id: "afr-e-21",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Zambia?",
    options: ["Ndola", "Kitwe", "Lusaka", "Livingstone"],
    correctIndex: 2,
    explanation: "Lusaka is the capital and commercial heart of Zambia.",
    status: "published"
  },
  {
    id: "afr-e-22",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Zimbabwe?",
    options: ["Bulawayo", "Mutare", "Harare", "Gweru"],
    correctIndex: 2,
    explanation: "Harare (formerly Salisbury) is the capital and largest metropolitan area of Zimbabwe.",
    status: "published"
  },
  {
    id: "afr-e-23",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Namibia?",
    options: ["Walvis Bay", "Swakopmund", "Windhoek", "L\u00fcderitz"],
    correctIndex: 2,
    explanation: "Windhoek is the capital of Namibia, situated in the central Khomas Highland plateau.",
    status: "published"
  },
  {
    id: "afr-e-24",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Botswana?",
    options: ["Francistown", "Maun", "Gaborone", "Kasane"],
    correctIndex: 2,
    explanation: "Gaborone is the capital of Botswana, located close to the South African border.",
    status: "published"
  },
  {
    id: "afr-e-25",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the longest river in Africa and traditionally in the world?",
    options: ["Congo River", "Niger River", "Nile River", "Zambezi River"],
    correctIndex: 2,
    explanation: "The Nile River flows approximately 6,650 kilometers northward through eleven African countries into the Mediterranean Sea.",
    status: "published"
  },
  {
    id: "afr-e-26",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the deepest river in the world and the second-longest river in Africa?",
    options: ["Nile River", "Congo River", "Zambezi River", "Orange River"],
    correctIndex: 1,
    explanation: "The Congo River reaches measured depths of over 220 meters and is the second-largest river in the world by discharge.",
    status: "published"
  },
  {
    id: "afr-e-27",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the principal river of West Africa, forming a distinctive crescent-shaped course through Guinea, Mali, Niger, and Nigeria?",
    options: ["Senegal River", "Gambia River", "Niger River", "Volta River"],
    correctIndex: 2,
    explanation: "The Niger River flows 4,180 kilometers from Guinea through the edge of the Sahara into the Gulf of Guinea.",
    status: "published"
  },
  {
    id: "afr-e-28",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the largest island nation off the southeastern coast of Africa?",
    options: ["Mauritius", "Madagascar", "Seychelles", "Comoros"],
    correctIndex: 1,
    explanation: "Madagascar is the world's fourth-largest island, home to unique wildlife like lemurs.",
    status: "published"
  },
  {
    id: "afr-e-29",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which body of water separates Madagascar from the southeast coast of mainland Africa?",
    options: ["Red Sea", "Mozambique Channel", "Gulf of Guinea", "Gulf of Aden"],
    correctIndex: 1,
    explanation: "The Mozambique Channel is a 1,600-kilometer waterway between Mozambique and Madagascar.",
    status: "published"
  },
  {
    id: "afr-e-30",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which mountain range extends across northwestern Africa through Morocco, Algeria, and Tunisia?",
    options: ["Drakensberg", "Atlas Mountains", "Ruwenzori Mountains", "Ahaggar Mountains"],
    correctIndex: 1,
    explanation: "The Atlas Mountains separate the Mediterranean and Atlantic coastlines from the Sahara Desert.",
    status: "published"
  },
  {
    id: "afr-e-31",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the highest mountain peak in the Atlas Mountains and in North Africa, located in Morocco?",
    options: ["Toubkal", "Mount Kenya", "Ras Dashen", "Mount Stanley"],
    correctIndex: 0,
    explanation: "Toubkal in the Toubkal National Park rises to 4,167 meters in southwestern Morocco.",
    status: "published"
  },
  {
    id: "afr-e-32",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which famous rocky headland on the Atlantic coast of the Cape Peninsula in South Africa is known for historic maritime voyages?",
    options: ["Cape Horn", "Cape of Good Hope", "Cape Blanc", "Cape Verde"],
    correctIndex: 1,
    explanation: "The Cape of Good Hope was a critical navigation landmark for European sailing ships heading to India and East Asia.",
    status: "published"
  },
  {
    id: "afr-e-33",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the official southernmost point of the African continent where the Atlantic and Indian oceans meet?",
    options: ["Cape of Good Hope", "Cape Agulhas", "Cape Town", "Cape Cross"],
    correctIndex: 1,
    explanation: "Cape Agulhas sits at 34°50'S latitude, roughly 150 kilometers east-southeast of the Cape of Good Hope.",
    status: "published"
  },
  {
    id: "afr-e-34",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which sea borders the African continent to the north, separating it from Europe?",
    options: ["Red Sea", "Baltic Sea", "Mediterranean Sea", "Black Sea"],
    correctIndex: 2,
    explanation: "The Mediterranean Sea washes against the northern coasts of Morocco, Algeria, Tunisia, Libya, and Egypt.",
    status: "published"
  },
  {
    id: "afr-e-35",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which ocean borders Africa to the west?",
    options: ["Pacific Ocean", "Indian Ocean", "Atlantic Ocean", "Arctic Ocean"],
    correctIndex: 2,
    explanation: "The Atlantic Ocean stretches along Africa's entire western coast from Morocco to South Africa.",
    status: "published"
  },
  {
    id: "afr-e-36",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which ocean borders Africa to the east?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Southern Ocean"],
    correctIndex: 2,
    explanation: "The Indian Ocean borders the eastern coast of Africa, including Kenya, Tanzania, Mozambique, and South Africa.",
    status: "published"
  },
  {
    id: "afr-e-37",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the most populous country in Africa?",
    options: ["Ethiopia", "Egypt", "Nigeria", "Democratic Republic of the Congo"],
    correctIndex: 2,
    explanation: "Nigeria has a population exceeding 220 million people, making it Africa's most populous nation.",
    status: "published"
  },
  {
    id: "afr-e-38",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the largest country in Africa by total land area?",
    options: ["Sudan", "Algeria", "Democratic Republic of the Congo", "Libya"],
    correctIndex: 1,
    explanation: "Algeria became Africa's largest country by area (nearly 2.4 million sq km) after Sudan split in 2011.",
    status: "published"
  },
  {
    id: "afr-e-39",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which famous waterfall on the Zambezi River is locally called 'Mosi-oa-Tunya' (The Smoke That Thunders)?",
    options: ["Niagara Falls", "Victoria Falls", "Iguazu Falls", "Angel Falls"],
    correctIndex: 1,
    explanation: "Victoria Falls forms the largest sheet of falling water in the world, on the border of Zambia and Zimbabwe.",
    status: "published"
  },
  {
    id: "afr-e-40",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the second-highest mountain in Africa, located in central Kenya?",
    options: ["Mount Stanley", "Mount Kilimanjaro", "Mount Kenya", "Mount Speke"],
    correctIndex: 2,
    explanation: "Mount Kenya is an extinct stratovolcano rising to 5,199 meters directly on the equator.",
    status: "published"
  },
  {
    id: "afr-e-41",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the large semi-arid desert covering parts of Botswana, Namibia, and South Africa?",
    options: ["Namib Desert", "Kalahari Desert", "Sahara Desert", "Nubian Desert"],
    correctIndex: 1,
    explanation: "The Kalahari is a vast sand basin featuring reddish sand dunes, savannas, and wildlife sanctuaries.",
    status: "published"
  },
  {
    id: "afr-e-42",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which desert along the Atlantic coast of Namibia is considered one of the oldest deserts on Earth?",
    options: ["Kalahari Desert", "Namib Desert", "Danakil Desert", "Sinai Desert"],
    correctIndex: 1,
    explanation: "The Namib Desert has endured hyper-arid conditions for at least 55 million years, famous for towering coastal dunes.",
    status: "published"
  },
  {
    id: "afr-e-43",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which immense wildlife ecosystem in northern Tanzania is world-famous for the annual Great Migration of wildebeests?",
    options: ["Kruger", "Serengeti National Park", "Tsavo", "Etosha"],
    correctIndex: 1,
    explanation: "The Serengeti hosts over 1.5 million white-bearded wildebeests and zebras migrating clockwise each year.",
    status: "published"
  },
  {
    id: "afr-e-44",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which major wildlife reserve adjacent to the Serengeti is located across the border in southwestern Kenya?",
    options: ["Amboseli", "Maasai Mara National Reserve", "Lake Nakuru", "Samburu"],
    correctIndex: 1,
    explanation: "The Maasai Mara is contiguous with the Serengeti, famous for river crossings at the Mara River.",
    status: "published"
  },
  {
    id: "afr-e-45",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the massive geological rift system running from the Red Sea down through East Africa into Mozambique?",
    options: ["San Andreas Fault", "Great Rift Valley (East African Rift)", "Alpine Fault", "Baikal Rift"],
    correctIndex: 1,
    explanation: "The East African Rift is a developing divergent tectonic plate boundary where Africa is slowly splitting.",
    status: "published"
  },
  {
    id: "afr-e-46",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which country is home to the world-famous pyramids and Sphinx of Giza?",
    options: ["Sudan", "Jordan", "Egypt", "Tunisia"],
    correctIndex: 2,
    explanation: "The Giza pyramid complex sits just outside Cairo on the Giza Plateau in Egypt.",
    status: "published"
  },
  {
    id: "afr-e-47",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which archipelago nation in the Indian Ocean off East Africa is Africa's smallest country by land area?",
    options: ["Mauritius", "Comoros", "Seychelles", "Cape Verde"],
    correctIndex: 2,
    explanation: "Seychelles consists of 115 islands covering only 459 square kilometers, with Victoria as its capital.",
    status: "published"
  },
  {
    id: "afr-e-48",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which island nation in the Indian Ocean east of Madagascar was the historical home of the extinct dodo bird?",
    options: ["Reunion", "Mauritius", "Seychelles", "Comoros"],
    correctIndex: 1,
    explanation: "Mauritius is a volcanic island nation where the flightless dodo lived until its extinction in the 17th century.",
    status: "published"
  },
  {
    id: "afr-e-49",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which island nation comprising 10 volcanic islands is located in the Atlantic Ocean roughly 570 km west of Senegal?",
    options: ["Sao Tome and Principe", "Cape Verde (Cabo Verde)", "Canary Islands", "Madeira"],
    correctIndex: 1,
    explanation: "Cabo Verde is an independent Atlantic archipelago republic with Praia as its capital.",
    status: "published"
  },
  {
    id: "afr-e-50",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which small island nation located in the Gulf of Guinea near the equator consists of two main volcanic islands?",
    options: ["Cape Verde", "Sao Tome and Principe", "Equatorial Guinea", "Seychelles"],
    correctIndex: 1,
    explanation: "Sao Tome and Principe is the second-smallest and second-least populous African sovereign state.",
    status: "published"
  },
  {
    id: "afr-e-51",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which broad semi-arid geographic transition zone separates the arid Sahara Desert to the north from tropical savannas to the south?",
    options: ["The Maghreb", "The Sahel", "The Kalahari", "The Veld"],
    correctIndex: 1,
    explanation: "The Sahel stretches 5,400 kilometers across Africa from the Atlantic Ocean to the Red Sea.",
    status: "published"
  },
  {
    id: "afr-e-52",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which North African regional term, meaning 'the West' in Arabic, refers to Morocco, Algeria, and Tunisia?",
    options: ["Mashriq", "Maghreb", "Levant", "Hijaz"],
    correctIndex: 1,
    explanation: "The Maghreb encompasses northwestern Africa, culturally and geographically defined by the Atlas Mountains.",
    status: "published"
  },
  {
    id: "afr-e-53",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which major canal entirely within Egyptian territory connects the Mediterranean Sea to the Red Sea?",
    options: ["Panama Canal", "Suez Canal", "Kiel Canal", "Corinth Canal"],
    correctIndex: 1,
    explanation: "The Suez Canal opened in 1869, eliminating the need for ships to circumnavigate Africa.",
    status: "published"
  },
  {
    id: "afr-e-54",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the prominent peninsula of northeastern Africa comprising Somalia, Ethiopia, Eritrea, and Djibouti called?",
    options: ["Arabian Peninsula", "Horn of Africa (Somali Peninsula)", "Sinai Peninsula", "Iberian Peninsula"],
    correctIndex: 1,
    explanation: "The Horn of Africa projects hundreds of kilometers into the Arabian Sea and Gulf of Aden.",
    status: "published"
  },
  {
    id: "afr-e-55",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Somalia?",
    options: ["Hargeisa", "Mogadishu", "Kismayo", "Bosaso"],
    correctIndex: 1,
    explanation: "Mogadishu is the historic coastal capital and largest city of Somalia.",
    status: "published"
  },
  {
    id: "afr-e-56",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Cameroon?",
    options: ["Douala", "Yaound\u00e9", "Garoua", "Bamenda"],
    correctIndex: 1,
    explanation: "Yaoundé is the capital of Cameroon, while Douala is its largest port city.",
    status: "published"
  },
  {
    id: "afr-e-57",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of the Democratic Republic of the Congo, facing Brazzaville across the Congo River?",
    options: ["Lubumbashi", "Goma", "Kinshasa", "Kisangani"],
    correctIndex: 2,
    explanation: "Kinshasa and Brazzaville are the two closest national capital cities in the world across a river.",
    status: "published"
  },
  {
    id: "afr-e-58",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of the Republic of the Congo?",
    options: ["Pointe-Noire", "Brazzaville", "Dolisie", "Oyo"],
    correctIndex: 1,
    explanation: "Brazzaville is the capital of the Republic of the Congo, situated on Pool Malebo on the Congo River.",
    status: "published"
  },
  {
    id: "afr-e-59",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Ivory Coast (Côte d'Ivoire)?",
    options: ["Abidjan", "Yamoussoukro", "Bouak\u00e9", "San-P\u00e9dro"],
    correctIndex: 1,
    explanation: "Yamoussoukro is the political capital, home to the Basilica of Our Lady of Peace, though Abidjan remains the de facto economic hub.",
    status: "published"
  },
  {
    id: "afr-e-60",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Mali?",
    options: ["Timbuktu", "Bamako", "Gao", "Mopti"],
    correctIndex: 1,
    explanation: "Bamako is the capital and fastest-growing metropolis of Mali, located on the Niger River.",
    status: "published"
  },
  {
    id: "afr-e-61",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of South Sudan, which became independent in 2011?",
    options: ["Malakal", "Juba", "Wau", "Bor"],
    correctIndex: 1,
    explanation: "Juba is the capital and largest city of South Sudan, situated on the White Nile.",
    status: "published"
  },
  {
    id: "afr-e-62",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Chad?",
    options: ["Moundou", "N'Djamena", "Sarh", "Ab\u00e9ch\u00e9"],
    correctIndex: 1,
    explanation: "N'Djamena is the capital and largest city of Chad, located near the border with Cameroon.",
    status: "published"
  },
  {
    id: "afr-e-63",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Niger?",
    options: ["Zinder", "Niamey", "Maradi", "Agadez"],
    correctIndex: 1,
    explanation: "Niamey is the capital of Niger, located along the Niger River in the country's southwest.",
    status: "published"
  },
  {
    id: "afr-e-64",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Burkina Faso?",
    options: ["Bobo-Dioulasso", "Ouagadougou", "Koudougou", "Banfora"],
    correctIndex: 1,
    explanation: "Ouagadougou is the capital and administrative heart of Burkina Faso.",
    status: "published"
  },
  {
    id: "afr-e-65",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Guinea?",
    options: ["Kankan", "Conakry", "Kindia", "Lab\u00e9"],
    correctIndex: 1,
    explanation: "Conakry is the port capital of Guinea, located on Tombo Island and the Kaloum Peninsula in the Atlantic.",
    status: "published"
  },
  {
    id: "afr-e-66",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Sierra Leone?",
    options: ["Bo", "Freetown", "Kenema", "Makeni"],
    correctIndex: 1,
    explanation: "Freetown is a major Atlantic port city and capital of Sierra Leone, founded as a haven for freed slaves in 1792.",
    status: "published"
  },
  {
    id: "afr-e-67",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Liberia, named in honor of U.S. President James Monroe?",
    options: ["Gbarnga", "Monrovia", "Buchanan", "Harper"],
    correctIndex: 1,
    explanation: "Monrovia is the capital of Liberia, founded in 1822 by the American Colonization Society.",
    status: "published"
  },
  {
    id: "afr-e-68",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Togo?",
    options: ["Sokod\u00e9", "Lom\u00e9", "Kara", "Atakpam\u00e9"],
    correctIndex: 1,
    explanation: "Lomé is the coastal capital of Togo, located directly on the Gulf of Guinea.",
    status: "published"
  },
  {
    id: "afr-e-69",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the official capital city of Benin?",
    options: ["Cotonou", "Porto-Novo", "Parakou", "Abomey"],
    correctIndex: 1,
    explanation: "Porto-Novo is the official capital of Benin, although Cotonou is the seat of government and largest city.",
    status: "published"
  },
  {
    id: "afr-e-70",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Mauritania?",
    options: ["Nouadhibou", "Nouakchott", "Kiffa", "Atar"],
    correctIndex: 1,
    explanation: "Nouakchott is the coastal capital of Mauritania and one of the largest cities in the Sahara.",
    status: "published"
  },
  {
    id: "afr-e-71",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Gabon?",
    options: ["Port-Gentil", "Libreville", "Franceville", "Oyem"],
    correctIndex: 1,
    explanation: "Libreville ('Free Town') is the coastal capital and principal city of Gabon.",
    status: "published"
  },
  {
    id: "afr-e-72",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of the Central African Republic?",
    options: ["Bimbo", "Bangui", "Berb\u00e9rati", "Carnot"],
    correctIndex: 1,
    explanation: "Bangui is the capital and largest city of the Central African Republic, located on the Ubangi River.",
    status: "published"
  },
  {
    id: "afr-e-73",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Eritrea?",
    options: ["Massawa", "Asmara", "Keren", "Assab"],
    correctIndex: 1,
    explanation: "Asmara is the capital of Eritrea, famed for its well-preserved Italian modernist and Art Deco architecture.",
    status: "published"
  },
  {
    id: "afr-e-74",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Djibouti?",
    options: ["Ali Sabieh", "Djibouti City", "Tadjoura", "Obock"],
    correctIndex: 1,
    explanation: "Djibouti City is the capital and port city of Djibouti, situated on the Gulf of Tadjoura.",
    status: "published"
  },
  {
    id: "afr-e-75",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Burundi?",
    options: ["Bujumbura", "Gitega", "Ngozi", "Rumonge"],
    correctIndex: 1,
    explanation: "Gitega was declared the political capital of Burundi in 2018, while Bujumbura remains the economic center.",
    status: "published"
  },
  {
    id: "afr-e-76",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of Malawi?",
    options: ["Blantyre", "Lilongwe", "Mzuzu", "Zomba"],
    correctIndex: 1,
    explanation: "Lilongwe is the capital of Malawi, located near the borders of Mozambique and Zambia.",
    status: "published"
  },
  {
    id: "afr-e-77",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of the Kingdom of Eswatini (formerly Swaziland)?",
    options: ["Manzini", "Mbabane", "Lobamba", "Big Bend"],
    correctIndex: 1,
    explanation: "Mbabane is the administrative capital of Eswatini, while Lobamba is the royal and legislative seat.",
    status: "published"
  },
  {
    id: "afr-e-78",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the capital city of the Kingdom of Lesotho?",
    options: ["Teyateyaneng", "Maseru", "Mafeteng", "Hlotse"],
    correctIndex: 1,
    explanation: "Maseru is the capital and largest city of Lesotho, situated on the Caledon River border with South Africa.",
    status: "published"
  },
  {
    id: "afr-e-79",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the primary tributary that joins the White Nile at Khartoum, originating in Lake Tana, Ethiopia?",
    options: ["Blue Nile", "Atbara River", "Sobat River", "Bahr el Ghazal"],
    correctIndex: 0,
    explanation: "The Blue Nile provides roughly 80% of the water and rich silt that sustains the Nile in Egypt.",
    status: "published"
  },
  {
    id: "afr-e-80",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the high lake in Ethiopia that is the official source of the Blue Nile River?",
    options: ["Lake Turkana", "Lake Tana", "Lake Abaya", "Lake Ziway"],
    correctIndex: 1,
    explanation: "Lake Tana sits at an elevation of 1,788 meters in the Amhara region of northwestern Ethiopia.",
    status: "published"
  },
  {
    id: "afr-e-81",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which historic, ancient trading city in Mali on the edge of the Sahara was once a world-famous center of Islamic learning and manuscript preservation?",
    options: ["Gao", "Timbuktu", "Djenn\u00e9", "Kidal"],
    correctIndex: 1,
    explanation: "Timbuktu prospered from the trans-Saharan trade in gold, salt, and manuscripts, home to the Sankore University.",
    status: "published"
  },
  {
    id: "afr-e-82",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the massive flat-topped mountain overlooking the city of Cape Town, South Africa?",
    options: ["Lion's Head", "Table Mountain", "Devil's Peak", "Signal Hill"],
    correctIndex: 1,
    explanation: "Table Mountain is a prominent sandstone plateau landmark overlooking Table Bay and Cape Town.",
    status: "published"
  },
  {
    id: "afr-e-83",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the large lake in southern Africa that forms most of the eastern border of Malawi?",
    options: ["Lake Tanganyika", "Lake Malawi (Lake Nyasa)", "Lake Victoria", "Lake Kariba"],
    correctIndex: 1,
    explanation: "Lake Malawi is famous for containing more species of fish (especially cichlids) than any other freshwater lake.",
    status: "published"
  },
  {
    id: "afr-e-84",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which long river flows through central South Africa westward to empty into the Atlantic Ocean?",
    options: ["Limpopo River", "Orange River (Gariep)", "Vaal River", "Zambezi River"],
    correctIndex: 1,
    explanation: "The Orange River is the longest river in South Africa, rising in the Drakensberg mountains of Lesotho.",
    status: "published"
  },
  {
    id: "afr-e-85",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which river in southern Africa forms part of the international border between South Africa, Botswana, and Zimbabwe before emptying into Mozambique?",
    options: ["Orange River", "Limpopo River", "Zambezi River", "Save River"],
    correctIndex: 1,
    explanation: "The Limpopo River flows roughly 1,750 kilometers into the Indian Ocean at Xai-Xai, Mozambique.",
    status: "published"
  },
  {
    id: "afr-e-86",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which country borders both the Mediterranean Sea to the north and the Atlantic Ocean to the west in northwest Africa?",
    options: ["Algeria", "Morocco", "Mauritania", "Tunisia"],
    correctIndex: 1,
    explanation: "Morocco has coastlines on both the Atlantic Ocean and the Mediterranean Sea, separated by the Strait of Gibraltar.",
    status: "published"
  },
  {
    id: "afr-e-87",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the large shallow endorheic lake in the Sahel region shared by Chad, Cameroon, Nigeria, and Niger?",
    options: ["Lake Chad", "Lake Turkana", "Lake Albert", "Lake Kivu"],
    correctIndex: 0,
    explanation: "Lake Chad provides water to more than 30 million people in four bordering nations.",
    status: "published"
  },
  {
    id: "afr-e-88",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which country is home to the ancient rock-hewn monolithic churches of Lalibela?",
    options: ["Eritrea", "Ethiopia", "Sudan", "Egypt"],
    correctIndex: 1,
    explanation: "Lalibela in northern Ethiopia is famous for 11 monolithic churches carved out of solid volcanic rock in the 12th century.",
    status: "published"
  },
  {
    id: "afr-e-89",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which country completely surrounds the small sovereign enclave kingdom of Lesotho?",
    options: ["Mozambique", "South Africa", "Zimbabwe", "Botswana"],
    correctIndex: 1,
    explanation: "Lesotho is completely enclosed within the territory of South Africa.",
    status: "published"
  },
  {
    id: "afr-e-90",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which river forms the natural border between Zambia and Zimbabwe and hosts Victoria Falls?",
    options: ["Congo River", "Zambezi River", "Limpopo River", "Kafue River"],
    correctIndex: 1,
    explanation: "The Zambezi River flows into the Indian Ocean after passing through Victoria Falls and Lake Kariba.",
    status: "published"
  },
  {
    id: "afr-e-91",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the largest city and commercial capital of Nigeria, historically built around a lagoon on the Gulf of Guinea?",
    options: ["Abuja", "Lagos", "Kano", "Port Harcourt"],
    correctIndex: 1,
    explanation: "Lagos is the most populous city in Africa, with an estimated metropolitan population exceeding 15 million.",
    status: "published"
  },
  {
    id: "afr-e-92",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which island off the coast of Tanzania is renowned for its historic Stone Town and spice plantations?",
    options: ["Mafia Island", "Zanzibar (Unguja)", "Pemba Island", "Comoros"],
    correctIndex: 1,
    explanation: "Zanzibar is a semi-autonomous archipelago of Tanzania celebrated for cloves, nutmeg, and historic Swahili architecture.",
    status: "published"
  },
  {
    id: "afr-e-93",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the highest mountain peak in the Drakensberg range, located on the border between South Africa and Lesotho?",
    options: ["Thabana Ntlenyana", "Cathkin Peak", "Champagne Castle", "Giant's Castle"],
    correctIndex: 0,
    explanation: "Thabana Ntlenyana ('Beautiful Little Mountain' in Sesotho) rises to 3,482 meters in Lesotho.",
    status: "published"
  },
  {
    id: "afr-e-94",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which massive artificial lake created by the Aswan High Dam spans southern Egypt and northern Sudan?",
    options: ["Lake Kariba", "Lake Nasser", "Lake Volta", "Lake Kainji"],
    correctIndex: 1,
    explanation: "Lake Nasser is a 550-kilometer reservoir on the Nile created by impounding the river behind the Aswan High Dam.",
    status: "published"
  },
  {
    id: "afr-e-95",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the largest artificial lake in the world by surface area, located entirely within Ghana?",
    options: ["Lake Kariba", "Lake Volta", "Lake Nasser", "Lake Kainji"],
    correctIndex: 1,
    explanation: "Lake Volta covers roughly 8,502 square kilometers, formed by the Akosombo Dam on the Volta River.",
    status: "published"
  },
  {
    id: "afr-e-96",
    continent: "Africa",
    difficulty: "Easy",
    question: "What is the highest mountain peak in the Democratic Republic of the Congo and Uganda, located in the Rwenzori Mountains?",
    options: ["Mount Speke", "Mount Stanley (Margherita Peak)", "Mount Baker", "Mount Emin"],
    correctIndex: 1,
    explanation: "Mount Stanley rises to 5,109 meters in the legendary 'Mountains of the Moon' (Rwenzori).",
    status: "published"
  },
  {
    id: "afr-e-97",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which large gulf of the Atlantic Ocean is bounded by West and Central African nations from Liberia to Gabon?",
    options: ["Gulf of Aden", "Gulf of Guinea", "Gulf of Sidra", "Gulf of Suez"],
    correctIndex: 1,
    explanation: "The Gulf of Guinea is the northeasternmost part of the tropical Atlantic Ocean, where the Prime Meridian crosses the Equator.",
    status: "published"
  },
  {
    id: "afr-e-98",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which body of water connects the Red Sea to the Arabian Sea between Yemen and the Horn of Africa?",
    options: ["Persian Gulf", "Gulf of Aden", "Gulf of Oman", "Gulf of Aqaba"],
    correctIndex: 1,
    explanation: "The Gulf of Aden is an important deepwater shipping channel linking the Indian Ocean to the Red Sea and Suez Canal.",
    status: "published"
  },
  {
    id: "afr-e-99",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which desert covers the central and northern areas of Sudan, situated between the Nile River and the Red Sea?",
    options: ["Kalahari Desert", "Nubian Desert", "Namib Desert", "Danakil Desert"],
    correctIndex: 1,
    explanation: "The Nubian Desert is the eastern region of the Sahara Desert, historically part of the ancient Kingdom of Kush.",
    status: "published"
  },
  {
    id: "afr-e-100",
    continent: "Africa",
    difficulty: "Easy",
    question: "Which ancient North African city in modern Tunisia was the great naval adversary of the Roman Republic?",
    options: ["Alexandria", "Carthage", "Leptis Magna", "Cyrene"],
    correctIndex: 1,
    explanation: "Carthage was founded by Phoenician settlers in the 9th century BCE on the Gulf of Tunis.",
    status: "published"
  },
  {
    id: "afr-m-1",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which is the largest lake by surface area on the African continent?",
    options: ["Lake Tanganyika", "Lake Malawi", "Lake Victoria", "Lake Chad"],
    correctIndex: 2,
    explanation: "Lake Victoria spans roughly 59,947 square kilometers, shared by Tanzania, Uganda, and Kenya.",
    status: "published"
  },
  {
    id: "afr-m-2",
    continent: "Africa",
    difficulty: "Medium",
    question: "Victoria Falls is located on the border between which two countries?",
    options: ["Kenya and Tanzania", "Zambia and Zimbabwe", "South Africa and Namibia", "Angola and Botswana"],
    correctIndex: 1,
    explanation: "Victoria Falls, one of the world's greatest waterfalls, is located on the Zambezi River between Zambia and Zimbabwe.",
    status: "published"
  },
  {
    id: "afr-m-3",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the largest inland river delta in the world, located in northern Botswana where the river empties into the Kalahari sands?",
    options: ["Niger Delta", "Okavango Delta", "Nile Delta", "Danube Delta"],
    correctIndex: 1,
    explanation: "The Okavango Delta is an endorheic wetland created where the Okavango River terminates in a vast tectonic trough in the Kalahari.",
    status: "published"
  },
  {
    id: "afr-m-4",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the vast swamp and wetland in South Sudan formed by the White Nile, one of the largest freshwater wetlands in the world?",
    options: ["The Pantanal", "The Sudd", "The Everglades", "The Okavango"],
    correctIndex: 1,
    explanation: "The Sudd is a vast labyrinth of papyrus marshes and channels where roughly half of the White Nile's inflow is lost to evaporation.",
    status: "published"
  },
  {
    id: "afr-m-5",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the largest permanent desert lake in the world, located in the northern Great Rift Valley of Kenya?",
    options: ["Lake Chad", "Lake Turkana", "Lake Naivasha", "Lake Bogoria"],
    correctIndex: 1,
    explanation: "Lake Turkana (historically Lake Rudolf) is an endorheic alkaline lake located in northern Kenya, renowned as the 'Cradle of Humankind'.",
    status: "published"
  },
  {
    id: "afr-m-6",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which rift lake between the Democratic Republic of the Congo and Rwanda contains immense dissolved reserves of methane gas at its depths?",
    options: ["Lake Victoria", "Lake Kivu", "Lake Edward", "Lake Albert"],
    correctIndex: 1,
    explanation: "Lake Kivu is a meromictic lake holding over 60 billion cubic meters of dissolved methane, which is extracted for electricity generation.",
    status: "published"
  },
  {
    id: "afr-m-7",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the rugged, high-altitude plateau in eastern Africa often referred to as the 'Roof of Africa'?",
    options: ["Drakensberg", "Ethiopian Highlands", "Jos Plateau", "Bie Plateau"],
    correctIndex: 1,
    explanation: "The Ethiopian Highlands form the largest continuous area of high elevation in Africa, rarely dropping below 1,500 meters.",
    status: "published"
  },
  {
    id: "afr-m-8",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the highest mountain peak in Ethiopia and the Ethiopian Highlands, located in the Simien Mountains?",
    options: ["Mount Meru", "Ras Dashen", "Mount Elgon", "Batu"],
    correctIndex: 1,
    explanation: "Ras Dashen reaches an elevation of 4,550 meters in Simien National Park, home to endemic Gelada baboons and Walia ibex.",
    status: "published"
  },
  {
    id: "afr-m-9",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the principal mountain range in southern Africa, forming the great eastern escarpment of the South African plateau?",
    options: ["Atlas Mountains", "Drakensberg (uKhahlamba)", "Magaliesberg", "Cederberg"],
    correctIndex: 1,
    explanation: "The Drakensberg spans over 1,000 kilometers across South Africa and Lesotho, featuring dramatic basalt cliffs and the Amphitheatre.",
    status: "published"
  },
  {
    id: "afr-m-10",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the second-highest waterfall in the world, cascading 948 meters down the Amphitheatre escarpment in South Africa's Drakensberg?",
    options: ["Victoria Falls", "Tugela Falls", "Kalambo Falls", "Kalandula Falls"],
    correctIndex: 1,
    explanation: "Tugela Falls features a seasonal sequence of five distinct free-leaping cascades dropping nearly a kilometer.",
    status: "published"
  },
  {
    id: "afr-m-11",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which highland massif in southern Algeria contains Mount Tahat, the highest peak in Algeria at 2,908 meters?",
    options: ["Tibesti Mountains", "Ahaggar (Hoggar) Mountains", "A\u00efr Mountains", "Ennedi Plateau"],
    correctIndex: 1,
    explanation: "The Ahaggar Mountains are a rugged Precambrian basement and volcanic highland in the central Sahara.",
    status: "published"
  },
  {
    id: "afr-m-12",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which volcanic mountain range in northern Chad contains Emi Koussi, the highest peak in the Sahara Desert at 3,415 meters?",
    options: ["Ahaggar Mountains", "Tibesti Mountains", "A\u00efr Mountains", "Marrah Mountains"],
    correctIndex: 1,
    explanation: "The Tibesti Mountains are an isolated volcanic massif in the north of Chad rising dramatically above surrounding desert sands.",
    status: "published"
  },
  {
    id: "afr-m-13",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which highland region in northern Guinea is known as the 'Water Tower of West Africa' because the Niger, Senegal, and Gambia rivers originate there?",
    options: ["Jos Plateau", "Fouta Djallon", "Nimba Range", "Manding Mountains"],
    correctIndex: 1,
    explanation: "The Fouta Djallon plateau captures abundant Atlantic monsoon rains that feed the major river networks of West Africa.",
    status: "published"
  },
  {
    id: "afr-m-14",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which elevated plateau region in central Nigeria has a temperate climate and is home to the city of Jos?",
    options: ["Biu Plateau", "Jos Plateau", "Adamawa Plateau", "Mambilla Plateau"],
    correctIndex: 1,
    explanation: "The Jos Plateau averages 1,280 meters in altitude and historically was Nigeria's center of tin and columbite mining.",
    status: "published"
  },
  {
    id: "afr-m-15",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the narrow panhandle strip of land in northeastern Namibia giving the country access to the Zambezi River?",
    options: ["Walia Strip", "Caprivi Strip (Zambezi Region)", "Gaza Strip", "Wakhan Corridor"],
    correctIndex: 1,
    explanation: "The Caprivi Strip was acquired by German South West Africa in 1890 to secure river access to the Zambezi.",
    status: "published"
  },
  {
    id: "afr-m-16",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which oil-rich provincial exclave of Angola is separated from the rest of the country by a narrow coastal strip of the Democratic Republic of the Congo?",
    options: ["Zaire Province", "Cabinda", "Huambo", "Benguela"],
    correctIndex: 1,
    explanation: "Cabinda is an Angolan exclave bounded by the Atlantic Ocean, the Republic of the Congo, and the DRC.",
    status: "published"
  },
  {
    id: "afr-m-17",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which volcanic island in the Gulf of Guinea contains Malabo, the official national capital of Equatorial Guinea?",
    options: ["Annobon", "Bioko (Fernando Po)", "Sao Tome", "Principe"],
    correctIndex: 1,
    explanation: "Bioko lies about 32 kilometers off the coast of Cameroon, far north of Equatorial Guinea's mainland territory (Río Muni).",
    status: "published"
  },
  {
    id: "afr-m-18",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the massive tropical drainage basin in Central Africa that contains the world's second-largest rainforest after the Amazon?",
    options: ["Niger Basin", "Congo Basin", "Chad Basin", "Zambezi Basin"],
    correctIndex: 1,
    explanation: "The Congo Basin spans approximately 3.7 million square kilometers across Central Africa, rich in biodiversity and dense rainforests.",
    status: "published"
  },
  {
    id: "afr-m-19",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which major reservoir on the Zambezi River between Zambia and Zimbabwe is the world's largest artificial lake by water storage volume?",
    options: ["Lake Nasser", "Lake Kariba", "Lake Volta", "Lake Cahora Bassa"],
    correctIndex: 1,
    explanation: "Lake Kariba stores over 180 cubic kilometers of water and was filled following the construction of the Kariba Dam in the 1950s.",
    status: "published"
  },
  {
    id: "afr-m-20",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the massive hydroelectric reservoir located on the Zambezi River in western Mozambique?",
    options: ["Lake Kariba", "Cahora Bassa Reservoir", "Lake Nasser", "Gariep Dam"],
    correctIndex: 1,
    explanation: "Cahora Bassa is southern Africa's largest hydroelectric scheme, generating electricity exported to South Africa.",
    status: "published"
  },
  {
    id: "afr-m-21",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the vast expanse of salt pans in northeastern Botswana that represents the desiccated remnants of ancient Lake Makgadikgadi?",
    options: ["Etosha Pan", "Makgadikgadi Pans", "Sua Pan", "Sossusvlei"],
    correctIndex: 1,
    explanation: "The Makgadikgadi Pans cover over 16,000 square kilometers, flooding seasonally to attract thousands of flamingos and zebras.",
    status: "published"
  },
  {
    id: "afr-m-22",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the massive endorheic salt pan located inside northern Namibia's premier wildlife national park?",
    options: ["Makgadikgadi Pan", "Etosha Pan", "Chott el Djerid", "Sossusvlei"],
    correctIndex: 1,
    explanation: "The Etosha Pan is a 4,800-square-kilometer shimmering white calcrete basin that forms the centerpiece of Etosha National Park.",
    status: "published"
  },
  {
    id: "afr-m-23",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which famous salt and clay pan in the Namib Desert is surrounded by towering red sand dunes like 'Big Daddy'?",
    options: ["Deadvlei / Sossusvlei", "Etosha", "Fish River Canyon", "Skeleton Coast"],
    correctIndex: 0,
    explanation: "Sossusvlei and the adjacent Deadvlei are famous for 900-year-old dead camel thorn trees set against 300-meter-high rust-orange dunes.",
    status: "published"
  },
  {
    id: "afr-m-24",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the second-largest canyon in the world and largest in Africa, carved by a river in southern Namibia?",
    options: ["Blyde River Canyon", "Fish River Canyon", "Blue Nile Gorge", "Congo Canyon"],
    correctIndex: 1,
    explanation: "Fish River Canyon features a gigantic ravine about 160 kilometers long, up to 27 kilometers wide, and up to 550 meters deep.",
    status: "published"
  },
  {
    id: "afr-m-25",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which spectacular green canyon in Mpumalanga, South Africa, is celebrated as one of the largest vegetated green canyons on Earth?",
    options: ["Fish River Canyon", "Blyde River Canyon", "Oribi Gorge", "Kloof"],
    correctIndex: 1,
    explanation: "The Blyde River Canyon cuts through red sandstone cliffs along the Drakensberg escarpment, famous for the 'Three Rondavels'.",
    status: "published"
  },
  {
    id: "afr-m-26",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which famous coastline along northern Namibia's Atlantic shore is named for shipwrecks and whale bones scattered in dense coastal fogs?",
    options: ["Wild Coast", "Skeleton Coast", "Cape of Good Hope", "Grain Coast"],
    correctIndex: 1,
    explanation: "The Skeleton Coast is notoriously hazardous to navigation due to dense ocean fogs generated by the cold Benguela Current.",
    status: "published"
  },
  {
    id: "afr-m-27",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which cold, nutrient-rich oceanic current flows northward along the western coast of southern Africa, moderating coastal temperatures?",
    options: ["Agulhas Current", "Benguela Current", "Mozambique Current", "Canary Current"],
    correctIndex: 1,
    explanation: "The Benguela Current drives intense coastal upwelling that supports one of the world's most productive marine fisheries.",
    status: "published"
  },
  {
    id: "afr-m-28",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which warm ocean current flows southward along the southeastern coast of Africa between Madagascar and South Africa?",
    options: ["Benguela Current", "Agulhas Current", "Canary Current", "Somali Current"],
    correctIndex: 1,
    explanation: "The Agulhas Current is the western boundary current of the southern Indian Ocean, transporting warm tropical waters southward.",
    status: "published"
  },
  {
    id: "afr-m-29",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the massive tectonic volcanic depression in northern Tanzania that is the world's largest intact, unflooded volcanic caldera?",
    options: ["Menengai", "Ngorongoro Crater", "Mount Meru Caldera", "Mount Longonot"],
    correctIndex: 1,
    explanation: "The Ngorongoro Crater spans 260 square kilometers and drops 600 meters, supporting an enclosed haven of over 25,000 large mammals.",
    status: "published"
  },
  {
    id: "afr-m-30",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the second-highest mountain in Tanzania, an active stratovolcano located 70 km west of Mount Kilimanjaro?",
    options: ["Mount Kenya", "Mount Meru", "Mount Hanang", "Mount Loolmalasin"],
    correctIndex: 1,
    explanation: "Mount Meru rises to 4,562 meters in Arusha National Park, having lost much of its eastern cone in a massive caldera collapse.",
    status: "published"
  },
  {
    id: "afr-m-31",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which soda lake in northern Tanzania is famous for its bright red water and for being the primary breeding ground for East Africa's 2.5 million lesser flamingos?",
    options: ["Lake Manyara", "Lake Natron", "Lake Eyasi", "Lake Bogoria"],
    correctIndex: 1,
    explanation: "Lake Natron is highly alkaline (pH > 10.5) due to sodium carbonate runoff from the nearby Ol Doinyo Lengai volcano.",
    status: "published"
  },
  {
    id: "afr-m-32",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which stratovolcano in northern Tanzania is the only active volcano in the world that erupts natrocarbonatite (black, low-temperature carbonate lava)?",
    options: ["Mount Nyiragongo", "Ol Doinyo Lengai", "Nyamuragira", "Mount Meru"],
    correctIndex: 1,
    explanation: "Ol Doinyo Lengai ('Mountain of God' in Maasai) erupts bizarre black and silvery lavas that turn white upon exposure to rain.",
    status: "published"
  },
  {
    id: "afr-m-33",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which active stratovolcano near the city of Goma in the Democratic Republic of the Congo contains the world's largest persistent lava lake?",
    options: ["Ol Doinyo Lengai", "Mount Nyiragongo", "Mount Nyamuragira", "Mount Cameroon"],
    correctIndex: 1,
    explanation: "Mount Nyiragongo sits in Virunga National Park; its highly fluid foiditic lavas have caused catastrophic, fast-moving eruptions.",
    status: "published"
  },
  {
    id: "afr-m-34",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the chain of eight volcanic mountains spanning the borders of Rwanda, Uganda, and the DRC, famous as home to critically endangered mountain gorillas?",
    options: ["Aberdare Range", "Virunga Mountains", "Ruwenzori Mountains", "Mitumba Mountains"],
    correctIndex: 1,
    explanation: "The Virunga Mountains include Mount Karisimbi, Bisoke, and Nyiragongo, conserved within Volcanoes and Virunga National Parks.",
    status: "published"
  },
  {
    id: "afr-m-35",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the highest mountain peak in the Virunga volcanic chain, rising to 4,507 meters on the border between Rwanda and the DRC?",
    options: ["Mount Mikeno", "Mount Karisimbi", "Mount Muhabura", "Mount Bisoke"],
    correctIndex: 1,
    explanation: "Mount Karisimbi is an inactive stratovolcano whose name derives from 'amasimbi', meaning white snow in Kinyarwanda.",
    status: "published"
  },
  {
    id: "afr-m-36",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the highest peak in West and Central Africa, an active volcano rising to 4,040 meters near the Gulf of Guinea coast?",
    options: ["Mount Nimba", "Mount Cameroon (Fako)", "Mount Oku", "Loma Mansa"],
    correctIndex: 1,
    explanation: "Mount Cameroon is a massive volcanic massif that rises steeply from tropical coastal lowlands, known locally as Mongo ma Ndemi.",
    status: "published"
  },
  {
    id: "afr-m-37",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which mountain range along the borders of Guinea, Liberia, and Côte d'Ivoire is a UNESCO World Heritage site celebrated for endemic viviparous toads?",
    options: ["Loma Mountains", "Mount Nimba Strict Nature Reserve", "Tingui Hills", "Fouta Djallon"],
    correctIndex: 1,
    explanation: "The Nimba Range rises above surrounding rainforests and savannas, holding rich iron ore deposits alongside unique montane ecosystems.",
    status: "published"
  },
  {
    id: "afr-m-38",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the famous inland body of water in central Ghana created in an ancient meteorite impact crater?",
    options: ["Lake Volta", "Lake Bosumtwi", "Lake Kivu", "Lake Mai-Ndombe"],
    correctIndex: 1,
    explanation: "Lake Bosumtwi occupies a circular impact crater formed roughly 1 million years ago, sacred to the Ashanti people.",
    status: "published"
  },
  {
    id: "afr-m-39",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which desert depression in northern Egypt drops to 133 meters below sea level and features extensive salt marshes and sand dunes?",
    options: ["Farafra Depression", "Qattara Depression", "Siwa Oasis", "Dakhla Oasis"],
    correctIndex: 1,
    explanation: "The Qattara Depression covers 19,605 square kilometers, the second-lowest point in Africa after Lake Assal in Djibouti.",
    status: "published"
  },
  {
    id: "afr-m-40",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which crater lake in Djibouti sits at 155 meters below sea level, representing the lowest dry point of land on the African continent?",
    options: ["Lake Abbe", "Lake Assal", "Lake Afrera", "Lake Retba"],
    correctIndex: 1,
    explanation: "Lake Assal in the Afar Triangle is the third-lowest point on Earth and the saltiest body of water outside Antarctica (34.8% salinity).",
    status: "published"
  },
  {
    id: "afr-m-41",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the hyper-arid, volcanically active geological depression in the Afar region of northern Ethiopia renowned for extreme heat, sulfur springs, and salt mining?",
    options: ["Qattara Depression", "Danakil Depression", "Bod\u00e9l\u00e9 Depression", "Turpan Depression"],
    correctIndex: 1,
    explanation: "The Danakil Depression lies where three tectonic plates are pulling apart, home to Dallol's colorful acid hydrothermal fields and Erta Ale.",
    status: "published"
  },
  {
    id: "afr-m-42",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which continuously active shield volcano in the Danakil Depression of Ethiopia is famous for having one of the longest-lived persistent lava lakes?",
    options: ["Dallol", "Erta Ale", "Mount Dabbahu", "Alayta"],
    correctIndex: 1,
    explanation: "Erta Ale ('Smoking Mountain' in the Afar language) rises to 613 meters in the Danakil rift.",
    status: "published"
  },
  {
    id: "afr-m-43",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the low-lying, wind-scoured depression in northern Chad that is the single largest atmospheric source of mineral dust on Earth?",
    options: ["Qattara Depression", "Bod\u00e9l\u00e9 Depression", "Danakil Depression", "Mourdi Depression"],
    correctIndex: 1,
    explanation: "Diatomite dust blown out of the Bodélé Depression crosses the Atlantic Ocean and fertilizes the Amazon Rainforest.",
    status: "published"
  },
  {
    id: "afr-m-44",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which mountain massif in north-central Niger rises in the middle of the Sahara Desert, famous for Tuareg rock art and blue marble mountains?",
    options: ["Tibesti Mountains", "A\u00efr Mountains", "Ahaggar Mountains", "Ennedi Plateau"],
    correctIndex: 1,
    explanation: "The Aïr Mountains rise above the Tenere Desert, forming an isolated Saharan montane biodiversity oasis.",
    status: "published"
  },
  {
    id: "afr-m-45",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the hyper-arid sand sea in the south-central Sahara of Niger that was once crossed by the legendary prehistoric 'Tree of Ténéré'?",
    options: ["Grand Erg Oriental", "T\u00e9n\u00e9r\u00e9 Desert", "Erg Chebbi", "Libyan Desert"],
    correctIndex: 1,
    explanation: "The Ténéré is a vast plain of sand dunes in Niger known for extreme isolation and burning desert winds.",
    status: "published"
  },
  {
    id: "afr-m-46",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the sandstone plateau in northeastern Chad famous for natural stone arches, gueltas (desert pools), and ancient petroglyphs?",
    options: ["Adrar des Ifoghas", "Ennedi Plateau", "Tassili n'Ajjer", "Tidikelt"],
    correctIndex: 1,
    explanation: "The Ennedi Plateau features dramatic eroded towers, canyons, and Guelta d'Archei, home to one of the last Saharan crocodile populations.",
    status: "published"
  },
  {
    id: "afr-m-47",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which UNESCO plateau in southeastern Algeria is famous for vast 'forests of stone' and prehistoric rock paintings documenting a green Sahara?",
    options: ["Ennedi", "Tassili n'Ajjer", "Ahaggar", "A\u00efr"],
    correctIndex: 1,
    explanation: "Tassili n'Ajjer preserves over 15,000 prehistoric rock carvings depicting elephants, giraffes, and cattle when the Sahara was savanna.",
    status: "published"
  },
  {
    id: "afr-m-48",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the large seasonal salt lake (chott) in southern Tunisia that was used as a filming location for Tatooine in Star Wars?",
    options: ["Chott el Djerid", "Lake Assal", "Lake Retba", "Chott Ech Chergui"],
    correctIndex: 0,
    explanation: "Chott el Djerid is an endorheic salt basin covering over 5,000 square kilometers across central-southern Tunisia.",
    status: "published"
  },
  {
    id: "afr-m-49",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the coastal lagoon in Senegal north of Dakar famous for its vivid pink waters caused by Dunaliella salina algae?",
    options: ["Lake Nokou\u00e9", "Lake Retba (Lac Rose)", "Lake Guiers", "Lagoon Ebri\u00e9"],
    correctIndex: 1,
    explanation: "Lake Retba's high salt concentration (up to 40%) supports salt-tolerant halophilic micro-algae that produce red pigments.",
    status: "published"
  },
  {
    id: "afr-m-50",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which narrow coastal enclave along the northern coast of Morocco is an autonomous city of Spain?",
    options: ["Ceuta", "Melilla", "Gibraltar", "Both Ceuta and Melilla"],
    correctIndex: 3,
    explanation: "Both Ceuta and Melilla are autonomous cities of Spain located on the Mediterranean coast of North Africa, bordering Morocco.",
    status: "published"
  },
  {
    id: "afr-m-51",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which body of water does the Congo River discharge into as it reaches the Atlantic coast?",
    options: ["Gulf of Guinea", "Atlantic Ocean (Congo Estuary)", "Mozambique Channel", "Bight of Biafra"],
    correctIndex: 1,
    explanation: "The Congo River empties directly into the South Atlantic Ocean through a narrow estuary between Banana (DRC) and Soyo (Angola).",
    status: "published"
  },
  {
    id: "afr-m-52",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the series of 32 cataracts and rapids on the lower Congo River that prevents ocean-going ships from reaching Kinshasa?",
    options: ["Victoria Falls", "Livingstone Falls", "Boyoma Falls", "Inga Falls"],
    correctIndex: 1,
    explanation: "Livingstone Falls drops 270 meters over a span of 350 kilometers between Kinshasa and Matadi.",
    status: "published"
  },
  {
    id: "afr-m-53",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which group of seven cataracts on the Lualaba (upper Congo) River in the DRC was formerly named Stanley Falls?",
    options: ["Livingstone Falls", "Boyoma Falls", "Kalandula Falls", "Epupa Falls"],
    correctIndex: 1,
    explanation: "Boyoma Falls extends over 100 kilometers along the river, home to Wagenia fishermen who build wooden fish traps in rapids.",
    status: "published"
  },
  {
    id: "afr-m-54",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the largest tributary of the Congo River by discharge, forming part of the border between the DRC and Republic of the Congo?",
    options: ["Kasai River", "Ubangi River", "Lomami River", "Kwilu River"],
    correctIndex: 1,
    explanation: "The Ubangi River is formed by the confluence of the Mbomou and Uele rivers, flowing past Bangui into the Congo.",
    status: "published"
  },
  {
    id: "afr-m-55",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which river in southern Africa is known as the Cubango in Angola before flowing into northern Botswana to form the Okavango Delta?",
    options: ["Kunene River", "Okavango River", "Cuito River", "Cuando River"],
    correctIndex: 1,
    explanation: "The Okavango River originates in the highlands of central Angola and flows southeast across the Caprivi Strip into Botswana.",
    status: "published"
  },
  {
    id: "afr-m-56",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which river forms the northern international border between Namibia and Angola, famous for Ruacana and Epupa falls?",
    options: ["Orange River", "Kunene (Cunene) River", "Zambezi River", "Okavango River"],
    correctIndex: 1,
    explanation: "The Kunene River flows west from the Angolan plateau, forming the border with Namibia before discharging into the Atlantic.",
    status: "published"
  },
  {
    id: "afr-m-57",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which river forms the southern international border of Namibia with South Africa?",
    options: ["Kunene River", "Orange River", "Fish River", "Nossob River"],
    correctIndex: 1,
    explanation: "The Orange River flows along the entire southern border of Namibia before entering the Atlantic at Alexander Bay.",
    status: "published"
  },
  {
    id: "afr-m-58",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the primary river draining the Ethiopian Highlands into eastern Kenya and southern Somalia, emptying into the Indian Ocean?",
    options: ["Shebelle River", "Jubba (Juba) River", "Tana River", "Awash River"],
    correctIndex: 1,
    explanation: "The Jubba River is Somalia's primary perennial river, vital for southern Somali agriculture alongside the Shebelle.",
    status: "published"
  },
  {
    id: "afr-m-59",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which river originates in Ethiopia, flows across Somalia, and normally terminates in sand dunes before reaching the Jubba River?",
    options: ["Awash River", "Shebelle River", "Omo River", "Baro River"],
    correctIndex: 1,
    explanation: "The Shebelle River flows roughly 1,100 kilometers across southeastern Ethiopia and Somalia parallel to the coast.",
    status: "published"
  },
  {
    id: "afr-m-60",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which river in southwestern Ethiopia feeds almost entirely the endorheic Lake Turkana, famous for early hominid fossil discoveries?",
    options: ["Awash River", "Omo River", "Blue Nile", "Baro River"],
    correctIndex: 1,
    explanation: "The Lower Valley of the Omo is a UNESCO World Heritage site renowned for discovering Australopithecus and early Homo fossils.",
    status: "published"
  },
  {
    id: "afr-m-61",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the longest river located entirely within Kenya, flowing from the Aberdare Range into the Indian Ocean at Ungwana Bay?",
    options: ["Athi-Galana River", "Tana River", "Mara River", "Nzoia River"],
    correctIndex: 1,
    explanation: "The Tana River flows over 1,000 kilometers across Kenya, generating a major portion of the nation's hydroelectric power.",
    status: "published"
  },
  {
    id: "afr-m-62",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which river forms the international boundary between South Africa and Botswana before entering Mozambique?",
    options: ["Orange River", "Limpopo River", "Vaal River", "Molopo River"],
    correctIndex: 1,
    explanation: "The Limpopo River defines roughly 640 kilometers of South Africa's northern border with Botswana and Zimbabwe.",
    status: "published"
  },
  {
    id: "afr-m-63",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the largest tributary of the Orange River in South Africa, historically marking the northern boundary of the Orange Free State?",
    options: ["Caledon River", "Vaal River", "Modder River", "Harts River"],
    correctIndex: 1,
    explanation: "The Vaal River is South Africa's most vital river for domestic and industrial water supply, feeding the Gauteng industrial heartland.",
    status: "published"
  },
  {
    id: "afr-m-64",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the name of the narrow coastal strip of sandbanks, lagoons, and mangroves that lines the coast of southern Benin and Togo?",
    options: ["Skeleton Coast", "Slave Coast (Bight of Benin lagoons)", "Swahili Coast", "Barbary Coast"],
    correctIndex: 1,
    explanation: "The coastal lagoons of the Bight of Benin historically served as natural waterways sheltered from Atlantic surf.",
    status: "published"
  },
  {
    id: "afr-m-65",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which historic forest kingdom in southwestern Nigeria was renowned for magnificent cast bronze and brass artworks between the 13th and 19th centuries?",
    options: ["Ashanti Empire", "Kingdom of Benin", "Oyo Empire", "Dahomey"],
    correctIndex: 1,
    explanation: "The Kingdom of Benin (in modern Edo State, Nigeria) was renowned for its walled capital and master bronze metallurgy.",
    status: "published"
  },
  {
    id: "afr-m-66",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which island group located in the northern Atlantic off the coast of Morocco is an autonomous archipelago of Portugal?",
    options: ["Canary Islands", "Madeira", "Azores", "Cape Verde"],
    correctIndex: 1,
    explanation: "Madeira is an autonomous volcanic archipelago of Portugal situated in the Atlantic Ocean roughly 520 km from the African coast.",
    status: "published"
  },
  {
    id: "afr-m-67",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which volcanic archipelago of seven main islands in the Atlantic Ocean off southern Morocco is an autonomous community of Spain?",
    options: ["Madeira", "Canary Islands", "Cape Verde", "Baleares"],
    correctIndex: 1,
    explanation: "The Canary Islands (including Tenerife, Gran Canaria, and Lanzarote) sit just 100 kilometers off the coast of Western Sahara and Morocco.",
    status: "published"
  },
  {
    id: "afr-m-68",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the highest mountain peak in Spain, located on the Canary Island of Tenerife off the African coast?",
    options: ["Mulhac\u00e9n", "Teide (Mount Teide)", "Roque de los Muchachos", "Pico de las Nieves"],
    correctIndex: 1,
    explanation: "Mount Teide is a 3,715-meter stratovolcano on Tenerife, the third-tallest volcanic structure on Earth measured from its oceanic base.",
    status: "published"
  },
  {
    id: "afr-m-69",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the small volcanic island territory of the United Kingdom in the South Atlantic Ocean where Napoleon Bonaparte died in exile?",
    options: ["Ascension Island", "Saint Helena", "Tristan da Cunha", "Falkland Islands"],
    correctIndex: 1,
    explanation: "Saint Helena lies 1,950 kilometers west of southwestern Africa, where Napoleon was exiled from 1815 until his death in 1821.",
    status: "published"
  },
  {
    id: "afr-m-70",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the most remote inhabited archipelago on Earth, located in the South Atlantic Ocean roughly 2,400 km from South Africa?",
    options: ["Saint Helena", "Tristan da Cunha", "Bouvet Island", "Kerguelen Islands"],
    correctIndex: 1,
    explanation: "Tristan da Cunha is a British overseas territory home to approximately 250 residents, accessible only by a 6-day ship voyage from Cape Town.",
    status: "published"
  },
  {
    id: "afr-m-71",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which French overseas department and volcanic island is located in the Indian Ocean between Madagascar and Mauritius?",
    options: ["Mayotte", "R\u00e9union", "Rodrigues", "Seychelles"],
    correctIndex: 1,
    explanation: "Réunion is an integral department of France, famous for Piton de la Fournaise, one of the most active shield volcanoes in the world.",
    status: "published"
  },
  {
    id: "afr-m-72",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which active shield volcano on the island of Réunion has erupted dozens of times over the past century, feeding lava down to the Indian Ocean?",
    options: ["Piton des Neiges", "Piton de la Fournaise", "Karthala", "Mount Erte"],
    correctIndex: 1,
    explanation: "Piton de la Fournaise ('Peak of the Furnace') is a basaltic shield volcano on the eastern side of Réunion.",
    status: "published"
  },
  {
    id: "afr-m-73",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the highest mountain peak in Madagascar and the Indian Ocean, located in the Tsaratanana Massif?",
    options: ["Pic Boby", "Maromokotro", "Mount Tsiafajavona", "Ankaratra"],
    correctIndex: 1,
    explanation: "Maromokotro rises to 2,876 meters in northern Madagascar.",
    status: "published"
  },
  {
    id: "afr-m-74",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the unique geological landscape of razor-sharp eroded limestone karst needles in western Madagascar called?",
    options: ["Cenotes", "Tsingy (e.g. Tsingy de Bemaraha)", "Mogotes", "Yardangs"],
    correctIndex: 1,
    explanation: "Tsingy de Bemaraha is a UNESCO World Heritage site known as the 'stone forest' where needle-sharp karst blocks form natural fortresses.",
    status: "published"
  },
  {
    id: "afr-m-75",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which iconic, swollen tree species with fire-resistant trunks is iconic to the dry deciduous forests of western and southwestern Madagascar?",
    options: ["Acacia", "Baobab (Adansonia)", "Eucalyptus", "Dragon Blood Tree"],
    correctIndex: 1,
    explanation: "Six of the world's eight baobab species are endemic to Madagascar, famously celebrated at the Avenue of the Baobabs near Morondava.",
    status: "published"
  },
  {
    id: "afr-m-76",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which national park in South Africa, established in 1898, is one of the largest game reserves in Africa covering nearly 20,000 square kilometers?",
    options: ["Addo Elephant Park", "Kruger National Park", "Kgalagadi Transfrontier Park", "Hluhluwe-iMfolozi"],
    correctIndex: 1,
    explanation: "Kruger National Park extends along the Mozambique and Zimbabwe borders, celebrated as a premier safari sanctuary for Africa's 'Big Five'.",
    status: "published"
  },
  {
    id: "afr-m-77",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which transfrontier peace park spans the border between South Africa and Botswana in the southern Kalahari Desert?",
    options: ["Kruger Transfrontier Park", "Kgalagadi Transfrontier Park", "Limpopo Peace Park", "Ai-Ais Richtersveld"],
    correctIndex: 1,
    explanation: "Kgalagadi was the first formally declared transfrontier conservation area in Africa, famous for red dunes and black-maned Kalahari lions.",
    status: "published"
  },
  {
    id: "afr-m-78",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which semi-desert natural region covers over 400,000 square kilometers in the interior of South Africa, divided into 'Great' and 'Little' portions?",
    options: ["Highveld", "The Karoo", "Lowveld", "Bushveld"],
    correctIndex: 1,
    explanation: "The Karoo is an arid to semi-arid plateau characterized by flat-topped mesas (koppies) and low succulent shrubs.",
    status: "published"
  },
  {
    id: "afr-m-79",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the high inland plateau region of South Africa that encompasses Johannesburg and Pretoria called?",
    options: ["Lowveld", "Highveld", "Karoo", "Bushveld"],
    correctIndex: 1,
    explanation: "The Highveld lies at elevations between 1,500 and 2,100 meters, home to South Africa's major urban agglomerations and goldfields.",
    status: "published"
  },
  {
    id: "afr-m-80",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the geological ridge of quartz-rich hills in Gauteng, South Africa, famous for producing roughly 40% of all gold mined on Earth?",
    options: ["Drakensberg", "Witwatersrand", "Magaliesberg", "Soutpansberg"],
    correctIndex: 1,
    explanation: "The Witwatersrand ('Ridge of White Waters') gold strike in 1886 led directly to the founding and explosive growth of Johannesburg.",
    status: "published"
  },
  {
    id: "afr-m-81",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the paleoanthropological UNESCO World Heritage site northwest of Johannesburg, famous for Sterkfontein caves and 'Mrs. Ples'?",
    options: ["Olduvai Gorge", "Cradle of Humankind", "Lothagam", "Koobi Fora"],
    correctIndex: 1,
    explanation: "The Cradle of Humankind contains dozens of dolomitic limestone caves yielding more than a third of all known hominin fossils.",
    status: "published"
  },
  {
    id: "afr-m-82",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which steep ravine in northern Tanzania's Great Rift Valley is famous for pioneer hominid discoveries by Louis and Mary Leakey?",
    options: ["Omo Valley", "Olduvai Gorge (Oldupai)", "Laetoli", "Olorgesailie"],
    correctIndex: 1,
    explanation: "Olduvai Gorge has continuous stratigraphic beds spanning from 2.1 million to 15,000 years ago, yielding Homo habilis fossils.",
    status: "published"
  },
  {
    id: "afr-m-83",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which site in northern Tanzania preserved 3.6-million-year-old bipedal hominin footprints in solidified volcanic ash, discovered by Mary Leakey?",
    options: ["Olduvai Gorge", "Laetoli", "Koobi Fora", "Hadar"],
    correctIndex: 1,
    explanation: "The Laetoli footprints provided conclusive fossil evidence that Australopithecus afarensis walked fully upright.",
    status: "published"
  },
  {
    id: "afr-m-84",
    continent: "Africa",
    difficulty: "Medium",
    question: "In which paleoanthropological site in the Afar region of Ethiopia was the famous 3.2-million-year-old Australopithecus fossil 'Lucy' found in 1974?",
    options: ["Omo Valley", "Hadar", "Middle Awash", "Woranso-Mille"],
    correctIndex: 1,
    explanation: "Donald Johanson and Tom Gray discovered the 40% complete skeleton of 'Lucy' (Dinknesh) at Hadar in the Awash River basin.",
    status: "published"
  },
  {
    id: "afr-m-85",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the large desert lake and wetland in northern Botswana formed by the seasonal outflow of the Okavango Delta?",
    options: ["Lake Ngami", "Lake Liambezi", "Lake Malombe", "Lake Xau"],
    correctIndex: 0,
    explanation: "Lake Ngami is an endorheic lake in the Kalahari that was famously reached and described by David Livingstone in 1849.",
    status: "published"
  },
  {
    id: "afr-m-86",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the historic, stone-built medieval ruined city in southeastern Zimbabwe that was the capital of the Kingdom of Zimbabwe?",
    options: ["Khami", "Great Zimbabwe", "Danangombe", "Mapungubwe"],
    correctIndex: 1,
    explanation: "Great Zimbabwe features monumental dry-stone circular granite walls and the Conical Tower, dating between the 11th and 15th centuries.",
    status: "published"
  },
  {
    id: "afr-m-87",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the ancient pre-colonial Iron Age kingdom site located at the confluence of the Shashe and Limpopo rivers on South Africa's northern border?",
    options: ["Great Zimbabwe", "Mapungubwe", "Thulamela", "Khami"],
    correctIndex: 1,
    explanation: "Mapungubwe was southern Africa's first indigenous kingdom (1075–1220 CE), famous for its golden rhino artifact and ivory trade.",
    status: "published"
  },
  {
    id: "afr-m-88",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which historic caravan trading town in central Niger is famous for its 27-meter mudbrick minaret, the tallest mudbrick structure in the world?",
    options: ["Zinder", "Agadez", "Tahoua", "Maradi"],
    correctIndex: 1,
    explanation: "The Grand Mosque of Agadez was built in 1515, acting as a historical gateway for trans-Saharan camel caravans.",
    status: "published"
  },
  {
    id: "afr-m-89",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which town in central Mali is renowned for the Great Mosque of Djenné, the largest adobe (mud-brick) building in the world?",
    options: ["Timbuktu", "Djenn\u00e9", "Mopti", "S\u00e9gou"],
    correctIndex: 1,
    explanation: "The Great Mosque of Djenné sits on the floodplain of the Bani River and is replastered annually in a community festival.",
    status: "published"
  },
  {
    id: "afr-m-90",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the ancient Sudanese kingdom along the middle Nile whose kings built over 200 steep-sided royal pyramids at Meroë?",
    options: ["Kingdom of Aksum", "Kingdom of Kush (Nubia)", "Songhai Empire", "Mali Empire"],
    correctIndex: 1,
    explanation: "The Kingdom of Kush prospered for over a millennium, erecting more distinct stone pyramids in Sudan than exist in all of Egypt.",
    status: "published"
  },
  {
    id: "afr-m-91",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which historic trading kingdom in northern Ethiopia and Eritrea was a major naval and commercial power between the 1st and 8th centuries CE?",
    options: ["Kingdom of Kush", "Kingdom of Aksum (Axum)", "Zagwe Dynasty", "Sultanate of Ifat"],
    correctIndex: 1,
    explanation: "Aksum minted its own gold coinage, converted to Christianity in the 4th century, and erected towering monolithic granite stelae.",
    status: "published"
  },
  {
    id: "afr-m-92",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which desert oasis town in the Western Desert of Egypt is famous for the ancient Oracle of Ammon visited by Alexander the Great?",
    options: ["Bahariya", "Siwa Oasis", "Dakhla", "Kharga"],
    correctIndex: 1,
    explanation: "Siwa Oasis sits in a depression 19 meters below sea level, populated by isolated Berber communities speaking Siwi.",
    status: "published"
  },
  {
    id: "afr-m-93",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which large river forms the border between Senegal and Mauritania before emptying into the Atlantic Ocean near Saint-Louis?",
    options: ["Gambia River", "Senegal River", "Casamance River", "Saloum River"],
    correctIndex: 1,
    explanation: "The Senegal River originates in the Fouta Djallon of Guinea and forms the northern border of Senegal with Mauritania.",
    status: "published"
  },
  {
    id: "afr-m-94",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which small West African country is nearly completely surrounded by Senegal, stretching as a narrow strip along both banks of its namesake river?",
    options: ["Guinea-Bissau", "The Gambia", "Sierra Leone", "Liberia"],
    correctIndex: 1,
    explanation: "The Gambia follows the lower navigable course of the Gambia River, measuring less than 50 kilometers wide at points.",
    status: "published"
  },
  {
    id: "afr-m-95",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the capital city of The Gambia, located on St Mary's Island where the Gambia River enters the Atlantic?",
    options: ["Serekunda", "Banjul", "Brikama", "Bakau"],
    correctIndex: 1,
    explanation: "Banjul (formerly Bathurst) was established by the British in 1816 as a military post to suppress the transatlantic slave trade.",
    status: "published"
  },
  {
    id: "afr-m-96",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the capital city of Guinea-Bissau?",
    options: ["Bafat\u00e1", "Bissau", "Gab\u00fa", "Cacheu"],
    correctIndex: 1,
    explanation: "Bissau is the capital and main Atlantic port of Guinea-Bissau, located on the Geba River estuary.",
    status: "published"
  },
  {
    id: "afr-m-97",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which archipelago of 88 tropical islands off the coast of Guinea-Bissau was declared a UNESCO Biosphere Reserve?",
    options: ["Cape Verde", "Bijag\u00f3s Archipelago (Bissagos)", "Riau Islands", "Los Islands"],
    correctIndex: 1,
    explanation: "The Bijagós Archipelago contains tidal mudflats, mangroves, and is home to unique saltwater-adapted hippopotamuses.",
    status: "published"
  },
  {
    id: "afr-m-98",
    continent: "Africa",
    difficulty: "Medium",
    question: "What is the highest mountain peak in South Africa (entirely within South African territory), located in KwaZulu-Natal?",
    options: ["Thabana Ntlenyana", "Mafadi", "Champagne Castle", "Popple Peak"],
    correctIndex: 1,
    explanation: "Mafadi sits at 3,450 meters on the border of South Africa and Lesotho, the highest point within South African borders.",
    status: "published"
  },
  {
    id: "afr-m-99",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which narrow passage between the Sinai Peninsula and the Arabian mainland controls maritime access to the Gulf of Aqaba and Eilat/Aqaba?",
    options: ["Strait of Hormuz", "Straits of Tiran", "Bab-el-Mandeb", "Suez Canal"],
    correctIndex: 1,
    explanation: "The Straits of Tiran are located between the southern tip of the Sinai Peninsula and Saudi Arabia at the entrance to the Gulf of Aqaba.",
    status: "published"
  },
  {
    id: "afr-m-100",
    continent: "Africa",
    difficulty: "Medium",
    question: "Which country is home to the scenic Blue Nile Falls (known locally as Tis Issat, 'Great Smoke'), located 30 km downstream from Lake Tana?",
    options: ["Sudan", "Ethiopia", "Uganda", "South Sudan"],
    correctIndex: 1,
    explanation: "The Tis Issat falls drop over 40 meters, historically creating immense vapor clouds on the upper Blue Nile in Ethiopia.",
    status: "published"
  },
  {
    id: "afr-h-1",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which enclave country is completely surrounded by South Africa?",
    options: ["Swaziland (Eswatini)", "Lesotho", "Botswana", "Mozambique"],
    correctIndex: 1,
    explanation: "The Kingdom of Lesotho is completely landlocked and encircled by the Republic of South Africa.",
    status: "published"
  },
  {
    id: "afr-h-2",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the deepest lake in Africa and second deepest in the world?",
    options: ["Lake Tanganyika", "Lake Victoria", "Lake Kivu", "Lake Turkana"],
    correctIndex: 0,
    explanation: "Lake Tanganyika reaches an estimated maximum depth of 1,470 meters, second only to Lake Baikal.",
    status: "published"
  },

  // ==========================================
  // EUROPE
  // ==========================================
  {
    id: "eur-e-1",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the smallest independent state in Europe and the world by area?",
    options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
    correctIndex: 2,
    explanation: "Vatican City covers an area of about 0.49 square kilometers (121 acres) completely enclosed within Rome, Italy.",
    status: "published"
  },
  {
    id: "eur-e-2",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which mountain range forms a traditional natural boundary between Europe and Asia?",
    options: ["The Alps", "The Pyrenees", "The Ural Mountains", "The Carpathians"],
    correctIndex: 2,
    explanation: "The Ural Mountains in western Russia traditionally mark the geographic boundary between Europe and Asia.",
    status: "published"
  },
  {
    id: "eur-m-1",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which river flows through more capital cities than any other river in the world?",
    options: ["Rhine River", "Danube River", "Volga River", "Elbe River"],
    correctIndex: 1,
    explanation: "The Danube flows through four European capitals: Vienna (Austria), Bratislava (Slovakia), Budapest (Hungary), and Belgrade (Serbia).",
    status: "published"
  },
  {
    id: "eur-m-2",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which mountain range separates Spain from France?",
    options: ["Apennines", "Pyrenees", "Balkans", "Scandes"],
    correctIndex: 1,
    explanation: "The Pyrenees mountains form a natural border between France and Spain, with the microstate Andorra nestled within them.",
    status: "published"
  },
  {
    id: "eur-h-1",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the highest mountain peak in geographic Europe?",
    options: ["Mont Blanc", "Mount Elbrus", "Matterhorn", "Mount Olympus"],
    correctIndex: 1,
    explanation: "Mount Elbrus in the Caucasus Mountains of Russia rises to 5,642 meters, making it Europe's highest peak.",
    status: "published"
  },
  {
    id: "eur-h-2",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which strait connects the Atlantic Ocean to the Mediterranean Sea?",
    options: ["Strait of Messina", "Strait of Gibraltar", "Bosphorus Strait", "Dardanelles"],
    correctIndex: 1,
    explanation: "The Strait of Gibraltar connects the Atlantic Ocean to the Mediterranean Sea and separates Spain from Morocco.",
    status: "published"
  },

  // ==========================================
  // NORTH AMERICA
  // ==========================================
  {
    id: "na-e-1",
    continent: "North America",
    difficulty: "Easy",
    question: "Which is the largest country by land area in North America?",
    options: ["United States", "Canada", "Mexico", "Greenland"],
    correctIndex: 1,
    explanation: "Canada is the largest country in North America and the second largest in the world by total surface area.",
    status: "published"
  },
  {
    id: "na-e-2",
    continent: "North America",
    difficulty: "Easy",
    question: "Which major river system is the longest in North America?",
    options: ["Colorado River", "Rio Grande", "Mississippi-Missouri River System", "Columbia River"],
    correctIndex: 2,
    explanation: "The combined Mississippi-Missouri river system stretches over 6,275 kilometers across the heart of North America.",
    status: "published"
  },
  {
    id: "na-m-1",
    continent: "North America",
    difficulty: "Medium",
    question: "Which of the Great Lakes is located entirely within the United States?",
    options: ["Lake Superior", "Lake Huron", "Lake Michigan", "Lake Erie"],
    correctIndex: 2,
    explanation: "Lake Michigan is the only one of the five Great Lakes situated entirely within the borders of the United States.",
    status: "published"
  },
  {
    id: "na-m-2",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the highest peak in North America?",
    options: ["Mount Logan", "Denali (Mount McKinley)", "Mount Rainier", "Mount Whitney"],
    correctIndex: 1,
    explanation: "Denali, located in Alaska, rises to 6,190 meters (20,310 feet) above sea level.",
    status: "published"
  },
  {
    id: "na-h-1",
    continent: "North America",
    difficulty: "Hard",
    question: "Which body of water lies between the Canadian mainland and Baffin Island?",
    options: ["Hudson Bay", "Foxe Basin", "Beaufort Sea", "Davis Strait"],
    correctIndex: 1,
    explanation: "Foxe Basin is a shallow oceanic basin north of Hudson Bay, situated between Baffin Island and the Melville Peninsula.",
    status: "published"
  },
  {
    id: "na-h-2",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the southernmost country located on the North American continent mainland?",
    options: ["Costa Rica", "Nicaragua", "Panama", "Belize"],
    correctIndex: 2,
    explanation: "Panama is the southernmost country of Central America (part of North America), connecting to Colombia in South America.",
    status: "published"
  },

  // ==========================================
  // SOUTH AMERICA
  // ==========================================
  {
    id: "sa-e-1",
    continent: "South America",
    difficulty: "Easy",
    question: "Which is the largest country by area and population in South America?",
    options: ["Argentina", "Colombia", "Brazil", "Peru"],
    correctIndex: 2,
    explanation: "Brazil covers nearly half of South America's land area and contains the majority of the Amazon Rainforest.",
    status: "published"
  },
  {
    id: "sa-e-2",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the longest continental mountain range in the world, located in South America?",
    options: ["The Andes", "Sierra Madre", "Appalachians", "Atlas Mountains"],
    correctIndex: 0,
    explanation: "The Andes mountains extend over 7,000 kilometers along the western edge of South America across seven countries.",
    status: "published"
  },
  {
    id: "sa-m-1",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the highest uninterrupted waterfall in the world, located in Venezuela?",
    options: ["Iguazu Falls", "Angel Falls", "Kaieteur Falls", "Gocta Cataracts"],
    correctIndex: 1,
    explanation: "Angel Falls (Salto Ángel) in Venezuela drops 979 meters from the summit of the Auyán-tepui plateau.",
    status: "published"
  },
  {
    id: "sa-m-2",
    continent: "South America",
    difficulty: "Medium",
    question: "Which two South American countries are landlocked?",
    options: ["Bolivia and Paraguay", "Ecuador and Peru", "Guyana and Suriname", "Uruguay and Chile"],
    correctIndex: 0,
    explanation: "Bolivia and Paraguay are the only two nations in South America without direct access to the sea.",
    status: "published"
  },
  {
    id: "sa-h-1",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the highest navigable lake in the world, located between Peru and Bolivia?",
    options: ["Lake Maracaibo", "Lake Titicaca", "Lake Poopó", "Lake Buenos Aires"],
    correctIndex: 1,
    explanation: "Lake Titicaca sits at an altitude of 3,812 meters above sea level in the Andes.",
    status: "published"
  },
  {
    id: "sa-h-2",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the name of the driest non-polar desert in the world, located mainly in Chile?",
    options: ["Patagonian Desert", "Atacama Desert", "Sechura Desert", "Monte Desert"],
    correctIndex: 1,
    explanation: "The Atacama Desert in northern Chile receives less than 15 millimeters of precipitation per year on average.",
    status: "published"
  },

  // ==========================================
  // AUSTRALIA / OCEANIA
  // ==========================================
  {
    id: "oc-e-1",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctIndex: 2,
    explanation: "Canberra was selected as Australia's purpose-built capital city in 1908 as a compromise between Sydney and Melbourne.",
    status: "published"
  },
  {
    id: "oc-e-2",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the world's largest coral reef system, located off the coast of Queensland?",
    options: ["Belize Barrier Reef", "Great Barrier Reef", "Red Sea Coral Reef", "New Caledonia Barrier Reef"],
    correctIndex: 1,
    explanation: "The Great Barrier Reef stretches over 2,300 kilometers and can be seen from space.",
    status: "published"
  },
  {
    id: "oc-m-1",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which body of water separates Australia from the island state of Tasmania?",
    options: ["Cook Strait", "Bass Strait", "Torres Strait", "Timor Sea"],
    correctIndex: 1,
    explanation: "Bass Strait is a maritime channel separating the Australian mainland state of Victoria from the island of Tasmania.",
    status: "published"
  },
  {
    id: "oc-m-2",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which island country in Oceania consists of North Island and South Island?",
    options: ["Fiji", "New Zealand", "Papua New Guinea", "Samoa"],
    correctIndex: 1,
    explanation: "New Zealand is comprised of two main landmasses: the North Island (Te Ika-a-Māui) and the South Island (Te Waipounamu).",
    status: "published"
  },
  {
    id: "oc-h-1",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the highest mountain peak on the Australian mainland?",
    options: ["Mount Kosciuszko", "Mount Bogong", "Mount Feathertop", "Mount Townsend"],
    correctIndex: 0,
    explanation: "Mount Kosciuszko in the Snowy Mountains of New South Wales reaches 2,228 meters above sea level.",
    status: "published"
  },
  {
    id: "oc-h-2",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "Which strait connects the Coral Sea with the Arafura Sea, separating Australia from New Guinea?",
    options: ["Bass Strait", "Torres Strait", "Dampier Strait", "Clarence Strait"],
    correctIndex: 1,
    explanation: "The Torres Strait is a narrow waterway between the northern tip of Cape York Peninsula and Papua New Guinea.",
    status: "published"
  },

  // ==========================================
  // ANTARCTICA
  // ==========================================
  {
    id: "ant-e-1",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What percentage of the world's ice is estimated to be held by the Antarctic ice sheet?",
    options: ["About 30%", "About 50%", "About 70%", "About 90%"],
    correctIndex: 3,
    explanation: "Antarctica holds approximately 90% of the world's ice and about 70% of the world's total fresh water.",
    status: "published"
  },
  {
    id: "ant-e-2",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Because of its extremely low precipitation, Antarctica is geographically classified as a:",
    options: ["Tundra", "Polar Desert", "Savanna", "Steppe"],
    correctIndex: 1,
    explanation: "With average precipitation under 166 millimeters annually across the interior, Antarctica is technically a polar desert.",
    status: "published"
  },
  {
    id: "ant-m-1",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the highest mountain peak in Antarctica?",
    options: ["Mount Erebus", "Vinson Massif", "Mount Kirkpatrick", "Mount Jackson"],
    correctIndex: 1,
    explanation: "Vinson Massif in the Sentinel Range of the Ellsworth Mountains rises to 4,892 meters (16,050 feet).",
    status: "published"
  },
  {
    id: "ant-m-2",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "Which active volcano is located on Ross Island in Antarctica, famous for its persistent lava lake?",
    options: ["Mount Erebus", "Mount Terror", "Mount Melbourne", "Mount Berlin"],
    correctIndex: 0,
    explanation: "Mount Erebus is the second-highest volcano in Antarctica and the southernmost historically active volcano on Earth.",
    status: "published"
  },
  {
    id: "ant-h-1",
    continent: "Antarctica",
    difficulty: "Hard",
    question: "What is the name of the vast subglacial lake buried underneath approximately 4 kilometers of Antarctic ice?",
    options: ["Lake Vostok", "Lake Concordia", "Lake Ellsworth", "Lake Mercer"],
    correctIndex: 0,
    explanation: "Lake Vostok is the largest of Antarctica's known subglacial lakes, sealed beneath the ice sheet for millions of years.",
    status: "published"
  },
  {
    id: "ant-h-2",
    continent: "Antarctica",
    difficulty: "Hard",
    question: "What international agreement signed in 1959 preserves Antarctica exclusively for peaceful scientific research?",
    options: ["Kyoto Protocol", "Antarctic Treaty", "Geneva Convention", "Madrid Protocol"],
    correctIndex: 1,
    explanation: "The Antarctic Treaty was signed in Washington in 1959 by 12 nations active in Antarctica during the International Geophysical Year.",
    status: "published"
  }
];

// Helper to retrieve questions filtered by Continent and Difficulty
function getQuestions(continent, difficulty) {
  return QUESTION_BANK.filter(q => {
    const matchesContinent = !continent || q.continent.toLowerCase() === continent.toLowerCase();
    const matchesDifficulty = !difficulty || q.difficulty.toLowerCase() === difficulty.toLowerCase();
    const isPublished = q.status === "published";
    return matchesContinent && matchesDifficulty && isPublished;
  });
}
