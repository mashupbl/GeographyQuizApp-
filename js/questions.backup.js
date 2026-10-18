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
