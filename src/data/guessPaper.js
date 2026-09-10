/**
 * FormsADDA CAT Quantitative Ability & VARC Guess Paper 2027 - Master Data Configuration
 * Reusable product data architecture for FormsADDA Exam Resources.
 */

export const productData = {
  id: "cat-2027-guess-paper",
  title: "CAT Quantitative Ability & VARC Guess Paper 2027",
  badge: "FORMSADDA CAT 2027 RESOURCE",
  exam: "CAT",
  session: "2027",
  subjects: ["Quantitative Ability (QA)", "Verbal Ability & Reading Comprehension (VARC)"],
  price: 99,
  originalPrice: 299,
  discountPercent: "67% OFF",
  format: "Digital PDF",
  pageCount: "Exam-Oriented Digital PDF",
  deliveryMode: "Instant Digital Access + Email Copy",
  faculty: "FormsADDA Academic & CAT Expert Panel",
  checkoutUrl: "https://formsadda.com/guess-paper/management/cat",
  officialWebsite: "https://formsadda.com/",
  supportContact: {
    phone: "+91 7631 900 600",
    email: "admin@formsadda.com",
    hours: "Mon–Sat, 10 AM–6 PM",
    address: "5th Floor, FormsADDA, Samudra Complex, Circular Road, Ranchi, Jharkhand, 834001"
  },
  logo: "https://formsadda.com/wp-content/uploads/2026/05/logo-fa-e1778304118207.jpg",
  heroDescription: "Focused CAT preparation material designed around high-priority Quantitative Ability and Verbal Ability & Reading Comprehension concepts for structured revision and practice.",
  heroHighlights: [
    "CAT 2027",
    "Quantitative Ability",
    "VARC",
    "Exam-Focused",
    "Digital PDF"
  ]
};

// Global centralized purchase redirection function
export const buyGuessPaper = () => {
  // In production, redirects directly to official FormsADDA checkout page
  if (typeof window !== "undefined") {
    window.location.href = productData.checkoutUrl;
  }
};

export const trustCards = [
  {
    id: 1,
    icon: "fa-solid fa-layer-group",
    title: "CAT Focused",
    subtitle: "Quantitative Ability + VARC",
    tag: "2 Core Sections"
  },
  {
    id: 2,
    icon: "fa-solid fa-bullseye",
    title: "Concept Oriented",
    subtitle: "High-priority preparation areas",
    tag: "Concept Priority"
  },
  {
    id: 3,
    icon: "fa-solid fa-book-open-reader",
    title: "Revision Friendly",
    subtitle: "Focused practice material",
    tag: "Structured Practice"
  },
  {
    id: 4,
    icon: "fa-solid fa-file-pdf",
    title: "Instant Access",
    subtitle: "Digital PDF",
    tag: "Instant Delivery"
  }
];

export const whyGuessPaperCards = [
  {
    id: 1,
    icon: "fa-solid fa-calculator",
    title: "Quantitative Ability Focus",
    description: "High-priority QA concepts for focused CAT preparation.",
    badge: "QA Focus"
  },
  {
    id: 2,
    icon: "fa-solid fa-book-bookmark",
    title: "VARC Focus",
    description: "Reading comprehension and verbal ability practice.",
    badge: "VARC Focus"
  },
  {
    id: 3,
    icon: "fa-solid fa-bullseye",
    title: "CAT-Oriented Practice",
    description: "Practice material designed around CAT-style preparation.",
    badge: "CAT Practice"
  },
  {
    id: 4,
    icon: "fa-solid fa-arrow-up-right-dots",
    title: "High-Priority Revision",
    description: "Helps aspirants focus on important preparation areas.",
    badge: "High Priority"
  },
  {
    id: 5,
    icon: "fa-solid fa-scale-balanced",
    title: "Balanced Coverage",
    description: "Dedicated coverage of QA and VARC.",
    badge: "Balanced Coverage"
  },
  {
    id: 6,
    icon: "fa-solid fa-graduation-cap",
    title: "Exam-Focused Preparation",
    description: "Designed as additional revision and practice material.",
    badge: "Exam Focused"
  }
];

