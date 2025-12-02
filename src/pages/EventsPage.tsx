import { useState } from "react";
import { Search, X, Calendar, DollarSign, Trophy, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaIndianRupeeSign } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Event {
  id: string;
  name: string;
  code: string;
  category: "Technical" | "Cultural" | "Sports" | "Fun Events";
  date: string;
  entryFee: string;
  poster: string;
  prizes: string;
  rules: string[];
  type: "Individual" | "Team" | "Team Men" | "Singles Men" |"Singles Women" | "Team Women" | "Individual / Team" | "Single/Doubles Men" | "Single/Doubles Women"| "Individual/ Duo / Team ";
}

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const categories = ["All", "Technical", "Cultural", "Sports", "Signature Events",];

  const events: Event[] = [
    {
      id: "1",
      name: "Code Combat",
      code: "TEC001",
      category: "Technical",
      date: "March 15, 2025",
      entryFee: "₹200",
      poster: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
      prizes: "1st: ₹10,000 | 2nd: ₹5,000 | 3rd: ₹2,500",
      rules: [
        "Teams of 2-3 members",
        "6-hour coding competition",
        "Use any programming language",
        "No external help allowed",
      ],
      type: "Team Men",
    },
    {
    id: "2",
    name: "Cricket Men",
    code: "SPT002",
    category: "Sports",
    date: "",
    entryFee: "₹3000",
    poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
    prizes: "1st: ₹20,000 | 2nd: ₹10,000",
    rules: [
      "Team Composition: 11 players on field + 4 substitutes",
      "Match Format: 8–10 overs per side, max 2 overs per bowler",
      "Toss decides batting/fielding",
      "Free hit for no-ball; tie → Super Over",
      "Ball: Tennis or soft ball",
      "Umpire’s decision final; misconduct = disqualification"
    ],
    type: "Team Men"
  },
  {
    id: "3",
    name: "Kabaddi Men",
    code: "SPT003",
    category: "Sports",
    date: "",
    entryFee: "₹2000",
    poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
    prizes: "1st: ₹8,000 | 2nd: ₹4,000",
    rules: [
      "2 halves of 20 mins, 5-min halftime",
      "1 point per touch; all-out = 2 bonus pts; bonus line = extra point",
      "Raid Rules: Chant 'Kabaddi' continuously; 30 secs per raid",
      "Out if touched/caught/steps out; revive 1 player per point",
      "Umpire’s decision final; misconduct = disqualification"
    ],
    type: "Team Men"
  },
  {
    id: "4",
    name: "Volleyball Men",
    code: "SPT004",
    category: "Sports",
    date: "",
    entryFee: "₹2000",
    poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
    prizes: "1st: ₹8,000 | 2nd: ₹4,000",
    rules: [
      "Best of 3 sets (25 points, rally scoring)",
      "Max 3 touches; no net touch or crossing line",
      "Serve from behind baseline",
      "Ball: Leather/Synthetic (size 4/5)",
      "Referee’s decision final; unsporting behavior = disqualification"
    ],
    type: "Team Men"
  },
  {
    id: "5",
    name: "Chess Men",
    code: "SPT005",
    category: "Sports",
    date: "",
    entryFee: "₹200",
    poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
    prizes: "1st: ₹1,000 | 2nd: ₹500",
    rules: [
      "Individual (Swiss/Knockout), 15 minutes per player",
      "FIDE rules apply",
      "Illegal move = warning → loss",
      "Silence required; mobile use = disqualification"
    ],
    type: "Singles Men"
  },
  {
    id: "6",
    name: "Carroms Men",
    code: "SPT006",
    category: "Sports",
    date: "",
    entryFee: "₹200",
    poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
    prizes: "1st: ₹1,000 | 2nd: ₹500",
    rules: [
      "Singles/Doubles, best of 3 boards",
      "Queen = 5 pts (must cover)",
      "First to 25 pts or 2 boards wins",
      "Standard striker only; alternate breaks",
      "Foul = return one coin + lose turn"
    ],
    type: "Single/Doubles Men"
  },
  {
    id: "7",
    name: "Table Tennis Men",
    code: "SPT007",
    category: "Sports",
    date: "",
    entryFee: "₹300",
    poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
    prizes: "1st: ₹1,000 | 2nd: ₹700",
    rules: [
      "Singles (Best of 5 games)",
      "Each game to 11 points, win by 2",
      "2 serves alternately; ball bounces once on both sides",
      "Rally point scoring",
      "Standard ITTF rules apply"
    ],
    type: "Singles Men"
  },
  {
    id: "8",
    name: "Throwball Women",
    code: "SPT008",
    category: "Sports",
    date: "",
    entryFee: "₹1500",
    poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
    prizes: "1st: ₹5,000 | 2nd: ₹2,500",
    rules: [
      "Team of 7 on court + 5 substitutes",
      "Best of 3 sets to 25 points (win by 2)",
      "Catch cleanly, throw within 3 seconds",
      "No double touch or holding",
      "Umpire’s decision final"
    ],
    type: "Team Women"
  },
  {
    id: "9",
    name: "Kabaddi Women",
    code: "SPT009",
    category: "Sports",
    date: "",
    entryFee: "₹1500",
    poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
    prizes: "1st: ₹6,000 | 2nd: ₹3,000",
    rules: [
      "2 halves of 20 mins, 5-min halftime",
      "1 point per touch; all-out = 2 bonus pts",
      "Raid Rules: Chant 'Kabaddi' continuously; 30 secs per raid",
      "Out if touched/caught/steps out; revive 1 player per point",
      "Umpire’s decision final"
    ],
    type: "Team Women"
  },
  {
    id: "10",
    name: "Volleyball Women",
    code: "SPT010",
    category: "Sports",
    date: "",
    entryFee: "₹1500",
    poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
    prizes: "1st: ₹6,000 | 2nd: ₹3,000",
    rules: [
      "Best of 3 sets (25 points, rally scoring)",
      "Max 3 touches; no net touch or crossing line",
      "Serve from behind baseline",
      "Ball: Leather/Synthetic (size 4/5)",
      "Referee’s decision final"
    ],
    type: "Team Women"
  },
  {
    id: "11",
    name: "Chess Women",
    code: "SPT011",
    category: "Sports",
    date: "",
    entryFee: "₹200",
    poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
    prizes: "1st: ₹1,000 | 2nd: ₹500",
    rules: [
      "Individual (Swiss/Knockout), 15 minutes per player",
      "FIDE rules apply",
      "Illegal move = warning → loss",
      "Silence required; mobile use = disqualification"
    ],
    type: "Singles Women"
  },
  {
    id: "12",
    name: "Carroms Women",
    code: "SPT012",
    category: "Sports",
    date: "",
    entryFee: "₹200",
    poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
    prizes: "1st: ₹1,000 | 2nd: ₹500",
    rules: [
      "Singles/Doubles, best of 3 boards",
      "Queen = 5 pts (must cover)",
      "First to 25 pts or 2 boards wins",
      "Standard striker only; alternate breaks",
      "Foul = return one coin + lose turn"
    ],
    type: "Single/Doubles Women"
  },
  {
    id: "13",
    name: "Tennicoit Women",
    code: "SPT013",
    category: "Sports",
    date: "",
    entryFee: "₹200",
    poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
    prizes: "1st: ₹800 | 2nd: ₹500",
    rules: [
      "Singles (1 vs 1)",
      "Underhand serve; ring must pass cleanly over net",
      "Ring outside or double touch = fault",
      "Best of 3 sets, up to 21 points (win by 2)",
      "Umpire’s decision final"
    ],
    type: "Singles Women"
  },
    {
      id: "14",
      name: "MUSICON",
      code: "CUL001",
      category: "Cultural",
      date: "March 16, 2026",
      entryFee: "₹150",
      poster: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",
      prizes: "1st: ₹20,000 | 2nd: ₹10,000 | 3rd: ₹5,000",
      rules: [
            "Solo, duet, and group entries are allowed.",
            "Categories include Vocal, Instrumental, and Fusion performances",
            "Solo: 1 participant, Duet: 2 participants, Group: up to 6 members",
            "Solo/Duet time: 2–3 minutes, Group time: 4–5 minutes.",
      ],
      type: "Individual/ Duo / Team ",
    },
    {
      id: "15",
      name: "AI Workshop",
      code: "WRK001",
      category: "Fun Events",
      date: "March 18, 2025",
      entryFee: "₹150",
      poster: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      prizes: "Certificate & Swag",
      rules: [
        "Individual participation",
        "Laptop required",
        "3-hour intensive session",
        "Hands-on projects included",
      ],
      type: "Individual",
    },
    {
      id: "16",
      name: "Web Warriors",
      code: "TEC002",
      category: "Technical",
      date: "March 19, 2025",
      entryFee: "₹250",
      poster: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      prizes: "1st: ₹15,000 | 2nd: ₹8,000 | 3rd: ₹4,000",
      rules: [
        "Individual or teams of 2",
        "Build a responsive web app",
        "8-hour time limit",
        "Deploy on provided platform",
      ],
      type: "Team",
    },
    {
      id: "17",
      name: "Dance off",
      code: "CUL002",
      category: "Cultural",
      date: "March 16, 2026",
      entryFee: "₹200",
      poster: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800",
      prizes: "1st: ₹12,000 | 2nd: ₹6,000 | 3rd: ₹3,000",
      rules: [
        " Open to all college students with valid ID cards.",
        " Solo and group performances are allowed.",
        " Group teams can have 3 to 12 members.",
        " Solo time limit: 2–3 minutes; Group: 4–5 minutes.",
      ],
      type: "Individual / Team",
    },
    {
      id: "18",
      name: "Art Gallery",
      code: "CUL002",
      category: "Cultural",
      date: "March 16, 2026",
      entryFee: "₹100",
      poster: "https://tse1.mm.bing.net/th/id/OIP.2v8w2PBuI1n5OYMT9i8hGAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      prizes: "1st: ₹12,000 | 2nd: ₹6,000 | 3rd: ₹3,000",
      rules: [
       " Individual participation only.",
       "Theme: “Colours of Imagination”",
       " Bring your own materials and supplies.",
       " Each participant can submit only one artwork.",
      ],
      type: "Individual",
    },
    {
  id: "19",
  name: "PPT Presentation (CSE)",
  code: "TECH019",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
  prizes: "",
  rules: [
    "Team size: 2–4 members.",
    "Choose 1 topic.",
    "Presentation duration: 8–10 minutes.",
    "Slides must be original (no plagiarism).",
    "Q&A session mandatory.",
    "Stick strictly to your selected topic."
  ],
  type: "Team"
},
{
  id: "20",
  name: "Poster Presentation (CSE)",
  code: "TECH020",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
  prizes: "",
  rules: [
    "Maximum team size: 2 members.",
    "Poster size must be A2 or A3.",
    "Poster should be clear, neat, and well-presented.",
    "Hand-made or digital posters are allowed.",
    "Poster must be based on a relevant CSE domain.",
    "Explanation time: 4–5 minutes per team."
  ],
  type: "Team"
},
{
  id: "21",
  name: "Coding Contest (CSE)",
  code: "TECH021",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
  prizes: "",
  rules: [
    "Maximum team size: 2 members.",
    "Solve programming problems within the given time.",
    "Ranking is based on the number of problems solved.",
    "In case of ties, the least time taken will decide the winner.",
    "Competition consists of multiple rounds."
  ],
  type: "Team"
},
{
  id: "22",
  name: "PPT Presentation (CSC)",
  code: "TECH022",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800",
  prizes: "",
  rules: [
    "Team size: 2–4 members.",
    "Choose any one topic.",
    "Presentation time: 8–10 minutes.",
    "Slides must be original and plagiarism-free.",
    "Q&A session will follow the presentation."
  ],
  type: "Team"
},
{
  id: "23",
  name: "Poster Presentation (CSC)",
  code: "TECH023",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800",
  prizes: "",
  rules: [
    "Maximum team size: 2 members.",
    "Poster must be A2 or A3 size.",
    "Content should be clear and neatly presented.",
    "Explanation time: 2–3 minutes per team."
  ],
  type: "Team"
},
{
  id: "24",
  name: "CTF Competition (CSC)",
  code: "TECH024",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800",
  prizes: "",
  rules: [
    "Maximum team size: 2 members.",
    "Solve cybersecurity challenges to earn points.",
    "Highest total score wins.",
    "No attacking event infrastructure or other teams.",
    "Follow all competition and ethical guidelines."
  ],
  type: "Team"
},
{
  id: "25",
  name: "PPT Presentation (EEE)",
  code: "TECH025",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800",
  prizes: "",
  rules: [
    "Team size: 2–4 members.",
    "Choose any relevant EEE topic.",
    "Presentation time: 8–10 minutes.",
    "Slides must be original and free of plagiarism.",
    "Q&A session will follow the presentation."
  ],
  type: "Team"
},
{
  id: "26",
  name: "Poster Presentation (EEE)",
  code: "TECH026",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800",
  prizes: "",
  rules: [
    "Maximum team size: 2 members.",
    "Poster must be A2 or A3 size.",
    "Poster content should be neat, clear, and well-presented.",
    "Explanation time: 2–3 minutes per team."
  ],
  type: "Team"
},
{
  id: "27",
  name: "Project Expo (EEE)",
  code: "TECH027",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1581091012184-7c140f7f9b50?w=800",
  prizes: "",
  rules: [
    "Team size: 2–4 members.",
    "Projects must include a working model or demonstration.",
    "Explanation time: 5–7 minutes per team.",
    "Ensure the project setup is safe for display.",
    "Judging will be based on innovation, clarity, and execution."
  ],
  type: "Team"
},
{
  id: "28",
  name: "PPT Presentation (IT)",
  code: "TECH028",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800",
  prizes: "",
  rules: [
    "Team size: 2–4 members.",
    "Choose any one topic.",
    "Presentation duration: 8–10 minutes.",
    "Slides must be original and free from plagiarism.",
    "Q&A session may follow the presentation."
  ],
  type: "Team"
},
{
  id: "29",
  name: "Poster Presentation (IT)",
  code: "TECH029",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800",
  prizes: "",
  rules: [
    "Maximum team size: 2 members.",
    "Poster must be A2 or A3 size.",
    "Content must be clear, neat, and well-structured.",
    "Handmade or digital posters are allowed."
  ],
  type: "Team"
},
{
  id: "30",
  name: "Reverse Coding (IT)",
  code: "TECH030",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
  prizes: "",
  rules: [
    "Maximum team size: 2 members.",
    "Decode the given output or logic.",
    "Write the correct program based on the behavior.",
    "Strictly no plagiarism or code copying."
  ],
  type: "Team"
},

{
  id: "31",
  name: "PPT Presentation (CSM)",
  code: "TECH031",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800",
  prizes: "",
  rules: [
    "Team size: 2–4 members.",
    "Choose any one topic related to CSM.",
    "Presentation duration: 8–10 minutes.",
    "Slides must be original and well-structured.",
    "Q&A session will follow the presentation."
  ],
  type: "Team"
},
{
  id: "32",
  name: "Poster Presentation (CSM)",
  code: "TECH032",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800",
  prizes: "",
  rules: [
    "Maximum team size: 2 members.",
    "Poster must be A2 or A3 size.",
    "Content should be clear and neatly presented.",
    "Explanation time: 2–3 minutes per team."
  ],
  type: "Team"
},
{
  id: "33",
  name: "Coding Quiz (AI/ML) – CSM",
  code: "TECH033",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=800",
  prizes: "",
  rules: [
    "Maximum team size: 2 members.",
    "Quiz format will be MCQs based on AI & ML.",
    "Fastest and most accurate team wins.",
    "No external help or devices allowed."
  ],
  type: "Team"
},
{
  id: "34",
  name: "PPT Presentation (CSD)",
  code: "TECH034",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
  prizes: "",
  rules: [
    "Team size: 2–4 members.",
    "Choose any topic related to CSD.",
    "Presentation duration: 8–10 minutes.",
    "Slides must be original and clearly presented.",
    "Q&A session will follow the presentation."
  ],
  type: "Team"
},
{
  id: "35",
  name: "Poster Presentation (CSD)",
  code: "TECH035",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
  prizes: "",
  rules: [
    "Maximum team size: 2 members.",
    "Poster must be A2 or A3 size.",
    "Content should be neat and well-structured.",
    "Explanation time: 2–3 minutes."
  ],
  type: "Team"
},
{
  id: "36",
  name: "Coding Autometa (CSD)",
  code: "TECH036",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
  prizes: "",
  rules: [
    "Maximum team size: 2 members.",
    "MCQ-based coding logic quiz.",
    "Highest score in the least time wins.",
    "No external help or plagiarism allowed."
  ],
  type: "Team"
},

{
  id: "37",
  name: "PPT Presentation (ECE)",
  code: "TECH037",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1581091870627-3c097df7b1fb?w=800",
  prizes: "",
  rules: [
    "Maximum team size: 2 members.",
    "Presentation time: 8 minutes followed by Q&A.",
    "Participants must submit an abstract before the event.",
    "Bring the PPT on a pen drive for presentation.",
    "Slides must be original and well-structured."
  ],
  type: "Team"
},
{
  id: "38",
  name: "Poster Presentation (ECE)",
  code: "TECH038",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1509223197845-458d87318791?w=800",
  prizes: "",
  rules: [
    "Maximum team size: 2 members.",
    "Poster must follow IEEE format.",
    "Size allowed: A2 or A3.",
    "Explanation time: 5 minutes per team.",
    "Content should be clear, technical, and neatly presented."
  ],
  type: "Team"
},
{
  id: "39",
  name: "Project Expo (ECE)",
  code: "TECH039",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1581092808364-3a86f2a5ba52?w=800",
  prizes: "",
  rules: [
    "Maximum team size: 4 members.",
    "Project must include a working model or live demonstration.",
    "A PPT explaining the project is mandatory.",
    "Components used must be safe and well-insulated.",
    "Evaluation is based on innovation, clarity, and execution."
  ],
  type: "Team"
},
{
  id: "40",
  name: "PPT Presentation (Civil)",
  code: "TECH040",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1590490359683-826fe7f2d0f3?w=800",
  prizes: "",
  rules: [
    "Maximum team size: 2 members.",
    "Presentation time: 8 minutes followed by Q&A.",
    "Submit abstract prior to the event.",
    "Slides must be original and well-organized."
  ],
  type: "Team"
},
{
  id: "41",
  name: "Poster Presentation (Civil)",
  code: "TECH041",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800",
  prizes: "",
  rules: [
    "Maximum team size: 2 members.",
    "Poster must follow IEEE format.",
    "Size allowed: A2 or A3.",
    "Explanation time: 5 minutes per team.",
    "Content must be neat and clear."
  ],
  type: "Team"
},
{
  id: "42",
  name: "Project Expo (Civil)",
  code: "TECH042",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
  prizes: "",
  rules: [
    "Maximum team size: 4 members.",
    "Project must include a working model.",
    "PPT describing the project is mandatory.",
    "Judging based on innovation and clarity."
  ],
  type: "Team"
},
{
  id: "43",
  name: "PPT Presentation (Mech)",
  code: "TECH043",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1508898578281-774ac4893c0c?w=800",
  prizes: "",
  rules: [
    "Maximum team size: 2 members.",
    "Presentation time: 8 minutes + Q&A.",
    "Abstract submission is mandatory.",
    "Slides must be original and technical."
  ],
  type: "Team"
},
{
  id: "44",
  name: "Poster Presentation (Mech)",
  code: "TECH044",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=800",
  prizes: "",
  rules: [
    "Maximum team size: 2 members.",
    "Poster must follow IEEE guidelines.",
    "Content must be clear and neatly presented.",
    "Technical accuracy is required."
  ],
  type: "Team"
},
{
  id: "45",
  name: "Project Expo (Mech)",
  code: "TECH045",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1581092333181-2983a46d8a1b?w=800",
  prizes: "",
  rules: [
    "Maximum team size: 4 members.",
    "Project must include a working physical model.",
    "PPT describing the project is required.",
    "Safety measures must be ensured."
  ],
  type: "Team"
},
{
  id: "46",
  name: "Designathon (Mech)",
  code: "TECH046",
  category: "Technical",
  date: "",
  entryFee: "",
  poster: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
  prizes: "",
  rules: [
    "Team size: 1–3 members.",
    "On-spot design challenge will be given.",
    "Work must be original and self-created.",
    "Judges' decision will be final."
  ],
  type: "Team"
}

  ];

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;
    const matchesSearch = event.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Floating Golden Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${-10 - Math.random() * 20}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: "hsl(var(--fire-orange))",
              boxShadow: "0 0 15px hsl(var(--fire-orange) / 0.8)",
              animation: `spark-rise ${4 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Title */}
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-sans font-bold mb-4">
              <span className="text-glow-cyan">SPARK</span>{" "}
              <span className="text-primary">2026</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-exo mb-2">
              Where Passion Meets Power
            </p>
            <p className="text-sm text-muted-foreground font-exo">
              SV College, Tirupati
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for your favorite event…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-6 bg-card/50 backdrop-blur-sm border-border focus:border-primary/50 rounded-full text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Category Navbar */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                onClick={() => setSelectedCategory(category)}
                className={`font-orbitron transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary/20 text-primary border-primary/50"
                    : "text-muted-foreground hover:text-primary hover:border-primary/30"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Event Cards Section */}
      <section className="relative pb-24 px-4">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                  {/* Poster */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={event.poster}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-xs font-orbitron font-bold bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-orbitron font-bold mb-3 text-foreground">
                      {event.name}
                    </h3>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaIndianRupeeSign className="w-4 h-4" />
                        <span>{event.entryFee}</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => setSelectedEvent(event)}
                      className="w-full bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 hover:border-primary/50 font-orbitron transition-all duration-300"
                    >
                      View Details
                    </Button>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/20 blur-3xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground font-exo">
                No events found. Try a different search or category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Event Details Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-4xl bg-card/95 backdrop-blur-xl border-border p-0 overflow-hidden">
          {selectedEvent && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Right Side - Poster */}
              <div className="relative h-64 md:h-auto order-first md:order-last">
                <img
                  src={selectedEvent.poster}
                  alt={selectedEvent.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent md:bg-gradient-to-l" />
              </div>

              {/* Left Side - Info */}
              <div className="p-8 relative">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-orbitron font-bold text-foreground mb-2">
                    {selectedEvent.name}
                  </DialogTitle>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-orbitron font-bold bg-primary/20 text-primary border border-primary/30">
                      {selectedEvent.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-orbitron font-bold bg-secondary/20 text-secondary border border-secondary/30">
                      {selectedEvent.type}
                    </span>
                  </div>
                </DialogHeader>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-muted-foreground font-exo mb-1">Event Code</p>
                    <p className="text-foreground font-orbitron font-bold">{selectedEvent.code}</p>
                  </div>

                  <div>
                    <p className="text-muted-foreground font-exo mb-1">Date</p>
                    <p className="text-foreground font-exo">{selectedEvent.date}</p>
                  </div>

                  <div>
                    <p className="text-muted-foreground font-exo mb-1">Entry Fee</p>
                    <p className="text-foreground font-exo">{selectedEvent.entryFee}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="w-4 h-4 text-primary" />
                      <p className="text-muted-foreground font-exo">Prizes</p>
                    </div>
                    <p className="text-foreground font-exo">{selectedEvent.prizes}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-secondary" />
                      <p className="text-muted-foreground font-exo">Rules</p>
                    </div>
                    <ul className="space-y-1">
                      {selectedEvent.rules.map((rule, index) => (
                        <li key={index} className="text-foreground font-exo flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button
                  onClick={() => setSelectedEvent(null)}
                  className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 font-orbitron"
                >
                  Register
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventsPage;
