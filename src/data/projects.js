export const projects = [
  {
    id: "chickaros",
    title: "Chickaros Restaurant Website",
    subtitle: "Premium Editorial Web App",
    description: "A premium, high-impact Next.js editorial website for the Chickaros restaurant franchise, featuring deep matte colors, brick textures, and cherry blossom pink details.",
    longDescription: "An editorial-style, visually stunning landing page and digital menu application engineered for Chickaros. The design centers around a bold dark-matte styling, custom neon light components, masonry-style grids for menu items, and responsive typography built to increase seat bookings and display high-definition culinary assets.\n\nBuilt using the App Router in Next.js, this application maximizes load speed using advanced font loading techniques and image optimization policies. It highlights a seamless reservation flow that converts desktop and mobile visitors into active restaurant guests.",
    images: [
      "/assets/projects/chickaros/1.png",
      "/assets/projects/chickaros/2.png"
    ],
    techStack: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "Semantic HTML"],
    liveLink: "https://chick-demo.netlify.app/",
    github: "https://github.com/Gautam-Sarraf/Chick",
    stats: {
      role: "Lead Frontend Developer",
      duration: "2 Weeks",
      impact: "Zero layout shift (CLS), 98+ PageSpeed Score"
    },
    challenges: "Adapting high-definition imagery and brick texture backgrounds without degrading Largest Contentful Paint (LCP) performance.",
    architecture: "Next.js App Router -> Server Components -> High-performance Image Optimization -> Client-side Reservation Form"
  },
  {
    id: "resume-analyzer",
    title: "Resume Analyzer AI",
    subtitle: "ATS Optimization Pipeline",
    description: "An AI-driven parsing engine that evaluates resume structure and content against job definitions, delivering actionable ATS fit analytics and keyword optimization.",
    longDescription: "A sophisticated analysis portal built to resolve recruit-side bottlenecks and help candidates bypass rigid Automated Tracking Systems (ATS) keyword filters. The pipeline reads multi-column, multi-page PDFs, extracts text layout arrays, and compares them semantically against custom job specifications to check for semantic gaps, skill matches, and structure formatting errors.\n\nUsing asynchronous API streams via FastAPI, the platform processes embeddings of user resumes in real-time, matching them in a vector space to calculate an overall fit percentage and return concrete suggestions.",
    images: [
      "/assets/projects/resume-analyzer/1.png",
      "/assets/projects/resume-analyzer/2.png"
    ],
    techStack: ["Python", "FastAPI", "React", "OpenAI Embeddings", "FAISS Vector DB", "NLP"],
    liveLink: "https://xhiresense.netlify.app/",
    github: "https://github.com/Gautam-Sarraf/Resume_analyzer",
    stats: {
      role: "AI & Backend Architect",
      duration: "1 Month",
      impact: "44% increase in resume selection accuracy"
    },
    challenges: "Extracting readable text structure from arbitrary, heavily formatted multi-column PDF resumes without losing local context.",
    architecture: "PDF Extractor -> Text Segmenter -> OpenAI Ada Embeddings -> FAISS Vector Search -> GPT-4 Analysis Node -> React Visualizer"
  },
  {
    id: "pdf-chatbot",
    title: "PDF Chatbot RAG",
    subtitle: "Semantic Document Q&A System",
    description: "A Retrieval-Augmented Generation chatbot enabling natural language dialogue over multi-hundred-page PDF documents with accurate source citations.",
    longDescription: "An end-to-end RAG system designed to help users instantly fetch specific answers from massive research books, corporate sheets, or reference manuals. Instead of scanning lines of text, users upload PDFs and chat directly with their documents.\n\nTo prevent the AI from hallucinating, the backend chunks text, creates vector representations, indexes them into a high-speed database, and retrieves the exact top-k sections to ground the response. The frontend displays matching highlighted paragraphs and accurate document page citations.",
    images: [
      "/assets/projects/pdf-chatbot/1.png",
      "/assets/projects/pdf-chatbot/2.png"
    ],
    techStack: ["Python", "LangChain", "ChromaDB", "FastAPI", "React", "SSE Streams"],
    liveLink: "https://github.com/gautam-sarraf",
    github: "https://github.com/gautam-sarraf/resume_chatbot",
    stats: {
      role: "Backend Engineer",
      duration: "3 Weeks",
      impact: "99.1% factual query retrieval accuracy"
    },
    challenges: "Balancing chunk size, overlap boundaries, and token usage to prevent AI context window overflow while retaining context.",
    architecture: "PDF Loader -> Semantic Splitter -> ChromaDB Storage -> Context Refiner -> GPT-4 Completion -> SSE Response Stream"
  },
  {
    id: "ot-scheduler",
    title: "OT Scheduler Platform",
    subtitle: "Shift Allocation Engine",
    description: "An intelligent shift allocation planner that coordinates rosters against company resource constraints, worker records, and schedule conflict parameters.",
    longDescription: "A high-performance business scheduling application engineered to automate roster distributions for large organizations. The scheduling portal removes the overhead of manual allocations, preventing scheduling conflicts, overtime compliance issues, and staff dissatisfaction.\n\nAt its core, a custom constraint-solving algorithm evaluates staff availability, active labor rules, shift limits, and historical rosters to assign optimal rotations, rendering the outcome in a responsive, interactive timeline grid.",
    images: [
      "/assets/projects/ot-scheduler/1.png",
      "/assets/projects/ot-scheduler/2.png"
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
    liveLink: "https://github.com/gautam-sarraf",
    github: "https://github.com/gautam-sarraf/ot_schedular",
    stats: {
      role: "Full Stack Engineer",
      duration: "2 Months",
      impact: "Zero roster conflicts across 3 company divisions"
    },
    challenges: "Writing an optimization algorithm that evaluates 15+ concurrent rostering restrictions while keeping processing latency under 2 seconds.",
    architecture: "React Gantt Grid -> REST API Middleware -> Shift Constraint Evaluator -> PostgreSQL Transaction Layer"
  },
  {
    id: "ggs-forex",
    title: "GGs Forex Board",
    subtitle: "Real-time Forex Analytics Dashboard",
    description: "A real-time foreign exchange analytics dashboard providing live exchange rate tracking, historical currency charts, and technical indicator metrics.",
    longDescription: "A high-performance foreign exchange monitoring platform designed to provide traders with real-time rate updates, historical charts, and complex technical analysis indicators. The application aggregates ticks from top-tier liquidity providers and streams them using high-speed WebSocket connections to ensure millisecond-level precision.\n\nFeaturing customizable charting panels, real-time alert notifications, and historical spread analysis, the application handles high volumes of live market data, keeping layout paint times low and user interaction responsive.",
    images: [
      "/assets/projects/ggs-forex/1.png",
      "/assets/projects/ggs-forex/2.png"
    ],
    techStack: ["React", "Node.js", "WebSockets", "Chart.js", "Express", "REST APIs"],
    liveLink: "https://github.com/gautam-sarraf",
    github: "https://github.com/gautam-sarraf",
    stats: {
      role: "Full Stack Developer",
      duration: "1 Month",
      impact: "Sub-50ms tick-to-render update latency"
    },
    challenges: "Rendering rapid live tick updates on complex multi-line charts without triggering heavy layout thrashing or UI performance drops.",
    architecture: "Liquidity Provider API -> Node.js WebSocket Bridge -> Client Store State Manager -> Canvas-based Chart Renderer"
  },
  {
    id: "kyc-automation",
    title: "CP-KYC Automation",
    subtitle: "Automated KYC Verification Pipeline",
    description: "An automated Know Your Customer (KYC) pipeline that extracts data from identity documents and runs automated verification checks.",
    longDescription: "A secure, automated identity verification platform designed to streamline KYC/AML workflows for financial institutions. The system accepts document uploads, performs layout checks, and leverages OCR engines to extract user details from national IDs, passports, and utility bills.\n\nTo ensure compliance, the extracted records are cross-checked with official databases, while a facial matching model compares the document picture against a live selfie upload, returning a comprehensive risk score card.",
    images: [
      "/assets/projects/kyc-automation/1.png",
      "/assets/projects/kyc-automation/2.png"
    ],
    techStack: ["Python", "OpenCV", "Tesseract OCR", "FastAPI", "React", "Docker"],
    liveLink: "https://github.com/gautam-sarraf",
    github: "https://github.com/gautam-sarraf",
    stats: {
      role: "AI & Automation Developer",
      duration: "2 Months",
      impact: "Reduced KYC onboarding verification time by 85%"
    },
    challenges: "Achieving high accuracy in OCR text extraction across low-resolution or skewed document images under poor lighting conditions.",
    architecture: "FastAPI Pipeline -> Pre-processing (OpenCV) -> Tesseract OCR -> Facial Recognition Engine -> Verification Report Node"
  },
  {
    id: "teamsphere",
    title: "TeamSphere Hub",
    subtitle: "Collaborative Workspace Platform",
    description: "A real-time workspace platform integrating channel messaging, interactive synchronized whiteboards, and WebRTC video calls.",
    longDescription: "A premium, unified collaboration platform built for distributed engineering teams. The application integrates real-time channel communication, multi-user drawing canvases, shared task boards, and peer-to-peer audio/video conferencing into a cohesive user workspace.\n\nBuilt on a MERN stack foundation, the platform relies heavily on socket events for drawing synchronization and presence tracking. The frontend utilizes WebRTC mesh architecture for low-overhead audio/video streaming directly between peers.",
    images: [
      "/assets/projects/teamsphere/1.png",
      "/assets/projects/teamsphere/2.png"
    ],
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "WebRTC"],
    liveLink: "https://github.com/Gautam-Sarraf/TeamSphere",
    github: "https://github.com/Gautam-Sarraf/TeamSphere",
    stats: {
      role: "Lead Systems Architect",
      duration: "3 Months",
      impact: "Seamless real-time canvas sync with <30ms lag"
    },
    challenges: "Managing WebSocket conflict resolution on shared canvas operations during concurrent edits by multiple active users.",
    architecture: "React Canvas -> Socket.io Gateway -> Node.js Coordination Engine -> WebRTC Signaling Server -> MongoDB State Store"
  }
];
