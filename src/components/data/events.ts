export type EventCategory =
  | "All Events"
  | "Cultural Events"
  | "Sports"
  | "Arts"
  | "Dance"
  | "Pitch and Talk"
  | "Hackathons"
  | "Music"
  | "Stand up Comedy"
  | "Paper Presentation"
  | "Project Expo"
  | "Spotlight Events"
  | "TechExplore";

export type DateTag = "6 Mar" | "7 Mar";

export type Department =
  | "CSE"
  | "CSD"
  | "CSM"
  | "CSC"
  | "CS-IT"
  | "ECE"
  | "EEE"
  | "MECH"
  | "CIVIL"
  | "MBA"
  | "MCA";

export const categories: EventCategory[] = [
  "All Events",
  "Cultural Events",
  "Sports",
  "Arts",
  "Dance",
  "Pitch and Talk",
  "Hackathons",
  "Music",
  "Stand up Comedy",
  "Paper Presentation",
  "Project Expo",
  "Spotlight Events",
  "TechExplore",
];

export const dateTags: DateTag[] = ["6 Mar", "7 Mar"];

export const departments: Department[] = [
  "CSE",
  "CSD",
  "CSM",
  "CSC",
  "CS-IT",
  "ECE",
  "EEE",
  "MECH",
  "CIVIL",
  "MBA",
  "MCA",
];
export interface Coordinator {
  name: string;
  phone: string;
}

export interface EventCoordinators {
  event?: Coordinator[];
  faculty?: Coordinator[];
}


export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  dateTag: DateTag;
  time: string;
  venue: string;
  categories: Exclude<EventCategory, "All Events">[]; // ✅ MULTIPLE
  department: Department | "";
  image: string;
  registrationOpen: boolean;
  teamSize?: string;
  prizes?: string[];
  rules?: string[];
  coordinators?: EventCoordinators;
  registrationLink?: string;

}

