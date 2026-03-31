export default {
  hero: {
    greeting: "Hi, I'm",
    name: "Tushar Garg",
    headline: "Building AI Systems for Manufacturing & Environmental Intelligence",
    subline: "AI & Data Analysis Intern | Full-Stack Developer | Bioinformatics Background",
    availability: "Currently open to AI, Data, and Industrial Technology opportunities.",
    stats: ["4+ Projects", "2 Internships", "JLPT N3", "5 Languages"],
    roles: ["AI Engineer", "Data Analyst", "Full-Stack Developer", "Manufacturing AI Specialist"],
    description: "Building AI-driven systems for manufacturing inspection, environmental analytics, and real-world data applications.",
    buttons: {
      viewProjects: "View Projects",
      downloadResume: "Download Resume",
      contactMe: "Contact Me"
    },
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
      deployed: "AI Systems Deployed",
      activeProjects: "Active Projects: 4",
      focus: "Focus: Industrial & Environmental AI"
    }
  },
  about: {
    heading: "About Me",
    subtitle: "Professional introduction and background in AI and Data Analysis.",
    paragraphs: [
      "I am a Biotechnology student transitioning into AI and Data Analysis, with a strong interest in building real-world intelligent systems.",
      "I have worked on AI-assisted manufacturing inspection systems and indoor environmental risk intelligence platforms.",
      "Using Python, machine learning, and full-stack development tools, I focus on designing systems that operate reliably in industrial and environmental environments.",
      "My long-term goal is to contribute to industrial and environmental AI development in Japan."
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
      id: "zenkensa",
      title: "ZenKensa – AI-assisted Manufacturing Inspection System",
      description: "Developed an AI-assisted metal surface inspection system using computer vision and lightweight machine learning models. Designed to support inspection workflows in manufacturing environments.",
      impact: "Focused on improving inspection efficiency and assisting decision-making processes.",
      technologies: ["Python", "Computer Vision", "TensorFlow Lite", "FastAPI"],
      githubUrl: "https://github.com/TusharGarg07/ZenKensa"
    },
    {
      id: "finkizuna",
      title: "FinKizuna ERP – AI-Powered ERP System",
      description: "Production-grade multi-tenant SaaS ERP with fraud detection (~94% accuracy) using Isolation Forest + SHAP. Automated Ringi workflows and real-time decision support. Deployed with CI/CD, Nginx, and Docker.",
      impact: "94% fraud detection accuracy",
      technologies: ["FastAPI", "PostgreSQL", "AWS", "Docker", "CI/CD", "Isolation Forest"],
      githubUrl: "https://github.com/TusharGarg07"
    },
    {
      id: "veritas",
      title: "VERITAS – AI Indoor Environmental Risk Intelligence",
      description: "AI-driven indoor air quality monitoring system analyzing multi-parameter sensor data. Designed data pipelines with Pandas/NumPy, implemented risk scoring, visualization dashboards, and report generation.",
      impact: "Real-time multi-parameter risk scoring",
      technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "FastAPI"],
      githubUrl: "https://github.com/TusharGarg07/VERITAS"
    },
    {
      id: "hiv-drug-resistance",
      title: "Explainable HIV Drug Resistance Prediction System",
      description: "ML system for predicting HIV drug resistance using genomic data. Integrated SHAP-based explainability for transparent healthcare decision-making. Built scalable pipelines with iterative validation.",
      impact: "SHAP explainability for healthcare AI",
      technologies: ["Python", "Machine Learning", "SHAP", "Bioinformatics", "FastAPI"],
      githubUrl: "https://github.com/TusharGarg07/HIV-Drug-Resistance"
    }
  ],
  experience: {
    heading: "Experience",
    subtitle: "Professional internships in AI systems, manufacturing inspection, and environmental analytics.",
    items: [
      {
        id: "zenkensa",
        role: "IT & Data Analysis Intern (AI / Manufacturing Systems)",
        company: "ZenKensa – Manufacturing Inspection System",
        duration: "Dec 2025 – Present",
        points: [
          "Contributed to the development of an AI-assisted metal surface inspection system.",
          "Implemented computer vision pipelines and lightweight ML models.",
          "Supported workflow automation and decision-support system design."
        ]
      },
      {
        id: "anant-raj",
        role: "IT & Data Analysis Intern",
        company: "Anant Raj Cloud Pvt. Ltd.",
        duration: "May 2024 – June 2025",
        points: [
          "Worked on VERITAS, an AI-based indoor air quality monitoring and risk intelligence system.",
          "Designed data processing pipelines using Pandas and NumPy for multi-parameter sensor data.",
          "Analysed sensor data and implemented risk scoring algorithms, visualization, and reporting workflows.",
          "Contributed to backend services and dashboards for environmental health decision support."
        ]
      }
    ]
  },
  skills: [
    {
      id: "ai-ml",
      category: "AI & Machine Learning",
      items: ["Python", "Machine Learning", "Computer Vision", "TensorFlow", "Predictive Modeling"]
    },
    {
      id: "data-analysis",
      category: "Data Analysis",
      items: ["Statistical Analysis", "NumPy", "Pandas", "Matplotlib"]
    },
    {
      id: "full-stack",
      category: "Full Stack Development",
      items: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "FastAPI", "REST APIs"]
    },
    {
      id: "cloud-devops",
      category: "Cloud & DevOps",
      items: ["AWS (EC2, RDS, S3)", "Docker", "GitHub Actions", "CI/CD", "Nginx"]
    },
    {
      id: "bioinformatics",
      category: "Bioinformatics",
      items: ["BLAST", "Biopython", "Computational Genomics"]
    },
    {
      id: "tools-platforms",
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "MySQL", "SQLite"]
    }
  ],
  certifications: [
    {
      id: "jlpt-n5",
      title: "JLPT N5 (2025)"
    },
    {
      id: "nat-test-n3",
      title: "NAT-TEST N3 (2026)"
    },
    {
      id: "microsoft-tech",
      title: "Microsoft Technical Certification (2024)"
    },
    {
      id: "data-analysis-excel-udemy",
      title: "Data Analysis and Excel – Udemy (2024)"
    },
    {
      id: "ai-ml-core",
      title: "AI and Machine Learning Core Certification"
    },
    {
      id: "python-data-science",
      title: "Python for Data Science (NPTEL)"
    },
    {
      id: "full-stack-web",
      title: "Full Stack Web Development Certification"
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
      level: "JLPT N3 (Working Proficiency)"
    },
    {
      name: "Russian",
      level: "Beginner (A1)"
    }
  ],
  contact: {
    heading: "Contact",
    message: "Feel free to reach out for collaboration opportunities.",
    closing: "AI, Data, and Industrial Technology collaboration opportunities are welcome."
  }
}
