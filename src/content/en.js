export default {
  hero: {
    greeting: "Hi, I'm",
    name: "Tushar Garg",
    label: "/ SOFTWARE ENGINEER",
    headline: "Software Engineer",
    subline: "Building production-grade software systems, scalable backend services, and AI-powered applications deployed across manufacturing, environmental analytics, finance, and bioinformatics.",
    availability: "Currently open to Software Engineering, Backend, Full Stack, and Japan-based opportunities.",
    stats: ["4 Production Projects", "3 Live Deployments", "NAT-Test N3", "AWS & Docker"],
    roles: ["Backend Developer", "Full Stack Developer", "Cloud Engineer", "AI Applications Engineer"],
    description: "Built solutions across finance, manufacturing, environmental analytics, and bioinformatics.",
    buttons: {
      viewProjects: "View Projects",
      downloadResume: "Download Resume",
      contactMe: "Contact Me"
    },
    quickCards: [
      {
        label: "/ ABOUT ME",
        title: "About Me",
        text: "Software Engineer focused on building reliable, production-grade systems with a background in bioinformatics.",
        linkText: "Learn More →",
        linkHref: "#about"
      },
      {
        label: "/ MY WORK",
        title: "Key Projects",
        text: "FinKizuna ERP, VERITAS, ZenKensa, HIV Drug Resistance — production-grade software systems with measurable impact.",
        linkText: "Browse Projects →",
        linkHref: "#projects"
      }
    ],
    socialLinks: [
      { platform: "LinkedIn", href: "https://www.linkedin.com/in/tushargarg25" },
      { platform: "GitHub", href: "https://github.com/TusharGarg07" },
      { platform: "Email", href: "mailto:tushargarg2425@gmail.com" }
    ],
    technologies: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "AWS", "Docker"],
    cards: {
      focus: {
        title: "Focus",
        text: "Production-minded ML, analytics workflows, and pragmatic engineering."
      },
      domains: {
        title: "Domains",
        text: "Manufacturing AI, environmental data, bioinformatics, and full-stack."
      }
    },
    systemStatus: {
      title: "System Status",
      deployed: "Software Systems Deployed",
      activeProjects: "Active Projects: 4",
      focus: "Focus: Production-Grade Engineering"
    }
  },
  about: {
    heading: "About Me",
    subtitle: "Software Engineer focused on backend systems, cloud-native applications, and AI-powered products.",
    paragraphs: [
      "Software Engineer focused on backend systems, cloud-native applications, and AI-powered products.",
      "Built solutions across finance, manufacturing, environmental analytics, and bioinformatics.",
      "Experienced across the full development lifecycle — from system design and backend architecture to deployment and optimization."
    ],
    education: {
      title: "Education",
      items: [
        {
          degree: "B.Tech in Biotechnology",
          institution: "Amity University, Noida",
          duration: "2022–2026",
          score: "CGPA: 8.6"
        },
        {
          degree: "CBSE XII",
          institution: "DL DAV Model School",
          score: "89.7%"
        }
      ]
    }
  },
  projects: [
    {
      id: "finkizuna",
      title: "FinKizuna ERP",
      description: "Built and deployed a multi-tenant ERP SaaS platform featuring workflow automation, fraud detection, role-based access control, and cloud deployment.",
      impact: "94% fraud detection accuracy using explainable AI.",
      technologies: ["FastAPI", "PostgreSQL", "AWS", "Docker", "CI/CD", "React", "TypeScript"],
      githubUrl: "https://github.com/TusharGarg07",
      liveUrl: "https://fin-kizuna-erp-i5o9.vercel.app/"
    },
    {
      id: "veritas",
      title: "VERITAS Environmental Intelligence Platform",
      description: "Built and deployed VERITAS, an environmental risk intelligence platform analyzing 11,000+ environmental records for real-time indoor air quality monitoring, risk assessment, and automated reporting.",
      impact: "Analyzed 11,000+ environmental records and generated automated risk reports.",
      technologies: ["Python", "FastAPI", "XGBoost", "SHAP", "Pandas", "Docker"],
      githubUrl: "https://github.com/TusharGarg07/VERITAS",
      liveUrl: "https://veritas-ai-system.onrender.com/"
    },
    {
      id: "zenkensa",
      title: "ZenKensa Manufacturing Inspection System",
      description: "Built and deployed a computer vision solution for automated manufacturing quality inspection.",
      impact: "Reduced manual inspection dependency through AI-assisted defect detection.",
      technologies: ["TensorFlow Lite", "Python", "Computer Vision", "FastAPI"],
      githubUrl: "https://github.com/TusharGarg07/ZenKensa",
      liveUrl: "https://zenkensa-ai.onrender.com"
    },
    {
      id: "hiv-drug-resistance",
      title: "Explainable HIV Drug Resistance Prediction",
      description: "Built and deployed an explainable machine learning platform for HIV drug resistance prediction with transparent model interpretation.",
      impact: "Improved interpretability of genomic prediction models using SHAP.",
      technologies: ["Python", "Machine Learning", "Bioinformatics", "SHAP"],
      githubUrl: "https://github.com/TusharGarg07/HIV-Drug-Resistance",
      liveUrl: "https://explainable-hiv-drug-resistance-system.onrender.com"
    }
  ],
  projectButtons: {
    liveDemo: "Live Demo →",
    github: "GitHub"
  },
  experience: {
    heading: "Experience",
    subtitle: "Professional experience building software systems, backend services, and data-driven applications across manufacturing, environmental analytics, and industrial domains.",
    items: [
      {
        id: "zenkensa",
        role: "Software & Manufacturing Systems Intern",
        company: "ZenKensa – Manufacturing Inspection System",
        duration: "Dec 2025 – May 2026",
        points: [
          "Developed and supported software components for AI-assisted manufacturing inspection systems.",
          "Implemented computer vision pipelines and optimized inference workflows for manufacturing inspection tasks.",
          "Contributed to workflow automation and decision-support system design."
        ]
      },
      {
        id: "anant-raj",
        role: "Software Engineering Intern",
        company: "Anant Raj Cloud Pvt. Ltd.",
        duration: "May 2024 – June 2025",
        points: [
          "Built VERITAS, an environmental risk intelligence platform analyzing 11,000+ environmental records for real-time indoor air quality monitoring and risk assessment.",
          "Designed data processing pipelines using Pandas and NumPy for multi-parameter sensor data.",
          "Implemented risk scoring algorithms, visualization, and automated reporting workflows.",
          "Developed backend services and dashboards for environmental health decision support."
        ]
      }
    ]
  },
  whatIBuild: {
    heading: "What I Build",
    subtitle: "Production-grade software systems deployed across backend engineering, manufacturing automation, environmental analytics, finance, and bioinformatics.",
    items: [
      { id: "backend-systems", title: "Backend Systems", tech: ["FastAPI Services", "REST APIs", "Authentication", "Database Design", "Backend Architecture"] },
      { id: "full-stack-applications", title: "Full Stack Applications", tech: ["React", "TypeScript", "PostgreSQL", "Cloud Deployment", "End-to-End Development"] },
      { id: "ai-powered-products", title: "AI-Powered Products", tech: ["Explainable AI", "Computer Vision", "Predictive Analytics", "Decision Support Systems"] },
      { id: "cloud-deployment", title: "Cloud & Deployment", tech: ["Docker", "AWS", "CI/CD", "Production Hosting"] }
    ]
  },
  skills: [
    {
      id: "software-engineering",
      category: "Software Engineering",
      items: ["Python", "TypeScript", "Git", "GitHub", "System Design"]
    },
    {
      id: "backend-development",
      category: "Backend Development",
      items: ["FastAPI", "REST APIs", "PostgreSQL", "MySQL", "API Design", "Authentication"]
    },
    {
      id: "frontend-development",
      category: "Frontend Development",
      items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"]
    },
    {
      id: "cloud-devops",
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Nginx", "Containerization"]
    },
    {
      id: "data-engineering",
      category: "Data Engineering & Analytics",
      items: ["Pandas", "NumPy", "Data Pipelines", "Data Analysis", "Statistical Analysis"]
    },
    {
      id: "ai-ml",
      category: "AI & Machine Learning",
      items: ["XGBoost", "SHAP", "Computer Vision", "TensorFlow", "Scikit-Learn"]
    },
    {
      id: "bioinformatics",
      category: "Bioinformatics",
      items: ["Biopython", "BLAST", "Computational Genomics", "Genomic Data Analysis"]
    }
  ],
  certifications: [
    {
      id: "nat-test-n3",
      title: "NAT-Test N3",
      issuer: "Japanese Language Certification",
      year: "2026"
    },
    {
      id: "jlpt-n5",
      title: "JLPT N5",
      issuer: "Japanese Language Proficiency Test",
      year: "2025"
    },
    {
      id: "python-data-science",
      title: "Python for Data Science",
      issuer: "NPTEL",
      year: "2025"
    },
    {
      id: "microsoft-tech",
      title: "Microsoft Technical Certification",
      issuer: "Microsoft",
      year: "2024"
    },
    {
      id: "data-analysis-excel-udemy",
      title: "Data Analysis & Excel",
      issuer: "Udemy",
      year: "2024"
    },
    {
      id: "ai-ml-core",
      title: "AI and Machine Learning Core",
      issuer: "Certification Program",
      year: "2024"
    },
    {
      id: "full-stack-web",
      title: "Full Stack Web Development",
      issuer: "Certification Program",
      year: "2024"
    }
  ],
  languages: [
    {
      name: "English",
      level: "Professional Proficiency"
    },
    {
      name: "Hindi",
      level: "Native"
    },
    {
      name: "Japanese",
      level: "Intermediate Professional Working Proficiency (NAT-Test N3 | JLPT N2 Candidate)"
    },
    {
      name: "Russian",
      level: "Beginner (A1)"
    }
  ],
  skillsSubtitle: "Technical expertise across software engineering, backend development, cloud technologies, data analytics, and AI-powered applications.",
  contact: {
    heading: "Contact",
    message: "Feel free to reach out for collaboration opportunities.",
    closing: "Open to Software Engineering, Backend Development, Full Stack Development, Cloud Engineering, AI Applications, Freelance Projects, and International Opportunities."
  }
}