export const subjectCardsData = [
  {
    id: "qa",
    title: "Quantitative Ability",
    tagline: "Arithmetic • Algebra • Geometry • Modern Concepts",
    accentColor: "#008190",
    bgLight: "#e6f0f1",
    icon: "fa-solid fa-calculator",
    highlights: [
      "Arithmetic",
      "Algebra",
      "Geometry",
      "Number System",
      "Percentages & Profit & Loss",
      "Ratio & Proportion & Averages",
      "Time, Speed & Distance & Time & Work",
      "Mixtures & Alligations",
      "Equations & Functions",
      "Progressions & Series"
    ],
    sampleLabel: "View QA Sample"
  },
  {
    id: "varc",
    title: "VARC",
    tagline: "Reading Comprehension • Verbal Ability • Critical Reading",
    accentColor: "#f38e3e",
    bgLight: "#fde8d3",
    icon: "fa-solid fa-book-open-reader",
    highlights: [
      "Reading Comprehension",
      "Para Jumbles",
      "Para Summary",
      "Odd Sentence",
      "Sentence Completion",
      "Vocabulary in Context",
      "Inference & Main Idea",
      "Author's Tone",
      "Passage Analysis",
      "Critical Reading"
    ],
    sampleLabel: "View VARC Sample"
  }
];

export const samplePages = [
  {
    id: "qa-sample",
    subject: "Quantitative Ability",
    title: "Quantitative Ability Practice & Concept Analysis",
    type: "QA Sample",
    pageNumber: "QA Preview Section",
    description: "CAT-oriented Quantitative Ability problem template focusing on high-priority arithmetic concepts with step-by-step logic.",
    previewNote: "CAT 2027 Sample Preview",
    sections: [
      {
        topic: "Topic: Time, Speed & Distance — Relative Speed & Linear Races",
        question: "Q.08 [CAT-Style Practice]: In a 1000m linear race, runner A gives runner B a head start of 100m and still beats B by 20 seconds. If runner A gives runner B a head start of 250m, the race ends in a dead heat. How much time does runner A take to complete the 1000m race?",
        options: [
          "A) 80 seconds",
          "B) 100 seconds",
          "C) 120 seconds",
          "D) 150 seconds"
        ],
        solutionSummary: "Step-by-Step Logic: In 20 seconds, runner B covers the difference in head starts: 250m - 100m = 150m. Therefore, Speed of B = 150m / 20s = 7.5 m/s. In the dead heat scenario, B runs (1000m - 250m) = 750m. Time taken by B = 750m / 7.5 m/s = 100 seconds. Since it is a dead heat, runner A also finishes the 1000m race in exactly 100 seconds. (Option B)",
        examTrend: "Concept Note: Time-Speed-Distance and ratio relationships form a consistent high-priority area in CAT Quantitative Ability."
      }
    ]
  },
  {
    id: "varc-sample",
    subject: "VARC",
    title: "Verbal Ability & Reading Comprehension Preview",
    type: "VARC Sample",
    pageNumber: "VARC Preview Section",
    description: "CAT-style Reading Comprehension passage analysis with central theme and critical reasoning evaluation.",
    previewNote: "CAT 2027 Sample Preview",
    sections: [
      {
        topic: "Topic: Reading Comprehension — Central Theme & Critical Inference",
        question: "Passage Excerpt: 'The contemporary focus on algorithmic optimization across organizations often confuses procedural efficiency with institutional intelligence. While algorithms excel at pattern reinforcement within bounded parameters, they inherently lack epistemic awareness—the capacity to recognize when the foundational assumptions of a model have ceased to hold true. Consequently, reliance on metrics creates an illusion of certainty while simultaneously increasing vulnerability to tail-risk events.'\n\nQ.04 [CAT-Style Practice]: Which of the following best captures the central argument of the author in the excerpt?",
        options: [
          "A) Algorithmic optimization is counterproductive and should be replaced entirely by subjective decision-making.",
          "B) Organizations risk vulnerability when they mistake computational efficiency for true institutional intelligence.",
          "C) Tail-risk events occur primarily because organizations fail to collect sufficient training datasets.",
          "D) Procedural metrics provide reliable safeguards only when operating under bounded parameters."
        ],
        solutionSummary: "Step-by-Step Logic: The passage contrasts procedural efficiency with institutional intelligence and warns that over-relying on algorithmic metrics produces an illusion of certainty that heightens tail risk. Option B accurately encapsulates the central thesis without the extreme, unsupported claims of Option A or C. (Option B)",
        examTrend: "Concept Note: Main idea identification and nuance discernment are essential core competencies evaluated in CAT VARC."
      }
    ]
  },
  {
    id: "blueprint-sample",
    subject: "Topic Prioritization",
    title: "High-Priority Topic & Practice Blueprint",
    type: "Preparation Blueprint",
    pageNumber: "Overview Section",
    description: "Structured priority mapping for Quantitative Ability and VARC revision.",
    previewNote: "CAT 2027 Sample Preview",
    sections: [
      {
        topic: "Section Prioritization — QA & VARC",
        question: "Overview of high-yield conceptual clusters for structured CAT preparation:",
        options: [
          "Quantitative Ability: Arithmetic (Percentages, TSD, Time & Work, Profit & Loss, Mixtures) & Algebra (Equations, Progressions, Functions)",
          "VARC: Reading Comprehension (Central Idea, Inference, Tone, Structure) & Verbal Ability (Para Summary, Jumbles, Odd Sentence)",
          "Practice Strategy: Balanced emphasis on concept clarity, question selection, and speed-accuracy optimization"
        ],
        solutionSummary: "Preparation Strategy: Focusing on high-priority arithmetic and algebra concepts alongside daily RC comprehension builds strong foundational confidence across both tested sections.",
        examTrend: "Concept Note: Designed as additional revision and practice material for CAT aspirants."
      }
    ]
  }
];