export const events: Event[] = [

  {
    id: "1",
    title: " smart and sustainable cities ",
    description:
      "Innovation Driven by AI is a paper presentation event focused on exploring how Artificial Intelligence is transforming industries and society. Participants present research papers or innovative ideas that highlight AI-driven solutions across domains such as healthcare, education, automation, smart systems, and intelligent decision-making.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:00",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Paper Presentation"],
    department: "CIVIL",
    image: "/ALL POSTERS/CIVIL.jpg",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Original paper submission is mandatory",
      "Plagiarism leads to disqualification",
      "12–15 slides allowed",
      "PPT/PPTX format only",
      "Report 15 minutes early"
    ],
    coordinators: {
      event: [
        { name: "Jagan Mohan Reddy", phone: "6302589041" },

      ],
      faculty: [
        { name: "Dr. P. Sudheekar Reddy", phone: "8297960423" }
      ]
    }
  },
  {
    id: "2",
    title: "Intelligent Manufacturing & Sustainable Mechanical Systems",
    description:
      "Intelligent Manufacturing & Sustainable Mechanical Systems is a paper presentation event that focuses on the integration of advanced manufacturing technologies with sustainable mechanical engineering practices. Participants present research papers or innovative concepts related to smart manufacturing, automation, Industry 4.0, AI-driven production systems, robotics, digital twins, additive manufacturing, and energy-efficient mechanical designs.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:00",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Paper Presentation"],
    department: "MECH",
    image: "/ALL POSTERS/ME.jpg",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Original paper submission required",
      "12–15 slides allowed",
      "Time limit strictly followed",
      "PPT/PPTX format only"
    ],
    coordinators: {
      event: [
        { name: "Kasa Srihari", phone: "8985388335" },

      ],
      faculty: [
        { name: "Dr. K. Jagath Narayana", phone: "9891598684" },
        { name: "Dr. M. Vamsi Krishna", phone: "8978407734" }
      ]
    }

  },
  {
    id: "3",
    title: "Smart Power Systems & Electric Mobility",
    description:
      " Smart Power Systems & Electric Mobility is a paper presentation event that focuses on advanced electrical power systems and next-generation transportation technologies. Participants present research papers or innovative ideas related to smart grids, renewable energy integration, energy storage systems, power electronics, electric vehicles (EVs), charging infrastructure, and intelligent energy management.   ",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:00",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Paper Presentation"],
    department: "EEE",
    image: "/ALL POSTERS/EEE.jpg",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Original paper submission mandatory",
      "12–15 slides allowed",
      "PPT/PPTX format only",
      "Report 15 minutes early"
    ],
    coordinators: {
      event: [
        { name: "D. Harsha Vardhan Kumar", phone: "8019320140" },

      ],
      faculty: [
        { name: "D. Praveen Kumar", phone: "9908753983" }
      ]
    }

  },
  {
    id: "4",
    title: "Embedded and Intelligent Electronic Systems ",
    description:
      "Embedded and Intelligent Electronic Systems is a paper presentation event that focuses on the design and application of smart embedded technologies and intelligent electronic systems. Participants present research papers or innovative ideas related to embedded systems, microcontrollers, IoT devices, real-time systems, AI-enabled electronics, sensor networks, and hardware–software co-design.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:00",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Paper Presentation"],
    department: "ECE",
    image: "/ALL POSTERS/ECE.jpg",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Original paper submission mandatory",
      "12–15 slides allowed",
      "PPT/PPTX format only",
      "Judges’ decision is final"
    ],
    coordinators: {
      event: [
        { name: "M. Naveen Reddy", phone: "9000935090" },

      ],
      faculty: [
        { name: "A. Krishna Mohan", phone: "9949983365" }
      ]
    }

  },

  {
    id: "5",
    title: "Next-Generation Computing Technologies ",
    description:
      "Next-Generation Computing Technologies is a paper presentation event that focuses on emerging and advanced computing paradigms shaping the future of technology. Participants present research papers or innovative concepts related to artificial intelligence, quantum computing, edge and cloud computing, high-performance computing, blockchain, cybersecurity, and advanced software architectures.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:00",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Paper Presentation"],
    department: "CSE",
    image: "/ALL POSTERS/CSE.jpg",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Original paper submission is mandatory",
      "Plagiarism leads to disqualification",
      "12–15 slides allowed",
      "PPT/PPTX format only",
      "Report 15 minutes early",
      "Judges’ decision is final"
    ],
    coordinators: {
      event: [
        { name: "Shaik Mohammad Shahid", phone: "7981491740" },

      ],
      faculty: [
        { name: "M. Chandrakala", phone: "6301667880" }
      ]
    }

  },
  {
    id: "6",
    title: "Cybersecurity, Privacy & Digital Trust",
    description:
      "Cybersecurity, Privacy & Digital Trust is a paper presentation event that focuses on safeguarding digital systems, data, and user trust in an increasingly connected world. Participants present research papers or innovative ideas related to network security, cryptography, data privacy, secure systems, cyber threat intelligence, blockchain security, and trust management frameworks.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:00",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Paper Presentation"],
    department: "CSC",
    image: "/ALL POSTERS/CSC.jpg",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Original paper submission is mandatory",
      "Plagiarism leads to disqualification",
      "12–15 slides allowed",
      "PPT/PPTX format only",
      "Report 15 minutes early"
    ],
    coordinators: {
      event: [
        { name: "G. Guru Vaishnavi", phone: "8985052577" },

      ],
      faculty: [
        { name: "J. Ramachandraiah", phone: "9000638814" }
      ]
    }

  },
  {
    id: "7",
    title: "Artificial Intelligence & Machine Learning Systems",
    description:
      "Artificial Intelligence & Machine Learning Systems is a paper presentation event that focuses on the design, development, and application of intelligent systems powered by AI and ML technologies. Participants present research papers or innovative models related to machine learning algorithms, deep learning, natural language processing, computer vision, reinforcement learning, and AI-driven decision systems.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:00",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Paper Presentation"],
    department: "CSM",
    image: "/ALL POSTERS/CSM.jpg",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Original paper submission is mandatory",
      "Plagiarism leads to disqualification",
      "12–15 slides allowed",
      "PPT/PPTX format only",
      "Report 15 minutes early"
    ],
    coordinators: {
      event: [
        { name: "K. Manogna", phone: "7993130621" },

      ],
      faculty: [
        { name: "Dr. Jasmine Sabeena", phone: "9490922900" }
      ]
    }

  },
  {
    id: "8",
    title: "Data Analytics & Scalable Data Engineering",
    description:
      "Data Analytics & Scalable Data Engineering is a paper presentation event that focuses on extracting insights from large-scale data and designing robust, scalable data systems. Participants present research papers or innovative ideas related to big data analytics, data pipelines, distributed systems, data warehousing, real-time processing, cloud-based data platforms, and AI-driven analytics.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:00",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Paper Presentation"],
    department: "CSD",
    image: "/ALL POSTERS/CSD.jpg",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Original paper submission is mandatory",
      "Plagiarism leads to disqualification",
      "12–15 slides allowed",
      "PPT/PPTX format only",
      "Report 15 minutes early",
      "Judges’ decision is final"
    ],
    coordinators: {
      event: [
        { name: "N. G. Durga Bhavani", phone: "6281131365" },

      ],
      faculty: [
        { name: "D. Lavanya", phone: "7780415483" }
      ]
    }

  },
  {
    id: "9",
    title: "Cloud Computing & Secure Digital Infrastructure",
    description:
      "Cloud Computing & Secure Digital Infrastructure is a paper presentation event that focuses on modern cloud technologies and secure digital frameworks for efficient, scalable, and reliable computing. Participants present research papers or innovative solutions related to cloud architecture, virtualization, serverless computing, hybrid and multi-cloud strategies, cybersecurity, data protection, and secure network infrastructure..",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:00",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Paper Presentation"],
    department: "CSD",
    image: "/ALL POSTERS/MCA.jpg",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Original paper submission is mandatory",
      "Plagiarism leads to disqualification",
      "12–15 slides allowed",
      "PPT/PPTX format only",
      "Report 15 minutes early",
      "Judges’ decision is final"
    ],
    coordinators: {
      event: [
        { name: "M. N. Divean", phone: "6305031658" },

      ],
      faculty: [
        { name: "N. Sireesha", phone: "9573533688" }
      ]
    }

  },
  {
    id: "10",
    title: "Digital Transformation & Business Innovation",
    description:
      "Digital Transformation & Business Innovation is a paper presentation event that focuses on leveraging digital technologies to transform business processes, models, and strategies. Participants present research papers or innovative solutions related to emerging technologies such as AI, IoT, cloud computing, data analytics, and automation to drive efficiency, competitiveness, and value creation in organizations.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:00",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Paper Presentation"],
    department: "MCA",
    image: "/ALL POSTERS/MBA.jpg",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Original paper submission is mandatory",
      "Plagiarism leads to disqualification",
      "12–15 slides allowed",
      "PPT/PPTX format only",
      "Report 15 minutes early",
      "Judges’ decision is final"
    ],
    coordinators: {
      event: [
        { name: "P. Jaswanth", phone: "7337024653" },

      ],
      faculty: [
        { name: "Dr. S. Gautami", phone: "9985506543" }
      ]
    }
  },
  {
    id: "11",
    title: "Advanced Software Applications with AI & Cloud",
    description:
      "Advanced Software Applications with AI & Cloud is a paper presentation event that focuses on developing innovative software solutions leveraging Artificial Intelligence and cloud technologies. Participants present research papers or projects related to cloud-native applications, AI-integrated software, microservices, serverless architectures, intelligent automation, and scalable distributed systems.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:00",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Paper Presentation"],
    department: "CS-IT",
    image: "/ALL POSTERS/IT.jpg",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Original paper submission is mandatory",
      "Plagiarism leads to disqualification",
      "12–15 slides allowed",
      "PPT/PPTX format only",
      "Report 15 minutes early",
      "Judges’ decision is final"
    ],
    coordinators: {
      event: [
        { name: "S. Venkatadri", phone: "7780426116" },

      ],
      faculty: [
        { name: "Dr. Y. Vishnu Tej", phone: "9491278564" }
      ]
    }
  },


  {
    id: "12",
    title: "Pick and Talk",
    description:
      "A technical speaking challenge that tests spontaneity, clarity of thought, and technical awareness.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["TechExplore"],
    department: "",
    image: "/ALL POSTERS/PIC AND TALK.jpg",
    registrationOpen: true,
    teamSize: "Individual",
    rules: [
      "Topics will be picked randomly",
      "Individual participation only",
      "Slides must be original",
      "No preparation time",
      "Use of mobile phones or notes is prohibited",
      "Exceeding time limit leads to disqualification"
    ],
    coordinators: {
      event: [
        { name: "A. Sumanth", phone: "9182611319" },

      ],
      faculty: [
        { name: "Dr. T. Vijay Kumar", phone: "9985171776" }
      ]
    }
  },
  {
    id: "13",
    title: "3D CAD Model Design",
    description:
      "A hands-on technical event focused on 3D design creativity and CAD tool expertise.",
    date: "6th March 2027",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["TechExplore"],
    department: "MECH",
    image: "/ALL POSTERS/3D CAD MODELLING.jpg",
    registrationOpen: true,
    teamSize: "2 members",
    rules: [
      "Only permitted CAD tools may be used",
      "Internet access may be restricted",
      "Designs must be original",
      "Time limit must be followed",
      "Judges’ decision is final"
    ],
    coordinators: {
      event: [
        { name: "A. Venkata Surya", phone: "7671822801" },

      ],
      faculty: [
        { name: "Dr. S. Jaya Kishore", phone: "9581820468" }
      ]
    }
  },
  {
    id: "14",
    title: "Algorithm Treasure Hunt",
    description:
      "A fun technical event combining algorithms, coding, and logical reasoning.",
    date: "6th March 2028",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["TechExplore"],
    department: "",
    image: "/ALL POSTERS/ALGORITHM TRESSURE HUNT.jpg",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Teams must solve clues in sequence",
      "Time limit applies for each round",
      "No external help allowed",
      "Cheating leads to disqualification",
      "Organizers’ decision is final"
    ],
    coordinators: {
      event: [
        { name: "C. Chandu", phone: "7981915198" },

      ],
      faculty: [
        { name: "C. Raja Sekhar", phone: "8897778957" }
      ]
    }
  },
  {
    id: "15",
    title: "Agent Building",
    description:
      "Design intelligent agents using AI or rule-based approaches.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["TechExplore"],
    department: "CSM",
    image: "/ALL POSTERS/AI AGENT BUILDING.jpg",
    registrationOpen: true,
    teamSize: "Individual or up to 3 members",
    rules: [
      "Participants must explain agent logic clearly",
      "Internet usage depends on organizers",
      "Pre-built solutions may be restricted",
      "Original ideas are encouraged",
      "Judges’ decision is final"
    ],
    coordinators: {
      event: [
        { name: "P. Sameera Bhanu", phone: "8688510901" },

      ],
      faculty: [
        { name: "Dr. D. Ester Rani", phone: "9542890853" }
      ]
    }
  },
  {
    id: "16",
    title: "AdZap",
    description:
      "A creative event blending marketing strategy and technical presentation.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["TechExplore"],
    department: "CSD",
    image: "/ALL POSTERS/ADZAP.jpg",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Content must be original",
      "Time limit must be followed",
      "Offensive content is prohibited",
      "Use of multimedia is allowed"
    ],
    coordinators: {
      event: [
        { name: "C. Dileep", phone: "9398154400" },

      ],
      faculty: [
        { name: "B. Dhanunjay", phone: "9000046368" }
      ]
    }
  },
  {
    id: "17",
    title: "Mobile App + IoT Integration",
    description:
      "Build smart systems by integrating mobile apps with IoT devices.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["TechExplore"],
    department: "",
    image: "/ALL POSTERS/MOBILE APP & IPT INTEGRATION.jpg",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Prototype or simulation is acceptable",
      "Architecture explanation is mandatory",
      "Internet usage depends on organizers",
      "Plagiarism leads to disqualification"
    ],
    coordinators: {
      event: [
        { name: "K. Tharun", phone: "6305750924" },

      ],
      faculty: [
        { name: "K. Naresh", phone: "9959249971" }
      ]
    }
  },
  {
    id: "18",
    title: "Bridge Building",
    description:
      "Design and construct a model bridge tested for strength and stability.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["TechExplore"],
    department: "CIVIL",
    image: "/ALL POSTERS/BRIDGE BUILDING.jpg",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Only provided materials may be used",
      "Design must meet size constraints",
      "Structural testing will be conducted",
      "Judges’ decision is final"
    ],
    coordinators: {
      event: [
        { name: "Suresh", phone: "9177476292" },

      ],
      faculty: [
        { name: "CM. Prakash", phone: "9885648658" }
      ]
    }
  },
  {
    id: "19",
    title: "Logic Gate Master",
    description:
      "Test your understanding of logic gates and digital electronics.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Electronics Lab",
    categories: ["TechExplore"],
    department: "",
    image: "/ALL POSTERS/LOGIC GATE MASTER.jpg",
    registrationOpen: true,
    teamSize: "Individual",
    rules: [
      "Mobile phones are not allowed",
      "Calculators may be restricted",
      "Multiple rounds may be conducted",
      "Time limit must be followed"
    ],
    coordinators: {
      event: [
        { name: "Y. Harshitha Reddy", phone: "" },//"Harshith reddy not updated"

      ],
      faculty: [
        { name: "K. Roopa Raj", phone: "9177119295" }
      ]
    }
  },




  {
    id: "20",
    title: "Hack Fuzz",
    description:
      "A 24-hour continuous innovation challenge simulating real-world industry problem solving.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:00 - 10:00 (24 Hours)",
    venue: "Department Venues",
    categories: ["Hackathons"],
    department: "",
    image: "/ALL POSTERS/HACK FUZZ.jpeg",
    registrationOpen: true,
    teamSize: "4 members",
    rules: [
      "24-hour continuous hackathon",
      "Teams must work only during allotted time",
      "Solutions must align with given problem statements",
      "Plagiarism or pre-built solutions are not allowed"
    ],
    coordinators: {
      event: [
        { name: "P. Gnanendra", phone: "7396740282" },

      ],
      faculty: [
        { name: "Dr. Keerthipati/Dr. R. Swathi", phone: "9985303614" }
      ]
    }
  },
  {
    id: "21",
    title: "Startup Stories",
    description:
      "An inspiring session showcasing real-life entrepreneurial journeys and startup experiences.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Spotlight Events"],
    department: "MECH",
    image: "/ALL POSTERS/START UP STORIES.jpg",
    registrationOpen: true,
    teamSize: "4 members",
    rules: [],
    coordinators: {
      event: [
        { name: "N. Pavani Yadav", phone: "7893495464" },

      ],
      faculty: [
        { name: "AV Rajesh", phone: "9963860807" }
      ]
    }
  },
  {
    id: "22",
    title: "Leadership Talks",
    description:
      "An engaging session focused on leadership qualities, personal growth, and professional development.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Spotlight Events"],
    department: "EEE",
    image: "/ALL POSTERS/LEADERSHIP TALKS.jpg",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [],
    coordinators: {
      event: [
        { name: "", phone: "" },//Not updated

      ],
      faculty: [
        { name: "A. Ganesh", phone: "9160250264" }
      ]
    }
  },
  {
    id: "23",
    title: "Art Gallery",
    description:
      "A creative showcase celebrating artistic expression through paintings, sketches, and photography.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:00 - 12:30",
    venue: "Department Venues",
    categories: ["Cultural Events", "Arts"],
    department: "",
    image: "/ALL POSTERS/ART GALLERY.jpg",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "One artwork per student",
      "Theme: Colours of Imagination",
      "Participants must bring their own materials",
      "Artwork must be original and appropriate"
    ],
    coordinators: {
      event: [
        { name: "D. Kumar", phone: "8688502790" },

      ],
      faculty: [
        { name: "K. Sreedevi", phone: "8074682544" }
      ]
    }
  },
  {
    id: "24",
    title: "Rhythm of One",
    description:
      "A high-energy musical event celebrating rhythm, coordination, and creativity.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:00 - 12:30",
    venue: "Department Venues",
    categories: ["Cultural Events", "Music"],
    department: "",
    image: "/ALL POSTERS/RYTHAM OF ONE.jpg",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "Only live instruments allowed",
      "No backing tracks",
      "Time limit: 3–6 minutes",
      "Valid college ID required"
    ],
    coordinators: {
      event: [
        { name: "K. Nandhini", phone: "7793944809" },

      ],
      faculty: [
        { name: "M. Poornima", phone: "7013558497" }
      ]
    }
  },
  {
    id: "25",
    title: "Echoes of Soul",
    description:
      "A soulful music event highlighting emotional expression through voice and melody.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:00 - 04:00",
    venue: "Auditorium Lobby",
    categories: ["Cultural Events", "Music"],
    department: "",
    image: "/ALL POSTERS/ECHOES OF SOUL.jpg",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "Solo, duet, or group singing allowed",
      "No lip-sync or recorded vocals",
      "Time limit: 3–5 minutes",
      "Song must be appropriate",
      "Valid college ID required"
    ],
    coordinators: {
      event: [
        { name: "G. L. Vaishnavi", phone: "6304384369" },

      ],
      faculty: [
        { name: "E. Mamatha", phone: "8886207679" }
      ]
    }
  },
  //march 7
  {
    id: "26",
    title: "Laugh Tales",
    description:
      "An entertaining event designed to spread joy, humor, and positivity through comedy and storytelling.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Cultural Events", "Stand up Comedy"],
    department: "",
    image: "/ALL POSTERS/LAUGH TALES.jpg",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "Content must be clean and respectful",
      "Vulgar or offensive jokes are prohibited",
      "Performances must stay within the allotted time",
      "Use of props must be pre-approved",
      "Judges’ decision will be final"
    ],
    coordinators: {
      event: [
        { name: "B. Divya Prithi", phone: "9182628230" },

      ],
      faculty: [
        { name: "K. Swetha Sree", phone: "9959873980" }
      ]
    }
  },
  {
    id: "27",
    title: "Idea Pitching",
    description:
      "An innovation-focused event where participants present unique ideas to solve real-world problems.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Spotlight Events"],
    department: "",
    image: "/ALL POSTERS/IDEA PITCHING.jpg",
    registrationOpen: true,
    teamSize: "",
    rules: [],
    coordinators: {
      event: [
        { name: "K. Dimple", phone: "9985217931" },

      ],
      faculty: [
        { name: "Dr. S Kalesha Masthanvali", phone: "8978686923" }
      ]
    }
  },
  {
    id: "28",
    title: "Youth Summit",
    description:
      "A thought-provoking event that brings young minds together to discuss social, technological, and national issues.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Spotlight Events"],
    department: "",
    image: "/ALL POSTERS/YOUTH SUMMIT.jpg",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "Participants must respect differing opinions",
      "Topics must align with the summit theme",
      "Time limits must be strictly followed",
      "Inappropriate language or behavior is not allowed",
      "Moderators’ and judges’ decisions are final"
    ],
    coordinators: {
      event: [
        { name: "Ruksana Banu Shaik", phone: "9100399934" },

      ],
      faculty: [
        { name: "T. Murari", phone: "8555924980" }
      ]
    }
  },
  {
    id: "29",
    title: "Youth Parliament",
    description:
      "A dynamic platform where young minds engage in debating national, social, and policy-level issues following parliamentary procedures.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 12:30",
    venue: "Department Venues",
    categories: ["Spotlight Events"],
    department: "",
    image: "/ALL POSTERS/YOUTH PARLIMENT.jpg",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "Participants must follow parliamentary decorum",
      "Speeches must align with assigned topics or bills",
      "Strict adherence to time limits is mandatory",
      "No inappropriate or offensive language",
      "Decisions of the Speaker/Moderators are final"
    ],
    coordinators: {
      event: [
        { name: "R. Harshath", phone: "9515636674" },

      ],
      faculty: [{ name: "Eswaraiah", phone: "6302099491" }]
    }
  },
  {
    id: "30",
    title: "Echoes of Sound",
    description:
      "A music-focused event celebrating melody, rhythm, and creative sound performances.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Cultural Events", "Music"],
    department: "",
    image: "/ALL POSTERS/ECHOS OF SOUND.jpg",
    registrationOpen: true,
    teamSize: "",
    rules: [],
    coordinators: {
      event: [
        { name: "Rakesh", phone: "8977140478" },

      ],
      faculty: [
        { name: "K. B. Vamsi Krishna", phone: "" }//Not updated
      ]
    }
  },
  {
    id: "31",
    title: "Battle of Beats",
    description:
      "An energetic dance and rhythm competition highlighting coordination, performance, and stage presence.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Cultural Events", "Dance"],
    department: "",
    image: "/ALL POSTERS/BATTLE OF BEATS.jpg",
    registrationOpen: true,
    teamSize: "",
    rules: [],
    coordinators: {
      event: [
        { name: "K. Sai Suhitha", phone: "9347875157" },

      ],
      faculty: [
        { name: "P. Harshavardhan", phone: "8317688670" }
      ]
    }
  },
  {
    id: "32",
    title: "Tech Short",
    description:
      "A fast-paced technical speaking event where participants explain a technical concept within a short duration.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["TechExplore"],
    department: "",
    image: "/ALL POSTERS/TECH SHORT.jpg",
    registrationOpen: true,
    teamSize: "Individual",
    rules: [
      "Individual participation only",
      "Topic must be technical in nature",
      "Time limit must be strictly followed",
      "Use of notes or mobiles is not allowed",
      "Judges’ decision will be final"
    ],
    coordinators: {
      event: [
        { name: "K. Neeraj", phone: "8886239948" },

      ],
      faculty: [
        { name: "Dr. Y. Vishnu Tej", phone: "9491278564" }
      ]
    }
  },
  {
    id: "33",
    title: "Logic Lock",
    description:
      "A brain-teasing technical event that challenges logical and analytical thinking through puzzles.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["TechExplore"],
    department: "",
    image: "/ALL POSTERS/LOGIC LOCK.jpg",
    registrationOpen: true,
    teamSize: "Individual",
    rules: [
      "Individual participation only",
      "Puzzles must be solved sequentially",
      "No external help is allowed",
      "Time limit applies for each round",
      "Judges’ decision will be final"
    ],
    coordinators: {
      event: [
        { name: "G. Bhavana", phone: "8008098380" },

      ],
      faculty: [
        { name: "Mrs. Jeevana Sagari", phone: "8179750733" }
      ]
    }
  },
  {
    id: "34",
    title: "Code Crime Scene",
    description:
      "An investigative coding event where participants debug and analyze faulty code.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 05:30",
    venue: "Department Venues",
    categories: ["TechExplore"],
    department: "",
    image: "/ALL POSTERS/CODE CRIME SECENE.jpg",
    registrationOpen: true,
    teamSize: "Individual or 2 per team",
    rules: [
      "Individual or team participation (max 2)",
      "Code must be debugged within the given time",
      "Internet usage may be restricted",
      "Only allowed languages may be used",
      "Judges’ decision will be final"
    ],
    coordinators: {
      event: [
        { name: "K. P. Mohitha", phone: "7780134362" },

      ],
      faculty: [
        { name: "G. Deepthi", phone: "8247702220" }
      ]
    }
  },
  {
    id: "35",
    title: "SQL Query Challenge",
    description:
      "A database-focused technical event testing SQL query logic, optimization, and accuracy.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 05:30",
    venue: "Department Venues",
    categories: ["TechExplore"],
    department: "",
    image: "/ALL POSTERS/SQL QUERY CHALLENGE.jpg",
    registrationOpen: true,
    teamSize: "Individual",
    rules: [
      "Individual participation only",
      "Queries must produce correct output",
      "Use of external resources is prohibited",
      "Time limit must be followed",
      "Judges’ decision will be final"
    ],
    coordinators: {
      event: [
        { name: "A. Sundar", phone: "9397961457" },

      ],
      faculty: [
        { name: "V. Sandeep Reddy", phone: "9491948526" }
      ]
    }
  },
  {
    id: "36",
    title: "Pic Prompt",
    description:
      "A creative technical event where participants build a technical idea inspired by an image prompt.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["TechExplore"],
    department: "",
    image: "/ALL POSTERS/PIC PROMPT.jpg",
    registrationOpen: true,
    teamSize: "Individual",
    rules: [
      "Individual participation only",
      "Prompt will be given on the spot",
      "Time limit must be followed",
      "Explanation must be technical",
      "Judges’ decision will be final"
    ],
    coordinators: {
      event: [
        { name: "C. Deekshitha", phone: "8919535090" },

      ],
      faculty: [
        { name: "B. Balakonda Reddy", phone: "9393855815" }
      ]
    }
  },
  {
    id: "37",
    title: "Memory Meltdown",//not updated
    description:
      "A fun technical event designed to test memory power, concentration, and observation skills.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["TechExplore"],
    department: "",
    image: "/ALL POSTERS/MEMORY MELTDOWN.jpg",
    registrationOpen: true,
    teamSize: "Individual",
    rules: [
      "Individual participation only",
      "No writing during observation time",
      "Recall must be done within time limit",
      "No external help allowed",
      "Judges’ decision is final"
    ],
    coordinators: {
      event: [
        { name: "", phone: "" },

      ],
      faculty: [
        { name: "", phone: "" }
      ]
    }
  },

  {
    id: "38",
    title: "Tech Dumb Charades",
    description:
      "A technical twist to the classic dumb charades where participants act out technical terms without speaking.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["TechExplore"],
    department: "",
    image: "/ALL POSTERS/TECH DUMB SHARADS.jpg",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Team participation (2–4 members)",
      "No speaking or writing allowed",
      "Technical terms only",
      "Time limit per round applies",
      "Judges’ decision is final"
    ],
    coordinators: {
      event: [
        { name: "R. Sakthesh", phone: "9550048249" },

      ],
      faculty: [
        { name: "M. Keerthi", phone: "9989654546" }
      ]
    }
  },
  {
    id: "39",
    title: "UI / UX Design Sprint",
    description:
      "A creative technical event focused on user interface and user experience design.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["TechExplore"],
    department: "",
    image: "/ALL POSTERS/UI UX DESIGN SPRINT.jpg",
    registrationOpen: true,
    teamSize: "Individual or 2 members",
    rules: [
      "Individual or team participation (max 2)",
      "Tools must be approved by organizers",
      "Internet usage may be restricted",
      "Design explanation is mandatory",
      "Judges’ decision is final"
    ],
    coordinators: {
      event: [
        { name: "G. Naveen Kumar", phone: "6303814417" },

      ],
      faculty: [
        { name: "Mrs. S. Nandini", phone: "9966231169" }
      ]
    }
  },
  {
    id: "40",
    title: "Cube Solving",
    description:
      "A skill-based event challenging speed, logic, and problem-solving using Rubik’s cubes.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["TechExplore"],
    department: "",
    image: "/ALL POSTERS/CUBE SOLVING.jpg",
    registrationOpen: true,
    teamSize: "Individual",
    rules: [
      "Individual participation only",
      "Cube must be solved completely",
      "Time will be recorded accurately",
      "Tampering with cube is not allowed",
      "Judges’ decision is final"
    ],
    coordinators: {
      event: [
        { name: "N. Nikhil", phone: "9392302840" },

      ],
      faculty: [
        { name: "K. Narasimha Reddy", phone: "9010449197" }
      ]
    }
  },
  {
    id: "41",
    title: "Agentix",
    description:
      "A hackathon focused on building intelligent agents and automated systems.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Hackathons"],
    department: "",
    image: "/ALL POSTERS/AGENTIX.jpg",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Teams must work only during the official hackathon duration",
      "Project must be developed during the event",
      "Internet usage is allowed",
      "Each team must present the solution",
      "Judges’ decision will be final"
    ],
    coordinators: {
      event: [
        { name: "Surineni Likith", phone: "9441694410" },

      ],
      faculty: [
        { name: "Dr. P. Lokesh Kumar Reddy", phone: "8008592385" }
      ]
    }
  },
  {
    id: "42",
    title: "Webverse",
    description:
      "A hackathon centered on building innovative web-based solutions using modern technologies.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Hackathons"],
    department: "",
    image: "/ALL POSTERS/WEBVERSE.jpg",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Teams must work only during the official hackathon duration",
      "Project must be developed during the event",
      "Internet usage is allowed",
      "Each team must present the solution",
      "Judges’ decision will be final"
    ],
    coordinators: {
      event: [
        { name: "V. Sudharshan", phone: "9908416160" },

      ],
      faculty: [
        { name: "S. Mrudula", phone: "9703064154" }
      ]
    }
  },
  {
    id: "43",
    title: "Sensecraft",
    description:
      "A hackathon emphasizing smart systems using sensors, data, and intelligent processing.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Hackathons"],
    department: "",
    image: "/ALL POSTERS/SENSECRAFT.jpg",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Solution must involve sensors, data, or smart systems",
      "Simulation or prototype models are acceptable",
      "Idea should solve a real-world problem",
      "Teams must explain the working clearly"
    ],
    coordinators: {
      event: [
        { name: "V. Rishi Sree", phone: "8309663060" },

      ],
      faculty: [
        { name: "P. Mounika", phone: "9502582087" }
      ]
    }
  },
  {
    id: "44",
    title: "Designathon",
    description:
      "A creativity-driven event focused on mechanical engineering design and innovation.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Hackathons"],
    department: "MECH",
    image: "/ALL POSTERS/DESIGNATHON.jpg",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Designs must be original and created during the event",
      "Solution should address the given problem statement",
      "Teams must submit and explain the design clearly",
      "Time limits must be strictly followed"
    ],
    coordinators: {
      event: [
        { name: "K. V. Vamsidhar Reddy", phone: "7993581848" },

      ],
      faculty: [
        { name: "Dr. N Rajesh", phone: "9985289928" },
        { name: "Dr. G. Guru Mahesh", phone: "9966214744" }
      ]
    }
  },
  {
    id: "45",
    title: "Techorbit",
    description:
      "A project expo showcasing innovative technology-based projects and prototypes.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Project Expo"],
    department: "",
    image: "/ALL POSTERS/TECHORBIT.jpg",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Projects must be original and student-developed",
      "Teams must explain the project clearly",
      "Working models or demos are preferred",
      "Judges’ decision will be final"
    ],
    coordinators: {
      event: [
        { name: "Rohith", phone: "9493841144" },

      ],
      faculty: [
        { name: "J. Omkar Reddy", phone: "9949366589" }
      ]
    }
  },
  {
    id: "46",
    title: "SignalSphere",
    description:
      "A project expo focusing on electronics, communication, and signal processing systems.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Project Expo"],
    department: "",
    image: "/ALL POSTERS/SIGNAL SPHERE.jpg",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Projects must relate to electronics or communication",
      "Teams must explain the project clearly",
      "Working models or demos are preferred",
      "Judges’ decision will be final"
    ],
    coordinators: {
      event: [
        { name: "K. Gayathri", phone: "8121665805" },

      ],
      faculty: [
        { name: "S. Salma", phone: "8885624395" }
      ]
    }
  },
  {
    id: "47",
    title: "Energex",
    description:
      "A project expo centered on electrical systems and energy-based solutions.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Project Expo"],
    department: "EEE",
    image: "/ALL POSTERS/ENERGEX.jpg",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Projects must focus on electrical or energy systems",
      "Teams must explain the project clearly",
      "Working models or demos are preferred",
      "Judges’ decision will be final"
    ],
    coordinators: {
      event: [
        { name: "K. Pawan Kumar", phone: "8019606890" },

      ],
      faculty: [
        { name: "K. Prathiba", phone: "9492406096" }
      ]
    }
  },
  {
    id: "48",
    title: "Infrasys",
    description:
      "A project expo focused on civil engineering and infrastructure systems.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Project Expo"],
    department: "CIVIL",
    image: "/ALL POSTERS/INFRASYS.jpg",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Projects must relate to civil or infrastructure systems",
      "Teams must explain the project clearly",
      "Working models or demos are preferred",
      "Judges’ decision will be final"
    ],
    coordinators: {
      event: [
        { name: "Junaid", phone: "9866314768" },

      ],
      faculty: [
        { name: "A. Usha", phone: "7815867971" }
      ]
    }
  },






  {
    id: "49",
    title: "Cricket Men",
    description: "",
    date: "From: 16th Feb To: 25th Feb",
    dateTag: "7 Mar",
    time: "10:00 - 6:00",
    venue: "SV grounds",
    categories: ["Sports"],
    department: "",
    image: "/ALL POSTERS/CRICKET.jpg",
    registrationOpen: true,
    registrationLink: "https://forms.gle/DSimu8qmfRLP7CYH9",
    teamSize: "11 members + 4 substitutes",
    rules: [
      " Knock-out tournament",
      " A team consists of maximum 15 players(11+4).",
      " A match consists of 10 overs (flexible) played with White ball.",
      " ICC rules and regulations will be followed.",
      " All players must wear colour jersey."
    ],
    coordinators: {
      event: [
        { name: "", phone: "" },
        { name: "", phone: "" }
      ],
      faculty: [
        { name: "", phone: "" }
      ]
    }
  },
  {
    id: "50",
    title: "Kabaddi Men",
    description: "",
    date: "From: 24th Feb To: 27th Feb",
    dateTag: "7 Mar",
    time: "10:00 - 6:00",
    venue: "SV grounds",
    categories: ["Sports"],
    department: "",
    image: "/ALL POSTERS/KABADDI MENS.jpg",
    registrationOpen: true,
    registrationLink: "https://forms.gle/DSimu8qmfRLP7CYH9",
    teamSize: "10 members",
    rules: [
      "League-cum-knock-out.",
      "Men - Max: 10 players (7 on-field, 3 substitutes), Min: 7 players.",
      "A match consists of two halves of 20 minutes each with a 5-minute break .",
      "Pro Kabaddi League rules will be followed.",
    ],
    coordinators: {
      event: [
        { name: "", phone: "" },
        { name: "", phone: "" }
      ],
      faculty: [
        { name: "", phone: "" }
      ]
    }
  },
  {
    id: "51",
    title: "Volleyball Men",
    description: "",
    date: "From: 24th Feb To: 27th Feb",
    dateTag: "7 Mar",
    time: "10:00 - 6:00",
    venue: "SV grounds",
    categories: ["Sports"],
    department: "",
    image: "/ALL POSTERS/VOLLEY BALL MEN.jpg",
    registrationOpen: true,
    registrationLink: "https://forms.gle/DSimu8qmfRLP7CYH9",
    teamSize: " 12 members",
    rules: [
      "Knock-out tournament",
      "A match consists of 3 sets of 25 points.",
      "The deciding set will be 15 points.",
      "All matches will follow Rally Point System with Rotation basis.",
      "VFI rules will be followed.."
    ],
    coordinators: {
      event: [
        { name: "", phone: "" },
        { name: "", phone: "" }
      ],
      faculty: [
        { name: "", phone: "" }
      ]
    }
  },
  {
    id: "52",
    title: "Chess Men",
    description: "",
    date: "From: 24th Feb To: 27th Feb",
    dateTag: "7 Mar",
    time: "10:00 - 6:00",
    venue: "SV grounds",
    categories: ["Sports"],
    department: "",
    image: "/ALL POSTERS/CHESS MENS.jpg",
    registrationOpen: true,
    registrationLink: "https://forms.gle/DSimu8qmfRLP7CYH9",
    teamSize: "Individual",
    rules: [
      " League-cum-knock-out.",
      " Single player matches are conducted.",
      " Player will have a 10-minute time control with a 5-second increment per move.",
      " Use of electronic devices during the game is strictly prohibited.",
      " FIDE (World Chess Federation) rules will be followed."
    ],
    coordinators: {
      event: [
        { name: "", phone: "" },
        { name: "", phone: "" }
      ],
      faculty: [
        { name: "", phone: "" }
      ]
    }
  },
  {
    id: "53",
    title: "Carroms Men",
    description: "",
    date: "From: 24th Feb To: 27th Feb",
    dateTag: "7 Mar",
    time: "10:00 - 6:00",
    venue: "SV grounds",
    categories: ["Sports"],
    department: "",
    image: "/ALL POSTERS/CARROMS MENS.jpg",
    registrationOpen: true,
    registrationLink: "https://forms.gle/DSimu8qmfRLP7CYH9",
    teamSize: "",
    rules: [
      " League-cum-knock-out.",
      " A match consists of 3 sets, with each set being a race to 25 points.",
      " The deciding set will be played up to 15 points.",
      " The rally point system will be applied with rotation after each game.",
      " Official Carrom Federation of India (CFI) rules will be followed."
    ],
    coordinators: {
      event: [
        { name: "", phone: "" },
        { name: "", phone: "" }
      ],
      faculty: [
        { name: "", phone: "" }
      ]
    }
  },
  {
    id: "54",
    title: "Table Tennis Men",
    description: "",
    date: "From: 16th Feb To: 25th Feb",
    dateTag: "7 Mar",
    time: "10:00 - 6:00",
    venue: "SV grounds",
    categories: ["Sports"],
    department: "",
    image: "/ALL POSTERS/TABLE TENNIS MENS.jpg",
    registrationOpen: true,
    registrationLink: "https://forms.gle/DSimu8qmfRLP7CYH9",
    teamSize: "Individual",
    rules: [
      "Matches will be played in Singles format (Best of 5 games).",
      "Each game is played up to 11 points, with a 2-point lead required to win.",
      "Service alternates every 2 points, and the ball must bounce on both sides",
      "The Rally Point Scoring System will be followed.",
      "ITTF rules and standard table tennis equipment (40mm ball) apply."
    ],
    coordinators: {
      event: [
        { name: "", phone: "" },
        { name: "", phone: "" }
      ],
      faculty: [
        { name: "", phone: "" }
      ]
    }
  },
  {
    id: "55",
    title: "Throwball Women",
    description: "",
    date: "From: 24th Feb To: 27th Feb",
    dateTag: "7 Mar",
    time: "10:00 - 6:00",
    venue: "SV grounds",
    categories: ["Sports"],
    department: "",
    image: "/ALL POSTERS/THROW BALL WOMEN.jpg",
    registrationOpen: true,
    registrationLink: "https://forms.gle/DSimu8qmfRLP7CYH9",
    teamSize: "9 on court + 3 substitutes",
    rules: [
      "1. Knock-out tournament",
      "2. A match consists of 3 sets of 25 points.",
      "3. The deciding set will be 15 points.",
      "4. All matches will follow Rally Point System with Rotation basis.",
      "5. VFI rules will be followed."
    ],
    coordinators: {
      event: [
        { name: "", phone: "" },
        { name: "", phone: "" }
      ],
      faculty: [
        { name: "", phone: "" }
      ]
    }
  },
  {
    id: "56",
    title: "Tennikoit(Women)",
    description: "",
    date: "From: 24th Feb To: 27th Feb",
    dateTag: "7 Mar",
    time: "10:00 - 6:00",
    venue: "SV grounds",
    categories: ["Sports"],
    department: "",
    image: "/ALL POSTERS/TENNKOIT WOMEN.jpg",
    registrationOpen: true,
    registrationLink: "https://forms.gle/DSimu8qmfRLP7CYH9",
    teamSize: " Individual ",
    rules: [
      "Matches will be played in Singles format (1 vs 1) on a standard Tennikoit court.",
      "The serve must be underhand, and the ring must cross the net cleanly.",
      "A fault is declared for out-of-bounds throws, failure to cross the net, or double touch.",
      "Matches are Best of 3 sets, each set up to 21 points (win by 2).",
      "The umpire’s decision is final; misbehavior may lead to disqualification."
    ],
    coordinators: {
      event: [
        { name: "", phone: "" },
        { name: "Priya Verma", phone: "9345678123" }
      ],
      faculty: [
        { name: "", phone: "" }
      ]
    }
  },
  {
    id: "57",
    title: "Kabaddi Women",
    description: "",
    date: "From: 24th Feb To: 27th Feb",
    dateTag: "7 Mar",
    time: "10:00 - 6:00",
    venue: "SV grounds",
    categories: ["Sports"],
    department: "",
    image: "/ALL POSTERS/KABADDI WOMENS.jpg",
    registrationOpen: true,
    registrationLink: "https://forms.gle/DSimu8qmfRLP7CYH9",
    teamSize: "10 members",
    rules: [
      " League-cum-knock-out.",
      " Women - Max: 10 players (7 on-field, 3 substitutes), Min: 7 players.",
      " A match consists of two halves of 15 minutes each with a 5-minute break.",
      "Pro Kabaddi League rules will be followed."
    ],
    coordinators: {
      event: [
        { name: "", phone: "" },
        { name: "", phone: "" }
      ],
      faculty: [
        { name: "", phone: "" }
      ]
    }
  },
  {
    id: "58",
    title: "Volleyball Women",
    description: "",
    date: "From: 24th Feb To: 27th Feb",
    dateTag: "7 Mar",
    time: "10:00 - 6:00",
    venue: "SV grounds",
    categories: ["Sports"],
    department: "",
    image: "/ALL POSTERS/VOLLEY BALL WOMEN.jpg",
    registrationOpen: true,
    registrationLink: "https://forms.gle/DSimu8qmfRLP7CYH9",
    teamSize: "12 members",
    rules: [
      "1. Knock-out tournament",
      "2. A match consists of 3 sets of 25 points.",
      "3. The deciding set will be 15 points.",
      "4. All matches will follow Rally Point System with Rotation basis.",
      "5. VFI rules will be followed.."
    ],
    coordinators: {
      event: [
        { name: "", phone: "" },
        { name: "", phone: "" }
      ],
      faculty: [
        { name: "", phone: "" }
      ]
    }
  },
  {
    id: "59",
    title: "Chess Women",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "/ALL POSTERS/CHESS WOMENS.jpg",
    registrationOpen: true,
    registrationLink: "https://forms.gle/DSimu8qmfRLP7CYH9",
    teamSize: "Individual",
    rules: [
      "15 minutes per player.",
      "FIDE rules apply.",
      "No mobile use allowed."
    ],
    coordinators: {
      event: [
        { name: "", phone: "" },
        { name: "", phone: "" }
      ],
      faculty: [
        { name: "", phone: "" }
      ]
    }
  },
  {
    id: "60",
    title: "Carroms Women",
    description: "",
    date: "From: 24th Feb To: 27th Feb",
    dateTag: "7 Mar",
    time: "10:00 - 6:00",
    venue: "SV grounds",
    categories: ["Sports"],
    department: "",
    image: "/ALL POSTERS/CARROM WOMENS.jpg",
    registrationOpen: true,
    registrationLink: "https://forms.gle/DSimu8qmfRLP7CYH9",
    teamSize: "Individual",
    rules: [
      "1. League-cum-knock-out.",
      "2. Single player matches are conducted.",
      "3. Player will have a 10-minute time control with a 5-second increment per move.",
      "4. Use of electronic devices during the game is strictly prohibited.",
      "5. FIDE (World Chess Federation) rules will be followed."
    ],
    coordinators: {
      event: [
        { name: "", phone: "" },
        { name: "", phone: "" }
      ],
      faculty: [
        { name: "", phone: "" }
      ]
    }
  },
  {
    id: "61",
    title: "Table tennis Women",
    description: "",
    date: "From: 24th Feb To: 27th Feb",
    dateTag: "7 Mar",
    time: "10:00 - 6:00",
    venue: "SV grounds",
    categories: ["Sports"],
    department: "",
    image: "/ALL POSTERS/TABLE TENNIS WOMENS.jpg",
    registrationOpen: true,
    registrationLink: "https://forms.gle/DSimu8qmfRLP7CYH9",
    teamSize: "Individual",
    rules: [
      "Matches will be played in Singles format (Best of 5 games).",
      "Each game is played up to 11 points, with a 2-point lead required to win.",
      "Service alternates every 2 points, and the ball must bounce on both sides",
      "The Rally Point Scoring System will be followed.",
      "ITTF rules and standard table tennis equipment (40mm ball) apply."
    ],
    coordinators: {
      event: [
        { name: "", phone: "" },
        { name: "", phone: "" }
      ],
      faculty: [
        { name: "", phone: "" }
      ]
    }
  }
];





