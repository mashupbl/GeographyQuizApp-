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
  {
    id: "afr-h-3",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which prominent geological feature in Mauritania, known as the 'Eye of the Sahara', is a deeply eroded circular anticline dome 40 km in diameter?",
    options: ["Aouelloul Crater", "Richat Structure (Guelb er Richat)", "Tenoumer Crater", "Kebira Crater"],
    correctIndex: 1,
    explanation: "The Richat Structure in the Adrar Plateau was initially thought to be a meteorite crater but is actually a deeply eroded symmetrical geological dome.",
    status: "published"
  },
  {
    id: "afr-h-4",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the highest mountain peak in Namibia, located in the Brandberg Massif in the Erongo Region at 2,573 meters?",
    options: ["Spitzkoppe", "K\u00f6nigstein", "Moltkeblick", "Omatako"],
    correctIndex: 1,
    explanation: "Königstein ('King's Stone') is the summit of the granite Brandberg Massif, famous for prehistoric rock art like the 'White Lady'.",
    status: "published"
  },
  {
    id: "afr-h-5",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which catastrophic limnic eruption in Cameroon in August 1986 released roughly 100,000 tons of dissolved CO2, asphyxiating over 1,700 people?",
    options: ["Lake Monoun", "Lake Nyos", "Lake Kivu", "Lake Barombi Mbo"],
    correctIndex: 1,
    explanation: "Lake Nyos is a volcanic crater lake that experienced a sudden limnic overturning, releasing a dense cloud of CO2 that suffocated surrounding valleys.",
    status: "published"
  },
  {
    id: "afr-h-6",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the name of the desert wind—hot, dry, and dust-laden—that blows southwestward from the Sahara across West Africa between November and March?",
    options: ["Sirocco", "Harmattan", "Khamsin", "Ghibli"],
    correctIndex: 1,
    explanation: "The Harmattan is a dry northeasterly trade wind that lowers humidity, creates heavy dust hazes, and brings cool nights to West Africa.",
    status: "published"
  },
  {
    id: "afr-h-7",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the 2,060-square-kilometer desert territory along the Egypt-Sudan border that neither country claims, remaining one of Earth's few terra nullius areas?",
    options: ["Hala'ib Triangle", "Bir Tawil", "Wadi Halfa Salient", "Ilemi Triangle"],
    correctIndex: 1,
    explanation: "Because of differences between the 1899 political boundary and the 1902 administrative boundary, both nations claim Hala'ib and disclaim Bir Tawil.",
    status: "published"
  },
  {
    id: "afr-h-8",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which disputed 20,580-square-kilometer coastal territory on the Red Sea is claimed by both Egypt and Sudan, currently under de facto Egyptian administration?",
    options: ["Bir Tawil", "Hala'ib Triangle", "Aouzou Strip", "Caprivi Strip"],
    correctIndex: 1,
    explanation: "The Hala'ib Triangle is a fertile coastal area bordered by the 22nd parallel, claimed by Sudan under the 1902 administrative border.",
    status: "published"
  },
  {
    id: "afr-h-9",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which unique riverine junction on the Zambezi River connects Botswana and Zambia via a bridge and comes within meters of creating a four-country quadripoint?",
    options: ["Chobe Crossing", "Kazungula", "Katima Mulilo", "Victoria Falls Bridge"],
    correctIndex: 1,
    explanation: "At Kazungula, the borders of Botswana, Zambia, Namibia, and Zimbabwe converge around a short 150-meter boundary in the Zambezi River.",
    status: "published"
  },
  {
    id: "afr-h-10",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which disputed territory in East Africa of roughly 14,000 sq km is de facto controlled by Kenya and claimed by South Sudan near Lake Turkana?",
    options: ["Hala'ib Triangle", "Ilemi Triangle", "Badme", "Abyei"],
    correctIndex: 1,
    explanation: "The Ilemi Triangle arose from ambiguous colonial-era grazing treaties between British Kenya, Sudan, and Ethiopia.",
    status: "published"
  },
  {
    id: "afr-h-11",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the northernmost point of the African continental mainland, located in northern Tunisia near Bizerte?",
    options: ["Cape Blanc", "Ras ben Sakka", "Cape Bon", "Cape Angela"],
    correctIndex: 1,
    explanation: "Ras ben Sakka sits at latitude 37°21'N, just 950 meters northwest of Cape Angela.",
    status: "published"
  },
  {
    id: "afr-h-12",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the westernmost continental point of the African mainland, located on the Cap-Vert peninsula in Dakar, Senegal?",
    options: ["Cape Blanc", "Pointe des Almadies", "Cape Verde", "Cape Manuel"],
    correctIndex: 1,
    explanation: "Pointe des Almadies sits at longitude 17°31'W on the tip of the Cap-Vert peninsula in Senegal.",
    status: "published"
  },
  {
    id: "afr-h-13",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the easternmost continental point of the African mainland, located in the Puntland region of Somalia?",
    options: ["Cape Guardafui", "Ras Hafun", "Ras Caseyr", "Cape Delgado"],
    correctIndex: 1,
    explanation: "Ras Hafun is a low-lying tombolo peninsula at longitude 51°27'E, the eastern extreme of mainland Africa.",
    status: "published"
  },
  {
    id: "afr-h-14",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the world's smallest floral kingdom, situated entirely within southwestern South Africa, famous for Mediterranean fynbos shrubland?",
    options: ["Boreal Floral Kingdom", "Cape Floristic Region (Capensis)", "Neotropical Kingdom", "Paleotropical Kingdom"],
    correctIndex: 1,
    explanation: "The Cape Floristic Region holds over 9,000 vascular plant species (69% endemic) across a compact coastal strip.",
    status: "published"
  },
  {
    id: "afr-h-15",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which arid ecoregion in southwestern South Africa and southern Namibia is the only arid biodiversity hotspot in the world, with over 6,000 succulent plant species?",
    options: ["Nama Karoo", "Succulent Karoo", "Highveld", "Kalahari"],
    correctIndex: 1,
    explanation: "The Succulent Karoo boasts the richest succulent flora on Earth, characterized by reliable winter rainfall from the Atlantic.",
    status: "published"
  },
  {
    id: "afr-h-16",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which isolated volcanic plateau in south-central Algeria contains dramatic sandstone formations and prehistoric engravings at Assekrem, where Charles de Foucauld lived?",
    options: ["Ahaggar (Atakor volcanic field)", "Tassili n'Ajjer", "A\u00efr", "Tibesti"],
    correctIndex: 0,
    explanation: "The Atakor plateau contains dramatic volcanic lava plugs (phonolite needles) rising to nearly 3,000 meters in the Ahaggar.",
    status: "published"
  },
  {
    id: "afr-h-17",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which strip of land along the border between Chad and Libya was the subject of a territorial dispute and military conflict in the 1970s and 1980s?",
    options: ["Caprivi Strip", "Aouzou Strip", "Wadi Halfa Salient", "Agacher Strip"],
    correctIndex: 1,
    explanation: "The Aouzou Strip is a 100-kilometer-wide uranium-rich border zone awarded definitively to Chad by the International Court of Justice in 1994.",
    status: "published"
  },
  {
    id: "afr-h-18",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the name of the tectonic triple junction in northeastern Africa where the Arabian, Nubian, and Somali plates diverge?",
    options: ["Afar Triple Junction", "Gregory Rift", "Main Ethiopian Rift", "Malawi Rift"],
    correctIndex: 0,
    explanation: "The Afar Triple Junction is a geological center where the Red Sea Rift, Gulf of Aden Ridge, and East African Rift system intersect.",
    status: "published"
  },
  {
    id: "afr-h-19",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which western branch of the East African Rift system contains Lake Albert, Lake Edward, Lake Kivu, and Lake Tanganyika?",
    options: ["Gregory Rift (Eastern Rift)", "Albertine Rift (Western Rift)", "Malawi Rift", "Ethiopian Rift"],
    correctIndex: 1,
    explanation: "The Albertine Rift contains some of Africa's deepest rift lakes, flanked by the Ruwenzori and Mitumba mountain ranges.",
    status: "published"
  },
  {
    id: "afr-h-20",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the eastern branch of the East African Rift system called, running southward through Kenya and northern Tanzania?",
    options: ["Albertine Rift", "Gregory Rift", "Western Rift", "Luangwa Rift"],
    correctIndex: 1,
    explanation: "The Gregory Rift was named after Scottish geologist J.W. Gregory, who coined the term 'Great Rift Valley' in the late 19th century.",
    status: "published"
  },
  {
    id: "afr-h-21",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the highest mountain peak in the Ahaggar Mountains of southern Algeria?",
    options: ["Mount Tahat", "Emi Koussi", "Toubkal", "Bikku Bitti"],
    correctIndex: 0,
    explanation: "Mount Tahat rises to 2,908 meters as the highest summit in Algeria.",
    status: "published"
  },
  {
    id: "afr-h-22",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the highest mountain peak in Libya, located in the Dohone spur of the Tibesti range near the border with Chad?",
    options: ["Jebel Marra", "Bikku Bitti", "Mount Tahat", "Jebel Uweinat"],
    correctIndex: 1,
    explanation: "Bikku Bitti rises to 2,266 meters in the southern Libyan desert.",
    status: "published"
  },
  {
    id: "afr-h-23",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which mountain massif located at the tripoint of Egypt, Libya, and Sudan is famous for prehistoric rock art in Karkur Talh and Ain Dua?",
    options: ["Gilf Kebir", "Jebel Uweinat", "Tibesti", "Ennedi"],
    correctIndex: 1,
    explanation: "Jebel Uweinat is an inselberg oasis rising to 1,934 meters at the intersection of Egypt, Libya, and Sudan.",
    status: "published"
  },
  {
    id: "afr-h-24",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the sandstone plateau in southwestern Egypt famous for the 'Cave of Swimmers' made famous in the film The English Patient?",
    options: ["Qattara", "Gilf Kebir", "Farafra", "Siwa"],
    correctIndex: 1,
    explanation: "The Gilf Kebir plateau in the extreme southwest of Egypt contains Wadi Sura, home to the Neolithic Cave of Swimmers rock art.",
    status: "published"
  },
  {
    id: "afr-h-25",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the vast expanse of yellow-green silica glass scattered across the desert of southwestern Egypt, formed by a cosmic meteorite airburst 29 million years ago?",
    options: ["Moldavite field", "Libyan Desert Glass", "Tektite sea", "Darwin glass"],
    correctIndex: 1,
    explanation: "Libyan Desert Glass is nearly pure silica glass discovered in the Great Sand Sea, used in King Tutankhamun's pectoral scarab.",
    status: "published"
  },
  {
    id: "afr-h-26",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which high volcanic caldera in the Marrah Mountains of Darfur, western Sudan, features two scenic crater lakes and thermal springs?",
    options: ["Deriba Caldera", "Emi Koussi", "Mount Tahat", "Tarso Voon"],
    correctIndex: 0,
    explanation: "The Deriba Caldera formed roughly 3,500 years ago, reaching an elevation of 3,042 meters as the highest point in Sudan.",
    status: "published"
  },
  {
    id: "afr-h-27",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which large river of West Africa flows southward through Burkina Faso and Ghana before emptying into the Atlantic Ocean via Lake Volta?",
    options: ["Niger River", "Volta River", "Senegal River", "Como\u00e9 River"],
    correctIndex: 1,
    explanation: "The Volta River has three main headstream branches: the Black Volta, White Volta, and Red Volta.",
    status: "published"
  },
  {
    id: "afr-h-28",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which river in southern Africa rises in the Bié Plateau of Angola and flows eastward into the Zambezi above Victoria Falls?",
    options: ["Cuando (Kwando) River", "Kafue River", "Luangwa River", "Cunene River"],
    correctIndex: 0,
    explanation: "The Kwando River forms part of Angola's border with Zambia and passes through the Caprivi Strip before joining the Zambezi as the Chobe.",
    status: "published"
  },
  {
    id: "afr-h-29",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which major tributary of the Zambezi River flows entirely within Zambia through the Copperbelt and Kafue National Park?",
    options: ["Luangwa River", "Kafue River", "Chobe River", "Shire River"],
    correctIndex: 1,
    explanation: "The Kafue River flows 1,576 kilometers across Zambia, a key source of water, irrigation, and power at Kafue Gorge Dam.",
    status: "published"
  },
  {
    id: "afr-h-30",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which rift valley river drains Lake Malawi southward through southern Malawi and central Mozambique into the lower Zambezi?",
    options: ["Kafue River", "Shire River", "Ruvuma River", "Luangwa River"],
    correctIndex: 1,
    explanation: "The Shire River is Lake Malawi's only outlet, flowing 402 kilometers through the Liwonde National Park and Elephant Marsh.",
    status: "published"
  },
  {
    id: "afr-h-31",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which river forms most of the international border between Tanzania and Mozambique before emptying into the Indian Ocean?",
    options: ["Rufiji River", "Ruvuma (Rovuma) River", "Zambezi River", "Wami River"],
    correctIndex: 1,
    explanation: "The Ruvuma River flows roughly 800 kilometers, marking 650 kilometers of the border between Tanzania and Mozambique.",
    status: "published"
  },
  {
    id: "afr-h-32",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the largest river in Tanzania, draining roughly 20% of the country through the Selous Game Reserve (Nyerere National Park)?",
    options: ["Ruvuma River", "Rufiji River", "Pangani River", "Great Ruaha River"],
    correctIndex: 1,
    explanation: "The Rufiji River forms the largest mangrove delta in eastern Africa and hosts the Julius Nyerere Hydropower Station.",
    status: "published"
  },
  {
    id: "afr-h-33",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the high-elevation wetland plateau in northern Lesotho known as the source of both the Orange and Tugela rivers?",
    options: ["Mont-aux-Sources", "Sani Pass", "Thabana Ntlenyana", "Maloti Mountains"],
    correctIndex: 0,
    explanation: "Mont-aux-Sources (3,282 m) was named by French missionaries because multiple major river systems radiate from its summit bog.",
    status: "published"
  },
  {
    id: "afr-h-34",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which steep mountain pass at 2,876 meters elevation connects the Underberg region of KwaZulu-Natal in South Africa with Mokhotlong in Lesotho?",
    options: ["Sani Pass", "Swartberg Pass", "Naude's Nek", "Hely-Hutchinson Pass"],
    correctIndex: 0,
    explanation: "The Sani Pass is a notorious 4x4 gravel mountain pass featuring tight switchbacks climbing the Drakensberg escarpment.",
    status: "published"
  },
  {
    id: "afr-h-35",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which mountain massif in southeastern Gabon is famous for the Oklo natural nuclear fission reactors that operated spontaneously 1.7 billion years ago?",
    options: ["Chaillu Massif", "Franceville Basin (Oklo)", "Monts de Cristal", "Bateke Plateau"],
    correctIndex: 1,
    explanation: "In 1972, scientists discovered that sustained natural nuclear fission reactions occurred naturally in uranium deposits at Oklo 1.7 billion years ago.",
    status: "published"
  },
  {
    id: "afr-h-36",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the name of the sand dunes in the Namib Desert that emit deep booming or humming acoustic sounds when wind causes sand grains to slip?",
    options: ["Singing (roaring) dunes", "Yardangs", "Barchans", "Seifs"],
    correctIndex: 0,
    explanation: "Acoustic resonance produced by shear waves as dry, uniform sand grains avalanche down slip faces causes 'singing' sand dunes in the Namib.",
    status: "published"
  },
  {
    id: "afr-h-37",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which small Spanish sovereign island territory (Plaza de soberanía) lies just 50 meters off the Moroccan coast, connected by a sandy isthmus forming the world's shortest land border?",
    options: ["Alhucemas", "Pe\u00f1\u00f3n de V\u00e9lez de la Gomera", "Chafarinas Islands", "Perejil Island"],
    correctIndex: 1,
    explanation: "The land border between Spain and Morocco at Peñón de Vélez de la Gomera measures only 85 meters in length across a sandspit.",
    status: "published"
  },
  {
    id: "afr-h-38",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which island archipelago located 4 km off the Mediterranean coast of Morocco near the Algerian border is administered as a Spanish military territory?",
    options: ["Canary Islands", "Chafarinas Islands", "Alboran Island", "Columbretes Islands"],
    correctIndex: 1,
    explanation: "The Chafarinas Islands (Isla del Congreso, Isla Isabel II, and Isla del Rey) have been held by Spain since 1848.",
    status: "published"
  },
  {
    id: "afr-h-39",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the ancient trans-Saharan salt-mining center in the hyper-arid Taoudenni Basin of northern Mali, where salt slabs are cut and transported to Timbuktu by camel?",
    options: ["Taghaza", "Taoudenni", "Agadez", "Bilma"],
    correctIndex: 1,
    explanation: "Taoudenni is an isolated salt mine 664 km north of Timbuktu, where workers quarry mineral salt blocks from an ancient dried lake bed.",
    status: "published"
  },
  {
    id: "afr-h-40",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the name of the historic salt caravan network in Niger that travels between the Aïr Mountains and the Bilma oasis across the Ténéré desert?",
    options: ["Azalai", "Carane", "Moussem", "Hajj"],
    correctIndex: 0,
    explanation: "The Azalai is a biannual camel caravan route conducted by Tuareg and Toubou traders transporting rock salt across the Sahara.",
    status: "published"
  },
  {
    id: "afr-h-41",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which large island located in Lake Victoria is the second-largest inland island in Africa and belongs to Tanzania?",
    options: ["Ssese Islands", "Ukerewe Island", "Rusinga Island", "Idjwi Island"],
    correctIndex: 1,
    explanation: "Ukerewe Island covers 530 square kilometers in Lake Victoria, known for a high population of people with albinism.",
    status: "published"
  },
  {
    id: "afr-h-42",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the largest island in Lake Kivu, belonging to the Democratic Republic of the Congo and ranking as Africa's second-largest lake island?",
    options: ["Ukerewe Island", "Idjwi Island", "Likoma Island", "Chisi Island"],
    correctIndex: 1,
    explanation: "Idjwi Island covers 310 square kilometers in the middle of Lake Kivu, historically isolated from regional mainland conflicts.",
    status: "published"
  },
  {
    id: "afr-h-43",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which two inhabited islands in the northern waters of Lake Malawi are enclaves belonging to Malawi, despite being located entirely within Mozambique's territorial waters?",
    options: ["Ukerewe and Idjwi", "Likoma and Chizumulu", "Ssese and Bugala", "Buvuma and Lingira"],
    correctIndex: 1,
    explanation: "Likoma and Chizumulu islands were retained by British Nyasaland (Malawi) due to an Anglican missionary headquarters established in the 1880s.",
    status: "published"
  },
  {
    id: "afr-h-44",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which mountain massif in central Madagascar forms a prominent volcanic barrier, containing the summit Pic Boby in Andringitra National Park?",
    options: ["Tsaratanana", "Andringitra Massif", "Ankaratra", "Montagne d'Ambre"],
    correctIndex: 1,
    explanation: "The Andringitra Massif is celebrated for sheer granite cliffs, high-altitude biodiversity, and Pic Boby (2,658 m).",
    status: "published"
  },
  {
    id: "afr-h-45",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the largest protected area in Madagascar, encompassing 2,300 square kilometers of pristine lowland rainforest on the Masoala Peninsula?",
    options: ["Ranomafana", "Masoala National Park", "Isalo", "Andasibe-Mantadia"],
    correctIndex: 1,
    explanation: "Masoala National Park protects dense coastal rainforest dropping directly into Antongil Bay, home to red ruffed lemurs.",
    status: "published"
  },
  {
    id: "afr-h-46",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which national park in southern Madagascar is famous for dramatic Jurassic sandstone canyons, palm-lined oases, and ring-tailed lemurs?",
    options: ["Isalo National Park", "Masoala", "Amber Mountain", "Zombitse-Vohibasia"],
    correctIndex: 0,
    explanation: "Isalo National Park protects eroded sandstone canyons and plateaus sculpted by wind and water, known as Madagascar's Colorado.",
    status: "published"
  },
  {
    id: "afr-h-47",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the unique spiny forest ecosystem found only in southwestern Madagascar dominated by endemic octopus trees (Didiereaceae)?",
    options: ["Tsingy", "Spiny Thicket (Spiny Desert)", "Miombo woodland", "Mopane woodland"],
    correctIndex: 1,
    explanation: "The Madagascar spiny thicket is an extraordinary xeric ecoregion where over 95% of plant species are endemic.",
    status: "published"
  },
  {
    id: "afr-h-48",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which massive sand desert in southeastern Algeria and southwestern Libya is home to dunes rising over 250 meters, known as the 'Great Eastern Sand Sea'?",
    options: ["Grand Erg Occidental", "Grand Erg Oriental", "Erg Chebbi", "Erg Chigaga"],
    correctIndex: 1,
    explanation: "The Grand Erg Oriental covers roughly 120,000 square kilometers, characterized by linear dune corridors (ghourds).",
    status: "published"
  },
  {
    id: "afr-h-49",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the famous sandstone inselberg mountain in the Hombori Mountains of Mali that resembles a giant pointed rock hand?",
    options: ["Mount Hombori", "Hand of Fatima (Gami Tondo)", "Spitzkoppe", "Al-Naslaa"],
    correctIndex: 1,
    explanation: "The Hand of Fatima consists of five sheer granite and sandstone spires rising up to 600 meters above the Malian plain.",
    status: "published"
  },
  {
    id: "afr-h-50",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which mountain cliff escarpment in central Mali stretches over 150 km, celebrated as the ancestral home of the Dogon people and their cliffside villages?",
    options: ["Mandingo Plateau", "Bandiagara Escarpment (Cliff of Bandiagara)", "Hombori Cliff", "Tagant Plateau"],
    correctIndex: 1,
    explanation: "The Bandiagara Escarpment is a UNESCO World Heritage site featuring stone Dogon architecture integrated into sandstone cliffs.",
    status: "published"
  },
  {
    id: "afr-h-51",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the term for the large, seasonal inland delta of the Niger River in central Mali between Djenné and Timbuktu?",
    options: ["Okavango Delta", "Inner Niger Delta (Macina)", "Sudd", "Lafia Marsh"],
    correctIndex: 1,
    explanation: "The Inner Niger Delta forms a vast network of floodplains and lakes spanning up to 30,000 square kilometers during high water.",
    status: "published"
  },
  {
    id: "afr-h-52",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which isolated oceanic island in the Atlantic Ocean, administered as part of Saint Helena, is an essential breeding station for green sea turtles and host to a joint UK-US airfield?",
    options: ["Tristan da Cunha", "Ascension Island", "Gough Island", "Bouvet Island"],
    correctIndex: 1,
    explanation: "Ascension Island is a dormant volcanic island 1,300 km northwest of Saint Helena, hosting the Wideawake Airfield.",
    status: "published"
  },
  {
    id: "afr-h-53",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which uninhabited volcanic island in the South Atlantic, a dependency of Tristan da Cunha, is a UNESCO World Heritage site known as one of the least disrupted cool-temperate island ecosystems?",
    options: ["Ascension Island", "Gough Island", "Inaccessible Island", "Marion Island"],
    correctIndex: 1,
    explanation: "Gough Island hosts almost the entire world population of the Tristan albatross and Atlantic petrel.",
    status: "published"
  },
  {
    id: "afr-h-54",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which pair of sub-Antarctic islands in the southern Indian Ocean belongs to South Africa and hosts a meteorological research station?",
    options: ["Crozet Islands", "Prince Edward Islands (Marion Island and Prince Edward Island)", "Kerguelen Islands", "Heard and McDonald Islands"],
    correctIndex: 1,
    explanation: "The Prince Edward Islands sit roughly 1,770 km southeast of Port Elizabeth, declared a Special Nature Reserve in 1995.",
    status: "published"
  },
  {
    id: "afr-h-55",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the name of the narrow, deep maritime canyon off the coast of the DRC and Angola where the Congo River plunges over the continental shelf into the Atlantic abyss?",
    options: ["Agulhas Canyon", "Congo Canyon", "Walvis Ridge", "Cape Canyon"],
    correctIndex: 1,
    explanation: "The Congo Canyon is one of the largest submarine canyons in the world, extending 800 kilometers into the Atlantic basin up to 1,200 meters deep.",
    status: "published"
  },
  {
    id: "afr-h-56",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the prominent oceanic ridge in the South Atlantic Ocean extending southwest from the Namibian coast toward the Mid-Atlantic Ridge?",
    options: ["Mid-Atlantic Ridge", "Walvis Ridge", "Southwest Indian Ridge", "Mozambique Plateau"],
    correctIndex: 1,
    explanation: "The Walvis Ridge is a 3,000-kilometer hotspot track created by the Tristan da Cunha volcanic plume.",
    status: "published"
  },
  {
    id: "afr-h-57",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the name of the vast circular meteorite impact crater in the Free State of South Africa, recognized as the oldest and largest verified impact crater on Earth?",
    options: ["Tswaing Crater", "Vredefort Dome", "Roter Kamm", "Morokweng Crater"],
    correctIndex: 1,
    explanation: "The Vredefort Dome was formed roughly 2.02 billion years ago by an asteroid estimated at 10 to 15 kilometers in diameter.",
    status: "published"
  },
  {
    id: "afr-h-58",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the well-preserved 220,000-year-old meteorite crater located 40 km north of Pretoria in South Africa, containing a saline crater lake?",
    options: ["Vredefort Dome", "Tswaing Crater", "Roter Kamm", "Bosumtwi Crater"],
    correctIndex: 1,
    explanation: "Tswaing ('Place of Salt' in Setswana) is an exceptionally well-preserved impact crater 1.13 kilometers in diameter.",
    status: "published"
  },
  {
    id: "afr-h-59",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the name of the hyper-saline soda lake in northern Kenya, famous for having over a million lesser flamingos feeding on cyanobacteria?",
    options: ["Lake Baringo", "Lake Bogoria", "Lake Naivasha", "Lake Elementaita"],
    correctIndex: 1,
    explanation: "Lake Bogoria is a meromictic Ramsar wetland featuring geysers and hot springs along its volcanic shoreline.",
    status: "published"
  },
  {
    id: "afr-h-60",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the highest freshwater lake in the Kenyan Rift Valley, sitting at an elevation of 1,884 meters near Mount Longonot?",
    options: ["Lake Nakuru", "Lake Naivasha", "Lake Magadi", "Lake Bogoria"],
    correctIndex: 1,
    explanation: "Lake Naivasha has no surface outlet yet remains surprisingly fresh due to substantial underground seepage through volcanic aquifers.",
    status: "published"
  },
  {
    id: "afr-h-61",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the southern Kenyan Rift Valley soda lake that is nearly completely covered by thick crusts of trona (sodium sesquicarbonate) mined commercially?",
    options: ["Lake Naivasha", "Lake Magadi", "Lake Baringo", "Lake Turkana"],
    correctIndex: 1,
    explanation: "Lake Magadi lies in a volcanic basin where hot alkaline springs replenish vast beds of crystalline trona and soda ash.",
    status: "published"
  },
  {
    id: "afr-h-62",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the name of the volcanic crater lake in northern Tanzania celebrated as the site where ancient hominid footprint tracks were discovered in volcanic ash?",
    options: ["Ngorongoro", "Empakaai Crater", "Olmoti Crater", "Lake Natron"],
    correctIndex: 1,
    explanation: "Empakaai Crater is an intact 300-meter-deep volcanic caldera holding a deep alkaline emerald lake surrounded by pristine montane forest.",
    status: "published"
  },
  {
    id: "afr-h-63",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which lake located on the border between Uganda and the Democratic Republic of the Congo drains into the Semliki River toward Lake Albert?",
    options: ["Lake Kivu", "Lake Edward", "Lake Kyoga", "Lake George"],
    correctIndex: 1,
    explanation: "Lake Edward is connected to smaller Lake George by the natural Kazinga Channel in Queen Elizabeth National Park.",
    status: "published"
  },
  {
    id: "afr-h-64",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which large shallow lake in central Uganda is surrounded by extensive papyrus swamps and fed by the Victoria Nile?",
    options: ["Lake Albert", "Lake Kyoga", "Lake George", "Lake Bisina"],
    correctIndex: 1,
    explanation: "Lake Kyoga lies at 1,033 meters elevation, averaging only 3 to 5 meters in depth.",
    status: "published"
  },
  {
    id: "afr-h-65",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the dramatic waterfall on the Victoria Nile in Uganda where the entire river forces itself through a 7-meter gap in the rocks before plunging 43 meters?",
    options: ["Victoria Falls", "Murchison Falls (Kabalega Falls)", "Owen Falls", "Bujagali Falls"],
    correctIndex: 1,
    explanation: "At Murchison Falls, the Nile channels through a narrow rock crevice with immense hydraulic pressure before emptying into Lake Albert.",
    status: "published"
  },
  {
    id: "afr-h-66",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the ancient granitic inselberg mountain in Nampula Province, Mozambique, home to an isolated high-altitude rainforest discovered on Google Earth in 2005?",
    options: ["Mount Gorongosa", "Mount Mabu", "Mount Namuli", "Mount Binga"],
    correctIndex: 1,
    explanation: "Mount Mabu harbors the largest continuous medium-altitude rainforest in southern Africa, discovered by botanist Julian Bayliss via satellite imagery.",
    status: "published"
  },
  {
    id: "afr-h-67",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the highest mountain peak in Mozambique, located on the border with Zimbabwe at 2,436 meters?",
    options: ["Mount Mabu", "Mount Binga", "Mount Namuli", "Mount Gorongosa"],
    correctIndex: 1,
    explanation: "Mount Binga sits in Chimanimani National Park along the rugged frontier between Mozambique and Zimbabwe.",
    status: "published"
  },
  {
    id: "afr-h-68",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the highest mountain peak in Zimbabwe, located in Nyanga National Park at 2,592 meters?",
    options: ["Mount Binga", "Mount Nyangani", "Chilojo Cliffs", "Hunyani Range"],
    correctIndex: 1,
    explanation: "Mount Nyangani is the apex of Zimbabwe's Eastern Highlands, characterized by high rainfall and montane grasslands.",
    status: "published"
  },
  {
    id: "afr-h-69",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the highest mountain peak in the Republic of Malawi, located in the Mulanje Massif at 3,002 meters?",
    options: ["Zomba Plateau", "Sapitwa Peak (Mount Mulanje)", "Dedza Mountain", "Viphya Plateau"],
    correctIndex: 1,
    explanation: "Sapitwa Peak ('Don't Go There' in Chichewa) crowns the granite Mulanje Massif, home to the endemic Mulanje cypress.",
    status: "published"
  },
  {
    id: "afr-h-70",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which highland forest massif in western Burundi forms the southernmost divide between the Congo and Nile river basins?",
    options: ["Kibira National Park", "Mitumba Mountains", "Marungu Massif", "Itombwe Mountains"],
    correctIndex: 0,
    explanation: "Kibira National Park covers the crest of the Congo-Nile Divide in Burundi, continuous with Rwanda's Nyungwe Forest.",
    status: "published"
  },
  {
    id: "afr-h-71",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which vast mountain rainforest in southwestern Rwanda is Africa's largest protected mid-altitude mountain rainforest, home to 13 primate species?",
    options: ["Gishwati Forest", "Nyungwe Forest National Park", "Volcanoes National Park", "Akagera National Park"],
    correctIndex: 1,
    explanation: "Nyungwe Forest feeds both the Congo Basin to the west and the Nile Basin to the east, rich in Albertine Rift endemic species.",
    status: "published"
  },
  {
    id: "afr-h-72",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the name of the river in Rwanda that joins the Ruvubu to form the Kagera River, considered by many to be the most distant headstream of the Nile?",
    options: ["Nyabarongo River", "Akanyaru River", "Sebeya River", "Ruzizi River"],
    correctIndex: 0,
    explanation: "The Nyabarongo flows through Rwanda before becoming the Kagera, which discharges into Lake Victoria.",
    status: "published"
  },
  {
    id: "afr-h-73",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which river flows out of Lake Kivu into Lake Tanganyika, forming the international boundary between the DRC and Rwanda/Burundi?",
    options: ["Semliki River", "Ruzizi River", "Lualaba River", "Lukuga River"],
    correctIndex: 1,
    explanation: "The Ruzizi River drops 670 meters over its 117-kilometer course from Lake Kivu to Lake Tanganyika.",
    status: "published"
  },
  {
    id: "afr-h-74",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the only river outlet flowing out of Lake Tanganyika, carrying its waters westward into the Lualaba (Congo River)?",
    options: ["Ruzizi River", "Lukuga River", "Malagarasi River", "Kalambo River"],
    correctIndex: 1,
    explanation: "The Lukuga River cuts through the Mitumba Mountains, forming Lake Tanganyika's sole surface drainage outlet into the Congo Basin.",
    status: "published"
  },
  {
    id: "afr-h-75",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the spectacular 221-meter single-drop uninterrupted waterfall located on the border between Zambia and Tanzania at the southeastern tip of Lake Tanganyika?",
    options: ["Victoria Falls", "Kalambo Falls", "Kundalila Falls", "Lumangwe Falls"],
    correctIndex: 1,
    explanation: "Kalambo Falls is the second-highest uninterrupted waterfall in Africa, noted for Stone Age archaeological wooden tools.",
    status: "published"
  },
  {
    id: "afr-h-76",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the largest waterfall by width in Angola, cascading over horseshoe-shaped rock cliffs 105 meters high on the Lucala River?",
    options: ["Ruacana Falls", "Kalandula Falls", "Epupa Falls", "Tugela Falls"],
    correctIndex: 1,
    explanation: "Kalandula Falls (formerly Duque de Bragança Falls) in Malanje Province is one of the largest waterfalls in Africa by water volume.",
    status: "published"
  },
  {
    id: "afr-h-77",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the vast central highland plateau of Angola that acts as the primary hydrological watershed for the Cuanza, Cunene, and Okavango rivers?",
    options: ["Hu\u00edla Plateau", "Bi\u00e9 Plateau (Central Highlands of Angola)", "Lunda Plateau", "Malange Plateau"],
    correctIndex: 1,
    explanation: "The Bié Plateau rises to elevations between 1,500 and 2,600 meters, feeding rivers that radiate toward the Atlantic, Congo, and Zambezi basins.",
    status: "published"
  },
  {
    id: "afr-h-78",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the highest mountain peak in Angola, located in Huambo Province on the Bié Plateau at 2,610 meters?",
    options: ["Morro do Moco", "Serra da Chela", "Lupire", "Pico do Fogo"],
    correctIndex: 0,
    explanation: "Morro do Moco is Angola's highest peak, harboring relict patches of endangered Afromontane cloud forest.",
    status: "published"
  },
  {
    id: "afr-h-79",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the prominent mountain range and escarpment in southwestern Angola separating the coastal desert from the Huíla plateau, famous for the Leba Pass?",
    options: ["Morro do Moco", "Serra da Chela", "Bie Mountains", "Otavi Mountains"],
    correctIndex: 1,
    explanation: "The Serra da Chela drops over 1,000 meters toward the Namib coastal desert, crossed by the famous Serra da Leba hairpin road.",
    status: "published"
  },
  {
    id: "afr-h-80",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which large endorheic drainage basin in northern Botswana is formed by the terminus of the seasonal Nata River within the Makgadikgadi network?",
    options: ["Etosha Pan", "Sua Pan (Sowa Pan)", "Ntwetwe Pan", "Lake Ngami"],
    correctIndex: 1,
    explanation: "Sua Pan is the eastern component of the Makgadikgadi Pans, harvested commercially for soda ash and common salt.",
    status: "published"
  },
  {
    id: "afr-h-81",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the largest river flowing entirely within Ghana, formed by the confluence of the Black and White Volta before the damming of Lake Volta?",
    options: ["Pra River", "Volta River", "Ankobra River", "Tano River"],
    correctIndex: 1,
    explanation: "The Volta River basin covers roughly 400,000 square kilometers across six West African countries.",
    status: "published"
  },
  {
    id: "afr-h-82",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which river forms the international boundary between Liberia and Sierra Leone?",
    options: ["Saint Paul River", "Mano River", "Lofa River", "Cavalla River"],
    correctIndex: 1,
    explanation: "The Mano River originates in the Guinea Highlands and forms the border between Liberia and Sierra Leone, lending its name to the Mano River Union.",
    status: "published"
  },
  {
    id: "afr-h-83",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which river forms the international boundary between Liberia and Côte d'Ivoire?",
    options: ["Sassandra River", "Cavalla River", "Bandama River", "Cestos River"],
    correctIndex: 1,
    explanation: "The Cavalla River flows 515 kilometers into the Gulf of Guinea, defining over half of the Liberia–Côte d'Ivoire frontier.",
    status: "published"
  },
  {
    id: "afr-h-84",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the longest river flowing entirely within Côte d'Ivoire, draining into the Gulf of Guinea near Grand-Lahou?",
    options: ["Como\u00e9 River", "Bandama River", "Sassandra River", "Cavalla River"],
    correctIndex: 1,
    explanation: "The Bandama River flows 1,050 kilometers south through Côte d'Ivoire, dammed at Lake Kossou for hydroelectric power.",
    status: "published"
  },
  {
    id: "afr-h-85",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the highest mountain peak in West Africa outside Cameroon, located in the Loma Mountains of Sierra Leone at 1,945 meters?",
    options: ["Mount Nimba", "Bintumani (Loma Mansa)", "Pic de Fon", "Mount Richard-Molard"],
    correctIndex: 1,
    explanation: "Bintumani rises to 1,945 meters in the Loma Mountains of northeastern Sierra Leone.",
    status: "published"
  },
  {
    id: "afr-h-86",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which active stratovolcano on the island of Fogo in Cape Verde reaches 2,829 meters as the highest peak in the archipelago?",
    options: ["Pico da Cruz", "Pico do Fogo", "Monte Verde", "Topona"],
    correctIndex: 1,
    explanation: "Pico do Fogo is an active volcanic cone rising inside the Cha das Caldeiras caldera, last erupting between 2014 and 2015.",
    status: "published"
  },
  {
    id: "afr-h-87",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the highest mountain peak on the island of São Tomé, rising to 2,024 meters in dense tropical cloud forest?",
    options: ["Pico de Sao Tome", "Pico Cao Grande", "Pico de Principe", "Pico Maria Fernandes"],
    correctIndex: 0,
    explanation: "Pico de São Tomé is an extinct shield volcano clad in montane primary rainforest in Obo National Park.",
    status: "published"
  },
  {
    id: "afr-h-88",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the dramatic 370-meter needle-shaped phonolite volcanic neck rising steeply out of the jungle in southern São Tomé?",
    options: ["Pico de Sao Tome", "Pico C\u00e3o Grande", "Morro do Moco", "Brandberg"],
    correctIndex: 1,
    explanation: "Pico Cão Grande ('Great Dog Peak') is a vertical volcanic plug rising 663 meters above sea level in Obo National Park.",
    status: "published"
  },
  {
    id: "afr-h-89",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which active volcano on Grande Comore is one of the most active in the Indian Ocean, containing a large caldera at 2,361 meters?",
    options: ["Piton de la Fournaise", "Mount Karthala", "Mount Ntringui", "La Grille"],
    correctIndex: 1,
    explanation: "Mount Karthala is a massive basaltic shield volcano that erupted over 20 times during the 19th and 20th centuries.",
    status: "published"
  },
  {
    id: "afr-h-90",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which island department of France located in the northern Mozambique Channel forms part of the Comoro archipelago geographically?",
    options: ["Reunion", "Mayotte", "Moheli", "Anjouan"],
    correctIndex: 1,
    explanation: "Mayotte voted to remain part of France in 1974 when the other three Comoros islands declared independence.",
    status: "published"
  },
  {
    id: "afr-h-91",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the group of five uninhabited French coral atolls and islands scattered around Madagascar administered as part of the French Southern and Antarctic Lands?",
    options: ["Crozet Islands", "\u00celes \u00c9parses (Scattered Islands in the Indian Ocean)", "Kerguelen", "Mascarene Islands"],
    correctIndex: 1,
    explanation: "The Îles Éparses include Bassas da India, Europa Island, Glorioso Islands, Juan de Nova, and Tromelin.",
    status: "published"
  },
  {
    id: "afr-h-92",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which small, circular uninhabited atoll in the Mozambique Channel is an entirely submerged circular coral reef at high tide, surrounding a shallow lagoon?",
    options: ["Europa Island", "Bassas da India", "Juan de Nova", "Tromelin Island"],
    correctIndex: 1,
    explanation: "Bassas da India is a jagged volcanic atoll where the reef rim emerges only during low tide, a notorious historical shipwreck hazard.",
    status: "published"
  },
  {
    id: "afr-h-93",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the ancient trans-Saharan trading town in the Adrar region of central Mauritania famous for stone libraries housing medieval Quranic and scientific manuscripts?",
    options: ["Oualata", "Chinguetti", "Ouadane", "Tichitt"],
    correctIndex: 1,
    explanation: "Chinguetti was a medieval trading and religious hub for pilgrims traveling to Mecca, recognized as a UNESCO World Heritage site.",
    status: "published"
  },
  {
    id: "afr-h-94",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the 700-kilometer heavy freight railway in Mauritania famous for running the longest and heaviest regular trains in the world carrying iron ore?",
    options: ["Tazara Railway", "Mauritania Railway (Train du D\u00e9sert)", "Benguela Railway", "Dakar-Niger Railway"],
    correctIndex: 1,
    explanation: "The Mauritania Railway runs trains up to 3 kilometers in length from the iron mines of Zouérat across the Sahara to the port of Nouadhibou.",
    status: "published"
  },
  {
    id: "afr-h-95",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the highest mountain peak in Mauritania, a massive hematite iron ore inselberg near Zouérat rising to 915 meters?",
    options: ["Guelb er Richat", "Kediet ej Jill", "Adrar Plateau", "Tagant"],
    correctIndex: 1,
    explanation: "Kediet ej Jill is a blue-grey magnetite and hematite mountain so magnetic that it disrupts navigational compasses.",
    status: "published"
  },
  {
    id: "afr-h-96",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the name of the narrow peninsula in the Atlantic Ocean shared between Western Sahara and Mauritania, home to Nouadhibou and La Güera?",
    options: ["Cap-Vert", "Ras Nouadhibou (Cabo Blanco)", "Cape Bojador", "Cape Juby"],
    correctIndex: 1,
    explanation: "Ras Nouadhibou (Cabo Blanco) is a 60-kilometer peninsula divided down the middle between Mauritanian and Sahrawi territory.",
    status: "published"
  },
  {
    id: "afr-h-97",
    continent: "Africa",
    difficulty: "Hard",
    question: "Which headland on the northern coast of Western Sahara was historically feared by 15th-century Portuguese navigators as the 'point of no return'?",
    options: ["Cape Blanc", "Cape Bojador", "Cape Juby", "Cape Verde"],
    correctIndex: 1,
    explanation: "Gil Eanes successfully rounded Cape Bojador in 1434, dispelling medieval myths of boiling tropical waters and sea monsters.",
    status: "published"
  },
  {
    id: "afr-h-98",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the de facto 2,700-kilometer sand and stone berm constructed by Morocco across Western Sahara to separate Moroccan-controlled territory from the Sahrawi Republic?",
    options: ["Green Line", "Moroccan Western Sahara Wall (The Berm)", "Bar Lev Line", "Peace Line"],
    correctIndex: 1,
    explanation: "The Berm is a fortified barrier protected by bunkers, radar, and one of the largest continuous minefields in the world.",
    status: "published"
  },
  {
    id: "afr-h-99",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the ancient Phoenician and Roman city in Libya that was the birthplace of Roman Emperor Septimius Severus, exceptionally preserved under sand dunes until excavated?",
    options: ["Sabratha", "Leptis Magna", "Cyrene", "Ptolemais"],
    correctIndex: 1,
    explanation: "Leptis Magna was one of the wealthiest cities of Roman Tripolitania, famous for its Severan Arch, forum, and seaside amphitheater.",
    status: "published"
  },
  {
    id: "afr-h-100",
    continent: "Africa",
    difficulty: "Hard",
    question: "What is the vast limestone karst cave system in the Cederberg mountains of the Western Cape in South Africa famous for prehistoric San rock paintings?",
    options: ["Sterkfontein Caves", "Stadsaal Caves", "Cango Caves", "Wonderwerk Cave"],
    correctIndex: 2,
    explanation: "The Cango Caves are a series of underground limestone chambers and dripstone drip formations in the Swartberg mountains near Oudtshoorn.",
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
    id: "eur-e-3",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of France?",
    options: ["Lyon", "Marseille", "Paris", "Nice"],
    correctIndex: 2,
    explanation: "Paris is the capital and largest city of France, situated on the Seine River.",
    status: "published"
  },
  {
    id: "eur-e-4",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Germany?",
    options: ["Munich", "Frankfurt", "Berlin", "Hamburg"],
    correctIndex: 2,
    explanation: "Berlin is the capital and largest city of Germany, reunited in 1990.",
    status: "published"
  },
  {
    id: "eur-e-5",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Italy?",
    options: ["Milan", "Rome", "Florence", "Naples"],
    correctIndex: 1,
    explanation: "Rome is the capital of Italy, renowned as the historic heart of the Roman Empire.",
    status: "published"
  },
  {
    id: "eur-e-6",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of the United Kingdom?",
    options: ["Edinburgh", "Manchester", "London", "Birmingham"],
    correctIndex: 2,
    explanation: "London is the capital of England and the United Kingdom, standing on the River Thames.",
    status: "published"
  },
  {
    id: "eur-e-7",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Spain?",
    options: ["Barcelona", "Seville", "Madrid", "Valencia"],
    correctIndex: 2,
    explanation: "Madrid is the capital and largest municipality of Spain, located on the Manzanares River.",
    status: "published"
  },
  {
    id: "eur-e-8",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Portugal?",
    options: ["Porto", "Lisbon", "Coimbra", "Braga"],
    correctIndex: 1,
    explanation: "Lisbon is the coastal capital of Portugal, situated at the mouth of the Tagus River.",
    status: "published"
  },
  {
    id: "eur-e-9",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of the Netherlands?",
    options: ["Rotterdam", "The Hague", "Amsterdam", "Utrecht"],
    correctIndex: 2,
    explanation: "Amsterdam is the constitutional capital of the Netherlands, famous for its canal network.",
    status: "published"
  },
  {
    id: "eur-e-10",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Belgium?",
    options: ["Antwerp", "Ghent", "Brussels", "Bruges"],
    correctIndex: 2,
    explanation: "Brussels is the capital of Belgium and the de facto headquarters of the European Union.",
    status: "published"
  },
  {
    id: "eur-e-11",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Austria?",
    options: ["Salzburg", "Innsbruck", "Vienna", "Graz"],
    correctIndex: 2,
    explanation: "Vienna is the capital of Austria, located in the eastern part of the country along the Danube.",
    status: "published"
  },
  {
    id: "eur-e-12",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the de facto capital city of Switzerland?",
    options: ["Zurich", "Geneva", "Bern", "Basel"],
    correctIndex: 2,
    explanation: "Bern serves as the federal city and seat of the Swiss government.",
    status: "published"
  },
  {
    id: "eur-e-13",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Sweden?",
    options: ["Gothenburg", "Malmo", "Stockholm", "Uppsala"],
    correctIndex: 2,
    explanation: "Stockholm is the capital of Sweden, spread across fourteen islands where Lake Mälaren meets the Baltic Sea.",
    status: "published"
  },
  {
    id: "eur-e-14",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Norway?",
    options: ["Bergen", "Trondheim", "Oslo", "Stavanger"],
    correctIndex: 2,
    explanation: "Oslo is the capital of Norway, situated at the head of the Oslofjord.",
    status: "published"
  },
  {
    id: "eur-e-15",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Denmark?",
    options: ["Aarhus", "Odense", "Copenhagen", "Aalborg"],
    correctIndex: 2,
    explanation: "Copenhagen is the capital of Denmark, situated on the eastern coast of the island of Zealand.",
    status: "published"
  },
  {
    id: "eur-e-16",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Finland?",
    options: ["Tampere", "Turku", "Helsinki", "Oulu"],
    correctIndex: 2,
    explanation: "Helsinki is the southern coastal capital of Finland, located on the Gulf of Finland.",
    status: "published"
  },
  {
    id: "eur-e-17",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Poland?",
    options: ["Krakow", "Wroclaw", "Warsaw", "Gdansk"],
    correctIndex: 2,
    explanation: "Warsaw is the capital and largest city of Poland, standing along the Vistula River.",
    status: "published"
  },
  {
    id: "eur-e-18",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of the Czech Republic (Czechia)?",
    options: ["Brno", "Ostrava", "Prague", "Plzen"],
    correctIndex: 2,
    explanation: "Prague is the historic capital of Bohemia and the Czech Republic, situated on the Vltava River.",
    status: "published"
  },
  {
    id: "eur-e-19",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Hungary?",
    options: ["Debrecen", "Szeged", "Budapest", "Pecs"],
    correctIndex: 2,
    explanation: "Budapest is the capital of Hungary, bisected by the Danube River into Buda and Pest.",
    status: "published"
  },
  {
    id: "eur-e-20",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Greece?",
    options: ["Thessaloniki", "Patras", "Athens", "Heraklion"],
    correctIndex: 2,
    explanation: "Athens is the historic capital of Greece, renowned as the cradle of Western democracy.",
    status: "published"
  },
  {
    id: "eur-e-21",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Ireland?",
    options: ["Cork", "Galway", "Dublin", "Limerick"],
    correctIndex: 2,
    explanation: "Dublin is the capital and most populous city of the Republic of Ireland, located on Dublin Bay.",
    status: "published"
  },
  {
    id: "eur-e-22",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Romania?",
    options: ["Cluj-Napoca", "Timisoara", "Bucharest", "Iasi"],
    correctIndex: 2,
    explanation: "Bucharest is the capital and largest city of Romania.",
    status: "published"
  },
  {
    id: "eur-e-23",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Bulgaria?",
    options: ["Plovdiv", "Varna", "Sofia", "Burgas"],
    correctIndex: 2,
    explanation: "Sofia is the capital of Bulgaria, situated at the foot of Vitosha Mountain.",
    status: "published"
  },
  {
    id: "eur-e-24",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Ukraine?",
    options: ["Lviv", "Odesa", "Kyiv", "Kharkiv"],
    correctIndex: 2,
    explanation: "Kyiv is the capital and most populous city of Ukraine, located along the Dnieper River.",
    status: "published"
  },
  {
    id: "eur-e-25",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Croatia?",
    options: ["Split", "Dubrovnik", "Zagreb", "Rijeka"],
    correctIndex: 2,
    explanation: "Zagreb is the capital of Croatia, located along the Sava River.",
    status: "published"
  },
  {
    id: "eur-e-26",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Serbia?",
    options: ["Novi Sad", "Nis", "Belgrade", "Kragujevac"],
    correctIndex: 2,
    explanation: "Belgrade sits at the confluence of the Sava and Danube rivers in Serbia.",
    status: "published"
  },
  {
    id: "eur-e-27",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Slovakia?",
    options: ["Kosice", "Bratislava", "Presov", "Zilina"],
    correctIndex: 1,
    explanation: "Bratislava borders both Austria and Hungary, making it the only national capital bordering two sovereign states.",
    status: "published"
  },
  {
    id: "eur-e-28",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Slovenia?",
    options: ["Maribor", "Kranj", "Ljubljana", "Celje"],
    correctIndex: 2,
    explanation: "Ljubljana is the capital and largest city of Slovenia.",
    status: "published"
  },
  {
    id: "eur-e-29",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Iceland?",
    options: ["Akureyri", "Keflavik", "Reykjavik", "Hafnarfjordur"],
    correctIndex: 2,
    explanation: "Reykjavik is the world's northernmost sovereign national capital.",
    status: "published"
  },
  {
    id: "eur-e-30",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Albania?",
    options: ["Durres", "Vlore", "Tirana", "Shkoder"],
    correctIndex: 2,
    explanation: "Tirana is the capital and cultural center of Albania.",
    status: "published"
  },
  {
    id: "eur-e-31",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Lithuania?",
    options: ["Kaunas", "Klaipeda", "Vilnius", "Siauliai"],
    correctIndex: 2,
    explanation: "Vilnius is the capital of Lithuania, celebrated for its Baroque Old Town.",
    status: "published"
  },
  {
    id: "eur-e-32",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Latvia?",
    options: ["Daugavpils", "Liepaja", "Riga", "Jelgava"],
    correctIndex: 2,
    explanation: "Riga is the capital of Latvia, located on the Gulf of Riga at the mouth of the Daugava River.",
    status: "published"
  },
  {
    id: "eur-e-33",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Estonia?",
    options: ["Tartu", "Narva", "Tallinn", "Parnu"],
    correctIndex: 2,
    explanation: "Tallinn is the capital of Estonia on the southern coast of the Gulf of Finland.",
    status: "published"
  },
  {
    id: "eur-e-34",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Cyprus?",
    options: ["Limassol", "Larnaca", "Nicosia", "Paphos"],
    correctIndex: 2,
    explanation: "Nicosia is the divided capital of Cyprus.",
    status: "published"
  },
  {
    id: "eur-e-35",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Malta?",
    options: ["Sliema", "Mdina", "Valletta", "Birkirkara"],
    correctIndex: 2,
    explanation: "Valletta is the fortified historic capital of the island nation of Malta.",
    status: "published"
  },
  {
    id: "eur-e-36",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Luxembourg?",
    options: ["Esch-sur-Alzette", "Differdange", "Luxembourg City", "Dudelange"],
    correctIndex: 2,
    explanation: "Luxembourg City is one of the co-capitals of the European Union.",
    status: "published"
  },
  {
    id: "eur-e-37",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of North Macedonia?",
    options: ["Bitola", "Ohrid", "Skopje", "Kumanovo"],
    correctIndex: 2,
    explanation: "Skopje is the capital of North Macedonia, situated on the Vardar River.",
    status: "published"
  },
  {
    id: "eur-e-38",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Bosnia and Herzegovina?",
    options: ["Mostar", "Banja Luka", "Sarajevo", "Tuzla"],
    correctIndex: 2,
    explanation: "Sarajevo is the capital of Bosnia and Herzegovina, nestled in the Dinaric Alps.",
    status: "published"
  },
  {
    id: "eur-e-39",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the capital city of Montenegro?",
    options: ["Kotor", "Budva", "Podgorica", "Niksic"],
    correctIndex: 2,
    explanation: "Podgorica is the administrative capital of Montenegro.",
    status: "published"
  },
  {
    id: "eur-e-40",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the primary river flowing through London?",
    options: ["River Severn", "River Thames", "River Mersey", "River Trent"],
    correctIndex: 1,
    explanation: "The River Thames flows 346 kilometers through southern England into the North Sea.",
    status: "published"
  },
  {
    id: "eur-e-41",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the primary river flowing through Paris?",
    options: ["Loire River", "Rhone River", "Seine River", "Garonne River"],
    correctIndex: 2,
    explanation: "The Seine flows 777 kilometers across northern France into the English Channel at Le Havre.",
    status: "published"
  },
  {
    id: "eur-e-42",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the primary river flowing through Rome?",
    options: ["Po River", "Arno River", "Tiber River", "Adige River"],
    correctIndex: 2,
    explanation: "The Tiber (Tevere) is the third-longest river in Italy, historic waterway of Rome.",
    status: "published"
  },
  {
    id: "eur-e-43",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the highest mountain peak in the Alps and Western Europe?",
    options: ["Matterhorn", "Mont Blanc", "Jungfrau", "Monte Rosa"],
    correctIndex: 1,
    explanation: "Mont Blanc rises to 4,808 meters on the border between France and Italy.",
    status: "published"
  },
  {
    id: "eur-e-44",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which mountain range forms a natural barrier separating the Iberian Peninsula (Spain/Portugal) from France?",
    options: ["The Alps", "The Pyrenees", "The Apennines", "The Carpathians"],
    correctIndex: 1,
    explanation: "The Pyrenees stretch 430 kilometers from the Atlantic Ocean to the Mediterranean Sea.",
    status: "published"
  },
  {
    id: "eur-e-45",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the longest river in the European Union, flowing through or bordering 10 countries to the Black Sea?",
    options: ["Rhine River", "Danube River", "Elbe River", "Vistula River"],
    correctIndex: 1,
    explanation: "The Danube flows 2,850 kilometers from Germany's Black Forest to the Danube Delta in Romania/Ukraine.",
    status: "published"
  },
  {
    id: "eur-e-46",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which major river originates in the Swiss Alps and flows through Germany and the Netherlands into the North Sea?",
    options: ["Danube", "Rhine River", "Rhone", "Elbe"],
    correctIndex: 1,
    explanation: "The Rhine is one of Europe's most vital commercial shipping corridors.",
    status: "published"
  },
  {
    id: "eur-e-47",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which body of water separates southern England from northern France?",
    options: ["North Sea", "Irish Sea", "English Channel (La Manche)", "Bay of Biscay"],
    correctIndex: 2,
    explanation: "The English Channel links the North Sea to the Atlantic Ocean, traversed beneath by the Channel Tunnel.",
    status: "published"
  },
  {
    id: "eur-e-48",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which sea lies between Italy and the Balkan Peninsula?",
    options: ["Tyrrhenian Sea", "Adriatic Sea", "Ionian Sea", "Aegean Sea"],
    correctIndex: 1,
    explanation: "The Adriatic Sea is an arm of the Mediterranean Sea bordered by Italy, Slovenia, Croatia, Bosnia, Montenegro, and Albania.",
    status: "published"
  },
  {
    id: "eur-e-49",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which sea is bordered by Sweden, Finland, Poland, the Baltic States, and Russia?",
    options: ["North Sea", "Baltic Sea", "Black Sea", "Norwegian Sea"],
    correctIndex: 1,
    explanation: "The Baltic Sea is a brackish mediterranean inland sea connected to the North Sea via Danish straits.",
    status: "published"
  },
  {
    id: "eur-e-50",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which sea is bordered by Great Britain, Norway, Denmark, Germany, the Netherlands, and Belgium?",
    options: ["Baltic Sea", "North Sea", "Irish Sea", "Celtic Sea"],
    correctIndex: 1,
    explanation: "The North Sea is a marginal sea of the Atlantic Ocean rich in oil, gas, and fisheries.",
    status: "published"
  },
  {
    id: "eur-e-51",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the largest island in the Mediterranean Sea?",
    options: ["Sardinia", "Cyprus", "Sicily", "Corsica"],
    correctIndex: 2,
    explanation: "Sicily covers 25,711 square kilometers, an autonomous region of Italy dominated by Mount Etna.",
    status: "published"
  },
  {
    id: "eur-e-52",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the second-largest island in the Mediterranean Sea, belonging to Italy?",
    options: ["Sicily", "Sardinia", "Corsica", "Crete"],
    correctIndex: 1,
    explanation: "Sardinia lies south of the French island of Corsica in the western Mediterranean.",
    status: "published"
  },
  {
    id: "eur-e-53",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which Mediterranean island is an administrative region of France and the birthplace of Napoleon Bonaparte?",
    options: ["Sicily", "Corsica", "Sardinia", "Elba"],
    correctIndex: 1,
    explanation: "Corsica is a mountainous French island situated north of Sardinia.",
    status: "published"
  },
  {
    id: "eur-e-54",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the largest island in Greece, separating the Aegean Sea from the Libyan Sea?",
    options: ["Rhodes", "Corfu", "Crete", "Lesbos"],
    correctIndex: 2,
    explanation: "Crete was the center of Europe's first advanced civilization, the Minoans.",
    status: "published"
  },
  {
    id: "eur-e-55",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which active stratovolcano on the east coast of Sicily is the tallest active volcano in Europe outside the Caucasus?",
    options: ["Mount Vesuvius", "Stromboli", "Mount Etna", "Vulcano"],
    correctIndex: 2,
    explanation: "Mount Etna rises over 3,350 meters, in an almost constant state of activity.",
    status: "published"
  },
  {
    id: "eur-e-56",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which famous volcano near Naples, Italy, destroyed the Roman cities of Pompeii and Herculaneum in 79 CE?",
    options: ["Mount Etna", "Mount Vesuvius", "Stromboli", "Santorini"],
    correctIndex: 1,
    explanation: "Mount Vesuvius is the only active volcano on the European mainland.",
    status: "published"
  },
  {
    id: "eur-e-57",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which volcanic island in the Tyrrhenian Sea off northern Sicily has been in almost continuous mild eruption for over 2,000 years, nicknamed 'Lighthouse of the Mediterranean'?",
    options: ["Vulcano", "Stromboli", "Lipari", "Ischia"],
    correctIndex: 1,
    explanation: "Stromboli gives its name to the 'Strombolian' eruption pattern of glowing lava fountains.",
    status: "published"
  },
  {
    id: "eur-e-58",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the largest lake in Central Europe, located in western Hungary?",
    options: ["Lake Geneva", "Lake Constance", "Lake Balaton", "Lake Garda"],
    correctIndex: 2,
    explanation: "Lake Balaton covers 592 square kilometers, nicknamed the 'Hungarian Sea'.",
    status: "published"
  },
  {
    id: "eur-e-59",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the crescent-shaped lake shared by Switzerland and France, fed by the Rhone River?",
    options: ["Lake Zurich", "Lake Lucerne", "Lake Geneva (Lac L\u00e9man)", "Lake Neuch\u00e2tel"],
    correctIndex: 2,
    explanation: "Lake Geneva is one of Western Europe's largest freshwater lakes, home to Geneva and Lausanne.",
    status: "published"
  },
  {
    id: "eur-e-60",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which large lake is shared by Germany, Switzerland, and Austria, fed and drained by the Rhine?",
    options: ["Lake Geneva", "Lake Constance (Bodensee)", "Lake Garda", "Lake Como"],
    correctIndex: 1,
    explanation: "Lake Constance (Bodensee) sits at the northern foot of the Alps along the Rhine.",
    status: "published"
  },
  {
    id: "eur-e-61",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the largest lake in Italy, located at the foot of the Alps between Lombardy, Veneto, and Trentino?",
    options: ["Lake Como", "Lake Maggiore", "Lake Garda", "Lake Iseo"],
    correctIndex: 2,
    explanation: "Lake Garda covers 370 square kilometers, formed by glacial action in the Italian Alps.",
    status: "published"
  },
  {
    id: "eur-e-62",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which scenic Y-shaped alpine lake in northern Italy is famous for picturesque resort towns like Bellagio?",
    options: ["Lake Garda", "Lake Como", "Lake Trasimeno", "Lake Bolsena"],
    correctIndex: 1,
    explanation: "Lake Como is a glacial lake reaching a depth of over 400 meters.",
    status: "published"
  },
  {
    id: "eur-e-63",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which tiny sovereign microstate on the French Riviera is the second-smallest independent state in the world after Vatican City?",
    options: ["San Marino", "Liechtenstein", "Monaco", "Andorra"],
    correctIndex: 2,
    explanation: "Monaco covers approximately 2.08 square kilometers along the Mediterranean coast.",
    status: "published"
  },
  {
    id: "eur-e-64",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which landlocked microstate is completely enclosed within the Emilia-Romagna and Marche regions of Italy?",
    options: ["Vatican City", "San Marino", "Monaco", "Andorra"],
    correctIndex: 1,
    explanation: "San Marino claims to be the world's oldest surviving sovereign republic, founded in 301 CE.",
    status: "published"
  },
  {
    id: "eur-e-65",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which small mountainous principality is landlocked between Switzerland and Austria?",
    options: ["Luxembourg", "Andorra", "Liechtenstein", "San Marino"],
    correctIndex: 2,
    explanation: "Liechtenstein is a doubly landlocked Alpine German-speaking principality along the Rhine.",
    status: "published"
  },
  {
    id: "eur-e-66",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which co-principality is nestled in the eastern Pyrenees mountains between France and Spain?",
    options: ["Monaco", "Andorra", "Liechtenstein", "San Marino"],
    correctIndex: 1,
    explanation: "Andorra is headed jointly by the Bishop of Urgell in Spain and the President of France.",
    status: "published"
  },
  {
    id: "eur-e-67",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the largest country in Europe entirely within the continent?",
    options: ["France", "Ukraine", "Germany", "Spain"],
    correctIndex: 1,
    explanation: "Ukraine spans 603,628 square kilometers, the largest country located wholly within Europe.",
    status: "published"
  },
  {
    id: "eur-e-68",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which country is renowned for its iconic Atlantic fjords carved by Pleistocene glaciers?",
    options: ["Sweden", "Norway", "Finland", "Denmark"],
    correctIndex: 1,
    explanation: "Norway's coast features thousands of deep, steep-walled glacial fjords like Geirangerfjord.",
    status: "published"
  },
  {
    id: "eur-e-69",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which Nordic country is popularly nicknamed the 'Land of a Thousand Lakes' (actually containing over 180,000 lakes)?",
    options: ["Sweden", "Norway", "Finland", "Iceland"],
    correctIndex: 2,
    explanation: "Finland's post-glacial landscape is blanketed by over 187,000 freshwater lakes and extensive boreal forests.",
    status: "published"
  },
  {
    id: "eur-e-70",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which Nordic island nation sits astride the Mid-Atlantic Ridge, famous for geysers, hot springs, and volcanoes?",
    options: ["Greenland", "Faroe Islands", "Iceland", "Svalbard"],
    correctIndex: 2,
    explanation: "Iceland is a volcanic island created by the divergence of the North American and Eurasian tectonic plates.",
    status: "published"
  },
  {
    id: "eur-e-71",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which long mountain chain forms the 'backbone' of peninsular Italy from north to south?",
    options: ["The Alps", "The Apennines", "The Dolomites", "The Pyrenees"],
    correctIndex: 1,
    explanation: "The Apennine Mountains run roughly 1,200 kilometers along the length of the Italian peninsula.",
    status: "published"
  },
  {
    id: "eur-e-72",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which dramatic mountain range in the northern Italian Alps is famous for sheer vertical limestone and dolomite towers?",
    options: ["The Dolomites", "The Apennines", "The Julian Alps", "The Maritime Alps"],
    correctIndex: 0,
    explanation: "The Dolomites are a UNESCO World Heritage alpine range celebrated for pale dolomite carbonate rock formations.",
    status: "published"
  },
  {
    id: "eur-e-73",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which arc-shaped mountain range extends through Poland, Slovakia, Ukraine, and Romania in Central and Eastern Europe?",
    options: ["The Balkans", "The Carpathians", "The Urals", "The Dinaric Alps"],
    correctIndex: 1,
    explanation: "The Carpathians are Europe's third-longest mountain system, home to brown bears, wolves, and lynx.",
    status: "published"
  },
  {
    id: "eur-e-74",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which mountain range extends along the western Balkan Peninsula through Slovenia, Croatia, Bosnia, Montenegro, and Albania?",
    options: ["The Carpathians", "The Dinaric Alps", "The Pindus", "The Rhodope"],
    correctIndex: 1,
    explanation: "The Dinaric Alps are famous for classical karst topography, sinkholes, and underground limestone river systems.",
    status: "published"
  },
  {
    id: "eur-e-75",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the longest river in the British Isles, flowing through Wales and western England to the Bristol Channel?",
    options: ["River Thames", "River Severn", "River Trent", "River Clyde"],
    correctIndex: 1,
    explanation: "The River Severn flows 354 kilometers, noted for the Severn Bore tidal wave.",
    status: "published"
  },
  {
    id: "eur-e-76",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the longest river in France, flowing through the Loire Valley châteaux into the Bay of Biscay?",
    options: ["Seine", "Loire River", "Rhone", "Garonne"],
    correctIndex: 1,
    explanation: "The Loire River flows 1,006 kilometers, renowned for world-famous Renaissance castles.",
    status: "published"
  },
  {
    id: "eur-e-77",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which major river flows from the Swiss Alps through Lake Geneva, southern France, and into the Mediterranean Sea?",
    options: ["Loire", "Rhone River", "Seine", "Meuse"],
    correctIndex: 1,
    explanation: "The Rhone is a major Mediterranean drainage river in France, forming the Camargue delta.",
    status: "published"
  },
  {
    id: "eur-e-78",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the longest river in Italy, flowing eastward across northern Italy through the Po Valley into the Adriatic Sea?",
    options: ["Tiber River", "Arno River", "Po River", "Adige River"],
    correctIndex: 2,
    explanation: "The Po River flows 652 kilometers, draining Italy's most productive agricultural and industrial region.",
    status: "published"
  },
  {
    id: "eur-e-79",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the longest river on the Iberian Peninsula, flowing from eastern Spain across Portugal into the Atlantic at Lisbon?",
    options: ["Ebro River", "Tagus River (Tejo)", "Douro River", "Guadiana River"],
    correctIndex: 1,
    explanation: "The Tagus flows 1,007 kilometers across central Spain and Portugal.",
    status: "published"
  },
  {
    id: "eur-e-80",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which major river in northern Spain flows eastward into the Mediterranean Sea, forming a large bird-rich delta?",
    options: ["Tagus River", "Ebro River", "Douro River", "Guadalquivir River"],
    correctIndex: 1,
    explanation: "The Ebro is the longest river entirely within Spain, draining the southern Pyrenees and Iberian system.",
    status: "published"
  },
  {
    id: "eur-e-81",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which river in northern Portugal and Spain is world-famous for its terraced vineyard valley that produces Port wine?",
    options: ["Tagus", "Douro River", "Minho", "Mondego"],
    correctIndex: 1,
    explanation: "The Alto Douro Wine Region was designated a UNESCO World Heritage cultural landscape in 2001.",
    status: "published"
  },
  {
    id: "eur-e-82",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the longest river in Poland, flowing past Krakow and Warsaw into the Baltic Sea at Gdansk?",
    options: ["Oder River", "Vistula River (Wisla)", "Warta River", "Bug River"],
    correctIndex: 1,
    explanation: "The Vistula drains over half of Poland's land area across its 1,047-kilometer course.",
    status: "published"
  },
  {
    id: "eur-e-83",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which river forms the international boundary between Poland and Germany along with the Lusatian Neisse?",
    options: ["Elbe River", "Oder River", "Rhine River", "Spree River"],
    correctIndex: 1,
    explanation: "The Oder-Neisse Line has marked the official border between Germany and Poland since after World War II.",
    status: "published"
  },
  {
    id: "eur-e-84",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which river flows from the Czech Republic through Dresden, Magdeburg, and Hamburg into the North Sea?",
    options: ["Rhine", "Elbe River", "Weser", "Main"],
    correctIndex: 1,
    explanation: "The Elbe River flows 1,094 kilometers through the Czech Republic and Germany.",
    status: "published"
  },
  {
    id: "eur-e-85",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the longest river in Europe, flowing entirely within Russia for 3,530 km into the Caspian Sea?",
    options: ["Danube", "Volga River", "Dnieper", "Don"],
    correctIndex: 1,
    explanation: "The Volga is Europe's longest and largest river by discharge and drainage basin.",
    status: "published"
  },
  {
    id: "eur-e-86",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the largest freshwater lake in Europe by surface area, located in northwestern Russia near Saint Petersburg?",
    options: ["Lake Onega", "Lake Ladoga", "Lake Peipus", "Lake V\u00e4nern"],
    correctIndex: 1,
    explanation: "Lake Ladoga covers 17,700 square kilometers, draining into the Gulf of Finland via the Neva River.",
    status: "published"
  },
  {
    id: "eur-e-87",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the second-largest freshwater lake in Europe, located in northwestern Russia northeast of Lake Ladoga?",
    options: ["Lake Peipus", "Lake Onega", "Lake V\u00e4nern", "Lake Saimaa"],
    correctIndex: 1,
    explanation: "Lake Onega covers 9,890 square kilometers, containing the historic wooden church island of Kizhi.",
    status: "published"
  },
  {
    id: "eur-e-88",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the largest lake in Sweden and the third-largest lake in Europe, located in the country's southwest?",
    options: ["Lake V\u00e4ttern", "Lake M\u00e4laren", "Lake V\u00e4nern", "Lake Hj\u00e4lmaren"],
    correctIndex: 2,
    explanation: "Lake Vänern covers 5,655 square kilometers, connected to the North Sea via the Göta Älv river.",
    status: "published"
  },
  {
    id: "eur-e-89",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which autonomous archipelago of thousands of Swedish-speaking islands belongs to Finland at the entrance to the Gulf of Bothnia?",
    options: ["Gotland", "Aland Islands (Ahvenanmaa)", "Oland", "Saaremaa"],
    correctIndex: 1,
    explanation: "The Åland Islands are a demilitarized, monolingually Swedish autonomous region of Finland.",
    status: "published"
  },
  {
    id: "eur-e-90",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the largest island belonging to Sweden, located in the Baltic Sea with Visby as its historic capital?",
    options: ["Oland", "Gotland", "Bornholm", "Rugen"],
    correctIndex: 1,
    explanation: "Gotland is Sweden's largest island, famed for medieval Hanseatic city walls in Visby and limestone rauks.",
    status: "published"
  },
  {
    id: "eur-e-91",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which Danish island is located in the Baltic Sea far to the east of the rest of Denmark, south of Sweden?",
    options: ["Zealand", "Funen", "Bornholm", "Lolland"],
    correctIndex: 2,
    explanation: "Bornholm is a rocky Baltic island known for round Romanesque churches and smoked herring.",
    status: "published"
  },
  {
    id: "eur-e-92",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which German island in the Baltic Sea is Germany's largest island, famous for towering white chalk cliffs at Jasmund?",
    options: ["Sylt", "Fehmarn", "Rugen", "Usedom"],
    correctIndex: 2,
    explanation: "Rügen is connected to Stralsund by the Rügen Bridge, painted famously by Caspar David Friedrich.",
    status: "published"
  },
  {
    id: "eur-e-93",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which group of Spanish islands in the western Mediterranean includes Mallorca, Menorca, Ibiza, and Formentera?",
    options: ["Canary Islands", "Balearic Islands", "Cyclades", "Dodecanese"],
    correctIndex: 1,
    explanation: "The Balearic Islands are an autonomous community and popular archipelago of Spain.",
    status: "published"
  },
  {
    id: "eur-e-94",
    continent: "Europe",
    difficulty: "Easy",
    question: "Which Greek island archipelago in the Aegean Sea forms a circle around the sacred island of Delos, including Mykonos and Santorini?",
    options: ["Ionian Islands", "Cyclades", "Dodecanese", "Sporades"],
    correctIndex: 1,
    explanation: "The Cyclades are world-famous for cubic whitewashed houses, blue-domed churches, and volcanic caldera sunsets.",
    status: "published"
  },
  {
    id: "eur-e-95",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the famous crescent-shaped volcanic island in the Cyclades of Greece that was decimated by a massive Bronze Age eruption?",
    options: ["Mykonos", "Naxos", "Santorini (Thera)", "Paros"],
    correctIndex: 2,
    explanation: "The Minoan eruption of Thera roughly 3,600 years ago created the sheer submerged sea caldera seen today.",
    status: "published"
  },
  {
    id: "eur-e-96",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the large peninsula in southern Greece connected to the mainland by the narrow Isthmus of Corinth?",
    options: ["Attica", "Peloponnese", "Chalcidice", "Epirus"],
    correctIndex: 1,
    explanation: "The Peloponnese was effectively made an island when the Corinth Canal was cut across its isthmus in 1893.",
    status: "published"
  },
  {
    id: "eur-e-97",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the narrow man-made canal cut through solid rock in Greece that connects the Gulf of Corinth with the Saronic Gulf?",
    options: ["Kiel Canal", "Corinth Canal", "Suez Canal", "Gota Canal"],
    correctIndex: 1,
    explanation: "The Corinth Canal is 6.4 kilometers long and only 21.4 meters wide, with dramatic 90-meter-high vertical rock walls.",
    status: "published"
  },
  {
    id: "eur-e-98",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the world's busiest artificial ship canal, linking the North Sea at Brunsbüttel to the Baltic Sea at Kiel in northern Germany?",
    options: ["Corinth Canal", "Kiel Canal", "Mittelland Canal", "Rhine-Main-Danube Canal"],
    correctIndex: 1,
    explanation: "The Kiel Canal opened in 1895, saving ships from rounding the stormy Jutland Peninsula of Denmark.",
    status: "published"
  },
  {
    id: "eur-e-99",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the large peninsula comprising mainland Denmark that projects north from Germany toward Norway and Sweden?",
    options: ["Scandinavian Peninsula", "Jutland Peninsula", "Iberian Peninsula", "Kola Peninsula"],
    correctIndex: 1,
    explanation: "Jutland forms the continental backbone of Denmark, separating the North Sea from the Kattegat.",
    status: "published"
  },
  {
    id: "eur-e-100",
    continent: "Europe",
    difficulty: "Easy",
    question: "What is the narrow strait separating southern Spain from Morocco, connecting the Atlantic Ocean to the Mediterranean Sea?",
    options: ["Strait of Messina", "Strait of Gibraltar", "Strait of Bonifacio", "Strait of Otranto"],
    correctIndex: 1,
    explanation: "The Strait of Gibraltar narrows to just 14.3 kilometers at its narrowest point between Europe and Africa.",
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
    id: "eur-m-3",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which mountain range extends along the spine of the Scandinavian Peninsula between Norway and Sweden?",
    options: ["Kjolen (Scandinavian Mountains / Scandes)", "Urals", "Carpathians", "Pennines"],
    correctIndex: 0,
    explanation: "The Scandinavian Mountains run over 1,700 kilometers, with Galdhøpiggen as the highest peak.",
    status: "published"
  },
  {
    id: "eur-m-4",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the highest mountain peak in Norway and Northern Europe, rising to 2,469 meters in the Jotunheimen range?",
    options: ["Glittertind", "Galdhopiggen", "Kebnekaise", "Sn\u00f8hetta"],
    correctIndex: 1,
    explanation: "Galdhøpiggen in Jotunheimen National Park is the highest mountain in Scandinavia.",
    status: "published"
  },
  {
    id: "eur-m-5",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the highest mountain peak in Sweden, situated in Lapland north of the Arctic Circle at 2,096 meters?",
    options: ["Sarek", "Kebnekaise", "Galdhopiggen", "Helags"],
    correctIndex: 1,
    explanation: "Kebnekaise has two main peaks; its glaciated south peak has melted below the rocky north peak in recent summers.",
    status: "published"
  },
  {
    id: "eur-m-6",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which low mountain range in northern England is often called the 'Backbone of England'?",
    options: ["Cumbrian Mountains", "The Pennines", "Cotswolds", "Grampian Mountains"],
    correctIndex: 1,
    explanation: "The Pennines stretch from the Peak District north through the Yorkshire Dales to the Cheviot Hills.",
    status: "published"
  },
  {
    id: "eur-m-7",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the highest mountain peak in the British Isles, located in the Grampian Mountains of Scotland at 1,345 meters?",
    options: ["Scafell Pike", "Ben Nevis", "Snowdon (Yr Wyddfa)", "Carrantuohill"],
    correctIndex: 1,
    explanation: "Ben Nevis is the highest land point in the UK, formed from the collapsed caldera of an ancient volcano.",
    status: "published"
  },
  {
    id: "eur-m-8",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the highest mountain peak in Wales, located in Snowdonia National Park at 1,085 meters?",
    options: ["Ben Nevis", "Snowdon (Yr Wyddfa)", "Cadair Idris", "Pen y Fan"],
    correctIndex: 1,
    explanation: "Yr Wyddfa (Snowdon) is the highest peak in Wales, served by the Snowdon Mountain Railway.",
    status: "published"
  },
  {
    id: "eur-m-9",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the highest mountain peak on the island of Ireland, located in County Kerry at 1,038 meters?",
    options: ["Lugnaquilla", "Carrauntoohil", "Galtymore", "Slieve Donard"],
    correctIndex: 1,
    explanation: "Carrauntoohil is the central peak of the MacGillycuddy's Reeks range in southwest Ireland.",
    status: "published"
  },
  {
    id: "eur-m-10",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the largest freshwater lake by surface area in the British Isles, located in Northern Ireland?",
    options: ["Loch Lomond", "Lough Neagh", "Loch Ness", "Lough Corrib"],
    correctIndex: 1,
    explanation: "Lough Neagh covers 392 square kilometers, supplying roughly 40% of Northern Ireland's drinking water.",
    status: "published"
  },
  {
    id: "eur-m-11",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the largest freshwater lake by surface area in Great Britain, located on the Highland Boundary Fault in Scotland?",
    options: ["Loch Ness", "Loch Lomond", "Loch Morar", "Loch Awe"],
    correctIndex: 1,
    explanation: "Loch Lomond covers 71 square kilometers, famous for the Bonnie Banks ballad.",
    status: "published"
  },
  {
    id: "eur-m-12",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which deep Scottish freshwater loch contains more freshwater by volume than all lakes in England and Wales combined?",
    options: ["Loch Lomond", "Loch Ness", "Loch Morar", "Loch Shiel"],
    correctIndex: 1,
    explanation: "Loch Ness holds 7.45 cubic kilometers of water due to its great depth of up to 230 meters.",
    status: "published"
  },
  {
    id: "eur-m-13",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the largest national park in England, renowned for picturesque glacial lakes and literary ties to Beatrix Potter and Wordsworth?",
    options: ["Peak District", "Lake District National Park", "Yorkshire Dales", "Dartmoor"],
    correctIndex: 1,
    explanation: "The Lake District in Cumbria contains England's highest peak (Scafell Pike) and deepest lake (Wastwater).",
    status: "published"
  },
  {
    id: "eur-m-14",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which dramatic basalt geological formation on the north coast of Northern Ireland consists of roughly 40,000 interlocking polygonal columns?",
    options: ["Fingal's Cave", "Giant's Causeway", "Cliffs of Moher", "Old Man of Hoy"],
    correctIndex: 1,
    explanation: "The Giant's Causeway was created by rapid cooling of Paleocene basalt lava flows roughly 50 to 60 million years ago.",
    status: "published"
  },
  {
    id: "eur-m-15",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which sea sea cave on the uninhabited Scottish island of Staffa is renowned for natural hexagonal basalt columns and inspired Mendelssohn's Hebrides Overture?",
    options: ["Smoo Cave", "Fingal's Cave", "Goba Cave", "St Kilda Cave"],
    correctIndex: 1,
    explanation: "Fingal's Cave features unique arched basalt sea columns providing remarkable acoustic resonance.",
    status: "published"
  },
  {
    id: "eur-m-16",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which archipelago of roughly 70 islands lies off the northern coast of mainland Scotland across the Pentland Firth?",
    options: ["Shetland Islands", "Orkney Islands", "Outer Hebrides", "Inner Hebrides"],
    correctIndex: 1,
    explanation: "The Orkney Islands contain Neolithic monuments including Skara Brae and the Ring of Brodgar.",
    status: "published"
  },
  {
    id: "eur-m-17",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which northernmost archipelago of the United Kingdom lies between Orkney, the Faroe Islands, and Norway?",
    options: ["Outer Hebrides", "Shetland Islands", "Faeroe", "Channel Islands"],
    correctIndex: 1,
    explanation: "Shetland consists of over 100 islands, heavily influenced by Norse culture and North Sea oil terminals.",
    status: "published"
  },
  {
    id: "eur-m-18",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which autonomous island group belonging to Denmark is located in the North Atlantic between Scotland and Iceland?",
    options: ["Shetland", "Faroe Islands", "Aland", "Svalbard"],
    correctIndex: 1,
    explanation: "The Faroe Islands comprise 18 mountainous volcanic islands connected by subsea tunnels.",
    status: "published"
  },
  {
    id: "eur-m-19",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which Norwegian Arctic archipelago halfway between Norway and the North Pole hosts the Global Seed Vault?",
    options: ["Jan Mayen", "Svalbard (Spitsbergen)", "Lofoten", "Novaya Zemlya"],
    correctIndex: 1,
    explanation: "Svalbard is governed under the 1920 Svalbard Treaty, home to Longyearbyen and polar bears.",
    status: "published"
  },
  {
    id: "eur-m-20",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which archipelago in northern Norway inside the Arctic Circle is world-renowned for dramatic alpine peaks rising directly out of open fjords and traditional rorbu fishing cabins?",
    options: ["Vester\u00e5len", "Lofoten Islands", "Helgeland", "Svalbard"],
    correctIndex: 1,
    explanation: "Lofoten features an unusually mild winter climate for its latitude (68°N) due to the North Atlantic Drift.",
    status: "published"
  },
  {
    id: "eur-m-21",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which warm ocean current, an extension of the Gulf Stream, keeps ports in northwestern Europe and western Norway ice-free year-round?",
    options: ["Canary Current", "North Atlantic Drift", "Labrador Current", "East Greenland Current"],
    correctIndex: 1,
    explanation: "The North Atlantic Drift carries warm tropical waters northeastward, giving Western Europe a temperate maritime climate.",
    status: "published"
  },
  {
    id: "eur-m-22",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the largest glacier in continental mainland Europe, covering 487 square kilometers in western Norway?",
    options: ["Vatnaj\u00f6kull", "Jostedalsbreen", "Aletsch Glacier", "Folgefonna"],
    correctIndex: 1,
    explanation: "Jostedalsbreen is an ice cap in Vestland, Norway, with dozens of outlet valley glaciers.",
    status: "published"
  },
  {
    id: "eur-m-23",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the largest glacier in Europe by area and volume, covering about 8% of Iceland?",
    options: ["Langj\u00f6kull", "Vatnaj\u00f6kull", "Hofsj\u00f6kull", "M\u00fdrdalsj\u00f6kull"],
    correctIndex: 1,
    explanation: "Vatnajökull covers roughly 7,900 square kilometers, concealing active subglacial volcanoes like Grímsvötn.",
    status: "published"
  },
  {
    id: "eur-m-24",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the longest and deepest fjord in Norway, stretching 205 kilometers inland and reaching a maximum depth of 1,308 meters?",
    options: ["Geirangerfjord", "Sognefjord", "Hardangerfjord", "N\u00e6r\u00f8yfjord"],
    correctIndex: 1,
    explanation: "Sognefjord is nicknamed the 'King of the Fjords', branching into picturesque arms like Nærøyfjord.",
    status: "published"
  },
  {
    id: "eur-m-25",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the famous cliff platform in southwestern Norway that drops 604 meters vertically down into the Lysefjord?",
    options: ["Trolltunga", "Preikestolen (Pulpit Rock)", "Kjeragbolten", "Besseggen"],
    correctIndex: 1,
    explanation: "Preikestolen is an almost flat 25-by-25-meter rock plateau formed during the last Ice Age.",
    status: "published"
  },
  {
    id: "eur-m-26",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which famous horizontal rock sliver jutting out 700 meters above Lake Ringedalsvatnet in Norway is popularly called 'Troll's Tongue'?",
    options: ["Preikestolen", "Trolltunga", "Kjeragbolten", "Torghatten"],
    correctIndex: 1,
    explanation: "Trolltunga is a cantilevered granite ledge created by freeze-thaw glacial erosion.",
    status: "published"
  },
  {
    id: "eur-m-27",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the largest glacier in the Alps by area and length, spanning 23 km in the Swiss canton of Valais?",
    options: ["Mer de Glace", "Great Aletsch Glacier (Grosser Aletschgletscher)", "Gorner Glacier", "Rhone Glacier"],
    correctIndex: 1,
    explanation: "The Aletsch Glacier contains over 10 billion tons of glacial ice, a UNESCO site.",
    status: "published"
  },
  {
    id: "eur-m-28",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the iconic pyramid-shaped mountain peak in the Pennine Alps straddling the border between Switzerland (Zermatt) and Italy (Breuil-Cervinia)?",
    options: ["Eiger", "Matterhorn (Monte Cervino)", "Jungfrau", "Dufourspitze"],
    correctIndex: 1,
    explanation: "The Matterhorn rises to 4,478 meters, an iconic pyramidal horn sculpted by intersecting cirque glaciers.",
    status: "published"
  },
  {
    id: "eur-m-29",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the highest mountain peak in Switzerland, located in the Monte Rosa massif at 4,634 meters?",
    options: ["Dom", "Dufourspitze", "Weisshorn", "Matterhorn"],
    correctIndex: 1,
    explanation: "Dufourspitze in the Monte Rosa massif is Switzerland's highest elevation.",
    status: "published"
  },
  {
    id: "eur-m-30",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which mountain peak in the Bernese Alps is famous for its notorious 1,800-meter vertical limestone North Face (Nordwand)?",
    options: ["Monch", "Eiger", "Jungfrau", "Wetterhorn"],
    correctIndex: 1,
    explanation: "The Eiger's north face has challenged world-class mountaineers since the first successful ascent in 1938.",
    status: "published"
  },
  {
    id: "eur-m-31",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which high mountain pass in the Swiss Alps connects Valais with Piedmont in Italy, famous for the hospice and rescue dogs founded in the 11th century?",
    options: ["Gotthard Pass", "Great St Bernard Pass", "Simplon Pass", "Furka Pass"],
    correctIndex: 1,
    explanation: "Great St Bernard Pass sits at 2,469 meters, home to the Great St Bernard Hospice.",
    status: "published"
  },
  {
    id: "eur-m-32",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which central Alpine pass in Switzerland connects the northern German-speaking cantons with the southern Italian-speaking canton of Ticino?",
    options: ["Brenner Pass", "St Gotthard Pass", "San Bernardino Pass", "Simplon Pass"],
    correctIndex: 1,
    explanation: "The St Gotthard Pass has been an essential transit axis for centuries, now bypassed by the 57-km Gotthard Base Tunnel.",
    status: "published"
  },
  {
    id: "eur-m-33",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the world's longest railway tunnel, running 57 kilometers beneath the Swiss Alps from Erstfeld to Bodio?",
    options: ["Seikan Tunnel", "Gotthard Base Tunnel", "Channel Tunnel", "L\u00f6tschberg Base Tunnel"],
    correctIndex: 1,
    explanation: "The Gotthard Base Tunnel opened in 2016, providing a flat high-speed rail transit route through the Alps.",
    status: "published"
  },
  {
    id: "eur-m-34",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which mountain pass at 1,370 meters elevation connects Innsbruck in Austria with Bolzano in Italy, serving as the lowest and busiest major Alpine pass?",
    options: ["Reschen Pass", "Brenner Pass", "Grossglockner High Alpine Road", "Semmering Pass"],
    correctIndex: 1,
    explanation: "The Brenner Pass is the primary motorway and freight transit corridor crossing the eastern Alps.",
    status: "published"
  },
  {
    id: "eur-m-35",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the highest mountain peak in Austria, rising to 3,798 meters in the High Tauern range?",
    options: ["Wildspitze", "Grossglockner", "Dachstein", "Zugspitze"],
    correctIndex: 1,
    explanation: "Grossglockner features the Pasterze Glacier, Austria's longest glacier.",
    status: "published"
  },
  {
    id: "eur-m-36",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the highest mountain peak in Germany, located in the Wetterstein range of the Bavarian Alps at 2,962 meters?",
    options: ["Watzmann", "Zugspitze", "Hochwanner", "Feldberg"],
    correctIndex: 1,
    explanation: "The Zugspitze crowns the German Alps south of Garmisch-Partenkirchen on the border with Austria.",
    status: "published"
  },
  {
    id: "eur-m-37",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which forested low mountain range in southwestern Germany's Baden-Württemberg is the source of the Danube River?",
    options: ["Harz", "Black Forest (Schwarzwald)", "Bavarian Forest", "Taunus"],
    correctIndex: 1,
    explanation: "The Black Forest is an ancient crystalline horst range, birthplace of cuckoo clocks and the Danube headstreams (Brigach and Breg).",
    status: "published"
  },
  {
    id: "eur-m-38",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which elevated plateau region covers most of the interior of Spain, divided by the Central System into Northern and Southern sub-plateaus?",
    options: ["Meseta Central", "Andalusian Plain", "Ebro Basin", "Sierra Nevada"],
    correctIndex: 0,
    explanation: "The Meseta Central covers over 200,000 square kilometers, home to Madrid, Toledo, and Salamanca.",
    status: "published"
  },
  {
    id: "eur-m-39",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the highest mountain peak on the Iberian Peninsula, located in the Sierra Nevada range in southern Spain at 3,479 meters?",
    options: ["Pico Aneto", "Mulhacen", "Veleta", "Torre Cerredo"],
    correctIndex: 1,
    explanation: "Mulhacén is the highest peak in continental Spain, named after Abu l-Hasan Ali, the 15th-century Muslim King of Granada.",
    status: "published"
  },
  {
    id: "eur-m-40",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the highest mountain peak in the Pyrenees, located in the Posets-Maladeta Natural Park in Aragon, Spain at 3,404 meters?",
    options: ["Monte Perdido", "Pico Aneto", "Vignemale", "Pic du Midi"],
    correctIndex: 1,
    explanation: "Pico Aneto holds the largest glacier in the Pyrenees on its northern slopes.",
    status: "published"
  },
  {
    id: "eur-m-41",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which mountain range along northern Spain runs parallel to the Bay of Biscay, containing the limestone peaks of Picos de Europa?",
    options: ["Iberian System", "Cantabrian Mountains", "Sierra Morena", "Baetic System"],
    correctIndex: 1,
    explanation: "The Cantabrian Mountains receive high rainfall, forming the verdant 'Green Spain' (España Verde).",
    status: "published"
  },
  {
    id: "eur-m-42",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which river in southern Spain flows through Córdoba and Seville before emptying into the Gulf of Cádiz at Sanlúcar de Barrameda?",
    options: ["Guadiana", "Guadalquivir River", "Segura", "Genil"],
    correctIndex: 1,
    explanation: "The Guadalquivir is the only major navigable river in Spain, home to the wetlands of Doñana National Park.",
    status: "published"
  },
  {
    id: "eur-m-43",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the famous UNESCO national park in Andalusia, Spain, protecting Europe's most important marshland wetland reserve for migratory birds?",
    options: ["Caba\u00f1eros", "Do\u00f1ana National Park", "Monfrag\u00fce", "Tablas de Daimiel"],
    correctIndex: 1,
    explanation: "Doñana encompasses shifting sand dunes, pine forests, and Guadalquivir marshes, home to the Iberian lynx.",
    status: "published"
  },
  {
    id: "eur-m-44",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which mountain range in central France consists of an ancient volcanic plateau containing the Chaîne des Puys dormant cinder cones?",
    options: ["Vosges", "Massif Central", "Jura Mountains", "Ardennes"],
    correctIndex: 1,
    explanation: "The Massif Central covers roughly 15% of France, crowned by Puy de Dôme and Puy de Sancy.",
    status: "published"
  },
  {
    id: "eur-m-45",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which mountain range on the French-Swiss border gave its name to the Jurassic geological period due to its limestone strata?",
    options: ["Vosges", "Jura Mountains", "Ardennes", "Morvan"],
    correctIndex: 1,
    explanation: "Alexander von Humboldt named the Jurassic system in 1795 after the extensive limestone formations of the Jura range.",
    status: "published"
  },
  {
    id: "eur-m-46",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which forested low mountain range in northeastern France runs along the west side of the Upper Rhine Plain, mirroring the Black Forest?",
    options: ["Jura", "Vosges Mountains", "Ardennes", "Cevennes"],
    correctIndex: 1,
    explanation: "The Vosges Mountains feature rounded granite summits called 'ballons' in Alsace and Lorraine.",
    status: "published"
  },
  {
    id: "eur-m-47",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which heavily forested region of rolling hills and ridges covers southeastern Belgium, Luxembourg, and northern France?",
    options: ["Flanders", "The Ardennes", "Wallonia", "Brabant"],
    correctIndex: 1,
    explanation: "The Ardennes is a rugged plateau deeply carved by the Meuse and Ourthe rivers, site of the 1944 Battle of the Bulge.",
    status: "published"
  },
  {
    id: "eur-m-48",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which major river originates in eastern France, flows through Belgium, and joins the Rhine delta in the Netherlands at Rotterdam?",
    options: ["Scheldt", "Meuse (Maas) River", "Moselle", "Sambre"],
    correctIndex: 1,
    explanation: "The Meuse flows 925 kilometers across France, Belgium, and the Netherlands.",
    status: "published"
  },
  {
    id: "eur-m-49",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which river flows through France, Luxembourg, and Germany before joining the Rhine at Koblenz at the famous 'Deutsches Eck'?",
    options: ["Main", "Moselle (Mosel) River", "Neckar", "Lahn"],
    correctIndex: 1,
    explanation: "The Moselle River is world-renowned for steep terraced slate vineyards producing Riesling wine.",
    status: "published"
  },
  {
    id: "eur-m-50",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which river in central Germany flows past Frankfurt to join the Rhine at Mainz, forming part of a canal linking the Rhine to the Danube?",
    options: ["Neckar", "Main River", "Ruhr", "Weser"],
    correctIndex: 1,
    explanation: "The Main-Danube Canal connects the Main at Bamberg to the Danube at Kelheim, creating an uninterrupted waterway from the North Sea to the Black Sea.",
    status: "published"
  },
  {
    id: "eur-m-51",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which major river in Germany gives its name to Europe's largest industrial urban agglomeration (Essen, Dortmund, Duisburg)?",
    options: ["Lippe", "Ruhr River", "Wupper", "Emscher"],
    correctIndex: 1,
    explanation: "The Ruhr River joins the Rhine at Duisburg, home to the world's largest inland port.",
    status: "published"
  },
  {
    id: "eur-m-52",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the largest island in the Mediterranean belonging to Greece, located in the Ionian Sea, known for Navagio (Shipwreck) Beach?",
    options: ["Corfu", "Zakynthos (Zante)", "Kefalonia", "Lefkada"],
    correctIndex: 1,
    explanation: "Zakynthos is an Ionian island celebrated for coastal sea caves and loggerhead sea turtle nesting beaches.",
    status: "published"
  },
  {
    id: "eur-m-53",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the largest of the Ionian Islands of Greece, located opposite the Gulf of Patras, famous as the setting of Captain Corelli's Mandolin?",
    options: ["Corfu", "Kefalonia (Cephalonia)", "Zakynthos", "Ithaca"],
    correctIndex: 1,
    explanation: "Kefalonia rises to 1,628 meters at Mount Ainos, home to Melissani underground lake.",
    status: "published"
  },
  {
    id: "eur-m-54",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which Greek island near the Albanian border in the northern Ionian Sea was historically ruled by Venice, Britain, and France?",
    options: ["Rhodes", "Corfu (Kerkyra)", "Crete", "Kos"],
    correctIndex: 1,
    explanation: "Corfu's Old Town was inscribed as a UNESCO site for neoclassical Venetian architecture.",
    status: "published"
  },
  {
    id: "eur-m-55",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which Greek island in the Dodecanese archipelago off the coast of Turkey was home to the ancient Colossus, one of the Seven Wonders of the Ancient World?",
    options: ["Kos", "Rhodes", "Samos", "Patmos"],
    correctIndex: 1,
    explanation: "Rhodes features the fortified medieval Street of the Knights constructed by the Knights Hospitaller.",
    status: "published"
  },
  {
    id: "eur-m-56",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the highest mountain peak in Greece, famous in mythology as the home of the Twelve Olympian Gods?",
    options: ["Mount Parnassus", "Mount Olympus", "Mount Athos", "Mount Smolikas"],
    correctIndex: 1,
    explanation: "Mount Olympus rises to 2,917 meters at Mytikas peak near the Thermaic Gulf.",
    status: "published"
  },
  {
    id: "eur-m-57",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which semi-autonomous monastic peninsula in northeastern Greece is home to 20 Eastern Orthodox monasteries where women are strictly prohibited?",
    options: ["Pelion", "Mount Athos (Holy Mountain)", "Mani", "Sithonia"],
    correctIndex: 1,
    explanation: "Mount Athos has enjoyed autonomous self-governance within Greece since the 10th century.",
    status: "published"
  },
  {
    id: "eur-m-58",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the extraordinary rock formation in Thessaly, Greece, where Eastern Orthodox monasteries are perched atop sheer 400-meter sandstone pillars?",
    options: ["Delphi", "Meteora", "Zagori", "Vikos Gorge"],
    correctIndex: 1,
    explanation: "Meteora ('suspended in the air') features 24 medieval monasteries built atop towering natural conglomerate pillars.",
    status: "published"
  },
  {
    id: "eur-m-59",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which deep gorge in the Pindus Mountains of northwestern Greece holds the Guinness World Record for the deepest gorge relative to its width?",
    options: ["Samaria Gorge", "Vikos Gorge", "Tara River Canyon", "Verdon Gorge"],
    correctIndex: 1,
    explanation: "The Vikos Gorge drops 900 meters while measuring only a few meters wide at its base in the Voidomatis basin.",
    status: "published"
  },
  {
    id: "eur-m-60",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the famous 16-kilometer hiking canyon in the White Mountains (Lefka Ori) of Crete?",
    options: ["Vikos Gorge", "Samaria Gorge", "Imbros Gorge", "Kourtaliotiko Gorge"],
    correctIndex: 1,
    explanation: "Samaria Gorge is a national park and biosphere reserve on Crete, home to the endangered wild kri-kri goat.",
    status: "published"
  },
  {
    id: "eur-m-61",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which strait connects the Tyrrhenian Sea to the Ionian Sea, separating the Italian region of Calabria from the island of Sicily?",
    options: ["Strait of Otranto", "Strait of Messina", "Strait of Bonifacio", "Strait of Sicily"],
    correctIndex: 1,
    explanation: "The Strait of Messina is famous for whirlpool currents that inspired the Homeric monsters Scylla and Charybdis.",
    status: "published"
  },
  {
    id: "eur-m-62",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which narrow strait separates the French island of Corsica from the Italian island of Sardinia?",
    options: ["Strait of Messina", "Strait of Bonifacio", "Piombino Channel", "Strait of Otranto"],
    correctIndex: 1,
    explanation: "The Strait of Bonifacio is roughly 11 kilometers wide, notoriously rocky and subject to gale-force westerly winds.",
    status: "published"
  },
  {
    id: "eur-m-63",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which strait connects the Adriatic Sea with the Ionian Sea between the heel of Italy (Apulia) and Albania?",
    options: ["Strait of Messina", "Strait of Otranto", "Dardanelles", "Bosporus"],
    correctIndex: 1,
    explanation: "The Strait of Otranto is roughly 72 kilometers wide, marking the entrance to the Adriatic basin.",
    status: "published"
  },
  {
    id: "eur-m-64",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which arm of the Mediterranean Sea lies between the western coast of Italy and the islands of Corsica, Sardinia, and Sicily?",
    options: ["Ligurian Sea", "Tyrrhenian Sea", "Ionian Sea", "Adriatic Sea"],
    correctIndex: 1,
    explanation: "The Tyrrhenian Sea reaches depths over 3,700 meters, home to volcanic archipelagos like the Aeolian Islands.",
    status: "published"
  },
  {
    id: "eur-m-65",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which arm of the Mediterranean Sea lies between the French and Italian Rivieras and the island of Corsica?",
    options: ["Tyrrhenian Sea", "Ligurian Sea", "Balearic Sea", "Alboran Sea"],
    correctIndex: 1,
    explanation: "The Ligurian Sea washes Genoa and the Cinque Terre, bounded by the Maritime Alps.",
    status: "published"
  },
  {
    id: "eur-m-66",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the coastal region in Liguria, Italy, consisting of five historic villages perched on rugged seaside cliffs (Monterosso, Vernazza, Corniglia, Manarola, Riomaggiore)?",
    options: ["Amalfi Coast", "Cinque Terre", "Costa Smeralda", "Costiera Cilentana"],
    correctIndex: 1,
    explanation: "Cinque Terre is a UNESCO World Heritage cultural landscape of drystone agricultural terraces dropping into the sea.",
    status: "published"
  },
  {
    id: "eur-m-67",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which famous mountainous coastline along the southern edge of the Sorrentine Peninsula in Campania, Italy, includes Positano and Ravello?",
    options: ["Cinque Terre", "Amalfi Coast (Costiera Amalfitana)", "Riviera del Conero", "Costa Viola"],
    correctIndex: 1,
    explanation: "The Amalfi Coast is renowned for vertical pastel-colored villages overlooking the Tyrrhenian Sea.",
    status: "published"
  },
  {
    id: "eur-m-68",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the highest mountain peak in the Apennines, located in the Gran Sasso d'Italia massif in Abruzzo at 2,912 meters?",
    options: ["Monte Vettore", "Corno Grande", "Monte Amaro", "Monte Cimone"],
    correctIndex: 1,
    explanation: "Corno Grande contains Calderone Glacier, Europe's southernmost glacier.",
    status: "published"
  },
  {
    id: "eur-m-69",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the ancient trans-Apennine road constructed in 312 BCE linking Rome to Brindisi on the Adriatic coast, known as the 'Queen of Long Roads'?",
    options: ["Via Flaminia", "Via Appia (Appian Way)", "Via Aurelia", "Via Salaria"],
    correctIndex: 1,
    explanation: "The Appian Way was one of the earliest and strategically most vital Roman military and trade roads.",
    status: "published"
  },
  {
    id: "eur-m-70",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the massive shallow coastal lagoon on the Adriatic coast of northern Italy in which the city of Venice was constructed across 118 islands?",
    options: ["Marano Lagoon", "Venetian Lagoon", "Comacchio Lagoon", "Grado Lagoon"],
    correctIndex: 1,
    explanation: "The Venetian Lagoon is separated from the open Adriatic Sea by barrier barrier islands and protected by the MOSE floodgates.",
    status: "published"
  },
  {
    id: "eur-m-71",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the name of the multi-billion-euro mobile barrier flood defense system built to protect Venice from catastrophic tidal 'acqua alta' floods?",
    options: ["Delta Works", "MOSE project (Modulo Sperimentale Elettromeccanico)", "Thames Barrier", "Maeslantkering"],
    correctIndex: 1,
    explanation: "MOSE consists of 78 submerged flap gates at the three inlets of Lido, Malamocco, and Chioggia.",
    status: "published"
  },
  {
    id: "eur-m-72",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the world's most extensive coastal flood defense engineering system, constructed across the Rhine-Meuse-Scheldt delta in the southwestern Netherlands?",
    options: ["Zuiderzee Works", "Delta Works (Deltawerken)", "Afsluitdijk", "Flevoland Polder"],
    correctIndex: 1,
    explanation: "The Delta Works was constructed following the devastating 1953 North Sea flood, including the Oosterscheldekering surge barrier.",
    status: "published"
  },
  {
    id: "eur-m-73",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the 32-kilometer enclosure dam constructed between 1927 and 1932 that turned the saltwater Zuiderzee into the freshwater lake IJsselmeer in the Netherlands?",
    options: ["Oosterscheldekering", "Afsluitdijk", "Brouwersdam", "Haringvlietdam"],
    correctIndex: 1,
    explanation: "The Afsluitdijk closed off the South Sea from the North Sea, paving the way for polder land reclamation.",
    status: "published"
  },
  {
    id: "eur-m-74",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the 12th province of the Netherlands, created entirely out of reclaimed land (polders) from the IJsselmeer in the 20th century?",
    options: ["Zeeland", "Flevoland", "Utrecht", "Overijssel"],
    correctIndex: 1,
    explanation: "Flevoland covers roughly 1,400 square kilometers, the largest artificial island land reclamation in history.",
    status: "published"
  },
  {
    id: "eur-m-75",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the term for a piece of low-lying land reclaimed from the sea or a river and protected by dykes, typical of the Netherlands?",
    options: ["Geest", "Polder", "Waddenzee", "Fen"],
    correctIndex: 1,
    explanation: "Roughly 26% of the Netherlands lies below sea level, protected by dykes and drained polders.",
    status: "published"
  },
  {
    id: "eur-m-76",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the intertidal zone in the southeastern part of the North Sea between the Frisian Islands and the Dutch/German coast, the world's largest unbroken tidal mudflat system?",
    options: ["Zuiderzee", "Wadden Sea (Wattenmeer)", "Dollart", "Jade Bight"],
    correctIndex: 1,
    explanation: "The Wadden Sea is a UNESCO World Heritage site home to millions of migratory wading birds and harbor seals.",
    status: "published"
  },
  {
    id: "eur-m-77",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which island chain extends from the north coast of the Netherlands eastward along the German coast to western Denmark, dividing the North Sea from the Wadden Sea?",
    options: ["Channel Islands", "Frisian Islands (Wadden Islands)", "Faroe Islands", "Hebrides"],
    correctIndex: 1,
    explanation: "The Frisian Islands include Texel, Terschelling (Dutch), Sylt, Borkum (German), and Rømø (Danish).",
    status: "published"
  },
  {
    id: "eur-m-78",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the largest German island in the North Sea, famous for luxury resorts, thatched cottages, and shifting sand dunes?",
    options: ["Heligoland", "Sylt", "F\u00f6hr", "Amrum"],
    correctIndex: 1,
    explanation: "Sylt is connected to the Schleswig-Holstein mainland by the 11-kilometer Hindenburgdamm rail causeway.",
    status: "published"
  },
  {
    id: "eur-m-79",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which small, red-sandstone archipelago in the German Bight of the North Sea was British territory until swapped to Germany in 1890 for Zanzibar?",
    options: ["Sylt", "Heligoland (Helgoland)", "R\u00fcgen", "Borkum"],
    correctIndex: 1,
    explanation: "Heligoland features dramatic red sandstone sea stacks like the 'Lange Anna'.",
    status: "published"
  },
  {
    id: "eur-m-80",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the highest mountain peak in Poland, located in the High Tatras on the border with Slovakia at 2,499 meters?",
    options: ["Babia G\u00f3ra", "Rysy", "Giewont", "Sniezka"],
    correctIndex: 1,
    explanation: "Rysy has three summits; its northwestern peak is the highest elevation in Poland.",
    status: "published"
  },
  {
    id: "eur-m-81",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the highest mountain peak in the entire 1,500-kilometer Carpathian range, located in Slovakia's High Tatras at 2,655 meters?",
    options: ["Rysy", "Gerlachovsky stit (Gerlach Peak)", "Krivan", "Lomnicky stit"],
    correctIndex: 1,
    explanation: "Gerlachovský štít was formerly called Franz Joseph Peak and Stalin Peak.",
    status: "published"
  },
  {
    id: "eur-m-82",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which ancient primeval forest straddling the border between Poland and Belarus is one of the last and largest remaining parts of the European lowland primeval forest, home to European bison?",
    options: ["Black Forest", "Bialowieza Forest", "Bohemian Forest", "Thuringian Forest"],
    correctIndex: 1,
    explanation: "Białowieża Forest preserves Europe's heaviest land mammal, the European bison (wisent).",
    status: "published"
  },
  {
    id: "eur-m-83",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which river flows through western Ukraine, forms part of the Moldova-Ukraine border, and empties into the Black Sea near Odesa?",
    options: ["Dnieper", "Dniester (Dnister) River", "Southern Bug", "Danube"],
    correctIndex: 1,
    explanation: "The Dniester flows 1,362 kilometers, defining the separatist region of Transnistria.",
    status: "published"
  },
  {
    id: "eur-m-84",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the narrow strip of land along the Dniester River that is internationally recognized as part of Moldova but operates as an unrecognised breakaway republic?",
    options: ["Gagauzia", "Transnistria (Pridnestrovie)", "Crimea", "Donbas"],
    correctIndex: 1,
    explanation: "Transnistria declared independence in 1990 and retains Tiraspol as its administrative capital.",
    status: "published"
  },
  {
    id: "eur-m-85",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which autonomous territorial unit in southern Moldova is inhabited primarily by a Christian Turkic-speaking ethnic group?",
    options: ["Transnistria", "Gagauzia", "Bukovina", "Bessarabia"],
    correctIndex: 1,
    explanation: "Gagauzia was granted autonomous constitutional status by Moldova in 1994, centered in Comrat.",
    status: "published"
  },
  {
    id: "eur-m-86",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the historical region of southeastern Europe situated between the Dniester and Prut rivers, forming the core of modern Moldova?",
    options: ["Bessarabia", "Wallachia", "Transylvania", "Moldavia"],
    correctIndex: 0,
    explanation: "Bessarabia was historically ceded between the Ottoman, Russian, and Romanian empires.",
    status: "published"
  },
  {
    id: "eur-m-87",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which historic region of central Romania is completely surrounded by the Carpathian Mountains, famous in folklore for castles like Bran and medieval Saxon towns?",
    options: ["Wallachia", "Transylvania", "Moldavia", "Dobruja"],
    correctIndex: 1,
    explanation: "Transylvania was historic Hungarian and Habsburg territory, settled by Transylvanian Saxons and Székelys.",
    status: "published"
  },
  {
    id: "eur-m-88",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the dramatic mountain highway crossing the southern Carpathians (Făgăraș Mountains) in Romania, built as a military route in the 1970s?",
    options: ["Transalpina", "Transfagarasan Highway (DN7C)", "Grossglockner", "Stelvio Pass"],
    correctIndex: 1,
    explanation: "The Transfăgărășan climbs to 2,042 meters, famous for hairpin turns and views of Bâlea Lake.",
    status: "published"
  },
  {
    id: "eur-m-89",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which gorge along the Danube River forms the border between Serbia and Romania, separating the southern Carpathians from the northern Balkan Mountains?",
    options: ["Tara Gorge", "Iron Gates (Por\u021bile de Fier)", "Bikaz Gorge", "Vikos Gorge"],
    correctIndex: 1,
    explanation: "The Iron Gates features the gigantic 55-meter rock sculpture of Dacian King Decebalus overlooking the Danube.",
    status: "published"
  },
  {
    id: "eur-m-90",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the second-deepest canyon in the world after the Grand Canyon and deepest in Europe, located in Durmitor National Park in Montenegro?",
    options: ["Verdon Gorge", "Tara River Canyon", "Cares Gorge", "Samaria Gorge"],
    correctIndex: 1,
    explanation: "The Tara River Canyon drops up to 1,300 meters along its 82-kilometer course through Montenegro.",
    status: "published"
  },
  {
    id: "eur-m-91",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the winding fjord-like submerged river canyon bay of the Adriatic Sea in southwestern Montenegro?",
    options: ["Bay of Kotor (Boka Kotorska)", "Lim Fjord", "Kvarner Gulf", "Bay of Pag"],
    correctIndex: 0,
    explanation: "The Bay of Kotor is a ria (drowned river valley) surrounded by limestone cliffs, a UNESCO World Heritage site.",
    status: "published"
  },
  {
    id: "eur-m-92",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the famous Croatian national park consisting of 16 terraced cascade lakes joined by waterfalls and natural travertine dams?",
    options: ["Krka National Park", "Plitvice Lakes National Park", "Mljet", "Paklenica"],
    correctIndex: 1,
    explanation: "Plitvice Lakes is world-famous for changing crystal-clear colors (azure, green, grey, blue) due to travertine precipitation.",
    status: "published"
  },
  {
    id: "eur-m-93",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the largest island in Croatia and the Adriatic Sea, connected to the mainland by a 1.4-kilometer concrete arch bridge?",
    options: ["Hvar", "Krk", "Cres", "Brac"],
    correctIndex: 1,
    explanation: "Krk covers 405.78 square kilometers, closely tied with neighboring Cres as the largest Adriatic island.",
    status: "published"
  },
  {
    id: "eur-m-94",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which long Croatian island is celebrated as the sunniest island in the country and famed for lavender fields and Venetian seaside architecture?",
    options: ["Korcula", "Hvar", "Vis", "Rab"],
    correctIndex: 1,
    explanation: "Hvar receives over 2,700 hours of sunshine annually in the central Dalmatian archipelago.",
    status: "published"
  },
  {
    id: "eur-m-95",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the scenic limestone mountain range in northern Bulgaria that runs 550 kilometers west-to-east to the Black Sea, giving its name to the entire peninsula?",
    options: ["Rhodope Mountains", "Balkan Mountains (Stara Planina)", "Rila Mountains", "Pirin Mountains"],
    correctIndex: 1,
    explanation: "The Balkan Mountains (Stara Planina or 'Old Mountain') divide northern and southern Bulgaria.",
    status: "published"
  },
  {
    id: "eur-m-96",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the highest mountain peak in Bulgaria and the entire Balkan Peninsula, located in the Rila Mountains at 2,925 meters?",
    options: ["Vihren", "Musala", "Botev Peak", "Mount Olympus"],
    correctIndex: 1,
    explanation: "Musala rises higher than Mount Olympus (2,917 m) by just 8 meters.",
    status: "published"
  },
  {
    id: "eur-m-97",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the highest mountain peak in Portugal (entire national territory), located on Pico Island in the Azores archipelago at 2,351 meters?",
    options: ["Torre (Serra da Estrela)", "Mount Pico (Ponta do Pico)", "Pico Ruivo", "Pico do Fogo"],
    correctIndex: 1,
    explanation: "Mount Pico is an active stratovolcano rising directly from the North Atlantic Ocean.",
    status: "published"
  },
  {
    id: "eur-m-98",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the highest mountain peak on mainland continental Portugal, located in the Serra da Estrela range at 1,993 meters?",
    options: ["Pico Aneto", "Torre", "Pico Ruivo", "Foia"],
    correctIndex: 1,
    explanation: "Torre is crowned by a 7-meter stone tower erected to bring the summit to an even 2,000 meters elevation.",
    status: "published"
  },
  {
    id: "eur-m-99",
    continent: "Europe",
    difficulty: "Medium",
    question: "Which Portuguese archipelago of nine volcanic islands in the North Atlantic lies roughly 1,400 km west of mainland Portugal on the Mid-Atlantic Ridge?",
    options: ["Madeira", "Azores", "Canary Islands", "Cape Verde"],
    correctIndex: 1,
    explanation: "The Azores sits where the North American, Eurasian, and African tectonic plates meet at a triple junction.",
    status: "published"
  },
  {
    id: "eur-m-100",
    continent: "Europe",
    difficulty: "Medium",
    question: "What is the British Overseas Territory located at the southern tip of the Iberian Peninsula, dominated by a monolithic 426-meter limestone promontory?",
    options: ["Ceuta", "Rock of Gibraltar", "Melilla", "Malta"],
    correctIndex: 1,
    explanation: "The Rock of Gibraltar guards the eastern entrance to the Strait of Gibraltar, famous for Barbary macaque monkeys.",
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
  {
    id: "eur-h-3",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the southernmost point of mainland continental Europe, located in Andalusia, Spain, facing the Strait of Gibraltar?",
    options: ["Cabo da Roca", "Punta de Tarifa", "Cape Matapan", "Cape St. Vincent"],
    correctIndex: 1,
    explanation: "Punta de Tarifa sits at 36°00'N latitude, the southernmost point of the European continent.",
    status: "published"
  },
  {
    id: "eur-h-4",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the westernmost point of the mainland European continent, located in Sintra, Portugal?",
    options: ["Cabo Finisterre", "Cabo da Roca", "Punta de Tarifa", "Cape St. Vincent"],
    correctIndex: 1,
    explanation: "Cabo da Roca sits at longitude 9°30'W, celebrated by poet Luís de Camões as 'where the land ends and the sea begins'.",
    status: "published"
  },
  {
    id: "eur-h-5",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the true northernmost point of the European mainland, located on the Nordkinn Peninsula in Finnmark, Norway?",
    options: ["North Cape (Nordkapp)", "Kinnarodden (Cape Nordkinn)", "Knivskjellodden", "Lindesnes"],
    correctIndex: 1,
    explanation: "While North Cape is on Magerøya island, Kinnarodden is the northernmost point on the actual continental mainland at 71°08'N.",
    status: "published"
  },
  {
    id: "eur-h-6",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the southernmost point of mainland Greece and the Balkan Peninsula, anciently considered the entrance to Hades?",
    options: ["Cape Sounion", "Cape Matapan (Cape Tainaron)", "Cape Maleas", "Cape Akritas"],
    correctIndex: 1,
    explanation: "Cape Matapan sits at the tip of the Mani Peninsula at 36°23'N latitude.",
    status: "published"
  },
  {
    id: "eur-h-7",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which extraordinary border enclave town in the Netherlands contains 22 separate Belgian enclaves and 8 Dutch counter-enclaves?",
    options: ["Ll\u00edvia", "Baarle-Nassau / Baarle-Hertog", "Campione d'Italia", "B\u00fcsingen am Hochrhein"],
    correctIndex: 1,
    explanation: "Baarle-Nassau (Dutch) and Baarle-Hertog (Belgian) form the most complex border enclave maze in the world.",
    status: "published"
  },
  {
    id: "eur-h-8",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which Spanish town is an exclave completely surrounded by French territory (Pyrénées-Orientales département)?",
    options: ["Ll\u00edvia", "Ceuta", "Melilla", "Olivenza"],
    correctIndex: 0,
    explanation: "Llívia remained Spanish under the 1659 Treaty of the Pyrenees because the treaty ceded only 'villages', and Llívia held the legal status of a 'town'.",
    status: "published"
  },
  {
    id: "eur-h-9",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which German town on the Upper Rhine is an enclave completely surrounded by the Swiss canton of Schaffhausen?",
    options: ["Campione d'Italia", "B\u00fcsingen am Hochrhein", "Jungholz", "Kleinwalsertal"],
    correctIndex: 1,
    explanation: "Büsingen am Hochrhein is politically part of Baden-Württemberg, Germany, but economically part of the Swiss customs area.",
    status: "published"
  },
  {
    id: "eur-h-10",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which Italian municipality and exclave is completely surrounded by the Swiss canton of Ticino along Lake Lugano?",
    options: ["Campione d'Italia", "B\u00fcsingen", "Livigno", "Clivio"],
    correctIndex: 0,
    explanation: "Campione d'Italia is situated roughly one kilometer from the main Italian border across Lake Lugano.",
    status: "published"
  },
  {
    id: "eur-h-11",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the name of the discontinued Belgian railway line whose trackbed remains sovereign Belgian territory, creating five German enclaves in North Rhine-Westphalia?",
    options: ["Vennbahn", "Hasselt Line", "Eifelbahn", "Ardennenbahn"],
    correctIndex: 0,
    explanation: "Under the 1919 Treaty of Versailles, the Vennbahn railway strip was ceded to Belgium, creating enclaves like Rötgener Wald.",
    status: "published"
  },
  {
    id: "eur-h-12",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the deepest canyon in France and Europe's most famous limestone river canyon, located in Provence-Alpes-Côte d'Azur?",
    options: ["Gorges du Tarn", "Verdon Gorge (Gorges du Verdon)", "Gorges de l'Ard\u00e8che", "Canyon d'A\u00f1isclo"],
    correctIndex: 1,
    explanation: "The Verdon Gorge drops up to 700 meters over a length of 25 kilometers, famous for its turquoise-green waters.",
    status: "published"
  },
  {
    id: "eur-h-13",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which tidal channel in Greece between the island of Euboea and mainland Boeotia is famous for rapid tidal currents that reverse direction several times a day?",
    options: ["Corinth Canal", "Euripus Strait", "Rion-Antirion Strait", "Chalcis Channel"],
    correctIndex: 1,
    explanation: "The Euripus Strait changes direction roughly four times daily at lunar tides, a phenomenon that fascinated Aristotle.",
    status: "published"
  },
  {
    id: "eur-h-14",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the famous subglacial volcano in south-central Iceland whose massive 2010 ash eruption disrupted air travel across Europe for weeks?",
    options: ["Hekla", "Eyjafjallaj\u00f6kull", "Katla", "B\u00e1r\u00f0arbunga"],
    correctIndex: 1,
    explanation: "Eyjafjallajökull's subglacial explosive eruption generated fine silicate ash clouds that grounded over 100,000 European flights.",
    status: "published"
  },
  {
    id: "eur-h-15",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the most active subglacial volcano in Iceland, located beneath the Vatnajökull ice cap, known for periodic jökulhlaup (glacial outburst floods)?",
    options: ["Askja", "Gr\u00edmsv\u00f6tn", "Krafla", "Surtsey"],
    correctIndex: 1,
    explanation: "Grímsvötn has a geothermal caldera beneath 400 meters of ice, regularly melting subglacial water lakes that burst across the Skeiðarársandur outwash plain.",
    status: "published"
  },
  {
    id: "eur-h-16",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the volcanic island formed off the southern coast of Iceland between 1963 and 1967, preserved exclusively for scientific observation of primary succession?",
    options: ["Heimaey", "Surtsey", "Grimsey", "Eldey"],
    correctIndex: 1,
    explanation: "Surtsey emerged from submarine eruptions on the Mid-Atlantic Ridge, protected as a pristine ecological laboratory.",
    status: "published"
  },
  {
    id: "eur-h-17",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the UNESCO World Heritage national park in southwestern Iceland where the Eurasian and North American tectonic plates visibly pull apart at the Almannagjá fissure?",
    options: ["Vatnaj\u00f6kull", "\u00deingvellir (Thingvellir) National Park", "Snaefellsj\u00f6kull", "Landmannalaugar"],
    correctIndex: 1,
    explanation: "Þingvellir is the historic site of Iceland's Alþingi parliament (founded 930 CE) and a geological continental rift valley.",
    status: "published"
  },
  {
    id: "eur-h-18",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the most powerful waterfall in Europe by water discharge volume, located in northeastern Iceland on the Jökulsá á Fjöllum river?",
    options: ["Gullfoss", "Dettifoss", "Sk\u00f3gafoss", "Seljalandsfoss"],
    correctIndex: 1,
    explanation: "Dettifoss drops 44 meters across a width of 100 meters with an average water discharge of over 193 cubic meters per second.",
    status: "published"
  },
  {
    id: "eur-h-19",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the deepest lake in Europe, dropping to a maximum depth of 514 meters in Innlandet county, Norway?",
    options: ["Lake Garda", "Hornindalsvatnet", "Lake Mj\u00f8sa", "Lake Como"],
    correctIndex: 1,
    explanation: "Hornindalsvatnet's surface sits 53 meters above sea level, meaning its bottom is 461 meters below sea level (cryptodepression).",
    status: "published"
  },
  {
    id: "eur-h-20",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the largest lake in Norway by surface area, situated north of Oslo?",
    options: ["Hornindalsvatnet", "Mj\u00f8sa", "Femunden", "R\u00f8ssvatnet"],
    correctIndex: 1,
    explanation: "Lake Mjøsa covers 365 square kilometers and is home to the historic 1856 paddle steamer Skibladner.",
    status: "published"
  },
  {
    id: "eur-h-21",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the vast subarctic upland plateau covering roughly 10,000 square kilometers in southern Norway, the largest mountain plateau in Europe?",
    options: ["Jotunheimen", "Hardangervidda", "Dovrefjell", "Rondane"],
    correctIndex: 1,
    explanation: "Hardangervidda hosts the largest wild reindeer herds in Europe, characterized by an alpine barren tundra landscape.",
    status: "published"
  },
  {
    id: "eur-h-22",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the dramatic vertical rock wall in the Møre og Romsdal valley of Norway that is the tallest vertical rock face in Europe (1,000 meters)?",
    options: ["Kjerag", "Troll Wall (Trollveggen)", "Preikestolen", "Stetind"],
    correctIndex: 1,
    explanation: "Trollveggen is a notorious big-wall climbing destination in the Romsdalen valley with a 50-meter overhang at its crest.",
    status: "published"
  },
  {
    id: "eur-h-23",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the scenic mountain pass in western Norway famous for eleven hairpin bends and a 9% gradient climbing between Åndalsnes and Valldal?",
    options: ["Sognefjellet", "Trollstigen (The Troll's Ladder)", "Stalheimskleiva", "Aurlandsfjellet"],
    correctIndex: 1,
    explanation: "Trollstigen is a famous Norwegian engineering feat crossing the Stigfossen waterfall.",
    status: "published"
  },
  {
    id: "eur-h-24",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the deep strait separating the Danish island of Zealand from the Swedish province of Scania, crossed by the combined road and rail Øresund Bridge?",
    options: ["Great Belt", "The Sound (\u00d8resund)", "Little Belt", "Kattegat"],
    correctIndex: 1,
    explanation: "The Øresund connects the Baltic Sea to the Kattegat, traversed by the 16-kilometer Øresund link.",
    status: "published"
  },
  {
    id: "eur-h-25",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the central strait separating the Danish islands of Funen and Zealand, crossed by the 18-kilometer Great Belt Fixed Link?",
    options: ["The Sound", "Great Belt (Storeb\u00e6lt)", "Little Belt (Lilleb\u00e6lt)", "Fehmarn Belt"],
    correctIndex: 1,
    explanation: "The Great Belt carries the majority of commercial ship tonnage traveling between the Baltic and the North Sea.",
    status: "published"
  },
  {
    id: "eur-h-26",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the narrowest strait of the Danish straits, separating the island of Funen from the Jutland Peninsula?",
    options: ["Great Belt", "Little Belt (Lilleb\u00e6lt)", "\u00d8resund", "Limfjord"],
    correctIndex: 1,
    explanation: "The Little Belt is just 800 meters wide at its narrowest point between Middelfart and Fredericia.",
    status: "published"
  },
  {
    id: "eur-h-27",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which shallow strait between the German island of Fehmarn and the Danish island of Lolland is currently being crossed by the world's longest immersed tunnel?",
    options: ["The Sound", "Fehmarn Belt (Femern B\u00e6lt)", "Great Belt", "Kiel Fjord"],
    correctIndex: 1,
    explanation: "The 18-kilometer Fehmarnbelt Fixed Link will directly connect Hamburg and Copenhagen by road and high-speed rail.",
    status: "published"
  },
  {
    id: "eur-h-28",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which sea strait connects the North Sea to the Kattegat between southeastern Norway, southwestern Sweden, and northern Jutland (Denmark)?",
    options: ["Kattegat", "Skagerrak", "\u00d8resund", "Limfjord"],
    correctIndex: 1,
    explanation: "The Skagerrak contains the Norwegian Trench, dropping over 700 meters deep off southern Norway.",
    status: "published"
  },
  {
    id: "eur-h-29",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the sandy northernmost tip of Denmark's Jutland Peninsula where the North Sea (Skagerrak) and Baltic Sea (Kattegat) meet in visible colliding waves?",
    options: ["Hirtshals", "Grenen (Skagen)", "Bl\u00e5vandshuk", "Hanstholm"],
    correctIndex: 1,
    explanation: "At Grenen spit, differing water densities and opposing currents prevent the waters of the two seas from smoothly blending.",
    status: "published"
  },
  {
    id: "eur-h-30",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the largest island in Germany by area, located in the Baltic Sea off Pomerania?",
    options: ["Usedom", "R\u00fcgen", "Fehmarn", "Sylt"],
    correctIndex: 1,
    explanation: "Rügen covers 926 square kilometers, famous for white chalk cliffs and seaside resort architecture.",
    status: "published"
  },
  {
    id: "eur-h-31",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which Baltic Sea island is divided between Germany (Mecklenburg-Vorpommern) and Poland (West Pomeranian Voivodeship)?",
    options: ["R\u00fcgen", "Usedom (Uznam)", "Wolin", "Bornholm"],
    correctIndex: 1,
    explanation: "Usedom is famous for its historic 'Imperial Spas' (Kaiserbäder) like Ahlbeck, Heringsdorf, and Świnoujście.",
    status: "published"
  },
  {
    id: "eur-h-32",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the 98-kilometer narrow, curved sandspit dune that separates the Curonian Lagoon from the Baltic Sea coast, shared by Lithuania and Russia (Kaliningrad)?",
    options: ["Hel Peninsula", "Curonian Spit", "Vistula Spit", "Apsheron"],
    correctIndex: 1,
    explanation: "The Curonian Spit is a UNESCO World Heritage site known for the Parnidis mobile sand dune, nicknamed the 'Lithuanian Sahara'.",
    status: "published"
  },
  {
    id: "eur-h-33",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the 35-kilometer narrow sandspit peninsula in northern Poland separating the Bay of Puck from the open Baltic Sea?",
    options: ["Curonian Spit", "Hel Peninsula", "Vistula Spit", "Wolin Spit"],
    correctIndex: 1,
    explanation: "The Hel Peninsula narrows to just 100 meters at points, a major Polish kitesurfing destination.",
    status: "published"
  },
  {
    id: "eur-h-34",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which Russian oblast is a Baltic coastal exclave completely detached from mainland Russia, bordered by Poland and Lithuania?",
    options: ["Pskov Oblast", "Kaliningrad Oblast", "Novgorod Oblast", "Smolensk Oblast"],
    correctIndex: 1,
    explanation: "Kaliningrad (formerly Königsberg in East Prussia) is Russia's only ice-free Baltic port and home to the Baltic Fleet.",
    status: "published"
  },
  {
    id: "eur-h-35",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which mountain massif in the High Tatras contains the highest peak in Poland and Slovakia, formed of crystalline granite horst blocks?",
    options: ["Low Tatras", "Tatra Mountains (High Tatras)", "Pieniny", "Beskids"],
    correctIndex: 1,
    explanation: "The High Tatras form the highest elevation segment of the 1,500-kilometer Carpathian arch.",
    status: "published"
  },
  {
    id: "eur-h-36",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the picturesque limestone mountain range along the Dunajec River on the Poland-Slovakia border, famous for traditional wooden raft gorge trips?",
    options: ["Bieszczady", "Pieniny Mountains", "Gorce", "High Tatras"],
    correctIndex: 1,
    explanation: "The Pieniny range features Trzy Korony (Three Crowns peak) and the sheer limestone Dunajec River Gorge.",
    status: "published"
  },
  {
    id: "eur-h-37",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which mountain range along the Czech-Polish border contains Sněžka, the highest peak in the Czech Republic at 1,603 meters?",
    options: ["Erzgebirge (Ore Mountains)", "Krkono\u0161e (Giant Mountains)", "\u0160umava (Bohemian Forest)", "Beskids"],
    correctIndex: 1,
    explanation: "Krkonoše is the source of the Elbe River (Labe), preserving subarctic peat bogs from Pleistocene glaciations.",
    status: "published"
  },
  {
    id: "eur-h-38",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which mountain range forms the natural northwestern border between the Czech Republic and the German state of Saxony, historically rich in silver and uranium mines?",
    options: ["Bohemian Forest", "Ore Mountains (Kru\u0161n\u00e9 hory / Erzgebirge)", "Sudetes", "Lusatian Mountains"],
    correctIndex: 1,
    explanation: "The Erzgebirge mining region was inscribed as a UNESCO World Heritage cultural landscape in 2019.",
    status: "published"
  },
  {
    id: "eur-h-39",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which heavily forested mountain range forms the southwestern border of the Czech Republic with Germany (Bavarian Forest) and Austria?",
    options: ["Jizera Mountains", "\u0160umava (Bohemian Forest)", "Eagle Mountains", "Hrub\u00fd Jesen\u00edk"],
    correctIndex: 1,
    explanation: "The Bohemian Forest and adjacent Bavarian Forest National Park together form the 'Green Roof of Europe'.",
    status: "published"
  },
  {
    id: "eur-h-40",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the second-longest river in the Iberian Peninsula, flowing from the Serra de Albarracín through central Spain and Portugal into the Atlantic at Porto?",
    options: ["Tagus", "Douro River", "Guadiana", "Ebro"],
    correctIndex: 1,
    explanation: "The Douro flows 897 kilometers, forming 112 kilometers of international border between Spain and Portugal.",
    status: "published"
  },
  {
    id: "eur-h-41",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which river in southwestern Iberia forms a long stretch of the border between Spain and Portugal before emptying into the Gulf of Cádiz at Ayamonte?",
    options: ["Tagus", "Guadiana River", "Guadalquivir", "Sado"],
    correctIndex: 1,
    explanation: "The Guadiana is famous for the Alqueva Dam in Portugal, which created the largest artificial lake in Western Europe.",
    status: "published"
  },
  {
    id: "eur-h-42",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the massive reservoir in the Alentejo region of Portugal on the Guadiana River that is the largest artificial lake in Western Europe?",
    options: ["Lake Volta", "Alqueva Reservoir", "Lake Serre-Pon\u00e7on", "Kardzhali Reservoir"],
    correctIndex: 1,
    explanation: "The Alqueva Dam reservoir covers 250 square kilometers with a capacity of 4.15 billion cubic meters.",
    status: "published"
  },
  {
    id: "eur-h-43",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the primary wine-growing river valley in southwestern Germany, flowing through Stuttgart before joining the Rhine at Mannheim?",
    options: ["Main", "Neckar River", "Ruhr", "Moselle"],
    correctIndex: 1,
    explanation: "The Neckar flows 362 kilometers through Baden-Württemberg, famous for castles like Heidelberg.",
    status: "published"
  },
  {
    id: "eur-h-44",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which river flows from the Black Forest through northern Switzerland to join the Rhine at Koblenz (Switzerland), draining most of the Swiss Alps?",
    options: ["Reuss", "Aare River", "Limmat", "Rhone"],
    correctIndex: 1,
    explanation: "The Aare is the longest river running entirely within Switzerland, flowing through Bern and Lakes Thun and Brienz.",
    status: "published"
  },
  {
    id: "eur-h-45",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the classic Alpine gorge in the Bernese Oberland of Switzerland with 72 roaring waterfalls, which inspired J.R.R. Tolkien's valley of Rivendell?",
    options: ["Engadin", "Lauterbrunnen Valley", "Val M\u00fcstair", "Simmental"],
    correctIndex: 1,
    explanation: "Lauterbrunnen is a classic U-shaped glacial valley framed by 300-meter cliffs and the Staubbach Fall.",
    status: "published"
  },
  {
    id: "eur-h-46",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which subterranean waterfall inside a mountain in the Lauterbrunnen Valley drains the glaciers of Eiger, Mönch, and Jungfrau carrying up to 20,000 liters of water per second?",
    options: ["Staubbach Fall", "Tr\u00fcmmelbach Falls", "Giessbach Falls", "Reichenbach Falls"],
    correctIndex: 1,
    explanation: "Trümmelbach Falls consists of ten glacier-fed waterfalls carved inside a limestone mountain, accessed by an underground funicular.",
    status: "published"
  },
  {
    id: "eur-h-47",
    continent: "Europe",
    difficulty: "Hard",
    question: "Near which Swiss town in the Bernese Oberland did Sherlock Holmes famously plunge to his fictional death at the Reichenbach Falls?",
    options: ["Interlaken", "Meiringen", "Grindelwald", "Brienz"],
    correctIndex: 1,
    explanation: "Sir Arthur Conan Doyle set the fateful struggle between Holmes and Professor Moriarty at the 120-meter Reichenbach Falls.",
    status: "published"
  },
  {
    id: "eur-h-48",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the high-altitude pass in the Rhaetian Alps connecting Bormio in Lombardy to Prato allo Stelvio in South Tyrol, the highest paved pass in the Eastern Alps (2,757 m)?",
    options: ["Gavia Pass", "Stelvio Pass (Passo dello Stelvio)", "Pordoi Pass", "Sella Pass"],
    correctIndex: 1,
    explanation: "The Stelvio Pass features 48 numbered hairpin turns on the northern ramp, climbing to 2,757 meters.",
    status: "published"
  },
  {
    id: "eur-h-49",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which autonomous province in northern Italy is predominantly German-speaking, located in the southern Alps around Bolzano/Bozen?",
    options: ["Trentino", "South Tyrol (Alto Adige)", "Friuli", "Aosta Valley"],
    correctIndex: 1,
    explanation: "South Tyrol was ceded from Austria to Italy after World War I, retaining an autonomous bilingual statute.",
    status: "published"
  },
  {
    id: "eur-h-50",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the smallest and least populous region of Italy, situated in the northwestern Alps bordering France and Switzerland, where French is co-official?",
    options: ["Trentino", "Aosta Valley (Valle d'Aosta)", "Molise", "Liguria"],
    correctIndex: 1,
    explanation: "The Aosta Valley is surrounded by Europe's highest massifs: Mont Blanc, the Matterhorn, Monte Rosa, and Gran Paradiso.",
    status: "published"
  },
  {
    id: "eur-h-51",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the highest mountain peak situated entirely within Italian territory, rising to 4,061 meters in the Graian Alps?",
    options: ["Mont Blanc", "Gran Paradiso", "Monte Rosa", "Ortler"],
    correctIndex: 1,
    explanation: "Gran Paradiso is the centerpiece of Italy's oldest national park, created in 1922 to save the Alpine ibex from extinction.",
    status: "published"
  },
  {
    id: "eur-h-52",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the highest mountain peak in the Ortler Alps and the entire former Austro-Hungarian County of Tyrol, rising to 3,905 meters in South Tyrol, Italy?",
    options: ["Gran Paradiso", "Ortler (Ortles)", "K\u00f6nigsspitze", "Marmolada"],
    correctIndex: 1,
    explanation: "The Ortler was the highest peak in the Austrian Empire until the border shifted south in 1919.",
    status: "published"
  },
  {
    id: "eur-h-53",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the highest mountain peak in the Dolomites of northeastern Italy, crowned by the only large glacier in the Dolomites at 3,343 meters?",
    options: ["Tre Cime di Lavaredo", "Marmolada", "Civetta", "Antelao"],
    correctIndex: 1,
    explanation: "Marmolada ('Queen of the Dolomites') features a sheer 800-meter south limestone wall and the Marmolada Glacier.",
    status: "published"
  },
  {
    id: "eur-h-54",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the iconic trio of distinctive battlement-like limestone peaks in the Sexten Dolomites of northeastern Italy?",
    options: ["Pellegrino", "Tre Cime di Lavaredo (Drei Zinnen)", "Cinque Torri", "Pale di San Martino"],
    correctIndex: 1,
    explanation: "Tre Cime di Lavaredo (Cima Grande, Cima Ovest, Cima Piccola) is one of the most famous mountain silhouettes in the Alps.",
    status: "published"
  },
  {
    id: "eur-h-55",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the world-renowned karst cave system in southwestern Slovenia featuring 24 kilometers of passages and the endemic blind olm (Proteus anguinus)?",
    options: ["\u0160kocjan Caves", "Postojna Cave", "Vilenica Cave", "Kri\u017ena Cave"],
    correctIndex: 1,
    explanation: "Postojna Cave has operated an underground passenger railway since 1872 to transport visitors into its stalactite chambers.",
    status: "published"
  },
  {
    id: "eur-h-56",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which UNESCO karst cave system in Slovenia features one of the largest known underground river canyons in the world, carved by the Reka River?",
    options: ["Postojna Cave", "\u0160kocjan Caves", "Planina Cave", "Vrtiglavica"],
    correctIndex: 1,
    explanation: "The underground canyon in Škocjan Caves spans 2.6 kilometers in length, with footbridges suspended 50 meters above the roaring subterranean river.",
    status: "published"
  },
  {
    id: "eur-h-57",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the classic karst limestone plateau region spanning southwestern Slovenia and northeastern Italy that gave its name to all 'karst' topography worldwide?",
    options: ["Julian Alps", "The Kras (Carso / Karst Plateau)", "Dinaric Alps", "Istria"],
    correctIndex: 1,
    explanation: "The German word Karst derives from the Slovenian Kras, referring to terrain shaped by the dissolution of soluble carbonate rocks.",
    status: "published"
  },
  {
    id: "eur-h-58",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the famous intermittent lake in southern Slovenia that expands to 38 square kilometers during wet seasons but completely vanishes through sinkholes in dry months?",
    options: ["Lake Bled", "Lake Cerknica (Cerkni\u0161ko jezero)", "Lake Bohinj", "Lake Pal\u010dje"],
    correctIndex: 1,
    explanation: "Lake Cerknica has been studied since the 17th century by polymath Janez Vajkard Valvasor as a classic polje karst phenomenon.",
    status: "published"
  },
  {
    id: "eur-h-59",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the highest mountain peak in Slovenia and the Julian Alps, featured on the Slovenian national flag and coat of arms at 2,864 meters?",
    options: ["\u0160pik", "Triglav", "Mangart", "Jalovec"],
    correctIndex: 1,
    explanation: "Triglav ('Three Heads') is Slovenia's national symbol, crowning Triglav National Park.",
    status: "published"
  },
  {
    id: "eur-h-60",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the picturesque glacial lake in northwestern Slovenia with a tear-shaped island housing the Church of the Assumption, overlooked by a medieval clifftop castle?",
    options: ["Lake Bohinj", "Lake Bled", "Lake Cerknica", "Lake Jasna"],
    correctIndex: 1,
    explanation: "Lake Bled is world-renowned for traditional wooden pletna boats and emerald-green glacial waters.",
    status: "published"
  },
  {
    id: "eur-h-61",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the largest permanent natural lake in Slovenia, located inside Triglav National Park in the Bohinj Valley?",
    options: ["Lake Bled", "Lake Bohinj", "Lake Krn", "Lake Plansarsko"],
    correctIndex: 1,
    explanation: "Lake Bohinj covers 3.18 square kilometers, fed by the Savica waterfall.",
    status: "published"
  },
  {
    id: "eur-h-62",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the triangular peninsula in the northern Adriatic Sea shared by Croatia, Slovenia, and Italy, famous for Roman ruins in Pula and truffles?",
    options: ["Pelje\u0161ac", "Istria", "Dalmatia", "Kvarner"],
    correctIndex: 1,
    explanation: "Istria is the largest peninsula in the Adriatic Sea, heavily influenced by historical Venetian and Habsburg culture.",
    status: "published"
  },
  {
    id: "eur-h-63",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the highest mountain peak in Greece after Mount Olympus, located in the Pindus range at 2,637 meters?",
    options: ["Giona", "Smolikas", "Voras", "Parnassus"],
    correctIndex: 1,
    explanation: "Mount Smolikas is formed of serpentine ophiolite rock, rising above the Aoos and Voidomatis valleys in Epirus.",
    status: "published"
  },
  {
    id: "eur-h-64",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the sacred mountain peak overlooking the Oracle of Delphi in central Greece, traditionally associated with Apollo and the Muses at 2,457 meters?",
    options: ["Mount Olympus", "Mount Parnassus", "Mount Helicon", "Mount Cithaeron"],
    correctIndex: 1,
    explanation: "Mount Parnassus towers above Delphi, offering views of olive groves stretching to the Gulf of Corinth.",
    status: "published"
  },
  {
    id: "eur-h-65",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which active volcanic island group in the Aegean Sea was the source of the Methana volcanic peninsula, Milos, and Santorini, forming the South Aegean Volcanic Arc?",
    options: ["Cyclades Arc", "South Aegean Volcanic Arc", "Hellenic Trench", "Sporades"],
    correctIndex: 1,
    explanation: "The South Aegean Volcanic Arc was created by the subduction of the African Plate beneath the Aegean Sea Plate.",
    status: "published"
  },
  {
    id: "eur-h-66",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the deep oceanic trench system in the Ionian and Mediterranean seas south of Greece that contains the Calypso Deep, the deepest point in the Mediterranean Sea?",
    options: ["Pliny Trench", "Hellenic Trench", "Strabo Trench", "Ionian Trench"],
    correctIndex: 1,
    explanation: "The Hellenic Trench marks the convergence zone between the African and Aegean plates, dropping to 5,267 meters at Calypso Deep.",
    status: "published"
  },
  {
    id: "eur-h-67",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the deepest point in the Mediterranean Sea, measuring 5,267 meters below sea level in the Ionian Sea southwest of Pylos, Greece?",
    options: ["Matapan Deep", "Calypso Deep", "Vavilov Deep", "Sirena Deep"],
    correctIndex: 1,
    explanation: "The Calypso Deep was first descended in 1965 by Captain Gérard Huet and Dr. Charles 'Chuck' Drake in the bathyscaphe Archimède.",
    status: "published"
  },
  {
    id: "eur-h-68",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which ancient volcanic caldera lake in Lazio, Italy, is the largest volcanic lake in Europe, covering 113.5 square kilometers?",
    options: ["Lake Bracciano", "Lake Bolsena", "Lake Albano", "Lake Nemi"],
    correctIndex: 1,
    explanation: "Lake Bolsena occupies a caldera created roughly 370,000 years ago during the collapse of the Vulsini volcanic complex.",
    status: "published"
  },
  {
    id: "eur-h-69",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which volcanic crater lake in the Alban Hills south of Rome has served as the summer residence of the Pope at Castel Gandolfo since the 17th century?",
    options: ["Lake Nemi", "Lake Albano", "Lake Bracciano", "Lake Bolsena"],
    correctIndex: 1,
    explanation: "Lake Albano sits in an elliptical volcanic crater featuring an ancient Roman emissary tunnel cut in 398 BCE.",
    status: "published"
  },
  {
    id: "eur-h-70",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which volcanic lake in the Alban Hills south of Rome was famous for the colossal ceremonial pleasure barges of Roman Emperor Caligula recovered in the 1930s?",
    options: ["Lake Albano", "Lake Nemi", "Lake Bolsena", "Lake Vico"],
    correctIndex: 1,
    explanation: "Lake Nemi ('Mirror of Diana') hosted two gigantic floating palace ships built for Emperor Caligula.",
    status: "published"
  },
  {
    id: "eur-h-71",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the famous geological fault zone that cuts diagonally across Scotland from Fort William to Inverness, containing Loch Ness and the Caledonian Canal?",
    options: ["Highland Boundary Fault", "Great Glen Fault", "Southern Uplands Fault", "Moine Thrust"],
    correctIndex: 1,
    explanation: "The Great Glen is a major strike-slip fault line that divides the Northwest Highlands from the Grampian Mountains.",
    status: "published"
  },
  {
    id: "eur-h-72",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the 97-kilometer canal engineered by Thomas Telford that connects the Atlantic Ocean at Corpach with the North Sea at Inverness via the Great Glen?",
    options: ["Crinan Canal", "Caledonian Canal", "Forth and Clyde Canal", "Union Canal"],
    correctIndex: 1,
    explanation: "The Caledonian Canal opened in 1822, linking Loch Lochy, Loch Oich, and Loch Ness.",
    status: "published"
  },
  {
    id: "eur-h-73",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which island archipelago located 64 km west of the Outer Hebrides in the North Atlantic was evacuated in 1930 due to extreme isolation and hardship?",
    options: ["Shetland", "St Kilda", "Flannan Isles", "Rockall"],
    correctIndex: 1,
    explanation: "St Kilda is a dual UNESCO site recognized for extraordinary seabird colonies (gannets, puffins) and ancient cleit drystone structures.",
    status: "published"
  },
  {
    id: "eur-h-74",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the isolated, uninhabited granite islet in the North Atlantic Ocean roughly 370 km west of the Outer Hebrides that was formally annexed by the UK in 1955?",
    options: ["St Kilda", "Rockall", "Skerryvore", "Tory Island"],
    correctIndex: 1,
    explanation: "Rockall is an eroded volcanic plug rising 17 meters above the stormy Atlantic, surrounded by contested fishery and oil rights.",
    status: "published"
  },
  {
    id: "eur-h-75",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which group of islands in the English Channel near the coast of Normandy are British Crown dependencies but not part of the United Kingdom?",
    options: ["Isle of Wight", "Channel Islands (Jersey and Guernsey)", "Isle of Man", "Scilly Isles"],
    correctIndex: 1,
    explanation: "The Channel Islands were part of the Duchy of Normandy before 1066 and retain separate legal and fiscal jurisdictions.",
    status: "published"
  },
  {
    id: "eur-h-76",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which British Crown dependency in the Irish Sea between Great Britain and Ireland is famous for the Tynwald, the oldest continuous parliamentary body in the world?",
    options: ["Anglesey", "Isle of Man", "Arran", "Lundy"],
    correctIndex: 1,
    explanation: "The Isle of Man has been governed by Tynwald since at least 979 CE, retaining its own currency and Manx Celtic culture.",
    status: "published"
  },
  {
    id: "eur-h-77",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the archipelago of roughly 140 small islands located 45 kilometers off the southwestern tip of Cornwall in England, warmed by the Gulf Stream?",
    options: ["Channel Islands", "Isles of Scilly", "Lundy", "Farne Islands"],
    correctIndex: 1,
    explanation: "The Isles of Scilly feature a subtropical microclimate where palm trees and exotic sub-tropical flowers thrive at Tresco Abbey Garden.",
    status: "published"
  },
  {
    id: "eur-h-78",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the high-tide island and medieval Benedictine abbey perched on a rocky granite islet off the coast of Normandy, France, experiencing 14-meter tides?",
    options: ["St Michael's Mount", "Mont-Saint-Michel", "Noirmoutier", "\u00cele de R\u00e9"],
    correctIndex: 1,
    explanation: "Mont-Saint-Michel is cut off from the mainland at highest spring tides, connected by an elevated causeway across tidal mudflats.",
    status: "published"
  },
  {
    id: "eur-h-79",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the tidal island in Mount's Bay, Cornwall, England, crowned by a medieval castle and church, mirrored culturally with Mont-Saint-Michel in France?",
    options: ["Mont-Saint-Michel", "St Michael's Mount", "Lindisfarne", "Lundy"],
    correctIndex: 1,
    explanation: "St Michael's Mount is connected to Marazion by a granite causeway walkable only between mid- and low-tide.",
    status: "published"
  },
  {
    id: "eur-h-80",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the tidal island off the coast of Northumberland in northeastern England, also known as Holy Island, founded by Saint Aidan in 635 CE?",
    options: ["Iona", "Lindisfarne", "Farne Islands", "Coquet Island"],
    correctIndex: 1,
    explanation: "Lindisfarne was the historic home of the Lindisfarne Gospels, raided by Vikings in 793 CE.",
    status: "published"
  },
  {
    id: "eur-h-81",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the highest mountain peak in the Carpathian Mountains within Ukraine, located in the Chornohora range at 2,061 meters?",
    options: ["Pip Ivan", "Hoverla (Mount Goverla)", "Petros", "Rebra"],
    correctIndex: 1,
    explanation: "Hoverla is the national mountain of Ukraine, a popular trekking destination in the Eastern Carpathians.",
    status: "published"
  },
  {
    id: "eur-h-82",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the prominent mountain range in the Crimean Peninsula that drops steeply into the Black Sea, sheltering the historic resort of Yalta?",
    options: ["Pontic Mountains", "Crimean Mountains (Yayly)", "Caucasus", "Dobruja Hills"],
    correctIndex: 1,
    explanation: "The Crimean Mountains feature limestone tableland plateaus (yaylas) that shield the southern Crimean coast, giving it a Mediterranean microclimate.",
    status: "published"
  },
  {
    id: "eur-h-83",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the narrow shallow strait connecting the Black Sea to the Sea of Azov between the Crimean Peninsula and the Taman Peninsula of Russia?",
    options: ["Bosphorus", "Kerch Strait", "Dardanelles", "Chongar Strait"],
    correctIndex: 1,
    explanation: "The Kerch Strait is approximately 3 to 15 kilometers wide, crossed by the Crimean Bridge.",
    status: "published"
  },
  {
    id: "eur-h-84",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which major river flowing through Russia, Belarus, and Ukraine into the Black Sea was historically the primary waterway on the 'Route from the Varangians to the Greeks'?",
    options: ["Volga", "Dnieper (Dnipro) River", "Don", "Dniester"],
    correctIndex: 1,
    explanation: "The Dnieper flows 2,201 kilometers past Smolensk, Kyiv, and Dnipro into the Black Sea.",
    status: "published"
  },
  {
    id: "eur-h-85",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the fifth-longest river in Europe, flowing through western Russia past Voronezh into the Sea of Azov at Rostov-on-Don?",
    options: ["Volga", "Don River", "Dnieper", "Kama"],
    correctIndex: 1,
    explanation: "The Don River flows 1,870 kilometers through the Russian steppe, connected to the Volga by the Volga-Don Canal.",
    status: "published"
  },
  {
    id: "eur-h-86",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the 101-kilometer canal in Russia connecting the Volga River at Volgograd to the Don River at Kalach-na-Donu?",
    options: ["White Sea-Baltic Canal", "Volga-Don Canal", "Moscow Canal", "Volga-Baltic Waterway"],
    correctIndex: 1,
    explanation: "The Volga-Don Canal opened in 1952, linking the landlocked Caspian Sea to the world ocean network via the Azov and Black seas.",
    status: "published"
  },
  {
    id: "eur-h-87",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the 227-kilometer shipping canal constructed using forced Gulag labor between 1931 and 1933, linking the White Sea to Lake Onega in northwestern Russia?",
    options: ["Volga-Baltic Waterway", "White Sea\u2013Baltic Canal (Belomorkanal)", "Moscow Canal", "Kiel Canal"],
    correctIndex: 1,
    explanation: "The Belomorkanal opened in 1933, notorious for severe worker mortality and shallow draft (roughly 3.5 meters).",
    status: "published"
  },
  {
    id: "eur-h-88",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the large peninsula in far northwestern Russia between the White Sea and the Barents Sea, home to the ice-free naval port of Murmansk?",
    options: ["Kanin Peninsula", "Kola Peninsula", "Yamal Peninsula", "Chukchi Peninsula"],
    correctIndex: 1,
    explanation: "The Kola Peninsula lies almost entirely within the Arctic Circle, warmed along its northern coast by the Norwegian Current.",
    status: "published"
  },
  {
    id: "eur-h-89",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the circular mountain massif in the central Kola Peninsula of Russia famous for rich apatite, nepheline, and rare-earth mineral deposits?",
    options: ["Lovozero Tundras", "Khibiny Mountains", "Ural Mountains", "Timan Ridge"],
    correctIndex: 1,
    explanation: "The Khibiny Mountains feature plateau summits and mineral wealth, hosting the mining city of Kirovsk.",
    status: "published"
  },
  {
    id: "eur-h-90",
    continent: "Europe",
    difficulty: "Hard",
    question: "What was the scientific drilling project conducted in the Pechengsky District of the Kola Peninsula that achieved a depth of 12,262 meters in 1989, the deepest borehole on Earth?",
    options: ["Project Mohole", "Kola Superdeep Borehole (SG-3)", "KTB Deep Hole", "Chikyu Borehole"],
    correctIndex: 1,
    explanation: "The Kola Superdeep Borehole penetrated one-third of the continental crust, discovering fractured rocks permeated with hot mineralized water.",
    status: "published"
  },
  {
    id: "eur-h-91",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the Russian Arctic archipelago consisting of two main mountainous islands dividing the Barents Sea from the Kara Sea, site of the 1961 Tsar Bomba nuclear detonation?",
    options: ["Franz Josef Land", "Novaya Zemlya", "Severnaya Zemlya", "New Siberian Islands"],
    correctIndex: 1,
    explanation: "Novaya Zemlya is a continuation of the Ural Mountains into the Arctic Ocean, crowned by the Severny Island ice cap.",
    status: "published"
  },
  {
    id: "eur-h-92",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the northernmost archipelago in Europe, consisting of 191 unpopulated glaciated volcanic islands in the Russian High Arctic?",
    options: ["Svalbard", "Franz Josef Land", "Novaya Zemlya", "Severnaya Zemlya"],
    correctIndex: 1,
    explanation: "Franz Josef Land sits between 80° and 82°N, inhabited only by military border garrisons and polar research personnel at Nagurskoye.",
    status: "published"
  },
  {
    id: "eur-h-93",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the highest mountain peak in the Ural Mountains, rising to 1,894 meters in the Subpolar Urals on the boundary between Europe and Asia?",
    options: ["Mount Yamantau", "Mount Narodnaya", "Mount Telposiz", "Mount Iremel"],
    correctIndex: 1,
    explanation: "Mount Narodnaya ('People's Mountain') was identified and measured in 1927 by a Soviet expedition.",
    status: "published"
  },
  {
    id: "eur-h-94",
    continent: "Europe",
    difficulty: "Hard",
    question: "Which low depression and geological trench system in southeastern European Russia connects the Sea of Azov with the Caspian Sea basin?",
    options: ["Caspian Depression", "Kuma-Manych Depression", "Pechora Depression", "Donets Basin"],
    correctIndex: 1,
    explanation: "Many geographers recognize the Kuma-Manych Depression as the official physiographic boundary dividing Europe from Asia north of the Caucasus.",
    status: "published"
  },
  {
    id: "eur-h-95",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the vast endorheic lowland basin around the northern Caspian Sea that sits at approximately 28 meters below world sea level, shared by Russia and Kazakhstan?",
    options: ["Turan Lowland", "Caspian Depression", "Qattara Depression", "Black Sea Lowland"],
    correctIndex: 1,
    explanation: "The Caspian Depression contains vast oil basins, salt domes, and the lowest dry point in Europe (-28 m).",
    status: "published"
  },
  {
    id: "eur-h-96",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the semi-desert region in southeastern European Russia along the Caspian Sea that is the only predominantly Buddhist region in Europe?",
    options: ["Dagestan", "Republic of Kalmykia", "Tatarstan", "Bashkortostan"],
    correctIndex: 1,
    explanation: "Kalmykia is home to the Kalmyk people (Oirat Mongols who migrated in the 17th century), centered at Elista with its Golden Temple.",
    status: "published"
  },
  {
    id: "eur-h-97",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the mountainous autonomous republic of the Russian Federation in the North Caucasus that is home to Mount Elbrus, Europe's highest peak?",
    options: ["Dagestan", "Kabardino-Balkar Republic", "North Ossetia-Alania", "Chechnya"],
    correctIndex: 1,
    explanation: "Mount Elbrus (5,642 m) sits in Kabardino-Balkaria near the border with Georgia.",
    status: "published"
  },
  {
    id: "eur-h-98",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the active stratovolcano on the island of Vulcano in Italy's Aeolian archipelago that gave its name to all volcanoes worldwide?",
    options: ["Stromboli", "Gran Cratere (Fossa di Vulcano)", "Mount Etna", "Vulcanello"],
    correctIndex: 1,
    explanation: "The island of Vulcano was believed by Romans to be the chimney of Vulcan, the god of fire and metalworking.",
    status: "published"
  },
  {
    id: "eur-h-99",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the largest island in the Baltic Sea belonging to Estonia, situated at the entrance to the Gulf of Riga?",
    options: ["Hiiumaa", "Saaremaa", "Muhu", "Vormsi"],
    correctIndex: 1,
    explanation: "Saaremaa is famous for Kuressaare Episcopal Castle and the Kaali meteorite crater field formed roughly 3,500 years ago.",
    status: "published"
  },
  {
    id: "eur-h-100",
    continent: "Europe",
    difficulty: "Hard",
    question: "What is the group of nine meteorite impact craters on the Estonian island of Saaremaa, whose main crater holds a sacred green lake 110 meters wide?",
    options: ["Ilumetsa", "Kaali craters", "Ts\u00f5\u00f5rikm\u00e4e", "K\u00e4rdla"],
    correctIndex: 1,
    explanation: "The Kaali impact produced an explosion comparable to the Hiroshima bomb, profoundly impacting ancient Baltic and Scandinavian mythology.",
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
    id: "na-e-3",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of the United States?",
    options: ["New York City", "Philadelphia", "Washington, D.C.", "Los Angeles"],
    correctIndex: 2,
    explanation: "Washington, D.C. is the federal capital of the United States, established along the Potomac River in 1790.",
    status: "published"
  },
  {
    id: "na-e-4",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of Canada?",
    options: ["Toronto", "Montreal", "Ottawa", "Vancouver"],
    correctIndex: 2,
    explanation: "Ottawa in Ontario was chosen by Queen Victoria in 1857 as Canada's capital.",
    status: "published"
  },
  {
    id: "na-e-5",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of Mexico?",
    options: ["Guadalajara", "Monterrey", "Mexico City", "Puebla"],
    correctIndex: 2,
    explanation: "Mexico City was built on the ruins of the ancient Aztec capital Tenochtitlan in the Valley of Mexico.",
    status: "published"
  },
  {
    id: "na-e-6",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of Cuba?",
    options: ["Santiago de Cuba", "Havana", "Camag\u00fcey", "Holgu\u00edn"],
    correctIndex: 1,
    explanation: "Havana is the coastal capital and largest city of Cuba, founded by the Spanish in the 16th century.",
    status: "published"
  },
  {
    id: "na-e-7",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of Jamaica?",
    options: ["Montego Bay", "Kingston", "Ocho Rios", "Spanish Town"],
    correctIndex: 1,
    explanation: "Kingston is the capital of Jamaica, situated on a natural harbor on the southeastern coast.",
    status: "published"
  },
  {
    id: "na-e-8",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of Guatemala?",
    options: ["Antigua", "Guatemala City", "Quetzaltenango", "Escuintla"],
    correctIndex: 1,
    explanation: "Guatemala City is the most populous city in Central America, located in the Valle de la Ermita.",
    status: "published"
  },
  {
    id: "na-e-9",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of Costa Rica?",
    options: ["Alajuela", "San Jos\u00e9", "Heredia", "Cartago"],
    correctIndex: 1,
    explanation: "San José is the capital of Costa Rica, situated in the fertile Central Valley.",
    status: "published"
  },
  {
    id: "na-e-10",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of Panama?",
    options: ["Col\u00f3n", "David", "Panama City", "Santiago"],
    correctIndex: 2,
    explanation: "Panama City sits at the Pacific entrance of the Panama Canal.",
    status: "published"
  },
  {
    id: "na-e-11",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of the Bahamas?",
    options: ["Freeport", "Nassau", "George Town", "Marsh Harbour"],
    correctIndex: 1,
    explanation: "Nassau is the capital of the Bahamas, located on the island of New Providence.",
    status: "published"
  },
  {
    id: "na-e-12",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of Haiti?",
    options: ["Cap-Ha\u00eftien", "Port-au-Prince", "Gona\u00efves", "Les Cayes"],
    correctIndex: 1,
    explanation: "Port-au-Prince is the capital and largest city of Haiti, located on the Gulf of Gonâve.",
    status: "published"
  },
  {
    id: "na-e-13",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of the Dominican Republic?",
    options: ["Santiago", "Santo Domingo", "Punta Cana", "La Romana"],
    correctIndex: 1,
    explanation: "Santo Domingo was founded in 1496, the oldest continuously inhabited European settlement in the Americas.",
    status: "published"
  },
  {
    id: "na-e-14",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of El Salvador?",
    options: ["Santa Ana", "San Salvador", "San Miguel", "Sonsonate"],
    correctIndex: 1,
    explanation: "San Salvador is the capital of El Salvador, overlooked by the San Salvador volcano.",
    status: "published"
  },
  {
    id: "na-e-15",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of Honduras?",
    options: ["San Pedro Sula", "Tegucigalpa", "La Ceiba", "Choloma"],
    correctIndex: 1,
    explanation: "Tegucigalpa is the capital of Honduras, situated in a mountain valley.",
    status: "published"
  },
  {
    id: "na-e-16",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of Nicaragua?",
    options: ["Le\u00f3n", "Granada", "Managua", "Matagalpa"],
    correctIndex: 2,
    explanation: "Managua is the capital of Nicaragua, located on the southwestern shore of Lake Managua.",
    status: "published"
  },
  {
    id: "na-e-17",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of Belize?",
    options: ["Belize City", "Belmopan", "San Ignacio", "Orange Walk"],
    correctIndex: 1,
    explanation: "Belmopan was founded as a planned inland capital in 1970 after Hurricane Hattie devastated Belize City in 1961.",
    status: "published"
  },
  {
    id: "na-e-18",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of Barbados?",
    options: ["Speightstown", "Bridgetown", "Oistins", "Holetown"],
    correctIndex: 1,
    explanation: "Bridgetown is the capital and primary commercial seaport of Barbados on Carlisle Bay.",
    status: "published"
  },
  {
    id: "na-e-19",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of Trinidad and Tobago?",
    options: ["San Fernando", "Port of Spain", "Chaguanas", "Scarborough"],
    correctIndex: 1,
    explanation: "Port of Spain is the capital of Trinidad and Tobago, situated on the Gulf of Paria.",
    status: "published"
  },
  {
    id: "na-e-20",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital of the US state of California?",
    options: ["Los Angeles", "San Francisco", "Sacramento", "San Diego"],
    correctIndex: 2,
    explanation: "Sacramento has been California's capital since 1854, situated at the confluence of the Sacramento and American rivers.",
    status: "published"
  },
  {
    id: "na-e-21",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital of the US state of Texas?",
    options: ["Houston", "Dallas", "Austin", "San Antonio"],
    correctIndex: 2,
    explanation: "Austin is the state capital of Texas, famous for the Texas State Capitol constructed of sunset red granite.",
    status: "published"
  },
  {
    id: "na-e-22",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital of the US state of New York?",
    options: ["New York City", "Buffalo", "Albany", "Rochester"],
    correctIndex: 2,
    explanation: "Albany on the Hudson River has served as the capital of New York State since 1797.",
    status: "published"
  },
  {
    id: "na-e-23",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital of the US state of Florida?",
    options: ["Miami", "Orlando", "Tallahassee", "Tampa"],
    correctIndex: 2,
    explanation: "Tallahassee is the capital of Florida, selected in 1824 as a midway point between St. Augustine and Pensacola.",
    status: "published"
  },
  {
    id: "na-e-24",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital of the US state of Illinois?",
    options: ["Chicago", "Springfield", "Peoria", "Rockford"],
    correctIndex: 1,
    explanation: "Springfield is the capital of Illinois, famously the home of President Abraham Lincoln.",
    status: "published"
  },
  {
    id: "na-e-25",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital of the Canadian province of Ontario and the most populous city in Canada?",
    options: ["Ottawa", "Toronto", "Hamilton", "London"],
    correctIndex: 1,
    explanation: "Toronto is Canada's financial and cultural center, home to the CN Tower on Lake Ontario.",
    status: "published"
  },
  {
    id: "na-e-26",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital of the Canadian province of British Columbia?",
    options: ["Vancouver", "Victoria", "Kelowna", "Surrey"],
    correctIndex: 1,
    explanation: "Victoria is located on the southern tip of Vancouver Island.",
    status: "published"
  },
  {
    id: "na-e-27",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of the Canadian province of Quebec?",
    options: ["Montreal", "Quebec City", "Gatineau", "Sherbrooke"],
    correctIndex: 1,
    explanation: "Quebec City is the historic capital of Quebec, the only walled city north of Mexico in the Americas.",
    status: "published"
  },
  {
    id: "na-e-28",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the massive mountain range extending over 4,800 kilometers from British Columbia in Canada to New Mexico in the US?",
    options: ["Appalachian Mountains", "Rocky Mountains", "Sierra Nevada", "Cascades"],
    correctIndex: 1,
    explanation: "The Rocky Mountains form the Continental Divide, separating Pacific and Atlantic/Arctic watersheds.",
    status: "published"
  },
  {
    id: "na-e-29",
    continent: "North America",
    difficulty: "Easy",
    question: "Which ancient mountain chain extends along the eastern United States from Newfoundland in Canada down to Alabama?",
    options: ["Rocky Mountains", "Appalachian Mountains", "Ozarks", "Adirondacks"],
    correctIndex: 1,
    explanation: "The Appalachians are an eroded ancient Paleozoic mountain belt, home to the 3,500-km Appalachian Trail.",
    status: "published"
  },
  {
    id: "na-e-30",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the immense steep-sided canyon carved by the Colorado River in northwestern Arizona?",
    options: ["Bryce Canyon", "Grand Canyon", "Zion Canyon", "Kings Canyon"],
    correctIndex: 1,
    explanation: "The Grand Canyon is 446 kilometers long, up to 29 kilometers wide, and over 1,800 meters deep.",
    status: "published"
  },
  {
    id: "na-e-31",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the world-famous waterfall system spanning the border between Ontario, Canada, and New York State, USA?",
    options: ["Yosemite Falls", "Niagara Falls", "Multnomah Falls", "Shoshone Falls"],
    correctIndex: 1,
    explanation: "Niagara Falls consists of Horseshoe Falls, American Falls, and Bridal Veil Falls, draining Lake Erie into Lake Ontario.",
    status: "published"
  },
  {
    id: "na-e-32",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the largest freshwater lake by surface area in North America and the world?",
    options: ["Lake Michigan", "Lake Superior", "Lake Huron", "Lake Erie"],
    correctIndex: 1,
    explanation: "Lake Superior covers 82,100 square kilometers, holding more water than all other Great Lakes combined.",
    status: "published"
  },
  {
    id: "na-e-33",
    continent: "North America",
    difficulty: "Easy",
    question: "Which of the Great Lakes is located furthest east, draining directly into the St. Lawrence River?",
    options: ["Lake Erie", "Lake Ontario", "Lake Huron", "Lake Superior"],
    correctIndex: 1,
    explanation: "Lake Ontario sits downstream from Niagara Falls and connects to the Atlantic Ocean via the St. Lawrence Seaway.",
    status: "published"
  },
  {
    id: "na-e-34",
    continent: "North America",
    difficulty: "Easy",
    question: "Which of the Great Lakes is the shallowest and southernmost, famous for Lake Erie perch and warm summer waters?",
    options: ["Lake Ontario", "Lake Erie", "Lake Huron", "Lake Michigan"],
    correctIndex: 1,
    explanation: "Lake Erie has an average depth of just 19 meters, making it freeze more readily than other Great Lakes.",
    status: "published"
  },
  {
    id: "na-e-35",
    continent: "North America",
    difficulty: "Easy",
    question: "Which of the Great Lakes has the longest shoreline and contains Manitoulin Island, the world's largest freshwater lake island?",
    options: ["Lake Superior", "Lake Huron", "Lake Michigan", "Lake Erie"],
    correctIndex: 1,
    explanation: "Lake Huron features Georgian Bay and the Bruce Peninsula in Ontario.",
    status: "published"
  },
  {
    id: "na-e-36",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the world's largest island that is not a continent, situated between the Arctic and Atlantic oceans?",
    options: ["Madagascar", "Greenland (Kalaallit Nunaat)", "New Guinea", "Baffin Island"],
    correctIndex: 1,
    explanation: "Greenland is an autonomous territory of the Kingdom of Denmark, covering over 2.16 million square kilometers.",
    status: "published"
  },
  {
    id: "na-e-37",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of Greenland?",
    options: ["Sisimiut", "Nuuk (Godth\u00e5b)", "Ilulissat", "Qaqortoq"],
    correctIndex: 1,
    explanation: "Nuuk is the capital of Greenland, located on the southwestern fjord coast.",
    status: "published"
  },
  {
    id: "na-e-38",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the large marginal sea of the Atlantic Ocean bounded by the southern United States, Mexico, and Cuba?",
    options: ["Caribbean Sea", "Gulf of Mexico", "Hudson Bay", "Sargasso Sea"],
    correctIndex: 1,
    explanation: "The Gulf of Mexico is connected to the Atlantic via the Straits of Florida and to the Caribbean via the Yucatan Channel.",
    status: "published"
  },
  {
    id: "na-e-39",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the tropical sea south of the Gulf of Mexico, bounded by Central America to the west and the Greater Antilles to the north?",
    options: ["Gulf of Mexico", "Caribbean Sea", "Sargasso Sea", "Labrador Sea"],
    correctIndex: 1,
    explanation: "The Caribbean Sea is renowned for coral reefs, tropical archipelagos, and hurricane seasons.",
    status: "published"
  },
  {
    id: "na-e-40",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the massive body of saltwater in northeastern Canada that is the second-largest bay in the world by area?",
    options: ["Baffin Bay", "Hudson Bay", "James Bay", "Chesapeake Bay"],
    correctIndex: 1,
    explanation: "Hudson Bay covers 1.23 million square kilometers, draining roughly one-third of Canada's land area.",
    status: "published"
  },
  {
    id: "na-e-41",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the southern arm of Hudson Bay that borders Ontario and Quebec?",
    options: ["Hudson Strait", "James Bay", "Ungava Bay", "Foxe Basin"],
    correctIndex: 1,
    explanation: "James Bay is the southernmost part of the Arctic saltwater system in Canada, site of major hydroelectric projects.",
    status: "published"
  },
  {
    id: "na-e-42",
    continent: "North America",
    difficulty: "Easy",
    question: "Which river forms over 2,000 kilometers of the international border between the United States (Texas) and Mexico?",
    options: ["Colorado River", "Rio Grande (R\u00edo Bravo)", "Gila River", "Nueces River"],
    correctIndex: 1,
    explanation: "The Rio Grande originates in the Colorado Rockies and empties into the Gulf of Mexico near Brownsville/Matamoros.",
    status: "published"
  },
  {
    id: "na-e-43",
    continent: "North America",
    difficulty: "Easy",
    question: "Which river flows through the Grand Canyon and is dammed by the Hoover Dam to form Lake Mead?",
    options: ["Columbia River", "Colorado River", "Snake River", "Green River"],
    correctIndex: 1,
    explanation: "The Colorado River supplies vital water to over 40 million people in seven western US states and Mexico.",
    status: "published"
  },
  {
    id: "na-e-44",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the massive concrete gravity-arch dam on the Nevada-Arizona border that created Lake Mead in the 1930s?",
    options: ["Glen Canyon Dam", "Hoover Dam (Boulder Dam)", "Grand Coulee Dam", "Bonneville Dam"],
    correctIndex: 1,
    explanation: "Hoover Dam on the Colorado River stands 221 meters tall, constructed between 1931 and 1936.",
    status: "published"
  },
  {
    id: "na-e-45",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the largest island in the Caribbean, situated just 150 kilometers south of Key West, Florida?",
    options: ["Hispaniola", "Cuba", "Jamaica", "Puerto Rico"],
    correctIndex: 1,
    explanation: "Cuba spans over 104,000 square kilometers, nicknamed 'El Cocodrilo' for its aerial outline.",
    status: "published"
  },
  {
    id: "na-e-46",
    continent: "North America",
    difficulty: "Easy",
    question: "Which Caribbean island is shared by two sovereign nations: Haiti in the west and the Dominican Republic in the east?",
    options: ["Cuba", "Hispaniola", "Saint Martin", "Puerto Rico"],
    correctIndex: 1,
    explanation: "Hispaniola is the second-largest island in the West Indies, site of Columbus's first European settlements in 1492.",
    status: "published"
  },
  {
    id: "na-e-47",
    continent: "North America",
    difficulty: "Easy",
    question: "Which Caribbean island is an unincorporated territory of the United States, with San Juan as its capital?",
    options: ["US Virgin Islands", "Puerto Rico", "Guam", "Bermuda"],
    correctIndex: 1,
    explanation: "Puerto Rico became a US territory following the Spanish-American War in 1898.",
    status: "published"
  },
  {
    id: "na-e-48",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the British Overseas Territory in the North Atlantic Ocean famous for pink-sand beaches and historic Bermuda shorts?",
    options: ["Bahamas", "Bermuda", "Turks and Caicos", "Cayman Islands"],
    correctIndex: 1,
    explanation: "Bermuda is an isolated archipelago of 181 islands roughly 1,050 km east of North Carolina.",
    status: "published"
  },
  {
    id: "na-e-49",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the archipelago nation of hundreds of low-lying limestone islands and cays located north of Cuba and east of Florida?",
    options: ["Turks and Caicos", "The Bahamas", "Cayman Islands", "Virgin Islands"],
    correctIndex: 1,
    explanation: "The Bahamas consists of over 700 islands and 2,000 cays built from coral and oolitic limestone.",
    status: "published"
  },
  {
    id: "na-e-50",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the large peninsula in southeastern Mexico separating the Gulf of Mexico from the Caribbean Sea, home to ancient Mayan cities?",
    options: ["Baja California", "Yucatan Peninsula", "Florida Peninsula", "Sinaloa"],
    correctIndex: 1,
    explanation: "The Yucatan Peninsula is a karst limestone shelf famous for cenotes, Chichén Itzá, and the Chicxulub crater.",
    status: "published"
  },
  {
    id: "na-e-51",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the long, narrow peninsula in northwestern Mexico that separates the Pacific Ocean from the Gulf of California?",
    options: ["Yucatan Peninsula", "Baja California Peninsula", "Sonora", "Florida"],
    correctIndex: 1,
    explanation: "Baja California stretches 1,247 kilometers from Tijuana in the north to Cabo San Lucas in the south.",
    status: "published"
  },
  {
    id: "na-e-52",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the body of water separating the Baja California Peninsula from mainland northwestern Mexico, also known as the Sea of Cortez?",
    options: ["Bay of Campeche", "Gulf of California (Sea of Cortez)", "Gulf of Tehuantepec", "Gulf of Mexico"],
    correctIndex: 1,
    explanation: "The Gulf of California was dubbed 'The World's Aquarium' by Jacques Cousteau for its marine biodiversity.",
    status: "published"
  },
  {
    id: "na-e-53",
    continent: "North America",
    difficulty: "Easy",
    question: "Which US state consists entirely of an archipelago of volcanic islands in the central Pacific Ocean?",
    options: ["Alaska", "Hawaii", "Puerto Rico", "Florida"],
    correctIndex: 1,
    explanation: "Hawaii became the 50th US state in 1959, located roughly 3,700 kilometers southwest of California.",
    status: "published"
  },
  {
    id: "na-e-54",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the largest US state by total geographical land area?",
    options: ["Texas", "California", "Alaska", "Montana"],
    correctIndex: 2,
    explanation: "Alaska spans over 1.7 million square kilometers, more than twice the size of Texas.",
    status: "published"
  },
  {
    id: "na-e-55",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of the US state of Alaska, which is accessible only by boat or aircraft?",
    options: ["Anchorage", "Fairbanks", "Juneau", "Sitka"],
    correctIndex: 2,
    explanation: "Juneau is nestled at the base of Mount Juneau in the Alaskan panhandle with no road connections to the outside world.",
    status: "published"
  },
  {
    id: "na-e-56",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the capital city of Hawaii, located on the island of Oahu?",
    options: ["Hilo", "Honolulu", "Kahului", "Kailua-Kona"],
    correctIndex: 1,
    explanation: "Honolulu is the southernmost and westernmost major US city, home to Waikiki Beach and Pearl Harbor.",
    status: "published"
  },
  {
    id: "na-e-57",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the largest city in the United States by population, situated at the mouth of the Hudson River?",
    options: ["Los Angeles", "Chicago", "New York City", "Houston"],
    correctIndex: 2,
    explanation: "New York City comprises five boroughs: Manhattan, Brooklyn, Queens, the Bronx, and Staten Island.",
    status: "published"
  },
  {
    id: "na-e-58",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the second-most populous city in the United States, located in southern California?",
    options: ["San Francisco", "San Diego", "Los Angeles", "San Jose"],
    correctIndex: 2,
    explanation: "Los Angeles is the cultural, financial, and entertainment hub of southern California.",
    status: "published"
  },
  {
    id: "na-e-59",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the third-most populous city in the United States, situated on the southwestern shore of Lake Michigan, known as the 'Windy City'?",
    options: ["Detroit", "Chicago", "Indianapolis", "Milwaukee"],
    correctIndex: 1,
    explanation: "Chicago is a major rail, shipping, and financial center, home to Willis (Sears) Tower.",
    status: "published"
  },
  {
    id: "na-e-60",
    continent: "North America",
    difficulty: "Easy",
    question: "Which river flows through New York State past Manhattan into New York Harbor, named for an English explorer who navigated it in 1609?",
    options: ["East River", "Hudson River", "Delaware River", "Connecticut River"],
    correctIndex: 1,
    explanation: "The Hudson River flows 507 kilometers from the Adirondacks into New York Bay.",
    status: "published"
  },
  {
    id: "na-e-61",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the world-famous natural park in southern Florida known as the 'River of Grass', protecting sub-tropical wetlands, alligators, and manatees?",
    options: ["Big Cypress", "Everglades National Park", "Biscayne", "Dry Tortugas"],
    correctIndex: 1,
    explanation: "The Everglades is a shallow sheet of slow-moving water flowing from Lake Okeechobee south to Florida Bay.",
    status: "published"
  },
  {
    id: "na-e-62",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the largest freshwater lake in the US state of Florida, covering 1,900 square kilometers?",
    options: ["Lake George", "Lake Okeechobee", "Lake Kissimmee", "Lake Apopka"],
    correctIndex: 1,
    explanation: "Lake Okeechobee ('Big Water' in Hitchiti) is the second-largest natural freshwater lake contained wholly within the 48 contiguous states.",
    status: "published"
  },
  {
    id: "na-e-63",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the world's first national park, established in 1872 across Wyoming, Montana, and Idaho, famous for geothermal geysers like Old Faithful?",
    options: ["Yosemite", "Yellowstone National Park", "Grand Canyon", "Glacier"],
    correctIndex: 1,
    explanation: "Yellowstone sits atop an active volcanic supervolcano containing half of Earth's geothermal features.",
    status: "published"
  },
  {
    id: "na-e-64",
    continent: "North America",
    difficulty: "Easy",
    question: "Which famous cone-shaped geyser in Yellowstone National Park erupts reliably roughly every 90 minutes?",
    options: ["Steamboat Geyser", "Old Faithful", "Grand Geyser", "Giantess Geyser"],
    correctIndex: 1,
    explanation: "Old Faithful expels up to 32,000 liters of boiling water reaching heights of over 40 to 55 meters per eruption.",
    status: "published"
  },
  {
    id: "na-e-65",
    continent: "North America",
    difficulty: "Easy",
    question: "Which national park in California's Sierra Nevada is famous for granite cliffs like El Capitan and Half Dome, giant sequoias, and roaring waterfalls?",
    options: ["Sequoia", "Yosemite National Park", "Kings Canyon", "Joshua Tree"],
    correctIndex: 1,
    explanation: "Yosemite Valley was carved by valley glaciers into granite plutons, protected as a national park in 1890.",
    status: "published"
  },
  {
    id: "na-e-66",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the largest tree in the world by trunk volume, a giant sequoia located in California's Sequoia National Park?",
    options: ["Hyperion", "General Sherman", "General Grant", "President"],
    correctIndex: 1,
    explanation: "The General Sherman tree measures approximately 1,487 cubic meters in wood volume, standing 84 meters tall.",
    status: "published"
  },
  {
    id: "na-e-67",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the tallest living tree species on Earth, growing in the foggy coastal belt of northern California?",
    options: ["Giant Sequoia", "Coast Redwood (Sequoia sempervirens)", "Douglas Fir", "Sitka Spruce"],
    correctIndex: 1,
    explanation: "Coast redwoods can exceed 115 meters in height, with the Hyperion specimen measuring 116.07 meters.",
    status: "published"
  },
  {
    id: "na-e-68",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the deepest lake in the United States, located in a collapsed volcanic caldera of Mount Mazama in Oregon?",
    options: ["Lake Tahoe", "Crater Lake", "Lake Chelan", "Lake Superior"],
    correctIndex: 1,
    explanation: "Crater Lake reaches a depth of 594 meters, celebrated for pure, deep-blue caldera waters fed entirely by rain and snow.",
    status: "published"
  },
  {
    id: "na-e-69",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the large freshwater lake in the Sierra Nevada mountains on the border between California and Nevada, famous for crystal clarity?",
    options: ["Mono Lake", "Lake Tahoe", "Pyramid Lake", "Clear Lake"],
    correctIndex: 1,
    explanation: "Lake Tahoe sits at 1,897 meters elevation, the second-deepest lake in the United States at 501 meters.",
    status: "published"
  },
  {
    id: "na-e-70",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the largest endorheic saltwater lake in the Western Hemisphere, located in northern Utah?",
    options: ["Salton Sea", "Great Salt Lake", "Pyramid Lake", "Mono Lake"],
    correctIndex: 1,
    explanation: "The Great Salt Lake is a remnant of prehistoric Lake Bonneville, several times saltier than the ocean.",
    status: "published"
  },
  {
    id: "na-e-71",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the vast expanse of white salt crust west of Salt Lake City, Utah, famous for high-speed automobile land speed records?",
    options: ["Black Rock Desert", "Bonneville Salt Flats", "Death Valley", "Alvord Desert"],
    correctIndex: 1,
    explanation: "The Bonneville Salt Flats cover 120 square kilometers of flat, hard-packed gypsum and halite salt crust.",
    status: "published"
  },
  {
    id: "na-e-72",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the desert valley in eastern California that holds the world record for the highest certified air temperature on Earth (56.7°C / 134°F)?",
    options: ["Mojave Desert", "Death Valley", "Sonoran Desert", "Chihuahuan Desert"],
    correctIndex: 1,
    explanation: "Furnace Creek in Death Valley recorded 56.7°C on July 10, 1913.",
    status: "published"
  },
  {
    id: "na-e-73",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the lowest point in North America, situated in Death Valley, California, at 86 meters (282 feet) below sea level?",
    options: ["Salton Sink", "Badwater Basin", "Laguna Salada", "Death Valley Sink"],
    correctIndex: 1,
    explanation: "Badwater Basin is an endorheic basin where repeated evaporation creates hexagonal honeycomb salt formations.",
    status: "published"
  },
  {
    id: "na-e-74",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the highest mountain peak in the 48 contiguous United States, located in California's Sierra Nevada at 4,421 meters (14,505 ft)?",
    options: ["Mount Rainier", "Mount Whitney", "Mount Shasta", "Mount Elbert"],
    correctIndex: 1,
    explanation: "Mount Whitney sits just 135 kilometers west of Badwater Basin, the lowest point in North America.",
    status: "published"
  },
  {
    id: "na-e-75",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the highest mountain peak in the Rocky Mountains, located in Colorado at 4,401 meters (14,440 ft)?",
    options: ["Mount Massive", "Mount Elbert", "Pikes Peak", "Longs Peak"],
    correctIndex: 1,
    explanation: "Mount Elbert is the highest of Colorado's 58 'fourteeners' (peaks over 14,000 feet).",
    status: "published"
  },
  {
    id: "na-e-76",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the prominent, glacier-clad active stratovolcano that towers over the Seattle-Tacoma metropolitan area in Washington State?",
    options: ["Mount Baker", "Mount Rainier (Mount Tahoma)", "Mount Adams", "Mount St. Helens"],
    correctIndex: 1,
    explanation: "Mount Rainier rises to 4,392 meters, holding the most extensive glacial system on a single peak in the contiguous US.",
    status: "published"
  },
  {
    id: "na-e-77",
    continent: "North America",
    difficulty: "Easy",
    question: "Which active stratovolcano in southwestern Washington State experienced a cataclysmic lateral blast eruption on May 18, 1980?",
    options: ["Mount Hood", "Mount St. Helens", "Mount Shasta", "Glacier Peak"],
    correctIndex: 1,
    explanation: "Mount St. Helens lost its top 400 meters in a massive debris avalanche and blast that devastated 600 square kilometers.",
    status: "published"
  },
  {
    id: "na-e-78",
    continent: "North America",
    difficulty: "Easy",
    question: "Which major river of the Pacific Northwest flows from British Columbia through Washington and forms the border with Oregon into the Pacific?",
    options: ["Snake River", "Columbia River", "Fraser River", "Willamette River"],
    correctIndex: 1,
    explanation: "The Columbia River has the largest discharge of any North American river flowing into the Pacific Ocean, dammed by Grand Coulee Dam.",
    status: "published"
  },
  {
    id: "na-e-79",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the largest tributary of the Columbia River, rising in Yellowstone and carving Hells Canyon along the Idaho-Oregon border?",
    options: ["Willamette River", "Snake River", "Spokane River", "Yakima River"],
    correctIndex: 1,
    explanation: "The Snake River flows 1,735 kilometers across Idaho, Washington, and Oregon.",
    status: "published"
  },
  {
    id: "na-e-80",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the deepest river gorge in North America, dropping over 2,400 meters along the Snake River on the Oregon-Idaho border?",
    options: ["Grand Canyon", "Hells Canyon", "Black Canyon of the Gunnison", "Kings Canyon"],
    correctIndex: 1,
    explanation: "Hells Canyon reaches a maximum depth of 2,436 meters (7,993 ft), deeper than the Grand Canyon.",
    status: "published"
  },
  {
    id: "na-e-81",
    continent: "North America",
    difficulty: "Easy",
    question: "Which Canadian province is the only one located entirely on the Pacific coast, known for the Coast Mountains and temperate rainforests?",
    options: ["Alberta", "British Columbia", "Yukon", "Washington"],
    correctIndex: 1,
    explanation: "British Columbia features over 27,000 kilometers of rugged coastline and islands.",
    status: "published"
  },
  {
    id: "na-e-82",
    continent: "North America",
    difficulty: "Easy",
    question: "Which Canadian province is home to Banff and Jasper national parks in the Canadian Rockies?",
    options: ["British Columbia", "Alberta", "Saskatchewan", "Manitoba"],
    correctIndex: 1,
    explanation: "Alberta contains the world-renowned Lake Louise, Moraine Lake, and Columbia Icefield in the Canadian Rockies.",
    status: "published"
  },
  {
    id: "na-e-83",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the famous glacier-fed turquoise lake in Banff National Park, Alberta, overlooked by the Fairmont Château and Mount Victoria?",
    options: ["Moraine Lake", "Lake Louise", "Peyto Lake", "Maligne Lake"],
    correctIndex: 1,
    explanation: "Lake Louise gets its distinctive emerald-turquoise color from rock flour (glacial silt) suspended in meltwater.",
    status: "published"
  },
  {
    id: "na-e-84",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the largest national park in the Canadian Rockies, famous for Maligne Canyon and the Athabasca Glacier?",
    options: ["Banff", "Jasper National Park", "Yoho", "Kootenay"],
    correctIndex: 1,
    explanation: "Jasper covers 11,000 square kilometers, the northernmost and largest of the Canadian Rocky Mountain national parks.",
    status: "published"
  },
  {
    id: "na-e-85",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the largest mass of ice in the Rocky Mountains of North America, straddling the border between Banff and Jasper in Alberta?",
    options: ["Stikine Icecap", "Columbia Icefield", "Juneau Icefield", "Wrangell Icefield"],
    correctIndex: 1,
    explanation: "The Columbia Icefield covers 325 square kilometers, feeding rivers that drain into the Arctic, Atlantic, and Pacific oceans (Triple Continental Divide).",
    status: "published"
  },
  {
    id: "na-e-86",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the highest mountain peak in Canada and the second-highest in North America, located in Yukon's Saint Elias Mountains at 5,959 meters?",
    options: ["Mount Saint Elias", "Mount Logan", "Mount Lucania", "King Peak"],
    correctIndex: 1,
    explanation: "Mount Logan has the largest base circumference of any non-volcanic mountain on Earth, protected in Kluane National Park.",
    status: "published"
  },
  {
    id: "na-e-87",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the highest mountain peak in Mexico and the third-highest in North America, an active stratovolcano rising to 5,636 meters?",
    options: ["Popocat\u00e9petl", "Pico de Orizaba (Citlalt\u00e9petl)", "Iztacc\u00edhuatl", "Nevado de Toluca"],
    correctIndex: 1,
    explanation: "Pico de Orizaba ('Star Mountain') sits on the eastern edge of the Trans-Mexican Volcanic Belt.",
    status: "published"
  },
  {
    id: "na-e-88",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the famous active volcano overlooking the Valley of Mexico, whose Nahuatl name translates to 'Smoking Mountain'?",
    options: ["Iztacc\u00edhuatl", "Popocat\u00e9petl", "Colima", "Par\u00edcutin"],
    correctIndex: 1,
    explanation: "Popocatépetl ('El Popo') regularly emits ash and gas plumes just 70 kilometers southeast of Mexico City.",
    status: "published"
  },
  {
    id: "na-e-89",
    continent: "North America",
    difficulty: "Easy",
    question: "Which volcano in Michoacán, Mexico, famously surged out of a cornfield in 1943, studied by geologists as an example of monogenetic cinder cone volcanism?",
    options: ["Jorullo", "Par\u00edcutin", "Colima", "Chich\u00f3n"],
    correctIndex: 1,
    explanation: "Parícutin grew 336 meters in its first year, burying the villages of Parícutin and San Juan Parangaricutiro under lava.",
    status: "published"
  },
  {
    id: "na-e-90",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the major mountain range running along western Mexico parallel to the Pacific coast, from Sonora to Jalisco?",
    options: ["Sierra Madre Oriental", "Sierra Madre Occidental", "Sierra Madre del Sur", "Trans-Mexican Volcanic Belt"],
    correctIndex: 1,
    explanation: "The Sierra Madre Occidental contains Copper Canyon (Barrancas del Cobre), a network of canyons larger than the Grand Canyon.",
    status: "published"
  },
  {
    id: "na-e-91",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the dramatic canyon system in the Sierra Madre Occidental of Chihuahua, Mexico, traversed by the 'El Chepe' passenger railway?",
    options: ["Sumidero Canyon", "Copper Canyon (Barrancas del Cobre)", "Ca\u00f1\u00f3n del Peg\u00fcis", "Chicamocha"],
    correctIndex: 1,
    explanation: "Copper Canyon consists of six distinct ravines carved by rivers flowing to the Gulf of California, traditional homeland of the Rarámuri (Tarahumara).",
    status: "published"
  },
  {
    id: "na-e-92",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the major mountain range in eastern Mexico that runs parallel to the Gulf of Mexico coast?",
    options: ["Sierra Madre Occidental", "Sierra Madre Oriental", "Sierra Madre de Chiapas", "Sierra de Los Tuxtlas"],
    correctIndex: 1,
    explanation: "The Sierra Madre Oriental forms a folded limestone mountain barrier between the Mexican Plateau and Gulf lowlands.",
    status: "published"
  },
  {
    id: "na-e-93",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the large lake in western Mexico, situated in Jalisco and Michoacán, that is Mexico's largest freshwater lake?",
    options: ["Lake P\u00e1tzcuaro", "Lake Chapala", "Lake Cuitzeo", "Lake Texcoco"],
    correctIndex: 1,
    explanation: "Lake Chapala covers roughly 1,100 square kilometers, fed by the Lerma River.",
    status: "published"
  },
  {
    id: "na-e-94",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the largest lake in Central America, located in southwestern Nicaragua, famous for freshwater-adapted bull sharks?",
    options: ["Lake Managua", "Lake Nicaragua (Cocibolca)", "Lake Atitl\u00e1n", "Lake Yojoa"],
    correctIndex: 1,
    explanation: "Lake Nicaragua covers 8,264 square kilometers, containing the volcanic island of Ometepe formed by two volcanoes.",
    status: "published"
  },
  {
    id: "na-e-95",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the spectacular volcanic caldera lake in the Guatemalan highlands, surrounded by three volcanoes and twelve Mayan villages?",
    options: ["Lake Izabal", "Lake Atitl\u00e1n", "Lake Pet\u00e9n Itz\u00e1", "Lake Amatitl\u00e1n"],
    correctIndex: 1,
    explanation: "Lake Atitlán was described by Aldous Huxley as 'the most beautiful lake in the world', dropping over 340 meters deep.",
    status: "published"
  },
  {
    id: "na-e-96",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the prominent 82-kilometer artificial waterway across the Isthmus of Panama connecting the Atlantic and Pacific oceans?",
    options: ["Suez Canal", "Panama Canal", "Kiel Canal", "Nicaragua Canal"],
    correctIndex: 1,
    explanation: "Opened in 1914, the Panama Canal uses a system of locks to lift ships 26 meters up to Gatun Lake.",
    status: "published"
  },
  {
    id: "na-e-97",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the large artificial lake in Panama created between 1907 and 1913 by damming the Chagres River to form the centerpiece of the Panama Canal?",
    options: ["Lake Alajuela", "Gatun Lake", "Lake Bayano", "Miraflores Lake"],
    correctIndex: 1,
    explanation: "Gatun Lake covers 425 square kilometers, carrying ships for 33 kilometers of their transit across the isthmus.",
    status: "published"
  },
  {
    id: "na-e-98",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the famous geological limestone sinkhole off the coast of Belize that was made famous by Jacques Cousteau as a premier scuba diving site?",
    options: ["Dean's Blue Hole", "Great Blue Hole (Lighthouse Reef)", "Dragon Hole", "Dahab Blue Hole"],
    correctIndex: 1,
    explanation: "The Great Blue Hole is a circular marine sinkhole 318 meters across and 124 meters deep within the Belize Barrier Reef.",
    status: "published"
  },
  {
    id: "na-e-99",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the largest barrier reef system in the Western Hemisphere and second-largest in the world after the Great Barrier Reef?",
    options: ["Florida Keys Reef", "Mesoamerican Barrier Reef System (Belize Barrier Reef)", "Andros Barrier Reef", "Red Sea Reef"],
    correctIndex: 1,
    explanation: "The Mesoamerican Reef extends nearly 1,000 kilometers along Mexico, Belize, Guatemala, and Honduras.",
    status: "published"
  },
  {
    id: "na-e-100",
    continent: "North America",
    difficulty: "Easy",
    question: "What is the dense, roadless jungle and swamp gap on the border between Panama and Colombia that interrupts the Pan-American Highway?",
    options: ["Mosquito Coast", "Dari\u00e9n Gap (Tap\u00f3n del Dari\u00e9n)", "Pet\u00e9n Gap", "Atrato Swamp"],
    correctIndex: 1,
    explanation: "The Darién Gap spans roughly 100 kilometers of dense tropical forest and mountainous terrain between North and South America.",
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
    id: "na-m-3",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the massive exposed area of ancient Precambrian crystalline rock that forms the geological core of Canada around Hudson Bay?",
    options: ["Appalachian Basin", "Canadian Shield (Laurentian Plateau)", "Interior Plains", "Western Cordillera"],
    correctIndex: 1,
    explanation: "The Canadian Shield covers over 8 million square kilometers, rich in minerals, boreal forests, and lakes.",
    status: "published"
  },
  {
    id: "na-m-4",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the longest river entirely within Canada, flowing 1,738 kilometers from Great Slave Lake into the Arctic Ocean?",
    options: ["Yukon River", "Mackenzie River", "Fraser River", "Churchill River"],
    correctIndex: 1,
    explanation: "The Mackenzie River drainage basin is the second-largest in North America after the Mississippi.",
    status: "published"
  },
  {
    id: "na-m-5",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the deepest lake in North America, plunging to 614 meters (2,014 ft) in the Northwest Territories of Canada?",
    options: ["Great Bear Lake", "Great Slave Lake", "Lake Athabasca", "Lake Winnipeg"],
    correctIndex: 1,
    explanation: "Great Slave Lake is the tenth-largest lake in the world by area and the deepest on the continent.",
    status: "published"
  },
  {
    id: "na-m-6",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the largest lake located entirely within Canada, situated on the Arctic Circle in the Northwest Territories?",
    options: ["Great Slave Lake", "Great Bear Lake", "Lake Winnipeg", "Lake Superior"],
    correctIndex: 1,
    explanation: "Great Bear Lake covers 31,153 square kilometers, covered in ice for up to eight months of the year.",
    status: "published"
  },
  {
    id: "na-m-7",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the massive estuary and waterway in eastern Canada that connects the Great Lakes with the Atlantic Ocean?",
    options: ["Hudson Strait", "Saint Lawrence River and Seaway", "Bay of Fundy", "Strait of Belle Isle"],
    correctIndex: 1,
    explanation: "The Saint Lawrence Seaway allows ocean-going cargo vessels to sail into the industrial heart of the Great Lakes.",
    status: "published"
  },
  {
    id: "na-m-8",
    continent: "North America",
    difficulty: "Medium",
    question: "Which body of water between New Brunswick and Nova Scotia in Canada experiences the highest tidal range in the world (up to 16 meters / 53 feet)?",
    options: ["Chesapeake Bay", "Bay of Fundy", "Hudson Bay", "Delaware Bay"],
    correctIndex: 1,
    explanation: "The Bay of Fundy's unique funnel shape and natural wave resonance produce massive twice-daily tides and tidal bores.",
    status: "published"
  },
  {
    id: "na-m-9",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the largest island in Canada and the fifth-largest island in the world, located in Nunavut?",
    options: ["Victoria Island", "Baffin Island", "Ellesmere Island", "Newfoundland"],
    correctIndex: 1,
    explanation: "Baffin Island covers 507,451 square kilometers, famous for sheer granite towers like Mount Thor and Mount Asgard.",
    status: "published"
  },
  {
    id: "na-m-10",
    continent: "North America",
    difficulty: "Medium",
    question: "Which Canadian island in Nunavut features Mount Thor, boasting Earth's greatest purely vertical cliff drop (1,250 meters)?",
    options: ["Victoria Island", "Baffin Island", "Banks Island", "Devon Island"],
    correctIndex: 1,
    explanation: "Mount Thor in Auyuittuq National Park on Baffin Island has a 1,250-meter vertical drop with an average angle of 105 degrees.",
    status: "published"
  },
  {
    id: "na-m-11",
    continent: "North America",
    difficulty: "Medium",
    question: "Which major river rises in British Columbia, flows across the Yukon Territory and Alaska, and empties into the Bering Sea at a vast delta?",
    options: ["Mackenzie River", "Yukon River", "Kuskokwim River", "Fraser River"],
    correctIndex: 1,
    explanation: "The Yukon River flows 3,190 kilometers, famously the route followed by prospectors during the 1896 Klondike Gold Rush.",
    status: "published"
  },
  {
    id: "na-m-12",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the major river flowing through southern British Columbia that drains into the Strait of Georgia at Vancouver?",
    options: ["Columbia River", "Fraser River", "Skeena River", "Peace River"],
    correctIndex: 1,
    explanation: "The Fraser River is the longest river in British Columbia, famous for the annual Fraser River salmon run and Hell's Gate canyon.",
    status: "published"
  },
  {
    id: "na-m-13",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the large peninsula in eastern Canada that encompasses northern Quebec and Labrador?",
    options: ["Gasp\u00e9 Peninsula", "Labrador Peninsula", "Nova Scotia Peninsula", "Avalon Peninsula"],
    correctIndex: 1,
    explanation: "The Labrador Peninsula covers roughly 1.4 million square kilometers between Hudson Bay, the Labrador Sea, and the Gulf of Saint Lawrence.",
    status: "published"
  },
  {
    id: "na-m-14",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the large Canadian island that forms the easternmost portion of the province of Newfoundland and Labrador?",
    options: ["Cape Breton Island", "Island of Newfoundland", "Prince Edward Island", "Anticosti Island"],
    correctIndex: 1,
    explanation: "Newfoundland is separated from the Labrador mainland by the narrow Strait of Belle Isle.",
    status: "published"
  },
  {
    id: "na-m-15",
    continent: "North America",
    difficulty: "Medium",
    question: "Which national park on the west coast of Newfoundland features the Tablelands, an exposed slice of Earth's mantle pushed up by plate tectonics?",
    options: ["Terra Nova", "Gros Morne National Park", "Cape Breton Highlands", "Forillon"],
    correctIndex: 1,
    explanation: "Gros Morne provided crucial geological proof for the theory of plate tectonics, showing deep ocean crust and mantle peridotite.",
    status: "published"
  },
  {
    id: "na-m-16",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the smallest province of Canada by both land area and population, situated in the Gulf of Saint Lawrence?",
    options: ["Nova Scotia", "Prince Edward Island", "New Brunswick", "Newfoundland"],
    correctIndex: 1,
    explanation: "Prince Edward Island is connected to the Canadian mainland by the 12.9-kilometer Confederation Bridge across the Abegweit Passage.",
    status: "published"
  },
  {
    id: "na-m-17",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the major river flowing from the Rocky Mountains across southern Alberta and Saskatchewan to form the Saskatchewan River system?",
    options: ["Assiniboine River", "South Saskatchewan River", "Red Deer River", "Bow River"],
    correctIndex: 1,
    explanation: "The South Saskatchewan River is the primary municipal and irrigation water source for southern Alberta and Saskatchewan cities like Saskatoon.",
    status: "published"
  },
  {
    id: "na-m-18",
    continent: "North America",
    difficulty: "Medium",
    question: "Which river flows northward through North Dakota and Minnesota into Lake Winnipeg in Manitoba, famous for recurring spring floods in the Red River Valley?",
    options: ["Missouri River", "Red River of the North", "Souris River", "Rainy River"],
    correctIndex: 1,
    explanation: "The Red River of the North occupies the flat bed of ancient glacial Lake Agassiz, creating severe ice-jam flooding during spring thaws.",
    status: "published"
  },
  {
    id: "na-m-19",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the vast expanse of flat, temperate prairie and steppe land extending from Texas north to Alberta and Saskatchewan in central North America?",
    options: ["Canadian Shield", "Great Plains", "Colorado Plateau", "Columbia Plateau"],
    correctIndex: 1,
    explanation: "The Great Plains were historically covered by shortgrass and mixed-grass prairie, now North America's agricultural 'breadbasket'.",
    status: "published"
  },
  {
    id: "na-m-20",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the informal meteorological term for the central US corridor where dry Rocky Mountain air collides with warm Gulf moisture, creating frequent severe tornadoes?",
    options: ["Hurricane Alley", "Tornado Alley", "Dixie Alley", "Hailstorm Belt"],
    correctIndex: 1,
    explanation: "Tornado Alley traditionally centers on Texas, Oklahoma, Kansas, Nebraska, and Iowa, experiencing hundreds of supercells each spring.",
    status: "published"
  },
  {
    id: "na-m-21",
    continent: "North America",
    difficulty: "Medium",
    question: "Which major tributary of the Mississippi River rises in Pennsylvania, flows past Pittsburgh and Cincinnati, and joins the Mississippi at Cairo, Illinois?",
    options: ["Missouri River", "Ohio River", "Tennessee River", "Cumberland River"],
    correctIndex: 1,
    explanation: "The Ohio River provides the greatest volume of water of any tributary to the Mississippi River at their confluence.",
    status: "published"
  },
  {
    id: "na-m-22",
    continent: "North America",
    difficulty: "Medium",
    question: "Which major river flowing through Montana, the Dakotas, and Missouri is the longest river in the United States at 3,767 kilometers?",
    options: ["Mississippi River", "Missouri River", "Colorado River", "Arkansas River"],
    correctIndex: 1,
    explanation: "The Missouri River rises in the Rocky Mountains of Montana and joins the Mississippi north of St. Louis, Missouri.",
    status: "published"
  },
  {
    id: "na-m-23",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the largest estuary in the United States, surrounded by Maryland and Virginia, famous for blue crabs and oysters?",
    options: ["Delaware Bay", "Chesapeake Bay", "Pamlico Sound", "Long Island Sound"],
    correctIndex: 1,
    explanation: "Chesapeake Bay is fed by over 150 rivers including the Susquehanna, Potomac, Rappahannock, and James.",
    status: "published"
  },
  {
    id: "na-m-24",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the major river flowing through Washington, D.C., into Chesapeake Bay?",
    options: ["Susquehanna River", "Potomac River", "Patuxent River", "James River"],
    correctIndex: 1,
    explanation: "The Potomac River forms the southern boundary of Maryland with Virginia and the District of Columbia.",
    status: "published"
  },
  {
    id: "na-m-25",
    continent: "North America",
    difficulty: "Medium",
    question: "Which mountain range in upstate New York is geographically distinct from the Appalachians, formed of a circular dome of Precambrian Grenville rocks?",
    options: ["Catskill Mountains", "Adirondack Mountains", "Green Mountains", "White Mountains"],
    correctIndex: 1,
    explanation: "The Adirondack Mountains form a roughly circular dome covering 13,000 square kilometers, crowned by Mount Marcy (1,629 m).",
    status: "published"
  },
  {
    id: "na-m-26",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the highest mountain peak in the northeastern United States, located in the White Mountains of New Hampshire at 1,916 meters?",
    options: ["Mount Marcy", "Mount Washington", "Mount Katahdin", "Mount Mansfield"],
    correctIndex: 1,
    explanation: "Mount Washington is notorious for extreme alpine weather, recording a world-record wind gust of 372 km/h (231 mph) in 1934.",
    status: "published"
  },
  {
    id: "na-m-27",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the highest mountain peak in the Appalachian Mountains and the eastern United States, located in North Carolina at 2,037 meters?",
    options: ["Mount Rogers", "Mount Mitchell", "Clingmans Dome", "Grandfather Mountain"],
    correctIndex: 1,
    explanation: "Mount Mitchell in the Black Mountains of western North Carolina is the highest peak east of the Mississippi River.",
    status: "published"
  },
  {
    id: "na-m-28",
    continent: "North America",
    difficulty: "Medium",
    question: "Which national park straddling the border between North Carolina and Tennessee is the most visited national park in the United States?",
    options: ["Shenandoah", "Great Smoky Mountains National Park", "Mammoth Cave", "Cuyahoga Valley"],
    correctIndex: 1,
    explanation: "Great Smoky Mountains National Park receives over 12 million visitors annually, named for the natural blue-grey mist produced by terpene vegetation vapors.",
    status: "published"
  },
  {
    id: "na-m-29",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the world's longest known cave system, located in central Kentucky with over 680 kilometers of surveyed underground passageways?",
    options: ["Carlsbad Caverns", "Mammoth Cave National Park", "Jewel Cave", "Wind Cave"],
    correctIndex: 1,
    explanation: "Mammoth Cave is formed in thick Mississippian limestone strata capped by sandstone, a UNESCO World Heritage site.",
    status: "published"
  },
  {
    id: "na-m-30",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the famous cave system in southeastern New Mexico containing the colossal natural limestone chamber known as 'The Big Room'?",
    options: ["Mammoth Cave", "Carlsbad Caverns National Park", "Lechuguilla Cave", "Kartchner Caverns"],
    correctIndex: 1,
    explanation: "Carlsbad Caverns was formed by sulfuric acid dissolution rather than carbonic acid, famous for thousands of emerging Brazilian free-tailed bats.",
    status: "published"
  },
  {
    id: "na-m-31",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the world's largest gypsum sand dune field, covering 710 square kilometers in the Tularosa Basin of southern New Mexico?",
    options: ["Great Sand Dunes", "White Sands National Park", "Imperial Sand Dunes", "Monahans Sandhills"],
    correctIndex: 1,
    explanation: "White Sands consists of bright white hydrous calcium sulfate (gypsum) dunes that do not convert sunlight to heat, staying cool to the touch.",
    status: "published"
  },
  {
    id: "na-m-32",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the tallest sand dune field in North America, rising over 230 meters against the Sangre de Cristo Mountains in southern Colorado?",
    options: ["White Sands", "Great Sand Dunes National Park", "Coral Pink Sand Dunes", "Kelso Dunes"],
    correctIndex: 1,
    explanation: "Great Sand Dunes preserves sand deposits blown across the San Luis Valley, trapped against the Sangre de Cristo range.",
    status: "published"
  },
  {
    id: "na-m-33",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the large desert that spans parts of California, Nevada, Utah, and Arizona, characterized by the iconic Joshua tree (Yucca brevifolia)?",
    options: ["Sonoran Desert", "Mojave Desert", "Chihuahuan Desert", "Great Basin Desert"],
    correctIndex: 1,
    explanation: "The Mojave Desert is a transitional desert between the Great Basin and the lower Sonoran Desert, home to Death Valley and Las Vegas.",
    status: "published"
  },
  {
    id: "na-m-34",
    continent: "North America",
    difficulty: "Medium",
    question: "Which warm desert spanning southern Arizona, southeastern California, and northwestern Mexico is famous for the towering saguaro cactus (Carnegiea gigantea)?",
    options: ["Mojave Desert", "Sonoran Desert", "Chihuahuan Desert", "Colorado Desert"],
    correctIndex: 1,
    explanation: "The Sonoran Desert receives bimodal rainfall (winter rains and summer monsoons), supporting exceptionally rich desert vegetation.",
    status: "published"
  },
  {
    id: "na-m-35",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the largest desert in North America by area, stretching from West Texas and southern New Mexico deep into northern and central Mexico?",
    options: ["Sonoran Desert", "Chihuahuan Desert", "Mojave Desert", "Great Basin Desert"],
    correctIndex: 1,
    explanation: "The Chihuahuan Desert covers over 500,000 square kilometers, an interior rain-shadow plateau featuring creosote bush and agave.",
    status: "published"
  },
  {
    id: "na-m-36",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the largest desert region in the United States, a cold mid-latitude desert covering nearly all of Nevada and western Utah?",
    options: ["Mojave Desert", "Great Basin Desert", "Sonoran Desert", "Red Desert"],
    correctIndex: 1,
    explanation: "The Great Basin Desert features parallel north-south mountain ranges separated by arid valleys (Basin and Range province).",
    status: "published"
  },
  {
    id: "na-m-37",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the endorheic drainage basin covering most of Nevada and parts of Utah where no rivers flow to any ocean?",
    options: ["Colorado Basin", "The Great Basin", "Columbia Basin", "Snake River Basin"],
    correctIndex: 1,
    explanation: "All precipitation in the Great Basin evaporates, sinks into desert playas, or drains into terminal lakes like the Great Salt Lake and Pyramid Lake.",
    status: "published"
  },
  {
    id: "na-m-38",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the longest fault line in California, marking the right-lateral strike-slip boundary between the Pacific and North American tectonic plates?",
    options: ["Hayward Fault", "San Andreas Fault", "Garlock Fault", "Calaveras Fault"],
    correctIndex: 1,
    explanation: "The San Andreas Fault extends roughly 1,200 kilometers through California, responsible for major earthquakes like San Francisco 1906.",
    status: "published"
  },
  {
    id: "na-m-39",
    continent: "North America",
    difficulty: "Medium",
    question: "Which national park in northwestern Montana features the scenic Going-to-the-Sun Road and adjoins Canada's Waterton Lakes National Park?",
    options: ["Yellowstone", "Glacier National Park", "Grand Teton", "Olympic"],
    correctIndex: 1,
    explanation: "Glacier National Park and Waterton Lakes together form the Waterton-Glacier International Peace Park, established in 1932.",
    status: "published"
  },
  {
    id: "na-m-40",
    continent: "North America",
    difficulty: "Medium",
    question: "Which dramatic mountain range in northwestern Wyoming rises abruptly over 2,000 meters above the Jackson Hole valley without foothills?",
    options: ["Wind River Range", "Teton Range (Grand Teton National Park)", "Absaroka Range", "Bighorn Mountains"],
    correctIndex: 1,
    explanation: "The Tetons are fault-block mountains tilted along the Teton Fault, crowned by the Grand Teton at 4,199 meters.",
    status: "published"
  },
  {
    id: "na-m-41",
    continent: "North America",
    difficulty: "Medium",
    question: "Which national park on the Olympic Peninsula of Washington State protects temperate rainforests (Hoh and Quinault) receiving over 3,500 mm of rain annually?",
    options: ["Mount Rainier", "Olympic National Park", "North Cascades", "Redwood"],
    correctIndex: 1,
    explanation: "Olympic National Park encompasses glaciated alpine peaks (Mount Olympus), temperate Sitka spruce rainforests, and wild Pacific coastlines.",
    status: "published"
  },
  {
    id: "na-m-42",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the narrow body of water separating Vancouver Island from the mainland of British Columbia?",
    options: ["Puget Sound", "Strait of Georgia", "Hecate Strait", "Queen Charlotte Strait"],
    correctIndex: 1,
    explanation: "The Strait of Georgia forms part of the Salish Sea between Vancouver Island and the British Columbia mainland.",
    status: "published"
  },
  {
    id: "na-m-43",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the collective geographical term for the internal marine waters between southwestern British Columbia and northwestern Washington (Strait of Georgia, Puget Sound, Strait of Juan de Fuca)?",
    options: ["Bering Sea", "The Salish Sea", "Cook Inlet", "Inside Passage"],
    correctIndex: 1,
    explanation: "The name Salish Sea was officially recognized in 2009 to honor the Coast Salish indigenous peoples of the region.",
    status: "published"
  },
  {
    id: "na-m-44",
    continent: "North America",
    difficulty: "Medium",
    question: "Which coastal shipping network of sheltered channels extends over 1,500 kilometers from Puget Sound through British Columbia to southeastern Alaska?",
    options: ["Northwest Passage", "The Inside Passage", "Marine Highway", "Strait of Georgia"],
    correctIndex: 1,
    explanation: "The Inside Passage allows coastal ferries and cruise ships to navigate sheltered waters behind protective barrier islands.",
    status: "published"
  },
  {
    id: "na-m-45",
    continent: "North America",
    difficulty: "Medium",
    question: "Which archipelago in southeastern Alaska contains over 1,000 islands, including Prince of Wales, Chichagof, Admiralty, and Baranof islands?",
    options: ["Aleutian Islands", "Alexander Archipelago", "Kodiak Archipelago", "San Juan Islands"],
    correctIndex: 1,
    explanation: "The Alexander Archipelago encompasses Tongass National Forest, the largest national forest in the United States.",
    status: "published"
  },
  {
    id: "na-m-46",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the massive temperate national forest in southeastern Alaska that is the largest national forest in the United States at 68,000 square kilometers?",
    options: ["Chugach National Forest", "Tongass National Forest", "Superior National Forest", "Bridger-Teton"],
    correctIndex: 1,
    explanation: "Tongass National Forest protects the majority of the old-growth temperate rainforest in the Alaska Panhandle.",
    status: "published"
  },
  {
    id: "na-m-47",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the largest island in Alaska and the second-largest in the United States, famous for the world's largest brown bears?",
    options: ["Baranof Island", "Kodiak Island", "Prince of Wales Island", "Saint Lawrence Island"],
    correctIndex: 1,
    explanation: "Kodiak Island covers 9,311 square kilometers in the Gulf of Alaska, separated from the Alaska Peninsula by Shelikof Strait.",
    status: "published"
  },
  {
    id: "na-m-48",
    continent: "North America",
    difficulty: "Medium",
    question: "Which volcanic island chain extends over 1,900 kilometers westward from the Alaska Peninsula toward Russia's Kamchatka Peninsula?",
    options: ["Kurile Islands", "Aleutian Islands", "Alexander Archipelago", "Commander Islands"],
    correctIndex: 1,
    explanation: "The Aleutians comprise 14 large volcanic islands and 55 smaller ones, separating the Bering Sea from the Pacific Ocean.",
    status: "published"
  },
  {
    id: "na-m-49",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the national park in south-central Alaska that contains nine of the sixteen highest mountain peaks in the United States and is the largest US national park at 53,320 square kilometers?",
    options: ["Denali", "Wrangell-St. Elias National Park", "Gates of the Arctic", "Katmai"],
    correctIndex: 1,
    explanation: "Wrangell-St. Elias is six times the size of Yellowstone, containing the massive Malaspina Glacier and Mount Saint Elias (5,489 m).",
    status: "published"
  },
  {
    id: "na-m-50",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the world's largest piedmont glacier, covering 3,900 square kilometers as a giant fan of ice spilling out onto coastal Alaska?",
    options: ["Hubbard Glacier", "Malaspina Glacier", "Bering Glacier", "Columbia Glacier"],
    correctIndex: 1,
    explanation: "Malaspina Glacier in southeastern Alaska is an enormous lobe of ice up to 600 meters thick, visible clearly from orbit.",
    status: "published"
  },
  {
    id: "na-m-51",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the largest tidewater glacier in North America, stretching 122 kilometers from Yukon into Disenchantment Bay in Alaska?",
    options: ["Mendenhall Glacier", "Hubbard Glacier", "Johns Hopkins Glacier", "Exit Glacier"],
    correctIndex: 1,
    explanation: "Hubbard Glacier is an active surging tidewater glacier that has repeatedly dammed Russell Fjord in recent decades.",
    status: "published"
  },
  {
    id: "na-m-52",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the national park in southwestern Alaska famous for thousands of coastal brown bears congregating to catch leaping salmon at Brooks Falls?",
    options: ["Denali", "Katmai National Park and Preserve", "Kenai Fjords", "Lake Clark"],
    correctIndex: 1,
    explanation: "Katmai also encompasses the Valley of Ten Thousand Smokes, formed by the colossal 1912 Novarupta volcanic eruption.",
    status: "published"
  },
  {
    id: "na-m-53",
    continent: "North America",
    difficulty: "Medium",
    question: "What was the largest volcanic eruption of the 20th century by volume, erupting 30 times more magma than Mount St. Helens in southwestern Alaska in June 1912?",
    options: ["Mount Pinatubo", "Novarupta (Mount Katmai eruption)", "Mount St. Helens", "Mount Redoubt"],
    correctIndex: 1,
    explanation: "Novarupta created the ash-filled Valley of Ten Thousand Smokes in the Aleutian Range.",
    status: "published"
  },
  {
    id: "na-m-54",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the active stratovolcano across Cook Inlet from Anchorage, Alaska, that erupted explosively in 1989 and 2009, threatening commercial aviation?",
    options: ["Mount Spurr", "Mount Redoubt", "Augustine Volcano", "Mount Iliamna"],
    correctIndex: 1,
    explanation: "Mount Redoubt rises to 3,108 meters, sending ash plumes over 15 kilometers into the atmosphere during major eruptions.",
    status: "published"
  },
  {
    id: "na-m-55",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the largest freshwater lake in Alaska, located at the base of the Alaska Peninsula?",
    options: ["Becharof Lake", "Iliamna Lake", "Lake Clark", "Naknek Lake"],
    correctIndex: 1,
    explanation: "Iliamna Lake covers 2,622 square kilometers, serving as the primary nursery for Bristol Bay's sockeye salmon run.",
    status: "published"
  },
  {
    id: "na-m-56",
    continent: "North America",
    difficulty: "Medium",
    question: "Which bay in southwestern Alaska hosts the most valuable commercial wild sockeye salmon fishery in the world?",
    options: ["Kachemak Bay", "Bristol Bay", "Prudhoe Bay", "Norton Sound"],
    correctIndex: 1,
    explanation: "Bristol Bay sees returns of up to 40 to 60 million wild sockeye salmon each summer into its pristine river networks.",
    status: "published"
  },
  {
    id: "na-m-57",
    continent: "North America",
    difficulty: "Medium",
    question: "Which oil-rich bay on the Arctic Ocean coast of Alaska serves as the northern starting terminus of the 1,287-kilometer Trans-Alaska Pipeline?",
    options: ["Kotzebue Sound", "Prudhoe Bay", "Kivalina", "Barrow Bay"],
    correctIndex: 1,
    explanation: "Prudhoe Bay Oil Field, discovered in 1968, is the largest oil field in North America.",
    status: "published"
  },
  {
    id: "na-m-58",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the northernmost incorporated city in the United States, situated on the Arctic Ocean coast of Alaska?",
    options: ["Nome", "Utqia\u0121vik (formerly Barrow)", "Kotzebue", "Prudhoe Bay"],
    correctIndex: 1,
    explanation: "Utqiaġvik sits at latitude 71°17'N, experiencing 65 days of continuous polar night in winter.",
    status: "published"
  },
  {
    id: "na-m-59",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the northernmost point of the United States mainland, located just northeast of Utqiaġvik in Alaska?",
    options: ["Cape Prince of Wales", "Point Barrow (Nuvuk)", "Cape Lisburne", "Point Hope"],
    correctIndex: 1,
    explanation: "Point Barrow marks the official geographic boundary between the Chukchi Sea and the Beaufort Sea.",
    status: "published"
  },
  {
    id: "na-m-60",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the westernmost point of the North American continental mainland, located on the Seward Peninsula in Alaska facing the Bering Strait?",
    options: ["Point Barrow", "Cape Prince of Wales", "Cape Wrangell", "Point Hope"],
    correctIndex: 1,
    explanation: "Cape Prince of Wales sits at longitude 168°05'W, just 82 kilometers across the Bering Strait from Russia's Cape Dezhnev.",
    status: "published"
  },
  {
    id: "na-m-61",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the westernmost point of the United States by direction of travel, located on Attu Island in the outer Aleutians?",
    options: ["Cape Prince of Wales", "Cape Wrangell", "Amatignak Island", "Adak Island"],
    correctIndex: 1,
    explanation: "Cape Wrangell on Attu Island sits at 172°27'E longitude, making it technically in the Eastern Hemisphere.",
    status: "published"
  },
  {
    id: "na-m-62",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the southernmost point of the 50 United States, located on the Big Island of Hawaii?",
    options: ["Key West", "Ka Lae (South Point)", "Cape Sable", "Boca Chica"],
    correctIndex: 1,
    explanation: "Ka Lae sits at latitude 18°54'N, further south than Key West, Florida (which is at 24°33'N).",
    status: "published"
  },
  {
    id: "na-m-63",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the southernmost point of the 48 contiguous United States, located in Everglades National Park, Florida?",
    options: ["Key West", "Cape Sable", "Islamorada", "Dry Tortugas"],
    correctIndex: 1,
    explanation: "Cape Sable on the southern tip of mainland Florida sits at 25°07'N latitude.",
    status: "published"
  },
  {
    id: "na-m-64",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the southernmost point of the continental United States accessible by public paved road, marked by a concrete buoy in Florida?",
    options: ["Cape Sable", "Key West (Southernmost Point Buoy)", "Dry Tortugas", "Key Largo"],
    correctIndex: 1,
    explanation: "The concrete buoy monument at Whitehead and South streets in Key West is famously labeled '90 miles to Cuba'.",
    status: "published"
  },
  {
    id: "na-m-65",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the 182-kilometer overseas highway in Florida featuring 42 bridges, connecting the mainland to Key West?",
    options: ["Sunshine Skyway", "Overseas Highway (US Route 1)", "Seven Mile Bridge Road", "Alligator Alley"],
    correctIndex: 1,
    explanation: "The Overseas Highway incorporates the historic railbed of Henry Flagler's Florida East Coast Railway, including the Seven Mile Bridge.",
    status: "published"
  },
  {
    id: "na-m-66",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the small archipelago of seven coral and sand islands 110 kilometers west of Key West, home to the massive brick fortress Fort Jefferson?",
    options: ["Biscayne", "Dry Tortugas National Park", "Marquesas Keys", "Bahia Honda"],
    correctIndex: 1,
    explanation: "Dry Tortugas was named by Ponce de León in 1513 for abundant sea turtles and lack of fresh surface water.",
    status: "published"
  },
  {
    id: "na-m-67",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the long barrier island chain off the coast of North Carolina that arches into the Atlantic Ocean, home to Cape Hatteras and Kitty Hawk?",
    options: ["Sea Islands", "Outer Banks", "Florida Keys", "Golden Isles"],
    correctIndex: 1,
    explanation: "The Outer Banks features Cape Hatteras ('Graveyard of the Atlantic') and Kill Devil Hills, where the Wright brothers flew in 1903.",
    status: "published"
  },
  {
    id: "na-m-68",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the tallest brick lighthouse in the United States, standing 60 meters tall on the Outer Banks of North Carolina?",
    options: ["Bodie Island Lighthouse", "Cape Hatteras Lighthouse", "Ocracoke Lighthouse", "Cape Lookout Lighthouse"],
    correctIndex: 1,
    explanation: "Cape Hatteras Lighthouse was famously moved 880 meters inland in 1999 to save it from beach erosion.",
    status: "published"
  },
  {
    id: "na-m-69",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the large coastal bay and arm of the Atlantic Ocean in eastern Massachusetts that gave its name to the state?",
    options: ["Narragansett Bay", "Massachusetts Bay", "Buzzards Bay", "Cape Cod Bay"],
    correctIndex: 1,
    explanation: "Massachusetts Bay is bounded by Cape Ann to the north and the hooked arm of Cape Cod to the south.",
    status: "published"
  },
  {
    id: "na-m-70",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the prominent hooked sandy peninsula in southeastern Massachusetts known for maritime villages, cranberry bogs, and lighthouses?",
    options: ["Cape Ann", "Cape Cod", "Nantucket", "Martha's Vineyard"],
    correctIndex: 1,
    explanation: "Cape Cod was formed by terminal glacial moraines deposited during the retreat of the Laurentide Ice Sheet.",
    status: "published"
  },
  {
    id: "na-m-71",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the scenic island located south of Cape Cod, Massachusetts, famous as a summer resort and former historic whaling hub?",
    options: ["Block Island", "Martha's Vineyard", "Mount Desert Island", "Shelter Island"],
    correctIndex: 1,
    explanation: "Martha's Vineyard includes towns like Edgartown and the colorful Victorian gingerbread cottages of Oak Bluffs.",
    status: "published"
  },
  {
    id: "na-m-72",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the historic island 48 kilometers south of Cape Cod that was the whaling capital of the world in the 18th and early 19th centuries?",
    options: ["Martha's Vineyard", "Nantucket", "Cuttyhunk", "Fishers Island"],
    correctIndex: 1,
    explanation: "Nantucket's whaling fleet inspired Herman Melville's classic novel Moby-Dick.",
    status: "published"
  },
  {
    id: "na-m-73",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the national park on Mount Desert Island on the rugged coast of Maine, the oldest national park east of the Mississippi River?",
    options: ["Baxter State Park", "Acadia National Park", "White Mountain", "Fundy"],
    correctIndex: 1,
    explanation: "Acadia encompasses Cadillac Mountain, where visitors can view the earliest sunrise in the United States for much of the year.",
    status: "published"
  },
  {
    id: "na-m-74",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the highest mountain peak in Maine, located in Baxter State Park at 1,606 meters, marking the northern terminus of the Appalachian Trail?",
    options: ["Mount Washington", "Mount Katahdin", "Mount Mansfield", "Cadillac Mountain"],
    correctIndex: 1,
    explanation: "Mount Katahdin ('The Greatest Mountain' in Penobscot) terminates the 3,500-kilometer Appalachian Trail.",
    status: "published"
  },
  {
    id: "na-m-75",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the largest freshwater lake in New England, located in the North Woods of Maine covering 300 square kilometers?",
    options: ["Lake Winnipesaukee", "Moosehead Lake", "Lake Memphremagog", "Sebago Lake"],
    correctIndex: 1,
    explanation: "Moosehead Lake is the source of the Kennebec River, surrounded by dense boreal spruce-fir forests.",
    status: "published"
  },
  {
    id: "na-m-76",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the 193-kilometer freshwater lake stretching along the border between New York and Vermont, extending into Quebec?",
    options: ["Lake George", "Lake Champlain", "Lake Placid", "Oneida Lake"],
    correctIndex: 1,
    explanation: "Lake Champlain drains northward through the Richelieu River into the St. Lawrence River.",
    status: "published"
  },
  {
    id: "na-m-77",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the narrow 51-kilometer oligotrophic lake in upstate New York nicknamed the 'Queen of American Lakes', situated in the Adirondack foothills?",
    options: ["Lake Champlain", "Lake George", "Seneca Lake", "Cayuga Lake"],
    correctIndex: 1,
    explanation: "Lake George drains into Lake Champlain through the Ticonderoga River.",
    status: "published"
  },
  {
    id: "na-m-78",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the group of eleven long, narrow glacial lakes in central upstate New York, including Seneca and Cayuga lakes, resembling spread digits?",
    options: ["Great Lakes", "Finger Lakes", "Adirondack Lakes", "Laurentian Lakes"],
    correctIndex: 1,
    explanation: "The Finger Lakes were gouged out by continental glaciers, now famous for gorges, waterfalls (Watkins Glen), and Riesling vineyards.",
    status: "published"
  },
  {
    id: "na-m-79",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the 584-kilometer historic canal completed in 1825 that connected the Hudson River at Albany with Lake Erie at Buffalo?",
    options: ["Oswego Canal", "Erie Canal", "Champlain Canal", "Welland Canal"],
    correctIndex: 1,
    explanation: "The Erie Canal revolutionized American commerce, cutting shipping costs by 95% and establishing New York City as the nation's premier port.",
    status: "published"
  },
  {
    id: "na-m-80",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the ship canal in Ontario, Canada, that bypasses Niagara Falls by connecting Lake Ontario to Lake Erie through eight locks?",
    options: ["Trent-Severn Waterway", "Welland Canal", "Rideau Canal", "Soo Locks"],
    correctIndex: 1,
    explanation: "The Welland Canal climbs 99.5 meters over the Niagara Escarpment, allowing ocean freighters to bypass Niagara Falls.",
    status: "published"
  },
  {
    id: "na-m-81",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the set of parallel navigation locks on the St. Marys River connecting Lake Superior to Lake Huron at Sault Ste. Marie?",
    options: ["Welland Canal", "Soo Locks", "St. Clair Locks", "Mackinac Canal"],
    correctIndex: 1,
    explanation: "The Soo Locks bypass the St. Marys Rapids, handling massive tonnages of iron ore from Minnesota's Mesabi Range.",
    status: "published"
  },
  {
    id: "na-m-82",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the narrow 8-kilometer waterway that connects Lake Michigan with Lake Huron, spanned by the Mackinac Bridge?",
    options: ["St. Clair River", "Straits of Mackinac", "Detroit River", "St. Marys River"],
    correctIndex: 1,
    explanation: "Hydrologically, Lake Michigan and Lake Huron are two lobes of a single lake connected through the deep Straits of Mackinac.",
    status: "published"
  },
  {
    id: "na-m-83",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the historic island in the Straits of Mackinac between Michigan's upper and lower peninsulas where motor vehicles have been banned since 1898?",
    options: ["Beaver Island", "Mackinac Island", "Drummond Island", "Bois Blanc Island"],
    correctIndex: 1,
    explanation: "Mackinac Island relies exclusively on horse-drawn carriages, bicycles, and walking, celebrated for Victorian architecture and fudge.",
    status: "published"
  },
  {
    id: "na-m-84",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the prominent sedimentary geological rock escarpment that runs across Ontario, New York, and Wisconsin, over which Niagara Falls plunges?",
    options: ["Allegheny Front", "Niagara Escarpment", "Frontenac Arch", "Balcones Escarpment"],
    correctIndex: 1,
    explanation: "The Niagara Escarpment is a massive cuesta of weather-resistant Silurian Lockport dolomite caprock.",
    status: "published"
  },
  {
    id: "na-m-85",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the 202-kilometer canal connecting Ottawa to Lake Ontario at Kingston, Canada, built in 1832 as a military supply route?",
    options: ["Welland Canal", "Rideau Canal", "Trent-Severn Canal", "Lachine Canal"],
    correctIndex: 1,
    explanation: "The Rideau Canal is the oldest continuously operated canal system in North America, turning into the world's longest skating rink in winter.",
    status: "published"
  },
  {
    id: "na-m-86",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the large river in southwestern Canada that forms the international border between Ontario and the US states of Minnesota and Michigan?",
    options: ["Rainy River", "St. Marys River", "Pigeon River", "Rainy River and St. Marys"],
    correctIndex: 1,
    explanation: "The St. Marys River flows from Lake Superior into Lake Huron, carrying the international boundary.",
    status: "published"
  },
  {
    id: "na-m-87",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the largest freshwater island in the world, located in Lake Huron within the Canadian province of Ontario?",
    options: ["Isle Royale", "Manitoulin Island", "St. Joseph Island", "Pelee Island"],
    correctIndex: 1,
    explanation: "Manitoulin Island covers 2,766 square kilometers, containing over 100 inland lakes of its own.",
    status: "published"
  },
  {
    id: "na-m-88",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the national park consisting of a wilderness island in western Lake Superior, famous for long-term ecological predator-prey studies of wolves and moose?",
    options: ["Voyageurs", "Isle Royale National Park", "Apostle Islands", "Pukaskwa"],
    correctIndex: 1,
    explanation: "Isle Royale is an isolated roadless island archipelago in Michigan, studied continuously by wildlife biologists since 1958.",
    status: "published"
  },
  {
    id: "na-m-89",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the national park in northern Minnesota along the Canadian border featuring interconnected waterways, accessible almost entirely by canoe and boat?",
    options: ["Boundary Waters", "Voyageurs National Park", "Isle Royale", "Itasca"],
    correctIndex: 1,
    explanation: "Voyageurs National Park protects historic waterways traversed by French-Canadian fur-trade voyageurs.",
    status: "published"
  },
  {
    id: "na-m-90",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the Minnesota state park that contains Lake Itasca, the official geographical headwaters of the Mississippi River?",
    options: ["Gooseberry Falls", "Itasca State Park", "Split Rock", "Jay Cooke"],
    correctIndex: 1,
    explanation: "At Lake Itasca, the Mississippi River begins as a small stream roughly 6 meters wide and knee-deep.",
    status: "published"
  },
  {
    id: "na-m-91",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the region in southwestern Wisconsin, southeastern Minnesota, and northeastern Iowa that escaped glaciation during the last Ice Age, resulting in deep coulees and karst bluffs?",
    options: ["Piney Woods", "The Driftless Area", "Ozarks", "Red River Valley"],
    correctIndex: 1,
    explanation: "The Driftless Area lacks glacial drift (till), featuring deeply dissected Paleozoic valleys and cold spring-fed trout creeks.",
    status: "published"
  },
  {
    id: "na-m-92",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the heavily eroded mountain plateau in southern Missouri, northern Arkansas, and eastern Oklahoma characterized by oak forests, karst springs, and the Boston Mountains?",
    options: ["Ouachita Mountains", "The Ozarks (Ozark Plateau)", "Appalachians", "Cumberland Plateau"],
    correctIndex: 1,
    explanation: "The Ozark Plateau covers 120,000 square kilometers, famous for clear rivers like the Buffalo and Current rivers.",
    status: "published"
  },
  {
    id: "na-m-93",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the mountain range in west-central Arkansas and southeastern Oklahoma that is unique in the US interior for its east-west trending ridges?",
    options: ["Ozark Mountains", "Ouachita Mountains", "Boston Mountains", "Arbuckle Mountains"],
    correctIndex: 1,
    explanation: "The Ouachita Mountains were formed during the Ouachita orogeny by tectonic collision with the South American plate in the Pennsylvanian.",
    status: "published"
  },
  {
    id: "na-m-94",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the major river rising in Colorado that flows eastward across Kansas, Oklahoma, and Arkansas to join the Mississippi River?",
    options: ["Platte River", "Arkansas River", "Cimarron River", "Canadian River"],
    correctIndex: 1,
    explanation: "The Arkansas River flows 2,364 kilometers, the second-longest tributary in the Mississippi-Missouri system.",
    status: "published"
  },
  {
    id: "na-m-95",
    continent: "North America",
    difficulty: "Medium",
    question: "Which braided river formed by the North and South branches in Nebraska flows eastward into the Missouri River, historically following the Oregon and Mormon trails?",
    options: ["Niobrara River", "Platte River", "Republican River", "Loup River"],
    correctIndex: 1,
    explanation: "The Platte River was famously described by pioneers as 'a mile wide and six inches deep', vital for sandhill crane migration.",
    status: "published"
  },
  {
    id: "na-m-96",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the vast expanse of grass-stabilized sand dunes covering over 50,000 square kilometers in north-central Nebraska, atop the Ogallala Aquifer?",
    options: ["Great Sand Dunes", "Nebraska Sandhills", "Flint Hills", "Red Desert"],
    correctIndex: 1,
    explanation: "The Nebraska Sandhills is the largest sand dune formation in the Western Hemisphere, sustained by high sub-surface water tables.",
    status: "published"
  },
  {
    id: "na-m-97",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the vast shallow regional groundwater aquifer underlying roughly 450,000 square kilometers across eight US Great Plains states, vital for agricultural irrigation?",
    options: ["Edwards Aquifer", "Ogallala Aquifer (High Plains Aquifer)", "Dakota Aquifer", "Floridan Aquifer"],
    correctIndex: 1,
    explanation: "The Ogallala Aquifer supports one-sixth of the world's grain production but is being depleted faster than natural recharge rates.",
    status: "published"
  },
  {
    id: "na-m-98",
    continent: "North America",
    difficulty: "Medium",
    question: "Which river in southeastern Canada and northeastern Maine flows into the Bay of Fundy, famous for the Saint John River Reversing Falls?",
    options: ["Miramichi River", "Saint John River (Wolastoq)", "Restigouche River", "St. Croix River"],
    correctIndex: 1,
    explanation: "At Reversing Falls in Saint John, New Brunswick, high Fundy ocean tides push water backward up the river gorge through rapids.",
    status: "published"
  },
  {
    id: "na-m-99",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the scenic 298-kilometer coastal highway looping around the northern tip of Cape Breton Island in Nova Scotia, passing through Cape Breton Highlands National Park?",
    options: ["Trans-Canada Highway", "Cabot Trail", "Icefields Parkway", "Sea to Sky Highway"],
    correctIndex: 1,
    explanation: "The Cabot Trail was named after explorer John Cabot who landed in Atlantic Canada in 1497, climbing coastal ocean cliffs.",
    status: "published"
  },
  {
    id: "na-m-100",
    continent: "North America",
    difficulty: "Medium",
    question: "What is the long, narrow 163-kilometer fjord-like lake in the Okanagan Valley of southern British Columbia, famous in folklore for the mythical Ogopogo lake monster?",
    options: ["Shuswap Lake", "Okanagan Lake", "Kootenay Lake", "Kamloops Lake"],
    correctIndex: 1,
    explanation: "Okanagan Lake sits in a semi-arid rain-shadow valley that is British Columbia's premier orchard and wine-growing region.",
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
  {
    id: "na-h-3",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the peninsular exclave of Whatcom County, Washington, situated on the southern tip of the Tsawwassen Peninsula below the 49th parallel, accessible by land only through Canada?",
    options: ["Northwest Angle", "Point Roberts", "Alburgh Tongue", "Elm Point"],
    correctIndex: 1,
    explanation: "Point Roberts was created by the 1846 Oregon Treaty setting the border at 49°N, isolating it from mainland Washington.",
    status: "published"
  },
  {
    id: "na-h-4",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the small practical exclave of Minnesota that is the only part of the contiguous 48 US states located north of the 49th parallel, surrounded by Lake of the Woods and Manitoba?",
    options: ["Point Roberts", "Northwest Angle", "Isle Royale", "Grand Portage"],
    correctIndex: 1,
    explanation: "The Northwest Angle resulted from a 1783 Treaty of Paris surveying error assuming the Mississippi's source lay northwest of Lake of the Woods.",
    status: "published"
  },
  {
    id: "na-h-5",
    continent: "North America",
    difficulty: "Hard",
    question: "Which French overseas archipelago collectivity consisting of eight islands lies just 25 kilometers off the Burin Peninsula of Newfoundland, Canada?",
    options: ["Magdalen Islands", "Saint Pierre and Miquelon", "Anticosti", "Sable Island"],
    correctIndex: 1,
    explanation: "Saint Pierre and Miquelon is the only remaining French territorial remnant of New France in North America, using the Euro.",
    status: "published"
  },
  {
    id: "na-h-6",
    continent: "North America",
    difficulty: "Hard",
    question: "Which 1.3-square-kilometer uninhabited Arctic island in the Kennedy Channel between Ellesmere Island and Greenland was divided between Canada and Denmark in 2022, ending the peaceful 'Whisky War'?",
    options: ["Devon Island", "Hans Island (Tartupaluk)", "Axel Heiberg Island", "Cornwallis Island"],
    correctIndex: 1,
    explanation: "On June 14, 2022, Canada and Denmark agreed to split Hans Island along a natural geological ravine, creating a land border between Canada and the Kingdom of Denmark.",
    status: "published"
  },
  {
    id: "na-h-7",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the largest uninhabited island on Earth, located in the Canadian Arctic Archipelago in Nunavut?",
    options: ["Baffin Island", "Devon Island", "Ellesmere Island", "Axel Heiberg Island"],
    correctIndex: 1,
    explanation: "Devon Island covers 55,247 square kilometers, home to the Haughton impact crater used by NASA as a Mars analogue testing ground.",
    status: "published"
  },
  {
    id: "na-h-8",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the northernmost point of land in Canada and all of North America, located on Ellesmere Island in Nunavut at latitude 83°06'N?",
    options: ["Cape Columbia", "Cape Morris Jesup", "Point Barrow", "Alert"],
    correctIndex: 0,
    explanation: "Cape Columbia faces the Arctic Ocean on northern Ellesmere Island, historical starting point for Robert Peary's 1909 North Pole attempt.",
    status: "published"
  },
  {
    id: "na-h-9",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the northernmost permanently inhabited settlement in the world, located on the northeastern tip of Ellesmere Island in Nunavut, Canada, at 82°30'N?",
    options: ["Grise Fiord", "Alert (CFS Alert)", "Eureka", "Longyearbyen"],
    correctIndex: 1,
    explanation: "Canadian Forces Station Alert is situated just 817 kilometers from the North Pole, home to military signals personnel and Environment Canada researchers.",
    status: "published"
  },
  {
    id: "na-h-10",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the northernmost public civilian indigenous community in Canada, situated on southern Ellesmere Island?",
    options: ["Resolute", "Grise Fiord (Aujuittuq)", "Arctic Bay", "Pond Inlet"],
    correctIndex: 1,
    explanation: "Grise Fiord ('Place that Never Melts') was created in 1953 during the Canadian government's High Arctic relocation program.",
    status: "published"
  },
  {
    id: "na-h-11",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the major geological flood control structure operated by the US Army Corps of Engineers in Louisiana to prevent the Mississippi River from permanently diverting into the Atchafalaya River?",
    options: ["Bonnet Carr\u00e9 Spillway", "Old River Control Structure", "Morganza Spillway", "Davis Pond"],
    correctIndex: 1,
    explanation: "The Old River Control Structure regulates the flow to prevent the Mississippi from taking a shorter, steeper route to the Gulf via the Atchafalaya.",
    status: "published"
  },
  {
    id: "na-h-12",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the largest river swamp in North America, covering roughly 5,700 square kilometers in south-central Louisiana?",
    options: ["Okefenokee Swamp", "Atchafalaya Basin (Atchafalaya Swamp)", "Great Dismal Swamp", "Honey Island Swamp"],
    correctIndex: 1,
    explanation: "The Atchafalaya Basin is a vast labyrinth of bayous, bald cypress swamps, and marshes draining to the Gulf of Mexico.",
    status: "published"
  },
  {
    id: "na-h-13",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the large blackwater swamp straddling the Georgia-Florida border, the headwaters of the Suwannee and St. Marys rivers?",
    options: ["Great Dismal Swamp", "Okefenokee Swamp", "Green Swamp", "Fakahatchee Strand"],
    correctIndex: 1,
    explanation: "Okefenokee ('Land of Trembling Earth') covers 1,770 square kilometers, the largest intact blackwater wetland in North America.",
    status: "published"
  },
  {
    id: "na-h-14",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the famous meteorite impact crater in northern Arizona, measuring 1,200 meters in diameter and 170 meters deep, formed 50,000 years ago by an iron-nickel meteorite?",
    options: ["Upheaval Dome", "Barringer Meteorite Crater (Meteor Crater)", "Odessa Crater", "Haughton Crater"],
    correctIndex: 1,
    explanation: "Barringer Crater is exceptionally preserved due to the dry Arizona climate, investigated by Daniel Barringer in the early 1900s.",
    status: "published"
  },
  {
    id: "na-h-15",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the massive volcanic caldera in the Jemez Mountains of northern New Mexico, measuring 22 kilometers across, formed roughly 1.25 million years ago?",
    options: ["Long Valley Caldera", "Valles Caldera", "Yellowstone Caldera", "La Garita Caldera"],
    correctIndex: 1,
    explanation: "Valles Caldera is a classic resurgent volcanic caldera, designated a National Preserve featuring thermal springs and elk herds.",
    status: "published"
  },
  {
    id: "na-h-16",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the massive volcanic caldera in eastern California, formed 760,000 years ago during the catastrophic Bishop Tuff eruption?",
    options: ["Valles Caldera", "Long Valley Caldera", "Crater Lake", "Medicine Lake Caldera"],
    correctIndex: 1,
    explanation: "The Long Valley Caldera covers 500 square kilometers near Mammoth Mountain, releasing geothermal emissions and seismic swarms.",
    status: "published"
  },
  {
    id: "na-h-17",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the saline, alkaline soda lake in Mono County, California, famous for bizarre calcium carbonate limestone tufa towers rising from its water?",
    options: ["Salton Sea", "Mono Lake", "Pyramid Lake", "Owens Lake"],
    correctIndex: 1,
    explanation: "Mono Lake's tufa towers were exposed when water diversions to Los Angeles dropped the lake level by 14 meters between 1941 and 1982.",
    status: "published"
  },
  {
    id: "na-h-18",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the shallow, endorheic saline lake in southeastern California created accidentally in 1905 when Colorado River floodwaters breached an irrigation canal?",
    options: ["Mono Lake", "Salton Sea", "Owens Lake", "Lake Elsinore"],
    correctIndex: 1,
    explanation: "The Colorado River flowed uncontrolled into the Salton Sink for nearly two years, creating California's largest lake by surface area.",
    status: "published"
  },
  {
    id: "na-h-19",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the massive igneous batholith in the Black Hills of northeastern Wyoming, standing 386 meters tall as America's first National Monument?",
    options: ["Shiprock", "Devils Tower (Bear Lodge / Mat\u021f\u00f3 Th\u00edpila)", "Chimney Rock", "El Capitan"],
    correctIndex: 1,
    explanation: "Devils Tower was proclaimed the first US National Monument in 1906 by President Theodore Roosevelt, formed of hexagonal columnar phonolite porphyry.",
    status: "published"
  },
  {
    id: "na-h-20",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the sacred volcanic neck (monadnock) rising 482 meters above the high desert plain in the Navajo Nation of northwestern New Mexico?",
    options: ["Devils Tower", "Shiprock (Ts\u00e9 Bit\u02bca\u02bc\u00ed)", "Agathla Peak", "Cabezon Peak"],
    correctIndex: 1,
    explanation: "Tsé Bitʼaʼí ('Rock with Wings') is the eroded volcanic throat of an ancient minette volcanic pipe with radiating basaltic dikes.",
    status: "published"
  },
  {
    id: "na-h-21",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the geological province in the Four Corners region of the southwestern US famous for flat-lying sedimentary rock layers deeply carved by canyons (Canyonlands, Arches, Bryce)?",
    options: ["Basin and Range", "Colorado Plateau", "Columbia Plateau", "Interior Lowlands"],
    correctIndex: 1,
    explanation: "The Colorado Plateau covers 337,000 square kilometers, remarkably uplifted 1.5 to 3 km without major internal deformation.",
    status: "published"
  },
  {
    id: "na-h-22",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the national park in southern Utah famous for the world's highest concentration of natural stone arches (over 2,000 documented arches)?",
    options: ["Canyonlands", "Arches National Park", "Capitol Reef", "Zion"],
    correctIndex: 1,
    explanation: "Arches National Park features Delicate Arch, Landscape Arch, and Double Arch, carved from Entrada Sandstone underlain by salt beds.",
    status: "published"
  },
  {
    id: "na-h-23",
    continent: "North America",
    difficulty: "Hard",
    question: "Which national park in southwestern Utah features the 'Narrows' where the Virgin River cuts through sheer 300-meter vertical Navajo Sandstone walls?",
    options: ["Bryce Canyon", "Zion National Park", "Capitol Reef", "Canyonlands"],
    correctIndex: 1,
    explanation: "Zion Canyon was carved by the North Fork of the Virgin River, featuring Angels Landing and the Great White Throne.",
    status: "published"
  },
  {
    id: "na-h-24",
    continent: "North America",
    difficulty: "Hard",
    question: "Which national park in southern Utah is not actually a canyon, but an amphitheater of thousands of colorful rock spires known as 'hoodoos'?",
    options: ["Zion", "Bryce Canyon National Park", "Cedar Breaks", "Capitol Reef"],
    correctIndex: 1,
    explanation: "Bryce Canyon features red, orange, and white limestone hoodoos formed by frost-wedging in the Claron Formation.",
    status: "published"
  },
  {
    id: "na-h-25",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the 160-kilometer waterpocket fold (monocline) wrinkle in the Earth's crust that forms the spine of Capitol Reef National Park in Utah?",
    options: ["San Rafael Swell", "Waterpocket Fold", "Comb Ridge", "Kaibab Upwarp"],
    correctIndex: 1,
    explanation: "The Waterpocket Fold is a classic monocline created during the Laramide orogeny 50 to 70 million years ago.",
    status: "published"
  },
  {
    id: "na-h-26",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the massive basalt plateau in eastern Washington and northern Oregon created by colossal flood basalt eruptions 16 million years ago?",
    options: ["Colorado Plateau", "Columbia River Basalt Group (Columbia Plateau)", "Snake River Plain", "Modoc Plateau"],
    correctIndex: 1,
    explanation: "The Columbia River Basalts cover 210,000 square kilometers with over 300 individual lava flows reaching up to 1.8 kilometers in total thickness.",
    status: "published"
  },
  {
    id: "na-h-27",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the barren, deeply scoured landscape in eastern Washington created by catastrophic Glacial Lake Missoula outburst floods during the Pleistocene?",
    options: ["The Badlands", "Channeled Scablands", "Snake River Plain", "Palouse Hills"],
    correctIndex: 1,
    explanation: "Geologist J Harlen Bretz proved that the Channeled Scablands and Dry Falls were carved in days by colossal 100-meter-deep flood torrents.",
    status: "published"
  },
  {
    id: "na-h-28",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the skeleton waterfall in central Washington that was once the largest known waterfall on Earth, five times the width of Niagara, carved by the Missoula Floods?",
    options: ["Shoshone Falls", "Dry Falls", "Multnomah Falls", "Palouse Falls"],
    correctIndex: 1,
    explanation: "Dry Falls spans 5.6 kilometers wide and drops 120 meters, now dry as the Columbia River returned to its normal canyon course.",
    status: "published"
  },
  {
    id: "na-h-29",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the fertile, rolling loess hill landscape in southeastern Washington and north-central Idaho, famous for soft white wheat production?",
    options: ["Channeled Scablands", "The Palouse", "Willamette Valley", "Yakima Valley"],
    correctIndex: 1,
    explanation: "The Palouse features undulating hills formed of wind-blown silt (loess) up to 100 meters thick deposited during the Pleistocene.",
    status: "published"
  },
  {
    id: "na-h-30",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the active basaltic shield volcano on the Big Island of Hawaii that is one of the most active volcanoes on Earth, erupting nearly continuously between 1983 and 2018?",
    options: ["Mauna Loa", "Kilauea", "Hualalai", "Mauna Kea"],
    correctIndex: 1,
    explanation: "Kilauea is the youngest subaerial volcano of the Hawaiian hotspot, famous for Halema'uma'u crater and Pu'u 'O'o vent.",
    status: "published"
  },
  {
    id: "na-h-31",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the world's largest active subaerial volcano by mass and volume, covering half of the Big Island of Hawaii, rising to 4,169 meters above sea level?",
    options: ["Kilauea", "Mauna Loa", "Mauna Kea", "Haleakala"],
    correctIndex: 1,
    explanation: "Mauna Loa's submarine flank extends 5 kilometers to the sea floor, depressing the oceanic crust by another 8 kilometers (total 17 km volcanic pile).",
    status: "published"
  },
  {
    id: "na-h-32",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the dormant shield volcano on Hawaii's Big Island that is the tallest mountain on Earth measured from its submarine oceanic base (over 10,200 meters)?",
    options: ["Mauna Loa", "Mauna Kea", "Kilauea", "Haleakala"],
    correctIndex: 1,
    explanation: "Mauna Kea rises 4,207 meters above sea level but extends 6,000 meters below the Pacific surface, hosting world-leading astronomical observatories.",
    status: "published"
  },
  {
    id: "na-h-33",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the massive dormant shield volcano that forms more than 75% of the island of Maui in Hawaii, famous for its 800-meter-deep summit depression?",
    options: ["Mauna Kea", "Haleakal\u0101 (East Maui Volcano)", "West Maui Mountains", "Lanaihale"],
    correctIndex: 1,
    explanation: "Haleakalā ('House of the Sun') features an erosional summit valley filled with cinder cones, home to the rare silversword plant.",
    status: "published"
  },
  {
    id: "na-h-34",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the underwater submarine volcano located 35 kilometers southeast of Hawaii's Big Island that will form the next Hawaiian island in roughly 10,000 to 100,000 years?",
    options: ["Kama\u02bbehuakanaloa (formerly L\u014d\u02bbihi Seamount)", "Mahukona", "Penguin Bank", "Puna Ridge"],
    correctIndex: 0,
    explanation: "Kamaʻehuakanaloa rises over 3,000 meters from the sea floor, its summit currently sitting roughly 975 meters below sea level.",
    status: "published"
  },
  {
    id: "na-h-35",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the rugged coastal region in northwestern Kauai, Hawaii, famous for 1,200-meter sheer fluted emerald-green sea cliffs (pali)?",
    options: ["Waimea Canyon", "N\u0101 Pali Coast", "Poipu Coast", "Hanalei Bay"],
    correctIndex: 1,
    explanation: "The Nā Pali Coast features razor-sharp volcanic ridges dropping precipitously into the Pacific, accessible only by foot (Kalalau Trail), boat, or helicopter.",
    status: "published"
  },
  {
    id: "na-h-36",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the 900-meter-deep canyon in southwestern Kauai, Hawaii, popularly dubbed the 'Grand Canyon of the Pacific' by Mark Twain?",
    options: ["Iao Valley", "Waimea Canyon", "Kalalau Valley", "Hana Canyon"],
    correctIndex: 1,
    explanation: "Waimea Canyon was carved by the Waimea River cutting through layered red basalt lava flows and a collapsed caldera graben.",
    status: "published"
  },
  {
    id: "na-h-37",
    continent: "North America",
    difficulty: "Hard",
    question: "Which mountain summit on the island of Kauai is considered one of the wettest spots on Earth, receiving an average of over 11,400 millimeters of rainfall annually?",
    options: ["Mauna Kea", "Mount Wai\u02bbale\u02bbale", "Haleakala", "Kawaikini"],
    correctIndex: 1,
    explanation: "Mount Waiʻaleʻale's high shield topography funnels moist northeast trade winds directly up sheer cliffs, triggering near-constant orographic rain.",
    status: "published"
  },
  {
    id: "na-h-38",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the second-largest island in the Hawaiian archipelago, known as the 'Valley Isle'?",
    options: ["Oahu", "Maui", "Kauai", "Molokai"],
    correctIndex: 1,
    explanation: "Maui is formed by two shield volcanoes joined by an isthmus: West Maui and Haleakalā.",
    status: "published"
  },
  {
    id: "na-h-39",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the fifth-largest Hawaiian island, famous for having the highest sea cliffs in the world along its northern coast (up to 1,010 meters)?",
    options: ["Kauai", "Molokai", "Lanai", "Niihau"],
    correctIndex: 1,
    explanation: "Molokai's northern sea cliffs were created by the colossal prehistoric East Molokai giant submarine landslide into the Pacific basin.",
    status: "published"
  },
  {
    id: "na-h-40",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the small privately-owned Hawaiian island known as the 'Forbidden Isle', inhabited almost exclusively by Native Hawaiians speaking the Hawaiian language?",
    options: ["Lanai", "Ni\u02bbihau", "Kahoolawe", "Molokini"],
    correctIndex: 1,
    explanation: "Niʻihau was purchased in 1864 by Elizabeth Sinclair from the Kingdom of Hawaii and remains privately managed by the Robinson family.",
    status: "published"
  },
  {
    id: "na-h-41",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the uninhabited Hawaiian island that was used as a live-fire bombing range by the US military from 1941 to 1990 before being returned to the state?",
    options: ["Niihau", "Kaho\u02bbolawe", "Lanai", "Molokini"],
    correctIndex: 1,
    explanation: "Kahoʻolawe is currently protected as a cultural reserve reserved for Native Hawaiian spiritual and traditional practices.",
    status: "published"
  },
  {
    id: "na-h-42",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the small crescent-shaped partially submerged volcanic crater islet in the 'Alalākeiki Channel between Maui and Kahoʻolawe, popular for scuba diving?",
    options: ["Lehua", "Molokini", "Kaula", "Moku Manu"],
    correctIndex: 1,
    explanation: "Molokini is an ancient basalt tuff cone whose northern rim has eroded below sea level, sheltering a marine life conservation district.",
    status: "published"
  },
  {
    id: "na-h-43",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the highest mountain peak in the US state of Oregon, an active glaciated stratovolcano rising to 3,429 meters east of Portland?",
    options: ["Mount Jefferson", "Mount Hood (Wy'east)", "South Sister", "Mount Bachelor"],
    correctIndex: 1,
    explanation: "Mount Hood is Oregon's highest peak, home to Timberline Lodge and year-round skiing on the Palmer Glacier.",
    status: "published"
  },
  {
    id: "na-h-44",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the massive dormant stratovolcano in northern California that rises 4,322 meters as a prominent isolated peak at the southern end of the Cascade Range?",
    options: ["Lassen Peak", "Mount Shasta", "Mount Eddy", "Medicine Lake Volcano"],
    correctIndex: 1,
    explanation: "Mount Shasta has four overlapping volcanic cones and holds the Whitney Glacier, California's longest glacier.",
    status: "published"
  },
  {
    id: "na-h-45",
    continent: "North America",
    difficulty: "Hard",
    question: "Which active volcano in northern California erupted violently between 1914 and 1917, now protected within a national park featuring bubbling mud pots and fumaroles?",
    options: ["Mount Shasta", "Lassen Peak", "Medicine Lake", "Clear Lake"],
    correctIndex: 1,
    explanation: "Lassen Peak is the largest plug dome (dacite dome) volcano in the world, designated a national park in 1916.",
    status: "published"
  },
  {
    id: "na-h-46",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the highest mountain peak in the state of Washington and the Cascade Range after Mount Rainier, rising to 3,742 meters?",
    options: ["Mount Adams (Pahto)", "Mount Baker", "Glacier Peak", "Mount Stuart"],
    correctIndex: 0,
    explanation: "Mount Adams is a massive composite volcano covering 250 square kilometers in the southern Washington Cascades.",
    status: "published"
  },
  {
    id: "na-h-47",
    continent: "North America",
    difficulty: "Hard",
    question: "Which active glaciated stratovolcano in northern Washington State near the Canadian border holds the world record for the highest snowfall recorded in a single season (2,896 cm in 1998-99)?",
    options: ["Mount Rainier", "Mount Baker (Koma Kulshan)", "Mount Adams", "Mount Shuksan"],
    correctIndex: 1,
    explanation: "Mount Baker Ski Area recorded 1,140 inches (28.96 meters) of snowfall during the 1998-1999 winter season.",
    status: "published"
  },
  {
    id: "na-h-48",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the scenic glacier-draped peak in the North Cascades of Washington State that is one of the most photographed mountains in North America, reflected in Picture Lake?",
    options: ["Mount Baker", "Mount Shuksan", "Eldorado Peak", "Sahale Mountain"],
    correctIndex: 1,
    explanation: "Mount Shuksan rises to 2,783 meters, featuring the dramatic Hanging Glacier above Price Lake.",
    status: "published"
  },
  {
    id: "na-h-49",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the national park in northern Washington State characterized by jagged alpine peaks and more than 300 active glaciers, nicknamed the 'American Alps'?",
    options: ["Mount Rainier", "North Cascades National Park", "Olympic", "Glacier"],
    correctIndex: 1,
    explanation: "North Cascades National Park contains over a third of all glaciers in the contiguous 48 US states.",
    status: "published"
  },
  {
    id: "na-h-50",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the deep, narrow fjord-like lake in north-central Washington State that stretches 81 kilometers into the Cascade Range, reaching a cryptodepression depth of 453 meters?",
    options: ["Lake Washington", "Lake Chelan", "Lake Crescent", "Ross Lake"],
    correctIndex: 1,
    explanation: "Lake Chelan's lake floor drops 118 meters below sea level, the third-deepest lake in the United States.",
    status: "published"
  },
  {
    id: "na-h-51",
    continent: "North America",
    difficulty: "Hard",
    question: "Which narrow sea strait connects the Pacific Ocean to the Strait of Georgia and Puget Sound, separating Vancouver Island from Washington's Olympic Peninsula?",
    options: ["Strait of Juan de Fuca", "Haro Strait", "Rosario Strait", "Admiralty Inlet"],
    correctIndex: 0,
    explanation: "The Strait of Juan de Fuca carries the international marine boundary between Canada and the United States.",
    status: "published"
  },
  {
    id: "na-h-52",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the archipelago of 172 islands in Washington State situated in the Salish Sea between the US mainland and Vancouver Island, famous for orca whales?",
    options: ["Gulf Islands", "San Juan Islands", "Discovery Islands", "Whidbey Islands"],
    correctIndex: 1,
    explanation: "The San Juan Islands (including San Juan, Orcas, and Lopez) were the site of the bloodless 1859 'Pig War' border boundary dispute.",
    status: "published"
  },
  {
    id: "na-h-53",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the archipelago of Canadian islands situated in the Strait of Georgia between Vancouver Island and the BC mainland, mirroring Washington's San Juan Islands?",
    options: ["San Juan Islands", "Gulf Islands", "Queen Charlotte Islands", "Broughton Archipelago"],
    correctIndex: 1,
    explanation: "The Gulf Islands are designated a Canadian National Park Reserve, featuring a Mediterranean-like sub-humid rain-shadow climate.",
    status: "published"
  },
  {
    id: "na-h-54",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the remote archipelago off the northwest coast of British Columbia, home to the Haida Nation, formerly known as the Queen Charlotte Islands?",
    options: ["Vancouver Island", "Haida Gwaii", "Princess Royal Island", "Aristazabal Island"],
    correctIndex: 1,
    explanation: "Haida Gwaii ('Islands of the People') is often called the 'Galapagos of the North' for high levels of biological endemism.",
    status: "published"
  },
  {
    id: "na-h-55",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the famous abandoned Haida village on Anthony Island (SGang Gwaay) in Haida Gwaii featuring weathered cedar totem poles, designated a UNESCO World Heritage site?",
    options: ["Skidegate", "SGang Gwaay (Ninstints)", "Old Massett", "Tan\u00fa"],
    correctIndex: 1,
    explanation: "SGang Gwaay preserves standing 19th-century mortuary and memorial totem poles in their original natural coastal rainforest context.",
    status: "published"
  },
  {
    id: "na-h-56",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the large coastal island in British Columbia famous as the primary sanctuary of the rare white Kermode bear (Spirit Bear)?",
    options: ["Vancouver Island", "Princess Royal Island", "Banks Island", "Calvert Island"],
    correctIndex: 1,
    explanation: "Princess Royal Island in the Great Bear Rainforest is the core habitat where roughly 1 in 10 black bears carries the recessive gene for white fur.",
    status: "published"
  },
  {
    id: "na-h-57",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the largest coastal temperate rainforest on Earth, spanning 64,000 square kilometers along the central and northern coast of British Columbia?",
    options: ["Tongass National Forest", "Great Bear Rainforest", "Olympic Rainforest", "Carmanah Walbran"],
    correctIndex: 1,
    explanation: "The Great Bear Rainforest was legally protected through an agreement between First Nations, environmentalists, and the BC government in 2016.",
    status: "published"
  },
  {
    id: "na-h-58",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the highest mountain peak in the Coast Mountains of British Columbia, rising to 4,019 meters near the Homathko Icefield?",
    options: ["Mount Fairweather", "Mount Waddington", "Mount Tiedemann", "Mount Queen Bess"],
    correctIndex: 1,
    explanation: "Mount Waddington ('Mystery Mountain') long eluded mountaineers until Fritz Wiessner and Bill House climbed its sheer south face in 1936.",
    status: "published"
  },
  {
    id: "na-h-59",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the massive river flowing 1,930 kilometers from northern British Columbia through Alberta into Lake Athabasca, part of the Mackenzie River system?",
    options: ["Liard River", "Peace River", "Athabasca River", "Slave River"],
    correctIndex: 1,
    explanation: "The Peace River cuts completely through the Rocky Mountains, dammed by the W.A.C. Bennett Dam to create Williston Lake.",
    status: "published"
  },
  {
    id: "na-h-60",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the largest artificial reservoir in British Columbia by surface area, created in 1968 by impounding the Peace River?",
    options: ["Kinbasket Lake", "Williston Lake", "Kootenay Lake", "Ootsa Lake"],
    correctIndex: 1,
    explanation: "Williston Lake covers 1,761 square kilometers in the Rocky Mountain Trench.",
    status: "published"
  },
  {
    id: "na-h-61",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the remarkably straight 1,600-kilometer geological rift valley extending from northern Montana through British Columbia into the Yukon Territory?",
    options: ["Okanagan Valley", "Rocky Mountain Trench", "Fraser Canyon", "Purcell Trench"],
    correctIndex: 1,
    explanation: "The Rocky Mountain Trench is a continuous visual trough visible from space, separating the Canadian Rockies from the Columbia Mountains.",
    status: "published"
  },
  {
    id: "na-h-62",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the river in northern Alberta that drains into Lake Athabasca, world-famous for underlying vast bituminous oil sands deposits?",
    options: ["Peace River", "Athabasca River", "Hay River", "Clearwater River"],
    correctIndex: 1,
    explanation: "The Athabasca Oil Sands cover 141,000 square kilometers, representing the third-largest proven crude oil reserve on Earth.",
    status: "published"
  },
  {
    id: "na-h-63",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the largest national park in Canada, located in northeastern Alberta and southern Northwest Territories, protecting the world's largest herd of wood bison?",
    options: ["Banff", "Wood Buffalo National Park", "Jasper", "Nahanni"],
    correctIndex: 1,
    explanation: "Wood Buffalo covers 44,807 square kilometers, larger than Switzerland, home to the Peace-Athabasca Delta and whooping cranes.",
    status: "published"
  },
  {
    id: "na-h-64",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the spectacular national park in the Dehcho Region of the Northwest Territories, Canada, famous for Virginia Falls dropping 96 meters on the South Nahanni River?",
    options: ["Wood Buffalo", "Nahanni National Park Reserve", "Kluane", "Ivvavik"],
    correctIndex: 1,
    explanation: "Nahanni was one of the first four world natural sites inscribed on the UNESCO World Heritage list in 1978.",
    status: "published"
  },
  {
    id: "na-h-65",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the highest mountain peak in the Northwest Territories of Canada, rising to 2,773 meters in the Mackenzie Mountains?",
    options: ["Mount Sir James MacBrien", "Mount Nirvana", "Ragged Range", "Mount Logan"],
    correctIndex: 1,
    explanation: "Mount Nirvana (officially un-named by the Geographic Names Board until recently) was first scaled in 1965.",
    status: "published"
  },
  {
    id: "na-h-66",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the large lake in Manitoba that is the eleventh-largest freshwater lake on Earth, a remnant of ancient glacial Lake Agassiz?",
    options: ["Lake Manitoba", "Lake Winnipeg", "Lake Winnipegosis", "Cedar Lake"],
    correctIndex: 1,
    explanation: "Lake Winnipeg covers 24,514 square kilometers, draining into Hudson Bay via the Nelson River.",
    status: "published"
  },
  {
    id: "na-h-67",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the town on the western shore of Hudson Bay in Manitoba celebrated as the 'Polar Bear Capital of the World'?",
    options: ["Moosonee", "Churchill", "Rankin Inlet", "Arviat"],
    correctIndex: 1,
    explanation: "Churchill is an Arctic seaport where hundreds of polar bears congregate every autumn waiting for Hudson Bay to freeze over.",
    status: "published"
  },
  {
    id: "na-h-68",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the Canadian Arctic territory created in 1999 by dividing the Northwest Territories, having Iqaluit as its capital and an Inuktitut majority population?",
    options: ["Yukon", "Nunavut", "Labrador", "Mackenzie"],
    correctIndex: 1,
    explanation: "Nunavut ('Our Land' in Inuktitut) spans over 2 million square kilometers, the largest and northernmost Canadian territory.",
    status: "published"
  },
  {
    id: "na-h-69",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the second-largest island in Canada and eighth-largest in the world, located in Nunavut and Northwest Territories, home to copper Inuit communities?",
    options: ["Baffin Island", "Victoria Island", "Ellesmere Island", "Banks Island"],
    correctIndex: 1,
    explanation: "Victoria Island covers 217,291 square kilometers, containing Cambridge Bay and Holman.",
    status: "published"
  },
  {
    id: "na-h-70",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the famous world-record island nested inside an island: the world's largest third-order island (an island in a lake on an island in a lake on an island)?",
    options: ["Manitoulin sub-island", "Victoria Island sub-lake island", "Isle Royale Siskiwit", "Taal Volcano island"],
    correctIndex: 1,
    explanation: "A small 1.6-hectare unnamed island sits in a lake within an island in a lake on Victoria Island in the Canadian Arctic.",
    status: "published"
  },
  {
    id: "na-h-71",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the island in northern Nunavut that holds the Axel Heiberg fossil forest: 45-million-year-old Eocene redwood and dawn redwood stumps preserved in permafrost?",
    options: ["Devon Island", "Axel Heiberg Island", "Ellesmere Island", "Baffin Island"],
    correctIndex: 1,
    explanation: "Axel Heiberg Island features mummified (not petrified) tree trunks and leaves from when the Arctic enjoyed a warm temperate greenhouse climate.",
    status: "published"
  },
  {
    id: "na-h-72",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the navigable shipping route through the Arctic Ocean connecting the Atlantic and Pacific oceans through the Canadian Arctic Archipelago, first traversed by Roald Amundsen in 1903-1906?",
    options: ["Northeast Passage", "Northwest Passage", "Northern Sea Route", "Panama Route"],
    correctIndex: 1,
    explanation: "The Northwest Passage weaves through Lancaster Sound, Barrow Strait, and Peel Sound into the Beaufort Sea.",
    status: "published"
  },
  {
    id: "na-h-73",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the large marginal sea of the Arctic Ocean located north of Alaska and Canada's Yukon and Northwest Territories?",
    options: ["Chukchi Sea", "Beaufort Sea", "Lincoln Sea", "Laptev Sea"],
    correctIndex: 1,
    explanation: "The Beaufort Sea is characterized by the clockwise anticyclonic Beaufort Gyre ocean current and extensive petroleum deposits.",
    status: "published"
  },
  {
    id: "na-h-74",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the narrow body of water separating Ellesmere Island in Canada from northern Greenland?",
    options: ["Baffin Bay", "Nares Strait", "Davis Strait", "Foxe Basin"],
    correctIndex: 1,
    explanation: "Nares Strait links Baffin Bay with the Lincoln Sea in the Arctic Ocean, comprising Smith Sound, Kane Basin, Kennedy Channel, and Robeson Channel.",
    status: "published"
  },
  {
    id: "na-h-75",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the broad strait connecting the Atlantic Ocean to Baffin Bay, situated between southeastern Greenland and Baffin Island?",
    options: ["Hudson Strait", "Davis Strait", "Denmark Strait", "Nares Strait"],
    correctIndex: 1,
    explanation: "Davis Strait is roughly 300 to 950 kilometers wide, carrying the cold Labrador Current south into the Atlantic.",
    status: "published"
  },
  {
    id: "na-h-76",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the cold ocean current that flows southward from the Arctic Ocean along the coast of Labrador and around Newfoundland?",
    options: ["Gulf Stream", "Labrador Current", "Greenland Current", "Canary Current"],
    correctIndex: 1,
    explanation: "The collision of the cold Labrador Current with the warm Gulf Stream near the Grand Banks creates dense, chronic fog and nutrient-rich cod fisheries.",
    status: "published"
  },
  {
    id: "na-h-77",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the underwater plateau of submerged banks southeast of Newfoundland where the cold Labrador Current and warm Gulf Stream meet, historically the world's richest cod fishery?",
    options: ["Georges Bank", "Grand Banks of Newfoundland", "Flemish Cap", "Scotian Shelf"],
    correctIndex: 1,
    explanation: "The Grand Banks was fished by European fleets since before 1500, until the catastrophic Atlantic cod collapse in 1992.",
    status: "published"
  },
  {
    id: "na-h-78",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the crescentric sandspit island 300 kilometers southeast of Halifax, Nova Scotia, famous for over 350 shipwrecks and a feral wild horse population?",
    options: ["Oak Island", "Sable Island", "Brier Island", "Anticosti"],
    correctIndex: 1,
    explanation: "Sable Island is a shifting 42-kilometer sandbar in the North Atlantic, established as a National Park Reserve in 2013.",
    status: "published"
  },
  {
    id: "na-h-79",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the major river flowing through southern Quebec into the St. Lawrence River at Montreal, forming the border between Ontario and Quebec?",
    options: ["Saguenay River", "Ottawa River (Rivi\u00e8re des Outaouais)", "Saint-Maurice River", "Richelieu River"],
    correctIndex: 1,
    explanation: "The Ottawa River flows 1,271 kilometers, the primary transport corridor of the historic Algonquin and French fur trade.",
    status: "published"
  },
  {
    id: "na-h-80",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the dramatic fjord river in Quebec that drains Lac Saint-Jean into the St. Lawrence Estuary at Tadoussac, famous for beluga whales?",
    options: ["Richelieu River", "Saguenay River (Saguenay Fjord)", "Saint-Maurice River", "Chaudi\u00e8re River"],
    correctIndex: 1,
    explanation: "The Saguenay Fjord drops to 275 meters depth, carved into the granite Canadian Shield and protected in Saguenay–St. Lawrence Marine Park.",
    status: "published"
  },
  {
    id: "na-h-81",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the massive circular ring-shaped reservoir lake in central Quebec, formed inside a 214-million-year-old Triassic meteorite impact crater?",
    options: ["Mistassini Lake", "Manicouagan Reservoir ('Eye of Quebec')", "Lake Saint-Jean", "Clearwater Lakes"],
    correctIndex: 1,
    explanation: "Manicouagan Reservoir surrounds René-Levasseur Island, formed by the Daniel-Johnson multiple-arch dam on the Manicouagan River.",
    status: "published"
  },
  {
    id: "na-h-82",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the artificial island in the center of the Manicouagan Reservoir in Quebec, which is the second-largest lake island in the world after Manitoulin?",
    options: ["Anticosti Island", "Ren\u00e9-Levasseur Island", "Ukerewe Island", "Isle Royale"],
    correctIndex: 1,
    explanation: "René-Levasseur Island covers 2,020 square kilometers, higher in elevation than the crater rim that surrounds it (resurgent central peak).",
    status: "published"
  },
  {
    id: "na-h-83",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the largest natural freshwater lake entirely within the province of Quebec, covering 2,335 square kilometers in the Canadian Shield?",
    options: ["Lake Saint-Jean", "Lake Mistassini", "Lake Abitibi", "Lake Manicouagan"],
    correctIndex: 1,
    explanation: "Lake Mistassini drains into James Bay via the Rupert River, central to the Cree Nation of Mistissini.",
    status: "published"
  },
  {
    id: "na-h-84",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the famous pierced limestone natural arch rock monument located in the Gulf of Saint Lawrence off the tip of Quebec's Gaspé Peninsula?",
    options: ["Hopewell Rocks", "Perc\u00e9 Rock (Rocher Perc\u00e9)", "Table Rock", "Chimney Rock"],
    correctIndex: 1,
    explanation: "Percé Rock is a sheer 88-meter-high limestone monolith with a 15-meter natural arch, connected to the shore at low tide.",
    status: "published"
  },
  {
    id: "na-h-85",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the unique limestone coastline in New Brunswick, Canada, where 16-meter Fundy tides carve 'Flowerpot Rocks' with trees growing on top?",
    options: ["Perc\u00e9 Rock", "Hopewell Rocks (The Rocks Provincial Park)", "Cap d'Or", "Split Rock"],
    correctIndex: 1,
    explanation: "At Hopewell Rocks, visitors can walk on the ocean floor at low tide and kayak around the tops of the rock towers six hours later.",
    status: "published"
  },
  {
    id: "na-h-86",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the river forming the boundary between southern Ontario and western New York that connects Lake Erie to Lake Ontario over Niagara Falls?",
    options: ["Welland River", "Niagara River", "Genesee River", "Grand River"],
    correctIndex: 1,
    explanation: "The Niagara River flows 58 kilometers, carrying an average discharge of 5,800 cubic meters of water per second over the falls.",
    status: "published"
  },
  {
    id: "na-h-87",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the river that drains Lake Huron into Lake St. Clair, forming part of the international boundary between Michigan and Ontario?",
    options: ["Detroit River", "St. Clair River", "Thames River", "Grand River"],
    correctIndex: 1,
    explanation: "The St. Clair River flows 65 kilometers, forming a large freshwater bird-foot delta at Lake St. Clair.",
    status: "published"
  },
  {
    id: "na-h-88",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the 51-kilometer river connecting Lake St. Clair with Lake Erie, flowing between Detroit, Michigan, and Windsor, Ontario?",
    options: ["St. Clair River", "Detroit River", "Rouge River", "Huron River"],
    correctIndex: 1,
    explanation: "The Detroit River is crossed by the Ambassador Bridge and the Detroit-Windsor Tunnel, carrying over 25% of all US-Canada merchandise trade.",
    status: "published"
  },
  {
    id: "na-h-89",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the highest mountain peak in the US state of New York, located in the High Peaks region of the Adirondacks at 1,629 meters?",
    options: ["Algonquin Peak", "Mount Marcy", "Whiteface Mountain", "Mount Haystack"],
    correctIndex: 1,
    explanation: "Mount Marcy features Lake Tear of the Clouds on its southwestern flank, recognized as the highest source of the Hudson River.",
    status: "published"
  },
  {
    id: "na-h-90",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the high mountain tarn in the Adirondacks of New York that is the official highest source pool of the Hudson River?",
    options: ["Lake Placid", "Lake Tear of the Clouds", "Mirror Lake", "Avalanche Lake"],
    correctIndex: 1,
    explanation: "Vice President Theodore Roosevelt was hiking near Lake Tear of the Clouds in September 1901 when he learned President McKinley was dying.",
    status: "published"
  },
  {
    id: "na-h-91",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the river flowing through central Pennsylvania and Maryland that is the largest tributary of Chesapeake Bay by volume?",
    options: ["Potomac River", "Susquehanna River", "Juniata River", "Patapsco River"],
    correctIndex: 1,
    explanation: "The Susquehanna River flows 715 kilometers from Otsego Lake in Cooperstown, New York, supplying 50% of the freshwater entering Chesapeake Bay.",
    status: "published"
  },
  {
    id: "na-h-92",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the river that forms the entire border between New Jersey and Pennsylvania before emptying into Delaware Bay?",
    options: ["Schuylkill River", "Delaware River", "Lehigh River", "Raritan River"],
    correctIndex: 1,
    explanation: "The Delaware River was famously crossed by George Washington on Christmas night 1776 at Trenton, New Jersey.",
    status: "published"
  },
  {
    id: "na-h-93",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the prominent water gap carved by the Delaware River through the Kittatinny Ridge along the Pennsylvania-New Jersey border?",
    options: ["Cumberland Gap", "Delaware Water Gap", "Lehigh Gap", "Schuylkill Gap"],
    correctIndex: 1,
    explanation: "The Delaware Water Gap is a 300-meter-deep notch cut through Silurian Tuscarora quartzite, protected in a National Recreation Area.",
    status: "published"
  },
  {
    id: "na-h-94",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the mountain pass through the Cumberland Plateau of the Appalachians where Kentucky, Virginia, and Tennessee meet, historic pioneer route west?",
    options: ["Delaware Water Gap", "Cumberland Gap", "Shenandoah Gap", "Roanoke Gap"],
    correctIndex: 1,
    explanation: "Daniel Boone mapped the Wilderness Road through the Cumberland Gap in 1775, allowing over 300,000 settlers to cross into Kentucky.",
    status: "published"
  },
  {
    id: "na-h-95",
    continent: "North America",
    difficulty: "Hard",
    question: "Which major tributary of the Ohio River flows 1,049 kilometers across Tennessee, Alabama, and Kentucky, harnessed by the TVA in the 1930s?",
    options: ["Cumberland River", "Tennessee River", "Wabash River", "Green River"],
    correctIndex: 1,
    explanation: "The Tennessee Valley Authority (TVA) constructed 29 hydroelectric dams along the Tennessee River to control floods and electrify the rural South.",
    status: "published"
  },
  {
    id: "na-h-96",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the river forming the boundary between Texas and Oklahoma, flowing eastward into the Atchafalaya and Mississippi basins in Louisiana?",
    options: ["Brazos River", "Red River (Red River of the South)", "Colorado River of Texas", "Trinity River"],
    correctIndex: 1,
    explanation: "The Red River of the South is characteristically colored reddish-brown by red Permian clay soils in its upper basin.",
    status: "published"
  },
  {
    id: "na-h-97",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the longest river located entirely within the US state of Texas, flowing 1,350 kilometers from the Llano Estacado into the Gulf of Mexico?",
    options: ["Rio Grande", "Brazos River", "Colorado River (Texas)", "Nueces River"],
    correctIndex: 1,
    explanation: "The Brazos River was named 'Río de los Brazos de Dios' ('River of the Arms of God') by early Spanish explorers.",
    status: "published"
  },
  {
    id: "na-h-98",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the massive semi-arid high plains mesa covering 97,000 square kilometers in northwestern Texas and eastern New Mexico, bounded by the Caprock Escarpment?",
    options: ["Edwards Plateau", "Llano Estacado (Staked Plains)", "Balcones Escarpment", "Palo Duro Basin"],
    correctIndex: 1,
    explanation: "The Llano Estacado is one of the largest flat mesas in North America, with elevation declining gently from 1,500 meters down to 900 meters.",
    status: "published"
  },
  {
    id: "na-h-99",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the second-largest canyon in the United States, carved 240 meters deep through the colorful Permian and Triassic strata of the Texas Panhandle?",
    options: ["Santa Elena Canyon", "Palo Duro Canyon", "Black Canyon", "Cloudland Canyon"],
    correctIndex: 1,
    explanation: "Palo Duro Canyon was carved by the Prairie Dog Town Fork of the Red River, nicknamed the 'Grand Canyon of Texas'.",
    status: "published"
  },
  {
    id: "na-h-100",
    continent: "North America",
    difficulty: "Hard",
    question: "What is the dramatic sheer limestone river canyon in Big Bend National Park, Texas, where the Rio Grande cuts 450 meters vertically between the US and Mexico?",
    options: ["Boquillas Canyon", "Santa Elena Canyon", "Mariscal Canyon", "Palo Duro Canyon"],
    correctIndex: 1,
    explanation: "Santa Elena Canyon features a 13-kilometer gorge with inverted limestone walls forming the international boundary between Texas and Chihuahua.",
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
    id: "sa-e-3",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the capital city of Argentina?",
    options: ["C\u00f3rdoba", "Buenos Aires", "Rosario", "Mendoza"],
    correctIndex: 1,
    explanation: "Buenos Aires is the autonomous capital and largest city of Argentina, located on the western shore of the Río de la Plata.",
    status: "published"
  },
  {
    id: "sa-e-4",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the planned federal capital city of Brazil, inaugurated in 1960?",
    options: ["Rio de Janeiro", "S\u00e3o Paulo", "Bras\u00edlia", "Salvador"],
    correctIndex: 2,
    explanation: "Brasília was designed by urban planner Lúcio Costa and architect Oscar Niemeyer in the shape of an airplane.",
    status: "published"
  },
  {
    id: "sa-e-5",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the capital city of Colombia?",
    options: ["Medell\u00edn", "Cali", "Bogot\u00e1", "Cartagena"],
    correctIndex: 2,
    explanation: "Bogotá is the high-altitude capital of Colombia, situated at an elevation of 2,640 meters in the Andes.",
    status: "published"
  },
  {
    id: "sa-e-6",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the capital city of Peru?",
    options: ["Cusco", "Arequipa", "Lima", "Trujillo"],
    correctIndex: 2,
    explanation: "Lima was founded by Spanish conquistador Francisco Pizarro in 1535 as the 'City of the Kings' on the Pacific coast.",
    status: "published"
  },
  {
    id: "sa-e-7",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the capital city of Chile?",
    options: ["Valpara\u00edso", "Concepci\u00f3n", "Santiago", "Antofagasta"],
    correctIndex: 2,
    explanation: "Santiago is the capital and largest city of Chile, situated in the country's central valley framed by the snow-capped Andes.",
    status: "published"
  },
  {
    id: "sa-e-8",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the capital city of Venezuela?",
    options: ["Maracaibo", "Valencia", "Caracas", "Barquisimeto"],
    correctIndex: 2,
    explanation: "Caracas is the capital of Venezuela, located in a valley of the Venezuelan coastal mountain range.",
    status: "published"
  },
  {
    id: "sa-e-9",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the capital city of Ecuador, situated high in the Andes just 25 km south of the equator?",
    options: ["Guayaquil", "Cuenca", "Quito", "Ambato"],
    correctIndex: 2,
    explanation: "Quito sits at 2,850 meters elevation, the closest national capital to the equator and a UNESCO World Heritage site.",
    status: "published"
  },
  {
    id: "sa-e-10",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the capital city of Uruguay?",
    options: ["Punta del Este", "Salto", "Montevideo", "Paysand\u00fa"],
    correctIndex: 2,
    explanation: "Montevideo is the southernmost capital city in the Americas, situated on the northeastern bank of the Río de la Plata.",
    status: "published"
  },
  {
    id: "sa-e-11",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the capital city of Paraguay?",
    options: ["Ciudad del Este", "Encarnaci\u00f3n", "Asunci\u00f3n", "San Lorenzo"],
    correctIndex: 2,
    explanation: "Asunción is one of the oldest Spanish cities in South America, founded in 1537 on the Paraguay River.",
    status: "published"
  },
  {
    id: "sa-e-12",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the constitutional capital and seat of the judiciary in Bolivia?",
    options: ["La Paz", "Santa Cruz de la Sierra", "Sucre", "Cochabamba"],
    correctIndex: 2,
    explanation: "Sucre is the historic constitutional capital of Bolivia, while La Paz is the seat of the executive and legislative branches.",
    status: "published"
  },
  {
    id: "sa-e-13",
    continent: "South America",
    difficulty: "Easy",
    question: "Which city in Bolivia serves as the seat of government and is the highest administrative capital in the world (3,640 m)?",
    options: ["Sucre", "La Paz", "Potos\u00ed", "Oruro"],
    correctIndex: 1,
    explanation: "La Paz is located in a canyon carved by the Choqueyapu River, famous for the world's largest urban cable car network (Mi Teleférico).",
    status: "published"
  },
  {
    id: "sa-e-14",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the capital city of Guyana?",
    options: ["New Amsterdam", "Georgetown", "Linden", "Bartica"],
    correctIndex: 1,
    explanation: "Georgetown is the coastal capital and primary port of Guyana on the Atlantic Ocean.",
    status: "published"
  },
  {
    id: "sa-e-15",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the capital city of Suriname?",
    options: ["Lelydorp", "Nieuw Nickerie", "Paramaribo", "Moengo"],
    correctIndex: 2,
    explanation: "Paramaribo is the capital of Suriname, situated on the banks of the Suriname River, renowned for Dutch colonial wooden architecture.",
    status: "published"
  },
  {
    id: "sa-e-16",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the capital city of French Guiana, an overseas department and region of France?",
    options: ["Kourou", "Saint-Laurent-du-Maroni", "Cayenne", "Matoury"],
    correctIndex: 2,
    explanation: "Cayenne is the capital of French Guiana, situated on a former island at the mouth of the Cayenne River.",
    status: "published"
  },
  {
    id: "sa-e-17",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the largest river in the world by water discharge volume, draining roughly 40% of South America?",
    options: ["Paran\u00e1 River", "Amazon River", "Orinoco River", "S\u00e3o Francisco River"],
    correctIndex: 1,
    explanation: "The Amazon River discharges roughly 209,000 cubic meters per second into the Atlantic, more than the next seven largest rivers combined.",
    status: "published"
  },
  {
    id: "sa-e-18",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the largest tropical rainforest on Earth, spanning roughly 5.5 million square kilometers across nine South American nations?",
    options: ["Congo Rainforest", "Amazon Rainforest", "Atlantic Forest", "Choc\u00f3 Rainforest"],
    correctIndex: 1,
    explanation: "The Amazon Rainforest contains over half of the planet's remaining rainforests and approximately 10% of all known species on Earth.",
    status: "published"
  },
  {
    id: "sa-e-19",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the massive waterfall system spanning the border between Argentina (Misiones) and Brazil (Paraná), consisting of up to 275 individual drops?",
    options: ["Angel Falls", "Iguazu Falls (Cataratas do Igua\u00e7u)", "Victoria Falls", "Kaieteur Falls"],
    correctIndex: 1,
    explanation: "Iguazu Falls features the spectacular U-shaped Devil's Throat (Garganta del Diablo) on the Iguazu River.",
    status: "published"
  },
  {
    id: "sa-e-20",
    continent: "South America",
    difficulty: "Easy",
    question: "Which volcanic archipelago located 1,000 km west of mainland Ecuador inspired Charles Darwin's theory of evolution by natural selection?",
    options: ["Falkland Islands", "Gal\u00e1pagos Islands (Archipi\u00e9lago de Col\u00f3n)", "Juan Fern\u00e1ndez Islands", "Malpelo Island"],
    correctIndex: 1,
    explanation: "The Galápagos Islands are a UNESCO World Heritage site celebrated for giant tortoises, marine iguanas, and Darwin's finches.",
    status: "published"
  },
  {
    id: "sa-e-21",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the large brackish tidal bay and lake in northwestern Venezuela that is one of the oldest lakes on Earth and a major oil-producing basin?",
    options: ["Lake Valencia", "Lake Maracaibo", "Guri Reservoir", "Lake Titicaca"],
    correctIndex: 1,
    explanation: "Lake Maracaibo covers 13,210 square kilometers, connecting to the Caribbean Sea via the Tablazo Strait.",
    status: "published"
  },
  {
    id: "sa-e-22",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the famous atmospheric electrical phenomenon occurring where the Catatumbo River enters Lake Maracaibo in Venezuela, producing lightning up to 160 nights a year?",
    options: ["St. Elmo's Fire", "Catatumbo Lightning (Rel\u00e1mpago del Catatumbo)", "Ball lightning", "Maracaibo Aurora"],
    correctIndex: 1,
    explanation: "Catatumbo Lightning is the single largest natural generator of tropospheric ozone, flashing up to 280 times per hour.",
    status: "published"
  },
  {
    id: "sa-e-23",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the 15th-century Inca citadel set high in the Andes Mountains above the Sacred Valley in Peru, rediscovered by Hiram Bingham in 1911?",
    options: ["Cusco", "Machu Picchu", "Ollantaytambo", "Choquequirao"],
    correctIndex: 1,
    explanation: "Machu Picchu sits at 2,430 meters elevation above the Urubamba River, an iconic masterpiece of Inca drystone masonry.",
    status: "published"
  },
  {
    id: "sa-e-24",
    continent: "South America",
    difficulty: "Easy",
    question: "Which historic Andean city in southeastern Peru was the imperial capital of the Inca Empire (Tawantinsuyu)?",
    options: ["Lima", "Cusco (Cuzco)", "Arequipa", "Puno"],
    correctIndex: 1,
    explanation: "Cusco was laid out in the shape of a puma, serving as the political and spiritual center of the Inca civilization.",
    status: "published"
  },
  {
    id: "sa-e-25",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the colossal Art Deco statue of Jesus Christ atop Mount Corcovado overlooking Rio de Janeiro, Brazil?",
    options: ["Christ the King", "Christ the Redeemer (Cristo Redentor)", "Monumento a la Virgen de la Paz", "Cristo de la Concordia"],
    correctIndex: 1,
    explanation: "Christ the Redeemer stands 30 meters tall atop the 700-meter Corcovado mountain, designated one of the New Seven Wonders of the World.",
    status: "published"
  },
  {
    id: "sa-e-26",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the famous crescent-shaped Atlantic beach in Rio de Janeiro, Brazil, known for its mosaic promenade?",
    options: ["Ipanema", "Copacabana", "Leblon", "Barra da Tijuca"],
    correctIndex: 1,
    explanation: "Copacabana Beach spans 4 kilometers, hosting millions of revelers for Rio's annual New Year's Eve fireworks.",
    status: "published"
  },
  {
    id: "sa-e-27",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the iconic sugarloaf-shaped monolithic granite mountain rising 396 meters above Guanabara Bay in Rio de Janeiro?",
    options: ["Corcovado", "Sugarloaf Mountain (P\u00e3o de A\u00e7\u00facar)", "Pedra da G\u00e1vea", "Two Brothers (Dois Irm\u00e3os)"],
    correctIndex: 1,
    explanation: "Sugarloaf Mountain is accessible by a two-stage aerial cable car system installed in 1912.",
    status: "published"
  },
  {
    id: "sa-e-28",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the most populous city in Brazil, the Americas, and the entire Southern Hemisphere, located on a plateau in southeastern Brazil?",
    options: ["Rio de Janeiro", "S\u00e3o Paulo", "Belo Horizonte", "Salvador"],
    correctIndex: 1,
    explanation: "São Paulo has a metropolitan population exceeding 22 million, the financial capital of Latin America.",
    status: "published"
  },
  {
    id: "sa-e-29",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the vast temperate grassland plain covering 1.2 million square kilometers across central Argentina, Uruguay, and southern Brazil?",
    options: ["The Llanos", "The Pampas", "The Chaco", "The Cerrado"],
    correctIndex: 1,
    explanation: "The Pampas is famous for fertile agricultural soil, cattle ranching, and traditional gaucho cowboy culture.",
    status: "published"
  },
  {
    id: "sa-e-30",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the vast tropical savanna plain covering eastern Colombia and central Venezuela along the Orinoco River basin?",
    options: ["The Pampas", "The Llanos", "Gran Chaco", "Pantanal"],
    correctIndex: 1,
    explanation: "The Llanos experiences alternating seasonal flooding and drought, supporting vast herds of cattle and capybaras.",
    status: "published"
  },
  {
    id: "sa-e-31",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the world's largest tropical wetland and flooded grassland, covering over 150,000 square kilometers primarily in western Brazil (Mato Grosso do Sul)?",
    options: ["The Everglades", "The Pantanal", "The Llanos", "Esteros del Iber\u00e1"],
    correctIndex: 1,
    explanation: "The Pantanal holds the highest concentration of wildlife in South America, including the world's highest density of jaguars.",
    status: "published"
  },
  {
    id: "sa-e-32",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the cold, wind-swept southern geographical region shared by Argentina and Chile, terminating at the Strait of Magellan?",
    options: ["The Pampas", "Patagonia", "Gran Chaco", "Atacama"],
    correctIndex: 1,
    explanation: "Patagonia encompasses arid steppes to the east in Argentina and glacial fjords and icefields to the west in Chile.",
    status: "published"
  },
  {
    id: "sa-e-33",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the natural navigable sea route separating mainland South America from the archipelago of Tierra del Fuego, discovered in 1520?",
    options: ["Beagle Channel", "Strait of Magellan", "Drake Passage", "Le Maire Strait"],
    correctIndex: 1,
    explanation: "Ferdinand Magellan navigated this 570-kilometer strait during the first circumnavigation of the globe.",
    status: "published"
  },
  {
    id: "sa-e-34",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the archipelago at the southernmost tip of South America, divided between Chile and Argentina, whose name means 'Land of Fire'?",
    options: ["Falkland Islands", "Tierra del Fuego", "Galapagos", "South Georgia"],
    correctIndex: 1,
    explanation: "Magellan named it Tierra del Fuego after seeing coastal fires lit by the indigenous Yaghan and Selk'nam peoples.",
    status: "published"
  },
  {
    id: "sa-e-35",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the southernmost city in the world, situated on the Isla Grande de Tierra del Fuego in Argentina along the Beagle Channel?",
    options: ["Punta Arenas", "Ushuaia", "Puerto Williams", "R\u00edo Grande"],
    correctIndex: 1,
    explanation: "Ushuaia promotes itself as the 'End of the World' (Fin del Mundo) and the primary gateway for Antarctic tourist cruises.",
    status: "published"
  },
  {
    id: "sa-e-36",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the southernmost headland of the Tierra del Fuego archipelago, belonging to Chile, marking the northern boundary of the Drake Passage?",
    options: ["Cape of Good Hope", "Cape Horn (Cabo de Hornos)", "Cape Froward", "Cape Agulhas"],
    correctIndex: 1,
    explanation: "Cape Horn is notorious among mariners for ferocious westerly gales, towering seas, and rogue waves.",
    status: "published"
  },
  {
    id: "sa-e-37",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the broad body of water connecting the Atlantic and Pacific oceans between Cape Horn and Antarctica?",
    options: ["Strait of Magellan", "Drake Passage", "Beagle Channel", "Scotia Sea"],
    correctIndex: 1,
    explanation: "The Drake Passage is 800 kilometers wide, carrying the massive Antarctic Circumpolar Current.",
    status: "published"
  },
  {
    id: "sa-e-38",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the narrow 240-kilometer strait separating the main island of Tierra del Fuego from southern islands, named after HMS Beagle?",
    options: ["Strait of Magellan", "Beagle Channel", "Drake Passage", "Cook Bay"],
    correctIndex: 1,
    explanation: "The Beagle Channel was surveyed during the 1826-1836 voyages carrying young naturalist Charles Darwin.",
    status: "published"
  },
  {
    id: "sa-e-39",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the British Overseas Territory archipelago in the South Atlantic Ocean roughly 480 km east of Patagonia, claimed by Argentina as the Malvinas?",
    options: ["South Georgia", "Falkland Islands (Islas Malvinas)", "Tristan da Cunha", "South Sandwich Islands"],
    correctIndex: 1,
    explanation: "The Falkland Islands comprise East and West Falkland, with Stanley as its capital.",
    status: "published"
  },
  {
    id: "sa-e-40",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the remote volcanic island in the southeastern Pacific belonging to Chile, famous for roughly 900 monumental stone statues called moai?",
    options: ["Juan Fern\u00e1ndez Islands", "Easter Island (Rapa Nui)", "Galapagos", "Chilo\u00e9 Island"],
    correctIndex: 1,
    explanation: "Rapa Nui was settled by Polynesian voyagers around 1200 CE, recognized as a UNESCO World Heritage site.",
    status: "published"
  },
  {
    id: "sa-e-41",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the funnel-shaped estuary formed by the confluence of the Uruguay and Paraná rivers between Argentina and Uruguay?",
    options: ["Amazon Estuary", "R\u00edo de la Plata", "Orinoco Delta", "Gulf of San Jorge"],
    correctIndex: 1,
    explanation: "The Río de la Plata is the widest estuary in the world, measuring up to 220 kilometers across at its mouth.",
    status: "published"
  },
  {
    id: "sa-e-42",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the second-longest river in South America, flowing 4,880 kilometers through Brazil, Paraguay, and Argentina to the Río de la Plata?",
    options: ["Orinoco River", "Paran\u00e1 River", "S\u00e3o Francisco River", "Magdalena River"],
    correctIndex: 1,
    explanation: "The Paraná River hosts the massive Itaipu Dam on the Brazil-Paraguay border.",
    status: "published"
  },
  {
    id: "sa-e-43",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the colossal hydroelectric dam on the Paraná River between Brazil and Paraguay, historically one of the world's largest power producers?",
    options: ["Guri Dam", "Itaipu Dam", "Belo Monte Dam", "Tucuru\u00ed Dam"],
    correctIndex: 1,
    explanation: "Itaipu Dam generated over 103 million MWh in 2016, supplying a major portion of Paraguay and Brazil's electricity.",
    status: "published"
  },
  {
    id: "sa-e-44",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the massive hydroelectric dam on the Caroní River in southeastern Venezuela that forms Guri Reservoir?",
    options: ["Itaipu Dam", "Guri Dam (Sim\u00f3n Bol\u00edvar Hydroelectric Plant)", "Belo Monte Dam", "Yacyret\u00e1 Dam"],
    correctIndex: 1,
    explanation: "Guri Dam supplies roughly 70% of Venezuela's electricity, creating a reservoir covering 4,250 square kilometers.",
    status: "published"
  },
  {
    id: "sa-e-45",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the massive hydroelectric dam complex on the Xingu River in Pará, Brazil, the fourth-largest hydroelectric plant in the world?",
    options: ["Itaipu Dam", "Belo Monte Dam", "Tucuru\u00ed Dam", "Santo Ant\u00f4nio Dam"],
    correctIndex: 1,
    explanation: "Belo Monte has an installed capacity of 11,233 MW, subject to environmental debates regarding indigenous lands.",
    status: "published"
  },
  {
    id: "sa-e-46",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the largest river located entirely within Brazilian territory, nicknamed the 'River of National Integration'?",
    options: ["Amazon", "S\u00e3o Francisco River", "Tocantins River", "Araguaia River"],
    correctIndex: 1,
    explanation: "The São Francisco flows 2,914 kilometers from Minas Gerais through the dry northeast (Sertão) into the Atlantic.",
    status: "published"
  },
  {
    id: "sa-e-47",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the semi-arid, drought-prone interior scrubland region of northeastern Brazil called?",
    options: ["Cerrado", "Sert\u00e3o (Caatinga)", "Pantanal", "Pampas"],
    correctIndex: 1,
    explanation: "The Sertão is dominated by the Caatinga biome, a unique xeric thorn scrub adapted to prolonged droughts.",
    status: "published"
  },
  {
    id: "sa-e-48",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the vast tropical savanna ecoregion covering over 2 million square kilometers of the central Brazilian plateau (Planato Central)?",
    options: ["Pantanal", "Cerrado", "Caatinga", "Chaco"],
    correctIndex: 1,
    explanation: "The Cerrado is one of the most biodiverse savannas in the world, transformed in recent decades into a powerhouse of soy and grain production.",
    status: "published"
  },
  {
    id: "sa-e-49",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the semi-arid, sparsely populated lowland plain covering parts of Paraguay, Bolivia, and Argentina?",
    options: ["The Pampas", "Gran Chaco", "The Llanos", "The Altiplano"],
    correctIndex: 1,
    explanation: "The Gran Chaco features dense Quebracho hardwood thorn forests, site of the 1932–1935 Chaco War.",
    status: "published"
  },
  {
    id: "sa-e-50",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the high-altitude plateau in west-central South America where the Andes are at their widest, shared by Bolivia, Peru, and Chile?",
    options: ["Patagonian Plateau", "The Altiplano (Bolivian Plateau)", "Guiana Highlands", "Brazilian Highlands"],
    correctIndex: 1,
    explanation: "The Altiplano averages 3,750 meters elevation, home to Lake Titicaca, Salar de Uyuni, and La Paz.",
    status: "published"
  },
  {
    id: "sa-e-51",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the world's largest salt flat, covering 10,582 square kilometers on the Altiplano of southwestern Bolivia?",
    options: ["Bonneville Salt Flats", "Salar de Uyuni", "Salar de Atacama", "Etosha Pan"],
    correctIndex: 1,
    explanation: "Salar de Uyuni holds an estimated 70% of the world's lithium reserves and acts as a giant natural mirror when covered with rainwater.",
    status: "published"
  },
  {
    id: "sa-e-52",
    continent: "South America",
    difficulty: "Easy",
    question: "Which colonial Bolivian city at 4,090 meters elevation was built at the base of the Cerro Rico mountain, historically the world's richest silver mine?",
    options: ["Oruro", "Potos\u00ed", "Cochabamba", "Tarija"],
    correctIndex: 1,
    explanation: "Potosí was once one of the largest and wealthiest cities in the world, funding the Spanish Empire for centuries.",
    status: "published"
  },
  {
    id: "sa-e-53",
    continent: "South America",
    difficulty: "Easy",
    question: "Which active stratovolcano in the Ecuadorian Andes is one of the highest active volcanoes in the world, rising to 5,897 meters?",
    options: ["Chimborazo", "Cotopaxi", "Pichincha", "Tungurahua"],
    correctIndex: 1,
    explanation: "Cotopaxi has a symmetrical snow-capped cone and has erupted more than 50 times since 1738.",
    status: "published"
  },
  {
    id: "sa-e-54",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the inactive stratovolcano in Ecuador whose summit is the closest point on Earth's surface to the stars due to the Earth's equatorial bulge?",
    options: ["Cotopaxi", "Mount Chimborazo", "Cayambe", "Antisana"],
    correctIndex: 1,
    explanation: "Chimborazo's peak (6,263 m) is 6,384.4 km from Earth's center—about 2.1 km further than Mount Everest's summit.",
    status: "published"
  },
  {
    id: "sa-e-55",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the highest mountain peak in Peru, located in the Cordillera Blanca range of the Andes at 6,768 meters?",
    options: ["Yerupaj\u00e1", "Huascar\u00e1n", "Coropuna", "Ausangate"],
    correctIndex: 1,
    explanation: "Huascarán is the highest tropical mountain in the world, centerpiece of Huascarán National Park.",
    status: "published"
  },
  {
    id: "sa-e-56",
    continent: "South America",
    difficulty: "Easy",
    question: "Which spectacular mountain in the Peruvian Andes is famous for vibrant multi-colored mineral stripes (red, turquoise, yellow), known locally as Vinicunca?",
    options: ["Ausangate", "Rainbow Mountain (Monta\u00f1a de Siete Colores)", "Huascar\u00e1n", "Alpamayo"],
    correctIndex: 1,
    explanation: "Vinicunca's colorful banding was exposed by recent glacial melting, revealing weathered sedimentary sandstone mineral deposits.",
    status: "published"
  },
  {
    id: "sa-e-57",
    continent: "South America",
    difficulty: "Easy",
    question: "Which mountain peak in Peru's Cordillera Blanca was voted the 'Most Beautiful Mountain in the World' in a 1966 UNESCO survey?",
    options: ["Huascar\u00e1n", "Alpamayo", "Yerupaj\u00e1", "Chacraraju"],
    correctIndex: 1,
    explanation: "Alpamayo is an icy pyramidal peak rising to 5,947 meters with steep fluted ice flutes on its southwest face.",
    status: "published"
  },
  {
    id: "sa-e-58",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the canyon in southern Peru carved by the Colca River that is more than twice as deep as the Grand Canyon, famous for soaring Andean condors?",
    options: ["Cotahuasi Canyon", "Colca Canyon", "Tara Canyon", "Fish River Canyon"],
    correctIndex: 1,
    explanation: "Colca Canyon reaches depths of roughly 3,270 meters, featuring ancient pre-Inca stepped agricultural terraces still farmed today.",
    status: "published"
  },
  {
    id: "sa-e-59",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the canyon in southern Peru carved by the Cotahuasi River, reaching a maximum depth of 3,354 meters?",
    options: ["Colca Canyon", "Cotahuasi Canyon", "Chicamocha Canyon", "Apur\u00edmac Canyon"],
    correctIndex: 1,
    explanation: "Cotahuasi Canyon is one of the deepest ravines on Earth, cutting through volcanic plateaus between Mount Coropuna and Solimana.",
    status: "published"
  },
  {
    id: "sa-e-60",
    continent: "South America",
    difficulty: "Easy",
    question: "What are the ancient geoglyphs etched into the high desert plateau of southern Peru depicting animals, plants, and geometric lines, created between 500 BCE and 500 CE?",
    options: ["Cueva de las Manos", "Nazca Lines", "Paracas Candelabra", "Atacama Giant"],
    correctIndex: 1,
    explanation: "The Nazca Lines were created by removing reddish iron-oxide pebbles to expose whitish subsurface soil, preserved by rainless desert conditions.",
    status: "published"
  },
  {
    id: "sa-e-61",
    continent: "South America",
    difficulty: "Easy",
    question: "Which archaeological cave in Santa Cruz Province, Argentina, is famous for stenciled human handprints dating back over 9,000 years?",
    options: ["Pachacamac", "Cueva de las Manos (Cave of the Hands)", "Inti Mach'ay", "Guitarrero Cave"],
    correctIndex: 1,
    explanation: "Cueva de las Manos sits in the Pinturas River canyon in Patagonia, displaying thousands of prehistoric negative spray-painted handprints.",
    status: "published"
  },
  {
    id: "sa-e-62",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the world-famous advancing glacier in Los Glaciares National Park, Argentina, that periodically dams Lake Argentino before dramatically rupturing?",
    options: ["Upsala Glacier", "Perito Moreno Glacier", "Viedma Glacier", "Grey Glacier"],
    correctIndex: 1,
    explanation: "Perito Moreno is one of the few glaciers worldwide in dynamic equilibrium, advancing across the Brazo Rico channel.",
    status: "published"
  },
  {
    id: "sa-e-63",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the jagged granite mountain peak in Los Glaciares National Park on the border of Argentina and Chile, whose logo inspired the outdoor clothing brand Patagonia?",
    options: ["Cerro Torre", "Mount Fitz Roy (Cerro Chalt\u00e9n)", "Torres del Paine", "Aguja Saint-Exup\u00e9ry"],
    correctIndex: 1,
    explanation: "Mount Fitz Roy rises to 3,405 meters, known as Chaltén ('Smoking Mountain') by the Tehuelche people due to clouds swirling its summit.",
    status: "published"
  },
  {
    id: "sa-e-64",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the famous national park in Chilean Patagonia celebrated for three granite horn-shaped towers, the 'Horns' (Cuernos), and the W-Trek?",
    options: ["Los Glaciares", "Torres del Paine National Park", "Pumalin", "Corcovado"],
    correctIndex: 1,
    explanation: "Torres del Paine features turquoise glacial lakes, iceberg-strewn Grey Glacier, and the granite Paine Massif.",
    status: "published"
  },
  {
    id: "sa-e-65",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the highest mountain peak in the Western and Southern hemispheres, located in Mendoza Province, Argentina, rising to 6,961 meters?",
    options: ["Ojos del Salado", "Aconcagua", "Mount Pissis", "Huascar\u00e1n"],
    correctIndex: 1,
    explanation: "Aconcagua is the highest mountain outside Asia, one of the Seven Summits, situated 15 km from the Chilean border.",
    status: "published"
  },
  {
    id: "sa-e-66",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the highest active volcano in the world and second-highest peak in the Western Hemisphere, located on the Argentina-Chile border at 6,893 meters?",
    options: ["Aconcagua", "Nevado Ojos del Salado", "Llullaillaco", "Cotopaxi"],
    correctIndex: 1,
    explanation: "Ojos del Salado holds the world's highest permanent crater lake at 6,390 meters elevation.",
    status: "published"
  },
  {
    id: "sa-e-67",
    continent: "South America",
    difficulty: "Easy",
    question: "Which active stratovolcano on the Chile-Argentina border is famous for the 1999 discovery of three exceptionally preserved Inca child mummies near its 6,739-meter summit?",
    options: ["Ojos del Salado", "Llullaillaco", "Guallatiri", "Villarrica"],
    correctIndex: 1,
    explanation: "The 'Children of Llullaillaco' were sacrificed in an Inca Capacocha ritual roughly 500 years ago, preserved naturally by freezing temperatures.",
    status: "published"
  },
  {
    id: "sa-e-68",
    continent: "South America",
    difficulty: "Easy",
    question: "Which active volcano in southern Chile's Lake District overlooks the town of Pucón, famous for an active churning summit lava lake?",
    options: ["Osorno", "Villarrica", "Llaima", "Calbuco"],
    correctIndex: 1,
    explanation: "Villarrica ('Rucapillán' in Mapuche) is one of Chile's most active volcanoes, frequently covered in snow while ejecting steam and lava.",
    status: "published"
  },
  {
    id: "sa-e-69",
    continent: "South America",
    difficulty: "Easy",
    question: "Which symmetrical conical volcano in southern Chile overlooks Lake Llanquihue, strongly resembling Japan's Mount Fuji?",
    options: ["Villarrica", "Volc\u00e1n Osorno", "Puntiagudo", "Calbuco"],
    correctIndex: 1,
    explanation: "Volcán Osorno rises 2,652 meters above Lake Llanquihue and Todos los Santos in Vicente Pérez Rosales National Park.",
    status: "published"
  },
  {
    id: "sa-e-70",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the largest lake located entirely within Chile, renowned for the turquoise waters of the Lake District?",
    options: ["Lake Todos los Santos", "Lake Llanquihue", "Lake Ranco", "Lake Villarrica"],
    correctIndex: 1,
    explanation: "Lake Llanquihue covers 860 square kilometers, settled by German immigrants in the mid-19th century at Puerto Varas and Frutillar.",
    status: "published"
  },
  {
    id: "sa-e-71",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the massive binational lake in Patagonia shared between Chile (where it is called General Carrera) and Argentina (Lake Buenos Aires)?",
    options: ["Lake Nahuel Huapi", "Lake General Carrera / Lake Buenos Aires", "Lake San Mart\u00edn", "Lake Viedma"],
    correctIndex: 1,
    explanation: "Lake General Carrera is the second-largest lake in South America after Titicaca, famous for the Marble Caves (Capillas de Mármol).",
    status: "published"
  },
  {
    id: "sa-e-72",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the spectacular natural geological formation of sculpted calcium carbonate arches and caves carved by wave action on Lake General Carrera in Chile?",
    options: ["Cueva de las Manos", "Marble Caves (Capillas de M\u00e1rmol)", "Cathedral Caves", "Painted Caves"],
    correctIndex: 1,
    explanation: "The Marble Caves feature swirling blue and white polished marble pillars reflecting turquoise glacier-melt waters.",
    status: "published"
  },
  {
    id: "sa-e-73",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the large glacial lake in northern Patagonia, Argentina, surrounding the city of San Carlos de Bariloche, centerpiece of Argentina's oldest national park?",
    options: ["Lake Viedma", "Lake Nahuel Huapi", "Lake Argentino", "Lake Lacar"],
    correctIndex: 1,
    explanation: "Nahuel Huapi covers 530 square kilometers in the foothills of the Andes, associated with the lake monster legend 'Nahuelito'.",
    status: "published"
  },
  {
    id: "sa-e-74",
    continent: "South America",
    difficulty: "Easy",
    question: "Which major river in Colombia flows northward between the Central and Eastern ranges of the Andes into the Caribbean Sea at Barranquilla?",
    options: ["Cauca River", "Magdalena River", "Atrato River", "Sin\u00fa River"],
    correctIndex: 1,
    explanation: "The Magdalena River is Colombia's principal waterway, flowing 1,528 kilometers through the heart of the nation.",
    status: "published"
  },
  {
    id: "sa-e-75",
    continent: "South America",
    difficulty: "Easy",
    question: "Which major river in northern South America flows roughly 2,250 kilometers through Venezuela and Colombia into the Atlantic Ocean via an immense 30,000-sq-km delta?",
    options: ["Magdalena", "Orinoco River", "Amazon", "Essequibo River"],
    correctIndex: 1,
    explanation: "The Orinoco is the fourth-largest river in the world by water discharge, home to endangered Orinoco crocodiles and pink river dolphins.",
    status: "published"
  },
  {
    id: "sa-e-76",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the largest tributary of the Amazon River by discharge, formed by the confluence of the Mamoré and Beni rivers on the Bolivia-Brazil border?",
    options: ["Rio Negro", "Madeira River", "Xingu River", "Tapaj\u00f3s River"],
    correctIndex: 1,
    explanation: "The Madeira River flows 3,380 kilometers, transporting massive sediment loads from the eastern slopes of the Bolivian Andes.",
    status: "published"
  },
  {
    id: "sa-e-77",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the largest blackwater river in the world, originating in Colombia as the Guainía and flowing into the Amazon at Manaus, Brazil?",
    options: ["Madeira River", "Rio Negro", "Tapaj\u00f3s River", "Japur\u00e1 River"],
    correctIndex: 1,
    explanation: "The Rio Negro's dark tea-colored water results from dissolved humic and fulvic acids from decaying vegetation in sandy soils.",
    status: "published"
  },
  {
    id: "sa-e-78",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the famous hydrological phenomenon at Manaus, Brazil, where the dark Rio Negro and pale sandy Amazon (Solimões) flow side-by-side without mixing for 6 km?",
    options: ["Pororoca", "Meeting of Waters (Encontro das \u00c1guas)", "Devil's Throat", "Bifurcation"],
    correctIndex: 1,
    explanation: "Differences in speed, water temperature, and sediment density prevent the Rio Negro and Solimões from blending immediately.",
    status: "published"
  },
  {
    id: "sa-e-79",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the major industrial duty-free port city located in the heart of the Brazilian Amazon at the confluence of the Rio Negro and Amazon rivers?",
    options: ["Bel\u00e9m", "Manaus", "Santar\u00e9m", "Macap\u00e1"],
    correctIndex: 1,
    explanation: "Manaus prospered during the 19th-century Amazon Rubber Boom, famous for the opulent Amazon Theatre opera house built with European materials.",
    status: "published"
  },
  {
    id: "sa-e-80",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the Brazilian port city situated near the mouth of the Amazon River on the Pará River estuary, the historic gateway to the Amazon basin?",
    options: ["Manaus", "Bel\u00e9m", "S\u00e3o Lu\u00eds", "Fortaleza"],
    correctIndex: 1,
    explanation: "Belém is famous for the historic Ver-o-Peso waterfront market and Mercado de Ferro.",
    status: "published"
  },
  {
    id: "sa-e-81",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the massive fluvial-marine island in Pará, Brazil, located at the mouth of the Amazon River, which is the largest river island in the world (roughly the size of Switzerland)?",
    options: ["Bananal Island", "Maraj\u00f3 Island", "Tupinambarana", "Ilha Grande"],
    correctIndex: 1,
    explanation: "Marajó covers 40,100 square kilometers, famous for domestic water buffalo herds and ancient pre-Columbian Marajoara pottery.",
    status: "published"
  },
  {
    id: "sa-e-82",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the largest purely inland freshwater island in the world, formed by the bifurcation of the Araguaia River in Tocantins, Brazil?",
    options: ["Maraj\u00f3", "Bananal Island (Ilha do Bananal)", "Manitoulin", "Ren\u00e9-Levasseur"],
    correctIndex: 1,
    explanation: "Bananal Island covers 19,162 square kilometers between the Araguaia and Javaés rivers, home to the Javaé and Karajá indigenous reserves.",
    status: "published"
  },
  {
    id: "sa-e-83",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the natural tidal bore phenomenon that occurs on the Amazon River and neighboring estuaries where Atlantic spring tides generate a 4-meter wave traveling upriver?",
    options: ["El Ni\u00f1o", "Pororoca", "Swell", "Seiche"],
    correctIndex: 1,
    explanation: "The Pororoca ('great destructive noise' in Tupi) can be heard 30 minutes before arriving, attracting extreme distance surfers.",
    status: "published"
  },
  {
    id: "sa-e-84",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the large national park in Maranhão, northern Brazil, famous for vast white sand dunes filled with crystal-clear blue and green seasonal rainwater lagoons?",
    options: ["Pantanal", "Len\u00e7\u00f3is Maranhenses National Park", "Chapada Diamantina", "Serra da Capivara"],
    correctIndex: 1,
    explanation: "During the rainy season (January to June), impermeable rock beneath the dunes traps freshwater, creating thousands of turquoise swimming lagoons.",
    status: "published"
  },
  {
    id: "sa-e-85",
    continent: "South America",
    difficulty: "Easy",
    question: "Which national park in Bahia, Brazil, features dramatic flat-topped sandstone plateaus (tepuis), canyons, and underground sapphire-blue water caves (Poço Azul)?",
    options: ["Chapada dos Veadeiros", "Chapada Diamantina National Park", "Serra dos \u00d3rg\u00e3os", "Itatiaia"],
    correctIndex: 1,
    explanation: "Chapada Diamantina was a major diamond-mining center in the 19th century, home to the 340-meter Fumaça Waterfall.",
    status: "published"
  },
  {
    id: "sa-e-86",
    continent: "South America",
    difficulty: "Easy",
    question: "Which ancient plateau national park in Goiás, Brazil, is famous for quartz crystal outcrops, waterfalls, and high biodiversity on the Cerrado plateau?",
    options: ["Chapada Diamantina", "Chapada dos Veadeiros National Park", "Chapada dos Guimar\u00e3es", "Serra da Canastra"],
    correctIndex: 1,
    explanation: "Chapada dos Veadeiros sits on an ancient 1.8-billion-year-old quartz plateau, recognized as a UNESCO World Heritage site.",
    status: "published"
  },
  {
    id: "sa-e-87",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the UNESCO World Heritage national park in Piauí, northeastern Brazil, famous for over 30,000 prehistoric rock paintings in sandstone rock shelters?",
    options: ["Sete Cidades", "Serra da Capivara National Park", "Catimbau", "Ubajara"],
    correctIndex: 1,
    explanation: "Excavations led by archaeologist Niède Guidon at Serra da Capivara sparked international debates regarding early human arrival in the Americas.",
    status: "published"
  },
  {
    id: "sa-e-88",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the volcanic archipelago of 21 islands located 350 km off the northeastern coast of Brazil in the Atlantic Ocean, a world-famous dolphin and diving sanctuary?",
    options: ["Abrolhos", "Fernando de Noronha", "Trindade", "Rocas Atoll"],
    correctIndex: 1,
    explanation: "Fernando de Noronha is a UNESCO site with strictly capped visitor quotas to protect spinner dolphin breeding bays and green sea turtle nests.",
    status: "published"
  },
  {
    id: "sa-e-89",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the only coral atoll in the South Atlantic Ocean, located 145 km west of Fernando de Noronha off northeastern Brazil?",
    options: ["Abrolhos", "Rocas Atoll (Atol das Rocas)", "Trindade", "Saint Peter and Saint Paul Rocks"],
    correctIndex: 1,
    explanation: "Rocas Atoll is a biological marine reserve protecting massive colonies of seabirds, lemon sharks, and sea turtles.",
    status: "published"
  },
  {
    id: "sa-e-90",
    continent: "South America",
    difficulty: "Easy",
    question: "Which group of tiny rocky islets on the Mid-Atlantic Ridge near the equator belongs to Brazil, sitting just north of the Saint Paul Fracture Zone?",
    options: ["Trindade", "Saint Peter and Saint Paul Archipelago", "Fernando de Noronha", "Martim Vaz"],
    correctIndex: 1,
    explanation: "The islets are formed of mantle peridotite uplifted from the ocean floor, hosting a permanently manned Brazilian naval research station.",
    status: "published"
  },
  {
    id: "sa-e-91",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the volcanic island belonging to Brazil located 1,140 km east of the coast of Espírito Santo in the open South Atlantic Ocean?",
    options: ["Fernando de Noronha", "Trindade Island", "Ascension", "Gough"],
    correctIndex: 1,
    explanation: "Trindade and the Martim Vaz archipelago represent the easternmost extreme of Brazilian sovereign territory, manned by the Brazilian Navy.",
    status: "published"
  },
  {
    id: "sa-e-92",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the highest mountain peak in Brazil, rising to 2,995 meters in the Serra da Neblina on the border with Venezuela?",
    options: ["Pico da Bandeira", "Pico da Neblina", "Pico das Agulhas Negras", "Pedra da Mina"],
    correctIndex: 1,
    explanation: "Pico da Neblina ('Peak of the Mists') is an isolated sandstone massif shrouded in perpetual cloud cover within the Amazonian Guiana Shield.",
    status: "published"
  },
  {
    id: "sa-e-93",
    continent: "South America",
    difficulty: "Easy",
    question: "What was long considered the highest peak in Brazil before modern satellite GPS surveying, located in Caparaó National Park at 2,892 meters?",
    options: ["Pico da Neblina", "Pico da Bandeira", "Pico do Cristal", "Pedra do Sino"],
    correctIndex: 1,
    explanation: "Pico da Bandeira is the third-highest peak in Brazil, situated in the Atlantic Forest on the border of Minas Gerais and Espírito Santo.",
    status: "published"
  },
  {
    id: "sa-e-94",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the famous mountain range in Rio de Janeiro State celebrated for the 'Finger of God' (Dedo de Deus) rock spire?",
    options: ["Serra da Mantiqueira", "Serra dos \u00d3rg\u00e3os", "Serra do Espinha\u00e7o", "Serra da Canastra"],
    correctIndex: 1,
    explanation: "Serra dos Órgãos ('Organ Range') was named by Portuguese settlers who thought the vertical granite columns resembled the pipes of church organs.",
    status: "published"
  },
  {
    id: "sa-e-95",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the national park in Minas Gerais, Brazil, that protects the headwaters of the São Francisco River and is famous for traditional Canastra cheese?",
    options: ["Itatiaia", "Serra da Canastra National Park", "Capara\u00f3", "Serra do Cip\u00f3"],
    correctIndex: 1,
    explanation: "Serra da Canastra contains the 186-meter Casca d'Anta waterfall and preserves giant anteaters and maned wolves.",
    status: "published"
  },
  {
    id: "sa-e-96",
    continent: "South America",
    difficulty: "Easy",
    question: "Which ancient mountain range extends 1,000 kilometers through Minas Gerais and Bahia, recognized as the only diamond-bearing mountain belt in South America?",
    options: ["Serra do Mar", "Serra do Espinha\u00e7o", "Serra da Mantiqueira", "Serra Geral"],
    correctIndex: 1,
    explanation: "Serra do Espinhaço contains colonial gold and diamond towns like Ouro Preto, Diamantina, and Mariana.",
    status: "published"
  },
  {
    id: "sa-e-97",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the historic colonial baroque mining town in Minas Gerais, Brazil, that was the center of the 18th-century Brazilian Gold Rush, designated a UNESCO World Heritage site?",
    options: ["Tiradentes", "Ouro Preto (formerly Vila Rica)", "Diamantina", "Congonhas"],
    correctIndex: 1,
    explanation: "Ouro Preto ('Black Gold') preserves historic Portuguese Baroque churches containing soapstone sculptures by the master sculptor Aleijadinho.",
    status: "published"
  },
  {
    id: "sa-e-98",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the coastal mountain range running 1,500 kilometers along the Atlantic coast of southeastern Brazil from Rio de Janeiro to Santa Catarina?",
    options: ["Serra da Mantiqueira", "Serra do Mar", "Serra Geral", "Serra Ga\u00facha"],
    correctIndex: 1,
    explanation: "The Serra do Mar creates an abrupt escarpment rising 1,000 meters directly behind the coastal plain, forcing heavy Atlantic orographic rainfall.",
    status: "published"
  },
  {
    id: "sa-e-99",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the primary river in central Chile that flows through the capital city of Santiago before joining the Maipo River?",
    options: ["Biob\u00edo River", "Mapocho River", "Maule River", "Aconcagua River"],
    correctIndex: 1,
    explanation: "The Mapocho River divides Santiago into northern and southern sectors, fed by meltwater from the high Andes.",
    status: "published"
  },
  {
    id: "sa-e-100",
    continent: "South America",
    difficulty: "Easy",
    question: "What is the second-longest river in Chile, which historically marked the frontier between the Spanish Captaincy General and the independent Mapuche people?",
    options: ["Mapocho River", "Biob\u00edo River", "Loa River", "Baker River"],
    correctIndex: 1,
    explanation: "The Biobío River flows 380 kilometers from the Andes to the Pacific at Concepción, the historical line of the Arauco War.",
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
    id: "sa-m-3",
    continent: "South America",
    difficulty: "Medium",
    question: "Which South American nation shares land borders with every other country on the continent except Chile and Ecuador?",
    options: ["Argentina", "Brazil", "Colombia", "Bolivia"],
    correctIndex: 1,
    explanation: "Brazil borders ten sovereign nations: Uruguay, Argentina, Paraguay, Bolivia, Peru, Colombia, Venezuela, Guyana, Suriname, and French Guiana (France).",
    status: "published"
  },
  {
    id: "sa-m-4",
    continent: "South America",
    difficulty: "Medium",
    question: "Which river forms a significant portion of the international border between Colombia and Venezuela before joining the Orinoco?",
    options: ["Magdalena River", "Arauca River", "Meta River", "Cauca River"],
    correctIndex: 1,
    explanation: "The Arauca River flows eastward from the Cordillera Oriental in Colombia, defining roughly 296 km of the Colombia-Venezuela border.",
    status: "published"
  },
  {
    id: "sa-m-5",
    continent: "South America",
    difficulty: "Medium",
    question: "Which major river in Colombia flows northward between the Cordillera Central and Cordillera Occidental to join the Magdalena River?",
    options: ["Atrato River", "Cauca River", "Sin\u00fa River", "Putumayo River"],
    correctIndex: 1,
    explanation: "The Cauca River flows 965 km through Colombia's fertile coffee-growing Cauca Valley before merging into the Magdalena River.",
    status: "published"
  },
  {
    id: "sa-m-6",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the highest mountain peak in Colombia, located in an isolated coastal range rather than the main Andes cordillera?",
    options: ["Nevado del Ruiz", "Pico Crist\u00f3bal Col\u00f3n", "Nevado del Huila", "Ritacuba Blanco"],
    correctIndex: 1,
    explanation: "Pico Cristóbal Colón in the Sierra Nevada de Santa Marta rises to 5,730 meters, standing just 42 km from the Caribbean coast.",
    status: "published"
  },
  {
    id: "sa-m-7",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the northernmost point of mainland South America, situated on the Guajira Peninsula in Colombia?",
    options: ["Cape Froward", "Punta Gallinas", "Punta Pari\u00f1as", "Ponta do Seixas"],
    correctIndex: 1,
    explanation: "Punta Gallinas sits at latitude 12°27' N on the arid Guajira Peninsula overlooking the Caribbean Sea.",
    status: "published"
  },
  {
    id: "sa-m-8",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the southernmost point of mainland South America, situated on the Brunswick Peninsula in Chile?",
    options: ["Cape Horn", "Cape Froward", "Cabo V\u00edrgenes", "Punta Arenas"],
    correctIndex: 1,
    explanation: "Cape Froward marks the southernmost tip of the continental mainland (53°53' S); Cape Horn is further south but located on an island.",
    status: "published"
  },
  {
    id: "sa-m-9",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the westernmost point of mainland South America, located in the Piura Region of Peru?",
    options: ["Punta Gallinas", "Punta Pari\u00f1as", "Punta del Este", "Cabo de S\u00e3o Roque"],
    correctIndex: 1,
    explanation: "Punta Pariñas (also called Punta Balcones) is located at longitude 81°20' W on Peru's northern Pacific coast.",
    status: "published"
  },
  {
    id: "sa-m-10",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the easternmost point of mainland South America, located near João Pessoa in Paraíba, Brazil?",
    options: ["Ponta do Seixas", "Cabo Branco", "Punta del Este", "Recife Point"],
    correctIndex: 0,
    explanation: "Ponta do Seixas sits at longitude 34°47' W, the easternmost continental point of the Americas.",
    status: "published"
  },
  {
    id: "sa-m-11",
    continent: "South America",
    difficulty: "Medium",
    question: "Which South American country possesses the longest coastline on the Pacific Ocean, extending over 4,200 kilometers from north to south?",
    options: ["Peru", "Chile", "Colombia", "Ecuador"],
    correctIndex: 1,
    explanation: "Chile stretches 4,270 km along the southwestern edge of South America, averaging only 177 km in width.",
    status: "published"
  },
  {
    id: "sa-m-12",
    continent: "South America",
    difficulty: "Medium",
    question: "Which shallow, saline lake on the Bolivian Altiplano dried up almost completely in late 2015 due to agricultural diversions and prolonged drought?",
    options: ["Lake Titicaca", "Lake Poop\u00f3", "Laguna Colorada", "Laguna Verde"],
    correctIndex: 1,
    explanation: "Lake Poopó once covered over 1,000 square kilometers at 3,686 meters elevation, fed by the Desaguadero River from Lake Titicaca.",
    status: "published"
  },
  {
    id: "sa-m-13",
    continent: "South America",
    difficulty: "Medium",
    question: "Which river flows out of Lake Titicaca in the south and historically transported water into Lake Poopó on the Bolivian Altiplano?",
    options: ["Urubamba River", "Desaguadero River", "Pilcomayo River", "Beni River"],
    correctIndex: 1,
    explanation: "The Desaguadero River drains the southern basin of Lake Titicaca, flowing roughly 400 km across the Altiplano.",
    status: "published"
  },
  {
    id: "sa-m-14",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the primary mountain pass connecting Mendoza, Argentina with Santiago, Chile through the high Andes?",
    options: ["Paso de San Francisco", "Paso Internacional Los Libertadores (Uspallata)", "Paso Cardenal Samor\u00e9", "Paso de Jama"],
    correctIndex: 1,
    explanation: "Paso Los Libertadores carries the main international highway through the Christ the Redeemer Tunnel at roughly 3,200 meters elevation.",
    status: "published"
  },
  {
    id: "sa-m-15",
    continent: "South America",
    difficulty: "Medium",
    question: "What famous bronze statue was erected at 3,832 meters elevation on the Argentine-Chilean border in 1904 to celebrate peaceful boundary resolution?",
    options: ["Christ the Redeemer of Rio", "Christ of the Andes (Cristo Redentor de los Andes)", "Monument to the Liberator", "Virgen del Carmen"],
    correctIndex: 1,
    explanation: "Christ of the Andes stands near Uspallata Pass, inscribed with a pledge of perpetual peace between Argentina and Chile.",
    status: "published"
  },
  {
    id: "sa-m-16",
    continent: "South America",
    difficulty: "Medium",
    question: "Which historic Chilean port city is renowned for its funicular elevators (ascensores) and vibrant hillside neighborhoods, designated a UNESCO World Heritage site?",
    options: ["Antofagasta", "Valpara\u00edso", "Iquique", "Arica"],
    correctIndex: 1,
    explanation: "Valparaíso was South America's major Pacific seaport before the Panama Canal opened, famous for hillside Victorian and bohemian architecture.",
    status: "published"
  },
  {
    id: "sa-m-17",
    continent: "South America",
    difficulty: "Medium",
    question: "What cold, low-salinity ocean current flows northward along the western coast of South America from Chile to Peru?",
    options: ["Brazil Current", "Humboldt Current (Peru Current)", "Falkland Current", "Benguela Current"],
    correctIndex: 1,
    explanation: "The Humboldt Current brings nutrient-rich cold Antarctic upwelling water along the coast, driving one of the world's most productive marine ecosystems.",
    status: "published"
  },
  {
    id: "sa-m-18",
    continent: "South America",
    difficulty: "Medium",
    question: "How does the cold Humboldt Current affect the climate along the coast of Peru and northern Chile?",
    options: ["Produces heavy monsoonal summer rain", "Creates atmospheric temperature inversions causing dense fog and extreme aridity", "Causes frequent tropical cyclones", "Maintains warm humid tropical conditions year-round"],
    correctIndex: 1,
    explanation: "Cold surface waters cool the lower atmosphere, preventing convective cloud formation and creating the coastal Atacama and Sechura deserts.",
    status: "published"
  },
  {
    id: "sa-m-19",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the local Spanish term for the dense coastal fog and drizzle that shrouds the desert coastline of Peru and northern Chile during winter?",
    options: ["Pampero", "Gar\u00faa (Camanchaca)", "Zonda", "Chubasco"],
    correctIndex: 1,
    explanation: "The garúa (called camanchaca in Chile) provides vital condensation moisture for fragile fog-oasis ecosystems known as 'lomas'.",
    status: "published"
  },
  {
    id: "sa-m-20",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the coastal desert in northwestern Peru situated south of the Piura River, known for extensive sand dunes and phosphate deposits?",
    options: ["Atacama Desert", "Sechura Desert", "Monte Desert", "Patagonian Desert"],
    correctIndex: 1,
    explanation: "The Sechura Desert covers roughly 5,000 square kilometers along Peru's Pacific coast between Piura and Lambayeque.",
    status: "published"
  },
  {
    id: "sa-m-21",
    continent: "South America",
    difficulty: "Medium",
    question: "Which dry scrub and savanna region in northwestern Argentina lies in the rain shadow of the Andes across San Juan, La Rioja, and Mendoza?",
    options: ["Gran Chaco", "Monte Desert", "The Pampas", "The Llanos"],
    correctIndex: 1,
    explanation: "The Monte Desert receives only 100 to 300 mm of rain annually, characterized by resinous zygophyllaceous shrubs (larrea) and cactus scrub.",
    status: "published"
  },
  {
    id: "sa-m-22",
    continent: "South America",
    difficulty: "Medium",
    question: "Which Colombian city located in the Aburrá Valley is famously called the 'City of Eternal Spring' (Ciudad de la Eterna Primavera)?",
    options: ["Cali", "Medell\u00edn", "Barranquilla", "Cartagena"],
    correctIndex: 1,
    explanation: "Medellín sits at 1,500 meters elevation in the Central Andes, providing a stable, mild subtropical highland climate year-round.",
    status: "published"
  },
  {
    id: "sa-m-23",
    continent: "South America",
    difficulty: "Medium",
    question: "Which port city on Colombia's Pacific coast is the country's primary Pacific seaport, handling more than half of all international maritime cargo?",
    options: ["Tumaco", "Buenaventura", "Cartagena", "Santa Marta"],
    correctIndex: 1,
    explanation: "Buenaventura is situated on Cascajal Island in Buenaventura Bay, connected to Cali and Bogotá by highway.",
    status: "published"
  },
  {
    id: "sa-m-24",
    continent: "South America",
    difficulty: "Medium",
    question: "Which coastal department of western Colombia is celebrated as one of the rainiest regions on Earth, receiving up to 13,000 mm of rain annually?",
    options: ["Antioquia", "Choc\u00f3", "Nari\u00f1o", "Valle del Cauca"],
    correctIndex: 1,
    explanation: "Chocó features dense tropical rainforest where moisture-laden Pacific trade winds collide with the Western Andes.",
    status: "published"
  },
  {
    id: "sa-m-25",
    continent: "South America",
    difficulty: "Medium",
    question: "Which river in western Colombia flows northward between the Cordillera Occidental and the Baudo range into the Gulf of Urabá on the Caribbean Sea?",
    options: ["Magdalena River", "Atrato River", "Cauca River", "San Juan River"],
    correctIndex: 1,
    explanation: "The Atrato River is Colombia's deepest navigable river, considered a candidate for an alternate interoceanic canal route.",
    status: "published"
  },
  {
    id: "sa-m-26",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the dense, roadless swamp and jungle area spanning the border of Colombia and Panama that interrupts the Pan-American Highway?",
    options: ["Choc\u00f3 Rainforest", "Dari\u00e9n Gap (Tap\u00f3n del Dari\u00e9n)", "Gran Chaco", "Guiana Shield"],
    correctIndex: 1,
    explanation: "The Darién Gap creates a 106-km break in the Pan-American Highway between Turbo, Colombia, and Yaviza, Panama.",
    status: "published"
  },
  {
    id: "sa-m-27",
    continent: "South America",
    difficulty: "Medium",
    question: "Which Brazilian state is historically renowned for mining gold, diamonds, and iron ore, deriving its name from 'General Mines'?",
    options: ["Bahia", "Minas Gerais", "Goi\u00e1s", "Mato Grosso"],
    correctIndex: 1,
    explanation: "Minas Gerais was the epicenter of the 18th-century Gold Rush and remains Brazil's primary producer of iron ore and coffee.",
    status: "published"
  },
  {
    id: "sa-m-28",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the mineral-rich area in Minas Gerais, Brazil, that forms one of the world's most productive iron ore mining belts?",
    options: ["Caraj\u00e1s", "Quadril\u00e1tero Ferr\u00edfero (Iron Quadrangle)", "Serra Pelada", "Capanema"],
    correctIndex: 1,
    explanation: "The Iron Quadrangle covers roughly 7,000 square kilometers south of Belo Horizonte, containing massive banded iron formations (itabirite).",
    status: "published"
  },
  {
    id: "sa-m-29",
    continent: "South America",
    difficulty: "Medium",
    question: "Where is the Carajás Mine, the world's largest open-pit iron ore mine complex, located in Brazil?",
    options: ["Minas Gerais", "Par\u00e1", "Bahia", "Maranh\u00e3o"],
    correctIndex: 1,
    explanation: "Carajás is situated in the Serra dos Carajás in the state of Pará, served by a dedicated 892-km railway to the port of Ponta da Madeira.",
    status: "published"
  },
  {
    id: "sa-m-30",
    continent: "South America",
    difficulty: "Medium",
    question: "Which Brazilian port city in the state of São Paulo is the largest and busiest container shipping port in Latin America?",
    options: ["Rio de Janeiro", "Santos", "Paranagu\u00e1", "Vit\u00f3ria"],
    correctIndex: 1,
    explanation: "The Port of Santos handles over 25% of Brazil's total foreign trade, historically famous as the coffee port of Brazil.",
    status: "published"
  },
  {
    id: "sa-m-31",
    continent: "South America",
    difficulty: "Medium",
    question: "Which river marks the border between Brazil and Paraguay before joining the Paraná River just below the Itaipu Dam?",
    options: ["Iguazu River", "Paraguay River", "Uruguay River", "Pilcomayo River"],
    correctIndex: 0,
    explanation: "The Iguazu River flows west across Paraná state before forming the international border with Argentina and emptying into the Paraná River.",
    status: "published"
  },
  {
    id: "sa-m-32",
    continent: "South America",
    difficulty: "Medium",
    question: "Which binational hydroelectric power plant on the Paraná River is owned and operated jointly by Argentina and Paraguay?",
    options: ["Itaipu Dam", "Yacyret\u00e1 Dam", "Guri Dam", "Salto Grande Dam"],
    correctIndex: 1,
    explanation: "Yacyretá Dam is located downstream from Posadas and Encarnación, with an installed capacity of 3,200 MW.",
    status: "published"
  },
  {
    id: "sa-m-33",
    continent: "South America",
    difficulty: "Medium",
    question: "Which major river flows southeastward from the Bolivian Andes across the Gran Chaco of Argentina to empty into the Paraguay River near Formosa?",
    options: ["Salado River", "Bermejo River", "Dulce River", "Pilcomayo River"],
    correctIndex: 1,
    explanation: "The Bermejo River carries an immense reddish-brown silt load from Andean erosion across 1,060 km of northern Argentina.",
    status: "published"
  },
  {
    id: "sa-m-34",
    continent: "South America",
    difficulty: "Medium",
    question: "What extensive network of freshwater wetlands, marshes, and lagoons in Corrientes Province, Argentina, covers roughly 13,000 square kilometers?",
    options: ["The Pantanal", "Esteros del Iber\u00e1", "Ba\u00f1ados de Izozog", "Otuquis"],
    correctIndex: 1,
    explanation: "Esteros del Iberá is South America's second-largest wetland, celebrated for rewilding projects restoring jaguars and giant otters.",
    status: "published"
  },
  {
    id: "sa-m-35",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the massive shallow salt lake in Córdoba Province, Argentina, that is one of the largest saline lakes on Earth?",
    options: ["Lake Poop\u00f3", "Laguna Mar Chiquita (Ansenuza)", "Lake Buenos Aires", "Lake Cardiel"],
    correctIndex: 1,
    explanation: "Mar Chiquita spans up to 6,000 square kilometers depending on rainfall, declared Ansenuza National Park in 2022.",
    status: "published"
  },
  {
    id: "sa-m-36",
    continent: "South America",
    difficulty: "Medium",
    question: "Which province in western Argentina produces more than 70% of the country's wine, utilizing meltwater from the high Andes?",
    options: ["Salta", "Mendoza", "San Juan", "Neuqu\u00e9n"],
    correctIndex: 1,
    explanation: "Mendoza features world-renowned high-altitude vineyards in the Uco Valley and Luján de Cuyo.",
    status: "published"
  },
  {
    id: "sa-m-37",
    continent: "South America",
    difficulty: "Medium",
    question: "Which red wine grape variety originally from southwestern France has become the signature flagship varietal of Argentina?",
    options: ["Cabernet Sauvignon", "Malbec", "Merlot", "Syrah"],
    correctIndex: 1,
    explanation: "Malbec was introduced to Argentina by French agronomist Michel Pouget in 1853, thriving in Mendoza's sunny, dry climate.",
    status: "published"
  },
  {
    id: "sa-m-38",
    continent: "South America",
    difficulty: "Medium",
    question: "Which red wine grape variety, thought extinct in Europe after phylloxera, was rediscovered in Chile in 1994 masquerading as Merlot?",
    options: ["Pinot Noir", "Carm\u00e9n\u00e8re", "Tannat", "Malbec"],
    correctIndex: 1,
    explanation: "Carménère has become Chile's signature grape, thriving in the Colchagua and Maipo valleys.",
    status: "published"
  },
  {
    id: "sa-m-39",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the agricultural and population heartland of Chile situated between the coastal mountain range and the high Andes?",
    options: ["Atacama Desert", "Chilean Central Valley (Valle Central)", "Patagonian Steppe", "Magellanic Tundra"],
    correctIndex: 1,
    explanation: "The Chilean Central Valley enjoys a Mediterranean climate that supports the majority of Chile's population, agriculture, and industry.",
    status: "published"
  },
  {
    id: "sa-m-40",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the 1,240-kilometer scenic highway in southern Chile connecting Puerto Montt to Villa O'Higgins through rugged fjords and temperate rainforests?",
    options: ["Ruta 40", "Carretera Austral (Route 7)", "Pan-American Highway", "Trans-Chaco Highway"],
    correctIndex: 1,
    explanation: "Constructed beginning in 1976 under Augusto Pinochet, the Carretera Austral provides overland access to remote Chilean Patagonia.",
    status: "published"
  },
  {
    id: "sa-m-41",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the legendary 5,194-kilometer Argentine highway running parallel to the Andes from La Quiaca in the north to Cabo Vírgenes in the south?",
    options: ["Carretera Austral", "Ruta Nacional 40 (Ruta 40)", "Ruta Panamericana", "Ruta 3"],
    correctIndex: 1,
    explanation: "Ruta 40 crosses 18 rivers, 20 national parks, and crosses the 5,000-meter Abra del Acay pass in Salta.",
    status: "published"
  },
  {
    id: "sa-m-42",
    continent: "South America",
    difficulty: "Medium",
    question: "Which large island in southern Chile is famous for its colorful stilt houses (palafitos) and 16 UNESCO-designated wooden churches?",
    options: ["Tierra del Fuego", "Chilo\u00e9 Island (Isla Grande de Chilo\u00e9)", "Navarino Island", "Wellington Island"],
    correctIndex: 1,
    explanation: "Chiloé is renowned for native potato varieties, unique maritime mythology, and historic Jesuit wooden church architecture.",
    status: "published"
  },
  {
    id: "sa-m-43",
    continent: "South America",
    difficulty: "Medium",
    question: "What body of water separates Chiloé Island from mainland Chile in the north?",
    options: ["Beagle Channel", "Chacao Channel", "Strait of Magellan", "Drake Passage"],
    correctIndex: 1,
    explanation: "The Chacao Channel is roughly 2.5 km wide, connecting the Pacific Ocean with the Gulf of Ancud.",
    status: "published"
  },
  {
    id: "sa-m-44",
    continent: "South America",
    difficulty: "Medium",
    question: "Which large coastal indentation in southern Argentina is located between the Valdés Peninsula and Cape Tres Puntas?",
    options: ["Gulf of Urab\u00e1", "Gulf of San Jorge", "Gulf of Guayaquil", "Gulf of Paria"],
    correctIndex: 1,
    explanation: "The Gulf of San Jorge is an open Atlantic bay flanked by Comodoro Rivadavia, Argentina's petroleum capital.",
    status: "published"
  },
  {
    id: "sa-m-45",
    continent: "South America",
    difficulty: "Medium",
    question: "Which protected peninsula in Chubut, Argentina, is world-famous as a breeding ground for southern right whales and southern elephant seals?",
    options: ["Brunswick Peninsula", "Vald\u00e9s Peninsula (Pen\u00ednsula Vald\u00e9s)", "Paracas Peninsula", "Guajira Peninsula"],
    correctIndex: 1,
    explanation: "Valdés Peninsula is a UNESCO World Heritage site featuring Golfo Nuevo and Golfo San José.",
    status: "published"
  },
  {
    id: "sa-m-46",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the lowest point in South America and the Western Hemisphere, located at 105 meters below sea level in Santa Cruz, Argentina?",
    options: ["Death Valley", "Laguna del Carb\u00f3n", "Salton Sink", "Salar de Uyuni"],
    correctIndex: 1,
    explanation: "Laguna del Carbón sits in the San Julián Great Depression, the eighth-lowest point on Earth's surface.",
    status: "published"
  },
  {
    id: "sa-m-47",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the largest glacial lake situated entirely within Argentine territory, covering 1,466 square kilometers in Santa Cruz Province?",
    options: ["Lake Nahuel Huapi", "Lake Argentino", "Lake Viedma", "Lake San Mart\u00edn"],
    correctIndex: 1,
    explanation: "Lake Argentino is fed by Perito Moreno, Upsala, and Spegazzini glaciers, draining into the Atlantic via the Santa Cruz River.",
    status: "published"
  },
  {
    id: "sa-m-48",
    continent: "South America",
    difficulty: "Medium",
    question: "Which Patagonian lake feeds the Santa Cruz River and is directly fed by the massive 977-square-kilometer Viedma Glacier?",
    options: ["Lake Nahuel Huapi", "Lake Viedma", "Lake Cardiel", "Lake Strobel"],
    correctIndex: 1,
    explanation: "Lake Viedma spans 1,088 square kilometers, situated immediately east of Mount Fitz Roy and Cerro Torre.",
    status: "published"
  },
  {
    id: "sa-m-49",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the massive contiguous icefield in southern Chile and Argentina that represents the largest ice expanse outside the polar regions?",
    options: ["Columbia Icefield", "Southern Patagonian Icefield (Hielo Continental Sur)", "Jostedalsbreen", "Vatnaj\u00f6kull"],
    correctIndex: 1,
    explanation: "The Southern Patagonian Icefield covers roughly 12,363 square kilometers, feeding 48 major outlet glaciers.",
    status: "published"
  },
  {
    id: "sa-m-50",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the highest mountain peak in Patagonia outside the volcanic zones, rising to 4,058 meters on the Northern Patagonian Icefield in Chile?",
    options: ["Mount Fitz Roy", "Monte San Valent\u00edn", "Cerro Torre", "Mount Darwin"],
    correctIndex: 1,
    explanation: "Monte San Valentín is an ultra-prominent ice-clad peak situated at the head of the San Rafael Glacier in Laguna San Rafael National Park.",
    status: "published"
  },
  {
    id: "sa-m-51",
    continent: "South America",
    difficulty: "Medium",
    question: "Which South American nation is the world's leading producer and exporter of copper, accounting for roughly 25% of global mine production?",
    options: ["Peru", "Chile", "Brazil", "Bolivia"],
    correctIndex: 1,
    explanation: "Chile's economy heavily relies on copper extraction from massive porphyry deposits across the Andes and Atacama.",
    status: "published"
  },
  {
    id: "sa-m-52",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the name of the open-pit copper mine near Calama in northern Chile, the largest open-pit mine by excavated volume in the world?",
    options: ["Escondida", "Chuquicamata", "El Teniente", "Collahuasi"],
    correctIndex: 1,
    explanation: "Chuquicamata ('Chuqui') is over 1,000 meters deep and 4.5 km long, operated by state-owned Codelco.",
    status: "published"
  },
  {
    id: "sa-m-53",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the name of the world's largest underground copper mine by developed galleries and reserves, located in the Andes near Rancagua, Chile?",
    options: ["Chuquicamata", "El Teniente", "Los Pelambres", "Andina"],
    correctIndex: 1,
    explanation: "El Teniente contains over 3,000 kilometers of underground drifts and tunnels, operating since 1905.",
    status: "published"
  },
  {
    id: "sa-m-54",
    continent: "South America",
    difficulty: "Medium",
    question: "Which South American nation is renowned as the world's premier producer of fine emeralds, centered around the Muzo and Chivor mines?",
    options: ["Brazil", "Colombia", "Peru", "Venezuela"],
    correctIndex: 1,
    explanation: "Colombian emeralds are celebrated for their vivid green hue, formed in sedimentary shales in the Cordillera Oriental.",
    status: "published"
  },
  {
    id: "sa-m-55",
    continent: "South America",
    difficulty: "Medium",
    question: "Which Andean city in central Peru at 4,380 meters elevation is historically one of the world's highest mining settlements?",
    options: ["La Oroya", "Cerro de Pasco", "Huancavelica", "Juliaca"],
    correctIndex: 1,
    explanation: "Cerro de Pasco grew around a massive open-pit silver, lead, and zinc mine (Raura and Planicie pit) in the high Andes.",
    status: "published"
  },
  {
    id: "sa-m-56",
    continent: "South America",
    difficulty: "Medium",
    question: "Near which Peruvian port town do the Marañón and Ucayali rivers unite to form the Amazon River proper?",
    options: ["Pucallpa", "Nauta", "Yurimaguas", "Puerto Maldonado"],
    correctIndex: 1,
    explanation: "The confluence of the Marañón and Ucayali occurs roughly 100 km southwest of Iquitos near the town of Nauta.",
    status: "published"
  },
  {
    id: "sa-m-57",
    continent: "South America",
    difficulty: "Medium",
    question: "Which Peruvian city in the Amazon Basin with over 470,000 residents is widely recognized as the largest city in the world unreachable by road?",
    options: ["Tarapoto", "Iquitos", "Pucallpa", "Cobija"],
    correctIndex: 1,
    explanation: "Iquitos is accessible only by boat along the Amazon River or via Coronel FAP Francisco Secada Vignetta International Airport.",
    status: "published"
  },
  {
    id: "sa-m-58",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the longest river located entirely within Peru, flowing 1,771 kilometers before joining the Marañón?",
    options: ["Huallaga River", "Ucayali River", "Urubamba River", "Madre de Dios River"],
    correctIndex: 1,
    explanation: "The Ucayali is formed by the junction of the Tambo and Urubamba rivers, forming the main stem of the Amazon in Peru.",
    status: "published"
  },
  {
    id: "sa-m-59",
    continent: "South America",
    difficulty: "Medium",
    question: "Which river flows through the Sacred Valley of the Incas past Ollantaytambo and curls around the base of the Machu Picchu promontory?",
    options: ["Apur\u00edmac River", "Urubamba River (Vilcanota)", "Mantaro River", "Paucartambo River"],
    correctIndex: 1,
    explanation: "The Urubamba flows through a dramatic canyon carved between snow-capped Andean peaks before descending into the Amazon basin.",
    status: "published"
  },
  {
    id: "sa-m-60",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the extensive pre-Columbian adobe citadel near Trujillo, Peru, that was the capital of the Chimú Kingdom and the largest mudbrick city on Earth?",
    options: ["Caral", "Chan Chan", "Cahuachi", "Pachacamac"],
    correctIndex: 1,
    explanation: "Chan Chan covered 20 square kilometers, housing roughly 30,000 people before being conquered by the Inca around 1470 CE.",
    status: "published"
  },
  {
    id: "sa-m-61",
    continent: "South America",
    difficulty: "Medium",
    question: "Which ancient archaeological complex in northern Peru yielded the unlooted tomb of the 'Lord of Sipán' in 1987, considered one of the greatest New World discoveries?",
    options: ["T\u00facume", "Huaca Rajada (Sip\u00e1n)", "Chav\u00edn de Hu\u00e1ntar", "Kuelap"],
    correctIndex: 1,
    explanation: "Huaca Rajada contained gold, silver, and copper funerary ornaments of a Moche warrior priest, excavated by Walter Alva.",
    status: "published"
  },
  {
    id: "sa-m-62",
    continent: "South America",
    difficulty: "Medium",
    question: "According to Inca creation mythology, which island in Lake Titicaca was the sacred birthplace of the Sun (Inti) and the Moon (Mama Killa)?",
    options: ["Taquile", "Isla del Sol (Island of the Sun)", "Amantan\u00ed", "Isla de la Luna"],
    correctIndex: 1,
    explanation: "Isla del Sol contains over 80 Inca ruins, including the Pilko Kaina palace and the Chinkana labyrinth in Bolivia.",
    status: "published"
  },
  {
    id: "sa-m-63",
    continent: "South America",
    difficulty: "Medium",
    question: "What indigenous ethnic group on Lake Titicaca lives on artificial floating islands constructed entirely out of buoyant totora reeds?",
    options: ["Quechua", "Uros (Uru)", "Aymara", "Mapuche"],
    correctIndex: 1,
    explanation: "The Uros people originally built the reed islands as a defensive retreat from expanding Inca and Colla civilizations.",
    status: "published"
  },
  {
    id: "sa-m-64",
    continent: "South America",
    difficulty: "Medium",
    question: "Which ancient ruined city near the southern shore of Lake Titicaca in Bolivia was the capital of a major pre-Inca empire from 500 to 1000 CE?",
    options: ["Wari", "Tiwanaku (Tiahuanaco)", "Pukara", "Kuelap"],
    correctIndex: 1,
    explanation: "Tiwanaku features megalithic stonework, the Akapana stepped pyramid, and the iconic Gate of the Sun (Puerta del Sol).",
    status: "published"
  },
  {
    id: "sa-m-65",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the highest active geyser field on Earth, located at 4,320 meters elevation in the Andes of northern Chile?",
    options: ["Geysir", "El Tatio", "Sol de Ma\u00f1ana", "Haukadalur"],
    correctIndex: 1,
    explanation: "El Tatio has over 80 active geysers, emitting dramatic steam plumes during sub-freezing pre-dawn hours.",
    status: "published"
  },
  {
    id: "sa-m-66",
    continent: "South America",
    difficulty: "Medium",
    question: "Which desert valley near San Pedro de Atacama in Chile is famed for wind-sculpted stone, dry salt caverns, and scenery resembling the moon?",
    options: ["Valle de la Muerte", "Valle de la Luna (Moon Valley)", "Quebrada de Humahuaca", "Valle del Elqui"],
    correctIndex: 1,
    explanation: "Valle de la Luna sits in the Cordillera de la Sal, exhibiting mineral crusts that resemble lunar topography.",
    status: "published"
  },
  {
    id: "sa-m-67",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the revolutionary astronomical observatory on the 5,000-meter Chajnantor Plateau in Chile's Atacama Desert, comprising 66 high-precision radio antennas?",
    options: ["VLT", "ALMA (Atacama Large Millimeter/submillimeter Array)", "Keck Observatory", "Arecibo"],
    correctIndex: 1,
    explanation: "ALMA is an international partnership that studies cold gas and dust where new stars and planetary systems are born.",
    status: "published"
  },
  {
    id: "sa-m-68",
    continent: "South America",
    difficulty: "Medium",
    question: "Why is the Atacama Desert of northern Chile chosen as the global capital for ground-based astronomical observatories?",
    options: ["It has frequent thunderstorms that clear the air", "It combines high altitude, hyper-arid atmosphere with minimal water vapor, and over 300 cloud-free nights yearly", "It sits exactly on the geographic equator", "It is completely surrounded by dense ocean fog"],
    correctIndex: 1,
    explanation: "The rain shadow between the Chilean Coastal Range and the Andes makes Atacama the optimal window for infrared and submillimeter observing.",
    status: "published"
  },
  {
    id: "sa-m-69",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the European Southern Observatory's flagship optical telescope facility located atop Cerro Paranal at 2,635 meters in Chile?",
    options: ["Extremely Large Telescope", "Very Large Telescope (VLT)", "Magellan Telescopes", "Gemini South"],
    correctIndex: 1,
    explanation: "The VLT consists of four 8.2-meter Unit Telescopes named Antu, Kueyen, Melipal, and Yepun in Mapuche.",
    status: "published"
  },
  {
    id: "sa-m-70",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the name of the massive table-top mountain (tepui) in Bolívar, Venezuela, from whose cliff Angel Falls plunges?",
    options: ["Mount Roraima", "Auy\u00e1n-tepui", "Cerro Autana", "Chimant\u00e1"],
    correctIndex: 1,
    explanation: "Auyán-tepui ('Devil's Mountain' in Pemón) covers 700 square kilometers, draining into the Churún River.",
    status: "published"
  },
  {
    id: "sa-m-71",
    continent: "South America",
    difficulty: "Medium",
    question: "What distinctive geological term is used in the Guiana Shield for isolated, flat-topped sandstone plateaus with vertical cliffs?",
    options: ["Mesa", "Tepui", "Butte", "Inselberg"],
    correctIndex: 1,
    explanation: "Tepui means 'house of the gods' in the indigenous Pemón language, famous for endemic plant and animal life atop isolated summits.",
    status: "published"
  },
  {
    id: "sa-m-72",
    continent: "South America",
    difficulty: "Medium",
    question: "Which prominent flat-topped tepui serves as the tripoint border where Venezuela, Brazil, and Guyana meet?",
    options: ["Auy\u00e1n-tepui", "Mount Roraima", "Kuken\u00e1n-tepui", "Sarisari\u00f1ama"],
    correctIndex: 1,
    explanation: "Mount Roraima rises 2,810 meters with sheer 400-meter cliffs, inspiring Sir Arthur Conan Doyle's 1912 novel 'The Lost World'.",
    status: "published"
  },
  {
    id: "sa-m-73",
    continent: "South America",
    difficulty: "Medium",
    question: "Which major river in Guyana flows 1,014 km northward through the Guiana Highlands to a 20-km-wide estuary on the Atlantic Ocean?",
    options: ["Demerara River", "Essequibo River", "Berbice River", "Corentyne River"],
    correctIndex: 1,
    explanation: "The Essequibo River drains over half of Guyana's territory, giving its name to the Guayana Esequiba region.",
    status: "published"
  },
  {
    id: "sa-m-74",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the massive single-drop waterfall in the Amazonian rainforest of central Guyana that plunges 226 meters on the Potaro River?",
    options: ["Angel Falls", "Kaieteur Falls", "Iguazu Falls", "Tequendama Falls"],
    correctIndex: 1,
    explanation: "Kaieteur Falls drops 226 meters in a single sheer drop (total 251 m), making it roughly four times higher than Niagara Falls.",
    status: "published"
  },
  {
    id: "sa-m-75",
    continent: "South America",
    difficulty: "Medium",
    question: "Which river forms the international boundary between Suriname and Guyana?",
    options: ["Maroni River", "Courantyne River (Corantijn)", "Suriname River", "Commewijne River"],
    correctIndex: 1,
    explanation: "The Courantyne River flows north into the Atlantic, with the border historically defined along the western bank.",
    status: "published"
  },
  {
    id: "sa-m-76",
    continent: "South America",
    difficulty: "Medium",
    question: "Which river marks the international border between Suriname and the French overseas territory of French Guiana?",
    options: ["Courantyne River", "Maroni River (Marowijne)", "Oyapock River", "Mana River"],
    correctIndex: 1,
    explanation: "The Maroni River flows northward past Saint-Laurent-du-Maroni and Albina into the Atlantic Ocean.",
    status: "published"
  },
  {
    id: "sa-m-77",
    continent: "South America",
    difficulty: "Medium",
    question: "Which river forms the eastern border of French Guiana with the Brazilian state of Amapá?",
    options: ["Maroni River", "Oyapock River (Oiapoque)", "Approuague River", "Araguari River"],
    correctIndex: 1,
    explanation: "The Oyapock River flows 403 km, spanned by the Oyapock River Bridge connecting Saint-Georges to Oiapoque.",
    status: "published"
  },
  {
    id: "sa-m-78",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the primary space launch facility operated by the French National Centre for Space Studies (CNES) and ESA near Kourou, French Guiana?",
    options: ["Cape Canaveral", "Guiana Space Centre (Centre Spatial Guyanais)", "Baikonur", "Tanegashima"],
    correctIndex: 1,
    explanation: "Operational since 1968, the Guiana Space Centre launches Ariane and Vega rockets from 5° north of the equator.",
    status: "published"
  },
  {
    id: "sa-m-79",
    continent: "South America",
    difficulty: "Medium",
    question: "Why is the Guiana Space Centre at Kourou exceptionally advantageous for launching commercial geostationary satellites?",
    options: ["It has cold polar updrafts", "Earth's rotational velocity near the equator provides maximum kinetic energy boost for eastward launches", "It sits atop a high mountain", "It has zero cloud cover year-round"],
    correctIndex: 1,
    explanation: "Launches near the equator gain approximately 460 m/s from Earth's rotation, reducing the fuel needed to reach geostationary orbit.",
    status: "published"
  },
  {
    id: "sa-m-80",
    continent: "South America",
    difficulty: "Medium",
    question: "Which island in the Salvation Islands (Îles du Salut) off French Guiana was the infamous penal colony where Alfred Dreyfus was imprisoned?",
    options: ["\u00cele Royale", "Devil's Island (\u00cele du Diable)", "\u00cele Saint-Joseph", "Fernando de Noronha"],
    correctIndex: 1,
    explanation: "Devil's Island was a notorious offshore prison characterized by turbulent, shark-infested currents that made escape virtually impossible.",
    status: "published"
  },
  {
    id: "sa-m-81",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the large endorheic lake in northern Venezuela situated in the Aragua Valley between the Coastal Cordillera and Interior Range?",
    options: ["Lake Maracaibo", "Lake Valencia (Lake Tacarigua)", "Lake Guri", "Lake Tota"],
    correctIndex: 1,
    explanation: "Lake Valencia covers roughly 350 square kilometers, the second-largest natural lake in Venezuela after Maracaibo.",
    status: "published"
  },
  {
    id: "sa-m-82",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the immense petroleum-bearing formation in the eastern Orinoco River basin of Venezuela, holding one of the largest deposits of extra-heavy crude on Earth?",
    options: ["Vaca Muerta", "Orinoco Belt (Faja Petrol\u00edfera del Orinoco)", "Maracaibo Basin", "Pre-salt Santos"],
    correctIndex: 1,
    explanation: "The Orinoco Belt covers roughly 55,000 square kilometers, containing certified recoverable reserves of over 300 billion barrels.",
    status: "published"
  },
  {
    id: "sa-m-83",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the name of the narrow strait separating Venezuela's Paria Peninsula from the island of Trinidad, connecting the Gulf of Paria to the Caribbean?",
    options: ["Serpent's Mouth", "Dragon's Mouths (Bocas del Drag\u00f3n)", "Tablazo Strait", "Mona Passage"],
    correctIndex: 1,
    explanation: "The Dragon's Mouths consists of four channels separating rocky islets between northwestern Trinidad and Venezuela.",
    status: "published"
  },
  {
    id: "sa-m-84",
    continent: "South America",
    difficulty: "Medium",
    question: "Which South American nation has two official capital cities: Sucre as the constitutional seat and La Paz as the administrative seat?",
    options: ["Paraguay", "Bolivia", "Ecuador", "Colombia"],
    correctIndex: 1,
    explanation: "Sucre remains the historic constitutional capital where the supreme court sits, while the president and national congress meet in La Paz.",
    status: "published"
  },
  {
    id: "sa-m-85",
    continent: "South America",
    difficulty: "Medium",
    question: "Which South American nation has the highest proportion of indigenous inhabitants, with Quechua, Aymara, and Guaraní designated as official languages?",
    options: ["Chile", "Bolivia", "Brazil", "Venezuela"],
    correctIndex: 1,
    explanation: "Over 40% of Bolivia's population identifies as indigenous, recognized under the 2009 Plurinational State constitution.",
    status: "published"
  },
  {
    id: "sa-m-86",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the sole official language of Suriname, reflecting its colonial history under the Netherlands until independence in 1975?",
    options: ["English", "Dutch", "French", "Portuguese"],
    correctIndex: 1,
    explanation: "Suriname is the only independent country in South America where Dutch is the official language spoken in government and schools.",
    status: "published"
  },
  {
    id: "sa-m-87",
    continent: "South America",
    difficulty: "Medium",
    question: "Which sovereign nation is the only English-speaking member of the South American continent?",
    options: ["Suriname", "Guyana", "Belize", "Trinidad and Tobago"],
    correctIndex: 1,
    explanation: "Guyana was formerly British Guiana, adopting English as its official language upon independence in 1966.",
    status: "published"
  },
  {
    id: "sa-m-88",
    continent: "South America",
    difficulty: "Medium",
    question: "Which inland South American nation is officially bilingual in Spanish and an indigenous language, with over 85% of citizens speaking Guaraní?",
    options: ["Bolivia", "Paraguay", "Uruguay", "Peru"],
    correctIndex: 1,
    explanation: "Paraguay's 1992 constitution elevated indigenous Guaraní to co-equal status with Spanish across national education and society.",
    status: "published"
  },
  {
    id: "sa-m-89",
    continent: "South America",
    difficulty: "Medium",
    question: "Which river forms the southwestern boundary between Paraguay and Argentina, flowing from the Andes across the Gran Chaco to the Paraguay River?",
    options: ["Bermejo River", "Pilcomayo River", "Paran\u00e1 River", "Apa River"],
    correctIndex: 1,
    explanation: "The Pilcomayo River flows 1,100 km, demarcating the border between Argentina's Formosa Province and the Paraguayan Chaco.",
    status: "published"
  },
  {
    id: "sa-m-90",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the famous international tri-border area where the borders of Argentina, Brazil, and Paraguay meet at the Iguazu and Paraná rivers?",
    options: ["Punto Fijo", "Triple Frontier (Tres Fronteras)", "Tres Bocas", "Tr\u00edplice Divisa"],
    correctIndex: 1,
    explanation: "The Triple Frontier connects Puerto Iguazú (Argentina), Foz do Iguaçu (Brazil), and Ciudad del Este (Paraguay).",
    status: "published"
  },
  {
    id: "sa-m-91",
    continent: "South America",
    difficulty: "Medium",
    question: "Which city in eastern Bolivia's tropical plains has surpassed La Paz to become the nation's most populous metropolis and commercial engine?",
    options: ["Cochabamba", "Santa Cruz de la Sierra", "Tarija", "Trinidad"],
    correctIndex: 1,
    explanation: "Santa Cruz de la Sierra has grown rapidly into an agribusiness hub producing soybeans, sugar, and natural gas.",
    status: "published"
  },
  {
    id: "sa-m-92",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the name of the perilous road descending 3,500 meters from La Paz to Coroico, famously known as the 'Death Road'?",
    options: ["Carretera Austral", "North Yungas Road (Camino de las Yungas)", "Ruta 40", "Pastaza Highway"],
    correctIndex: 1,
    explanation: "The North Yungas Road drops precipitously from Andean alpine passes into tropical cloud forests along single-lane unpaved ledges.",
    status: "published"
  },
  {
    id: "sa-m-93",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the ecological transition corridor of moist subtropical cloud forests along the eastern slopes of the Andes in Bolivia and Peru called?",
    options: ["The Pampas", "The Yungas", "The Altiplano", "The Cerrado"],
    correctIndex: 1,
    explanation: "The Yungas traps humid Amazonian trade winds against the Andes, fostering extraordinary biodiversity and coffee/coca cultivation.",
    status: "published"
  },
  {
    id: "sa-m-94",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the unique high-altitude alpine tundra ecosystem found in the northern Andes between the tree line and permanent snowline (3,000–4,500 m)?",
    options: ["Puna", "P\u00e1ramo", "Pampa", "Sert\u00e3o"],
    correctIndex: 1,
    explanation: "Páramo ecosystems are found in Colombia, Ecuador, and Venezuela, acting as giant natural water sponges feeding major rivers.",
    status: "published"
  },
  {
    id: "sa-m-95",
    continent: "South America",
    difficulty: "Medium",
    question: "Which distinctive giant rosette plant with thick fuzzy leaves is the keystone endemic genus of the northern Andean Páramo?",
    options: ["Puya raimondii", "Frailej\u00f3n (Espeletia)", "Quinoa", "Araucaria"],
    correctIndex: 1,
    explanation: "Frailejones capture moisture from passing clouds with densely hair-covered leaves, slowly releasing water into mountain watersheds.",
    status: "published"
  },
  {
    id: "sa-m-96",
    continent: "South America",
    difficulty: "Medium",
    question: "Which giant bromeliad native to the high Andes of Peru and Bolivia grows up to 12 meters tall and flowers once in its 80-to-100-year lifespan?",
    options: ["Espeletia", "Puya raimondii (Queen of the Andes)", "Tillandsia", "Polylepis"],
    correctIndex: 1,
    explanation: "Puya raimondii produces a massive spike bearing up to 20,000 blossoms before dying, the largest bromeliad species in the world.",
    status: "published"
  },
  {
    id: "sa-m-97",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the high-altitude, cold, semi-arid plateau ecosystem of the central Andes in southern Peru, Bolivia, and northern Argentina called?",
    options: ["P\u00e1ramo", "Puna grassland", "Llanos", "Caatinga"],
    correctIndex: 1,
    explanation: "The Puna features coarse bunchgrasses (ichu) and cushion plants, adapted to intense solar radiation and sub-freezing night temperatures.",
    status: "published"
  },
  {
    id: "sa-m-98",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the hardy Andean tussock grass of the genus Stipa that covers vast areas of the Altiplano and Puna, vital fodder for llamas and alpacas?",
    options: ["Totora", "Ichu grass (Jarava ichu)", "Frailej\u00f3n", "Quebracho"],
    correctIndex: 1,
    explanation: "Ichu grass thrives above 3,500 meters in rocky soils, traditionally woven by the Inca to construct suspension rope bridges like Q'eswachaka.",
    status: "published"
  },
  {
    id: "sa-m-99",
    continent: "South America",
    difficulty: "Medium",
    question: "What is the only species of bear native to South America, inhabiting cloud forests along the slopes of the Andes?",
    options: ["Grizzly bear", "Spectacled bear (Andean bear)", "Sloth bear", "Sun bear"],
    correctIndex: 1,
    explanation: "The spectacled bear (Tremarctos ornatus) is identifiable by creamy markings around its eyes, the inspiration for Paddington Bear.",
    status: "published"
  },
  {
    id: "sa-m-100",
    continent: "South America",
    difficulty: "Medium",
    question: "Which South American rodent is the largest living rodent species on Earth, inhabiting wetlands and riverbanks across South America?",
    options: ["Nutria", "Capybara", "Paca", "Agouti"],
    correctIndex: 1,
    explanation: "Capybaras (Hydrochoerus hydrochaeris) are semi-aquatic herbivores that can weigh over 65 kilograms, native to savannas and wetlands.",
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
  {
    id: "sa-h-3",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the famous natural river canal that connects the Orinoco river basin with the Rio Negro and Amazon basin, representing the world's largest natural river bifurcation?",
    options: ["Casiquiare Canal (Brazo Casiquiare)", "Carata Channel", "Trombetas Fork", "Japur\u00e1 Bifurcation"],
    correctIndex: 0,
    explanation: "The Casiquiare splits from the upper Orinoco in Venezuela and flows 326 km into the Rio Negro, discharging 12-20% of the Orinoco's upper flow directly into the Amazon basin.",
    status: "published"
  },
  {
    id: "sa-h-4",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the exact height of the uninterrupted single free-fall plunge of Angel Falls (Salto Ángel) in Venezuela, within its total 979-meter drop?",
    options: ["650 meters", "807 meters", "912 meters", "740 meters"],
    correctIndex: 1,
    explanation: "Angel Falls plunges 979 meters total from Auyán-tepui, with its primary uninterrupted vertical plunge measuring 807 meters.",
    status: "published"
  },
  {
    id: "sa-h-5",
    continent: "South America",
    difficulty: "Hard",
    question: "What are the two giant collapse sinkholes atop the quartzite plateau of Sarisariñama-tepui in Bolívar, Venezuela, hosting isolated forest ecosystems at their bottoms?",
    options: ["Sima Auy\u00e1n and Sima Kuken\u00e1n", "Sima Humboldt and Sima Martel", "Sima Roraima and Sima Pacaraima", "Sima Bol\u00edvar and Sima Col\u00f3n"],
    correctIndex: 1,
    explanation: "Sima Humboldt is 352 meters wide and 314 meters deep, formed by chemical sandstone dissolution (speleogenesis) rather than limestone karst.",
    status: "published"
  },
  {
    id: "sa-h-6",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the geological age of the pink and grey sandstone beds of the Roraima Supergroup that form the tepuis of the Guiana Shield?",
    options: ["Paleoproterozoic (roughly 1.6 to 1.8 billion years)", "Cretaceous (roughly 100 million years)", "Devonian (roughly 380 million years)", "Cambrian (roughly 500 million years)"],
    correctIndex: 0,
    explanation: "The Roraima formation consists of ancient Precambrian quartzites deposited in river and coastal environments between 1.6 and 1.8 billion years ago.",
    status: "published"
  },
  {
    id: "sa-h-7",
    continent: "South America",
    difficulty: "Hard",
    question: "Which river in the Serranía de la Macarena of Colombia is known as the 'River of Five Colors' due to endemic Macarenia clavigera aquatic plants blooming on the riverbed?",
    options: ["R\u00edo Guaviare", "Ca\u00f1o Cristales", "R\u00edo In\u00edrida", "R\u00edo Vaup\u00e9s"],
    correctIndex: 1,
    explanation: "From July through November, Macarenia clavigera plants turn brilliant shades of red, magenta, yellow, green, and blue along sandstone riverbeds.",
    status: "published"
  },
  {
    id: "sa-h-8",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the deepest point in the South Atlantic Ocean, located at 8,266 meters below sea level in the subduction zone east of South Georgia?",
    options: ["Challenger Deep", "Meteor Deep (South Sandwich Trench)", "Richards Deep", "Romanche Trench"],
    correctIndex: 1,
    explanation: "Meteor Deep sits in the South Sandwich Trench where the South American Plate subducts beneath the South Sandwich microplate.",
    status: "published"
  },
  {
    id: "sa-h-9",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the deepest point in the Peru-Chile Trench (Atacama Trench), descending to 8,065 meters below sea level off the coast of northern Chile?",
    options: ["Meteor Deep", "Richards Deep", "Milwaukee Deep", "Horne Deep"],
    correctIndex: 1,
    explanation: "Richards Deep was sounded in 1876 by the USS Essex, located approximately 160 km off Antofagasta in the subduction zone.",
    status: "published"
  },
  {
    id: "sa-h-10",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the tectonic cause of the 1960 Valdivia earthquake in southern Chile, the most powerful earthquake ever recorded by modern seismographs (Mw 9.5)?",
    options: ["Transform strike-slip along the San Andreas fault", "Megathrust subduction of the Nazca Plate beneath the South American Plate", "Intraplate rifting in the Chaco-Pampa basin", "Volcanic caldera collapse in the Patagonian Andes"],
    correctIndex: 1,
    explanation: "The Nazca Plate subducts eastward beneath South America at 7-8 cm per year, rupturing a 1,000-km megathrust fault zone on May 22, 1960.",
    status: "published"
  },
  {
    id: "sa-h-11",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the local meteorological name for the warm, dry foehn-type wind that descends the eastern slopes of the Argentine Andes into the Cuyo region?",
    options: ["Pampero", "Zonda", "Sudestada", "Williwaw"],
    correctIndex: 1,
    explanation: "The Zonda is caused by Pacific maritime air dropping moisture on Chilean slopes, heating adiabatically as it plunges into San Juan and Mendoza.",
    status: "published"
  },
  {
    id: "sa-h-12",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the meteorological name for the strong polar air mass and gale that sweeps northward from Antarctica across the flat Argentine Pampas?",
    options: ["Zonda", "Pampero", "Sirocco", "Bora"],
    correctIndex: 1,
    explanation: "The Pampero brings sharp temperature drops, squalls, and severe thunderstorms behind active cold fronts across the Pampas and Uruguay.",
    status: "published"
  },
  {
    id: "sa-h-13",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the weather phenomenon characterized by persistent southeasterly gale-force winds over the Río de la Plata estuary, causing coastal storm surges in Buenos Aires?",
    options: ["Zonda", "Sudestada", "Pampero", "Levanter"],
    correctIndex: 1,
    explanation: "Sudestadas occur in winter and spring, driving maritime waters up the Río de la Plata and preventing drainage from the Paraná and Uruguay rivers.",
    status: "published"
  },
  {
    id: "sa-h-14",
    continent: "South America",
    difficulty: "Hard",
    question: "In Amazonian limnology, how are the waters of the Amazon basin traditionally classified based on optical properties and chemical composition?",
    options: ["Glacial, lacustrine, and alluvial", "White-water (v\u00e1rzea), black-water (igap\u00f3), and clear-water", "Saline, hypersaline, and brackish", "Oligotrophic, mesotrophic, and dystrophic"],
    correctIndex: 1,
    explanation: "White-waters (e.g. Solimões) carry Andean mineral silts; black-waters (e.g. Rio Negro) carry humic acids; clear-waters (e.g. Tapajós) drain eroded shield bedrock.",
    status: "published"
  },
  {
    id: "sa-h-15",
    continent: "South America",
    difficulty: "Hard",
    question: "What ecological term differentiates nutrient-rich floodplains flooded by sediment-heavy white-water rivers from nutrient-poor floodplains inundated by black-water rivers in the Amazon?",
    options: ["Chaco vs Llanos", "V\u00e1rzea vs Igap\u00f3", "Cerrado vs Caatinga", "Sert\u00e3o vs Pampa"],
    correctIndex: 1,
    explanation: "Várzea soils are replenished annually with mineral silt supporting agriculture, whereas igapó flooded forests are highly acidic and nutrient-poor.",
    status: "published"
  },
  {
    id: "sa-h-16",
    continent: "South America",
    difficulty: "Hard",
    question: "Which major clearwater tributary of the lower Amazon in Pará is famed for its transparent turquoise water and white sandy beaches at Alter do Chão?",
    options: ["Rio Negro", "Tapaj\u00f3s River", "Madeira River", "Purus River"],
    correctIndex: 1,
    explanation: "Alter do Chão on the Tapajós River has been dubbed the 'Caribbean of the Amazon' due to pristine white beaches exposed in low-water season.",
    status: "published"
  },
  {
    id: "sa-h-17",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the 100-kilometer stretch of the Xingu River in Pará, Brazil, that forms a horseshoe curve bypassed by the Belo Monte Hydroelectric Dam diversion canal?",
    options: ["Pororoca Loop", "Volta Grande do Xingu (Big Bend)", "Foz do Breves", "Canal de Macap\u00e1"],
    correctIndex: 1,
    explanation: "The Volta Grande do Xingu is home to endemic fish species like the zebra pleco and indigenous Juruna and Arara territories.",
    status: "published"
  },
  {
    id: "sa-h-18",
    continent: "South America",
    difficulty: "Hard",
    question: "Which high-altitude lake at 4,082 meters in central Peru is the second-largest lake in Peru and the sole habitat of the critically endangered, flightless Junín grebe?",
    options: ["Lake Titicaca", "Lake Jun\u00edn (Lake Chinchaycocha)", "Lake Tota", "Lake Lauricocha"],
    correctIndex: 1,
    explanation: "Lake Junín covers roughly 530 square kilometers in the central Andes, feeding the Mantaro River via the Upamayo dam.",
    status: "published"
  },
  {
    id: "sa-h-19",
    continent: "South America",
    difficulty: "Hard",
    question: "What gives Laguna Colorada, a shallow salt lake in Eduardo Avaroa Reserve on the Bolivian Altiplano, its distinctive bright red hue?",
    options: ["Dissolved iron oxide minerals", "Pigmentation from microscopic halophilic algae (Dunaliella salina) and sediments", "Sulfur precipitates from underwater fumaroles", "Decaying totora reeds"],
    correctIndex: 1,
    explanation: "Dunaliella salina and red sediment pigments impart the crimson color, providing rich food for thousands of breeding James's flamingos.",
    status: "published"
  },
  {
    id: "sa-h-20",
    continent: "South America",
    difficulty: "Hard",
    question: "What causes the striking emerald-green color of Laguna Verde, a high-altitude salt lake situated at the base of Licancabur volcano in southwestern Bolivia?",
    options: ["Suspended colloidal copper, arsenic, and magnesium mineral compounds", "Dense chlorophyte phytoplankton blooms", "Dissolved organic tannins", "Reflection of surrounding malachite cliffs"],
    correctIndex: 0,
    explanation: "Wind stirring mineral suspensions rich in copper carbonate, lead, and arsenic causes Laguna Verde's color to shift from turquoise to vivid emerald.",
    status: "published"
  },
  {
    id: "sa-h-21",
    continent: "South America",
    difficulty: "Hard",
    question: "What makes the summit crater lake of Licancabur volcano (5,916 m) on the Chile-Bolivia border an important research analogue for NASA astrobiologists?",
    options: ["It has subglacial vents identical to Europa", "Extreme solar ultraviolet radiation, low atmospheric pressure, and sub-zero temperatures mirror conditions on ancient Mars", "It contains liquid hydrocarbons like Titan", "It is completely sterile with zero microbial life"],
    correctIndex: 1,
    explanation: "High-altitude scuba diving expeditions led by Nathalie Cabrol showed extremophile cyanobacteria and copepods surviving in extreme UV conditions.",
    status: "published"
  },
  {
    id: "sa-h-22",
    continent: "South America",
    difficulty: "Hard",
    question: "Which active stratovolcano on the Chile-Argentina border is the second-highest active volcano on Earth (6,739 m) and the site of the world's highest archaeological excavations?",
    options: ["Ojos del Salado", "Llullaillaco", "Monte Pissis", "Coropuna"],
    correctIndex: 1,
    explanation: "In 1999, Johan Reinhard discovered three intact 500-year-old Inca child mummies near Llullaillaco's summit, frozen in stone shrines.",
    status: "published"
  },
  {
    id: "sa-h-23",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the third-highest mountain peak in the Western Hemisphere, rising to 6,793 meters in the dry Argentine Puna of La Rioja and Catamarca?",
    options: ["Huascar\u00e1n", "Monte Pissis", "Bonete Chico", "Tres Cruces"],
    correctIndex: 1,
    explanation: "Monte Pissis is an extinct andesitic-dacitic volcanic complex surrounded by extensive glaciers and the Salar de Pipanaco.",
    status: "published"
  },
  {
    id: "sa-h-24",
    continent: "South America",
    difficulty: "Hard",
    question: "What geographic term describes the high-altitude hyper-arid salt plateau above 3,500 meters spanning northern Chile and northwestern Argentina?",
    options: ["Patagonian Steppe", "Puna de Atacama", "Gran Chaco", "Sert\u00e3o"],
    correctIndex: 1,
    explanation: "The Puna de Atacama is a cold volcanic desert characterized by vast endorheic salars including Antofalla, Arizaro, and Atacama.",
    status: "published"
  },
  {
    id: "sa-h-25",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the 'Lithium Triangle' of South America that contains over half of the world's identified lithium brine resources?",
    options: ["Brazil, Peru, and Colombia", "The salt flats of Bolivia (Uyuni), Chile (Atacama), and Argentina (Hombre Muerto/Olaroz)", "Ecuador, Venezuela, and Guyana", "Paraguay, Uruguay, and Brazil"],
    correctIndex: 1,
    explanation: "Economic lithium extraction from subterranean continental brines is heavily concentrated in the salars of this Andean triangle.",
    status: "published"
  },
  {
    id: "sa-h-26",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the famous geological formation near Humahuaca in Jujuy, Argentina, renowned for its 14 vibrant triangular colored bands on a limestone ridge?",
    options: ["Cerro de los Siete Colores", "Serran\u00eda de Hornocal", "Talampaya", "Quebrada de las Conchas"],
    correctIndex: 1,
    explanation: "Serranía de Hornocal displays inverted V-shaped chevron folds of the Yacoraite limestone formation dating back to the Cretaceous.",
    status: "published"
  },
  {
    id: "sa-h-27",
    continent: "South America",
    difficulty: "Hard",
    question: "Which two adjacent provincial/national parks in San Juan and La Rioja, Argentina, preserve the world's most complete continental fossil record of the Triassic Period?",
    options: ["Los Glaciares and Nahuel Huapi", "Ischigualasto (Valley of the Moon) and Talampaya National Park", "Torres del Paine and Pumal\u00edn", "Iguaz\u00fa and El Rey"],
    correctIndex: 1,
    explanation: "Ischigualasto and Talampaya yielded crucial early dinosaur transitions including Herrerasaurus and Eoraptor, designated a UNESCO World Heritage site.",
    status: "published"
  },
  {
    id: "sa-h-28",
    continent: "South America",
    difficulty: "Hard",
    question: "Why is the Patagonian Desert an arid cold desert despite being situated on a relatively narrow continental peninsula flanked by two oceans?",
    options: ["Extreme distance from any ocean", "The rain shadow of the southern Andes intercepts westerly Pacific precipitation, while the cold offshore Malvinas Current prevents Atlantic humidity", "Permanent atmospheric high pressure over the equator", "Persistent burning by ancient indigenous populations"],
    correctIndex: 1,
    explanation: "Moist westerlies dump heavy rain on the Chilean Andes; descending air on the Argentine eastern lee warms and dries out across the Patagonian steppe.",
    status: "published"
  },
  {
    id: "sa-h-29",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the name of the uninhabited mountainous Argentine island separated from Tierra del Fuego by the treacherous Le Maire Strait, inspiration for Jules Verne's 'The Lighthouse at the End of the World'?",
    options: ["Navarino Island", "Isla de los Estados (Staten Island)", "Hoste Island", "Picton Island"],
    correctIndex: 1,
    explanation: "Isla de los Estados is an ecological reserve featuring jagged peaks, subantarctic Magellanic forests, and the restored 1884 San Juan de Salvamento lighthouse.",
    status: "published"
  },
  {
    id: "sa-h-30",
    continent: "South America",
    difficulty: "Hard",
    question: "What small rocky archipelago situated 105 kilometers southwest of Cape Horn represents the southernmost sovereign territory and landmass of the South American continental shelf?",
    options: ["South Shetland Islands", "Diego Ram\u00edrez Islands", "Falkland Islands", "Hermite Islands"],
    correctIndex: 1,
    explanation: "The Diego Ramírez Islands sit at 56°31' S in the Drake Passage, an important nesting sanctuary for black-browed and grey-headed albatrosses.",
    status: "published"
  },
  {
    id: "sa-h-31",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the unique hydrological feature preserved in the Águas Emendadas Ecological Station in the Federal District of Brazil?",
    options: ["A boiling thermal river that runs for 60 km", "A single swampy spring where water bifurcates into two opposing basins: the Paran\u00e1 basin to the south and Tocantins to the north", "An underground waterfall that flows into the ocean", "A freshwater lake that completely freezes solid in summer"],
    correctIndex: 1,
    explanation: "Águas Emendadas ('Mended Waters') marks the continental watershed junction between the Tocantins-Araguaia and Plata river basins.",
    status: "published"
  },
  {
    id: "sa-h-32",
    continent: "South America",
    difficulty: "Hard",
    question: "What was the first national park established in Brazil, created in 1937 in the Serra da Mantiqueira to protect Pico das Agulhas Negras?",
    options: ["Tijuca National Park", "Itatiaia National Park", "Serra dos \u00d3rg\u00e3os", "Iguaz\u00fa National Park"],
    correctIndex: 1,
    explanation: "Itatiaia National Park encompasses 300 square kilometers across Rio de Janeiro and Minas Gerais, protecting high-altitude fields (Campos de Altitude).",
    status: "published"
  },
  {
    id: "sa-h-33",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the geological classification of Guanabara Bay in Rio de Janeiro, formed by the marine inundation of a drowned river valley?",
    options: ["Fjord", "Ria (drowned river valley)", "Caldera", "Barrier lagoon"],
    correctIndex: 1,
    explanation: "Guanabara Bay was formed during the Holocene marine transgression when rising sea levels flooded the crystalline lowlands of the Guanabara graben.",
    status: "published"
  },
  {
    id: "sa-h-34",
    continent: "South America",
    difficulty: "Hard",
    question: "What geological layer in offshore Brazil holds massive deep-water oil deposits buried beneath 2,000 meters of salt in the Santos and Campos basins?",
    options: ["Post-salt sandstone", "Pre-salt layer (Camada Pr\u00e9-sal)", "Permian shale", "Cretaceous tar sands"],
    correctIndex: 1,
    explanation: "The Pre-salt formations were discovered in 2006, located under 2,000 m of water and up to 5,000 m of sedimentary rocks and evaporite salt domes.",
    status: "published"
  },
  {
    id: "sa-h-35",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the northernmost point of Brazil, debunking the popular expression 'from Oiapoque to Chuí'?",
    options: ["Oiapoque River", "Mount Cabura\u00ed (Nascente do Rio Ail\u00e3)", "Pico da Neblina", "Cabo Orange"],
    correctIndex: 1,
    explanation: "Mount Caburaí in Roraima (05°16' N) is 84 km farther north than the mouth of the Oiapoque River in Amapá.",
    status: "published"
  },
  {
    id: "sa-h-36",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the southernmost point of Brazil, situated on the border with Uruguay?",
    options: ["Porto Alegre", "Arroio Chu\u00ed", "Cabo Polonio", "Chu\u00ed Lighthouse"],
    correctIndex: 1,
    explanation: "Arroio Chuí (33°45' S) in Rio Grande do Sul is a small stream marking the southernmost extreme of Brazilian territory.",
    status: "published"
  },
  {
    id: "sa-h-37",
    continent: "South America",
    difficulty: "Hard",
    question: "Which high Andean peak in Arequipa, Peru, was identified by National Geographic expeditions in 1996 and 2000 as the most distant headwater source of the Amazon River?",
    options: ["Yerupaj\u00e1", "Nevado Mismi (Carhuasanta / Apacheta stream)", "Nevado del Huila", "Coropuna"],
    correctIndex: 1,
    explanation: "Meltwater from Nevado Mismi flows via Quebrada Carhuasanta into the Lloqueta, Apurímac, Ucayali, and ultimately the Amazon River.",
    status: "published"
  },
  {
    id: "sa-h-38",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the largest national park in South America and the world's largest protected tropical rainforest park, covering 38,800 square kilometers across Amapá and Pará, Brazil?",
    options: ["Ja\u00fa National Park", "Tumucumaque Mountains National Park (Parque Nacional Montanhas do Tumucumaque)", "Chiribiquete", "Madidi"],
    correctIndex: 1,
    explanation: "Created in 2002, Tumucumaque is larger than Switzerland and safeguards untouched Amazonian Guiana Shield biodiversity.",
    status: "published"
  },
  {
    id: "sa-h-39",
    continent: "South America",
    difficulty: "Hard",
    question: "Which enormous national park in Colombia's Amazon region is a UNESCO World Heritage site known for its dramatic table-top tepuis and over 75,000 ancient rock art paintings?",
    options: ["Tayrona", "Chiribiquete National Park (Serran\u00eda de Chiribiquete)", "Amacayacu", "Purac\u00e9"],
    correctIndex: 1,
    explanation: "Chiribiquete covers 43,000 square kilometers, protecting isolated sandstone tepui ecosystems and centuries of sacred indigenous rock art.",
    status: "published"
  },
  {
    id: "sa-h-40",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the world's largest freshwater river archipelago, consisting of over 1,400 islands spread across 180 km on the middle Rio Negro in Amazonas, Brazil?",
    options: ["Anavilhanas", "Mariu\u00e1 Archipelago", "Bananal", "Maraj\u00f3"],
    correctIndex: 1,
    explanation: "The Mariuá Archipelago in Barcelos, Brazil, contains more than 1,400 islands, surpassing the neighboring Anavilhanas Archipelago (400 islands).",
    status: "published"
  },
  {
    id: "sa-h-41",
    continent: "South America",
    difficulty: "Hard",
    question: "What famous inter-Andean geographic corridor in Ecuador, flanked by twin rows of active stratovolcanoes, was named by explorer Alexander von Humboldt in 1802?",
    options: ["Ring of Fire", "Avenue of the Volcanoes (Avenida de los Volcanes)", "Corridor of Canyons", "Andean Fault Trench"],
    correctIndex: 1,
    explanation: "The Avenue of the Volcanoes extends 325 km south of Quito between the Cordillera Occidental and Real, featuring Pichincha, Cotopaxi, and Tungurahua.",
    status: "published"
  },
  {
    id: "sa-h-42",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the emerald-green volcanic caldera lake in the western Ecuadorian Andes whose 3-km-wide water body accumulated in a collapsed dacitic crater roughly 800 years ago?",
    options: ["Lake Cuicocha", "Quilotoa", "Lake Tota", "Laguna de Guatavita"],
    correctIndex: 1,
    explanation: "Quilotoa is 250 meters deep, its greenish hue resulting from dissolved sulfur and minerals emitted by sublacustrine vents.",
    status: "published"
  },
  {
    id: "sa-h-43",
    continent: "South America",
    difficulty: "Hard",
    question: "Which isolated oceanic rock and marine sanctuary 500 kilometers west of Buenaventura, Colombia, is world-renowned for aggregations of hundreds of hammerhead sharks?",
    options: ["Gorgona Island", "Malpelo Island", "Cocos Island", "San Andr\u00e9s"],
    correctIndex: 1,
    explanation: "Malpelo is a barren, uninhabited volcanic peak rising from 4,000 meters ocean depth, designated a UNESCO World Heritage marine sanctuary.",
    status: "published"
  },
  {
    id: "sa-h-44",
    continent: "South America",
    difficulty: "Hard",
    question: "Which circular sacred mountain lake in Cundinamarca, Colombia, was the ritual site where the Muisca ruler was coated in gold dust, originating the legend of El Dorado?",
    options: ["Lake Tota", "Lake Guatavita", "Lake Iguaque", "Lake Suesca"],
    correctIndex: 1,
    explanation: "During the coronation ritual, the Muisca Zipa dove from a reed raft into Lake Guatavita, offering golden trinkets and emeralds to the water goddess.",
    status: "published"
  },
  {
    id: "sa-h-45",
    continent: "South America",
    difficulty: "Hard",
    question: "What famous Pre-Columbian gold votive artifact displayed in Bogotá's Museo del Oro depicts the Muisca El Dorado ritual raft?",
    options: ["Poporo Quimbaya", "Muisca Raft (Balsa Muisca)", "Golden Llama of Cuzco", "Mask of Calima"],
    correctIndex: 1,
    explanation: "Cast using the lost-wax technique between 600 and 1600 CE from tumbaga alloy, the raft was discovered in a ceramic vessel in Pasca, Colombia, in 1969.",
    status: "published"
  },
  {
    id: "sa-h-46",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the monumental Roman Catholic cathedral constructed 200 meters underground inside the halite tunnels of an ancient salt mine in Cundinamarca, Colombia?",
    options: ["Las Lajas Sanctuary", "Salt Cathedral of Zipaquir\u00e1 (Catedral de Sal)", "Cathedral of Salta", "Church of San Francisco"],
    correctIndex: 1,
    explanation: "The Salt Cathedral of Zipaquirá features fourteen Stations of the Cross carved directly out of solid rock salt deposits.",
    status: "published"
  },
  {
    id: "sa-h-47",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the arid badlands region in Huila, Colombia, situated in the rain shadow between the Eastern and Central Cordilleras, renowned for rich fossil deposits and stargazing?",
    options: ["Choc\u00f3", "Tatacoa Desert", "Guajira Desert", "Cabo de la Vela"],
    correctIndex: 1,
    explanation: "The Tatacoa covers 330 square kilometers, split into reddish weathered canyons (Cuzco) and grey badlands (Los Hoyos).",
    status: "published"
  },
  {
    id: "sa-h-48",
    continent: "South America",
    difficulty: "Hard",
    question: "Which UNESCO World Heritage site in southern Huila, Colombia, contains the largest necropolis and group of religious megalithic volcanic stone statues in South America?",
    options: ["Tierradentro", "San Agust\u00edn Archaeological Park", "Ciudad Perdida", "Chav\u00edn de Hu\u00e1ntar"],
    correctIndex: 1,
    explanation: "San Agustín features hundreds of monumental anthropomorphic and zoomorphic statues erected between 1 and 900 CE near the headwaters of the Magdalena River.",
    status: "published"
  },
  {
    id: "sa-h-49",
    continent: "South America",
    difficulty: "Hard",
    question: "Which UNESCO archaeological park in Cauca, Colombia, is famed for pre-Columbian subterranean tomb chambers (hypogea) accessed by spiral staircases?",
    options: ["San Agust\u00edn", "Tierradentro", "Buritaca 200", "Pachacamac"],
    correctIndex: 1,
    explanation: "Tierradentro's hypogea were carved into volcanic tuff between 600 and 900 CE, adorned with intricate geometric red, black, and white painted designs.",
    status: "published"
  },
  {
    id: "sa-h-50",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the 119-meter-tall geoglyph on Cerro Unita in the Atacama Desert of northern Chile, considered the largest prehistoric anthropomorphic figure in the world?",
    options: ["Paracas Candelabra", "Atacama Giant (Gigante de Tarapac\u00e1)", "Nazca Astronaut", "Chiza Geoglyphs"],
    correctIndex: 1,
    explanation: "The Atacama Giant is believed to represent a local Andean shamanic deity or astronomical calendar marker dating to roughly 1000 to 1400 CE.",
    status: "published"
  },
  {
    id: "sa-h-51",
    continent: "South America",
    difficulty: "Hard",
    question: "What are the UNESCO-designated ghost towns in the Atacama Desert of northern Chile that preserve the infrastructure of late-19th-century sodium nitrate extraction?",
    options: ["Sewell and Chuquicamata", "Humberstone and Santa Laura Saltpeter Works", "Potos\u00ed and Huancavelica", "Cha\u00f1arcillo and Tres Puntas"],
    correctIndex: 1,
    explanation: "Humberstone and Santa Laura processed natural caliche into 'white gold' sodium nitrate for fertilizers and gunpowder until synthetic alternatives replaced them.",
    status: "published"
  },
  {
    id: "sa-h-52",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the raw sedimentary mineral deposit found in the Atacama Desert from which natural sodium nitrate and iodine are industrially extracted?",
    options: ["Bauxite", "Caliche", "Lignite", "Trona"],
    correctIndex: 1,
    explanation: "Caliche deposits formed over millions of years through atmospheric nitrate accumulation in hyper-arid desert conditions.",
    status: "published"
  },
  {
    id: "sa-h-53",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the UNESCO World Heritage abandoned mining company town perched at 2,200 meters in the Chilean Andes, known as the 'City of Stairs'?",
    options: ["Humberstone", "Sewell Mining Town", "Maria Elena", "Potrerillos"],
    correctIndex: 1,
    explanation: "Built in 1905 by Braden Copper to house El Teniente mine workers, Sewell has no vehicular streets, only extensive wooden pedestrian stairways.",
    status: "published"
  },
  {
    id: "sa-h-54",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the ancient citadel in northern Peru, perched atop an Andean limestone ridge at 3,000 meters elevation, surrounded by a 20-meter-tall megalithic stone wall built by the Chachapoyas culture?",
    options: ["Machu Picchu", "Ku\u00e9lap", "Choquequirao", "Ollantaytambo"],
    correctIndex: 1,
    explanation: "Kuélap is often called the 'Machu Picchu of the North', containing over 400 circular stone dwellings built by the 'Cloud Warriors' (Chachapoyas).",
    status: "published"
  },
  {
    id: "sa-h-55",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the ancient ruined city located on the desert coast 200 km north of Lima, recognized as the oldest known center of civilization in the Americas (dating to 3000 BCE)?",
    options: ["Chav\u00edn de Hu\u00e1ntar", "Caral (Sacred City of Caral-Supe)", "Pachacamac", "Chan Chan"],
    correctIndex: 1,
    explanation: "Caral flourished contemporaneously with the Egyptian pyramids, featuring monumental platform mounds, sunken circular plazas, and quipu recording cords.",
    status: "published"
  },
  {
    id: "sa-h-56",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the famous Inca citadel in southern Peru, situated on a ridge above the Apurímac River, often referred to as the 'sister city' of Machu Picchu due to similar architecture?",
    options: ["Ku\u00e9lap", "Choquequirao", "Pisac", "Moray"],
    correctIndex: 1,
    explanation: "Choquequirao ('Cradle of Gold') is roughly three times larger than Machu Picchu and served as one of the last bastions of Inca resistance against Spanish conquest.",
    status: "published"
  },
  {
    id: "sa-h-57",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the unique archaeological site in Peru's Sacred Valley consisting of unusual concentric circular agricultural terraces with microclimatic temperature differences of up to 15°C?",
    options: ["Tip\u00f3n", "Moray", "Ollantaytambo", "Maras"],
    correctIndex: 1,
    explanation: "Moray's stepped circular depressions served as an agricultural research station where the Inca tested and hybridized crop varieties for different Andean altitudes.",
    status: "published"
  },
  {
    id: "sa-h-58",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the pre-Inca terraced salt evaporation pan complex in the Sacred Valley of Peru that has operated continuously since before the 15th century, fed by a hypersaline subterranean spring?",
    options: ["Moray", "Salineras de Maras", "Salar de Uyuni", "Salar de Atacama"],
    correctIndex: 1,
    explanation: "Salineras de Maras consists of over 3,000 stepped terraced ponds managed cooperatively by local families to harvest pink Andean salt.",
    status: "published"
  },
  {
    id: "sa-h-59",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the historic Spanish colonial mint in Potosí, Bolivia, established in 1572 to convert silver from Cerro Rico into pieces of eight (reales)?",
    options: ["Casa de Contrataci\u00f3n", "Casa Nacional de la Moneda", "Palacio Quemado", "Cabildo de Potos\u00ed"],
    correctIndex: 1,
    explanation: "The Casa de la Moneda occupied two city blocks, housing original wooden coin-pressing rolling mills powered by mules.",
    status: "published"
  },
  {
    id: "sa-h-60",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the distinctive indigenous watercraft traditionally built by Aymara fishermen on Lake Titicaca from woven bundles of totora reeds?",
    options: ["Pirogue", "Caballito de totora (or Balsa de totora)", "Canoe", "Kayak"],
    correctIndex: 1,
    explanation: "Totora reed boats have been built on Titicaca and the Peruvian coast for thousands of years, inspiring Thor Heyerdahl's transoceanic reed raft Ra II.",
    status: "published"
  },
  {
    id: "sa-h-61",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the ancient Inca engineering masterpiece in Cusco, Peru, that uses a 12-angled diorite stone fitted perfectly without mortar into a palace wall?",
    options: ["Machu Picchu Sun Gate", "Twelve-Angled Stone (Piedra de los Doce \u00c1ngulos)", "Intihuatana", "Temple of the Sun"],
    correctIndex: 1,
    explanation: "The Twelve-Angled Stone in the Archbishop's Palace wall in Cusco illustrates the precision of Inca ashlar stonemasonry.",
    status: "published"
  },
  {
    id: "sa-h-62",
    continent: "South America",
    difficulty: "Hard",
    question: "Which active stratovolcano in southern Peru, rising to 5,822 meters, frames the skyline of the city of Arequipa ('The White City')?",
    options: ["Chachani", "El Misti", "Pichu Pichu", "Sabancaya"],
    correctIndex: 1,
    explanation: "El Misti is an active andesitic volcano that contributed the white volcanic sillar stone from which Arequipa's colonial architecture was constructed.",
    status: "published"
  },
  {
    id: "sa-h-63",
    continent: "South America",
    difficulty: "Hard",
    question: "What volcanic building stone quarried from pyroclastic flows gives Arequipa, Peru, its distinctive architecture and moniker 'The White City' (La Ciudad Blanca)?",
    options: ["Basalt", "Sillar (white volcanic ignimbrite / tuff)", "Marble", "Pumice"],
    correctIndex: 1,
    explanation: "Sillar is a light, porous white rhyolitic/dacitic ignimbrite easy to carve into ornate baroque facades like the Basilica Cathedral of Arequipa.",
    status: "published"
  },
  {
    id: "sa-h-64",
    continent: "South America",
    difficulty: "Hard",
    question: "Which active Peruvian volcano in Moquegua erupted in 1600 in the largest volcanic eruption in South American recorded history (VEI 6), triggering global cooling?",
    options: ["Sabancaya", "Huaynaputina", "Ubinas", "Misti"],
    correctIndex: 1,
    explanation: "Huaynaputina destroyed several nearby villages and spewed sulfur into the stratosphere, causing the 1601–1603 famine in Russia and cold winters globally.",
    status: "published"
  },
  {
    id: "sa-h-65",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the name of the active volcano in southern Peru that is currently the most historically active volcano in the country, situated in Moquegua?",
    options: ["Huaynaputina", "Ubinas", "Chachani", "Ampato"],
    correctIndex: 1,
    explanation: "Ubinas has recorded over 25 significant eruptive episodes since the 16th century, regularly prompting ash evacuations.",
    status: "published"
  },
  {
    id: "sa-h-66",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the name of the prominent ice cap on Mount Coropuna in Arequipa, Peru, the highest volcano in Peru (6,425 m)?",
    options: ["Huascar\u00e1n Glacier", "Coropuna Ice Cap", "Quelccaya Ice Cap", "Pastoruri Glacier"],
    correctIndex: 1,
    explanation: "Coropuna's summit is covered in a thick glacial ice cap that feeds meltwater to valleys in the arid southern Peruvian desert.",
    status: "published"
  },
  {
    id: "sa-h-67",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the Quelccaya Ice Cap in the Cordillera Vilcanota of southeastern Peru renowned for among paleoclimatologists?",
    options: ["It is the largest tropical ice cap in the world", "It is the lowest-elevation glacier on Earth", "It expands during El Ni\u00f1o episodes", "It consists entirely of geothermal dry ice"],
    correctIndex: 0,
    explanation: "Quelccaya sits at 5,670 meters elevation, spanning 44 square kilometers; ice core research by Lonnie Thompson provided landmark climate data.",
    status: "published"
  },
  {
    id: "sa-h-68",
    continent: "South America",
    difficulty: "Hard",
    question: "Which glacier in Huascarán National Park, Peru, has become a global symbol of rapid tropical glacial retreat and the impacts of climate change?",
    options: ["Perito Moreno Glacier", "Pastoruri Glacier", "Upsala Glacier", "Grey Glacier"],
    correctIndex: 1,
    explanation: "Pastoruri has lost more than half of its surface area since the 1990s, forcing Peru to adapt mountain tourism to 'climate change education'.",
    status: "published"
  },
  {
    id: "sa-h-69",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the deepest lake in South America, reaching a maximum recorded depth of 836 meters in the Patagonian Andes?",
    options: ["Lake Nahuel Huapi", "Lake O'Higgins / San Mart\u00edn", "Lake General Carrera", "Lake Titicaca"],
    correctIndex: 1,
    explanation: "Lake O'Higgins (Chilean name) / San Martín (Argentine name) is an octopus-shaped glacial lake fed by the O'Higgins Glacier on the Southern Icefield.",
    status: "published"
  },
  {
    id: "sa-h-70",
    continent: "South America",
    difficulty: "Hard",
    question: "Which spectacular glacier on the Southern Patagonian Icefield in Chile is the largest outlet glacier of the icefield, covering roughly 995 square kilometers?",
    options: ["Grey Glacier", "P\u00edo XI Glacier (Br\u00fcggen Glacier)", "Perito Moreno", "Spegazzini Glacier"],
    correctIndex: 1,
    explanation: "Pío XI Glacier flows into Eyre Fjord and Lake Greve, exhibiting anomalous advances when most worldwide glaciers are retreating.",
    status: "published"
  },
  {
    id: "sa-h-71",
    continent: "South America",
    difficulty: "Hard",
    question: "Which fjord national park in Chilean Patagonia contains the Laguna San Rafael, a tidal lagoon where icebergs calve directly into Pacific tidewaters?",
    options: ["Torres del Paine", "Laguna San Rafael National Park", "Pumal\u00edn", "Corcovado"],
    correctIndex: 1,
    explanation: "San Rafael Glacier descends from the Northern Patagonian Icefield directly into the sea at 46°38' S, one of the lowest-latitude tidewater glaciers.",
    status: "published"
  },
  {
    id: "sa-h-72",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the name of the massive volcanic eruption in southern Chile in 1991 that blanketed southern Patagonia and the Falkland Islands in thick ash?",
    options: ["Villarrica", "Mount Hudson (Volc\u00e1n Hudson)", "Chait\u00e9n", "Calbuco"],
    correctIndex: 1,
    explanation: "The August 1991 eruption of Mount Hudson was the second-largest in 20th-century southern Andes history, burying grazing lands and killing sheep.",
    status: "published"
  },
  {
    id: "sa-h-73",
    continent: "South America",
    difficulty: "Hard",
    question: "Which volcano in southern Chile erupted unexpectedly in May 2008 after roughly 9,000 years of dormancy, destroying its namesake coastal town with lahars?",
    options: ["Osorno", "Chait\u00e9n Volcano", "Calbuco", "Llaima"],
    correctIndex: 1,
    explanation: "Chaitén produced a rhyolitic plinian eruption with dramatic volcanic lightning, forcing the complete relocation of the town of Chaitén.",
    status: "published"
  },
  {
    id: "sa-h-74",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the national park in the Los Lagos Region of Chile created largely through private philanthropy by Doug and Kris Tompkins before being donated to Chile?",
    options: ["Torres del Paine", "Pumal\u00edn Douglas Tompkins National Park", "Vicente P\u00e9rez Rosales", "Conguill\u00edo"],
    correctIndex: 1,
    explanation: "Pumalín encompasses over 4,000 square kilometers of Valdivian temperate rainforest, protecting ancient alerce (Fitzroya cupressoides) groves.",
    status: "published"
  },
  {
    id: "sa-h-75",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the long-lived, colossal conifer native to the temperate rainforests of southern Chile and Argentina that can live for over 3,600 years?",
    options: ["Monkey puzzle tree (Araucaria araucana)", "Alerce (Fitzroya cupressoides)", "Lenga beech", "Coig\u00fce"],
    correctIndex: 1,
    explanation: "Fitzroya cupressoides is the second-longest-lived tree species on Earth after the Great Basin bristlecone pine, heavily protected as a national monument.",
    status: "published"
  },
  {
    id: "sa-h-76",
    continent: "South America",
    difficulty: "Hard",
    question: "Which unique evergreen tree native to the southern Andes of Chile and Argentina features triangular, spine-tipped scale-like leaves and edible seeds (piñones)?",
    options: ["Alerce", "Araucaria araucana (Monkey Puzzle Tree / Pehu\u00e9n)", "Nothofagus pumilio", "Podocarpus"],
    correctIndex: 1,
    explanation: "The Pehuén is the sacred ancestral tree of the indigenous Mapuche-Pehuenche people, adapted to volcanic soils and forest fires.",
    status: "published"
  },
  {
    id: "sa-h-77",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the Valdivian temperate rainforest of southern South America renowned for biogeographically?",
    options: ["It has no endemic species", "It is an isolated biogeographic island of Gondwanan relict flora completely separated from tropical rainforests by northern deserts", "It receives less than 500 mm of annual rainfall", "It is composed entirely of deciduous tropical palms"],
    correctIndex: 1,
    explanation: "Enclosed by the Atacama Desert, the high Andes, and the Pacific Ocean, the Valdivian rainforest holds high levels of endemic paleo-flora.",
    status: "published"
  },
  {
    id: "sa-h-78",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the name of the tiny, nocturnal arboreal marsupial native to the temperate rainforests of Chile and Argentina, considered a 'living fossil' representing the ancient order Microbiotheria?",
    options: ["Opossum", "Monito del monte (Dromiciops gliroides)", "Pudu", "Chinchilla"],
    correctIndex: 1,
    explanation: "The monito del monte ('little mountain monkey') is more closely related to Australian marsupials than to other American marsupials, confirming Gondwana linkage.",
    status: "published"
  },
  {
    id: "sa-h-79",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the world's smallest species of deer, native to the temperate bamboo thickets and dense forests of Chile and southwestern Argentina?",
    options: ["Huemul", "Pud\u00fa (Pudu puda)", "Taruca", "Marsh deer"],
    correctIndex: 1,
    explanation: "The southern pudú stands only 32 to 44 cm tall at the shoulder, weighing between 9 and 15 kg.",
    status: "published"
  },
  {
    id: "sa-h-80",
    continent: "South America",
    difficulty: "Hard",
    question: "Which endangered Andean deer appears on the national coat of arms of Chile alongside the Andean condor?",
    options: ["Pud\u00fa", "South Andean deer (Huemul / Hippocamelus bisulcus)", "White-tailed deer", "Pampas deer"],
    correctIndex: 1,
    explanation: "The huemul inhabits rugged mountain slopes and glacial valleys of southern Chile and Argentina, critically endangered due to habitat fragmentation.",
    status: "published"
  },
  {
    id: "sa-h-81",
    continent: "South America",
    difficulty: "Hard",
    question: "Which large flightless ratite bird native to the steppes and plateaus of Patagonia was first documented for science by Charles Darwin?",
    options: ["Greater rhea", "Darwin's rhea (Lesser rhea / Choique)", "Emu", "Cassowary"],
    correctIndex: 1,
    explanation: "Darwin collected specimens of the lesser rhea (Rhea pennata) in 1833 in southern Argentina, noticing ecological niche differentiation from the northern greater rhea.",
    status: "published"
  },
  {
    id: "sa-h-82",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the only species of flamingo that breeds in the high-altitude hypersaline lakes of the Altiplano and is identifiable by deep red legs and bright carmine wing coverts?",
    options: ["Chilean flamingo", "James's flamingo (Puna flamingo)", "Andean flamingo", "American flamingo"],
    correctIndex: 1,
    explanation: "Phoenicoparrus jamesi was thought extinct until rediscovered in 1957 at Laguna Colorada in southwestern Bolivia.",
    status: "published"
  },
  {
    id: "sa-h-83",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the geological origin of the Galapagos Archipelago, located 1,000 km west of Ecuador?",
    options: ["Continental crust fragment rifted from South America", "A volcanic hotspot on the oceanic Nazca Plate near its divergent boundary with the Cocos Plate", "Coral reef accretion on a sunken continent", "Sediment accumulation from the Humboldt Current"],
    correctIndex: 1,
    explanation: "The Galápagos hotspot created an east-west volcanic island chain as the Nazca plate moves east-southeast over a persistent mantle plume.",
    status: "published"
  },
  {
    id: "sa-h-84",
    continent: "South America",
    difficulty: "Hard",
    question: "Which is the largest island in the Galápagos archipelago, formed by the merger of six shield volcanoes (Ecuador, Wolf, Darwin, Alcedo, Sierra Negra, and Cerro Azul)?",
    options: ["Santa Cruz", "Isabela Island", "Fernandina", "San Crist\u00f3bal"],
    correctIndex: 1,
    explanation: "Isabela covers 4,640 square kilometers (over 58% of the total Galápagos land area) and is shaped like a seahorse.",
    status: "published"
  },
  {
    id: "sa-h-85",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the highest point in the Galápagos Islands, located on Isabela Island exactly on the equator at 1,707 meters elevation?",
    options: ["Sierra Negra", "Volc\u00e1n Wolf", "Cerro Azul", "Mount Alcedo"],
    correctIndex: 1,
    explanation: "Volcán Wolf erupted in 2015 and 2022, home to the only known habitat of the critically endangered Galápagos pink land iguana (Conolophus marthae).",
    status: "published"
  },
  {
    id: "sa-h-86",
    continent: "South America",
    difficulty: "Hard",
    question: "Which island in the Galápagos is the youngest, most volcanically active, and westernmost island, consisting of a single massive active shield volcano?",
    options: ["Isabela", "Fernandina Island (Narborough)", "Floreana", "Espa\u00f1ola"],
    correctIndex: 1,
    explanation: "Fernandina has never been colonized by invasive mammals, preserving pristine endemic ecosystems including flightless cormorants.",
    status: "published"
  },
  {
    id: "sa-h-87",
    continent: "South America",
    difficulty: "Hard",
    question: "Which island in the Galápagos was the site of the Charles Darwin Research Station and the residence of 'Lonesome George', the last Pinta Island tortoise?",
    options: ["Isabela", "Santa Cruz Island (Puerto Ayora)", "San Crist\u00f3bal", "Baltra"],
    correctIndex: 1,
    explanation: "Santa Cruz is the economic and tourism hub of the archipelago, home to the Charles Darwin Research Station breeding giant tortoises.",
    status: "published"
  },
  {
    id: "sa-h-88",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the oceanic ridge connecting the Galápagos Islands to Central America that channels deep nutrient-rich upwelling waters?",
    options: ["Nazca Ridge", "Cocos Ridge", "Chile Rise", "Carnegie Ridge"],
    correctIndex: 1,
    explanation: "The Cocos Ridge runs northeast toward Costa Rica, while the Carnegie Ridge extends east toward the coast of Ecuador.",
    status: "published"
  },
  {
    id: "sa-h-89",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the marine current that upwells cold, nutrient-rich deep water directly to the western Galápagos (Isabela and Fernandina), sustaining cold-water penguins on the equator?",
    options: ["Humboldt Current", "Cromwell Current (Equatorial Undercurrent)", "Panama Current", "South Equatorial Current"],
    correctIndex: 1,
    explanation: "The Cromwell Current flows eastward subsurface along the equator, deflecting upward against the western Galápagos platform.",
    status: "published"
  },
  {
    id: "sa-h-90",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the only species of penguin found north of the equator in the wild, inhabiting the Galápagos Islands?",
    options: ["Magellanic penguin", "Gal\u00e1pagos penguin (Spheniscus mendiculus)", "Humboldt penguin", "Ad\u00e9lie penguin"],
    correctIndex: 1,
    explanation: "The Galápagos penguin survives at the equator thanks to the cold waters of the Cromwell and Humboldt Currents around Fernandina and Isabela.",
    status: "published"
  },
  {
    id: "sa-h-91",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the only marine lizard on Earth, endemic to the Galápagos Islands and capable of diving up to 30 meters to feed on marine algae?",
    options: ["Green iguana", "Marine iguana (Amblyrhynchus cristatus)", "Gal\u00e1pagos land iguana", "Caiman lizard"],
    correctIndex: 1,
    explanation: "Marine iguanas have flattened tails for swimming, blunt snouts to scrape rocks, and nasal salt glands to sneeze out excess ocean salt.",
    status: "published"
  },
  {
    id: "sa-h-92",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the only living species of cormorant that has completely lost the ability to fly, endemic to Fernandina and Isabela in the Galápagos?",
    options: ["Double-crested cormorant", "Flightless cormorant (Nannopterum harrisi)", "Guanay cormorant", "Neotropic cormorant"],
    correctIndex: 1,
    explanation: "With no natural land predators, the flightless cormorant evolved small vestigial wings and powerful webbed feet for deep diving for octopus and fish.",
    status: "published"
  },
  {
    id: "sa-h-93",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the archipelago in the southeastern Pacific Ocean belonging to Chile, where Scottish sailor Alexander Selkirk was marooned for four years, inspiring Daniel Defoe's 'Robinson Crusoe'?",
    options: ["Gal\u00e1pagos Islands", "Juan Fern\u00e1ndez Islands", "Desventuradas Islands", "Chilo\u00e9 Archipelago"],
    correctIndex: 1,
    explanation: "The Juan Fernández Islands include Robinson Crusoe Island (formerly Más a Tierra), Alejandro Selkirk Island, and Santa Clara.",
    status: "published"
  },
  {
    id: "sa-h-94",
    continent: "South America",
    difficulty: "Hard",
    question: "Which isolated group of four small oceanic islands belonging to Chile sits roughly 850 km off the coast of Caldera in the Pacific Ocean?",
    options: ["Juan Fern\u00e1ndez Islands", "Desventuradas Islands (San F\u00e9lix and San Ambrosio)", "Easter Island", "Salas y G\u00f3mez"],
    correctIndex: 1,
    explanation: "The Desventuradas ('Unfortunate Islands') are uninhabited except for a Chilean naval garrison on San Félix Island.",
    status: "published"
  },
  {
    id: "sa-h-95",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the tiny, uninhabited Chilean volcanic islet located 391 km east of Easter Island, representing the easternmost point of the Polynesian cultural sphere?",
    options: ["Ducie Island", "Salas y G\u00f3mez Island (Motu Motiro Hiva)", "San F\u00e9lix", "Pitcairn"],
    correctIndex: 1,
    explanation: "Salas y Gómez consists of two exposed volcanic rocks covering 0.15 km², surrounded by the Motu Motiro Hiva Marine Park.",
    status: "published"
  },
  {
    id: "sa-h-96",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the highest point on Easter Island (Rapa Nui), an extinct volcanic shield rising to 507 meters above sea level?",
    options: ["Rano Kau", "Terevaka (Mount Terevaka)", "Rano Raraku", "Poike"],
    correctIndex: 1,
    explanation: "Terevaka forms the bulk of Rapa Nui's triangular landmass, with older volcanic centers at Poike and Rano Kau forming the corners.",
    status: "published"
  },
  {
    id: "sa-h-97",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the volcanic crater on Easter Island that served as the primary quarry where approximately 95% of the island's 900 moai statues were carved from consolidated volcanic tuff?",
    options: ["Rano Kau", "Rano Raraku", "Puna Pau", "Terevaka"],
    correctIndex: 1,
    explanation: "Rano Raraku is a volcanic cinder cone containing hundreds of finished and half-carved monolithic moai still embedded in quarry walls.",
    status: "published"
  },
  {
    id: "sa-h-98",
    continent: "South America",
    difficulty: "Hard",
    question: "What small volcanic crater on Easter Island served as the sole source of red basaltic scoria used to carve the topknots or hats (pukao) placed on top of moai statues?",
    options: ["Rano Raraku", "Puna Pau", "Rano Kau", "Anakena"],
    correctIndex: 1,
    explanation: "Puna Pau is a soft red cinder cone quarry where the cylindrical red stone pukao topknots were carved and rolled down to coastal platforms (ahu).",
    status: "published"
  },
  {
    id: "sa-h-99",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the spectacular 1.6-kilometer-wide crater lake on Easter Island that hosted the ceremonial village of Orongo, center of the post-moai 'Birdman' (Tangata manu) cult?",
    options: ["Rano Raraku", "Rano Kau", "Rano Aroi", "Lake Te Pito"],
    correctIndex: 1,
    explanation: "Orongo sits on a narrow cliff edge between Rano Kau's crater lake and a 300-meter sheer drop to the Pacific Ocean, where competitors swam to Motu Nui for sooty tern eggs.",
    status: "published"
  },
  {
    id: "sa-h-100",
    continent: "South America",
    difficulty: "Hard",
    question: "What is the name of the oceanic tectonic microplate wedged between the Pacific and Nazca plates along the East Pacific Rise just west of Easter Island?",
    options: ["Juan de Fuca Plate", "Easter Microplate", "Cocos Plate", "Rivera Plate"],
    correctIndex: 1,
    explanation: "The Easter Microplate covers roughly 160,000 square kilometers, rotating clockwise between the rapidly spreading Pacific and Nazca plates.",
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
    id: "oc-e-3",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital city of New Zealand?",
    options: ["Auckland", "Christchurch", "Wellington", "Hamilton"],
    correctIndex: 2,
    explanation: "Wellington sits at the southern tip of the North Island on Cook Strait, making it the southernmost national capital in the world.",
    status: "published"
  },
  {
    id: "oc-e-4",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the largest city in New Zealand by population, known as the 'City of Sails'?",
    options: ["Wellington", "Auckland", "Christchurch", "Dunedin"],
    correctIndex: 1,
    explanation: "Auckland is home to over 1.6 million residents, situated on a narrow isthmus between the Manukau and Waitematā harbours.",
    status: "published"
  },
  {
    id: "oc-e-5",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital city of Papua New Guinea?",
    options: ["Lae", "Port Moresby", "Mount Hagen", "Madang"],
    correctIndex: 1,
    explanation: "Port Moresby is the capital and largest city of Papua New Guinea, located on the Gulf of Papua.",
    status: "published"
  },
  {
    id: "oc-e-6",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital city of Fiji, located on the southeast coast of Viti Levu?",
    options: ["Nadi", "Suva", "Lautoka", "Labasa"],
    correctIndex: 1,
    explanation: "Suva is the political, commercial, and educational center of Fiji, home to the main campus of the University of the South Pacific.",
    status: "published"
  },
  {
    id: "oc-e-7",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital and largest city of the Solomon Islands, located on the island of Guadalcanal?",
    options: ["Auki", "Honiara", "Gizo", "Tulagi"],
    correctIndex: 1,
    explanation: "Honiara is situated on the northern coast of Guadalcanal along Point Cruz and the Mataniko River.",
    status: "published"
  },
  {
    id: "oc-e-8",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital city of Vanuatu, situated on the island of Efate?",
    options: ["Luganville", "Port Vila", "Isangel", "Norsup"],
    correctIndex: 1,
    explanation: "Port Vila is the economic and commercial hub of Vanuatu, overlooking Mele Bay.",
    status: "published"
  },
  {
    id: "oc-e-9",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital city of Samoa, located on the island of Upolu?",
    options: ["Pago Pago", "Apia", "Salelologa", "Asau"],
    correctIndex: 1,
    explanation: "Apia is the capital and primary port of Samoa, where Scottish author Robert Louis Stevenson spent his final years.",
    status: "published"
  },
  {
    id: "oc-e-10",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital city of the Kingdom of Tonga, situated on the main island of Tongatapu?",
    options: ["Neiafu", "Nuku'alofa", "Pangai", "Ohonua"],
    correctIndex: 1,
    explanation: "Nuku'alofa is the residence of the King of Tonga and the site of the Royal Palace.",
    status: "published"
  },
  {
    id: "oc-e-11",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital city of the Australian state of New South Wales, famous for its Harbour Bridge and Opera House?",
    options: ["Melbourne", "Sydney", "Brisbane", "Canberra"],
    correctIndex: 1,
    explanation: "Sydney is Australia's oldest and most populous city, founded around Sydney Cove in Port Jackson in 1788.",
    status: "published"
  },
  {
    id: "oc-e-12",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital city of the Australian state of Victoria, situated on Port Phillip Bay?",
    options: ["Sydney", "Melbourne", "Geelong", "Ballarat"],
    correctIndex: 1,
    explanation: "Melbourne is Australia's second-most populous city, famous for its cultural arts, trams, and coffee culture.",
    status: "published"
  },
  {
    id: "oc-e-13",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital city of the Australian state of Queensland, situated along a winding river of the same name?",
    options: ["Cairns", "Brisbane", "Gold Coast", "Townsville"],
    correctIndex: 1,
    explanation: "Brisbane is the third-largest city in Australia, serving as the host city for the 2032 Summer Olympic Games.",
    status: "published"
  },
  {
    id: "oc-e-14",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital and largest city of Western Australia, located along the Swan River on the Indian Ocean coast?",
    options: ["Fremantle", "Perth", "Broome", "Albany"],
    correctIndex: 1,
    explanation: "Perth is one of the most isolated major metropolitan cities in the world, flanked by the Indian Ocean and the Outback.",
    status: "published"
  },
  {
    id: "oc-e-15",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital city of the state of South Australia, planned by Colonel William Light in a grid surrounded by parklands?",
    options: ["Whyalla", "Adelaide", "Mount Gambier", "Port Augusta"],
    correctIndex: 1,
    explanation: "Adelaide sits along the Torrens River between the Gulf St Vincent and the Mount Lofty Ranges.",
    status: "published"
  },
  {
    id: "oc-e-16",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the island state capital of Tasmania, nestled at the foot of Mount Wellington along the Derwent River?",
    options: ["Launceston", "Hobart", "Devonport", "Burnie"],
    correctIndex: 1,
    explanation: "Hobart is Australia's second-oldest capital city after Sydney, founded in 1804 as a penal colony.",
    status: "published"
  },
  {
    id: "oc-e-17",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital city of Australia's Northern Territory, located on the Timor Sea?",
    options: ["Alice Springs", "Darwin", "Katherine", "Palmerston"],
    correctIndex: 1,
    explanation: "Darwin is Australia's northernmost capital city, known as the gateway to Kakadu National Park and Southeast Asia.",
    status: "published"
  },
  {
    id: "oc-e-18",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the massive red sandstone monolith in the Northern Territory of Australia that is sacred to the indigenous Anangu people?",
    options: ["Kata Tjuta", "Uluru (Ayers Rock)", "Mount Augustus", "Wave Rock"],
    correctIndex: 1,
    explanation: "Uluru rises 348 meters above the surrounding desert plain, celebrated for glowing red during sunrise and sunset.",
    status: "published"
  },
  {
    id: "oc-e-19",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the group of 36 domed rock formations located near Uluru in central Australia, also known as The Olgas?",
    options: ["Uluru", "Kata Tjuta", "Devil's Marbles", "Bungle Bungles"],
    correctIndex: 1,
    explanation: "Kata Tjuta means 'many heads' in the Pitjantjatjara language, made of sedimentary conglomerate boulders.",
    status: "published"
  },
  {
    id: "oc-e-20",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the famous multi-venue performing arts center on Bennelong Point in Sydney Harbour, designed by Danish architect Jørn Utzon?",
    options: ["Sydney Tower", "Sydney Opera House", "Harbour Bridge", "Capitol Theatre"],
    correctIndex: 1,
    explanation: "The Sydney Opera House was inaugurated in 1973, famous for its distinctive sail-like precast concrete shells.",
    status: "published"
  },
  {
    id: "oc-e-21",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the iconic steel arch bridge spanning Sydney Harbour, affectionately nicknamed 'The Coathanger'?",
    options: ["Golden Gate Bridge", "Sydney Harbour Bridge", "Story Bridge", "Anzac Bridge"],
    correctIndex: 1,
    explanation: "Opened in 1932, the Sydney Harbour Bridge connects the Sydney central business district with the North Shore.",
    status: "published"
  },
  {
    id: "oc-e-22",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the world-famous ocean beach located just 7 kilometers east of the Sydney central business district in New South Wales?",
    options: ["Manly Beach", "Bondi Beach", "Surfers Paradise", "Cottesloe Beach"],
    correctIndex: 1,
    explanation: "Bondi Beach is one of Australia's most visited beaches, famous for crescent-shaped sands and the Bondi Icebergs ocean pool.",
    status: "published"
  },
  {
    id: "oc-e-23",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the longest river in Australia, flowing 2,508 kilometers from the Australian Alps to Lake Alexandrina?",
    options: ["Darling River", "Murray River", "Lachlan River", "Murrumbidgee River"],
    correctIndex: 1,
    explanation: "The Murray River forms most of the border between New South Wales and Victoria, serving as the backbone of Australia's agricultural heartland.",
    status: "published"
  },
  {
    id: "oc-e-24",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "Which major tributary of the Murray River flows 1,472 kilometers across New South Wales and is the third-longest river in Australia?",
    options: ["Swan River", "Darling River", "Flinders River", "Cooper Creek"],
    correctIndex: 1,
    explanation: "The Murray-Darling river basin drains roughly one-seventh of the Australian landmass.",
    status: "published"
  },
  {
    id: "oc-e-25",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the largest endorheic lake in Australia, which is also the lowest natural point on the Australian continent (-15 m)?",
    options: ["Lake Torrens", "Lake Eyre (Kati Thanda-Lake Eyre)", "Lake Gairdner", "Lake Frome"],
    correctIndex: 1,
    explanation: "Kati Thanda-Lake Eyre covers up to 9,500 square kilometers when flooded, though it is usually a dry salt pan.",
    status: "published"
  },
  {
    id: "oc-e-26",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What term is commonly used to describe the vast, remote, and arid interior regions of Australia?",
    options: ["The Veld", "The Outback", "The Bushveld", "The Pampas"],
    correctIndex: 1,
    explanation: "The Outback encompasses roughly 70% of the Australian continent, characterized by sparse population and red soil.",
    status: "published"
  },
  {
    id: "oc-e-27",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the vast, flat, arid limestone plain spanning the border between South Australia and Western Australia, whose name means 'no trees' in Latin?",
    options: ["Barkly Tableland", "Nullarbor Plain", "Gibson Desert", "Pilbara"],
    correctIndex: 1,
    explanation: "The Nullarbor Plain contains the world's longest straight stretch of railway track (478 km) and the Eyre Highway along the Great Australian Bight.",
    status: "published"
  },
  {
    id: "oc-e-28",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the ancient tropical rainforest in northeastern Queensland, recognized as the oldest continuously surviving tropical rainforest in the world?",
    options: ["Amazon", "Daintree Rainforest", "Congo", "Kakadu"],
    correctIndex: 1,
    explanation: "The Daintree Rainforest is estimated to be over 135 million years old, meeting the Great Barrier Reef at Cape Tribulation.",
    status: "published"
  },
  {
    id: "oc-e-29",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the 3,500-kilometer mountain system running parallel to Australia's eastern coastline from northern Queensland to Victoria?",
    options: ["Flinders Ranges", "Great Dividing Range (Eastern Highlands)", "MacDonnell Ranges", "Hamersley Range"],
    correctIndex: 1,
    explanation: "The Great Dividing Range separates the coastal river catchments from the inland drainage basins of the Murray-Darling and Lake Eyre.",
    status: "published"
  },
  {
    id: "oc-e-30",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "Which mountain range west of Sydney is named for the distinctive atmospheric blue haze produced by vaporized eucalyptus oil droplets?",
    options: ["Snowy Mountains", "Blue Mountains", "Grampians", "Victorian Alps"],
    correctIndex: 1,
    explanation: "The Blue Mountains are famous for dramatic sandstone cliffs, eucalyptus canyons, and the Three Sisters rock formation at Katoomba.",
    status: "published"
  },
  {
    id: "oc-e-31",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the famous sandstone rock formation of three weathered towers overlooking the Jamison Valley in the Blue Mountains?",
    options: ["The Twelve Apostles", "The Three Sisters", "Remarkable Rocks", "London Arch"],
    correctIndex: 1,
    explanation: "According to Aboriginal legend, three sisters from the Katoomba tribe were turned to stone by a witch doctor to protect them during a battle.",
    status: "published"
  },
  {
    id: "oc-e-32",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the famous collection of limestone sea stacks rising out of the Southern Ocean along the Great Ocean Road in Victoria?",
    options: ["The Three Sisters", "The Twelve Apostles", "Ball's Pyramid", "Pinnacles"],
    correctIndex: 1,
    explanation: "The Twelve Apostles were formed by wave erosion carving caves into limestone cliffs, which collapsed into arches and standalone sea stacks.",
    status: "published"
  },
  {
    id: "oc-e-33",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the highest mountain peak in New Zealand, rising to 3,724 meters in the Southern Alps?",
    options: ["Mount Tasman", "Aoraki / Mount Cook", "Mount Aspiring", "Mount Ruapehu"],
    correctIndex: 1,
    explanation: "Aoraki / Mount Cook sits in the center of the Southern Alps on the South Island, flanked by the Tasman and Hooker glaciers.",
    status: "published"
  },
  {
    id: "oc-e-34",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the mountain range that extends along the spine of New Zealand's South Island?",
    options: ["Southern Alps (K\u0101 Tiritiri o te Moana)", "Kaik\u014dura Ranges", "Tararua Range", "Remutaka Range"],
    correctIndex: 0,
    explanation: "The Southern Alps contain New Zealand's highest peaks, over 3,000 glaciers, and deep glacial fjord valleys.",
    status: "published"
  },
  {
    id: "oc-e-35",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the largest lake in New Zealand by surface area, occupying a massive caldera created by a colossal supervolcanic eruption?",
    options: ["Lake Wakatipu", "Lake Taupo", "Lake Wanaka", "Lake Te Anau"],
    correctIndex: 1,
    explanation: "Lake Taupo covers 616 square kilometers on the North Island, feeding the Waikato River, New Zealand's longest river.",
    status: "published"
  },
  {
    id: "oc-e-36",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the longest river in New Zealand, flowing 425 kilometers from Lake Taupo to the Tasman Sea south of Auckland?",
    options: ["Clutha River", "Waikato River", "Whanganui River", "Rakaia River"],
    correctIndex: 1,
    explanation: "The Waikato River generates substantial hydroelectric power, flowing through Hamilton and the Waikato plains.",
    status: "published"
  },
  {
    id: "oc-e-37",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What famous fjord in southwest New Zealand's Fiordland National Park was described by Rudyard Kipling as the 'Eighth Wonder of the World'?",
    options: ["Doubtful Sound", "Milford Sound (Piopiotahi)", "Duskey Sound", "Marlborough Sounds"],
    correctIndex: 1,
    explanation: "Milford Sound features vertical rock walls rising sheer from dark waters, crowned by the 1,692-meter Mitre Peak.",
    status: "published"
  },
  {
    id: "oc-e-38",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "Which active stratovolcano on New Zealand's North Island is the highest point on the North Island (2,797 m) and an active ski resort?",
    options: ["Mount Taranaki", "Mount Ruapehu", "Mount Tongariro", "Mount Ngauruhoe"],
    correctIndex: 1,
    explanation: "Mount Ruapehu is located in Tongariro National Park, New Zealand's oldest national park, and features an active crater lake.",
    status: "published"
  },
  {
    id: "oc-e-39",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "Which town on New Zealand's North Island is world-famous for geothermal geysers, bubbling mud pools, and Māori cultural performance centers?",
    options: ["Napier", "Rotorua", "Taupo", "Gisborne"],
    correctIndex: 1,
    explanation: "Rotorua sits on the Rotorua caldera, home to the Whakarewarewa thermal valley and Te Puia geysers.",
    status: "published"
  },
  {
    id: "oc-e-40",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "Into which three major ethno-geographic regions is Oceania traditionally divided?",
    options: ["Polynesia, Micronesia, and Melanesia", "Sunda, Sahul, and Wallacea", "Australasia, Indochina, and Malesia", "Caribbean, Pacific, and Atlantic"],
    correctIndex: 0,
    explanation: "Melanesia ('black islands'), Micronesia ('small islands'), and Polynesia ('many islands') were categorized by Jules Dumont d'Urville in 1832.",
    status: "published"
  },
  {
    id: "oc-e-41",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "Which region of Oceania comprises large southwestern Pacific islands including New Guinea, Solomon Islands, Vanuatu, and Fiji?",
    options: ["Polynesia", "Melanesia", "Micronesia", "Macaronesia"],
    correctIndex: 1,
    explanation: "Melanesia extends from the western end of the Pacific east to the Fiji Islands, characterized by high cultural and linguistic diversity.",
    status: "published"
  },
  {
    id: "oc-e-42",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "Which region of Oceania spans thousands of tiny coral atolls and volcanic islands in the northwestern Pacific, including Guam, Palau, and the Marshall Islands?",
    options: ["Melanesia", "Micronesia", "Polynesia", "Eurasia"],
    correctIndex: 1,
    explanation: "Micronesia lies north of Melanesia and east of the Philippines, encompassing Kiribati, Nauru, Palau, and FSM.",
    status: "published"
  },
  {
    id: "oc-e-43",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "Which vast triangular region of Oceania is defined by vertices at Hawaii in the north, New Zealand in the southwest, and Easter Island in the southeast?",
    options: ["Melanesia", "Polynesia (The Polynesian Triangle)", "Micronesia", "Coral Triangle"],
    correctIndex: 1,
    explanation: "The Polynesian Triangle encompasses over 1,000 islands linked by shared Polynesian voyaging history and linguistic roots.",
    status: "published"
  },
  {
    id: "oc-e-44",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What sea lies between the eastern coast of Australia and the islands of New Zealand?",
    options: ["Coral Sea", "Tasman Sea", "Timor Sea", "Arafura Sea"],
    correctIndex: 1,
    explanation: "The Tasman Sea spans roughly 2,000 kilometers between southeast Australia and New Zealand, named after Dutch navigator Abel Tasman.",
    status: "published"
  },
  {
    id: "oc-e-45",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "Which sea is situated off the northeastern coast of Australia, hosting the Great Barrier Reef?",
    options: ["Tasman Sea", "Coral Sea", "Bismarck Sea", "Solomon Sea"],
    correctIndex: 1,
    explanation: "The Coral Sea extends east from Queensland to Vanuatu and New Caledonia, the battleground of the 1942 Battle of the Coral Sea.",
    status: "published"
  },
  {
    id: "oc-e-46",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the large, shallow sea lying between northern Australia and southwestern New Guinea?",
    options: ["Tasman Sea", "Arafura Sea", "Ross Sea", "Philippine Sea"],
    correctIndex: 1,
    explanation: "The Arafura Sea sits atop the continental Sahul Shelf, connecting to the Coral Sea via the Torres Strait.",
    status: "published"
  },
  {
    id: "oc-e-47",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the massive shallow rectangular bay in northern Australia enclosed by Arnhem Land to the west and Cape York Peninsula to the east?",
    options: ["Spencer Gulf", "Gulf of Carpentaria", "Exmouth Gulf", "Shark Bay"],
    correctIndex: 1,
    explanation: "The Gulf of Carpentaria is bordered by the Northern Territory and Queensland, famous for the Morning Glory cloud phenomenon.",
    status: "published"
  },
  {
    id: "oc-e-48",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the massive open oceanic bight off the central and western parts of Australia's southern coastline?",
    options: ["Gulf of Carpentaria", "Great Australian Bight", "Joseph Bonaparte Gulf", "Geographe Bay"],
    correctIndex: 1,
    explanation: "The Great Australian Bight features towering coastal limestone cliffs called the Bunda Cliffs along the Nullarbor Plain.",
    status: "published"
  },
  {
    id: "oc-e-49",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the flightless, nocturnal bird with hair-like feathers that is the national emblem of New Zealand?",
    options: ["Emu", "Kiwi", "Cassowary", "Kakapo"],
    correctIndex: 1,
    explanation: "The kiwi lays the largest egg in proportion to its body size of any bird in the world, giving New Zealanders their national demonym ('Kiwis').",
    status: "published"
  },
  {
    id: "oc-e-50",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What unique semi-aquatic Australian mammal has waterproof fur, a duck-like bill, a beaver-like tail, and lays eggs?",
    options: ["Echidna", "Platypus", "Koala", "Wombat"],
    correctIndex: 1,
    explanation: "The platypus and echidna are the world's only surviving monotremes (egg-laying mammals), native to eastern Australia and Tasmania.",
    status: "published"
  },
  {
    id: "oc-e-51",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the spiny egg-laying monotreme native to Australia and New Guinea that feeds on ants and termites?",
    options: ["Platypus", "Echidna (Spiny Anteater)", "Bandicoot", "Quoll"],
    correctIndex: 1,
    explanation: "Echidnas have elongated snouts and sticky tongues, carrying single eggs in temporary abdominal pouches until they hatch.",
    status: "published"
  },
  {
    id: "oc-e-52",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What iconic Australian marsupial feeds almost exclusively on toxic eucalyptus leaves and sleeps up to 20 hours a day?",
    options: ["Kangaroo", "Koala", "Wombat", "Possum"],
    correctIndex: 1,
    explanation: "Koalas have specialized digestive systems with long caecums to detoxify eucalyptus oils and extract scarce nutrients.",
    status: "published"
  },
  {
    id: "oc-e-53",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the largest living marsupial species in the world, capable of hopping up to 55 km/h across the Australian interior?",
    options: ["Wallaby", "Red Kangaroo (Osphranter rufus)", "Eastern Grey Kangaroo", "Tree Kangaroo"],
    correctIndex: 1,
    explanation: "Male red kangaroos can stand over 1.8 meters tall and weigh over 85 kilograms, using their large muscular tail for balance.",
    status: "published"
  },
  {
    id: "oc-e-54",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the burrowing, stout herbivorous marsupial native to Australia that is famous for producing cube-shaped feces?",
    options: ["Koala", "Wombat", "Bilby", "Quokka"],
    correctIndex: 1,
    explanation: "Wombats use cube-shaped droppings to mark territories on rocks and logs without the feces rolling away.",
    status: "published"
  },
  {
    id: "oc-e-55",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What carnivorous marsupial, now restricted entirely to the island state of Tasmania, is known for its fierce screech and powerful bite?",
    options: ["Thylacine", "Tasmanian Devil (Sarcophilus harrisii)", "Spotted Quoll", "Dingo"],
    correctIndex: 1,
    explanation: "The Tasmanian devil is the largest surviving carnivorous marsupial, threatened by a transmissible facial tumor disease.",
    status: "published"
  },
  {
    id: "oc-e-56",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What friendly, cat-sized marsupial native to Rottnest Island near Perth, Western Australia, is nicknamed the 'happiest animal in the world'?",
    options: ["Numbat", "Quokka", "Bandicoot", "Sugar glider"],
    correctIndex: 1,
    explanation: "Quokkas are known for their inquisitive nature and upward-curving mouths that look like smiling faces in tourist selfies.",
    status: "published"
  },
  {
    id: "oc-e-57",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the second-largest bird in the world by height, native to Australia and capable of running up to 50 km/h?",
    options: ["Ostrich", "Emu", "Southern Cassowary", "Kagu"],
    correctIndex: 1,
    explanation: "The emu appears alongside the red kangaroo on the Australian coat of arms because neither animal can easily move backwards.",
    status: "published"
  },
  {
    id: "oc-e-58",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "Which large, flightless rainforest bird native to northeastern Queensland and New Guinea is identifiable by a hard helmet-like casque and vivid blue neck?",
    options: ["Emu", "Southern Cassowary", "Kaka", "Kea"],
    correctIndex: 1,
    explanation: "Cassowaries have sharp dagger-like inner claws up to 12 cm long, vital for dispersing large rainforest seeds.",
    status: "published"
  },
  {
    id: "oc-e-59",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the world's only alpine parrot species, native to the South Island of New Zealand and famous for its playful intelligence and curiosity around cars?",
    options: ["Kakapo", "Kea", "Kaka", "Cockatoo"],
    correctIndex: 1,
    explanation: "Keas live in alpine avalanche zones and ski fields, notorious for investigating backpacks and chewing rubber car window seals.",
    status: "published"
  },
  {
    id: "oc-e-60",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What critically endangered flightless, nocturnal parrot native to New Zealand is the heaviest parrot in the world?",
    options: ["Kea", "K\u0101k\u0101p\u014d (Owl Parrot)", "Kaka", "Takahe"],
    correctIndex: 1,
    explanation: "Kākāpō use a lek breeding system where males emit deep booming calls from dug-out hollows; protected on predator-free offshore islands.",
    status: "published"
  },
  {
    id: "oc-e-61",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the French overseas collectivity in the South Pacific comprising Tahiti, Bora Bora, and Moorea?",
    options: ["New Caledonia", "French Polynesia", "Wallis and Futuna", "Vanuatu"],
    correctIndex: 1,
    explanation: "French Polynesia consists of 121 islands and atolls grouped into five archipelagoes: the Society, Tuamotu, Gambier, Marquesas, and Austral islands.",
    status: "published"
  },
  {
    id: "oc-e-62",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital city of French Polynesia, located on the island of Tahiti?",
    options: ["Uturoa", "Papeete", "Faaa", "Bora Bora"],
    correctIndex: 1,
    explanation: "Papeete is the administrative and commercial capital of French Polynesia, located on the northwest coast of Tahiti.",
    status: "published"
  },
  {
    id: "oc-e-63",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What iconic luxury resort island in French Polynesia is famous for its dormant volcano Mount Otemanu rising above a turquoise lagoon enclosed by a barrier reef?",
    options: ["Tahiti", "Bora Bora", "Moorea", "Raiatea"],
    correctIndex: 1,
    explanation: "Bora Bora is globally renowned for pioneer overwater bungalow resorts built over clear lagoon waters.",
    status: "published"
  },
  {
    id: "oc-e-64",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital city of New Caledonia, a French sui generis collectivity in the southwestern Pacific?",
    options: ["Kon\u00e9", "Noum\u00e9a", "Bourail", "Lifou"],
    correctIndex: 1,
    explanation: "Nouméa is situated on a peninsula in the south of the main island of Grande Terre, home to roughly 100,000 residents.",
    status: "published"
  },
  {
    id: "oc-e-65",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What valuable metallic mineral makes up over 90% of New Caledonia's export revenues, holding roughly 10% of the world's known reserves?",
    options: ["Gold", "Nickel", "Copper", "Lithium"],
    correctIndex: 1,
    explanation: "New Caledonia's Grande Terre has extensive open-cast lateritic nickel mines supplying international smelting industries.",
    status: "published"
  },
  {
    id: "oc-e-66",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital city of the Republic of the Marshall Islands, located on an oval coral atoll of the same name?",
    options: ["Ebeye", "Majuro", "Kwajalein", "Jaluit"],
    correctIndex: 1,
    explanation: "Majuro is a narrow coral atoll enclosing a 295-square-kilometer lagoon, home to roughly half of the nation's population.",
    status: "published"
  },
  {
    id: "oc-e-67",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital city of the Federated States of Micronesia (FSM), located on the volcanic island of Pohnpei?",
    options: ["Weno", "Palikir", "Kolonia", "Yap"],
    correctIndex: 1,
    explanation: "Palikir replaced Kolonia as the federal capital of the Federated States of Micronesia in 1989.",
    status: "published"
  },
  {
    id: "oc-e-68",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital city of the Republic of Palau, created in 2006 to replace Koror on the island of Babeldaob?",
    options: ["Koror", "Ngerulmud", "Airai", "Peleliu"],
    correctIndex: 1,
    explanation: "Ngerulmud is the smallest national capital city in the world by population, hosting the national capitol complex.",
    status: "published"
  },
  {
    id: "oc-e-69",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "Which tiny Pacific island nation has no official designated capital city, though the district of Yaren houses its parliament?",
    options: ["Tuvalu", "Nauru", "Kiribati", "Niue"],
    correctIndex: 1,
    explanation: "Nauru is the world's smallest independent island republic (21 km²), with government offices concentrated in Yaren district.",
    status: "published"
  },
  {
    id: "oc-e-70",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What valuable natural resource was almost entirely stripped through open-cast mining across the central plateau of Nauru during the 20th century?",
    options: ["Bauxite", "Phosphate rock (guano deposits)", "Nickel", "Sulfur"],
    correctIndex: 1,
    explanation: "Intensive mining of fossilized seabird guano left 80% of Nauru's interior as barren jagged limestone pinnacles.",
    status: "published"
  },
  {
    id: "oc-e-71",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital atoll of Tuvalu, one of the smallest and most low-lying nations on Earth?",
    options: ["Nanumea", "Funafuti", "Niutao", "Vaitupu"],
    correctIndex: 1,
    explanation: "Funafuti is a narrow ring of islets surrounding a lagoon, where most government buildings and the international runway are located on Fongafale islet.",
    status: "published"
  },
  {
    id: "oc-e-72",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital atoll of the Republic of Kiribati, where over half of the country's population resides?",
    options: ["Kiritimati", "South Tarawa", "Abaiang", "Tabiteuea"],
    correctIndex: 1,
    explanation: "South Tarawa connects several coral islets by causeways, including Betio, Bairiki, and Bikenibeu.",
    status: "published"
  },
  {
    id: "oc-e-73",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "Which island of Kiribati is the largest coral atoll in the world by land area (388 km²), also known as Christmas Island?",
    options: ["Tarawa", "Kiritimati (Christmas Island)", "Banaba", "Malden"],
    correctIndex: 1,
    explanation: "Kiritimati makes up over 70% of Kiribati's total land area, situated in the Line Islands just south of the equator.",
    status: "published"
  },
  {
    id: "oc-e-74",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "Which unincorporated U.S. territory in Micronesia is the southernmost and largest of the Mariana Islands, with its capital at Hagåtña?",
    options: ["Saipan", "Guam", "Tinian", "Rota"],
    correctIndex: 1,
    explanation: "Guam was ceded to the United States after the Spanish-American War in 1898, serving as a major military strategic outpost.",
    status: "published"
  },
  {
    id: "oc-e-75",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital of the Commonwealth of the Northern Mariana Islands (CNMI), located on the island of Saipan?",
    options: ["Hag\u00e5t\u00f1a", "Capitol Hill (Saipan)", "Garapan", "San Jose"],
    correctIndex: 1,
    explanation: "Capitol Hill has served as the seat of government for the Northern Mariana Islands since 1962.",
    status: "published"
  },
  {
    id: "oc-e-76",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital of American Samoa, an unincorporated territory of the United States situated on the island of Tutuila?",
    options: ["Apia", "Pago Pago", "Tafuna", "Fagatogo"],
    correctIndex: 1,
    explanation: "Pago Pago is located on Pago Pago Harbor, one of the best and deepest natural sheltered harbors in the South Pacific.",
    status: "published"
  },
  {
    id: "oc-e-77",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What self-governing island territory in free association with New Zealand is known as the 'Rock of Polynesia'?",
    options: ["Cook Islands", "Niue", "Tokelau", "Pitcairn"],
    correctIndex: 1,
    explanation: "Niue is one of the world's largest raised coral atolls, with a dramatic limestone coast and Alofi as its capital.",
    status: "published"
  },
  {
    id: "oc-e-78",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the capital and largest island of the Cook Islands, an autonomous territory in free association with New Zealand?",
    options: ["Aitutaki", "Rarotonga (Avarua)", "Mangaia", "Atiu"],
    correctIndex: 1,
    explanation: "Avarua on Rarotonga is the national capital, surrounded by rugged volcanic peaks and a fringing coral reef.",
    status: "published"
  },
  {
    id: "oc-e-79",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the tiny, remote British Overseas Territory in the South Pacific settled in 1790 by mutineers from HMS Bounty and Tahitian companions?",
    options: ["Fiji", "Pitcairn Island", "Norfolk Island", "St. Helena"],
    correctIndex: 1,
    explanation: "Pitcairn Island has fewer than 50 permanent inhabitants living in Adamstown, the least populous national jurisdiction in the world.",
    status: "published"
  },
  {
    id: "oc-e-80",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "Which Australian external territory in the South Pacific, famous for its historic penal colony and native Norfolk Island pine trees, was settled by Bounty descendants in 1856?",
    options: ["Lord Howe Island", "Norfolk Island", "Christmas Island", "Cocos Islands"],
    correctIndex: 1,
    explanation: "Norfolk Island features Kingston and Arthur's Vale Historic Area, recognized on the UNESCO World Heritage list.",
    status: "published"
  },
  {
    id: "oc-e-81",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "Which crescent-shaped volcanic island in the Tasman Sea, belonging to New South Wales, limits tourist visitors to 400 at a time to protect pristine ecosystems?",
    options: ["Norfolk Island", "Lord Howe Island", "Flinders Island", "Kangaroo Island"],
    correctIndex: 1,
    explanation: "Lord Howe Island contains the world's southernmost coral barrier reef and Mount Gower rising 875 meters above the sea.",
    status: "published"
  },
  {
    id: "oc-e-82",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the dramatic 562-meter-tall sheer basalt sea stack located 23 km southeast of Lord Howe Island, the tallest volcanic sea stack in the world?",
    options: ["The Twelve Apostles", "Ball's Pyramid", "Old Harry Rocks", "Rockall"],
    correctIndex: 1,
    explanation: "Ball's Pyramid is an eroded erosional remnant of a shield volcano, home to the rediscovered Lord Howe Island stick insect.",
    status: "published"
  },
  {
    id: "oc-e-83",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is Australia's third-largest island, located off the coast of South Australia, celebrated for sea lion colonies and Remarkable Rocks?",
    options: ["Tasmania", "Kangaroo Island", "Melville Island", "Fraser Island"],
    correctIndex: 1,
    explanation: "Kangaroo Island covers 4,405 square kilometers, separated from the Fleurieu Peninsula by Backstairs Passage.",
    status: "published"
  },
  {
    id: "oc-e-84",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the world's largest sand island, located off the southern coast of Queensland, officially known by its indigenous Butchulla name K'gari?",
    options: ["Moreton Island", "Fraser Island (K'gari)", "Stradbroke Island", "Bribie Island"],
    correctIndex: 1,
    explanation: "K'gari stretches over 120 km in length, famous for rainforests growing directly in high sand dunes and perched freshwater dune lakes.",
    status: "published"
  },
  {
    id: "oc-e-85",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the famous perched freshwater lake on K'gari (Fraser Island) renowned for crystal-clear rainwater and brilliant white silica sand?",
    options: ["Lake Eyre", "Lake McKenzie (Boorangoora)", "Lake Eacham", "Lake Barrine"],
    correctIndex: 1,
    explanation: "Lake McKenzie is a perched dune lake whose sand acts as a natural water filter, containing virtually pure rainwater.",
    status: "published"
  },
  {
    id: "oc-e-86",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is Australia's second-largest island by area, located off the northern coast of the Northern Territory in the Timor Sea?",
    options: ["Bathurst Island", "Melville Island", "Groote Eylandt", "Mornington Island"],
    correctIndex: 1,
    explanation: "Melville Island covers 5,786 square kilometers, forming the Tiwi Islands alongside Bathurst Island.",
    status: "published"
  },
  {
    id: "oc-e-87",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the large island located in the Gulf of Carpentaria belonging to the Northern Territory, whose Dutch name means 'Large Island'?",
    options: ["Melville Island", "Groote Eylandt", "Thursday Island", "Wessel Island"],
    correctIndex: 1,
    explanation: "Groote Eylandt was named by explorer Abel Tasman in 1644, containing one of the world's largest manganese mining operations.",
    status: "published"
  },
  {
    id: "oc-e-88",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the administrative center and primary inhabited island of the Torres Strait Islands, situated between Cape York and New Guinea?",
    options: ["Horn Island", "Thursday Island (Waiben)", "Prince of Wales Island", "Badu Island"],
    correctIndex: 1,
    explanation: "Thursday Island was historically the center of a pearling industry in the late 19th and early 20th centuries.",
    status: "published"
  },
  {
    id: "oc-e-89",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "Which major Australian wine region, located just north of Adelaide in South Australia, is internationally famous for full-bodied Shiraz wines?",
    options: ["Hunter Valley", "Barossa Valley", "Yarra Valley", "Margaret River"],
    correctIndex: 1,
    explanation: "The Barossa Valley was settled by German Lutheran immigrants in the 1840s, home to some of the world's oldest ungrafted Shiraz vines.",
    status: "published"
  },
  {
    id: "oc-e-90",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "Which premier wine region in Western Australia, situated south of Perth between Cape Naturaliste and Cape Leeuwin, is renowned for Cabernet Sauvignon and Chardonnay?",
    options: ["Swan Valley", "Margaret River", "Barossa Valley", "Clare Valley"],
    correctIndex: 1,
    explanation: "Margaret River is surrounded on three sides by the Indian and Southern oceans, enjoying a stable maritime Mediterranean climate.",
    status: "published"
  },
  {
    id: "oc-e-91",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the oldest wine-producing region in New South Wales, located roughly two hours north of Sydney along the Hunter River?",
    options: ["Barossa Valley", "Hunter Valley", "Mudgee", "Orange"],
    correctIndex: 1,
    explanation: "The Hunter Valley is famed for ageworthy Semillon and Shiraz wines, planted since the 1820s.",
    status: "published"
  },
  {
    id: "oc-e-92",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "Which wine region on the northern tip of New Zealand's South Island produces world-renowned herbaceous, aromatic Sauvignon Blanc?",
    options: ["Central Otago", "Marlborough", "Hawke's Bay", "Wairarapa"],
    correctIndex: 1,
    explanation: "Marlborough produces more than two-thirds of New Zealand's wine, centered around the Wairau and Awatere valleys.",
    status: "published"
  },
  {
    id: "oc-e-93",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "Which inland region on New Zealand's South Island, surrounding Queenstown and Wanaka, is the southernmost commercial wine-growing region in the world, famed for Pinot Noir?",
    options: ["Marlborough", "Central Otago", "Canterbury", "Nelson"],
    correctIndex: 1,
    explanation: "Central Otago features semi-continental high-altitude glacial schist soils with hot summers and freezing winters.",
    status: "published"
  },
  {
    id: "oc-e-94",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What resort town on New Zealand's South Island, situated along Lake Wakatipu beneath the Remarkables mountains, is nicknamed the 'Adventure Capital of the World'?",
    options: ["Dunedin", "Queenstown", "Christchurch", "Invercargill"],
    correctIndex: 1,
    explanation: "Queenstown is famous for commercial bungy jumping (Kawarau Bridge), jet boating, heli-skiing, and skydiving.",
    status: "published"
  },
  {
    id: "oc-e-95",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the unique Z-shaped glacial lake on New Zealand's South Island along which Queenstown sits, famous for its rhythmic 27-minute seiche water level rise and fall?",
    options: ["Lake Taupo", "Lake Wakatipu", "Lake Wanaka", "Lake Hawea"],
    correctIndex: 1,
    explanation: "According to Māori legend, the regular 12-centimeter rise and fall of Lake Wakatipu's water represents the heartbeat of the giant Matau sleeping at its bottom.",
    status: "published"
  },
  {
    id: "oc-e-96",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the high-altitude pass through the Southern Alps connecting Christchurch on the east coast with Greymouth on the west coast of New Zealand?",
    options: ["Haast Pass", "Arthur's Pass", "Lewis Pass", "Lindis Pass"],
    correctIndex: 1,
    explanation: "Arthur's Pass rises to 920 meters elevation, traversed by the TranzAlpine scenic railway and State Highway 73.",
    status: "published"
  },
  {
    id: "oc-e-97",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What scenic passenger train in New Zealand operates daily between Christchurch and Greymouth, crossing the Southern Alps via Arthur's Pass?",
    options: ["The Ghan", "TranzAlpine", "Indian Pacific", "Overlander"],
    correctIndex: 1,
    explanation: "The TranzAlpine is celebrated as one of the world's most scenic train journeys, passing the Canterbury Plains, Waimakariri gorges, and Otira Tunnel.",
    status: "published"
  },
  {
    id: "oc-e-98",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What legendary Australian transcontinental passenger train travels 2,979 km through the Red Centre from Adelaide to Darwin via Alice Springs?",
    options: ["Indian Pacific", "The Ghan", "Overland", "Spirit of Queensland"],
    correctIndex: 1,
    explanation: "The Ghan was named in honor of the pioneering Afghan camel drivers who opened the Australian interior during the 19th century.",
    status: "published"
  },
  {
    id: "oc-e-99",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What legendary Australian transcontinental train travels 4,352 km from Sydney on the Pacific Ocean to Perth on the Indian Ocean?",
    options: ["The Ghan", "Indian Pacific", "Sunlander", "Prospector"],
    correctIndex: 1,
    explanation: "The Indian Pacific traverses the Blue Mountains, the Nullarbor Plain's 478-km straight railway track, and the Avon Valley over four days.",
    status: "published"
  },
  {
    id: "oc-e-100",
    continent: "Australia/Oceania",
    difficulty: "Easy",
    question: "What is the famous gold-mining city in the Eastern Goldfields of Western Australia, home to the massive open-pit 'Super Pit' gold mine?",
    options: ["Coolgardie", "Kalgoorlie (Kalgoorlie-Boulder)", "Broken Hill", "Mount Isa"],
    correctIndex: 1,
    explanation: "Kalgoorlie was founded in 1893 during the Western Australian gold rushes; the Super Pit was long the nation's largest open-cut gold mine.",
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
    id: "oc-m-3",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the largest desert in Australia by area, covering roughly 348,750 square kilometers across Western Australia and South Australia?",
    options: ["Great Sandy Desert", "Great Victoria Desert", "Simpson Desert", "Tanami Desert"],
    correctIndex: 1,
    explanation: "The Great Victoria Desert was named by explorer Ernest Giles in 1875 in honor of Queen Victoria, characterized by red sand dunes and grassland.",
    status: "published"
  },
  {
    id: "oc-m-4",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which Australian desert is world-famous for having the world's longest parallel longitudinal sand dunes, including the 40-meter-tall dune known as 'Big Red'?",
    options: ["Gibson Desert", "Simpson Desert", "Tanami Desert", "Strzelecki Desert"],
    correctIndex: 1,
    explanation: "The Simpson Desert spans 176,500 square kilometers across the borders of the Northern Territory, Queensland, and South Australia.",
    status: "published"
  },
  {
    id: "oc-m-5",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What mineral-rich region in the northwest of Western Australia is the source of the vast majority of Australia's iron ore exports?",
    options: ["The Kimberley", "The Pilbara", "Goldfields-Esperance", "Mid West"],
    correctIndex: 1,
    explanation: "The Pilbara contains massive banded iron formations in the Hamersley Range, mined by companies like Rio Tinto, BHP, and Fortescue.",
    status: "published"
  },
  {
    id: "oc-m-6",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What national park in the Pilbara region of Western Australia is famous for sheer red rock gorges, natural emerald swimming pools, and waterfalls?",
    options: ["Kakadu", "Karijini National Park", "Purnululu", "Litchfield"],
    correctIndex: 1,
    explanation: "Karijini National Park preserves ancient two-billion-year-old banded iron and jaspilite gorges such as Hancock, Weano, and Dales gorges.",
    status: "published"
  },
  {
    id: "oc-m-7",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What UNESCO World Heritage national park in the Kimberley region of Western Australia features the iconic beehive-shaped striped sandstone towers of the Bungle Bungle Range?",
    options: ["Karijini", "Purnululu National Park", "Nambung", "Windjana Gorge"],
    correctIndex: 1,
    explanation: "Purnululu's towers feature alternating horizontal orange and dark-grey bands caused by biological cyanobacteria crusts on sandstone layers.",
    status: "published"
  },
  {
    id: "oc-m-8",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What unusual marine tidal phenomenon in Talbot Bay in the Kimberley region of Western Australia occurs when massive 10-meter tides rush through two narrow coastal cliff gaps?",
    options: ["Morning Glory", "Horizontal Falls (Horizontal Waterfalls)", "Pororoca", "Maelstrom"],
    correctIndex: 1,
    explanation: "David Attenborough described the Horizontal Falls as 'one of the greatest natural wonders of the world', creating dramatic white-water rapids.",
    status: "published"
  },
  {
    id: "oc-m-9",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What vast Aboriginal territory in the northeastern corner of Australia's Northern Territory is celebrated for continuous indigenous cultural traditions dating back over 50,000 years?",
    options: ["Barkly Tableland", "Arnhem Land", "Cape York", "Tiwi Islands"],
    correctIndex: 1,
    explanation: "Arnhem Land covers 97,000 square kilometers, requiring permits to enter, renowned for bark paintings and didgeridoo craftsmanship.",
    status: "published"
  },
  {
    id: "oc-m-10",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What dual World Heritage-listed national park in the Northern Territory is famous for both its biodiverse floodplains and ancient Aboriginal rock art sites at Ubirr and Nourlangie?",
    options: ["Litchfield", "Kakadu National Park", "Nitmiluk", "Uluru-Kata Tjuta"],
    correctIndex: 1,
    explanation: "Kakadu covers nearly 20,000 square kilometers, protecting the South Alligator River catchment and thousands of saltwater crocodiles.",
    status: "published"
  },
  {
    id: "oc-m-11",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which mountain range in Central Australia flanks the town of Alice Springs, extending east and west for roughly 640 kilometers?",
    options: ["Flinders Ranges", "MacDonnell Ranges (Tjoritja)", "Musgrave Ranges", "Hamersley Range"],
    correctIndex: 1,
    explanation: "The MacDonnell Ranges are pierced by dramatic quartz gaps and waterholes such as Standley Chasm, Simpsons Gap, and Ellery Creek Big Hole.",
    status: "published"
  },
  {
    id: "oc-m-12",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the massive natural amphitheatre of mountains in South Australia's Ikara-Flinders Ranges National Park, sacred to the Adnyamathanha people?",
    options: ["Wolfe Creek Crater", "Wilpena Pound (Ikara)", "Gosses Bluff", "Kings Canyon"],
    correctIndex: 1,
    explanation: "Wilpena Pound is an 80-square-kilometer remnant valley formed by a syncline fold of erosion-resistant Pound Quartzite.",
    status: "published"
  },
  {
    id: "oc-m-13",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which outback town in South Australia is known as the 'Opal Capital of the World', where most residents live in underground homes (dugouts) to escape scorching summer heat?",
    options: ["Lightning Ridge", "Coober Pedy", "Andamooka", "White Cliffs"],
    correctIndex: 1,
    explanation: "Coober Pedy produces roughly 70% of the world's precious white opals; its name derives from the Aboriginal term 'kupa-piti' ('white man in a hole').",
    status: "published"
  },
  {
    id: "oc-m-14",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which town in northern New South Wales is world-famous as the primary source of rare and valuable natural black opals?",
    options: ["Coober Pedy", "Lightning Ridge", "Broken Hill", "Cobar"],
    correctIndex: 1,
    explanation: "Lightning Ridge sits on Cretaceous sedimentary rocks that trapped silica-rich groundwater to form iridescent black opals.",
    status: "published"
  },
  {
    id: "oc-m-15",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which historic mining city in western New South Wales gave birth to the Broken Hill Proprietary Company (now the global mining giant BHP)?",
    options: ["Mount Isa", "Broken Hill (The Silver City)", "Kalgoorlie", "Port Pirie"],
    correctIndex: 1,
    explanation: "Discovered in 1883 by boundary rider Charles Rasp, Broken Hill holds one of the world's largest lead-zinc-silver ore deposits.",
    status: "published"
  },
  {
    id: "oc-m-16",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What UNESCO World Heritage marine site in Western Australia is famous for Hamelin Pool, home to the most diverse colony of living marine stromatolites on Earth?",
    options: ["Ningaloo Coast", "Shark Bay", "Exmouth Gulf", "Rowley Shoals"],
    correctIndex: 1,
    explanation: "Stromatolites are microbial mats formed by photosynthetic cyanobacteria, representing modern living analogues of the earliest life on Earth from 3.5 billion years ago.",
    status: "published"
  },
  {
    id: "oc-m-17",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What 260-kilometer-long fringing coral reef in Western Australia is famous for whale shark aggregations and can be reached directly by swimming from the beach?",
    options: ["Great Barrier Reef", "Ningaloo Reef", "Montgomery Reef", "Lord Howe Reef"],
    correctIndex: 1,
    explanation: "Ningaloo Reef is one of the world's longest nearshore reefs, allowing visitors to snorkel alongside gentle whale sharks and manta rays.",
    status: "published"
  },
  {
    id: "oc-m-18",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What natural geological formation near Hyden, Western Australia, consists of a multi-colored granite inselberg shaped like a curling 15-meter ocean wave?",
    options: ["Remarkable Rocks", "Wave Rock (Katter Kich)", "Murphy's Haystacks", "London Arch"],
    correctIndex: 1,
    explanation: "Wave Rock was sculpted by subsurface chemical weathering followed by wind and water erosion of softer granite beneath the crest.",
    status: "published"
  },
  {
    id: "oc-m-19",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What collection of thousands of weathered limestone pillars up to 3.5 meters tall rises eerily from yellow desert sands in Nambung National Park, Western Australia?",
    options: ["The Bungle Bungles", "The Pinnacles", "The Twelve Apostles", "Tessellated Pavement"],
    correctIndex: 1,
    explanation: "The Pinnacles formed from shell-rich coastal calcarenite sands that hardened around ancient tree roots before surrounding sands blew away.",
    status: "published"
  },
  {
    id: "oc-m-20",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What famous 5,614-kilometer fence was constructed across Australia in the late 19th century to keep wild predatory canines away from southeastern sheep pastures?",
    options: ["Rabbit-Proof Fence", "Dingo Fence (Dog Fence)", "State Barrier Fence", "Vermin Proof Fence"],
    correctIndex: 1,
    explanation: "The Dingo Fence is one of the longest man-made structures on Earth, stretching from Jimbour in Queensland to the Eyre Peninsula in South Australia.",
    status: "published"
  },
  {
    id: "oc-m-21",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the massive underground groundwater reservoir that underlies roughly 22% of the Australian continent, essential for pastoral agriculture across the arid interior?",
    options: ["Canning Basin", "Great Artesian Basin", "Murray Basin", "Amadeus Basin"],
    correctIndex: 1,
    explanation: "The Great Artesian Basin covers 1.7 million square kilometers, holding an estimated 65,000 cubic kilometers of pressurized groundwater.",
    status: "published"
  },
  {
    id: "oc-m-22",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What post-WWII civil engineering megaproject in southeastern Australia diverted the Snowy River through tunnels beneath the Alps to generate hydro power and irrigate the Murray basin?",
    options: ["Ord River Scheme", "Snowy Mountains Hydroelectric Scheme", "Bradfield Scheme", "Gordon River Project"],
    correctIndex: 1,
    explanation: "Built between 1949 and 1974 employing over 100,000 workers from thirty nations, the scheme comprises 16 dams and 145 km of tunnels.",
    status: "published"
  },
  {
    id: "oc-m-23",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the highest mountain peak in the Australian state of Victoria, rising to 1,986 meters in the Victorian Alps?",
    options: ["Mount Feathertop", "Mount Bogong", "Mount Hotham", "Mount Buller"],
    correctIndex: 1,
    explanation: "Mount Bogong is popular for cross-country skiing, named from the Aboriginal word meaning 'big fella mountain'.",
    status: "published"
  },
  {
    id: "oc-m-24",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What famous 65-kilometer multi-day walking track traverses the heart of the Tasmanian Wilderness World Heritage Area from Cradle Mountain to Lake St Clair?",
    options: ["Bibbulmun Track", "Overland Track", "Larapinta Trail", "Heysen Trail"],
    correctIndex: 1,
    explanation: "The Overland Track takes hikers through glacial valleys, rainforests, buttongrass plains, and past waterfalls beneath Mount Ossa.",
    status: "published"
  },
  {
    id: "oc-m-25",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the highest mountain peak in Tasmania, rising to 1,617 meters in the Pelion Range?",
    options: ["Cradle Mountain", "Mount Ossa", "Barn Bluff", "Mount Wellington"],
    correctIndex: 1,
    explanation: "Mount Ossa is a dolerite-capped peak located along the Overland Track in Cradle Mountain-Lake St Clair National Park.",
    status: "published"
  },
  {
    id: "oc-m-26",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the deepest freshwater lake in Australia, carved by glaciers to a depth of 167 meters in central Tasmania?",
    options: ["Lake Pedder", "Lake St Clair", "Great Lake", "Lake Gordon"],
    correctIndex: 1,
    explanation: "Lake St Clair marks the southern terminus of the Overland Track, draining into the Derwent River.",
    status: "published"
  },
  {
    id: "oc-m-27",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which Tasmanian river was saved from being flooded by a proposed hydroelectric dam following a landmark 1983 High Court constitutional ruling?",
    options: ["Derwent River", "Franklin River (Gordon-below-Franklin)", "Tamar River", "Pieman River"],
    correctIndex: 1,
    explanation: "The Franklin River campaign was one of the most significant environmental battles in Australian history, establishing Commonwealth power to protect World Heritage.",
    status: "published"
  },
  {
    id: "oc-m-28",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the maritime strait that separates New Zealand's North Island from the South Island, connecting the Tasman Sea to the South Pacific?",
    options: ["Foveaux Strait", "Cook Strait", "Bass Strait", "Tamaki Strait"],
    correctIndex: 1,
    explanation: "Cook Strait is 22 kilometers wide at its narrowest point, notorious for strong tidal currents and gale-force westerly winds.",
    status: "published"
  },
  {
    id: "oc-m-29",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which body of water separates the South Island of New Zealand from Stewart Island / Rakiura?",
    options: ["Cook Strait", "Foveaux Strait", "Bass Strait", "Colville Channel"],
    correctIndex: 1,
    explanation: "Foveaux Strait is roughly 130 km long and 30 km wide, globally famed for harvesting wild Bluff oysters.",
    status: "published"
  },
  {
    id: "oc-m-30",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the third-largest island of New Zealand, located 30 kilometers south of the South Island across Foveaux Strait?",
    options: ["Waiheke Island", "Stewart Island / Rakiura", "Great Barrier Island", "Chatham Island"],
    correctIndex: 1,
    explanation: "Over 85% of Rakiura is protected as Rakiura National Park; its Māori name means 'Glowing Skies', referring to the Aurora Australis.",
    status: "published"
  },
  {
    id: "oc-m-31",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which isolated archipelago situated 800 kilometers east of New Zealand's South Island was the ancestral home of the pacifist Moriori people?",
    options: ["Auckland Islands", "Chatham Islands (R\u0113kohu)", "Kermadec Islands", "Campbell Island"],
    correctIndex: 1,
    explanation: "The Chatham Islands have their own unique time zone (45 minutes ahead of mainland New Zealand), supporting fishing and farming communities.",
    status: "published"
  },
  {
    id: "oc-m-32",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What popular 19.4-kilometer alpine day hike on New Zealand's North Island passes steaming vents, Emerald Lakes, and Mount Ngauruhoe?",
    options: ["Milford Track", "Tongariro Alpine Crossing", "Routeburn Track", "Abel Tasman Coast Track"],
    correctIndex: 1,
    explanation: "The Tongariro Alpine Crossing crosses the volcanic saddle between Mount Tongariro and Mount Ngauruhoe (which stood in for Mount Doom in films).",
    status: "published"
  },
  {
    id: "oc-m-33",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which nearly symmetrical conical stratovolcano rises 2,518 meters in solitary prominence on the western coast of New Zealand's North Island?",
    options: ["Mount Ruapehu", "Mount Taranaki (Mount Egmont)", "Mount Tongariro", "Mount Edgecumbe"],
    correctIndex: 1,
    explanation: "Mount Taranaki's circular boundary with Egmont National Park is visibly distinct from space as dark green forest contrasting with farmland.",
    status: "published"
  },
  {
    id: "oc-m-34",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What subterranean cave system in the King Country of New Zealand's North Island is globally famous for boat tours beneath ceilings glowing with endemic fungus gnat larvae?",
    options: ["Te Anau Caves", "Waitomo Caves", "Ngarua Caves", "Harwood Hole"],
    correctIndex: 1,
    explanation: "Waitomo's glowworms (Arachnocampa luminosa) emit bioluminescent blue-green light from silk snares to attract prey.",
    status: "published"
  },
  {
    id: "oc-m-35",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What are the two famous glaciers on the West Coast of New Zealand's South Island that terminate unusually close to sea level within temperate rainforest?",
    options: ["Tasman and Hooker Glaciers", "Franz Josef and Fox Glaciers", "Rob Roy and Mueller Glaciers", "Dart and Murchison Glaciers"],
    correctIndex: 1,
    explanation: "Fed by heavy maritime precipitation from the Tasman Sea, Franz Josef and Fox glaciers descend steeply to within 300 meters of sea level.",
    status: "published"
  },
  {
    id: "oc-m-36",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the longest glacier in New Zealand, stretching 23.5 kilometers down the eastern slopes of the Southern Alps into Lake Tasman?",
    options: ["Fox Glacier", "Tasman Glacier", "Franz Josef Glacier", "Hooker Glacier"],
    correctIndex: 1,
    explanation: "The Tasman Glacier covers 101 square kilometers, terminating in a proglacial lake with calving icebergs.",
    status: "published"
  },
  {
    id: "oc-m-37",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What causes the brilliant milky-turquoise coloration of glacial lakes like Lake Pukaki and Lake Tekapo in the Mackenzie Basin of New Zealand?",
    options: ["Blue-green cyanobacteria blooms", "Fine suspended glacial rock flour (silt) reflecting sunlight", "Dissolved copper sulfate crystals", "Underground limestone geysers"],
    correctIndex: 1,
    explanation: "Glaciers grinding against schist bedrock produce fine mineral silt that remains suspended in the water, scattering shorter blue wavelengths.",
    status: "published"
  },
  {
    id: "oc-m-38",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the historic French-settled town nestled within the volcanic harbor of Banks Peninsula on the east coast of New Zealand's South Island?",
    options: ["Lyttelton", "Akaroa", "Picton", "Kaik\u014dura"],
    correctIndex: 1,
    explanation: "Founded by French whalers and colonists in 1840, Akaroa retains French street names and architecture, home to Hector's dolphins.",
    status: "published"
  },
  {
    id: "oc-m-39",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the drowned river valley system of fiords and sounds at the northern tip of New Zealand's South Island, through which Cook Strait ferries travel?",
    options: ["Fiordland", "Marlborough Sounds", "Dusky Sound", "Hauraki Gulf"],
    correctIndex: 1,
    explanation: "The Marlborough Sounds include Queen Charlotte, Kenepuru, and Pelorus Sounds, representing 1,500 km of sheltered coastline.",
    status: "published"
  },
  {
    id: "oc-m-40",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which coastal region in New Zealand's Northland comprises 144 subtropical islands and was the site of the 1840 signing of the Treaty of Waitangi?",
    options: ["Hauraki Gulf", "Bay of Islands", "Coromandel", "Bay of Plenty"],
    correctIndex: 1,
    explanation: "The Bay of Islands was the first area of significant European settlement and contact with Māori in New Zealand.",
    status: "published"
  },
  {
    id: "oc-m-41",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the sacred northernmost headland of New Zealand's North Island where, in Māori tradition, spirits of the deceased leap off into the underworld (Hawaiki)?",
    options: ["North Cape", "Cape Reinga (Te Rerenga Wairua)", "East Cape", "Cape Palliser"],
    correctIndex: 1,
    explanation: "Cape Reinga features an iconic 1941 lighthouse overlooking the turbulent meeting of the Tasman Sea and Pacific Ocean.",
    status: "published"
  },
  {
    id: "oc-m-42",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the longest river in Papua New Guinea, flowing roughly 1,126 kilometers through tropical rainforests and extensive swamplands to the Bismarck Sea?",
    options: ["Fly River", "Sepik River", "Markham River", "Ramu River"],
    correctIndex: 1,
    explanation: "The Sepik is famous for its completely undammed river basin and traditional riverine cultures centered around woodcarving.",
    status: "published"
  },
  {
    id: "oc-m-43",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the second-longest river in Papua New Guinea, discharging into the Gulf of Papua through a massive 100-km-wide delta?",
    options: ["Sepik River", "Fly River", "Strickland River", "Purari River"],
    correctIndex: 1,
    explanation: "The Fly River flows 1,050 km, carrying high sediment volumes from the Ok Tedi and Strickland catchments.",
    status: "published"
  },
  {
    id: "oc-m-44",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the highest mountain peak in Papua New Guinea, rising to 4,509 meters in the Bismarck Range?",
    options: ["Mount Giluwe", "Mount Wilhelm", "Mount Victoria", "Mount Albert Edward"],
    correctIndex: 1,
    explanation: "Mount Wilhelm is the highest peak in the country, occasionally receiving snow near its summit despite lying 5° south of the equator.",
    status: "published"
  },
  {
    id: "oc-m-45",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the highest volcano in Oceania, rising to 4,367 meters on the Southern Highlands of Papua New Guinea as an extinct shield volcano?",
    options: ["Mount Wilhelm", "Mount Giluwe", "Mount Tavurvur", "Mount Lamington"],
    correctIndex: 1,
    explanation: "Mount Giluwe is one of the Volcanic Seven Summits, covered in alpine grasslands and eroded volcanic plugs.",
    status: "published"
  },
  {
    id: "oc-m-46",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What are the two largest islands of the Bismarck Archipelago in Papua New Guinea?",
    options: ["Manus and Bougainville", "New Britain and New Ireland", "Guadalcanal and Malaita", "Espiritu Santo and Malakula"],
    correctIndex: 1,
    explanation: "New Britain contains the volcanic port of Rabaul, while New Ireland is a long, narrow mountainous island to the northeast.",
    status: "published"
  },
  {
    id: "oc-m-47",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which caldera port town in East New Britain, PNG, was largely buried by volcanic ash in 1994 when twin volcanoes Tavurvur and Vulcan erupted simultaneously?",
    options: ["Kokopo", "Rabaul", "Kavieng", "Kimbe"],
    correctIndex: 1,
    explanation: "Rabaul's harbor was formed by an ancient collapsed caldera; after the 1994 disaster, the provincial capital was moved to Kokopo.",
    status: "published"
  },
  {
    id: "oc-m-48",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which island geographically part of the Solomon Islands archipelago is an autonomous region of Papua New Guinea that voted overwhelmingly for independence in 2019?",
    options: ["Choiseul", "Bougainville Island", "Santa Isabel", "Malaita"],
    correctIndex: 1,
    explanation: "Bougainville held an independence referendum in 2019 with over 97% voting in favor of becoming a sovereign nation.",
    status: "published"
  },
  {
    id: "oc-m-49",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What massive open-cut copper and gold mine on Bougainville Island sparked a decade-long civil war beginning in 1988 over environmental destruction and revenue sharing?",
    options: ["Ok Tedi Mine", "Panguna Mine", "Porgera Mine", "Lihir Mine"],
    correctIndex: 1,
    explanation: "Panguna was operated by a subsidiary of Rio Tinto, generating billions before local grievances forced its shutdown in 1989.",
    status: "published"
  },
  {
    id: "oc-m-50",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the largest island in the Solomon Islands nation, where Henderson Field was contested in a famous 1942–1943 Guadalcanal Campaign?",
    options: ["Malaita", "Guadalcanal", "New Georgia", "San Cristobal"],
    correctIndex: 1,
    explanation: "Guadalcanal contains the capital Honiara and Mount Popomanaseu (2,335 m), the highest peak in the Solomon Islands.",
    status: "published"
  },
  {
    id: "oc-m-51",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is recognized as the world's largest double barrier reef lagoon, located in the Western Province of the Solomon Islands?",
    options: ["Truk Lagoon", "Marovo Lagoon", "New Caledonia Lagoon", "Lord Howe Lagoon"],
    correctIndex: 1,
    explanation: "Marovo Lagoon spans 700 square kilometers, enclosed by twin chains of raised coral barrier reefs and volcanic islands.",
    status: "published"
  },
  {
    id: "oc-m-52",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which active cinder cone volcano on Tanna Island in Vanuatu is celebrated as one of the world's most accessible continuously erupting volcanoes?",
    options: ["Ambrym", "Mount Yasur", "Gaua", "Lopevi"],
    correctIndex: 1,
    explanation: "Mount Yasur has been erupting strombolian bursts of glowing basaltic lava continuously for over 800 years, visited safely from its crater rim.",
    status: "published"
  },
  {
    id: "oc-m-53",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the traditional ancestral ritual performed on Pentecost Island in Vanuatu where young men leap from tall wooden towers with vines tied to their ankles?",
    options: ["Haka", "Naghol (Land Diving)", "Siva Tau", "Fire walking"],
    correctIndex: 1,
    explanation: "Naghol is celebrated each year during the yam harvest, recognized as the ancient indigenous precursor to modern bungee jumping.",
    status: "published"
  },
  {
    id: "oc-m-54",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the largest island of Vanuatu, famous for the sunken WWII transport liner SS President Coolidge and white sand Champagne Beach?",
    options: ["Efate", "Espiritu Santo", "Malakula", "Erromango"],
    correctIndex: 1,
    explanation: "Espiritu Santo covers 3,955 square kilometers, with Luganville serving as its largest coastal town and WWII naval base.",
    status: "published"
  },
  {
    id: "oc-m-55",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the largest island in Fiji, containing the national capital Suva and the international hub of Nadi?",
    options: ["Vanua Levu", "Viti Levu", "Taveuni", "Kadavu"],
    correctIndex: 1,
    explanation: "Viti Levu covers 10,388 square kilometers, home to more than 70% of Fiji's total population.",
    status: "published"
  },
  {
    id: "oc-m-56",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the second-largest island in Fiji, known as the 'Sandalwood Island' and centered on the town of Labasa?",
    options: ["Viti Levu", "Vanua Levu", "Ovalau", "Rotuma"],
    correctIndex: 1,
    explanation: "Vanua Levu covers 5,587 square kilometers, famous for sugar cane cultivation and the scenic bay of Savusavu.",
    status: "published"
  },
  {
    id: "oc-m-57",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which island in Fiji is known as the 'Garden Island' because of its lush rainforests, Bouma National Heritage Park, and the rare Tagimaucia flower?",
    options: ["Viti Levu", "Taveuni", "Kadavu", "Beqa"],
    correctIndex: 1,
    explanation: "Taveuni is crossed by the 180th meridian, home to endemic plants and Lake Tagimaucia in an extinct volcanic crater.",
    status: "published"
  },
  {
    id: "oc-m-58",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the traditional social and ceremonial beverage in Fiji and Vanuatu made from the pounded root of Piper methysticum, producing a mild calming effect?",
    options: ["Betel nut", "Kava (Yaqona)", "Toddy", "Mat\u00e9"],
    correctIndex: 1,
    explanation: "Kava is mixed with water in a wooden bowl (tanoa) and served in halved coconut shells (bilo) during formal welcoming ceremonies.",
    status: "published"
  },
  {
    id: "oc-m-59",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What massive submarine volcanic eruption in Tonga in January 2022 produced the largest atmospheric explosion recorded by modern instruments and triggered global tsunamis?",
    options: ["Krakatoa", "Hunga Tonga-Hunga Ha'apai", "Yasur", "Rabaul"],
    correctIndex: 1,
    explanation: "The explosive eruption generated an ash plume reaching 58 kilometers into the mesosphere and severed Tonga's undersea communications cable.",
    status: "published"
  },
  {
    id: "oc-m-60",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the largest and highest island in Samoa, home to Mount Silisili (1,858 m) and extensive volcanic lava fields at Saleaula?",
    options: ["Upolu", "Savai'i", "Tutuila", "Apolima"],
    correctIndex: 1,
    explanation: "Savai'i covers 1,694 square kilometers, often called the 'Cradle of Polynesia' due to ancient oral traditions.",
    status: "published"
  },
  {
    id: "oc-m-61",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the spectacular 30-meter-deep natural ocean trench and tidal swimming hole located in Lotofaga village on the island of Upolu, Samoa?",
    options: ["Alofaaga Blowholes", "To Sua Ocean Trench", "Piula Cave Pool", "Lanoto'o"],
    correctIndex: 1,
    explanation: "To Sua ('big hole') consists of two giant sinkholes joined by a lava tube, accessed by a steep wooden ladder into turquoise waters.",
    status: "published"
  },
  {
    id: "oc-m-62",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What state in the Federated States of Micronesia is historically famous for using massive doughnut-shaped stone currency disks known as Rai stones?",
    options: ["Chuuk", "Yap", "Pohnpei", "Kosrae"],
    correctIndex: 1,
    explanation: "Rai stones were carved from aragonite limestone in Palau and ferried 400 km across open ocean; their value is based on oral lineage and difficulty of transport.",
    status: "published"
  },
  {
    id: "oc-m-63",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What ruined ancient megalithic city in Pohnpei, FSM, consists of nearly 100 artificial basalt islets built atop a coral reef, dubbed the 'Venice of the Pacific'?",
    options: ["Lelu", "Nan Madol", "Babeldaob", "Ha'amonga 'a Maui"],
    correctIndex: 1,
    explanation: "Nan Madol was the ceremonial and political seat of the Saudeleur Dynasty from roughly 1200 to 1600 CE, built using massive prismatic columnar basalt stones.",
    status: "published"
  },
  {
    id: "oc-m-64",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which lagoon in the Federated States of Micronesia is famous worldwide among wreck divers as the site where over 50 Japanese warships and aircraft were sunk in Operation Hailstone (1944)?",
    options: ["Majuro", "Chuuk Lagoon (Truk Lagoon)", "Kwajalein", "Bikini"],
    correctIndex: 1,
    explanation: "Chuuk Lagoon was Japan's main naval operating base in the Central Pacific, now an underwater museum of ghost ships and war artifacts.",
    status: "published"
  },
  {
    id: "oc-m-65",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What UNESCO World Heritage site in Palau comprises roughly 445 uninhabited mushroom-shaped limestone islets enclosed within turquoise barrier reef lagoons?",
    options: ["Babeldaob", "Rock Islands Southern Lagoon (Chelbacheb)", "Peleliu", "Angaur"],
    correctIndex: 1,
    explanation: "The Rock Islands feature undercut limestone bases eroded by marine organisms and wave action, hosting over 50 unique marine lakes.",
    status: "published"
  },
  {
    id: "oc-m-66",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What famous marine lake on Eil Malk island in Palau contains millions of golden jellyfish that have lost their stinging potency due to an absence of predators?",
    options: ["Lake Ngardok", "Jellyfish Lake (Ongeim'l Tketau)", "Blue Lake", "Green Lake"],
    correctIndex: 1,
    explanation: "Isolated 12,000 years ago in a marine basin, the golden jellyfish migrate horizontally across the lake daily following the sun to feed their symbiotic algae.",
    status: "published"
  },
  {
    id: "oc-m-67",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What coral atoll in the Marshall Islands has the largest enclosed lagoon in the world (2,174 square kilometers), used by the U.S. military as a missile defense test site?",
    options: ["Majuro", "Kwajalein Atoll", "Bikini", "Enewetak"],
    correctIndex: 1,
    explanation: "Kwajalein's lagoon is so large that all 97 islands of the atoll would fit comfortably inside with room for hundreds of square kilometers of open sea.",
    status: "published"
  },
  {
    id: "oc-m-68",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "On which Pacific coral atoll did the United States conduct 23 nuclear tests between 1946 and 1958, including the 15-megaton Castle Bravo thermonuclear explosion?",
    options: ["Kwajalein", "Bikini Atoll", "Mururoa", "Johnston Atoll"],
    correctIndex: 1,
    explanation: "Castle Bravo was the largest nuclear explosion ever detonated by the U.S., contaminating the atoll and inspiring the naming of the modern two-piece swimsuit.",
    status: "published"
  },
  {
    id: "oc-m-69",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What concrete dome structure on Runit Island in Enewetak Atoll seals over 85,000 cubic meters of radioactive soil and debris left from Cold War nuclear testing?",
    options: ["Chernobyl Sarcophagus", "Runit Dome (The Tomb)", "Castle Crater", "Ivy Dome"],
    correctIndex: 1,
    explanation: "Constructed in the late 1970s over an atomic blast crater, rising sea levels and tidal wash now threaten the integrity of Runit Dome.",
    status: "published"
  },
  {
    id: "oc-m-70",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the high-salinity raised coral island belonging to Kiribati that was devastated by 20th-century colonial phosphate mining, forcing the relocation of its residents to Rabi Island in Fiji?",
    options: ["Nauru", "Banaba (Ocean Island)", "Kiritimati", "Makatea"],
    correctIndex: 1,
    explanation: "Phosphate mining stripped 90% of Banaba's soil and vegetation, leaving a lunar landscape of sharp limestone pinnacles.",
    status: "published"
  },
  {
    id: "oc-m-71",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What vast marine protected area in Kiribati covers over 408,000 square kilometers, safeguarding untouched coral atolls like Canton and Enderbury?",
    options: ["Great Barrier Reef Park", "Phoenix Islands Protected Area (PIPA)", "Papah\u0101naumoku\u0101kea", "Coral Sea Marine Park"],
    correctIndex: 1,
    explanation: "Designated a UNESCO World Heritage site in 2010, PIPA protects deep-sea trenches, underwater volcanoes, and pristine coral atolls.",
    status: "published"
  },
  {
    id: "oc-m-72",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Why is the Pacific island nation of Tuvalu considered among the most vulnerable countries on Earth to global climate change?",
    options: ["It experiences frequent volcanic eruptions", "Its highest natural elevation is just 4.6 meters above sea level, making it susceptible to king tides and sea level rise", "It is located in the center of active tornado alleys", "It has no surrounding coral reefs to break waves"],
    correctIndex: 1,
    explanation: "Tuvalu's low-lying atolls experience saltwater inundation of freshwater lenses and taro pits during annual king tides.",
    status: "published"
  },
  {
    id: "oc-m-73",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What internet country-code top-level domain (ccTLD) generates millions in annual licensing royalties for the small Pacific nation of Tuvalu?",
    options: [".to", ".tv", ".nu", ".ws"],
    correctIndex: 1,
    explanation: "Tuvalu licensed its .tv domain to global broadcasting and streaming companies, funding government infrastructure and international dues.",
    status: "published"
  },
  {
    id: "oc-m-74",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What French overseas territory in the Pacific consists of three traditional Polynesian kingdoms (Uvea, Sigave, and Alo) on two island groups?",
    options: ["French Polynesia", "Wallis and Futuna", "New Caledonia", "Vanuatu"],
    correctIndex: 1,
    explanation: "Wallis and Futuna is governed by a French administrator alongside three customary kings who manage customary law.",
    status: "published"
  },
  {
    id: "oc-m-75",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the 1,500-kilometer-long coral reef encircling the main island of New Caledonia, recognized as the world's second-longest double barrier reef?",
    options: ["Belize Barrier Reef", "New Caledonia Barrier Reef", "Mesoamerican Reef", "Andros Barrier Reef"],
    correctIndex: 1,
    explanation: "The lagoons of New Caledonia cover 24,000 square kilometers, declared a UNESCO World Heritage site for pristine coral diversity.",
    status: "published"
  },
  {
    id: "oc-m-76",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the iconic endemic conifer native to Norfolk Island, recognizable by its symmetrical triangular whorled branches and used globally as an ornamental tree?",
    options: ["Kauri pine", "Norfolk Island pine (Araucaria heterophylla)", "Hoop pine", "Wollemi pine"],
    correctIndex: 1,
    explanation: "Captain James Cook noted Norfolk pines in 1774, mistakenly hoping their tall straight trunks would supply ship masts for the Royal Navy.",
    status: "published"
  },
  {
    id: "oc-m-77",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What critically endangered giant flightless insect, nicknamed the 'tree lobster', was rediscovered living on Ball's Pyramid in 2001 after being wiped out on Lord Howe Island by black rats?",
    options: ["W\u0113t\u0101", "Lord Howe Island stick insect (Dryococelus australis)", "Giant Burrowing Cockroach", "Hercules beetle"],
    correctIndex: 1,
    explanation: "Scientists found fewer than 30 individuals surviving under a single Melaleuca bush on the sheer cliffs of Ball's Pyramid, initiating a successful captive breeding program.",
    status: "published"
  },
  {
    id: "oc-m-78",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What ancient, slow-growing Tasmanian conifer can live for over 3,000 years and is renowned for durable, aromatic, golden wood resistant to rot?",
    options: ["King Billy pine", "Huon pine (Lagarostrobos franklinii)", "Celery-top pine", "Tasmanian blue gum"],
    correctIndex: 1,
    explanation: "Huon pine grows along riverbanks in western Tasmania; a stand on Mount Read consists of genetically identical male clones living for over 10,000 years.",
    status: "published"
  },
  {
    id: "oc-m-79",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What vast cool temperate rainforest region in northwestern Tasmania is recognized as one of the largest unbroken Gondwanan temperate rainforests on Earth?",
    options: ["Daintree", "The Tarkine (takayna)", "Otway Ranges", "Yarra Ranges"],
    correctIndex: 1,
    explanation: "The Tarkine covers roughly 4,470 square kilometers, protecting myrtle beech, leatherwood, and habitats for the endangered freshwater crayfish (Astacopsis gouldi).",
    status: "published"
  },
  {
    id: "oc-m-80",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What triangular peninsula in South Australia lies between the Great Australian Bight and Spencer Gulf, famous for seafood production and Port Lincoln tuna fisheries?",
    options: ["Fleurieu Peninsula", "Eyre Peninsula", "Yorke Peninsula", "Cobourg Peninsula"],
    correctIndex: 1,
    explanation: "The Eyre Peninsula features rugged coastal cliffs, Coffin Bay oysters, and the southern terminus of the Flinders Ranges.",
    status: "published"
  },
  {
    id: "oc-m-81",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What major iron ore mountain range in the Pilbara region of Western Australia contains Western Australia's highest summit, Mount Meharry (1,253 m)?",
    options: ["King Leopold Ranges", "Hamersley Range", "Stirling Range", "Darling Scarp"],
    correctIndex: 1,
    explanation: "The Hamersley Range extends 460 km, containing some of the planet's richest iron hematite and itabirite beds.",
    status: "published"
  },
  {
    id: "oc-m-82",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the massive freshwater reservoir created by damming the Ord River in the Kimberley region of Western Australia, holding over 10 billion cubic meters of water?",
    options: ["Lake Gordon", "Lake Argyle", "Lake Eildon", "Lake Hume"],
    correctIndex: 1,
    explanation: "Lake Argyle is Australia's second-largest artificial lake by surface area, supporting the Ord River Irrigation Scheme.",
    status: "published"
  },
  {
    id: "oc-m-83",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the largest diamond mine in Australia by volume, located south of Lake Argyle in the Kimberley, world-famous for producing over 90% of the world's rare pink diamonds before closing in 2020?",
    options: ["Merlin Mine", "Argyle Diamond Mine", "Ellendale Mine", "Super Pit"],
    correctIndex: 1,
    explanation: "The Argyle mine was unique for extracting diamonds from an olivine lamproite volcanic pipe rather than traditional kimberlite pipes.",
    status: "published"
  },
  {
    id: "oc-m-84",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the largest island in French Polynesia, consisting of two volcanic landmasses (Tahiti Nui and Tahiti Iti) joined by the narrow Isthmus of Taravao?",
    options: ["Bora Bora", "Tahiti", "Moorea", "Nuku Hiva"],
    correctIndex: 1,
    explanation: "Tahiti is crowned by Mount Orohena (2,241 m), surrounded by coral reefs and black sand volcanic beaches.",
    status: "published"
  },
  {
    id: "oc-m-85",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which heart-shaped island in French Polynesia, located just 17 kilometers northwest of Tahiti, is famed for Mount Rotui and Cook's Bay?",
    options: ["Raiatea", "Moorea", "Huahine", "Maupiti"],
    correctIndex: 1,
    explanation: "Moorea features jagged volcanic spires rising above turquoise bays, easily accessible by high-speed catamaran ferry from Papeete.",
    status: "published"
  },
  {
    id: "oc-m-86",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which island in the Society Islands is revered in Polynesian tradition as the sacred spiritual homeland (Havai'i) and site of Taputapuātea, the supreme international marae?",
    options: ["Tahiti", "Raiatea", "Bora Bora", "Taha'a"],
    correctIndex: 1,
    explanation: "Taputapuātea marae on Raiatea was the central hub of the ancient East Polynesian voyaging network, designated a UNESCO World Heritage site.",
    status: "published"
  },
  {
    id: "oc-m-87",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What rugged, roadless volcanic archipelago in French Polynesia, situated 1,400 km northeast of Tahiti, was the setting for Herman Melville's 'Typee' and the burial place of Paul Gauguin?",
    options: ["Tuamotu Islands", "Marquesas Islands (\u00celes Marquises)", "Austral Islands", "Gambier Islands"],
    correctIndex: 1,
    explanation: "The Marquesas lack protective barrier reefs, featuring sheer sea cliffs, deep valleys, and monumental stone tiki statues.",
    status: "published"
  },
  {
    id: "oc-m-88",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What vast chain of nearly 80 low-lying coral atolls in French Polynesia forms the largest chain of atolls in the world, famous for black pearl farming?",
    options: ["Society Islands", "Tuamotu Archipelago (Paumotu)", "Marquesas", "Gambier Islands"],
    correctIndex: 1,
    explanation: "The Tuamotu Archipelago includes Rangiroa and Fakarava, celebrated for black-lipped pearl oyster (Pinctada margaritifera) aquaculture.",
    status: "published"
  },
  {
    id: "oc-m-89",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the second-largest coral atoll in the world by lagoon area, located in the Tuamotu Archipelago of French Polynesia?",
    options: ["Fakarava", "Rangiroa", "Kwajalein", "Manihi"],
    correctIndex: 1,
    explanation: "Rangiroa's lagoon is 80 km long and 32 km wide, so vast that its far shore cannot be seen from across the lagoon.",
    status: "published"
  },
  {
    id: "oc-m-90",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which atoll in the Tuamotus is designated a UNESCO Biosphere Reserve, renowned for the Tiputa and Garuae passes where hundreds of grey reef sharks congregate?",
    options: ["Rangiroa", "Fakarava", "Tikehau", "Makatea"],
    correctIndex: 1,
    explanation: "Fakarava is a premier scuba diving destination famous for its 'wall of sharks' drifting in high-energy tidal currents.",
    status: "published"
  },
  {
    id: "oc-m-91",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which French Polynesian atolls were used by the French government to conduct 193 atmospheric and underground nuclear weapons tests between 1966 and 1996?",
    options: ["Bikini and Enewetak", "Moruroa and Fangataufa", "Rangiroa and Fakarava", "Kiritimati and Johnston"],
    correctIndex: 1,
    explanation: "Moruroa atoll was heavily fractured by underground nuclear testing, triggering decades of environmental and political protests across the Pacific.",
    status: "published"
  },
  {
    id: "oc-m-92",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the largest raised coral limestone island in French Polynesia, whose phosphate deposits were heavily mined during the early 20th century?",
    options: ["Bora Bora", "Makatea", "Moorea", "Maupiti"],
    correctIndex: 1,
    explanation: "Unlike low-lying sand atolls, Makatea rises 80 meters above sea level with sheer limestone cliffs, one of only four raised phosphate islands in the Pacific.",
    status: "published"
  },
  {
    id: "oc-m-93",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the deepest marine trench in the Southern Hemisphere, located in the southwestern Pacific between New Zealand and Tonga, descending to 10,882 meters at Horizon Deep?",
    options: ["Mariana Trench", "Tonga Trench", "Kermadec Trench", "Kuril-Kamchatka Trench"],
    correctIndex: 1,
    explanation: "Horizon Deep in the Tonga Trench is the second-deepest point in the world ocean, formed by the subduction of the Pacific Plate beneath the Tonga microplate.",
    status: "published"
  },
  {
    id: "oc-m-94",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What deep oceanic trench extends immediately south of the Tonga Trench, running parallel to the Kermadec Ridge toward New Zealand?",
    options: ["Yap Trench", "Kermadec Trench", "Bougainville Trench", "Manila Trench"],
    correctIndex: 1,
    explanation: "The Kermadec Trench reaches a maximum depth of 10,047 meters, forming an active convergent subduction margin.",
    status: "published"
  },
  {
    id: "oc-m-95",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the submerged continental fragment under New Zealand and New Caledonia that is recognized as Earth's eighth geological continent, over 94% submerged under the Pacific Ocean?",
    options: ["Kerguelen Plateau", "Zealandia (Te Riu-a-M\u0101ui)", "Sahul", "Sunda"],
    correctIndex: 1,
    explanation: "Zealandia covers 4.9 million square kilometers of continental crust, rifted away from Gondwana roughly 80 million years ago.",
    status: "published"
  },
  {
    id: "oc-m-96",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the major geological transform fault running almost the entire 480-kilometer length of New Zealand's South Island, accommodating Pacific-Australian plate motion?",
    options: ["Wairarapa Fault", "Alpine Fault", "Wellington Fault", "Hikurangi Subduction Zone"],
    correctIndex: 1,
    explanation: "The Alpine Fault has produced major earthquakes roughly every 300 years, uplifting the Southern Alps along its eastern boundary.",
    status: "published"
  },
  {
    id: "oc-m-97",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "Which active marine volcanic island in the Bay of Plenty, New Zealand, experienced a fatal steam and ash phreatic eruption in December 2019?",
    options: ["Mayor Island", "Whakaari / White Island", "Little Barrier Island", "Kapiti Island"],
    correctIndex: 1,
    explanation: "Whakaari is New Zealand's most active cone volcano, whose 2019 eruption killed 22 tourists and guides on the crater floor.",
    status: "published"
  },
  {
    id: "oc-m-98",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the largest desert in New South Wales, Australia, located in the far west of the state around the corner of the Queensland and South Australian borders?",
    options: ["Strzelecki Desert", "Sturt Stony Desert", "Simpson Desert", "Gibson Desert"],
    correctIndex: 1,
    explanation: "Named after explorer Charles Sturt, the Sturt Stony Desert is covered in dense pavement of gibber stones (polished silcrete pebbles).",
    status: "published"
  },
  {
    id: "oc-m-99",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What are the smooth, wind-polished, iron-stained silcrete pebbles that cover extensive gibber plains across central and southern Australia called?",
    options: ["Tektites", "Gibber stones (desert armor / desert pavement)", "Scree", "Pumice"],
    correctIndex: 1,
    explanation: "Gibbers form when wind blows away fine sand and dust, leaving behind a protective interlocking layer of dense silica rocks.",
    status: "published"
  },
  {
    id: "oc-m-100",
    continent: "Australia/Oceania",
    difficulty: "Medium",
    question: "What is the Australian term for an ephemeral inland river channel or dry creek that only carries water following erratic desert deluge rains, such as Cooper Creek or Diamantina River?",
    options: ["Billabong", "Braided creek / Channel Country watercourse", "Wadi", "Ria"],
    correctIndex: 1,
    explanation: "Queensland's Channel Country features an intricate maze of anastomosing ephemeral channels that feed floodwaters into Lake Eyre.",
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
  {
    id: "oc-h-3",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the highest mountain peak in all sovereign Australian territory, rising to 2,745 meters on a remote subantarctic volcanic island in the Southern Ocean?",
    options: ["Mount Kosciuszko", "Mawson Peak (Heard Island)", "Mount Ossa", "Mount Bogong"],
    correctIndex: 1,
    explanation: "Mawson Peak is an active stratovolcano on Big Ben massif on Heard Island, 4,000 km southwest of Perth in the Southern Ocean.",
    status: "published"
  },
  {
    id: "oc-h-4",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the second-highest mountain peak on the Australian mainland, rising to 2,209 meters in the Snowy Mountains just 3.7 km north of Mount Kosciuszko?",
    options: ["Mount Townsend", "Mount Bogong", "Mount Twynam", "Rams Head"],
    correctIndex: 0,
    explanation: "Mount Townsend was originally thought to be the highest mountain until surveyor Paul Strzelecki remeasured Kosciuszko's peak in 1840.",
    status: "published"
  },
  {
    id: "oc-h-5",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What giant monocline in Western Australia rises 715 meters above the surrounding plain, covering an area more than twice the size of Uluru?",
    options: ["Wave Rock", "Mount Augustus (Burringurrah)", "Bald Rock", "Uluru"],
    correctIndex: 1,
    explanation: "Mount Augustus is the world's largest monocline/isolated rock mass, stretching 8 km long and composed of Proterozoic sandstone and conglomerate.",
    status: "published"
  },
  {
    id: "oc-h-6",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the second-largest well-preserved meteorite impact crater on Earth, measuring 880 meters in diameter in the Great Sandy Desert of Western Australia?",
    options: ["Barringer Crater", "Wolfe Creek Crater (Kandimalal)", "Gosses Bluff", "Henbury Craters"],
    correctIndex: 1,
    explanation: "Formed roughly 120,000 years ago by an iron meteorite, Wolfe Creek Crater features steep crater walls rising 35 meters above the desert floor.",
    status: "published"
  },
  {
    id: "oc-h-7",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What circular impact structure in the Northern Territory, sacred as Tnorala to the Western Arrernte, represents the eroded central uplift of a Jurassic comet collision?",
    options: ["Wolfe Creek", "Gosses Bluff (Tnorala)", "Boxhole Crater", "Veevers Crater"],
    correctIndex: 1,
    explanation: "Gosses Bluff was created roughly 142 million years ago by a 1-km-wide celestial body, leaving a 5-km-wide circle of shattered sandstone bluffs.",
    status: "published"
  },
  {
    id: "oc-h-8",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the northernmost point of the Australian continental mainland, situated at 10°41' S latitude on the Torres Strait?",
    options: ["Cape Arnhem", "Cape York (Tip of Australia)", "Cape Arnhem", "Cape Leveque"],
    correctIndex: 1,
    explanation: "The northernmost tip of Cape York Peninsula is accessible via 4WD tracks, jutting into the Torres Strait opposite Thursday Island.",
    status: "published"
  },
  {
    id: "oc-h-9",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the southernmost point of the Australian continental mainland, situated at 39°08' S latitude in Victoria's Wilsons Promontory National Park?",
    options: ["Cape Otway", "South Point", "Cape Leeuwin", "South East Cape"],
    correctIndex: 1,
    explanation: "South Point sits at the tip of Wilsons Promontory; South East Cape is further south but located on the island of Tasmania (43°38' S).",
    status: "published"
  },
  {
    id: "oc-h-10",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the easternmost point of mainland Australia, situated at 153°38' E longitude near an iconic 1901 lighthouse in New South Wales?",
    options: ["Point Danger", "Cape Byron", "Smoky Cape", "Double Island Point"],
    correctIndex: 1,
    explanation: "Cape Byron overlooks the Pacific Ocean, famous for sunrise vantage points and migrating humpback whale watching.",
    status: "published"
  },
  {
    id: "oc-h-11",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the westernmost point of mainland Australia, situated at 113°09' E longitude in the Gascoyne region of Western Australia?",
    options: ["North West Cape", "Steep Point", "Cape Inscription", "Cape Cuvier"],
    correctIndex: 1,
    explanation: "Steep Point features the dramatic 170-meter Zuytdorp Cliffs, located across South Passage from Dirk Hartog Island.",
    status: "published"
  },
  {
    id: "oc-h-12",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the world's largest nesting rookery for green sea turtles (Chelonia mydas), located on a remote coral cay in the northern Great Barrier Reef?",
    options: ["Heron Island", "Raine Island", "Lady Elliot Island", "Lizard Island"],
    correctIndex: 1,
    explanation: "Up to 60,000 female green turtles congregate at Raine Island in a single nesting season, monitored by Indigenous rangers and marine scientists.",
    status: "published"
  },
  {
    id: "oc-h-13",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What rare atmospheric phenomenon occurs in the Gulf of Carpentaria near Burketown, where roll clouds up to 1,000 kilometers long travel at 60 km/h during spring?",
    options: ["Haboob", "Morning Glory Cloud", "Southerly Buster", "Catatumbo Lightning"],
    correctIndex: 1,
    explanation: "The Morning Glory is an undular bore formed when opposing sea breezes collide over Cape York Peninsula, attracting hang glider pilots worldwide.",
    status: "published"
  },
  {
    id: "oc-h-14",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the meteorological term for the abrupt, powerful shallow cold front that moves rapidly up the New South Wales coast in spring and summer, causing drops of 10–15°C within minutes?",
    options: ["Brickfielder", "Southerly Buster", "Fremantle Doctor", "Roaring Forty"],
    correctIndex: 1,
    explanation: "Southerly Busters are preceded by hot northwest winds, arriving with a distinctive roll cloud and gale-force southerly wind gusts.",
    status: "published"
  },
  {
    id: "oc-h-15",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the local Australian term for the scorching, dusty northwesterly wind that blows across Victoria and New South Wales from the desert interior during summer heatwaves?",
    options: ["Southerly Buster", "Brickfielder", "Williwaw", "Ghibli"],
    correctIndex: 1,
    explanation: "Brickfielders originate in the red deserts of Central Australia, historically associated with extreme bushfire conditions in southeastern Australia.",
    status: "published"
  },
  {
    id: "oc-h-16",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the local name for the warm, dry foehn wind that descends across the Canterbury Plains on New Zealand's South Island after dropping rain on the Southern Alps?",
    options: ["Canterbury Nor'wester", "Southerly Buster", "The Doctor", "Sirocco"],
    correctIndex: 0,
    explanation: "The Nor'wester produces clear skies and high temperatures over Christchurch, accompanied by a distinctive lenticular cloud arch (Nor'west arch).",
    status: "published"
  },
  {
    id: "oc-h-17",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the supervolcanic eruption of Lake Taupo roughly 25,600 years ago that ejected over 1,170 cubic kilometers of pumice and ash, the world's most recent VEI 8 eruption?",
    options: ["Hatepe eruption", "Oruanui eruption", "Tarawera eruption", "Toba eruption"],
    correctIndex: 1,
    explanation: "The Oruanui eruption blanketed most of the North Island in ignimbrite up to 200 meters deep and caused the caldera collapse that created Lake Taupo.",
    status: "published"
  },
  {
    id: "oc-h-18",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What violent eruption of Lake Taupo around 232 CE was so explosive that Roman and Han dynasty Chinese chroniclers recorded unusual red sunsets and skies?",
    options: ["Oruanui eruption", "Hatepe eruption (Taupo eruption)", "Tarawera eruption", "Krakatoa"],
    correctIndex: 1,
    explanation: "The Hatepe eruption generated an ultra-plinian column reaching 50 km in height and pyroclastic flows traveling at 700 km/h across the North Island.",
    status: "published"
  },
  {
    id: "oc-h-19",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What famous natural silica sinter terraces near Rotorua, regarded as the 'Eighth Wonder of the World', were destroyed by the 1886 eruption of Mount Tarawera?",
    options: ["White Terraces and Pamukkale", "Pink and White Terraces (Otukapuarangi and Te Otukapuarangi)", "Yellowstone Terraces", "Badab-e Surt"],
    correctIndex: 1,
    explanation: "The cascading pink and white silica terraces were submerged and shattered when Lake Rotomahana exploded in a violent basaltic phreatomagmatic eruption.",
    status: "published"
  },
  {
    id: "oc-h-20",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What geothermal lake in the Waimangu Volcanic Rift Valley of New Zealand is the largest hot-water spring in the world by surface area (38,000 square meters)?",
    options: ["Champagne Pool", "Frying Pan Lake", "Inferno Crater Lake", "Boiling Lake"],
    correctIndex: 1,
    explanation: "Frying Pan Lake maintains an average water temperature of roughly 55°C, occupying the Echo Crater created in the 1886 Tarawera eruption.",
    status: "published"
  },
  {
    id: "oc-h-21",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What geothermal feature in Wai-O-Tapu, New Zealand, is famous for bubbling carbon dioxide gas and a vivid orange sinter ring rich in antimony and arsenic minerals?",
    options: ["Devil's Bath", "Champagne Pool", "Artist's Palette", "Opal Pool"],
    correctIndex: 1,
    explanation: "Champagne Pool was formed 900 years ago by a hydrothermal eruption, named for continuous effervescence of CO2 bubbles like champagne.",
    status: "published"
  },
  {
    id: "oc-h-22",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the average strike-slip displacement rate along the Alpine Fault on New Zealand's South Island, making it one of the most rapidly moving transform boundaries on Earth?",
    options: ["5 mm/year", "27 mm/year (dextral strike-slip)", "75 mm/year", "2 mm/year"],
    correctIndex: 1,
    explanation: "The Alpine Fault accommodates roughly 75% of the total plate motion between the Australian and Pacific plates, generating magnitude ~8 earthquakes roughly every 300 years.",
    status: "published"
  },
  {
    id: "oc-h-23",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "Which major subduction margin off the east coast of New Zealand's North Island is capable of generating magnitude 8.5+ megathrust earthquakes and trans-Pacific tsunamis?",
    options: ["Puysegur Trench", "Hikurangi Subduction Zone", "Kermadec Trench", "Tonga Trench"],
    correctIndex: 1,
    explanation: "The Hikurangi Trench marks where the oceanic Hikurangi Plateau (part of the Pacific Plate) subducts beneath the continental North Island.",
    status: "published"
  },
  {
    id: "oc-h-24",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the unique deep-sea geological feature off Kaikōura, New Zealand, where a submarine canyon plunges to 1,000 meters depth just 500 meters from the coastline?",
    options: ["Milford Trench", "Kaik\u014dura Canyon", "Cook Chasm", "Tasman Trench"],
    correctIndex: 1,
    explanation: "Deep upwelling along Kaikōura Canyon brings nutrient-rich waters that sustain a permanent population of giant sperm whales and dusky dolphins.",
    status: "published"
  },
  {
    id: "oc-h-25",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the geological significance of Macquarie Island, an Australian subantarctic territory located midway between Tasmania and Antarctica?",
    options: ["It is the world's largest coral atoll", "It is the only place on Earth where rocks from the Earth's oceanic mantle are actively exposed above sea level", "It is the lowest-latitude place with permanent permafrost", "It was formed entirely from a sunken continent"],
    correctIndex: 1,
    explanation: "Macquarie Island was uplifted along the Macquarie Ridge plate boundary, exposing a complete ophiolite sequence of oceanic crust and mantle peridotites.",
    status: "published"
  },
  {
    id: "oc-h-26",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the annual biological migration on Australia's Christmas Island in the Indian Ocean where an estimated 40 to 50 million individuals march from rainforest to the sea?",
    options: ["Robber crab migration", "Christmas Island red crab (Gecarcoidea natalis) migration", "Coconut crab migration", "Hermit crab migration"],
    correctIndex: 1,
    explanation: "Triggered by the first rains of the wet season, red crabs cross roads and cliffs to mate and release eggs into the sea at high tide.",
    status: "published"
  },
  {
    id: "oc-h-27",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "Which coral atoll territory of Australia in the Indian Ocean provided Charles Darwin in 1836 with the critical field evidence for his subsidence theory of coral atolls?",
    options: ["Christmas Island", "Cocos (Keeling) Islands", "Ashmore Reef", "Rowley Shoals"],
    correctIndex: 1,
    explanation: "Darwin visited the South Keeling Islands aboard HMS Beagle, confirming that barrier reefs and atolls form as underlying volcanic islands slowly subside.",
    status: "published"
  },
  {
    id: "oc-h-28",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the highest mountain peak on the island of New Guinea and the highest peak in Oceania, rising to 4,884 meters in Papua, Indonesia?",
    options: ["Mount Wilhelm", "Puncak Jaya (Carstensz Pyramid)", "Puncak Mandala", "Mount Giluwe"],
    correctIndex: 1,
    explanation: "Puncak Jaya is the highest island peak in the world and one of the Seven Summits, flanked by the massive Grasberg copper-gold mine.",
    status: "published"
  },
  {
    id: "oc-h-29",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What massive open-pit and underground mine near Puncak Jaya in New Guinea holds the world's largest recoverable gold reserve and second-largest copper reserve?",
    options: ["Ok Tedi Mine", "Grasberg Mine", "Panguna Mine", "Porgera Mine"],
    correctIndex: 1,
    explanation: "Operated by Freeport-McMoRan, Grasberg sits at over 4,000 meters elevation in the Sudirman Range of western New Guinea.",
    status: "published"
  },
  {
    id: "oc-h-30",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the traditional indigenous Papuan cultural group in the Southern Highlands of PNG famous for creating ceremonial wigs from their own hair decorated with bird-of-paradise feathers?",
    options: ["Asmat", "Huli Wigmen", "Dani", "Korowai"],
    correctIndex: 1,
    explanation: "Huli boys live in seclusion in wig schools for 18 months, cultivating ritual hair that is cut and fashioned into woven ceremonial headwear.",
    status: "published"
  },
  {
    id: "oc-h-31",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What body of water between Guadalcanal, Savo Island, and the Florida Islands in the Solomons was named for the dozens of Allied and Japanese ships sunk during 1942 naval battles?",
    options: ["Coral Sea", "Ironbottom Sound (Savo Sound)", "Manning Strait", "Vella Gulf"],
    correctIndex: 1,
    explanation: "Nearly 50 warships and hundreds of aircraft were sunk in Ironbottom Sound during the fierce six-month Guadalcanal campaign.",
    status: "published"
  },
  {
    id: "oc-h-32",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the world's largest raised coral atoll, located in the southern Solomon Islands and home to Lake Tegano, the largest lake in insular Oceania?",
    options: ["Nauru", "Rennell Island (East Rennell)", "Niue", "Makatea"],
    correctIndex: 1,
    explanation: "East Rennell is a UNESCO World Heritage site, containing Lake Tegano which occupies the former saltwater lagoon of the uplifted atoll.",
    status: "published"
  },
  {
    id: "oc-h-33",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What cataclysmic submarine volcanic eruption in Vanuatu around 1452 CE created an 8-by-12-kilometer caldera, splitting a single ancient island into Epi and Tongoa and triggering global crop failures?",
    options: ["Santorini", "Kuwae", "Tambora", "Krakatoa"],
    correctIndex: 1,
    explanation: "The Kuwae eruption ejected over 35 cubic kilometers of magma (VEI 6), documented in ice core sulfate peaks and Chinese Ming dynasty famine records.",
    status: "published"
  },
  {
    id: "oc-h-34",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the 100-kilometer-long barrier reef encircling Kadavu Island in southern Fiji, recognized as one of the largest continuous barrier reefs in the world?",
    options: ["Great Barrier Reef", "Great Astrolabe Reef", "New Caledonia Reef", "Ningaloo Reef"],
    correctIndex: 1,
    explanation: "Named after Dumont d'Urville's vessel Astrolabe, the reef is renowned for steep underwater drop-offs, manta ray cleaning stations, and hard corals.",
    status: "published"
  },
  {
    id: "oc-h-35",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the monumental 12-ton limestone trilithon on Tongatapu, Tonga, built around 1200 CE by Tu'i Tātatui, aligned precisely with the summer solstice sunrise?",
    options: ["Nan Madol", "Ha'amonga 'a Maui ('Burden of Maui')", "Moai Ahu", "Lelu Ruins"],
    correctIndex: 1,
    explanation: "The Ha'amonga 'a Maui consists of two vertical coralline limestone pillars supporting an 8-ton horizontal mortised lintel stone.",
    status: "published"
  },
  {
    id: "oc-h-36",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What island in the central Ha'apai group of Tonga was the site of the famous Mutiny on the Bounty on April 28, 1789, where Fletcher Christian seized control from Captain Bligh?",
    options: ["Tongatapu", "Tofua Island", "Eua", "Nomuka"],
    correctIndex: 1,
    explanation: "Bligh and 18 loyal crewmen were cast adrift in an open launch near Tofua, navigating 6,700 km across open ocean to Timor in an epic feat of seamanship.",
    status: "published"
  },
  {
    id: "oc-h-37",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the name of the sheer 276-meter basalt lava plug and landmark cliff overlooking Kolonia harbor on the island of Pohnpei, FSM?",
    options: ["Mount Temwetenzkir", "Sokehs Rock", "Mount Ngerchelchuus", "Mount Silisili"],
    correctIndex: 1,
    explanation: "Sokehs Rock was the site of the 1910 Sokehs Rebellion against German colonial authorities on Pohnpei.",
    status: "published"
  },
  {
    id: "oc-h-38",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the highest mountain peak in the Republic of Palau, rising to 242 meters on the volcanic island of Babeldaob?",
    options: ["Mount Popomanaseu", "Mount Ngerchelchuus", "Mount Wilhelm", "Mount Tomanivi"],
    correctIndex: 1,
    explanation: "Mount Ngerchelchuus sits along the boundary of Ngardmau and Ngaremlengui states, surrounded by Palau's oldest primary rainforests.",
    status: "published"
  },
  {
    id: "oc-h-39",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What are the traditional stick charts (such as Rebbelib, Meddo, and Mattang) developed by ancient Marshallese navigators used for?",
    options: ["Astrological constellations only", "Mapping ocean swell patterns, wave refraction around atolls, and navigational currents", "Recording family genealogies", "Land property boundaries on atolls"],
    correctIndex: 1,
    explanation: "Made of curved coconut frond ribs and small cowrie shells, stick charts allowed navigators to detect islands by interpreting subtle swells invisible to modern sailors.",
    status: "published"
  },
  {
    id: "oc-h-40",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "Why is Kiritimati (Christmas Island) in Kiribati famous among global time zones?",
    options: ["It sits on the Prime Meridian", "It is located in the UTC+14:00 time zone, making it the first inhabited land to experience each new calendar day and year", "It does not observe leap years", "It has four different time zones on a single island"],
    correctIndex: 1,
    explanation: "In 1995, Kiribati moved the International Date Line to unify its nation's workweek, creating UTC+14:00 at the Line Islands.",
    status: "published"
  },
  {
    id: "oc-h-41",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the highest mountain peak in New Caledonia, rising to 1,628 meters in the Chaîne Centrale on Grande Terre?",
    options: ["Mont Humboldt", "Mont Pani\u00e9", "Mount Otemanu", "Mount Popomanaseu"],
    correctIndex: 1,
    explanation: "Mont Panié is covered in cloud forest protecting relict flora including ancient Agathis montana kauri pines.",
    status: "published"
  },
  {
    id: "oc-h-42",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the ancient relict conifer discovered in a remote sandstone canyon in Wollemi National Park, New South Wales, in 1994, previously known only from 150-million-year-old fossils?",
    options: ["Huon pine", "Wollemi Pine (Wollemia nobilis)", "Norfolk pine", "Bunya pine"],
    correctIndex: 1,
    explanation: "The Wollemi pine is a living fossil; fewer than 100 wild adult trees survive in secluded canyons, protected from bushfires by specialized sprinkler systems.",
    status: "published"
  },
  {
    id: "oc-h-43",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What native Australian conifer native to the Bunya Mountains in Queensland produces massive cones weighing up to 10 kg, historically gathered for ancestral Aboriginal feasts?",
    options: ["Wollemi pine", "Bunya Pine (Araucaria bidwillii)", "Hoop pine", "Kauri pine"],
    correctIndex: 1,
    explanation: "Every three years, indigenous nations gathered from across eastern Australia for sacred Bunya festivals to harvest nutritious starchy bunya nuts.",
    status: "published"
  },
  {
    id: "oc-h-44",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the unique physiological adaptation of the desert-dwelling Thorny Devil lizard (Moloch horridus) in the Australian Outback for drinking water?",
    options: ["It extracts water entirely from cactus fruits", "Capillary action in microscopic grooves between its thorny scales channels dew and rainwater directly to its mouth", "It absorbs water through its cloaca", "It can survive indefinitely without water"],
    correctIndex: 1,
    explanation: "Moisture landing on any part of the thorny devil's skin is drawn automatically through skin grooves to the corners of its mouth by capillary tension.",
    status: "published"
  },
  {
    id: "oc-h-45",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the only living representative of the ancient reptile order Rhynchocephalia, endemic to predator-free offshore islands of New Zealand, possessing a functional third 'parietal eye'?",
    options: ["Gecko", "Tuatara (Sphenodon punctatus)", "Skink", "Goanna"],
    correctIndex: 1,
    explanation: "Tuatara diverged from other reptiles over 200 million years ago, possessing a light-sensitive parietal eye atop their skulls used to regulate circadian rhythms.",
    status: "published"
  },
  {
    id: "oc-h-46",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the giant flightless rail endemic to the Murchison Mountains of New Zealand's South Island, thought extinct for 50 years until rediscovered in 1948 by Geoffrey Orbell?",
    options: ["K\u0101k\u0101p\u014d", "Takah\u0113 (Porphyrio hochstetteri)", "Moa", "Weka"],
    correctIndex: 1,
    explanation: "Takahē are large, colorful alpine birds that feed on snow tussock grasses; captive breeding has restored populations in protected sanctuaries.",
    status: "published"
  },
  {
    id: "oc-h-47",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What extinct order of colossal flightless ratite birds endemic to New Zealand included Dinornis robustus, which reached up to 3.6 meters in height?",
    options: ["Elephant bird", "Moa", "Dodo", "Gastornis"],
    correctIndex: 1,
    explanation: "Moa were the dominant herbivores in New Zealand for millions of years until hunted to extinction within roughly 150 years of Māori settlement around 1300–1400 CE.",
    status: "published"
  },
  {
    id: "oc-h-48",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What colossal bird of prey was the apex predator of prehistoric New Zealand, with a wingspan up to 3 meters, specialized in hunting giant moa?",
    options: ["Wedge-tailed eagle", "Haast's Eagle (Hieraaetus moorei)", "White-bellied sea eagle", "Harpy eagle"],
    correctIndex: 1,
    explanation: "Haast's eagle was the largest eagle known to have existed, diving at speeds up to 80 km/h to strike moa with massive talons before going extinct alongside its prey.",
    status: "published"
  },
  {
    id: "oc-h-49",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the critically endangered, flightless nocturnal bird endemic to the island of New Caledonia, known for a prominent feather crest and dog-like barking calls?",
    options: ["Kiwi", "Kagu (Rhynochetos jubatus)", "Takah\u0113", "Cassowary"],
    correctIndex: 1,
    explanation: "The kagu is the sole surviving species of its family (Rhynochetidae), adapted to foraging for worms on the forest floor of Grande Terre.",
    status: "published"
  },
  {
    id: "oc-h-50",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the venomous mammal native to eastern Australia whose males possess sharp calcaneus spurs on their hind legs capable of delivering incapacitating venom?",
    options: ["Echidna", "Male Platypus (Ornithorhynchus anatinus)", "Water rat", "Tasmanian devil"],
    correctIndex: 1,
    explanation: "The platypus spur delivers crural venom during the spring mating season, causing excruciating, long-lasting pain that cannot be alleviated by morphine.",
    status: "published"
  },
  {
    id: "oc-h-51",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the sensory capability of the platypus bill that allows it to hunt prey in murky river bottoms with its eyes, ears, and nostrils closed?",
    options: ["Echolocation", "Electroreception (detecting electrical impulses of muscular contractions)", "Thermal infrared sensing", "Magnetic resonance navigation"],
    correctIndex: 1,
    explanation: "The bill contains 40,000 electroreceptors and 60,000 mechanoreceptors, allowing the platypus to locate shrimp and insect larvae through bioelectric fields.",
    status: "published"
  },
  {
    id: "oc-h-52",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "Which Australian state or territory contains the Ediacara Hills, where geologist Reginald Sprigg discovered the earliest fossilized evidence of multicellular animal life (550 million years old)?",
    options: ["Western Australia", "South Australia (Flinders Ranges)", "Northern Territory", "Queensland"],
    correctIndex: 1,
    explanation: "The Ediacaran biota (including Dickinsonia and Spriggina) led geologists to formally create the Ediacaran Geological Period in 2004.",
    status: "published"
  },
  {
    id: "oc-h-53",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What fossilized organism from the Ediacara Hills in South Australia was confirmed in 2018 to be an animal by discovering preserved cholesterol fat molecules in its tissue?",
    options: ["Spriggina", "Dickinsonia costata", "Tribrachidium", "Kimberella"],
    correctIndex: 1,
    explanation: "Dickinsonia was an oval ribbed organism up to 1.4 meters long that lived on microbial seafloor mats 558 million years ago.",
    status: "published"
  },
  {
    id: "oc-h-54",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the UNESCO World Heritage site in northwestern Queensland famous for preserving exceptionally intact fossils of Australian prehistoric megafauna from the Oligocene and Miocene epochs?",
    options: ["Naracoorte Caves", "Riversleigh Fossil Site", "Ediacara Hills", "Dinosaur Stampede (Lark Quarry)"],
    correctIndex: 1,
    explanation: "Riversleigh preserves freshwater limestone fossils of giant carnivorous kangaroos, marsupial lions (Thylacoleo), and freshwater crocodiles.",
    status: "published"
  },
  {
    id: "oc-h-55",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What UNESCO World Heritage cave complex in South Australia contains pitfall fossil deposits that trapped Pleistocene megafauna like the giant wombat Diprotodon and Thylacoleo?",
    options: ["Riversleigh", "Naracoorte Caves National Park", "Jenolan Caves", "Buchan Caves"],
    correctIndex: 1,
    explanation: "Victoria Fossil Cave in Naracoorte contains thousands of bones accumulated over 500,000 years in sinkholes.",
    status: "published"
  },
  {
    id: "oc-h-56",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What was the largest marsupial known to have ever lived, a rhinoceros-sized herbivore that roamed Pleistocene Australia until roughly 44,000 years ago?",
    options: ["Procoptodon", "Diprotodon optatum (Giant Wombat)", "Thylacoleo carnifex", "Zygomaturus"],
    correctIndex: 1,
    explanation: "Diprotodon stood 2 meters tall at the shoulder and weighed nearly 2.8 tons, inhabiting open woodlands across continental Australia.",
    status: "published"
  },
  {
    id: "oc-h-57",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What was the apex marsupial predator of Pleistocene Australia, known as the 'marsupial lion', possessing devastating scissor-like carnassial teeth and retractile claws?",
    options: ["Thylacine", "Thylacoleo carnifex", "Sarcophilus laniarius", "Varanus priscus"],
    correctIndex: 1,
    explanation: "Thylacoleo was an ambush predator capable of climbing trees, possessing the strongest bite relative to body size of any known mammal.",
    status: "published"
  },
  {
    id: "oc-h-58",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What giant extinct monitor lizard of Pleistocene Australia reached lengths of 5 to 7 meters, making it the largest terrestrial venomous vertebrate known to science?",
    options: ["Komodo dragon", "Megalania (Varanus priscus)", "Perentie", "Quinkana"],
    correctIndex: 1,
    explanation: "Megalania preyed upon giant marsupials like Diprotodon before vanishing during the Late Pleistocene megafaunal extinction.",
    status: "published"
  },
  {
    id: "oc-h-59",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What archaeological site in Victoria, Australia, preserves the world's oldest and most extensive aquaculture system, where Gunditjmara people engineered volcanic stone channels and weirs to farm short-finned eels?",
    options: ["Lake Mungo", "Budj Bim Cultural Landscape", "Koonalda Cave", "Murujuga"],
    correctIndex: 1,
    explanation: "Budj Bim was engineered over 6,600 years ago using basalt lava flows, designated a UNESCO World Heritage cultural landscape in 2019.",
    status: "published"
  },
  {
    id: "oc-h-60",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What dried lakebed in southwestern New South Wales yielded the cremated remains of 'Mungo Lady' and 'Mungo Man', establishing human occupation in Australia dating back at least 42,000 years?",
    options: ["Lake Eyre", "Lake Mungo (Willandra Lakes)", "Lake Torrens", "Lake Frome"],
    correctIndex: 1,
    explanation: "Mungo Lady represents the oldest known ritual human cremation in the world, discovered by Jim Bowler in 1968.",
    status: "published"
  },
  {
    id: "oc-h-61",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What peninsula in Western Australia contains Murujuga (Burrup Peninsula), hosting the largest and most dense concentration of ancient petroglyphs in the world (over 1 million rock carvings)?",
    options: ["Dampier Peninsula", "Murujuga (Burrup Peninsula)", "Cobourg Peninsula", "Peron Peninsula"],
    correctIndex: 1,
    explanation: "Murujuga's petroglyphs date back over 40,000 years, depicting extinct animals like the thylacine and fat-tailed kangaroos on granophyre rocks.",
    status: "published"
  },
  {
    id: "oc-h-62",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the name of the prehistoric landmass that connected Australia, Tasmania, and New Guinea during Pleistocene glacial low sea levels?",
    options: ["Sundaland", "Sahul (Meganesia)", "Wallacea", "Zealandia"],
    correctIndex: 1,
    explanation: "Sahul existed whenever global sea levels dropped by more than 50 meters, separated from the Asian Sunda shelf by the deep waters of Wallacea.",
    status: "published"
  },
  {
    id: "oc-h-63",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What famous biogeographical boundary line drawn through the Indonesian archipelago separates the Asian placental fauna of Borneo from the Wallacean and Australian marsupial fauna?",
    options: ["Lydekker's Line", "Wallace Line", "Weber's Line", "Huxley's Line"],
    correctIndex: 1,
    explanation: "Identified by Alfred Russel Wallace in 1859, the line runs through the deep Lombok Strait between Bali and Lombok.",
    status: "published"
  },
  {
    id: "oc-h-64",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What biogeographic boundary marks the eastern limit of Wallacea, delineating the western margin of the Sahul continental shelf (Australia and New Guinea)?",
    options: ["Wallace Line", "Lydekker's Line", "Weber's Line", "Sunda Line"],
    correctIndex: 1,
    explanation: "Lydekker's Line represents the strict biogeographic boundary of pure Australian marsupial and monotreme fauna.",
    status: "published"
  },
  {
    id: "oc-h-65",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the deepest point in the Coral Sea, descending to 9,140 meters in the subduction trench off the Solomon Islands?",
    options: ["San Cristobal Trench (Bougainville Trench)", "Planier Deep", "Capricorn Deep", "Townsville Trough"],
    correctIndex: 0,
    explanation: "The Bougainville/San Cristobal Trench marks the active subduction boundary between the Solomon Sea Plate and the Pacific Plate.",
    status: "published"
  },
  {
    id: "oc-h-66",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What tectonic microplate under the Bismarck Sea in Papua New Guinea has the fastest seafloor spreading rate on Earth (over 24 cm per year)?",
    options: ["North Bismarck Plate", "Woodlark Plate", "Manus Plate", "Solomon Sea Plate"],
    correctIndex: 1,
    explanation: "The Woodlark Basin east of New Guinea displays rapid continental rifting opening into active seafloor spreading.",
    status: "published"
  },
  {
    id: "oc-h-67",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What unique metamorphic geological feature in the D'Entrecasteaux Islands of Papua New Guinea represents the youngest known subaerially exposed metamorphic core complexes on Earth?",
    options: ["Goodenough and Fergusson domes", "Mount Wilhelm peaks", "Bismarck granites", "Owen Stanley schist"],
    correctIndex: 0,
    explanation: "Extensional faulting in the Woodlark rift pulled lower crustal eclogite and granulite rocks to the surface within the past 5 million years.",
    status: "published"
  },
  {
    id: "oc-h-68",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What major river in New Zealand became the first watercourse in the world to be granted legal personhood status in 2017, recognized as an indivisible living ancestor (Te Awa Tupua)?",
    options: ["Waikato River", "Whanganui River", "Clutha River", "Rakaia River"],
    correctIndex: 1,
    explanation: "Under the Te Awa Tupua Act 2017, the Whanganui River has the rights, powers, duties, and liabilities of a legal person, represented by appointed guardians.",
    status: "published"
  },
  {
    id: "oc-h-69",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What national park on New Zealand's North Island, formerly known as Te Urewera National Park, was dissolved in 2014 and declared an independent legal entity with human-like legal rights?",
    options: ["Tongariro", "Te Urewera", "Egmont", "Whanganui"],
    correctIndex: 1,
    explanation: "Te Urewera is the ancestral homeland of the Tūhoe people, managed by a joint board for its own preservation.",
    status: "published"
  },
  {
    id: "oc-h-70",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the highest waterfall in New Zealand, dropping 580 meters in three cascading tiers near Milford Sound?",
    options: ["Bridal Veil Falls", "Sutherland Falls", "Bowen Falls", "Stirling Falls"],
    correctIndex: 1,
    explanation: "Sutherland Falls drains Lake Quill along the Milford Track, discovered by Scottish prospector Donald Sutherland in 1880.",
    status: "published"
  },
  {
    id: "oc-h-71",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the deepest cave system in the Southern Hemisphere, descending to 1,215 meters in Mount Arthur in Kahurangi National Park, New Zealand?",
    options: ["Bulmer Cavern", "Nettlebed Cave / Ellis Basin System", "Harwood Hole", "Waitomo"],
    correctIndex: 1,
    explanation: "Ellis Basin and Nettlebed cave systems cut through Ordovician Arthur Marble in northwest Nelson.",
    status: "published"
  },
  {
    id: "oc-h-72",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What vertical shaft in Kahurangi National Park, New Zealand, is the deepest open vertical cave shaft in the country, dropping 183 meters in a single sheer drop?",
    options: ["Harwood Hole", "Bulmer Cavern", "Waitomo Shaft", "Raukokore Pit"],
    correctIndex: 0,
    explanation: "Harwood Hole sits on Takaka Hill, where cavers abseil down into subterranean limestone passages connecting to Starlight Cave.",
    status: "published"
  },
  {
    id: "oc-h-73",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What freshwater springs in Golden Bay on New Zealand's South Island discharge roughly 14,000 liters of water per second with horizontal underwater visibility exceeding 63 meters?",
    options: ["Hamurana Springs", "Te Waikoropup\u016b Springs (Pup\u016b Springs)", "Rainbow Springs", "Otumuheke"],
    correctIndex: 1,
    explanation: "Te Waikoropupū Springs are the largest freshwater springs in New Zealand, featuring water clarity nearly matching that of pure distilled water.",
    status: "published"
  },
  {
    id: "oc-h-74",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the high-salinity blue hole in Espiritu Santo, Vanuatu, renowned as one of the clearest and most vivid natural freshwater swimming holes on Earth?",
    options: ["To Sua", "Nanda Blue Hole (Jackie's Blue Hole)", "Dean's Blue Hole", "Great Blue Hole"],
    correctIndex: 1,
    explanation: "Espiritu Santo's blue holes are fed by underground rivers filtered through ancient coral limestone, emerging in saturated turquoise pools.",
    status: "published"
  },
  {
    id: "oc-h-75",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What isolated oceanic reef system belonging to Australia in the Timor Sea sits roughly 320 km off the Kimberley coast, famous for three pristine coral atolls (Mermaid, Clerke, and Imperieuse)?",
    options: ["Ashmore Reef", "Rowley Shoals", "Scott Reef", "Cartier Island"],
    correctIndex: 1,
    explanation: "Rowley Shoals rise almost vertically from 400-meter-deep waters on the continental shelf edge, experiencing 5-meter tidal shifts.",
    status: "published"
  },
  {
    id: "oc-h-76",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "Which isolated Australian coral atoll territory in the Timor Sea is protected as a marine park and subject to a historic 1974 MOU permitting traditional Indonesian subsistence fishermen?",
    options: ["Rowley Shoals", "Ashmore Reef (Ashmore and Cartier Islands)", "Cocos Islands", "Heard Island"],
    correctIndex: 1,
    explanation: "Indonesian perahu fishermen have visited Ashmore Reef (Pulau Pasir) for centuries to harvest sea cucumbers (trepang) and trochus shells.",
    status: "published"
  },
  {
    id: "oc-h-77",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the name of the submerged carbonate bank in the Timor Sea that experienced Australia's worst offshore oil disaster in 2009 when the Montara well blew out?",
    options: ["Rowley Shoals", "Montara / Vulcan Sub-basin", "Exmouth Plateau", "Browse Basin"],
    correctIndex: 1,
    explanation: "The Montara blowout leaked thousands of barrels of oil and gas daily for 74 days into the Timor Sea, spreading towards Indonesian fishing waters.",
    status: "published"
  },
  {
    id: "oc-h-78",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the massive offshore natural gas extraction basin off the northwest coast of Western Australia that supplies the Gorgon and Wheatstone LNG plants?",
    options: ["Bass Basin", "Carnarvon Basin (Greater Gorgon Area)", "Gippsland Basin", "Otway Basin"],
    correctIndex: 1,
    explanation: "The Carnarvon Basin contains major Triassic sandstone gas fields, making Western Australia one of the world's leading exporters of liquefied natural gas.",
    status: "published"
  },
  {
    id: "oc-h-79",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What island off the Pilbara coast of Western Australia is the site of the massive Gorgon LNG processing facility while simultaneously operating as an A-class nature reserve for endangered marsupials?",
    options: ["Rottnest Island", "Barrow Island", "Dirk Hartog Island", "Dampier Island"],
    correctIndex: 1,
    explanation: "Barrow Island harbors populations of golden bandicoots, spectacled hare-wallabies, and burrowing bettongs under strict quarantine protocols.",
    status: "published"
  },
  {
    id: "oc-h-80",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the oldest known surviving astronomical arrangement on Earth, located in Victoria, Australia, consisting of roughly 90 basalt stones arranged by Aboriginal people over 11,000 years ago?",
    options: ["Stonehenge", "Wurdi Youang stone arrangement", "Nabta Playa", "Goseck circle"],
    correctIndex: 1,
    explanation: "The egg-shaped stone arrangement at Wurdi Youang aligns accurately with the setting sun at the summer solstice, winter solstice, and equinoxes.",
    status: "published"
  },
  {
    id: "oc-h-81",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the name of the subterranean thermal river and cave system in the Northern Territory where tourists float on inflatable tubes in 34°C geothermal waters?",
    options: ["Katherine Gorge", "Bitter Springs (Mataranka)", "Zebra Trench", "Berry Springs"],
    correctIndex: 1,
    explanation: "Bitter Springs discharges crystal-clear thermal water through a palm-fringed paperbark forest in Elsey National Park.",
    status: "published"
  },
  {
    id: "oc-h-82",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the dramatic sandstone gorge system carved by the Katherine River through Nitmiluk National Park in the Northern Territory?",
    options: ["Karijini", "Nitmiluk Gorge (Katherine Gorge)", "Carnarvon Gorge", "Kings Canyon"],
    correctIndex: 1,
    explanation: "Nitmiluk consists of 13 separate gorges separated by rocky rapids, sacred to the Jawoyn Aboriginal people.",
    status: "published"
  },
  {
    id: "oc-h-83",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What 223-kilometer long-distance walking trail follows the crest of the West MacDonnell Ranges from Alice Springs to Mount Sonder (Rwetyepme)?",
    options: ["Overland Track", "Larapinta Trail", "Heysen Trail", "Bibbulmun Track"],
    correctIndex: 1,
    explanation: "The Larapinta Trail is divided into 12 sections, taking trekkers across ridgelines, Ormiston Gorge, and ancient desert riverbeds.",
    status: "published"
  },
  {
    id: "oc-h-84",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What 1,200-kilometer long-distance walking trail in South Australia runs from Cape Jervis on the Fleurieu Peninsula through the Flinders Ranges to Parachilna Gorge?",
    options: ["Bibbulmun Track", "Heysen Trail", "Larapinta Trail", "Hume and Hovell Track"],
    correctIndex: 1,
    explanation: "Named after landscape artist Sir Hans Heysen, the trail passes through coastal dairy pastures, the Barossa Valley, and Wilpena Pound.",
    status: "published"
  },
  {
    id: "oc-h-85",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What 1,000-kilometer walking trail in Western Australia stretches from Kalamunda near Perth to the historic whaling town of Albany through southwest jarrah and karri forests?",
    options: ["Heysen Trail", "Bibbulmun Track", "Cape to Cape Track", "Larapinta Trail"],
    correctIndex: 1,
    explanation: "The Bibbulmun Track passes through towering karri trees in the Valley of the Giants and windswept Southern Ocean coastal cliffs.",
    status: "published"
  },
  {
    id: "oc-h-86",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the colossal eucalyptus tree species endemic to the high-rainfall southwest corner of Western Australia that can reach heights over 80 meters?",
    options: ["Jarrah", "Karri (Eucalyptus diversicolor)", "Marri", "Tuart"],
    correctIndex: 1,
    explanation: "Karri trees require deep red loamy soils, historically climbed via spiraling metal peg ladders like the Dave Evans Bicentennial Tree (75 m).",
    status: "published"
  },
  {
    id: "oc-h-87",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the tallest flowering plant (angiosperm) on Earth, native to the cool, moist mountain forests of Victoria and Tasmania, growing to over 100 meters?",
    options: ["Coast Redwood", "Mountain Ash (Eucalyptus regnans)", "Douglas fir", "Karri"],
    correctIndex: 1,
    explanation: "Eucalyptus regnans (swamp gum / mountain ash) holds the record for tallest hardwood tree, with historic specimens rivaling California redwoods.",
    status: "published"
  },
  {
    id: "oc-h-88",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the massive inland sand dune desert in eastern Western Australia named after the naturalist who financed Ernest Giles's 1876 expedition?",
    options: ["Great Sandy", "Gibson Desert", "Tanami", "Simpson"],
    correctIndex: 1,
    explanation: "The Gibson Desert covers 156,000 square kilometers, characterized by lateritic buckshot plains, mulga scrub, and spinifex.",
    status: "published"
  },
  {
    id: "oc-h-89",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the extensive tropical savanna grassland plain in central-northern Queensland and the Northern Territory famous for black soil plains and beef cattle grazing?",
    options: ["Nullarbor Plain", "Barkly Tableland", "Channel Country", "Hay Plain"],
    correctIndex: 1,
    explanation: "The Barkly Tableland covers 283,000 square kilometers, dominated by nutritious Mitchell grass (Astrebla) supported by cracking clay soils.",
    status: "published"
  },
  {
    id: "oc-h-90",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the massive iron-stained sand canyon in Watarrka National Park in the Northern Territory, featuring 100-meter sheer sandstone walls and the lush 'Garden of Eden' pool?",
    options: ["Standley Chasm", "Kings Canyon (Watarrka)", "Simpsons Gap", "Ormiston Gorge"],
    correctIndex: 1,
    explanation: "Kings Canyon features domed sandstone beehive formations known as the 'Lost City' and cycad-filled microclimates.",
    status: "published"
  },
  {
    id: "oc-h-91",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the largest living reptile in the world, inhabiting tidal estuaries, mangrove swamps, and coastal rivers across northern Australia, New Guinea, and the Solomon Islands?",
    options: ["American alligator", "Saltwater Crocodile (Crocodylus porosus)", "Nile crocodile", "Gharial"],
    correctIndex: 1,
    explanation: "Male saltwater crocodiles can exceed 6 meters in length and weigh over 1,000 kg, capable of cruising hundreds of kilometers in open ocean.",
    status: "published"
  },
  {
    id: "oc-h-92",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the most venomous snake in the world based on median lethal dose (LD50), native to the black soil plains of the Channel Country in arid Queensland and South Australia?",
    options: ["Eastern brown snake", "Inland Taipan (Fierce Snake / Oxyuranus microlepidotus)", "Coastal taipan", "King cobra"],
    correctIndex: 1,
    explanation: "A single bite from an inland taipan contains enough neurotoxic and myotoxic venom to kill over 100 adult humans, adapted to hunting desert rodents.",
    status: "published"
  },
  {
    id: "oc-h-93",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What deadly marine invertebrate found in coastal waters of northern Australia from October to May is considered the most lethal jellyfish in the world?",
    options: ["Portuguese man o' war", "Chironex fleckeri (Sea Wasp / Box Jellyfish)", "Lion's mane jellyfish", "Moon jellyfish"],
    correctIndex: 1,
    explanation: "Chironex fleckeri tentacles carry millions of cnidocytes that inject potent cardiotoxin, causing excruciating pain, cardiac arrest, and death in minutes.",
    status: "published"
  },
  {
    id: "oc-h-94",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What tiny box jellyfish species, with a bell only 1 to 2 cm wide, causes the severe and potentially fatal systemic condition known as Irukandji syndrome?",
    options: ["Chironex fleckeri", "Carukia barnesi (Irukandji Jellyfish)", "Aurelia aurita", "Physalia utriculus"],
    correctIndex: 1,
    explanation: "Carukia barnesi stings cause severe backache, nausea, soaring blood pressure, and a psychological feeling of impending doom.",
    status: "published"
  },
  {
    id: "oc-h-95",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What highly venomous cephalopod found in tide pools and coral reefs across Australia and the Indo-Pacific displays luminous blue rings when agitated and carries tetrodotoxin?",
    options: ["Mimic octopus", "Blue-Ringed Octopus (genus Hapalochlaena)", "Flamboyant cuttlefish", "Giant Pacific octopus"],
    correctIndex: 1,
    explanation: "The blue-ringed octopus harbors symbiotic bacteria in its salivary glands producing deadly tetrodotoxin, which blocks nerve sodium channels.",
    status: "published"
  },
  {
    id: "oc-h-96",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the only species of bear-like nocturnal phalanger marsupial endemic to the canopy of montane rainforests on Sulawesi and the Talaud Islands, representing the westernmost Australasian marsupials?",
    options: ["Cuscus", "Sulawesi Bear Cuscus (Ailurops ursinus)", "Tree-kangaroo", "Sugar glider"],
    correctIndex: 1,
    explanation: "The bear cuscus uses a prehensile tail and slow folivorous habits, surviving west of Wallace's Line on the island of Sulawesi.",
    status: "published"
  },
  {
    id: "oc-h-97",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What group of macropods native to the tropical rainforests of New Guinea and northeastern Queensland have evolved to live in trees rather than hopping on open plains?",
    options: ["Pademelons", "Tree-kangaroos (genus Dendrolagus)", "Bettongs", "Potoroos"],
    correctIndex: 1,
    explanation: "Tree-kangaroos possess long non-prehensile tails for balance, powerful forelimbs for climbing, and rubbery gripping footpads on their hind feet.",
    status: "published"
  },
  {
    id: "oc-h-98",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the extraordinary bird family native almost entirely to the tropical rainforests of New Guinea and northeastern Australia, famed for the most elaborate male courtship displays and plumes in the avian world?",
    options: ["Bowerbirds", "Birds-of-paradise (Paradisaeidae)", "Lyrebirds", "Honeyeaters"],
    correctIndex: 1,
    explanation: "Birds-of-paradise include 45 species characterized by intense sexual selection, displaying kaleidoscopic iridescent capes, wires, and dance rituals.",
    status: "published"
  },
  {
    id: "oc-h-99",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What remarkable avian family endemic to Australia and New Guinea is famous for males constructing elaborate avenue or maypole pavilions (bowers) decorated with bright blue plastic, berries, and shells to court females?",
    options: ["Lyrebirds", "Bowerbirds (Ptilonorhynchidae)", "Birds-of-paradise", "Mound-builders"],
    correctIndex: 1,
    explanation: "Male satin bowerbirds obsessively collect blue objects (bottle caps, flowers, feathers) to decorate symmetrical avenues of twigs to impress visiting females.",
    status: "published"
  },
  {
    id: "oc-h-100",
    continent: "Australia/Oceania",
    difficulty: "Hard",
    question: "What is the largest monitor lizard species native to the Australian continent, growing up to 2.5 meters in length across arid desert gorges and rocky outcrops?",
    options: ["Sand goanna", "Perentie (Varanus giganteus)", "Lace monitor", "Rosenberg's monitor"],
    correctIndex: 1,
    explanation: "The perentie is the fourth-largest living lizard on Earth, an apex predator capable of sprinting at 40 km/h to hunt rabbits, birds, and smaller lizards.",
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
    id: "ant-e-3",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the exact geographical latitude of the Geographic South Pole?",
    options: ["0\u00b0", "66.5\u00b0 South", "90\u00b0 South", "180\u00b0 South"],
    correctIndex: 2,
    explanation: "The Geographic South Pole sits at 90° S latitude, the southernmost point on the Earth's axis of rotation.",
    status: "published"
  },
  {
    id: "ant-e-4",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Who was the Norwegian polar explorer who led the first expedition to reach the Geographic South Pole on December 14, 1911?",
    options: ["Robert Falcon Scott", "Roald Amundsen", "Ernest Shackleton", "Douglas Mawson"],
    correctIndex: 1,
    explanation: "Roald Amundsen and his four companions reached the South Pole using skis and sled dogs, beating Scott's British party by 34 days.",
    status: "published"
  },
  {
    id: "ant-e-5",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Which British naval officer and explorer reached the South Pole in January 1912, tragically perishing alongside his team on the return journey?",
    options: ["Ernest Shackleton", "Captain Robert Falcon Scott", "James Clark Ross", "Edward Wilson"],
    correctIndex: 1,
    explanation: "Scott's Terra Nova Expedition reached the pole on January 17, 1912, only to discover Amundsen's Norwegian tent already pitched.",
    status: "published"
  },
  {
    id: "ant-e-6",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Which Anglo-Irish explorer famously saved all 28 crew members of the Imperial Trans-Antarctic Expedition after their ship Endurance was crushed by ice in 1915?",
    options: ["Robert Falcon Scott", "Sir Ernest Shackleton", "Roald Amundsen", "Frank Wild"],
    correctIndex: 1,
    explanation: "Shackleton led an open-boat voyage across 1,300 km of stormy Southern Ocean in the James Caird from Elephant Island to South Georgia.",
    status: "published"
  },
  {
    id: "ant-e-7",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What was the name of Ernest Shackleton's expedition ship that was trapped and crushed by pack ice in the Weddell Sea in 1915, discovered intact on the seabed in 2022?",
    options: ["Discovery", "Endurance", "Terra Nova", "Aurora"],
    correctIndex: 1,
    explanation: "The Endurance was located in March 2022 by the Endurance22 expedition at a depth of 3,008 meters in remarkably pristine condition.",
    status: "published"
  },
  {
    id: "ant-e-8",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the largest scientific community and research station in Antarctica, operated by the United States on the southern tip of Ross Island?",
    options: ["Amundsen-Scott Station", "McMurdo Station", "Palmer Station", "Casey Station"],
    correctIndex: 1,
    explanation: "McMurdo can accommodate over 1,200 residents during summer, functioning as the primary logistical hub for the US Antarctic Program.",
    status: "published"
  },
  {
    id: "ant-e-9",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the name of the American scientific station situated directly at the Geographic South Pole at an elevation of 2,835 meters atop the ice sheet?",
    options: ["McMurdo Station", "Amundsen-Scott South Pole Station", "Vostok Station", "Concordia Station"],
    correctIndex: 1,
    explanation: "Named in honor of the first two explorers to reach the pole, the elevated modern station was dedicated in 2008.",
    status: "published"
  },
  {
    id: "ant-e-10",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "At which Russian research station in East Antarctica was the lowest naturally occurring surface temperature on Earth (-89.2°C) recorded on July 21, 1983?",
    options: ["Mirny Station", "Vostok Station", "Progress Station", "Novolazarevskaya Station"],
    correctIndex: 1,
    explanation: "Vostok Station sits at 3,488 meters elevation near the South Geomagnetic Pole above the buried freshwater Lake Vostok.",
    status: "published"
  },
  {
    id: "ant-e-11",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the lowest naturally occurring surface temperature ever directly recorded by a ground weather station on Earth?",
    options: ["-67.8\u00b0C (-90.0\u00b0F)", "-78.5\u00b0C (-109.3\u00b0F)", "-89.2\u00b0C (-128.6\u00b0F)", "-98.6\u00b0C (-145.5\u00b0F)"],
    correctIndex: 2,
    explanation: "Recorded at Vostok Station in July 1983, conditions were driven by clear winter skies, high altitude, and lack of oceanic moderating influence.",
    status: "published"
  },
  {
    id: "ant-e-12",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the largest species of penguin in the world, endemic to Antarctica, where males fast for months while incubating a single egg on their feet throughout the dark polar winter?",
    options: ["King Penguin", "Emperor Penguin (Aptenodytes forsteri)", "Gentoo Penguin", "Ad\u00e9lie Penguin"],
    correctIndex: 1,
    explanation: "Emperor penguins stand up to 1.2 meters tall and weigh up to 45 kg, diving to depths over 500 meters beneath sea ice.",
    status: "published"
  },
  {
    id: "ant-e-13",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the second-largest penguin species in the world, recognizable by vivid orange-yellow ear patches, breeding on subantarctic islands like South Georgia?",
    options: ["Emperor Penguin", "King Penguin (Aptenodytes patagonicus)", "Macaroni Penguin", "Chinstrap Penguin"],
    correctIndex: 1,
    explanation: "King penguins breed in massive colonies of hundreds of thousands of birds on subantarctic beaches, with chick cycles taking 14 months.",
    status: "published"
  },
  {
    id: "ant-e-14",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the most widely distributed penguin species along the Antarctic continental coastline, recognizable by a white ring around its eye?",
    options: ["Chinstrap Penguin", "Ad\u00e9lie Penguin (Pygoscelis adeliae)", "Gentoo Penguin", "Rockhopper Penguin"],
    correctIndex: 1,
    explanation: "Named by French explorer Dumont d'Urville after his wife Adèle, these penguins build shoreline nests out of pebbles to keep eggs off melting snow.",
    status: "published"
  },
  {
    id: "ant-e-15",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Which penguin species is readily identified by a narrow band of black plumage running under its chin like a helmet strap?",
    options: ["Ad\u00e9lie Penguin", "Chinstrap Penguin (Pygoscelis antarcticus)", "Gentoo Penguin", "Macaroni Penguin"],
    correctIndex: 1,
    explanation: "Chinstrap penguins nest in enormous rookeries on rocky cliffs around the Antarctic Peninsula and South Shetland Islands.",
    status: "published"
  },
  {
    id: "ant-e-16",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Which penguin species is the fastest underwater swimmer of all penguins (up to 36 km/h), recognized by a white stripe running across the crown of its head?",
    options: ["Ad\u00e9lie Penguin", "Gentoo Penguin (Pygoscelis papua)", "Emperor Penguin", "King Penguin"],
    correctIndex: 1,
    explanation: "Gentoo penguins have bright orange-red bills and feed predominantly on krill and small fish in inshore waters.",
    status: "published"
  },
  {
    id: "ant-e-17",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Are there any wild polar bears living in Antarctica?",
    options: ["Yes, along the coastal ice shelves", "No, polar bears live exclusively in the Arctic in the Northern Hemisphere", "Yes, in the interior mountains", "Yes, but only on the subantarctic islands"],
    correctIndex: 1,
    explanation: "Polar bears inhabit the Arctic circle of North America and Eurasia; Antarctica has no native terrestrial land mammals.",
    status: "published"
  },
  {
    id: "ant-e-18",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What small, shrimp-like pelagic crustacean forms the keystone cornerstone of the entire Antarctic marine ecosystem, feeding penguins, seals, and baleen whales?",
    options: ["Copepod", "Antarctic Krill (Euphausia superba)", "Amphipod", "Mysid shrimp"],
    correctIndex: 1,
    explanation: "Antarctic krill has an estimated biomass exceeding 400 to 500 million tonnes, one of the most abundant animal species on Earth by weight.",
    status: "published"
  },
  {
    id: "ant-e-19",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the largest floating ice shelf in Antarctica, covering roughly 500,000 square kilometers (about the size of France) in the Ross Sea?",
    options: ["Ronne-Filchner Ice Shelf", "Ross Ice Shelf", "Larsen C Ice Shelf", "Amery Ice Shelf"],
    correctIndex: 1,
    explanation: "Named after Sir James Clark Ross, the ice shelf presents a vertical ice barrier wall rising up to 50 meters above the sea surface.",
    status: "published"
  },
  {
    id: "ant-e-20",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the second-largest ice shelf in Antarctica, floating over the southern Weddell Sea?",
    options: ["Ross Ice Shelf", "Ronne-Filchner Ice Shelf", "Shackleton Ice Shelf", "George VI Ice Shelf"],
    correctIndex: 1,
    explanation: "The Ronne-Filchner Ice Shelf covers over 430,000 square kilometers, draining ice from the West Antarctic Ice Sheet into the Weddell Sea.",
    status: "published"
  },
  {
    id: "ant-e-21",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the name of the prominent, narrow mountain peninsula that extends roughly 1,300 kilometers north toward South America?",
    options: ["Queen Maud Land", "Antarctic Peninsula", "Wilkes Land", "Victoria Land"],
    correctIndex: 1,
    explanation: "The Antarctic Peninsula is the mildest and most accessible part of Antarctica, home to dozens of international scientific stations.",
    status: "published"
  },
  {
    id: "ant-e-22",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the turbulent, storm-swept body of water separating the southern tip of South America (Cape Horn) from the Antarctic Peninsula?",
    options: ["Beagle Channel", "Drake Passage", "Strait of Magellan", "Scotia Sea"],
    correctIndex: 1,
    explanation: "The Drake Passage spans 800 kilometers, connecting the southeastern Pacific and southwestern Atlantic around the Antarctic Circumpolar Current.",
    status: "published"
  },
  {
    id: "ant-e-23",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What massive 3,500-kilometer mountain range divides the Antarctic continent into East Antarctica and West Antarctica?",
    options: ["Ellsworth Mountains", "Transantarctic Mountains", "Sentinel Range", "Queen Maud Mountains"],
    correctIndex: 1,
    explanation: "The Transantarctic Mountains act as a dam holding back the massive East Antarctic Ice Sheet, crossed by outlet glaciers into the Ross Sea.",
    status: "published"
  },
  {
    id: "ant-e-24",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Which sector of Antarctica comprises roughly two-thirds of the continental landmass, containing ancient continental cratonic bedrock and the thickest ice?",
    options: ["West Antarctica", "East Antarctica (Greater Antarctica)", "Antarctic Peninsula", "Marie Byrd Land"],
    correctIndex: 1,
    explanation: "East Antarctica is an ancient Precambrian continental shield with an average ice sheet elevation exceeding 3,000 meters above sea level.",
    status: "published"
  },
  {
    id: "ant-e-25",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Which sector of Antarctica consists of an ice sheet grounded largely on bedrock lying well below sea level, making it particularly vulnerable to marine ice sheet instability?",
    options: ["East Antarctica", "West Antarctica (Lesser Antarctica)", "Queen Maud Land", "Enderby Land"],
    correctIndex: 1,
    explanation: "If the West Antarctic Ice Sheet were removed, West Antarctica would be transformed into an archipelago of mountainous islands separated by deep sea troughs.",
    status: "published"
  },
  {
    id: "ant-e-26",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What phenomenon occurs in Antarctica during the polar summer when the Sun remains continuously above the horizon for 24 hours a day?",
    options: ["Polar Night", "Midnight Sun (Polar Day)", "Equinox", "Solar Solstice"],
    correctIndex: 1,
    explanation: "At the South Pole, the Sun rises at the spring equinox and remains continuously above the horizon for six uninterrupted months of daylight.",
    status: "published"
  },
  {
    id: "ant-e-27",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What phenomenon occurs in Antarctica during the polar winter when the Sun remains continuously below the horizon for 24 hours a day?",
    options: ["Midnight Sun", "Polar Night", "Solar Eclipse", "Aurora Australis"],
    correctIndex: 1,
    explanation: "During the polar night at high latitudes, continuous darkness allows astronomical observations without solar interference.",
    status: "published"
  },
  {
    id: "ant-e-28",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Which ocean is officially recognized as the body of water encircling Antarctica south of 60° South latitude?",
    options: ["South Atlantic Ocean", "Southern Ocean (Antarctic Ocean)", "South Pacific Ocean", "Indian Ocean"],
    correctIndex: 1,
    explanation: "Delineated by the International Hydrographic Organization, the Southern Ocean is governed by the Antarctic Circumpolar Current.",
    status: "published"
  },
  {
    id: "ant-e-29",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the natural oceanographic boundary where cold, north-flowing Antarctic waters meet and sink below warmer subantarctic waters?",
    options: ["Equatorial Doldrums", "Antarctic Convergence (Polar Front)", "Subtropical Gyre", "Horse Latitudes"],
    correctIndex: 1,
    explanation: "The Antarctic Convergence is a continuous biological boundary where water temperature drops 2 to 3°C, separating distinct marine ecosystems.",
    status: "published"
  },
  {
    id: "ant-e-30",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the name for the fierce, high-velocity gravity winds that plunge down from the high inland Antarctic ice plateau to the coast, reaching gusts over 300 km/h?",
    options: ["Zonda", "Katabatic winds (fall winds)", "Chinook", "Sirocco"],
    correctIndex: 1,
    explanation: "Cold, dense air cooled by the ice sheet flows downslope under gravity, making places like Cape Denison the windiest places on Earth.",
    status: "published"
  },
  {
    id: "ant-e-31",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What Inuit-derived geological term is used in Antarctica for an isolated rocky mountain peak or ridge that projects above an surrounding ice sheet?",
    options: ["Moraine", "Nunatak", "Drumlin", "Esker"],
    correctIndex: 1,
    explanation: "Nunataks provide ice-free nesting sites for seabirds like snow petrels and are crucial anchor points for geological field mapping.",
    status: "published"
  },
  {
    id: "ant-e-32",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the name of the hyper-arid, ice-free valleys in Victoria Land, Antarctica, that have seen virtually no rain or snow for millions of years?",
    options: ["Taylor Valleys", "McMurdo Dry Valleys", "Wright Valleys", "Dry Ice Canyons"],
    correctIndex: 1,
    explanation: "Comprising Taylor, Wright, and Victoria valleys, the Dry Valleys are kept dry by surrounding mountains blocking ice and fierce katabatic winds.",
    status: "published"
  },
  {
    id: "ant-e-33",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the famous geological feature in Taylor Valley where bright crimson saltwater discharges from the snout of Taylor Glacier onto Lake Bonney?",
    options: ["Red Falls", "Blood Falls", "Sulphur Spring", "Ruby Cascade"],
    correctIndex: 1,
    explanation: "Discovered in 1911 by Griffith Taylor, Blood Falls is fed by an ancient subglacial hypersaline reservoir rich in dissolved ferrous iron.",
    status: "published"
  },
  {
    id: "ant-e-34",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What causes the vivid blood-red color of the water discharging at Blood Falls in Antarctica?",
    options: ["Red pigmented microalgae", "Dissolved ferrous iron that oxidizes into rust (iron oxide) upon contact with air", "Volcanic sulfur dust", "Decomposing krill"],
    correctIndex: 1,
    explanation: "As iron-rich brine contacts oxygen in the atmosphere, it oxidizes into ferric hydroxide and iron oxides, creating the red stain.",
    status: "published"
  },
  {
    id: "ant-e-35",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Which major sea of the Southern Ocean lies south of New Zealand, bounded by Cape Adare and the Ross Ice Shelf?",
    options: ["Weddell Sea", "Ross Sea", "Amundsen Sea", "Bellingshausen Sea"],
    correctIndex: 1,
    explanation: "The Ross Sea is considered the most pristine marine ecosystem on Earth, declared the world's largest marine protected area in 2016.",
    status: "published"
  },
  {
    id: "ant-e-36",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Which large embayment and sea of the Southern Ocean lies east of the Antarctic Peninsula, famous for severe pack ice and tabular icebergs?",
    options: ["Ross Sea", "Weddell Sea", "Davis Sea", "Cosmonauts Sea"],
    correctIndex: 1,
    explanation: "The Weddell Sea is characterized by the clock-wise Weddell Gyre, which traps dense ice floes and crushed Shackleton's Endurance.",
    status: "published"
  },
  {
    id: "ant-e-37",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Which sea in West Antarctica, lying between the Antarctic Peninsula and the Ross Sea, was named in honor of the first explorer to reach the South Pole?",
    options: ["Scott Sea", "Amundsen Sea", "Bellingshausen Sea", "Mawson Sea"],
    correctIndex: 1,
    explanation: "The Amundsen Sea drains the rapidly melting Pine Island and Thwaites glaciers of the West Antarctic Ice Sheet.",
    status: "published"
  },
  {
    id: "ant-e-38",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Which sea off the western coast of the Antarctic Peninsula was named after the Russian explorer Fabian Gottlieb von Bellingshausen, who sighted Antarctica in 1820?",
    options: ["Weddell Sea", "Bellingshausen Sea", "Dumont d'Urville Sea", "Riiser-Larsen Sea"],
    correctIndex: 1,
    explanation: "Bellingshausen commanded the Vostok and Mirny on the first Russian South Polar expedition, sighting ice shelf cliffs on January 28, 1820.",
    status: "published"
  },
  {
    id: "ant-e-39",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Which horseshoe-shaped volcanic island in the South Shetland Islands features a flooded caldera entered through Neptune's Bellows, offering natural geothermal heated waters?",
    options: ["King George Island", "Deception Island", "Elephant Island", "Livingston Island"],
    correctIndex: 1,
    explanation: "Deception Island was an early 20th-century whaling station; its active volcano erupted in 1967 and 1969, destroying British and Chilean bases.",
    status: "published"
  },
  {
    id: "ant-e-40",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the name of New Zealand's year-round scientific research station on Pram Point, Ross Island, located just 3 km from the US McMurdo Station?",
    options: ["Mawson Base", "Scott Base", "Halley Station", "Concordia Station"],
    correctIndex: 1,
    explanation: "Scott Base was established in 1957 for the Commonwealth Trans-Antarctic Expedition and the International Geophysical Year.",
    status: "published"
  },
  {
    id: "ant-e-41",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What joint French-Italian research station is situated at 3,233 meters elevation on the high East Antarctic ice plateau at Dome C?",
    options: ["Vostok", "Concordia Research Station", "Dome Fuji", "Kohnen"],
    correctIndex: 1,
    explanation: "Concordia is an isolated interior plateau station used for glaciological ice coring (EPICA) and deep-space isolation studies by the ESA.",
    status: "published"
  },
  {
    id: "ant-e-42",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What modern German research station in Queen Maud Land is built atop the Ekström Ice Shelf on hydraulic stilts to prevent being buried by snow accumulation?",
    options: ["Dresden Station", "Neumayer-Station III", "Georg Forster", "Kohnen Station"],
    correctIndex: 1,
    explanation: "Completed in 2009, Neumayer-Station III uses hydraulic lifting legs to raise the entire structure above accumulating winter snowdrifts.",
    status: "published"
  },
  {
    id: "ant-e-43",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What British Antarctic Survey research base on the Brunt Ice Shelf was designed with modular pods mounted on giant hydraulic ski-legs so it can be towed to safety across moving ice cracks?",
    options: ["Rothera", "Halley VI Research Station", "Signy", "Fossil Bluff"],
    correctIndex: 1,
    explanation: "Halley VI was successfully towed 23 km across the Brunt Ice Shelf in 2017 to escape a growing chasm in the ice shelf.",
    status: "published"
  },
  {
    id: "ant-e-44",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the primary scientific and logistics hub for the British Antarctic Survey, located on Adelaide Island off the west coast of the Antarctic Peninsula?",
    options: ["Halley", "Rothera Research Station", "Signy", "Port Lockroy"],
    correctIndex: 1,
    explanation: "Rothera features a 900-meter gravel runway and the modern Discovery Building, supporting marine biology, meteorology, and polar aviation.",
    status: "published"
  },
  {
    id: "ant-e-45",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is Australia's oldest continuously operating research station on the Antarctic continent, established in 1954 in Mac. Robertson Land?",
    options: ["Davis Station", "Mawson Station", "Casey Station", "Wilkes Station"],
    correctIndex: 1,
    explanation: "Mawson Station is situated on solid rock beside Horseshoe Harbour, the oldest continuously inhabited station south of the Antarctic Circle.",
    status: "published"
  },
  {
    id: "ant-e-46",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What Australian research station is located in the ice-free Vestfold Hills of Princess Elizabeth Land, known as an oasis of hypersaline meromictic lakes?",
    options: ["Casey", "Davis Station", "Mawson", "Macquarie Island"],
    correctIndex: 1,
    explanation: "Davis Station overlooks Prydz Bay, situated in an ice-free rocky oasis covering roughly 400 square kilometers.",
    status: "published"
  },
  {
    id: "ant-e-47",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What Australian research station in Wilkes Land sits opposite the abandoned 1957 US/Australian Wilkes Station?",
    options: ["Davis", "Casey Station", "Mawson", "Heard"],
    correctIndex: 1,
    explanation: "Casey Station sits on the Bailey Peninsula, rebuilt in 1988 with an aerodynamic curved steel tunnel designed to deflect drifting snow.",
    status: "published"
  },
  {
    id: "ant-e-48",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the third and newest Indian scientific research base in Antarctica, commissioned in 2012 in the Larsemann Hills of East Antarctica?",
    options: ["Dakshin Gangotri", "Bharati", "Maitri", "Himadri"],
    correctIndex: 1,
    explanation: "Bharati was constructed from 134 prefabricated shipping containers on stilts, focusing on oceanography and continental breakup studies.",
    status: "published"
  },
  {
    id: "ant-e-49",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What Indian research station was built in 1989 near the Schirmacher Oasis in Queen Maud Land, replacing the buried Dakshin Gangotri base?",
    options: ["Bharati", "Maitri", "Himadri", "Sagar"],
    correctIndex: 1,
    explanation: "Maitri sits beside freshwater Lake Priyadarshini, supporting ongoing atmospheric, geological, and biological research.",
    status: "published"
  },
  {
    id: "ant-e-50",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What was the name of the first permanent Indian research base in Antarctica, established in 1983 and submerged beneath ice by 1990?",
    options: ["Maitri", "Dakshin Gangotri", "Bharati", "Indira Base"],
    correctIndex: 1,
    explanation: "Dakshin Gangotri operated on the ice shelf for six years before being decommissioned after heavy snow accumulation buried the structure.",
    status: "published"
  },
  {
    id: "ant-e-51",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "At which Argentine research base at Hope Bay on the northern tip of the Antarctic Peninsula was the first human child in Antarctica born in 1978?",
    options: ["Marambio Base", "Esperanza Base (Base Esperanza)", "San Mart\u00edn Base", "Belgrano II"],
    correctIndex: 1,
    explanation: "Esperanza Base includes family housing, a primary school, and a local chapel, supporting a resident community year-round.",
    status: "published"
  },
  {
    id: "ant-e-52",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Who was the first documented human being born on the continent of Antarctica, delivered on January 7, 1978, at Esperanza Base?",
    options: ["Juan Pablo Camacho", "Emilio Marcos Palma", "Solveig Gunbj\u00f8rg Jacobsen", "Ernest Shackleton Jr."],
    correctIndex: 1,
    explanation: "Emilio Marcos Palma is recognized in the Guinness Book of Records as the first person known to be born on the continent of Antarctica.",
    status: "published"
  },
  {
    id: "ant-e-53",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the name of the Chilean civilian settlement on King George Island that features a school, bank, post office, and hospital?",
    options: ["Puerto Williams", "Villa Las Estrellas (Frei Montalva Base)", "Port Lockroy", "Esperanza"],
    correctIndex: 1,
    explanation: "Villa Las Estrellas ('Stars Village') houses families of Chilean Air Force personnel, one of only two civilian settlements on Antarctica.",
    status: "published"
  },
  {
    id: "ant-e-54",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Which island in the South Shetland Islands hosts the greatest concentration of international scientific bases from over a dozen nations?",
    options: ["Elephant Island", "King George Island (Isla 25 de Mayo)", "Livingston Island", "Deception Island"],
    correctIndex: 1,
    explanation: "King George Island hosts bases from Chile, Russia, China (Great Wall), South Korea (King Sejong), Argentina, Poland, Uruguay, and Brazil.",
    status: "published"
  },
  {
    id: "ant-e-55",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the largest purely terrestrial animal native to the Antarctic continent, a flightless insect measuring only 2 to 6 millimeters in length?",
    options: ["Nematode", "Antarctic Midge (Belgica antarctica)", "Springtail", "Mite"],
    correctIndex: 1,
    explanation: "Belgica antarctica is wingless to avoid being blown away by fierce winds, able to survive its body fluids freezing solid during winter.",
    status: "published"
  },
  {
    id: "ant-e-56",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What are the only two native species of vascular flowering plants found on the Antarctic continent, restricted to the milder Antarctic Peninsula?",
    options: ["Antarctic hair grass and Antarctic pearlwort", "Arctic poppy and saxifrage", "Tussock grass and buttercup", "Lichen and moss"],
    correctIndex: 0,
    explanation: "Deschampsia antarctica (hair grass) and Colobanthus quitensis (pearlwort) possess specialized antifreeze proteins to survive freezing temperatures.",
    status: "published"
  },
  {
    id: "ant-e-57",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What aggressive, brown seabirds related to gulls are the apex avian scavengers and predators around Antarctic penguin rookeries?",
    options: ["Petrels", "Skuas (South Polar and Brown Skuas)", "Albatrosses", "Sheathbills"],
    correctIndex: 1,
    explanation: "Skuas harass penguins to steal unhatched eggs and vulnerable chicks, displaying remarkable aerial maneuverability in gale winds.",
    status: "published"
  },
  {
    id: "ant-e-58",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Which large, spotted solitary Antarctic seal is the only seal species known to regularly prey on penguins and smaller seals?",
    options: ["Weddell Seal", "Leopard Seal (Hydrurga leptonyx)", "Crabeater Seal", "Ross Seal"],
    correctIndex: 1,
    explanation: "Leopard seals possess powerful jaws and sharp canine teeth, lurking beneath ice shelf edges to ambush swimming Adélie and Gentoo penguins.",
    status: "published"
  },
  {
    id: "ant-e-59",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the southernmost naturally breeding mammal on Earth, capable of diving under Antarctic coastal fast ice for over an hour using teeth to maintain breathing holes?",
    options: ["Leopard Seal", "Weddell Seal (Leptonychotes weddellii)", "Southern Elephant Seal", "Crabeater Seal"],
    correctIndex: 1,
    explanation: "Weddell seals use their incisor teeth to saw open breathing holes through thick sea ice, diving up to 600 meters to hunt Antarctic toothfish.",
    status: "published"
  },
  {
    id: "ant-e-60",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the most abundant seal species in Antarctica and the world, living on pack ice with an estimated population in the millions?",
    options: ["Weddell Seal", "Crabeater Seal (Lobodon carcinophaga)", "Leopard Seal", "Bearded Seal"],
    correctIndex: 1,
    explanation: "Despite their name, crabeater seals do not eat crabs; their specialized multi-cusped lobed teeth act as strainers to filter Antarctic krill.",
    status: "published"
  },
  {
    id: "ant-e-61",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the largest species of seal (pinniped) on Earth, whose massive bulls can weigh over 3,500 kilograms and dive deeper than 1,500 meters?",
    options: ["Walrus", "Southern Elephant Seal (Mirounga leonina)", "Leopard Seal", "Northern Fur Seal"],
    correctIndex: 1,
    explanation: "Southern elephant seals are named for their enormous size and the bull's inflatable proboscis, breeding in massive numbers on subantarctic beaches.",
    status: "published"
  },
  {
    id: "ant-e-62",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What iconic black-and-white apex predator cetacean uses coordinated wave-washing tactics to wash seals off ice floes in Antarctic waters?",
    options: ["Sperm Whale", "Killer Whale / Orca (Orcinus orca)", "Humpback Whale", "Minke Whale"],
    correctIndex: 1,
    explanation: "Antarctic orcas are divided into distinct ecotypes (A, B, C, D) specializing in minke whales, seals, fish, or open-ocean dolphins.",
    status: "published"
  },
  {
    id: "ant-e-63",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the largest animal ever known to have lived on Earth, reaching lengths of up to 30 meters and feeding on Antarctic krill in polar summer?",
    options: ["Fin Whale", "Blue Whale (Balaenoptera musculus)", "Bowhead Whale", "Right Whale"],
    correctIndex: 1,
    explanation: "Antarctic blue whales consume up to 4 tonnes of krill daily during summer feeding before migrating to tropical waters to breed.",
    status: "published"
  },
  {
    id: "ant-e-64",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What seabird possesses the largest wingspan of any living bird, measuring up to 3.5 meters, allowing it to glide for hours without flapping over the Southern Ocean?",
    options: ["Royal Albatross", "Wandering Albatross (Diomedea exulans)", "Giant Petrel", "Sooty Albatross"],
    correctIndex: 1,
    explanation: "The wandering albatross spends most of its life in flight riding updrafts above ocean waves, circling the globe multiple times.",
    status: "published"
  },
  {
    id: "ant-e-65",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Which pure white seabird nests in cliff crevices on the Antarctic continent and is considered by sailors as a sure indicator of nearby pack ice?",
    options: ["Cape Petrel", "Snow Petrel (Pagodroma nivea)", "Antarctic Tern", "Wilson's Storm Petrel"],
    correctIndex: 1,
    explanation: "Snow petrels nest up to 400 km inland on nunataks, surviving in sub-freezing temperatures by roosting in deep rock crevasses.",
    status: "published"
  },
  {
    id: "ant-e-66",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What major environmental phenomenon over Antarctica was first discovered by British Antarctic Survey scientists at Halley Station in 1985?",
    options: ["Ocean Acidification", "The Antarctic Ozone Hole (Stratospheric Ozone Depletion)", "Ice Shelf Collapse", "Magnetic Pole Reversal"],
    correctIndex: 1,
    explanation: "Joe Farman, Brian Gardiner, and Jonathan Shanklin published landmark findings in Nature showing severe springtime depletion of stratospheric ozone.",
    status: "published"
  },
  {
    id: "ant-e-67",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What category of man-made industrial compounds was identified as the primary catalyst causing the annual spring Antarctic ozone hole?",
    options: ["Carbon monoxide", "Chlorofluorocarbons (CFCs) and halons", "Methane", "Sulfur dioxide"],
    correctIndex: 1,
    explanation: "CFCs released chlorine atoms on the surfaces of polar stratospheric clouds during the freezing Antarctic winter, destroying ozone when spring sunlight returned.",
    status: "published"
  },
  {
    id: "ant-e-68",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What landmark 1987 international treaty successfully phased out the production of ozone-depleting substances worldwide, enabling the ozone layer to heal?",
    options: ["Kyoto Protocol", "Montreal Protocol", "Paris Agreement", "Basel Convention"],
    correctIndex: 1,
    explanation: "The Montreal Protocol is widely regarded as one of the most successful international environmental agreements ever enacted.",
    status: "published"
  },
  {
    id: "ant-e-69",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the Southern Hemisphere atmospheric light display caused by solar wind particles colliding with oxygen and nitrogen atoms in the upper atmosphere?",
    options: ["Aurora Borealis", "Aurora Australis (Southern Lights)", "Zodiacal Light", "Noctilucent clouds"],
    correctIndex: 1,
    explanation: "The Aurora Australis glows in vivid curtains of green and purple in the ionosphere, visible throughout the dark Antarctic polar night.",
    status: "published"
  },
  {
    id: "ant-e-70",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the geographical term for the point on the Antarctic continent that is the most distant from any surrounding coastline or ocean?",
    options: ["Geographic South Pole", "Pole of Inaccessibility", "Geomagnetic Pole", "Magnetic South Pole"],
    correctIndex: 1,
    explanation: "The southern Pole of Inaccessibility sits in East Antarctica at 82°06' S, 54°58' E, marked by a historic bust of Vladimir Lenin left by Soviet explorers in 1958.",
    status: "published"
  },
  {
    id: "ant-e-71",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Does any single country own or exercise sovereign territorial control over Antarctica?",
    options: ["Yes, the United States owns it", "No, the Antarctic Treaty freezes all territorial claims and sets the continent aside for peaceful science", "Yes, the United Kingdom governs it", "Yes, Russia and China share control"],
    correctIndex: 1,
    explanation: "Article IV of the 1959 Antarctic Treaty states that no acts or activities while the treaty is in force constitute a basis for asserting, supporting, or denying territorial sovereignty claims.",
    status: "published"
  },
  {
    id: "ant-e-72",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Does Antarctica have any permanent native indigenous human population?",
    options: ["Yes, several Inuit tribes", "No, Antarctica has no indigenous human inhabitants and no permanent residents", "Yes, Patagonian tribes in the north", "Yes, Polynesian seafaring colonies"],
    correctIndex: 1,
    explanation: "Antarctica was discovered only in the early 19th century, remaining uninhabited except for rotating scientific research teams.",
    status: "published"
  },
  {
    id: "ant-e-73",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is a tabular iceberg, typical of the Southern Ocean surrounding Antarctica?",
    options: ["A tall conical berg", "A massive, flat-topped iceberg with steep vertical cliffs calved from an ice shelf", "A rounded blue glacier fragment", "A gravel-covered rock island"],
    correctIndex: 1,
    explanation: "Tabular icebergs break off floating ice shelves like Ross or Larsen, often spanning dozens or hundreds of kilometers in length.",
    status: "published"
  },
  {
    id: "ant-e-74",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What was the largest recorded iceberg in history, calved from the Ross Ice Shelf in March 2000 with a surface area of over 11,000 square kilometers?",
    options: ["Iceberg A-68", "Iceberg B-15", "Iceberg A-76", "Iceberg B-9"],
    correctIndex: 1,
    explanation: "Iceberg B-15 was larger than the island of Jamaica, taking over a decade to break up and melt as it drifted through the Southern Ocean.",
    status: "published"
  },
  {
    id: "ant-e-75",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the small American station located on Anvers Island off the Antarctic Peninsula, the only US Antarctic station located north of the Antarctic Circle?",
    options: ["McMurdo", "Palmer Station", "Amundsen-Scott", "Byrd Station"],
    correctIndex: 1,
    explanation: "Palmer Station is a marine biology research facility with a rich marine bird population, accessible by icebreaker vessel from Punta Arenas, Chile.",
    status: "published"
  },
  {
    id: "ant-e-76",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the approximate geographical latitude of the Antarctic Circle?",
    options: ["50\u00b0 South", "66.5\u00b0 South (66\u00b033' S)", "75\u00b0 South", "80\u00b0 South"],
    correctIndex: 1,
    explanation: "The Antarctic Circle marks the northernmost latitude in the Southern Hemisphere at which the Sun can remain continuously above or below the horizon for 24 hours.",
    status: "published"
  },
  {
    id: "ant-e-77",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the estimated average thickness of the ice sheet covering the continent of Antarctica?",
    options: ["500 meters", "Roughly 2,160 meters (over 2 kilometers)", "4,500 meters", "100 meters"],
    correctIndex: 1,
    explanation: "The ice sheet holds roughly 27 million cubic kilometers of ice, depressing the underlying continental bedrock into the Earth's mantle through isostatic loading.",
    status: "published"
  },
  {
    id: "ant-e-78",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the maximum recorded thickness of the Antarctic ice sheet, located in Terre Adélie?",
    options: ["2,500 meters", "4,776 meters (nearly 4.8 km)", "6,200 meters", "3,100 meters"],
    correctIndex: 1,
    explanation: "At its thickest point in Terre Adélie, the ice sheet is nearly 4.8 kilometers deep, resting in a subglacial depression called the Astrolabe Subglacial Basin.",
    status: "published"
  },
  {
    id: "ant-e-79",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "If all the ice covering Antarctica were to completely melt, global mean sea levels would rise by approximately how much?",
    options: ["5 to 10 meters", "Roughly 58 to 60 meters (nearly 200 feet)", "100 to 120 meters", "1 to 2 meters"],
    correctIndex: 1,
    explanation: "East Antarctica contains the vast majority of this potential sea-level rise (~52 m), with West Antarctica contributing ~5 m and the Peninsula ~0.2 m.",
    status: "published"
  },
  {
    id: "ant-e-80",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is a crevasse on an Antarctic glacier or ice sheet?",
    options: ["A volcanic crater", "A deep, dangerous vertical fracture or fissure in the ice caused by differential ice movement and shear stress", "A thermal meltwater pool", "A hollow ice cave"],
    correctIndex: 1,
    explanation: "Crevasses can be hundreds of meters long and tens of meters deep, posing a severe hazard when hidden beneath thin snow bridges.",
    status: "published"
  },
  {
    id: "ant-e-81",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is a snow bridge in polar travel?",
    options: ["A wooden bridge across meltwater", "An arch of wind-blown snow deposited across the mouth of a hidden crevasse", "A pontoon for snowcats", "A frozen wave on an ice shelf"],
    correctIndex: 1,
    explanation: "Snow bridges often conceal crevasses from surface view, potentially collapsing under the weight of skiers, sledges, or tracked vehicles.",
    status: "published"
  },
  {
    id: "ant-e-82",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the intermediate stage between newly fallen snow and dense glacial ice, consisting of rounded, compacted granular snow surviving multiple seasons?",
    options: ["Sleet", "Firn (N\u00e9v\u00e9)", "Slush", "Sastrugi"],
    correctIndex: 1,
    explanation: "Over time, accumulating weight compresses firn into solid, impermeable glacial ice at densities exceeding 0.83 g/cm³.",
    status: "published"
  },
  {
    id: "ant-e-83",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "How does sea ice differ fundamentally from the Antarctic continental ice sheet?",
    options: ["Sea ice is made of compressed volcanic ash", "Sea ice forms directly from frozen salty ocean seawater, whereas the ice sheet is formed by accumulated freshwater snow on land", "Sea ice is permanent while the ice sheet melts every summer", "Sea ice is found only around the South Pole"],
    correctIndex: 1,
    explanation: "Antarctic sea ice expands from roughly 3 million km² in summer to nearly 19 million km² in winter, doubling the effective ice-covered surface area of the polar region.",
    status: "published"
  },
  {
    id: "ant-e-84",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What term describes the sharp, irregular wave-like ridges of hard, wind-eroded snow sculpted parallel to the prevailing wind direction on the Antarctic plateau?",
    options: ["Dunes", "Sastrugi (Zastrugi)", "Barchans", "Ventifacts"],
    correctIndex: 1,
    explanation: "Sastrugi create corrugated, hard-packed surfaces that make sledge hauling and aircraft ski landings exceptionally hazardous.",
    status: "published"
  },
  {
    id: "ant-e-85",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What dangerous polar optical weather condition occurs when uniform light scattering between overcast cloud cover and snow eliminates shadows and the horizon?",
    options: ["Blizzard", "Whiteout", "Mirage", "Inversion"],
    correctIndex: 1,
    explanation: "In a whiteout, travelers lose all depth perception and sense of orientation, unable to distinguish sky from snow-covered ground.",
    status: "published"
  },
  {
    id: "ant-e-86",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is 'diamond dust' in Antarctic meteorology?",
    options: ["Industrial diamond fallout from mining", "A ground-level cloud composed of tiny unaggregated ice crystals glittering in cold sunlight", "Fine silica sand blown from the Dry Valleys", "Dry ice falling from the mesosphere"],
    correctIndex: 1,
    explanation: "Diamond dust forms under clear skies at temperatures below -30°C, creating miniature optical halos and sun pillars as light reflects off crystal faces.",
    status: "published"
  },
  {
    id: "ant-e-87",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What optical halo phenomenon occurs when sunlight refracts through hexagonal ice crystals in the air, creating bright colored spots flanking the Sun?",
    options: ["Green flash", "Sun dog (Parhelion / Mock Sun)", "Corona", "Glory"],
    correctIndex: 1,
    explanation: "Sun dogs appear at 22° angles on either side of the Sun, often accompanied by 22° halos and parhelic circles in cold Antarctic air.",
    status: "published"
  },
  {
    id: "ant-e-88",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What protocol to the Antarctic Treaty, signed in Madrid in 1991, designates Antarctica as a natural reserve and indefinitely bans all commercial mining and mineral exploitation?",
    options: ["Kyoto Protocol", "Madrid Protocol (Protocol on Environmental Protection)", "Montreal Protocol", "Stockholm Convention"],
    correctIndex: 1,
    explanation: "Article 7 of the Madrid Protocol explicitly states: 'Any activity relating to mineral resources, other than scientific research, shall be prohibited.'",
    status: "published"
  },
  {
    id: "ant-e-89",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the 10-meter radio telescope located at Amundsen-Scott South Pole Station, built to map cosmic microwave background (CMB) radiation?",
    options: ["Hubble Telescope", "South Pole Telescope (SPT)", "James Webb Telescope", "Arecibo Telescope"],
    correctIndex: 1,
    explanation: "The South Pole offers an exceptionally clear, stable, dry atmosphere with near-zero precipitable water vapor, ideal for submillimeter astronomy.",
    status: "published"
  },
  {
    id: "ant-e-90",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What unique particle astrophysics detector at the South Pole utilizes over 5,000 digital optical sensors embedded within a cubic kilometer of clear polar ice to detect subatomic neutrinos?",
    options: ["Large Hadron Collider", "IceCube Neutrino Observatory", "Super-Kamiokande", "ANTARES"],
    correctIndex: 1,
    explanation: "IceCube detects Cherenkov light produced when high-energy cosmic neutrinos collide with water molecules in deep, bubble-free Antarctic ice.",
    status: "published"
  },
  {
    id: "ant-e-91",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Why is the Antarctic ice sheet considered the most productive hunting ground on Earth for collecting extraterrestrial meteorites?",
    options: ["Antarctica attracts more meteors through magnetic gravity", "Dark meteorites stand out visibly on bare ice, and glacial flow concentrates them against mountain barriers like the Transantarctic Mountains", "Meteorites only fall in polar regions", "The ice prevents meteorites from entering orbit"],
    correctIndex: 1,
    explanation: "The Antarctic Search for Meteorites (ANSMET) program has recovered over 20,000 meteorites from stranding surfaces where sublimation exposes concentrated specimens.",
    status: "published"
  },
  {
    id: "ant-e-92",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What famous 1.93-kilogram meteorite discovered in Allan Hills, Antarctica, in 1984 sparked international debate when scientists identified possible microscopic fossilized Martian nanobacteria in 1996?",
    options: ["Murchison meteorite", "ALH84001", "Hoba meteorite", "Chelyabinsk meteorite"],
    correctIndex: 1,
    explanation: "ALH84001 is a piece of 4-billion-year-old Martian orthopyroxenite, containing carbonate globules that NASA scientists hypothesized could represent ancient Martian biogenic activity.",
    status: "published"
  },
  {
    id: "ant-e-93",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "On which rugged, mountainous subantarctic island in the South Atlantic is Sir Ernest Shackleton buried in the cemetery of the Grytviken whaling station?",
    options: ["Falkland Islands", "South Georgia", "Elephant Island", "Bouvet Island"],
    correctIndex: 1,
    explanation: "Shackleton died of a heart attack aboard the Quest at South Georgia in January 1922; his gravestone at Grytviken faces south toward Antarctica.",
    status: "published"
  },
  {
    id: "ant-e-94",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "Which uninhabited island in the South Shetland Islands served as the bleak, wind-swept refuge where 22 men of Shackleton's crew survived for over four months beneath overturned boats?",
    options: ["Deception Island", "Elephant Island", "King George Island", "Livingston Island"],
    correctIndex: 1,
    explanation: "Frank Wild kept the men alive under overturned lifeboats at Point Wild, feeding on penguins and seals while Shackleton sailed to South Georgia for rescue.",
    status: "published"
  },
  {
    id: "ant-e-95",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the historic British post office and museum located at Base 'A' on Goudier Island off the Antarctic Peninsula, affectionately known as the 'Penguin Post Office'?",
    options: ["Rothera", "Port Lockroy", "Hope Bay", "Faraday Station"],
    correctIndex: 1,
    explanation: "Operated by the UK Antarctic Heritage Trust, Port Lockroy processes over 70,000 letters and postcards mailed by cruise ship visitors every year amidst a gentoo penguin colony.",
    status: "published"
  },
  {
    id: "ant-e-96",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What historic research station on Galindez Island was operated by the UK as Faraday Station until transferred to Ukraine in 1996, where it was renamed after a famous Ukrainian scientist?",
    options: ["Bellingshausen Station", "Vernadsky Research Base (Akademik Vernadsky)", "Mirny", "Arctowski"],
    correctIndex: 1,
    explanation: "Vernadsky Station was sold to Ukraine for a symbolic one pound sterling; scientists at this base originally contributed to discovering the ozone hole.",
    status: "published"
  },
  {
    id: "ant-e-97",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the only species of insect in the world that lives permanently on the Antarctic continent and cannot fly?",
    options: ["Antarctic Flea", "Antarctic Midge (Belgica antarctica)", "Snow Weevil", "Ice Beetle"],
    correctIndex: 1,
    explanation: "Belgica antarctica spends two years in a larval stage before emerging for just 10 days as wingless adults to mate and lay eggs.",
    status: "published"
  },
  {
    id: "ant-e-98",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the name of the international non-governmental trade association founded in 1991 to promote and advocate safe, environmentally responsible private-sector travel to Antarctica?",
    options: ["Greenpeace", "IAATO (International Association of Antarctica Tour Operators)", "SCAR", "ASOC"],
    correctIndex: 1,
    explanation: "IAATO sets strict biosecurity boot-cleaning protocols, passenger landing limits (maximum 100 on shore at once), and wildlife distance regulations.",
    status: "published"
  },
  {
    id: "ant-e-99",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the primary method of transportation used for heavy overland cargo resupply between McMurdo Station and Amundsen-Scott South Pole Station across 1,600 km of ice sheet?",
    options: ["Dog sleds", "South Pole Traverse (McMurdo-South Pole Highway)", "Commercial helicopters", "Hovercrafts"],
    correctIndex: 1,
    explanation: "The South Pole Traverse uses Caterpillar and Case tractors hauling bladder tanks on heavy polyethylene skis across snow-packed tractor routes.",
    status: "published"
  },
  {
    id: "ant-e-100",
    continent: "Antarctica",
    difficulty: "Easy",
    question: "What is the international committee founded in 1958 under the International Science Council to initiate, develop, and coordinate scientific research in Antarctica?",
    options: ["IPCC", "SCAR (Scientific Committee on Antarctic Research)", "WMO", "UNESCO"],
    correctIndex: 1,
    explanation: "SCAR coordinates international Antarctic science and provides independent scientific advice to Antarctic Treaty Consultative Meetings.",
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
    id: "ant-m-3",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the name of the deep gorge carved through the Transantarctic Mountains by the Beardmore Glacier, used as the route by Shackleton (1908) and Scott (1911) to reach the polar plateau?",
    options: ["Axel Heiberg Glacier", "Beardmore Glacier route", "Darwin Glacier", "Nimrod Glacier"],
    correctIndex: 1,
    explanation: "At 160 km long, the Beardmore Glacier is one of the world's largest glaciers, connecting the Ross Ice Shelf to the East Antarctic Plateau.",
    status: "published"
  },
  {
    id: "ant-m-4",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the largest subglacial lake in Antarctica, buried under approximately 4 km of East Antarctic ice near Vostok Station?",
    options: ["Lake Ellsworth", "Lake Vostok", "Lake Mercer", "Lake Whillans"],
    correctIndex: 1,
    explanation: "Lake Vostok covers roughly 15,690 square kilometers and may have been isolated from the atmosphere for 15–25 million years.",
    status: "published"
  },
  {
    id: "ant-m-5",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "How many subglacial lakes have scientists identified beneath the Antarctic ice sheet using radio-echo sounding?",
    options: ["About 5", "About 15", "Over 400", "Exactly 100"],
    correctIndex: 2,
    explanation: "More than 400 subglacial lakes have been mapped beneath the ice using airborne radio-echo sounding campaigns, connected by subglacial drainage networks.",
    status: "published"
  },
  {
    id: "ant-m-6",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the name of the massive submarine valley in West Antarctica, deeper than the Grand Canyon, which lies beneath the Thwaites Glacier?",
    options: ["Byrd Subglacial Basin", "Thwaites Trough", "Pine Island Trough", "Rutford Trench"],
    correctIndex: 0,
    explanation: "The Byrd Subglacial Basin is a deep bedrock depression that, combined with marine ice sheet instability, makes West Antarctica particularly vulnerable to collapse.",
    status: "published"
  },
  {
    id: "ant-m-7",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What glacier in West Antarctica is nicknamed the 'Doomsday Glacier' due to its rapid melting and potential to raise global sea levels by up to 65 cm?",
    options: ["Pine Island Glacier", "Thwaites Glacier", "Smith Glacier", "Kohler Glacier"],
    correctIndex: 1,
    explanation: "Thwaites Glacier acts as a buttress for the West Antarctic Ice Sheet; its collapse could destabilize neighboring glaciers, contributing up to 3 meters of sea level rise.",
    status: "published"
  },
  {
    id: "ant-m-8",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the name of the international research collaboration studying the Thwaites Glacier, involving the US and UK?",
    options: ["WAIS Divide Project", "ITGC (International Thwaites Glacier Collaboration)", "SCAR Action Group", "EPICA Project"],
    correctIndex: 1,
    explanation: "Launched in 2018, ITGC deploys oceanographers, glaciologists, and geophysicists to study why Thwaites is melting faster than expected.",
    status: "published"
  },
  {
    id: "ant-m-9",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What important ice core drilling project at Dome C in Antarctica produced climate records extending back approximately 800,000 years?",
    options: ["GISP2", "EPICA (European Project for Ice Coring in Antarctica)", "Vostok Ice Core Project", "WDC Ice Core"],
    correctIndex: 1,
    explanation: "The EPICA Dome C ice core, drilled to 3,270 meters depth, revealed eight complete glacial–interglacial cycles over 800,000 years of Earth's climate history.",
    status: "published"
  },
  {
    id: "ant-m-10",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What ice core record from Vostok Station, drilled in the 1990s, extends back approximately how many years?",
    options: ["100,000 years", "420,000 years", "800,000 years", "2 million years"],
    correctIndex: 1,
    explanation: "The Vostok ice core (3,623 m depth) spans 420,000 years, covering four complete glacial cycles and demonstrating the correlation between CO₂ and temperature.",
    status: "published"
  },
  {
    id: "ant-m-11",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the primary chemical signature preserved in polar ice cores that scientists use to reconstruct past atmospheric temperatures?",
    options: ["Carbon-14 ratios", "Oxygen isotope ratios (\u03b4\u00b9\u2078O and \u03b4D)", "Nitrogen content", "Calcium carbonate layers"],
    correctIndex: 1,
    explanation: "Lighter ¹⁶O preferentially evaporates from warmer oceans; the ratio of heavy ¹⁸O to ¹⁶O trapped in ice layers precisely reflects paleotemperature.",
    status: "published"
  },
  {
    id: "ant-m-12",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the Larsen Ice Shelf, and which section dramatically collapsed in 2002?",
    options: ["A subglacial lake; Lake Larsen collapsed", "A floating ice shelf along the east coast of the Antarctic Peninsula; the Larsen B section disintegrated in 35 days", "A glacier in Victoria Land; its snout collapsed", "A sea ice formation; Larsen A broke apart"],
    correctIndex: 1,
    explanation: "Approximately 3,250 square kilometers of Larsen B collapsed in early 2002, exposing bedrock-grounded glacier tributaries that subsequently accelerated dramatically.",
    status: "published"
  },
  {
    id: "ant-m-13",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What phenomenon, driven by relatively warm Circumpolar Deep Water intruding beneath ice shelves, is the primary driver of ice shelf thinning in West Antarctica?",
    options: ["Surface melt ponding", "Basal melting by ocean heat", "Calving by wave action", "Wind scouring"],
    correctIndex: 1,
    explanation: "Circumpolar Deep Water (~1°C above freezing) melts ice shelves from beneath at rates far exceeding surface melting, destabilizing buttressing ice shelves.",
    status: "published"
  },
  {
    id: "ant-m-14",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the name of the international program that runs the continuous scientific record of greenhouse gases and meteorological data from the Amundsen-Scott South Pole Station?",
    options: ["NOAA Global Monitoring Laboratory South Pole Observatory", "EPICA Observatory", "SCAR South Pole Network", "CSIRO Polar Monitoring"],
    correctIndex: 0,
    explanation: "The NOAA South Pole Observatory has provided uninterrupted baseline atmospheric CO₂ measurements since 1957, complementing the Mauna Loa record.",
    status: "published"
  },
  {
    id: "ant-m-15",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What process by which snowfall accumulates, compresses, and flows outward from the interior of Antarctica, ultimately calving icebergs into the ocean, makes the ice sheet a dynamic system?",
    options: ["Glacial isostasy", "The ice mass balance cycle (accumulation, flow, and calving)", "Thermohaline circulation", "Permafrost dynamics"],
    correctIndex: 1,
    explanation: "The ice sheet gains mass from precipitation inland and loses mass via iceberg calving and basal melting; current observations indicate net mass loss.",
    status: "published"
  },
  {
    id: "ant-m-16",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What oceanographic phenomenon driven by dense, cold, salty Antarctic bottom water sinking into the deep ocean plays a crucial role in global ocean circulation?",
    options: ["El Ni\u00f1o Southern Oscillation", "Antarctic Bottom Water (AABW) formation", "Upwelling", "Thermohaline stratification"],
    correctIndex: 1,
    explanation: "AABW forms primarily in the Weddell and Ross Seas, sinking to abyssal depths and driving the global overturning circulation, carrying oxygen to the deep ocean.",
    status: "published"
  },
  {
    id: "ant-m-17",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the Antarctic Circumpolar Current (ACC), and why is it significant for global climate?",
    options: ["A surface wind pattern only", "The world's largest and most powerful ocean current, flowing continuously eastward around Antarctica with no land barriers, transporting 165 Sv of water", "A seasonal tidal current in the Ross Sea", "A deep-sea current flowing westward along the continental slope"],
    correctIndex: 1,
    explanation: "The ACC thermally isolates Antarctica, maintaining the cold polar climate, and connects the Atlantic, Pacific, and Indian Ocean basins exchanging heat and nutrients.",
    status: "published"
  },
  {
    id: "ant-m-18",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the biological productivity hotspot near the sea surface where the cold Antarctic water meets and sinks beneath warmer subantarctic water?",
    options: ["Dead zone", "Antarctic Polar Front (Convergence Zone)", "Equatorial Upwelling", "North Atlantic Deep Water zone"],
    correctIndex: 1,
    explanation: "Upwelling along the Polar Front supplies nutrients that fuel massive phytoplankton blooms, supporting zooplankton, fish, seabirds, and whales.",
    status: "published"
  },
  {
    id: "ant-m-19",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the primary pigment produced by sea ice microalgae that turns large areas of Antarctic sea ice a brownish-gold color?",
    options: ["Chlorophyll-a only", "Fucoxanthin from diatoms growing in brine channels within sea ice", "Phycocyanin", "Astaxanthin"],
    correctIndex: 1,
    explanation: "Sea ice algae (primarily diatoms) colonize brine channels in the lower ice, providing a critical early spring food source for krill before open-water phytoplankton blooms.",
    status: "published"
  },
  {
    id: "ant-m-20",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is 'frazil ice', the first stage of sea ice formation in the Antarctic Ocean?",
    options: ["Thick multi-year pack ice", "A suspension of fine disc-shaped ice crystals forming in supercooled turbulent ocean water, creating a greasy sheen", "Frozen spray ice on ship bows", "Compressed brash ice"],
    correctIndex: 1,
    explanation: "Frazil crystals aggregate into 'grease ice', then consolidate into 'nilas' (thin transparent sheets) before thickening into pancake and pack ice.",
    status: "published"
  },
  {
    id: "ant-m-21",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What distinctive circular sea ice formation, 30 cm to 3 m across with raised rims, forms when grease ice is churned by wave motion in marginal ice zones?",
    options: ["Frazil ice", "Pancake ice", "Brash ice", "Nilas"],
    correctIndex: 1,
    explanation: "Pancake ice forms when thin grease or nilas ice is broken up and rounded by wave action, with raised edges formed by collisions.",
    status: "published"
  },
  {
    id: "ant-m-22",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is 'polynya' in Antarctic oceanography?",
    options: ["A type of glacier", "An area of open water surrounded by sea ice, kept ice-free by upwelling warm water or persistent winds", "A subglacial lake outlet", "A crevasse field"],
    correctIndex: 1,
    explanation: "Coastal polynyas (e.g., McMurdo Sound, Ross Sea) are biological hotspots where dense water formation, seal haul-outs, and penguin foraging concentrate.",
    status: "published"
  },
  {
    id: "ant-m-23",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the largest coastal polynya in Antarctica, occurring annually west of the Ross Ice Shelf and driven by persistent katabatic winds from the Transantarctic Mountains?",
    options: ["Weddell Sea Polynya", "Ross Sea Polynya", "Cosmonaut Sea Polynya", "Mertz Glacier Polynya"],
    correctIndex: 1,
    explanation: "The Ross Sea Polynya is one of the most biologically productive areas in the Southern Ocean, covering up to 300,000 km² in spring.",
    status: "published"
  },
  {
    id: "ant-m-24",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What rare oceanographic event occurred in the winters of 1974–1976 when a massive open-ocean polynya nearly the size of New Zealand appeared in the central Weddell Sea?",
    options: ["Weddell Gyre reversal", "Maud Rise Polynya (Weddell Polynya)", "Southern Oscillation", "ACC meander"],
    correctIndex: 1,
    explanation: "The 1974–1976 Weddell Polynya remained open for three consecutive winters, allowing intense deep-water ventilation; a smaller version reappeared in 2016–2017.",
    status: "published"
  },
  {
    id: "ant-m-25",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the primary reproductive strategy of the Emperor Penguin that is unique among all birds?",
    options: ["It lays eggs in burrows like a petrel", "The male incubates a single egg balanced on his feet under a brood pouch through the polar winter darkness, fasting for up to 115 days", "It nests in colonies inside volcanic craters", "Females and males share incubation on rocky shore platforms"],
    correctIndex: 1,
    explanation: "Male emperors huddle in groups of thousands to share warmth at -40°C while females spend winter at sea fattening before returning to feed the newly hatched chick.",
    status: "published"
  },
  {
    id: "ant-m-26",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the maximum dive depth recorded for an Emperor Penguin?",
    options: ["100 meters", "265 meters", "565 meters", "1,200 meters"],
    correctIndex: 2,
    explanation: "Emperor penguins can dive to 565 meters and hold their breath for over 20 minutes, hunting Antarctic toothfish and squid beneath sea ice.",
    status: "published"
  },
  {
    id: "ant-m-27",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What adaptation do Weddell Seals use to maintain breathing holes through thick Antarctic sea ice?",
    options: ["They use their flippers to crack ice", "They use their large upper canine and incisor teeth to saw circular breathing holes through the ice", "They follow ship channels", "They seek out natural pressure cracks"],
    correctIndex: 1,
    explanation: "Weddell seals wear down their teeth sawing ice holes, often dying prematurely in old age when worn teeth can no longer maintain breathing access.",
    status: "published"
  },
  {
    id: "ant-m-28",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the deepest recorded dive of the Southern Elephant Seal, making it the deepest-diving non-cetacean mammal?",
    options: ["500 meters", "1,000 meters", "2,388 meters", "5,000 meters"],
    correctIndex: 2,
    explanation: "Elephant seals collapse their lungs during deep dives, storing oxygen in blood and muscles with exceptionally high concentrations of myoglobin.",
    status: "published"
  },
  {
    id: "ant-m-29",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What Antarctic fish family produces antifreeze glycoproteins (AFGPs) that prevent ice crystal formation in blood at sub-zero temperatures?",
    options: ["Cods (Gadidae)", "Notothenioids (suborder Notothenioidei)", "Salmon (Salmonidae)", "Eels (Anguillidae)"],
    correctIndex: 1,
    explanation: "Notothenioids dominate Antarctic fish diversity, evolving antifreeze proteins as a key adaptation to sub-zero seawater after losing hemoglobin in some lineages.",
    status: "published"
  },
  {
    id: "ant-m-30",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What remarkable evolutionary trait have the Channichthyidae (icefish) of Antarctic waters lost compared to all other vertebrates?",
    options: ["Their spine", "Functional hemoglobin and red blood cells \u2014 they have completely transparent, colorless blood", "Their swim bladder", "Their optic nerve"],
    correctIndex: 1,
    explanation: "Icefish compensate for the lack of hemoglobin with a massive heart pumping large volumes of well-oxygenated cold water through a highly vascularized system.",
    status: "published"
  },
  {
    id: "ant-m-31",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What commercially important deep-sea fish native to Antarctic and Subantarctic waters, also known as Chilean sea bass, is caught by longliners and is subject to strict quota management?",
    options: ["Antarctic krill", "Patagonian Toothfish (Dissostichus eleginoides)", "Antarctic toothfish", "Mackerel icefish"],
    correctIndex: 1,
    explanation: "Patagonian toothfish lives to 50 years, growing to 2 meters; managed by CCAMLR under strict catch limits using satellite vessel monitoring.",
    status: "published"
  },
  {
    id: "ant-m-32",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is CCAMLR, the international organization that manages marine living resources in the Southern Ocean?",
    options: ["Commission for the Conservation of Antarctic Marine Living Resources", "Climate Change Adaptation and Marine Liability Register", "Coordinated Conservation Authority for Marine and Littoral Resources", "Convention on Conservation of Antarctic Marine Life and Resources"],
    correctIndex: 0,
    explanation: "CCAMLR was established under the Antarctic Treaty System in 1982, using an ecosystem-based approach to regulate fishing and protect the Southern Ocean.",
    status: "published"
  },
  {
    id: "ant-m-33",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What vast marine protected area in the Ross Sea, established in 2016 by CCAMLR, is the world's largest MPA?",
    options: ["Papah\u0101naumoku\u0101kea MPA", "Ross Sea Region MPA", "Phoenix Islands MPA", "Antarctic Peninsula MPA"],
    correctIndex: 1,
    explanation: "The Ross Sea MPA covers 1.55 million square kilometers, with over 1.12 million km² designated as a no-take zone prohibiting all commercial fishing.",
    status: "published"
  },
  {
    id: "ant-m-34",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "Why has the harvest of Antarctic krill by commercial fishing fleets been a subject of intense ecological concern?",
    options: ["Krill produce toxic byproducts when caught", "Krill are the keystone prey of penguins, seals, and whales; concentrated fishing near penguin colonies could cause population crashes", "Krill fisheries produce greenhouse gases", "Krill nets destroy coral reefs"],
    correctIndex: 1,
    explanation: "Krill biomass may be declining due to sea ice loss, which is essential habitat for juvenile krill feeding on ice algae; fishing pressure compounds this stress.",
    status: "published"
  },
  {
    id: "ant-m-35",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the principal use of Antarctic krill harvested commercially?",
    options: ["Human food consumption in Asia", "Omega-3 fish oil supplements, aquaculture feed, and pharmaceutical products", "Biofuel production", "Fertilizer production"],
    correctIndex: 1,
    explanation: "Aker BioMarine and other companies harvest krill using continuous pumping systems for krill oil (phospholipid omega-3s) sold as premium health supplements.",
    status: "published"
  },
  {
    id: "ant-m-36",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What rare metal considered critical for high-tech manufacturing and clean energy has been identified in massive quantities in the polymetallic nodule fields of the Southern Ocean floor?",
    options: ["Uranium", "Manganese (and associated cobalt, nickel, copper in nodules)", "Gold", "Lithium"],
    correctIndex: 1,
    explanation: "Polymetallic nodules on the Southern Ocean abyssal plain contain manganese, cobalt, copper, and nickel, but mining is currently banned under the Madrid Protocol.",
    status: "published"
  },
  {
    id: "ant-m-37",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the geological mechanism by which Antarctica and Australia separated approximately 85 million years ago?",
    options: ["A meteorite impact", "Gondwana rifting \u2014 continental drift driven by mantle convection pulled them apart", "Sea level rise", "Volcanic arc formation"],
    correctIndex: 1,
    explanation: "The Tasman Sea began opening ~84 Ma as the Indo-Australian Plate rifted from Antarctica, completing separation and allowing the Southern Ocean to encircle Antarctica by ~34 Ma.",
    status: "published"
  },
  {
    id: "ant-m-38",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "When did Antarctica glaciate and transition from a forested to an ice-covered continent?",
    options: ["Around 2 million years ago", "Around 34 million years ago (Eocene-Oligocene boundary)", "Around 100 million years ago", "Around 500 million years ago"],
    correctIndex: 1,
    explanation: "The opening of the Drake Passage ~34 Ma enabled the Antarctic Circumpolar Current, thermally isolating Antarctica and triggering abrupt glaciation.",
    status: "published"
  },
  {
    id: "ant-m-39",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What fossil discovery in Antarctica proved that the continent once had a warm, forested climate during the Cretaceous period?",
    options: ["Dinosaur footprints on the Ross Ice Shelf", "Fossils of dinosaurs, forests (Glossopteris), Lystrosaurus, and temperate trees in the Transantarctic Mountains", "Marine invertebrate shells only", "Human artifacts below the ice"],
    correctIndex: 1,
    explanation: "Glossopteris flora, Lystrosaurus reptile fossils, and dinosaur bones discovered near the Beardmore Glacier confirmed Antarctica's position in Gondwana.",
    status: "published"
  },
  {
    id: "ant-m-40",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What dinosaur species unique to Antarctica was discovered on James Ross Island and lived approximately 70 million years ago?",
    options: ["T. rex", "Cryolophosaurus and Antarctopelta", "Triceratops", "Velociraptor"],
    correctIndex: 1,
    explanation: "Cryolophosaurus ellioti (a crested theropod) and Antarctopelta oliveroi (an ankylosaur) are among the dozen dinosaur species unearthed from Antarctic rocks.",
    status: "published"
  },
  {
    id: "ant-m-41",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the geographic South Magnetic Pole, and how does it differ from the Geographic South Pole?",
    options: ["They are identical", "The South Magnetic Pole is where Earth's magnetic field lines point vertically downward; it wanders over time and is currently off the coast of East Antarctica, far from 90\u00b0 S", "The Magnetic Pole is always 5\u00b0 from Geographic South", "The Magnetic Pole is fixed at the center of East Antarctica"],
    correctIndex: 1,
    explanation: "In 2024, the South Magnetic Pole was located at approximately 64.1°S, 135.8°E in the Indian Ocean sector, drifting northwest at 10–15 km per year.",
    status: "published"
  },
  {
    id: "ant-m-42",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the Geomagnetic South Pole, distinct from both the Geographic and South Magnetic Poles?",
    options: ["A theoretical dipole pole of the best-fit geocentric dipole model of Earth's magnetic field", "The point where compass needles point straight down", "The pole defined by the planet's rotation axis", "The geographic center of Antarctica"],
    correctIndex: 0,
    explanation: "The Geomagnetic South Pole is the antipode of the north geomagnetic pole in the geocentric axial dipole approximation, currently near Vostok Station in East Antarctica.",
    status: "published"
  },
  {
    id: "ant-m-43",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "Which mountain range in East Antarctica, one of the largest and highest in the continent, rises to over 3,500 meters and separates Enderby Land from Mac. Robertson Land?",
    options: ["Ellsworth Mountains", "Prince Charles Mountains", "Shackleton Range", "Pensacola Mountains"],
    correctIndex: 1,
    explanation: "The Prince Charles Mountains extend over 500 km, containing massive coal seams and Precambrian basement rocks of the East Antarctic craton.",
    status: "published"
  },
  {
    id: "ant-m-44",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the highest mountain range in Antarctica, containing the continent's highest peak Vinson Massif?",
    options: ["Transantarctic Mountains", "Ellsworth Mountains (Sentinel Range)", "Shackleton Range", "Queen Maud Mountains"],
    correctIndex: 1,
    explanation: "The Ellsworth Mountains rise dramatically from the West Antarctic Ice Sheet, with the Heritage Range forming the southern subrange.",
    status: "published"
  },
  {
    id: "ant-m-45",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the elevation of Vinson Massif, the highest mountain in Antarctica, measured by GPS surveys?",
    options: ["4,477 meters", "4,892 meters", "5,210 meters", "4,100 meters"],
    correctIndex: 1,
    explanation: "Vinson Massif was first climbed in December 1966 by an American alpine team led by Nicholas Clinch, forming one of the Seven Summits.",
    status: "published"
  },
  {
    id: "ant-m-46",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "Which expeditioner was the first person to reach the South Pole alone and unsupported, completing the journey on skis in 1993?",
    options: ["Reinhold Messner", "Erling Kagge", "B\u00f8rge Ousland", "Mike Stroud"],
    correctIndex: 1,
    explanation: "Erling Kagge completed the 1,400 km solo unsupported ski trek from Berkner Island to the South Pole in 50 days, also becoming the first to complete the Three Poles challenge.",
    status: "published"
  },
  {
    id: "ant-m-47",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What 1912 race landmark did Robert Falcon Scott describe in his diaries when he reached the South Pole?",
    options: ["We found the pole unmarked", "Great God, this is an awful place and terrible enough for us to have laboured to it without the reward of priority", "We have beaten Amundsen by 2 weeks", "The pole is not worth reaching"],
    correctIndex: 1,
    explanation: "Scott found Amundsen's Norwegian tent, Polheim, with a note and the Norwegian flag already planted; he and his team all perished on the return journey.",
    status: "published"
  },
  {
    id: "ant-m-48",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What was the first mechanized land crossing of the entire Antarctic continent, completed in 1958 as part of the Commonwealth Trans-Antarctic Expedition?",
    options: ["Scott's Terra Nova trek", "The Fuchs\u2013Hillary Commonwealth Trans-Antarctic Expedition using Sno-Cat vehicles", "Amundsen's ski traverse", "Byrd's 1929 tractor crossing"],
    correctIndex: 1,
    explanation: "Vivian Fuchs led the overland team with Sno-Cats from the Weddell Sea to the South Pole; Edmund Hillary led the New Zealand support party from Scott Base.",
    status: "published"
  },
  {
    id: "ant-m-49",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What was the first successful overland crossing of Antarctica using only human power (skiing and kite-skiing), completed in 1996–1997 by Børge Ousland?",
    options: ["Fuchs Crossing", "Ousland Solo Trans-Antarctic Expedition", "Mear\u2013Swan\u2013Wood crossing", "Messner Antarctic Crossing"],
    correctIndex: 1,
    explanation: "Ousland crossed 2,845 km in 64 days entirely alone, using kite-skiing to cover hundreds of kilometers per day across the polar plateau.",
    status: "published"
  },
  {
    id: "ant-m-50",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What famous early 20th-century 'heroic age' Antarctic expedition used ponies, dogs, and motor sledges before resorting to man-hauling to reach the South Pole?",
    options: ["Amundsen's Fram Expedition", "Scott's Terra Nova Expedition (1910\u20131913)", "Shackleton's Nimrod Expedition", "Mawson's Australasian Antarctic Expedition"],
    correctIndex: 1,
    explanation: "Scott used a combination of Manchurian ponies, motor sledges (which quickly broke down), and sled dogs, ultimately relying on man-hauling on the polar plateau.",
    status: "published"
  },
  {
    id: "ant-m-51",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the medical condition of 'snow blindness' (photokeratitis) that afflicted many polar explorers?",
    options: ["Frostbite of the eyelids", "Temporary corneal inflammation caused by UV radiation reflected from snow and ice burning the unprotected cornea", "Permanent retinal damage from polar darkness", "Hallucinations from carbon monoxide"],
    correctIndex: 1,
    explanation: "Snow blindness causes intense pain, light sensitivity, and temporary vision loss 6–12 hours after UV overexposure; Inuit goggles with narrow slits were the original protection.",
    status: "published"
  },
  {
    id: "ant-m-52",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the psychological condition known as 'winter-over syndrome' affecting some personnel at isolated Antarctic stations during the polar winter?",
    options: ["Seasonal Affective Disorder with additional cognitive and behavioral changes (irritability, memory problems, 'big eye' insomnia)", "A bacterial infection from ice algae", "A form of acute mountain sickness", "Dehydration and salt imbalance"],
    correctIndex: 0,
    explanation: "Long isolation, darkness, confinement, and extreme cold create a cluster of symptoms including third-quarter lethargy, cognitive dulling, and interpersonal conflict.",
    status: "published"
  },
  {
    id: "ant-m-53",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the 'Antarctic Treaty System' (ATS)?",
    options: ["A single 1959 treaty only", "The body of agreements governing Antarctica including the 1959 treaty, CCAMLR (1982), and the Madrid Protocol (1991)", "The UN Security Council for Antarctica", "A bilateral US-Russia agreement"],
    correctIndex: 1,
    explanation: "The ATS comprises the original 1959 treaty, the 1972 Agreed Measures for Conservation of Antarctic Fauna and Flora, CCAMLR, and the 1991 Madrid Protocol.",
    status: "published"
  },
  {
    id: "ant-m-54",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "How many Consultative Parties (nations with full decision-making rights) does the Antarctic Treaty System currently have?",
    options: ["12 original signatories only", "29 consultative parties (as of 2024)", "54 parties (all signatories)", "7 nations only"],
    correctIndex: 1,
    explanation: "Nations gain Consultative Party status by demonstrating substantial Antarctic research activities; as of 2024, 29 nations hold consultative rights out of 56 total signatories.",
    status: "published"
  },
  {
    id: "ant-m-55",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is 'isostatic rebound' (glacial isostatic adjustment), which Antarctica will experience if its ice sheet melts?",
    options: ["Cooling of the bedrock after losing ice insulation", "The slow uplift of the crustal bedrock as it rebounds elastically after being freed from the weight of overlying glacial ice", "The increased volcanism triggered by ice removal", "Formation of new mountain ranges"],
    correctIndex: 1,
    explanation: "Ongoing ice loss in Greenland and Antarctica is already causing measurable isostatic rebound; full rebound would occur over thousands of years after complete deglaciation.",
    status: "published"
  },
  {
    id: "ant-m-56",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "Which pioneering American aviator made the first flight over the South Pole in November 1929?",
    options: ["Charles Lindbergh", "Richard Byrd", "Amelia Earhart", "Lincoln Ellsworth"],
    correctIndex: 1,
    explanation: "Rear Admiral Richard Byrd flew a Ford Trimotor 'Floyd Bennett' over the Geographic South Pole on November 29, 1929, accompanied by three crew members.",
    status: "published"
  },
  {
    id: "ant-m-57",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the name of the joint US–New Zealand ice-free volcanic island in the Ross Sea that serves as the major hub for logistics in the Ross Sea region?",
    options: ["Peter I Island", "Ross Island", "Berkner Island", "Siple Island"],
    correctIndex: 1,
    explanation: "Ross Island contains McMurdo Station, Scott Base, the active volcano Mount Erebus, and the historic huts of Scott and Shackleton's expeditions.",
    status: "published"
  },
  {
    id: "ant-m-58",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What are the three historic polar exploration huts preserved on Ross Island as Antarctic Heritage Trust sites?",
    options: ["Amundsen's Polheim, Scott's Cape Evans hut, and Shackleton's Cape Royds hut", "Scott's Discovery Hut (Hut Point), Cape Evans hut (Terra Nova), and Shackleton's Nimrod hut at Cape Royds", "Byrd Station, McMurdo, and Gondwana Station", "Mawson's Hut, Amundsen's Tent, and Scott's final camp"],
    correctIndex: 1,
    explanation: "All three huts on Ross Island are frozen time capsules; Shackleton's Cape Royds hut (1908) still contains food, equipment, and whisky bottles preserved by Antarctic cold.",
    status: "published"
  },
  {
    id: "ant-m-59",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What Australian National Heritage-listed explorer's hut in Commonwealth Bay, East Antarctica, remains in near-perfect condition from the 1911–1914 Australasian Antarctic Expedition?",
    options: ["Scott's Southern Cross Hut", "Mawson's Hut", "Davis's Hut", "Wild's Hut"],
    correctIndex: 1,
    explanation: "Douglas Mawson's prefabricated hut at Cape Denison has been partially restored; severe katabatic winds have blasted the structure for over a century.",
    status: "published"
  },
  {
    id: "ant-m-60",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What was the most significant scientific achievement of Sir Douglas Mawson's 1911–1914 Australasian Antarctic Expedition?",
    options: ["First South Pole crossing", "Comprehensive mapping of 2,400 km of East Antarctic coastline and first use of wireless radio from Antarctica", "Discovery of Lake Vostok", "First use of aircraft in Antarctica"],
    correctIndex: 1,
    explanation: "Mawson also survived a harrowing solo return from the Far Eastern sledging journey after his two companions died, covering 160 km alone with severe hypervitaminosis A.",
    status: "published"
  },
  {
    id: "ant-m-61",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What catastrophic medical disaster struck Douglas Mawson's Far Eastern sledging party in 1912, likely causing the death of Mertz and Mawson's own severe illness?",
    options: ["Scurvy", "Vitamin A toxicity (hypervitaminosis A) from eating sled dog liver", "Frostbite gangrene", "Carbon monoxide poisoning"],
    correctIndex: 1,
    explanation: "Husky liver contains lethal concentrations of vitamin A; Xavier Mertz died after consuming large quantities, and Mawson suffered skin peeling, hair loss, and neurological symptoms.",
    status: "published"
  },
  {
    id: "ant-m-62",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What feature of Antarctica is classified as the world's largest desert by area, covering approximately 14.2 million square kilometers?",
    options: ["It is not technically a desert", "The Antarctic continent is classified as a polar desert due to extreme aridity, receiving less than 200 mm precipitation per year on average", "Only the Dry Valleys count as desert", "Only East Antarctica is a desert"],
    correctIndex: 1,
    explanation: "Antarctica receives less annual precipitation than the Sahara Desert; the hyper-arid interior plateau receives under 50 mm of water equivalent per year.",
    status: "published"
  },
  {
    id: "ant-m-63",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the Antarctic ozone hole, and during which season does it reach its maximum extent?",
    options: ["A permanent gap throughout the year", "A seasonal thinning of stratospheric ozone over Antarctica that reaches maximum extent each Southern Hemisphere spring (September\u2013October)", "A gap only visible from space in summer", "A hole in the sea ice allowing sunlight penetration"],
    correctIndex: 1,
    explanation: "Polar stratospheric clouds form in the cold polar winter stratosphere; when spring sunlight returns, chlorine chemistry on cloud surfaces rapidly destroys ozone.",
    status: "published"
  },
  {
    id: "ant-m-64",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the record minimum extent of the Antarctic ozone hole set in October 2006?",
    options: ["15 million km\u00b2", "29.5 million km\u00b2", "5 million km\u00b2", "40 million km\u00b2"],
    correctIndex: 1,
    explanation: "The 2006 ozone hole reached a record 29.5 million km², larger than the continent itself; gradual healing has been observed since 2000 due to the Montreal Protocol.",
    status: "published"
  },
  {
    id: "ant-m-65",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the DOME-A (Dome Argus) location, home to China's Kunlun research station, notable for in ice core science?",
    options: ["The warmest location in Antarctica", "The highest ice dome in East Antarctica (4,093 m) with the coldest surface temperatures ever measured on Earth (-98.6\u00b0C by satellite)", "The site of the deepest subglacial lake", "The lowest elevation on the continent"],
    correctIndex: 1,
    explanation: "In 2018, satellite thermal infrared measurements recorded -98.6°C at Dome A on calm, clear winter nights with low-level temperature inversion; the coldest possible surface temperature.",
    status: "published"
  },
  {
    id: "ant-m-66",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the East Antarctic Ice Sheet (EAIS) notable for in terms of global sea level?",
    options: ["It contains negligible sea level equivalent", "It contains approximately 52 meters of potential global sea level rise \u2014 the largest single reservoir of freshwater on Earth", "It is already in rapid collapse", "It contributes only 2 meters of potential sea level"],
    correctIndex: 1,
    explanation: "The EAIS covers 10.1 million km² and holds 26.5 million cubic kilometers of ice, though it is considered more stable than the West Antarctic Ice Sheet due to bedrock topography.",
    status: "published"
  },
  {
    id: "ant-m-67",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the Aurora Australis research vessel that served the Australian Antarctic Division for 30 years before retirement in 2020?",
    options: ["A nuclear-powered icebreaker", "An ice-strengthened orange-hulled Antarctic supply and research ship that served Australian Antarctic stations since 1990", "A submarine", "A hovercraft"],
    correctIndex: 1,
    explanation: "The Aurora Australis was replaced by the RSV Nuyina, a far larger and more capable icebreaker capable of breaking 1.65 m thick ice continuously at 3 knots.",
    status: "published"
  },
  {
    id: "ant-m-68",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the NSF's modern icebreaker that has replaced the aging USCGC Polar Star for resupply of McMurdo Station?",
    options: ["RRS Sir David Attenborough", "USCGC Polar Security Cutter / RSV Nuyina as supplemental", "USCGC Healy", "MV Happy Diamond"],
    correctIndex: 0,
    explanation: "The RRS Sir David Attenborough (UK) entered service in 2020; the US relies on the aging USCGC Polar Star pending new Polar Security Cutters under construction.",
    status: "published"
  },
  {
    id: "ant-m-69",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the crevasse-detection radar system deployed on vehicles crossing the McMurdo-Pole Traverse to prevent falling through hidden crevasses?",
    options: ["Lidar scanning", "Ground-penetrating radar (GPR) arrays towed on sleds ahead of vehicle convoys", "Thermal imaging cameras", "Seismic sensors"],
    correctIndex: 1,
    explanation: "GPR transmits electromagnetic pulses into the snow; voids beneath snow bridges reflect distinctive hyperbolic signatures on the radar return profile.",
    status: "published"
  },
  {
    id: "ant-m-70",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What type of aircraft is primarily used to fly personnel and cargo between Christchurch, New Zealand, and McMurdo Station, Antarctica?",
    options: ["Commercial Boeing 747s", "C-17 Globemaster III and LC-130 Hercules ski-equipped aircraft", "Concorde supersonic transport", "Helicopters only"],
    correctIndex: 1,
    explanation: "USAF C-17s land on the compacted snow Phoenix Airfield runway, while LC-130s with retractable skis can operate on inland ice runways near the South Pole.",
    status: "published"
  },
  {
    id: "ant-m-71",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "Why does Antarctica have the highest mean surface elevation of any continent on Earth?",
    options: ["Because it has the tallest mountain ranges", "Because the ice sheet, averaging over 2,000 meters thick, dramatically raises the effective elevation above that of the bedrock topography", "Because it has no ocean surrounding it", "Because its bedrock is uplifted by active tectonics"],
    correctIndex: 1,
    explanation: "Antarctica's mean surface elevation is approximately 2,300 meters, largely a product of ice sheet depth rather than bedrock altitude.",
    status: "published"
  },
  {
    id: "ant-m-72",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What part of the bedrock beneath the West Antarctic Ice Sheet lies well below sea level, making it susceptible to marine ice sheet instability?",
    options: ["All of West Antarctica is above sea level", "The Byrd Subglacial Basin and Pine Island/Thwaites trough reach 2,000+ meters below sea level", "Only surface melt pools", "The Weddell Sea basin"],
    correctIndex: 1,
    explanation: "Marine ice sheets rest on retrograde slopes (deepening inland), meaning ocean water can potentially undercut the grounding line progressively further inland.",
    status: "published"
  },
  {
    id: "ant-m-73",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the 'grounding line' in glaciology, crucial for understanding Antarctic ice sheet stability?",
    options: ["The mark left by a glacier on a rock face", "The boundary where a glacier transitions from resting on bedrock to floating as a buoyant ice shelf on the ocean", "A rope anchoring scientists to the ice", "The line of maximum sea ice extent"],
    correctIndex: 1,
    explanation: "When the grounding line retreats inland on a reverse bed slope, ice discharge accelerates — a key instability mechanism at Thwaites and Pine Island glaciers.",
    status: "published"
  },
  {
    id: "ant-m-74",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What important climate-regulating process occurs in the deep waters of the Weddell Sea as cold, saline water sinks to the ocean floor?",
    options: ["Carbon sequestration in coral", "Weddell Sea Deep Water formation \u2014 driving the lower limb of the global thermohaline circulation", "Freshwater injection from glaciers", "Methane hydrate dissolution"],
    correctIndex: 1,
    explanation: "Dense Weddell Sea Bottom Water spreads northward into all three ocean basins, carrying dissolved oxygen to the deep sea and modulating global heat transport.",
    status: "published"
  },
  {
    id: "ant-m-75",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the dominant wind belt encircling Antarctica between approximately 40° and 60° South latitude, driving the world's strongest sustained ocean surface winds?",
    options: ["Trade winds", "Roaring Forties, Furious Fifties, and Screaming Sixties", "Polar easterlies", "Intertropical Convergence Zone"],
    correctIndex: 1,
    explanation: "The unbroken fetch around Antarctica allows the Roaring Forties to generate enormous swells; sailing ships historically avoided the Drake Passage by rounding the Horn.",
    status: "published"
  },
  {
    id: "ant-m-76",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the scientific research program that since 1957 has maintained the continuous baseline measurement of atmospheric CO₂ at the South Pole, complementing the Mauna Loa Keeling Curve?",
    options: ["EPICA baseline", "NOAA Global Monitoring Laboratory South Pole CO\u2082 record", "SCAR Atmospheric Monitoring", "British Antarctic Survey Baseline"],
    correctIndex: 1,
    explanation: "NOAA's South Pole CO₂ time series confirms the globally rising trend; the clean polar air provides an ideal background atmospheric signal.",
    status: "published"
  },
  {
    id: "ant-m-77",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What important role do Antarctic phytoplankton play in regulating Earth's climate through the biological pump?",
    options: ["They reflect sunlight back to space", "They absorb CO\u2082 during photosynthesis; when they die and sink, they export organic carbon to the deep ocean sequestering it for centuries", "They produce oxygen only for local use", "They generate katabatic winds through transpiration"],
    correctIndex: 1,
    explanation: "The Southern Ocean biological pump sequesters an estimated 0.5–1 billion tonnes of carbon annually, representing a critical but vulnerable climate service.",
    status: "published"
  },
  {
    id: "ant-m-78",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What ocean fertilization experiment demonstrated that adding iron to the iron-limited Southern Ocean increases phytoplankton productivity dramatically?",
    options: ["LOHAFEX experiment", "SOIREE (Southern Ocean Iron Release Experiment)", "Biobench", "CLAW hypothesis test"],
    correctIndex: 1,
    explanation: "SOIREE in 1999 showed that a 300 km² iron-enriched patch produced a massive phytoplankton bloom; subsequent research has explored carbon sequestration potential.",
    status: "published"
  },
  {
    id: "ant-m-79",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What limiting nutrient controls phytoplankton growth across most of the vast Southern Ocean despite abundant nitrogen and phosphorus?",
    options: ["Carbon dioxide", "Dissolved iron", "Silica", "Phosphorus"],
    correctIndex: 1,
    explanation: "Iron enters the Southern Ocean primarily from deep upwelling, dust deposition, and meltwater from glaciers; its scarcity limits phytoplankton blooms to localized areas.",
    status: "published"
  },
  {
    id: "ant-m-80",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the significance of the Wilkes Land gravity anomaly discovered beneath the East Antarctic ice sheet?",
    options: ["It is a volcanic chain", "A massive circular gravity anomaly potentially indicating the world's largest meteorite impact crater (500 km diameter) or a large igneous province", "It marks the geographic south pole", "It is a subglacial mountain range"],
    correctIndex: 1,
    explanation: "The controversial 500 km Wilkes Land anomaly could represent either a giant 250-million-year-old impact structure or a large mantle plume feature; debate continues.",
    status: "published"
  },
  {
    id: "ant-m-81",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What Antarctic volcanic province in Marie Byrd Land includes Mount Siple, Mount Waesche, and the Executive Committee Range, driven by an underlying mantle plume?",
    options: ["Ross Island Volcanic Group", "Marie Byrd Land Volcanic Province", "Deception Island Volcanic Arc", "Antarctic Peninsula Arc"],
    correctIndex: 1,
    explanation: "The Marie Byrd Land hotspot has been active for at least 25 million years, potentially contributing to West Antarctic Ice Sheet instability through basal melting.",
    status: "published"
  },
  {
    id: "ant-m-82",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What active submarine volcano discovered in 1967 sits in the Bransfield Strait off the South Shetland Islands, occasionally causing sea discoloration and gas bubbling?",
    options: ["Deception Island", "Orca Seamount (Submarino Bransfield)", "Penguin Island", "Paulet Island"],
    correctIndex: 1,
    explanation: "The Bransfield Strait is a back-arc spreading center, hosting active submarine volcanic activity between the Antarctic Peninsula and the South Shetland Islands.",
    status: "published"
  },
  {
    id: "ant-m-83",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What 1989 ecological disaster raised global awareness about Antarctic environmental vulnerability when a Argentine naval ship ran aground?",
    options: ["Rainbow Warrior sinking", "ARA Bah\u00eda Para\u00edso oil spill (Arthur Harbor, Palmer Station)", "Exxon Valdez spill", "Endurance sinking"],
    correctIndex: 1,
    explanation: "The Bahía Paraíso sank near Palmer Station releasing 600,000 liters of diesel fuel, killing thousands of seabirds and impacting the Arthur Harbor marine ecosystem.",
    status: "published"
  },
  {
    id: "ant-m-84",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the problem of 'invasive species' in Antarctica, and which organisms are of greatest concern?",
    options: ["Polar bears from the Arctic", "Non-native plants, insects, rodents, and pathogens accidentally introduced by ships and personnel, threatening the unique Antarctic biota", "Antarctic penguins invading South America", "Antarctic krill expanding globally"],
    correctIndex: 1,
    explanation: "SCAR and COMNAP enforce strict biosecurity protocols — boot washing, clothing inspection, and cargo fumigation — to prevent introductions like Poa annua grass already established on King George Island.",
    status: "published"
  },
  {
    id: "ant-m-85",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the cleanest protocol used at Antarctic scientific stations to handle human waste to prevent contamination of pristine Antarctic environments?",
    options: ["All waste is buried in ice", "All human waste and grey water is either macerated and discharged into the sea per MARPOL or shipped back out of Antarctica", "Burning in open pits", "Deposited in crevasses"],
    correctIndex: 1,
    explanation: "The 1991 Madrid Protocol mandates waste minimization, including removing all non-sewage waste from Antarctica, prohibiting polychlorinated biphenyls (PCBs), and banning open burning.",
    status: "published"
  },
  {
    id: "ant-m-86",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is 'microplastic contamination', and has it been detected in Antarctica?",
    options: ["No microplastics have ever been found in Antarctica", "Yes, microplastic particles have been found in Antarctic surface water, sea ice, sediments, seabird stomachs, and even in fresh snow on the polar plateau", "Only in the Antarctic Peninsula, not the interior", "Microplastics are only a problem in tropical oceans"],
    correctIndex: 1,
    explanation: "Studies have found microplastics up to 1,000 km from the coast in Antarctic snow, carried by atmospheric transport and ocean currents.",
    status: "published"
  },
  {
    id: "ant-m-87",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What innovative renewable energy system did Australia pioneer at Mawson Station to reduce Antarctic diesel fuel consumption?",
    options: ["Solar panels covering the ice sheet", "Wind turbines (three 300 kW Enercon turbines) providing over 50% of Mawson Station's annual electricity", "Geothermal power from volcanic vents", "Hydrogen fuel cells"],
    correctIndex: 1,
    explanation: "Mawson Station's wind turbines were the first large-scale wind power installation in Antarctica, saving over 200,000 liters of diesel fuel annually.",
    status: "published"
  },
  {
    id: "ant-m-88",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the location and characteristic of the South Pole Station's 10-meter dark sector telescope (AST/RO)?",
    options: ["It observes gamma rays from space", "It operates at submillimeter wavelengths detecting cold molecular clouds in the Milky Way using the South Pole's ultra-dry, stable atmosphere", "It monitors sea ice from altitude", "It measures aurora intensity"],
    correctIndex: 1,
    explanation: "The precipitable water vapor at the South Pole can fall below 0.2 mm in winter, making it one of the world's premier sites for submillimeter and far-infrared astronomy.",
    status: "published"
  },
  {
    id: "ant-m-89",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the BICEP/Keck Array telescope at the South Pole searching for?",
    options: ["Neutrinos from supernovae", "Primordial gravitational waves imprinted on the cosmic microwave background (B-mode polarization) as evidence of cosmic inflation", "Signals from extraterrestrial intelligence", "Solar flares"],
    correctIndex: 1,
    explanation: "The BICEP2 experiment caused excitement in 2014 when it announced a detection later attributed to galactic dust; BICEP/Keck continues improving sensitivity.",
    status: "published"
  },
  {
    id: "ant-m-90",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the deepest-drilled ice core in history, extracted at the South Pole from the WAIS Divide site, reaching back approximately 68,000 years?",
    options: ["Vostok Core", "WAIS Divide Ice Core (WDC06A)", "EPICA Dome C", "Dome Fuji"],
    correctIndex: 1,
    explanation: "The WAIS Divide core provides the highest annual resolution climate record of any ice core, with distinct seasonal layers preserved down to 3,405 meters depth.",
    status: "published"
  },
  {
    id: "ant-m-91",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the 'oldest ice' initiative being pursued under the international Beyond EPICA project, and where is the optimal site?",
    options: ["Drilling to find pre-Cambrian microfossils at the coast", "Extracting ice cores covering 1.5 million years of climate history from the Little Dome C site in East Antarctica", "Sampling subglacial Lake Vostok water", "Drilling at the South Pole for 2-million-year-old ice"],
    correctIndex: 1,
    explanation: "Beyond EPICA aims to access ice containing air bubbles spanning 1.2–1.5 million years, covering the enigmatic Mid-Pleistocene Transition shift from 41,000 to 100,000-year ice age cycles.",
    status: "published"
  },
  {
    id: "ant-m-92",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "Which Antarctic research icebreaker, operated by the British Antarctic Survey, completed its maiden Antarctic voyage in 2020 and is named after a legendary naturalist?",
    options: ["RRS James Clark Ross", "RRS Sir David Attenborough", "MV Akademik Federov", "CCGS Louis St. Laurent"],
    correctIndex: 1,
    explanation: "The RRS Sir David Attenborough, nicknamed 'Boaty McBoatface' in an internet poll, is the UK's most capable polar research vessel with advanced sampling and coring equipment.",
    status: "published"
  },
  {
    id: "ant-m-93",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the 'polar vortex', and how does it relate to Antarctica?",
    options: ["Only an Arctic phenomenon", "A persistent large-scale cyclone of cold air surrounding the South Pole during winter, isolating the polar stratosphere and enabling polar stratospheric cloud formation", "A winter ocean current", "A katabatic wind pattern"],
    correctIndex: 1,
    explanation: "The polar vortex creates the frigid, isolated stratospheric environment where ozone-destroying chemistry occurs; when the vortex breaks down in spring, ozone-depleted air disperses.",
    status: "published"
  },
  {
    id: "ant-m-94",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What type of unusual, nacreous (mother-of-pearl) stratospheric clouds form only in polar regions when temperatures drop below -78°C in the lower stratosphere?",
    options: ["Noctilucent clouds", "Polar Stratospheric Clouds (PSCs)", "Lenticular clouds", "Nimbostratus"],
    correctIndex: 1,
    explanation: "PSCs consist of supercooled droplets of water/nitric acid (Type I) or water ice (Type II), their iridescent colors caused by diffraction of sunlight through uniform-sized droplets.",
    status: "published"
  },
  {
    id: "ant-m-95",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What are 'noctilucent clouds' (NLCs), observed over Antarctica during summer nights at the highest latitudes?",
    options: ["Normal cumulus clouds at altitude", "Electric-blue wispy clouds forming in the mesosphere at 80+ km altitude, composed of ice crystals on meteoric dust, visible only when sunlit at twilight", "Stratospheric aerosol layers from volcanoes", "Ice crystal halos around the sun"],
    correctIndex: 1,
    explanation: "NLCs are the highest clouds in Earth's atmosphere, becoming more common and visible at lower latitudes as global temperatures rise and atmospheric water vapor increases.",
    status: "published"
  },
  {
    id: "ant-m-96",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the approximate annual mean temperature at the South Pole station?",
    options: ["-10\u00b0C", "-29\u00b0C", "-49\u00b0C", "-70\u00b0C"],
    correctIndex: 2,
    explanation: "The annual mean temperature at Amundsen-Scott South Pole Station is approximately -49°C, ranging from around -28°C in summer to -60°C or colder in winter.",
    status: "published"
  },
  {
    id: "ant-m-97",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the largest ice-free area on the Antarctic continent, supporting the most complex terrestrial ecosystems, including mosses, lichens, and invertebrates?",
    options: ["Ross Island", "McMurdo Dry Valleys system (Wright, Taylor, Victoria valleys)", "Queen Maud Land nunataks", "Antarctic Peninsula coastal areas"],
    correctIndex: 1,
    explanation: "The Dry Valleys cover roughly 4,800 km², the largest Antarctic ice-free area, kept arid by katabatic winds; they harbor Lakes Bonney, Hoare, Fryxell, and Don Juan Pond.",
    status: "published"
  },
  {
    id: "ant-m-98",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the saltiest natural body of water on Earth's surface, located in Wright Valley, Antarctica, at -53°C without freezing?",
    options: ["Dead Sea", "Don Juan Pond", "Lake Vanda", "Blood Falls brine pool"],
    correctIndex: 1,
    explanation: "Don Juan Pond has a salinity of approximately 40% (12 times saltier than seawater), consisting of calcium chloride brine that remains liquid well below -50°C.",
    status: "published"
  },
  {
    id: "ant-m-99",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the meromictic Lake Vanda in Wright Valley notable for?",
    options: ["It is frozen solid year-round", "Its deep waters are permanently stratified, with the deepest saline layer maintained at a remarkable +25\u00b0C by solar warming through the clear ice lid", "It contains freshwater only", "It connects to the ocean via a subglacial tunnel"],
    correctIndex: 1,
    explanation: "Solar radiation penetrates the 4-meter permanent ice cover of Lake Vanda, warming the deep hypolimnion; the stable brine layers prevent convective mixing.",
    status: "published"
  },
  {
    id: "ant-m-100",
    continent: "Antarctica",
    difficulty: "Medium",
    question: "What is the significance of Mount Erebus's persistent lava lake for volcanology?",
    options: ["It is the only lava lake in the Southern Hemisphere", "It is one of only a handful of persistent lava lakes worldwide, providing unique access to convecting magma and rare anorthoclase feldspar crystals (Erebus crystals) ejected by lava spattering", "It erupts every year catastrophically", "It is entirely underwater beneath the ice shelf"],
    correctIndex: 1,
    explanation: "Mount Erebus's phonolitic lava lake has been continuously active since at least 1972, enabling real-time seismic monitoring of magma convection dynamics.",
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