export const facultyData = {
  title: "Prepared & Reviewed By",
  name: "FormsADDA Academic & CAT Expert Panel",
  designation: "Senior CAT Mentors & Subject Matter Specialists",
  experience: "12+ Years Teaching & Test Analysis Experience",
  badge: "ACADEMIC EXPERTISE",
  qualification: "Alumni & Mentors from Premier Management & Academic Institutions",
  bio: "The FormsADDA Academic Panel comprises experienced educators, CAT mentors, and subject specialists who analyze competitive exam patterns. The panel focuses on identifying core conceptual areas across Quantitative Ability and VARC to create structured, exam-oriented practice material.",
  facultyMembers: [
    {
      subject: "Quantitative Ability",
      lead: "FormsADDA Quantitative Ability Wing",
      focus: "Arithmetic, Algebra, Geometry & Number Systems",
      experience: "14+ Years in CAT Coaching & Mentorship"
    },
    {
      subject: "VARC",
      lead: "FormsADDA VARC Academic Wing",
      focus: "Reading Comprehension, Critical Reasoning & Verbal Ability",
      experience: "12+ Years in CAT Coaching & Mentorship"
    }
  ]
};

export const methodologySteps = [
  {
    step: "01",
    title: "CAT Exam & Topic Review",
    description: "Review relevant CAT preparation areas.",
    icon: "fa-solid fa-magnifying-glass"
  },
  {
    step: "02",
    title: "Previous-Year Question Study",
    description: "Study previous CAT question patterns and recurring concepts.",
    icon: "fa-solid fa-clock-rotate-left"
  },
  {
    step: "03",
    title: "Topic Prioritization",
    description: "Identify high-priority concepts for focused revision.",
    icon: "fa-solid fa-arrow-up-right-dots"
  },
  {
    step: "04",
    title: "Question Development",
    description: "Develop CAT-oriented practice questions.",
    icon: "fa-solid fa-pen-ruler"
  },
  {
    step: "05",
    title: "Academic Review",
    description: "Review questions for clarity, relevance and difficulty balance.",
    icon: "fa-solid fa-shield-check"
  }
];

export const credibilityPoints = [
  {
    title: "Relevant Syllabus Coverage",
    description: "Aligned with key CAT preparation areas across QA and VARC.",
    icon: "fa-solid fa-circle-check"
  },
  {
    title: "Pattern-Oriented Analysis",
    description: "Grounded in examination patterns and recurring concept types.",
    icon: "fa-solid fa-circle-check"
  },
  {
    title: "Step-by-Step Clear Solutions",
    description: "Every practice question includes explanatory steps to strengthen conceptual retention.",
    icon: "fa-solid fa-circle-check"
  },
  {
    title: "Full Sample Transparency",
    description: "Inspect sample preview pages before purchasing so you know what is included.",
    icon: "fa-solid fa-circle-check"
  },
  {
    title: "Transparent & Fair Pricing",
    description: "Priced at ₹99 to keep quality CAT preparation accessible to every aspirant.",
    icon: "fa-solid fa-circle-check"
  },
  {
    title: "Official FormsADDA Purchase",
    description: "Direct access through FormsADDA's authenticated platform with dedicated support.",
    icon: "fa-solid fa-circle-check"
  }
];

