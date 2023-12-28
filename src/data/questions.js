const QUESTIONS = [
    {
        "id": 1,
        "topic": "Sociology",
        "question": "What is sociology?",
        "answers": [
            "It is the study of society, human behavior, and social interactions.", 
            "It is the study of the moons, stars, and sun.", 
            "It is the study of the jungle and its fauna.", 
            "It is the study of the Earth's atmosphere and its chemical composition."
        ],
        "correctAnswer": 0
    },
    {
        "id": 2,
        "topic": "Sociology",
        "question": "What does a sociologist study?",
        "answers": [
            "Sociologists study the Earth's atmosphere and its chemical composition.", 
            "Sociologists study the moon and its fauna.", 
            "Sociologists study social structures, institutions, and how people interact within communities.", 
            "Sociologists study the jungle and the lives of animals."
        ],
        "correctAnswer": 2
    },
    {
        "id": 3,
        "topic": "Sociology",
        "question": "What is the role of culture in sociology?",
        "answers": [
            "The study of plant and animal cultivation.", 
            "Culture shapes behaviors, beliefs, and values within a society.", 
            "The chemical composition of substances.", 
            "Anatomy and functions of the human body."
        ],
        "correctAnswer": 1
    },
    {
        "id": 4,
        "topic": "Sociology",
        "question": "Define social inequality.",
        "answers": [
            "The study of physical fitness and exercise.", 
            "A mathematical concept in calculus.", 
            "The process of converting solid to liquid.", 
            "Disparities in wealth, opportunities, and privileges among individuals or groups."
        ],
        "correctAnswer": 3
    },
    {
        "id": 5,
        "topic": "Sociology",
        "question": `What is the significance of the "social contract" in sociology?`,
        "answers": [
            "A legal document between two individuals.", 
            "A business partnership agreement.", 
            "The implicit agreement within a society regarding mutual rights and responsibilities.", 
            "The rules of a chess game."
        ],
        "correctAnswer": 2
    },
    {
        "id": 6,
        "topic": "Sociology",
        "question": `Explain the term "socialization."`,
        "answers": [
            "The study of planetary orbits.", 
            "The chemical reaction between acids and bases.", 
            "The process of converting raw materials into finished products.", 
            "The process by which individuals learn societal norms, values, and behaviors."
        ],
        "correctAnswer": 3
    },
    {
        "id": 7,
        "topic": "Sociology",
        "question": `What is the role of a family in sociology?`,
        "answers": [
            "Families are studied as fundamental units influencing socialization and relationships.",
            "The study of geological formations.",
            "The role of vitamins in human health.",
            "The exploration of outer space."
        ],
        "correctAnswer": 0
    },
    {
        "id": 8,
        "topic": "Sociology",
        "question": `Define "gender roles" in sociology.`,
        "answers": [
            "The roles of different types of musical instruments.",
            "The characteristics of chemical elements.",
            "The rules of a sports game.",
            "Societal expectations regarding behaviors considered appropriate for males and females."
        ],
        "correctAnswer": 3
    },
    {
        "id": 9,
        "topic": "Sociology",
        "question": `What is the concept of "social mobility"?`,
        "answers": [
            "The process of generating electrical power.",
            "The study of ocean currents.",
            "The ability of individuals or groups to move within social hierarchies.",
            "The technique of mountain climbing."
        ],
        "correctAnswer": 2
    },
    {
        "id": 10,
        "topic": "Sociology",
        "question": `How does sociology contribute to social change?`,
        "answers": [
            "Sociology helps identify atmospheric conditions.",
            "Sociology helps identify and address societal issues.",
            "The process of cellular respiration.",
            "The rules of a card game."
        ],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "topic": "Mathematics",
        "question": "What is the product of 8 multiplied by 7?",
        "answers": [
            "45",
            "56",
            "64",
            "72"
        ],
        "correctAnswer": 1
    },
    {
        "id": 12,
        "topic": "Mathematics",
        "question": "If a triangle has angles of 30°, 60°, and 90°, what type of triangle is it?",
        "answers": [
            "Equilateral",
            "Isosceles",
            "Scalene",
            "Right-angled"
        ],
        "correctAnswer": 3
    },
    {
        "id": 13,
        "topic": "Mathematics",
        "question": "Solve for x: 2x - 5 = 7",
        "answers": [
            "1",
            "6",
            "8",
            "12"
        ],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "topic": "Mathematics",
        "question": "What is the value of π (pi) to five decimal places?",
        "answers": [
            "3.14159",
            "3.14285",
            "3.14567",
            "3.13792"
        ],
        "correctAnswer": 0
    },
    {
        "id": 15,
        "topic": "Mathematics",
        "question": "If a square has a side length of 4 units, what is its area?",
        "answers": [
            "8 square units",
            "12 square units",
            "16 square units",
            "20 square units"
        ],
        "correctAnswer": 2
    },
    {
        "id": 16,
        "topic": "Mathematics",
        "question": "What is the sum of the first 10 prime numbers?",
        "answers": [
            "50",
            "75",
            "129",
            "220"
        ],
        "correctAnswer": 2
    },
    {
        "id": 17,
        "topic": "Mathematics",
        "question": "If a = 3 and b = 4, what is the value of a² + b²?",
        "answers": [
            "7",
            "25",
            "9",
            "16"
        ],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "topic": "Mathematics",
        "question": "What is the LCM (Least Common Multiple) of 6 and 8?",
        "answers": [
            "12",
            "16",
            "24",
            "48"
        ],
        "correctAnswer": 2
    },
    {
        "id": 19,
        "topic": "Mathematics",
        "question": "If a box contains 5 red, 3 blue, and 2 green balls, what is the probability of picking a blue ball?",
        "answers": [
            "1/4",
            "1/5",
            "3/10",
            "2/9"
        ],
        "correctAnswer": 2
    },
    {
        "id": 20,
        "topic": "Mathematics",
        "question": "What is the value of 5! (5 factorial)?",
        "answers": [
            "120",
            "60",
            "30",
            "20"
        ],
        "correctAnswer": 0
    },
    {
        "id": 21,
        "topic": "Chemistry",
        "question": "What is the chemical formula for methane?",
        "answers": [
            "CH3OH",
            "CO2",
            "NH3",
            "CH4"
        ],
        "correctAnswer": 3
    },
    {
        "id": 22,
        "topic": "Chemistry",
        "question": "What is the atomic number of oxygen?",
        "answers": [
            "6",
            "7",
            "8",
            "9"
        ],
        "correctAnswer": 2
    },
    {
        "id": 23,
        "topic": "Chemistry",
        "question": "Which element is the most abundant in Earth's crust?",
        "answers": [
            "Iron",
            "Aluminum",
            "Silicon",
            "Oxygen"
        ],
        "correctAnswer": 3
    },
    {
        "id": 24,
        "topic": "Chemistry",
        "question": "What is the process of converting a gas to a liquid?",
        "answers": [
            "Condensation",
            "Evaporation",
            "Sublimation",
            "Vaporization"
        ],
        "correctAnswer": 0
    },
    {
        "id": 25,
        "topic": "Chemistry",
        "question": "Which gas is commonly known as laughing gas?",
        "answers": [
            "Oxygen",
            "Nitrous oxide",
            "Carbon dioxide",
            "Helium"
        ],
        "correctAnswer": 1
    },
    {
        "id": 26,
        "topic": "Chemistry",
        "question": "What is the chemical symbol for silver?",
        "answers": [
            "Ag",
            "Au",
            "Fe",
            "Cu"
        ],
        "correctAnswer": 0
    },
    {
        "id": 27,
        "topic": "Chemistry",
        "question": "Which element is a halogen and commonly used in water purification?",
        "answers": [
            "Fluorine",
            "Chlorine",
            "Bromine",
            "Iodine"
        ],
        "correctAnswer": 1
    },
    {
        "id": 28,
        "topic": "Chemistry",
        "question": "What is the chemical symbol for lead?",
        "answers": [
            "Pb",
            "Le",
            "Ld",
            "Pd"
        ],
        "correctAnswer": 0
    },
    {
        "id": 29,
        "topic": "Chemistry",
        "question": "Which gas makes up the majority of the Earth's atmosphere?",
        "answers": [
            "Oxygen",
            "Carbon dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correctAnswer": 2
    },
    {
        "id": 30,
        "topic": "Chemistry",
        "question": "What is the pH value of a strong acid?",
        "answers": [
            "7",
            "Less than 7",
            "Greater than 7",
            "14"
        ],
        "correctAnswer": 1
    },
    {
        "id": 31,
        "topic": "Physics",
        "question": "What is the SI unit of pressure?",
        "answers": [
            "Pascal",
            "Newton",
            "Joule",
            "Watt"
        ],
        "correctAnswer": 0
    },
    {
        "id": 32,
        "topic": "Physics",
        "question": "What is the phenomenon where a wave changes direction as it passes through a medium?",
        "answers": [
            "Reflection",
            "Refraction",
            "Diffraction",
            "Interference"
        ],
        "correctAnswer": 1
    },
    {
        "id": 33,
        "topic": "Physics",
        "question": "What is the formula for calculating work?",
        "answers": [
            "W = Pt",
            "W = ma",
            "W = QV",
            "W = Fd"
        ],
        "correctAnswer": 3
    },
    {
        "id": 34,
        "topic": "Physics",
        "question": "Which type of energy is associated with motion?",
        "answers": [
            "Potential energy",
            "Kinetic energy",
            "Thermal energy",
            "Chemical energy"
        ],
        "correctAnswer": 1
    },
    {
        "id": 35,
        "topic": "Physics",
        "question": "What is the speed of light in a vacuum?",
        "answers": [
            "150,000 km/s",
            "500,000 km/s",
            "300,000 km/s",
            "1,000,000 km/s"
        ],
        "correctAnswer": 2
    },
    {
        "id": 36,
        "topic": "Physics",
        "question": "In the equation E=mc^2, what does 'c' represent?",
        "answers": [
            "Speed of sound",
            "Speed of light",
            "Speed of electricity",
            "Speed of gravity"
        ],
        "correctAnswer": 1
    },
    {
        "id": 37,
        "topic": "Physics",
        "question": "What is the first law of thermodynamics?",
        "answers": [
            "Energy cannot be created or destroyed.",
            "Entropy always decreases.",
            "Heat always flows from hot to cold.",
            "Work done is directly proportional to temperature."
        ],
        "correctAnswer": 0
    },
    {
        "id": 38,
        "topic": "Physics",
        "question": "Which force is responsible for keeping planets in orbit around the sun?",
        "answers": [
            "Gravity",
            "Electromagnetic force",
            "Nuclear force",
            "Friction"
        ],
        "correctAnswer": 0
    },
    {
        "id": 39,
        "topic": "Physics",
        "question": "What is the formula for calculating acceleration?",
        "answers": [
            "a = F/m",
            "a = v/d",
            "a = P/t",
            "a = W/t"
        ],
        "correctAnswer": 0
    },
    {
        "id": 40,
        "topic": "Physics",
        "question": "What is the law of conservation of momentum?",
        "answers": [
            "Momentum is always zero.",
            "Momentum is conserved in a closed system.",
            "Momentum increases with velocity.",
            "Momentum is inversely proportional to mass."
        ],
        "correctAnswer": 1
    },
    {
        "id": 41,
        "topic": "Environmental Science",
        "question": "What is the primary cause of ozone layer depletion?",
        "answers": [
            "Deforestation",
            "Industrial emissions",
            "Greenhouse gases",
            "Chlorofluorocarbons (CFCs)"
        ],
        "correctAnswer": 3
    },
    {
        "id": 42,
        "topic": "Environmental Science",
        "question": "What is biodiversity?",
        "answers": [
            "The number of people in an area",
            "The variety of life on Earth",
            "The study of rocks and minerals",
            "The level of air pollution"
        ],
        "correctAnswer": 1
    },
    {
        "id": 43,
        "topic": "Environmental Science",
        "question": "What is the main source of water pollution in urban areas?",
        "answers": [
            "Industrial runoff",
            "Agricultural runoff",
            "Untreated sewage",
            "Oil spills"
        ],
        "correctAnswer": 2
    },
    {
        "id": 44,
        "topic": "Environmental Science",
        "question": "Which renewable energy source comes from the sun?",
        "answers": [
            "Wind power",
            "Solar power",
            "Geothermal energy",
            "Hydropower"
        ],
        "correctAnswer": 1
    },
    {
        "id": 45,
        "topic": "Environmental Science",
        "question": "What is the main cause of soil erosion?",
        "answers": [
            "Deforestation",
            "Heavy rainfall",
            "Use of pesticides",
            "Urbanization"
        ],
        "correctAnswer": 0
    },
    {
        "id": 46,
        "topic": "Environmental Science",
        "question": "What is the role of wetlands in ecosystems?",
        "answers": [
            "Filtering air pollution",
            "Storing carbon dioxide",
            "Providing habitat for wildlife",
            "Generating electricity"
        ],
        "correctAnswer": 2
    },
    {
        "id": 47,
        "topic": "Environmental Science",
        "question": "Which gas is a major contributor to the greenhouse effect?",
        "answers": [
            "Oxygen",
            "Carbon dioxide",
            "Nitrogen",
            "Methane"
        ],
        "correctAnswer": 1
    },
    {
        "id": 48,
        "topic": "Environmental Science",
        "question": "What is eutrophication?",
        "answers": [
            "Increase in atmospheric carbon dioxide",
            "Depletion of ozone layer",
            "Excessive growth of algae in water bodies",
            "Loss of biodiversity"
        ],
        "correctAnswer": 2
    },
    {
        "id": 49,
        "topic": "Environmental Science",
        "question": "What is the primary source of indoor air pollution in households?",
        "answers": [
            "Smoking tobacco",
            "Burning candles",
            "Cooking with gas stoves",
            "Using air fresheners"
        ],
        "correctAnswer": 2
    },
    {
        "id": 50,
        "topic": "Environmental Science",
        "question": "What is the purpose of the ozone layer in the Earth's atmosphere?",
        "answers": [
            "Absorbing ultraviolet (UV) radiation",
            "Generating heat",
            "Trapping greenhouse gases",
            "Producing oxygen"
        ],
        "correctAnswer": 0
    },
    {
        "id": 51,
        "topic": "Economics",
        "question": "What is inflation?",
        "answers": [
            "Increase in the supply of money",
            "Decrease in the overall price level",
            "Rapid economic growth",
            "Increase in the general price level"
        ],
        "correctAnswer": 3
    },
    {
        "id": 52,
        "topic": "Economics",
        "question": "What is the law of demand?",
        "answers": [
            "As price increases, quantity demanded increases.",
            "As price decreases, quantity demanded decreases.",
            "As price increases, quantity demanded decreases.",
            "As price decreases, quantity demanded increases."
        ],
        "correctAnswer": 3
    },
    {
        "id": 53,
        "topic": "Economics",
        "question": "What is Gross Domestic Product (GDP)?",
        "answers": [
            "Total money supply in an economy",
            "Total value of all goods and services produced in a country",
            "Total government expenditure",
            "Total exports minus imports"
        ],
        "correctAnswer": 1
    },
    {
        "id": 54,
        "topic": "Economics",
        "question": "What is a monopoly?",
        "answers": [
            "A market structure with many sellers",
            "A market structure with one seller",
            "A market with identical products",
            "A market with differentiated products"
        ],
        "correctAnswer": 1
    },
    {
        "id": 55,
        "topic": "Economics",
        "question": "What is the opportunity cost?",
        "answers": [
            "The actual cost of production",
            "The total cost of all resources",
            "The fixed cost of production",
            "The cost of the next best alternative forgone"
        ],
        "correctAnswer": 3
    },
    {
        "id": 56,
        "topic": "Economics",
        "question": "What is a progressive tax system?",
        "answers": [
            "A tax system where everyone pays the same percentage of their income",
            "A tax system where the poor pay a higher percentage than the rich",
            "A tax system where the tax rate increases as income increases",
            "A tax system where the rich pay a higher percentage than the poor"
        ],
        "correctAnswer": 2
    },
    {
        "id": 57,
        "topic": "Economics",
        "question": "What is the role of the Federal Reserve in the United States?",
        "answers": [
            "Fiscal policy implementation",
            "Monetary policy implementation",
            "Trade regulation",
            "Tax collection"
        ],
        "correctAnswer": 1
    },
    {
        "id": 58,
        "topic": "Economics",
        "question": "What is the law of diminishing marginal utility?",
        "answers": [
            "Consumers always want more of a good.",
            "The more you consume, the higher the satisfaction.",
            "The satisfaction from each additional unit decreases.",
            "The total utility is always increasing."
        ],
        "correctAnswer": 2
    },
    {
        "id": 59,
        "topic": "Economics",
        "question": "What is a budget deficit?",
        "answers": [
            "Excess government revenue over expenditures",
            "Excess government expenditures over revenue",
            "Balanced government budget",
            "Decrease in government spending"
        ],
        "correctAnswer": 1
    },
    {
        "id": 60,
        "topic": "Economics",
        "question": "What is the concept of comparative advantage in international trade?",
        "answers": [
            "Each country produces everything it needs.",
            "Countries specialize in producing goods with the lowest opportunity cost.",
            "Countries only trade with their neighbors.",
            "Countries produce goods with the highest opportunity cost."
        ],
        "correctAnswer": 1
    },
    {
        "id": 61,
        "topic": "Biology",
        "question": "What is the function of the mitochondria in a cell?",
        "answers": [
            "Photosynthesis",
            "Cellular respiration",
            "DNA replication",
            "Protein synthesis"
        ],
        "correctAnswer": 1
    },
    {
        "id": 62,
        "topic": "Biology",
        "question": "Which organelle is responsible for protein synthesis?",
        "answers": [
            "Nucleus",
            "Endoplasmic reticulum",
            "Golgi apparatus",
            "Ribosomes"
        ],
        "correctAnswer": 3
    },
    {
        "id": 63,
        "topic": "Biology",
        "question": "What is the role of red blood cells in the human body?",
        "answers": [
            "Carrying oxygen",
            "Fighting infections",
            "Producing antibodies",
            "Storing nutrients"
        ],
        "correctAnswer": 0
    },
    {
        "id": 64,
        "topic": "Biology",
        "question": "What is the basic unit of heredity in living organisms?",
        "answers": [
            "Protein",
            "RNA",
            "Carbohydrate",
            "DNA"
        ],
        "correctAnswer": 3
    },
    {
        "id": 65,
        "topic": "Biology",
        "question": "Which gas do plants absorb during photosynthesis?",
        "answers": [
            "Oxygen",
            "Carbon dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correctAnswer": 1
    },
    {
        "id": 66,
        "topic": "Biology",
        "question": "What is the process by which cells divide to form new cells?",
        "answers": [
            "Fertilization",
            "Meiosis",
            "Mitosis",
            "Budding"
        ],
        "correctAnswer": 2
    },
    {
        "id": 67,
        "topic": "Biology",
        "question": "What is the main function of the nervous system?",
        "answers": [
            "Transporting oxygen",
            "Regulating body temperature",
            "Coordination and control",
            "Digesting food"
        ],
        "correctAnswer": 2
    },
    {
        "id": 68,
        "topic": "Biology",
        "question": "Which part of the human brain is responsible for emotions and memory?",
        "answers": [
            "Cerebellum",
            "Hippocampus",
            "Thalamus",
            "Medulla oblongata"
        ],
        "correctAnswer": 1
    },
    {
        "id": 69,
        "topic": "Biology",
        "question": "What is the function of the enzyme amylase in digestion?",
        "answers": [
            "Breaking down proteins",
            "Breaking down fats",
            "Breaking down carbohydrates",
            "Absorbing nutrients"
        ],
        "correctAnswer": 2
    },
    {
        "id": 70,
        "topic": "Biology",
        "question": "What is the largest organ in the human body?",
        "answers": [
            "Heart",
            "Liver",
            "Skin",
            "Lungs"
        ],
        "correctAnswer": 2
    },
    {
        "id": 71,
        "topic": "Computer Science",
        "question": "What does CPU stand for?",
        "answers": [
            "Central Processing Unit",
            "Central Peripheral Unit",
            "Computer Personal Unit",
            "Central Program Unit"
        ],
        "correctAnswer": 0
    },
    {
        "id": 72,
        "topic": "Computer Science",
        "question": "What is the purpose of RAM in a computer?",
        "answers": [
            "Permanent storage of data",
            "Temporary storage of data",
            "Data processing",
            "Communication with other computers"
        ],
        "correctAnswer": 1
    },
    {
        "id": 73,
        "topic": "Computer Science",
        "question": "What does HTML stand for?",
        "answers": [
            "HyperText Markup Language",
            "High-level Text Management Language",
            "HyperTransfer Markup Language",
            "Hyperlink and Text Management Language"
        ],
        "correctAnswer": 0
    },
    {
        "id": 74,
        "topic": "Computer Science",
        "question": "Which programming language is known for its readability and simplicity?",
        "answers": [
            "Java",
            "C++",
            "Python",
            "JavaScript"
        ],
        "correctAnswer": 2
    },
    {
        "id": 75,
        "topic": "Computer Science",
        "question": "What is an IP address used for?",
        "answers": [
            "Identifying a computer on a network",
            "Storing files on a computer",
            "Running software programs",
            "Managing hardware components"
        ],
        "correctAnswer": 0
    },
    {
        "id": 76,
        "topic": "Computer Science",
        "question": "What is the purpose of an operating system?",
        "answers": [
            "Running applications",
            "Managing hardware resources",
            "Creating documents",
            "Connecting to the internet"
        ],
        "correctAnswer": 1
    },
    {
        "id": 77,
        "topic": "Computer Science",
        "question": "What is the binary system used for in computers?",
        "answers": [
            "Storing text-based data",
            "Performing complex calculations",
            "Representing data using 0s and 1s",
            "Displaying graphics on the screen"
        ],
        "correctAnswer": 2
    },
    {
        "id": 78,
        "topic": "Computer Science",
        "question": "What is a function in programming?",
        "answers": [
            "A reserved word in a programming language",
            "A type of variable",
            "A set of instructions to perform a specific task",
            "A hardware component in a computer"
        ],
        "correctAnswer": 2
    },
    {
        "id": 79,
        "topic": "Computer Science",
        "question": "What is the purpose of a firewall?",
        "answers": [
            "Protecting against viruses",
            "Blocking unwanted network traffic",
            "Managing file storage",
            "Improving internet speed"
        ],
        "correctAnswer": 1
    },
    {
        "id": 80,
        "topic": "Computer Science",
        "question": "What does SQL stand for in the context of databases?",
        "answers": [
            "Structured Question Language",
            "System Quality Language",
            "Structured Query Language",
            "System Query Language"
        ],
        "correctAnswer": 2
    },
    {
        "id": 81,
        "topic": "History",
        "question": "Who was the first President of the United States?",
        "answers": [
            "Thomas Jefferson",
            "George Washington",
            "Abraham Lincoln",
            "John Adams"
        ],
        "correctAnswer": 1
    },
    {
        "id": 82,
        "topic": "History",
        "question": "In which year did Christopher Columbus first reach the Americas?",
        "answers": [
            "1492",
            "1607",
            "1776",
            "1498"
        ],
        "correctAnswer": 0
    },
    {
        "id": 83,
        "topic": "History",
        "question": "Who wrote the 'I Have a Dream' speech?",
        "answers": [
            "Martin Luther King Jr.",
            "Malcolm X",
            "John F. Kennedy",
            "Abraham Lincoln"
        ],
        "correctAnswer": 0
    },
    {
        "id": 84,
        "topic": "History",
        "question": "Which ancient civilization built the pyramids in Egypt?",
        "answers": [
            "Greek",
            "Roman",
            "Mesopotamian",
            "Egyptian"
        ],
        "correctAnswer": 3
    },
    {
        "id": 85,
        "topic": "History",
        "question": "What event marked the start of World War I?",
        "answers": [
            "Attack on Pearl Harbor",
            "Signing of the Treaty of Versailles",
            "D-Day Invasion",
            "Assassination of Archduke Franz Ferdinand"
        ],
        "correctAnswer": 3
    },
    {
        "id": 86,
        "topic": "History",
        "question": "Who was the first female Prime Minister of the United Kingdom?",
        "answers": [
            "Margaret Thatcher",
            "Angela Merkel",
            "Theresa May",
            "Queen Elizabeth II"
        ],
        "correctAnswer": 0
    },
    {
        "id": 87,
        "topic": "History",
        "question": "What was the Renaissance?",
        "answers": [
            "A scientific revolution",
            "A cultural and intellectual movement",
            "A military conquest",
            "A religious reform"
        ],
        "correctAnswer": 1
    },
    {
        "id": 88,
        "topic": "History",
        "question": "Who led the nonviolent civil rights movement in the United States?",
        "answers": [
            "Malcolm X",
            "Martin Luther King Jr.",
            "Rosa Parks",
            "Harriet Tubman"
        ],
        "correctAnswer": 1
    },
    {
        "id": 89,
        "topic": "History",
        "question": "In which year did the Berlin Wall fall, symbolizing the end of the Cold War?",
        "answers": [
            "1989",
            "1979",
            "1991",
            "1961"
        ],
        "correctAnswer": 0
    },
    {
        "id": 90,
        "topic": "History",
        "question": "Who was the legendary queen of ancient Egypt known for her beauty and intelligence?",
        "answers": [
            "Cleopatra",
            "Nefertiti",
            "Hatshepsut",
            "Isis"
        ],
        "correctAnswer": 0
    },
    {
        "id": 91,
        "topic": "General Knowledge",
        "question": "What is the capital city of Australia?",
        "answers": [
            "Sydney",
            "Melbourne",
            "Canberra",
            "Brisbane"
        ],
        "correctAnswer": 2
    },
    {
        "id": 92,
        "topic": "General Knowledge",
        "question": "Which planet is known as the 'Red Planet'?",
        "answers": [
            "Venus",
            "Mars",
            "Jupiter",
            "Saturn"
        ],
        "correctAnswer": 1
    },
    {
        "id": 93,
        "topic": "General Knowledge",
        "question": "What is the largest ocean on Earth?",
        "answers": [
            "Indian Ocean",
            "Atlantic Ocean",
            "Southern Ocean",
            "Pacific Ocean"
        ],
        "correctAnswer": 3
    },
    {
        "id": 94,
        "topic": "General Knowledge",
        "question": "Who wrote the play 'Romeo and Juliet'?",
        "answers": [
            "William Shakespeare",
            "Jane Austen",
            "Charles Dickens",
            "Leo Tolstoy"
        ],
        "correctAnswer": 0
    },
    {
        "id": 95,
        "topic": "General Knowledge",
        "question": "What is the currency of Japan?",
        "answers": [
            "Yen",
            "Won",
            "Ringgit",
            "Baht"
        ],
        "correctAnswer": 0
    },
    {
        "id": 96,
        "topic": "General Knowledge",
        "question": "Which element has the chemical symbol 'O'?",
        "answers": [
            "Oxygen",
            "Gold",
            "Osmium",
            "Onium"
        ],
        "correctAnswer": 0
    },
    {
        "id": 97,
        "topic": "General Knowledge",
        "question": "Who painted the Mona Lisa?",
        "answers": [
            "Pablo Picasso",
            "Vincent van Gogh",
            "Leonardo da Vinci",
            "Claude Monet"
        ],
        "correctAnswer": 2
    },
    {
        "id": 98,
        "topic": "General Knowledge",
        "question": "What is the longest river in the world?",
        "answers": [
            "Nile River",
            "Yangtze River",
            "Amazon River",
            "Mississippi River"
        ],
        "correctAnswer": 2
    },
    {
        "id": 99,
        "topic": "General Knowledge",
        "question": "In which year did the Titanic sink?",
        "answers": [
            "1907",
            "1912",
            "1923",
            "1931"
        ],
        "correctAnswer": 1
    },
    {
        "id": 100,
        "topic": "General Knowledge",
        "question": "What is the largest mammal in the world?",
        "answers": [
            "Elephant",
            "Blue whale",
            "Giraffe",
            "Hippopotamus"
        ],
        "correctAnswer": 1
    },
    {
        "id": 101,
        "topic": "Art History",
        "question": "Who painted the famous artwork 'Starry Night'?",
        "answers": [
            "Vincent van Gogh",
            "Pablo Picasso",
            "Leonardo da Vinci",
            "Claude Monet"
        ],
        "correctAnswer": 0
    },
    {
        "id": 102,
        "topic": "Art History",
        "question": "Which art movement is known for its focus on everyday subjects and scenes?",
        "answers": [
            "Cubism",
            "Surrealism",
            "Impressionism",
            "Realism"
        ],
        "correctAnswer": 3
    },
    {
        "id": 103,
        "topic": "Art History",
        "question": "Who sculpted the statue 'David'?",
        "answers": [
            "Michelangelo",
            "Donatello",
            "Leonardo da Vinci",
            "Raphael"
        ],
        "correctAnswer": 0
    },
    {
        "id": 104,
        "topic": "Art History",
        "question": "Which ancient civilization is known for its pottery decorated with black-figure and red-figure techniques?",
        "answers": [
            "Greek",
            "Roman",
            "Egyptian",
            "Mesopotamian"
        ],
        "correctAnswer": 0
    },
    {
        "id": 105,
        "topic": "Art History",
        "question": "Who is considered the founder of abstract art?",
        "answers": [
            "Pablo Picasso",
            "Wassily Kandinsky",
            "Salvador Dali",
            "Georges Braque"
        ],
        "correctAnswer": 1
    },
    {
        "id": 106,
        "topic": "Art History",
        "question": "Which art movement emerged in the 1960s and often involved unconventional materials and performances?",
        "answers": [
            "Pop Art",
            "Abstract Expressionism",
            "Conceptual Art",
            "Dadaism"
        ],
        "correctAnswer": 2
    },
    {
        "id": 107,
        "topic": "Art History",
        "question": "Who painted the 'Mona Lisa'?",
        "answers": [
            "Vincent van Gogh",
            "Leonardo da Vinci",
            "Claude Monet",
            "Pablo Picasso"
        ],
        "correctAnswer": 1
    },
    {
        "id": 108,
        "topic": "Art History",
        "question": "What is the architectural style of the Taj Mahal?",
        "answers": [
            "Gothic",
            "Baroque",
            "Rococo",
            "Mughal"
        ],
        "correctAnswer": 3
    },
    {
        "id": 109,
        "topic": "Art History",
        "question": "Who is known for his 'Campbell's Soup Cans' artwork?",
        "answers": [
            "Andy Warhol",
            "Jackson Pollock",
            "Roy Lichtenstein",
            "Willem de Kooning"
        ],
        "correctAnswer": 0
    },
    {
        "id": 110,
        "topic": "Art History",
        "question": "Which art movement emphasized spontaneous, automatic, and subconscious creation?",
        "answers": [
            "Surrealism",
            "Cubism",
            "Fauvism",
            "Expressionism"
        ],
        "correctAnswer": 0
    },
    {
        "id": 111,
        "topic": "Political Science",
        "question": "What is the basic unit of government in a federal system?",
        "answers": [
            "President",
            "Parliament",
            "State",
            "Citizen"
        ],
        "correctAnswer": 2
    },
    {
        "id": 112,
        "topic": "Political Science",
        "question": "What is the term for a government ruled by a king or queen?",
        "answers": [
            "Democracy",
            "Monarchy",
            "Republic",
            "Oligarchy"
        ],
        "correctAnswer": 1
    },
    {
        "id": 113,
        "topic": "Political Science",
        "question": "Who is the head of government in the United States?",
        "answers": [
            "President",
            "Prime Minister",
            "Speaker of the House",
            "Chief Justice"
        ],
        "correctAnswer": 0
    },
    {
        "id": 114,
        "topic": "Political Science",
        "question": "What is the purpose of the United Nations?",
        "answers": [
            "Economic cooperation",
            "Peacekeeping and international security",
            "Cultural exchange",
            "Space exploration"
        ],
        "correctAnswer": 1
    },
    {
        "id": 115,
        "topic": "Political Science",
        "question": "What is the term for a system of government where power is concentrated in the hands of a single ruler?",
        "answers": [
            "Democracy",
            "Autocracy",
            "Oligarchy",
            "Republic"
        ],
        "correctAnswer": 1
    },
    {
        "id": 116,
        "topic": "Political Science",
        "question": "In which country is the Prime Minister elected by the members of the Parliament?",
        "answers": [
            "United States",
            "France",
            "United Kingdom",
            "Germany"
        ],
        "correctAnswer": 2
    },
    {
        "id": 117,
        "topic": "Political Science",
        "question": "What is the purpose of a constitution in a country?",
        "answers": [
            "Establishing political parties",
            "Defining the powers of government and protecting individual rights",
            "Regulating the stock market",
            "Creating a national language"
        ],
        "correctAnswer": 1
    },
    {
        "id": 118,
        "topic": "Political Science",
        "question": "What is the main function of the legislative branch of government?",
        "answers": [
            "Enforcing laws",
            "Interpreting laws",
            "Making laws",
            "Adjudicating disputes"
        ],
        "correctAnswer": 2
    },
    {
        "id": 119,
        "topic": "Political Science",
        "question": "What is the role of a lobbyist in the political process?",
        "answers": [
            "Running for public office",
            "Advocating for specific policies or interests",
            "Enforcing laws",
            "Judging legal cases"
        ],
        "correctAnswer": 1
    },
    {
        "id": 120,
        "topic": "Political Science",
        "question": "Which document serves as the supreme law of the land in the United States?",
        "answers": [
            "Declaration of Independence",
            "Bill of Rights",
            "Constitution",
            "Emancipation Proclamation"
        ],
        "correctAnswer": 2
    },
    {
        "id": 121,
        "topic": "Sports",
        "question": "Which country hosted the 2016 Summer Olympics?",
        "answers": [
            "United States",
            "Brazil",
            "China",
            "Russia"
        ],
        "correctAnswer": 1
    },
    {
        "id": 122,
        "topic": "Sports",
        "question": "Who is known as 'The Greatest' in the sport of boxing?",
        "answers": [
            "Mike Tyson",
            "Muhammad Ali",
            "Floyd Mayweather",
            "Manny Pacquiao"
        ],
        "correctAnswer": 1
    },
    {
        "id": 123,
        "topic": "Sports",
        "question": "In which sport would you perform a slam dunk?",
        "answers": [
            "Soccer",
            "Basketball",
            "Tennis",
            "Golf"
        ],
        "correctAnswer": 1
    },
    {
        "id": 124,
        "topic": "Sports",
        "question": "Which country has won the most FIFA World Cup titles in men's soccer?",
        "answers": [
            "Germany",
            "Brazil",
            "Italy",
            "Argentina"
        ],
        "correctAnswer": 1
    },
    {
        "id": 125,
        "topic": "Sports",
        "question": "Who holds the record for the most Grand Slam singles titles in tennis (men's category)?",
        "answers": [
            "Rafael Nadal",
            "Roger Federer",
            "Novak Djokovic",
            "Pete Sampras"
        ],
        "correctAnswer": 1
    },
    {
        "id": 126,
        "topic": "Sports",
        "question": "In which city did the first modern Olympic Games take place in 1896?",
        "answers": [
            "Paris",
            "Rome",
            "Athens",
            "London"
        ],
        "correctAnswer": 2
    },
    {
        "id": 127,
        "topic": "Sports",
        "question": "Who is the all-time leading scorer in the NBA?",
        "answers": [
            "Kobe Bryant",
            "LeBron James",
            "Michael Jordan",
            "Kareem Abdul-Jabbar"
        ],
        "correctAnswer": 3
    },
    {
        "id": 128,
        "topic": "Sports",
        "question": "Which horse is the only one to win the Triple Crown (Kentucky Derby, Preakness Stakes, Belmont Stakes) undefeated?",
        "answers": [
            "Secretariat",
            "American Pharoah",
            "Seattle Slew",
            "Affirmed"
        ],
        "correctAnswer": 0
    },
    {
        "id": 129,
        "topic": "Sports",
        "question": "In which sport would you perform a hat trick?",
        "answers": [
            "Cricket",
            "Baseball",
            "Ice Hockey",
            "Golf"
        ],
        "correctAnswer": 0
    },
    {
        "id": 130,
        "topic": "Sports",
        "question": "Who won the FIFA Women's World Cup in 2019?",
        "answers": [
            "Germany",
            "Brazil",
            "United States",
            "France"
        ],
        "correctAnswer": 2
    },
    {
        "id": 131,
        "topic": "Literature",
        "question": "Who wrote the play 'Romeo and Juliet'?",
        "answers": [
            "William Shakespeare",
            "Jane Austen",
            "Charles Dickens",
            "Leo Tolstoy"
        ],
        "correctAnswer": 0
    },
    {
        "id": 132,
        "topic": "Literature",
        "question": "In which novel is the character Atticus Finch a central figure?",
        "answers": [
            "To Kill a Mockingbird",
            "Pride and Prejudice",
            "1984",
            "The Great Gatsby"
        ],
        "correctAnswer": 0
    },
    {
        "id": 133,
        "topic": "Literature",
        "question": "Who wrote the epic poem 'The Iliad'?",
        "answers": [
            "Homer",
            "Virgil",
            "Dante Alighieri",
            "Geoffrey Chaucer"
        ],
        "correctAnswer": 0
    },
    {
        "id": 134,
        "topic": "Literature",
        "question": "Which author is known for the 'Harry Potter' book series?",
        "answers": [
            "J.K. Rowling",
            "Stephen King",
            "George R.R. Martin",
            "J.R.R. Tolkien"
        ],
        "correctAnswer": 0
    },
    {
        "id": 135,
        "topic": "Literature",
        "question": "In '1984' by George Orwell, what is the ruling party's slogan?",
        "answers": [
            "Peace and Unity",
            "Freedom and Justice",
            "War is Peace, Freedom is Slavery, Ignorance is Strength",
            "Love Conquers All"
        ],
        "correctAnswer": 2
    },
    {
        "id": 136,
        "topic": "Literature",
        "question": "Who wrote the tragedy 'Macbeth'?",
        "answers": [
            "Emily Brontë",
            "William Shakespeare",
            "F. Scott Fitzgerald",
            "Anton Chekhov"
        ],
        "correctAnswer": 1
    },
    {
        "id": 137,
        "topic": "Literature",
        "question": "Which novel features the character Holden Caulfield?",
        "answers": [
            "Brave New World",
            "Lord of the Flies",
            "The Catcher in the Rye",
            "The Grapes of Wrath"
        ],
        "correctAnswer": 2
    },
    {
        "id": 138,
        "topic": "Literature",
        "question": "Who wrote the tragedy 'Hamlet'?",
        "answers": [
            "William Shakespeare",
            "Jane Austen",
            "Charles Dickens",
            "Leo Tolstoy"
        ],
        "correctAnswer": 0
    },
    {
        "id": 139,
        "topic": "Literature",
        "question": "What is the opening line of Charles Dickens' 'A Tale of Two Cities'?",
        "answers": [
            "It was the best of times, it was the worst of times",
            "Call me Ishmael",
            "All happy families are alike",
            "In the beginning God created the heavens and the earth"
        ],
        "correctAnswer": 0
    },
    {
        "id": 140,
        "topic": "Literature",
        "question": "Who wrote 'The Great Gatsby'?",
        "answers": [
            "F. Scott Fitzgerald",
            "Ernest Hemingway",
            "Mark Twain",
            "Virginia Woolf"
        ],
        "correctAnswer": 0
    },
    {
        "id": 141,
        "topic": "Philosophy",
        "question": "Who is often regarded as the 'father of Western philosophy'?",
        "answers": [
            "Confucius",
            "Plato",
            "Aristotle",
            "Socrates"
        ],
        "correctAnswer": 3
    },
    {
        "id": 142,
        "topic": "Philosophy",
        "question": "What is the central concept in existentialist philosophy?",
        "answers": [
            "Utilitarianism",
            "Nihilism",
            "Absurdity",
            "Dialectics"
        ],
        "correctAnswer": 2
    },
    {
        "id": 143,
        "topic": "Philosophy",
        "question": "Who wrote 'Meditations,' a series of personal writings on Stoic philosophy?",
        "answers": [
            "Seneca the Younger",
            "Epictetus",
            "Cicero",
            "Marcus Aurelius"
        ],
        "correctAnswer": 3
    },
    {
        "id": 144,
        "topic": "Philosophy",
        "question": "Which philosopher is associated with the concept of the 'categorical imperative'?",
        "answers": [
            "John Locke",
            "Immanuel Kant",
            "Jean-Jacques Rousseau",
            "Friedrich Nietzsche"
        ],
        "correctAnswer": 1
    },
    {
        "id": 145,
        "topic": "Philosophy",
        "question": "What is the main focus of phenomenology, a philosophical movement founded by Edmund Husserl?",
        "answers": [
            "Analysis of language",
            "Study of ethics",
            "Exploration of consciousness and experience",
            "Investigation of political systems"
        ],
        "correctAnswer": 2
    },
    {
        "id": 146,
        "topic": "Philosophy",
        "question": "Who proposed the theory of the 'Veil of Ignorance' as a way to achieve justice in society?",
        "answers": [
            "John Rawls",
            "Thomas Hobbes",
            "Jeremy Bentham",
            "Karl Marx"
        ],
        "correctAnswer": 0
    },
    {
        "id": 147,
        "topic": "Philosophy",
        "question": "Which Greek philosopher is known for his contributions to ethics in 'Nicomachean Ethics'?",
        "answers": [
            "Socrates",
            "Plato",
            "Aristotle",
            "Epicurus"
        ],
        "correctAnswer": 2
    },
    {
        "id": 148,
        "topic": "Philosophy",
        "question": "Who wrote 'Thus Spoke Zarathustra' and explored the concept of the 'Ubermensch'?",
        "answers": [
            "Søren Kierkegaard",
            "Friedrich Nietzsche",
            "Albert Camus",
            "Jean-Paul Sartre"
        ],
        "correctAnswer": 1
    },
    {
        "id": 149,
        "topic": "Philosophy",
        "question": "In Eastern philosophy, what does 'Tao' represent?",
        "answers": [
            "The Way",
            "The Truth",
            "The Life",
            "The Enlightenment"
        ],
        "correctAnswer": 0
    },
    {
        "id": 150,
        "topic": "Philosophy",
        "question": "Who is known for his work 'Being and Time' and the concept of 'Dasein'?",
        "answers": [
            "Martin Heidegger",
            "Jean-Paul Sartre",
            "Hegel",
            "Karl Marx"
        ],
        "correctAnswer": 0
    }
]
export default QUESTIONS;