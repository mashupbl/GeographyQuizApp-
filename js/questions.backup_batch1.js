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