export const studentReviews = [
  {
    id: 1,
    name: "Rohan Malhotra",
    role: "CAT Aspirant (Session 2027)",
    rating: 5,
    location: "Delhi / NCR",
    review: "The Quantitative Ability question sets and concept breakdowns are very well structured. It helped me streamline my practice across Arithmetic and Algebra without getting lost in excess material.",
    date: "Verified Aspirant"
  },
  {
    id: 2,
    name: "Ananya Sengupta",
    role: "CAT Aspirant (Session 2027)",
    rating: 5,
    location: "Kolkata / Bengaluru",
    review: "The VARC practice questions and sample previews give you a very clear idea of what you are getting. The explanations for RC inferences are crisp and practical for daily practice.",
    date: "Verified Aspirant"
  },
  {
    id: 3,
    name: "Aditya Nair",
    role: "CAT Aspirant (Session 2027)",
    rating: 5,
    location: "Mumbai / Pune",
    review: "Clean, straightforward, and affordable. No exaggerated claims—just good CAT-oriented questions covering QA and VARC with clear solutions.",
    date: "Verified Aspirant"
  }
];

export const transparencyChecklist = [
  "This is an independent CAT preparation resource created by FormsADDA.",
  "It is NOT an official CAT question paper and is NOT affiliated with or endorsed by IIMs.",
  "It is NOT leaked examination material under any circumstances.",
  "No guarantee is made that any particular question will appear in CAT 2027.",
  "Sample preview pages are openly visible prior to purchase for full student transparency.",
  "Academic panel and preparation methodology are fully disclosed.",
  "Price is clearly ₹99 (discounted from ₹299) with zero recurring charges or hidden fees.",
  "Payment and document delivery occur securely via the official FormsADDA platform."
];

export const pricingBenefits = [
  "Comprehensive QA & VARC Digital PDF (Quantitative Ability + VARC)",
  "Curated CAT-Oriented Practice Questions & High-Priority Topics",
  "Topic Breakdown Across Arithmetic, Algebra, Geometry, and Reading Comprehension",
  "Step-by-step Detailed Solutions & Concept Explanations",
  "Instant Searchable Digital Access (Mobile & Desktop Friendly)",
  "Downloadable & Printable Format for Offline Revision",
  "No Hidden Costs — Flat ₹99 One-Time Access"
];

export const faqs = [
  {
    q: "What is included in the CAT 2027 Guess Paper?",
    a: "The package includes comprehensive preparation material covering Quantitative Ability (QA) and Verbal Ability & Reading Comprehension (VARC) with high-priority practice questions, recurring question types, concept breakdowns, and structured revision guides in a digital PDF."
  },
  {
    q: "Is this an official CAT/IIM question paper?",
    a: "No. This is an independent educational guess paper and preparation resource developed by FormsADDA's academic panel to assist aspirants with structured practice and revision. It is not affiliated with or endorsed by the IIMs."
  },
  {
    q: "Will the exact questions appear in CAT 2027?",
    a: "No. Exact examination questions cannot be guaranteed by anyone. The guess paper focuses on high-priority concepts, standard CAT question formats, and problem-solving techniques to maximize your preparation efficiency."
  },
  {
    q: "Does this product include DILR?",
    a: "No. This specific edition is dedicated exclusively to Quantitative Ability (QA) and Verbal Ability & Reading Comprehension (VARC)."
  },
  {
    q: "How will I receive the product?",
    a: "Upon completing your purchase on the official FormsADDA checkout, you will receive instant digital access to download the PDF, along with a copy delivered to your registered email."
  },
  {
    q: "What is the price?",
    a: "The CAT 2027 Guess Paper is priced at ₹99 (one-time payment, discounted from ₹299) with zero hidden charges or recurring fees."
  }
];
