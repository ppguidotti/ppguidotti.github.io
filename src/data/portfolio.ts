export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  summary?: string;
  technologies: string[];
  description: string[];
}

export interface Education {
  gpa?: any;
  degree: string;
  institution: string;
  period: string;
  focus?: string;
  grade?: string;
  thesis?: string;
  projects?: { name: string; description: string }[];
}

export interface Project {
  title: string;
  description: string;
  technologies?: string[];
  github?: string;
}

export interface Interests {
  description: any;
  category: string;
  items: string[];
}

export const portfolioData = {
  name: "Pierpaolo Guidotti",
  title: "M.Sc. Student in Computer Engineering",
  contact: {
    email: "pierpaologuidotti8@gmail.com",
    phone: "(+39) 375 8869099",
    github: "github.com/ppguidotti",
    linkedin: "linkedin.com/in/ppguidotti",
  },
  summary: "Software Engineer & Researcher focused on scalable IaaS, ML pipelines, and distributed systems. Currently pursuing a Master's at UniBO.",
  experiences: [
    {
      role: "Applied Research Fellow",
      company: "Alma Mater Studiorum | University of Bologna",
      location: "Bologna, Italy",
      period: "Apr 2025 – Dec 2025",
      
      summary: "Conducted applied research in Cloud-HPC Infrastructure & MLOps for Digital Cultural Heritage, designing a Kubernetes-based Cloud-HPC system and building a Kubeflow pipeline orchestrator.",
      technologies: ["Kubernetes", "Vagrant", "Ansible", "Kubeflow (Pipelines, Katib)", "Elyra", "Kubespray", "K3s/K3d", "MLOps", "Infrastructure-as-Code (IaC)"],
      description: [
        "Infrastructure Design & IaC: Designed and implemented a scalable, Kubernetes-based Cloud-HPC infrastructure to support data-driven services and pipelines. Automated the entire provisioning workflow using an Infrastructure-as-Code approach with Vagrant and Ansible , creating reproducible, portable environments entirely free of manual configurations.",
        "Kubernetes Orchestration: Deployed and managed Kubernetes clusters utilizing Kubespray for customized remote nodes and virtual machines , as well as K3s and K3d for lightweight, fast-booting local development setups.",
        "MLOps Engineering & Elyra: Integrated and configured Kubeflow as the primary platform for managing the Machine Learning lifecycle. Leveraged Elyra to enable the visual design of AI pipelines, making Machine Learning development accessible even to non-ML developers. Developed automated workflows using Kubeflow Pipelines , performed hyperparameter optimization with Katib , and tracked experiments and artifacts via Metadata Store and integrated Jupyter Notebook Server.",
        "Microservices Architecture: Designed operational, microservices-based workflows oriented toward the collection, preservation, and processing of heterogeneous digital cultural heritage data."
      ]
    },
    {
      role: "Software and Web Developer",
      company: "Sitech SRL",
      location: "Bologna, Italy",
      period: "Dec 2023 – Feb 2025",
      technologies: ["Java", "MySQL", "Git", "JavaScript", "REST", "Jira","Backend Development"],
      description: [
        "Designed, developed, and maintained robust web applications for the banking sector, taking full ownership of the backend architecture and RESTful services. Led the end-to-end lifecycle of API development within a highly regulated environment, from the initial architectural design to writing, testing, and documenting secure, efficient endpoints. Managed the broader software development lifecycle, optimizing existing systems, troubleshooting technical issues, and deploying regular updates to ensure high performance, responsiveness, and seamless integration between frontend and backend environments tailored to financial services."
      ]
    }
  ] as Experience[],
  education: [
    {
      degree: "Master's Degree in Computer Engineering",
      institution: "Alma Mater Studiorum | University of Bologna",
      period: "2025 – Expected 2027",
      focus: "Strong emphasis on distributed systems, agent-based modeling, and AI applications",
      gpa: "29/30",
      projects: [
        { name: "AI-Agentic Profiling", description: "Developed an advanced multi-agent AI system that simulates complex social dynamics to automate behavioral profiling, generating deep and actionable user insights." },
        { name: "Real-Time Face Blurring with CUDA", description: "Built a high-performance, GPU-powered face blurring tool to guarantee real-time identity protection and absolute privacy in sensitive video contexts." },
        { name: "Coming soon..." } 
      ]
    },
    {
      degree: "Bachelor's Degree in Computer Engineering",
      institution: "Alma Mater Studiorum | University of Bologna",
      period: "2020 – 2023",
      grade: "100/110",
      thesis: "Implementation and optimization of ML models with TensorFlow.js directly in the browser",
    }
  ] as Education[],
  interests: [
    {
      category: "Real Sport Enthusiast",
      description: "You can name one random sport and I will tell you something about it.",
      items: []},
    {
      category: "Effort for Community",
      items: ["Lead Volunteer at Croce Azzurra", "Head Waiter for family-run restaurant", "Tutor for math and physics classes"]
    },
    {
      category: "Tech Passions",
      items: ["AI Agents", "Cloud Computing", "MLOps", "Distributed Systems", "Open Source"]
    }
  ] as Interests[],
  projects:[
    {
      title: "AI-Agentic Profiling System",
      description: "Designed and implemented an advanced multi-agent AI system that simulates complex social dynamics to automate behavioral profiling, generating deep and actionable user insights.",
      technologies: ["Python", "Multi-Agent Systems", "Behavioral Profiling", "AI Simulation", "Crew AI", "Discord Webhooks"],
      github:"https://github.com/ppguidotti/CrewAI-Agentic-Social-Profiling"
    },
    {
      title: "Real-Time Face Blurring Tool",
      description: "Built a high-performance, GPU-powered face blurring tool to guarantee real-time identity protection and absolute privacy in sensitive video contexts.",
      technologies: ["CUDA", "Computer Vision", "Real-Time Processing", "Privacy Protection"],
      github:"https://github.com/ppguidotti/realtime-cuda-face-blur"
    },
    {
      title: "Kubernetes-Based Cloud-HPC Infrastructure",
      description: "Designed and implemented a scalable, Kubernetes-based Cloud-HPC infrastructure to support data-driven services and pipelines. Automated the entire provisioning workflow using an Infrastructure-as-Code approach with Vagrant and Ansible, creating reproducible, portable environments entirely free of manual configurations.",
      technologies: ["Kubernetes", "Vagrant", "Ansible", "Kubespray", "K3s/K3d", "Infrastructure-as-Code (IaC)"]
    },
    {
      title: "Kubeflow and Elyra Pipeline Orchestrator",
      description: "Integrated and configured Kubeflow as the primary platform for managing the Machine Learning lifecycle. Leveraged Elyra to enable the visual design of AI pipelines, making Machine Learning development accessible even to non-ML developers.",
      technologies: ["Kubernetes", "Kubeflow (Pipelines, Katib)", "Elyra", "MLOps",]
    },
    {
      title: "CRM and ERP System for Small Businesses",
      description: "Developed a comprehensive CRM and ERP system tailored for small businesses, integrating customer management, inventory tracking, and sales analytics into a single, user-friendly platform.",
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Vercel", "Supabase"]    
    },
    {
      title: "Min max game with alpha-beta pruning",
      description: "Implemented a Min-Max game with alpha-beta pruning in Python, optimizing the search algorithm to efficiently evaluate game states and make strategic decisions of a table game (Tablut) in a competitive environment.",
      technologies: ["Python", "Min-Max Algorithm", "Alpha-Beta Pruning", "Game Theory", "Virtual Environments"],
      github:"https://github.com/ppguidotti/min-max-tablut"
    },
    {
      title: "Bead Terminal User Interface",
      description: "Designed and developed a user-friendly terminal interface for Bead, a tool that aim to provide a persistent, structured memory for coding agents.",
      technologies: ["Python", "Terminal UI", "Agent Memory", "Beads"],
      github:"https://github.com/ppguidotti/bead-tui"
    },
    {
      title: "TensorFlow.js In-Browser ML Models",
      description: "Developed in-browser machine learning models using TensorFlow.js, enabling the execution of ML algorithms directly in the browser without server-side processing.",
      technologies: ["JavaScript", "TensorFlow.js", "Machine Learning", "Web Development"]
    },
    {
      title: "Others coming soon...",
      description: "Stay tuned for more projects showcasing my work in software engineering, AI, and distributed systems!",
      technologies: []
    }
    
  ] as Project[]
};

