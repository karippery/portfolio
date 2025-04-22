// This file contains the translations for the website in English and German.

// src/translations.ts
export type TranslationKeys = {
    // About me
    name: string;
    title: string;
    downloadCv: string;
    navLinks: Array<{ id: string; text: string }>;
    experience: {
      title: string;
      currentTitle: string;
      currentPeriod: string;
      currentSubtitle: string;
      currentDescription: string[];
      previousTitle: string;
      previousPeriod: string;
      previousSubtitle: string;
      previousDescription: string[];
    };
    education: {
      title: string;
      masterTitle: string;
      masterPeriod: string;
      masterSubtitle: string;
      masterDescription: string;
      bachelorTitle: string;
      bachelorPeriod: string;
      bachelorSubtitle: string;
      bachelorDescription: string;
    };
    dream: {
      title: string;
      items: string[];
    };
    future: {
      title: string;
      items: string[];
    };

    // Navigation
    home: string;
    about: string;
    projectMenu: string;
    contact: string;
    description: string;
    shortProfile: string;
    
    // Hero Section
    welcome: string;
    role: string;
    location: string;
    hobbies: {
        gaming: string;
        photography: string;
        travel: string;
    };
    
    // About Section
    aboutTitle: string;
    aboutContent: string;
    techFocusTitle: string;
    backend: string;
    frontend: string;
    devops: string;
    databases: string;
    otherTechnologies: string;
    testing: string;

    // Skills Section
    skillsTitle: string;
    
    // Projects Section
    project: {
      title: string;
      description: string;
      technologies: string;
      githubLink: string;
    }[];
    projectsTitle: string;

    
    // Contact Section
    contactTitle: string;
    contactSubtitle: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formSubmit: string;
    
    // Footer
    copyright: string;
    rights: string;

    // policy and terms
    privacyShortTitle: string;
    privacyLink: string;
    privacyButton: string;
    privacyButton2: string;
    privacyTitle: string;
    cookiePolicy: string;
    cookieText1: string;
    cookieText2: string;
    typesOfCookies: string;
    essentialCookies: string;
    analyticsCookies: string;
    manageCookies: string;
    cookieControl: string;

  };
  
  export const translations: Record<'en' | 'de', TranslationKeys> = {
    en: {
      // About me

      name: "John Raphy Karippery",
      title: "Software Engineer /Full-Stack Developer",
      downloadCv: "Download CV",
      navLinks: [
        { id: "experience", text: "Professional Experience" },
        { id: "education", text: "Education" },
        { id: "dream", text: "My Vision" },
        { id: "future", text: "Future Plans" }
      ],
      experience: {
        title: "Professional Experience",
        currentTitle: "Senior Software Engineer",
        currentPeriod: "2022 - Present",
        currentSubtitle: "EDAG Engineering GmbH, Germany",
        currentDescription: [
          "Lead backend developer for SAFIR (Django/FastAPI + React)",
          "Implemented CI/CD pipelines and Docker containerization",
          "Developed Python automation tools to optimize workflows"
        ],
        previousTitle: "Software Developer",
        previousPeriod: "2019 - 2022",
        previousSubtitle: "Siemens Mobility, Germany",
        previousDescription: [
          "Developed live dashboard for railway systems",
          "Migrated database from SQLite to PostgreSQL",
          "Configured high-availability server clusters"
        ]
      },
      education: {
        title: "Education",
        masterTitle: "Master of Informatics",
        masterPeriod: "2017 - 2022",
        masterSubtitle: "Technische Universität Clausthal, Germany",
        masterDescription: "Thesis: Machine learning program using NSGA-II algorithm for vehicle platooning optimization",
        bachelorTitle: "Bachelor of Computer Applications",
        bachelorPeriod: "2012 - 2015",
        bachelorSubtitle: "Christ College, India",
        bachelorDescription: "Thesis: Hospital management system with patient records and appointment scheduling"
      },
      dream: {
        title: "My Vision & Entrepreneurial Dream",
        items: [
          "Leverage AI and automation to solve complex industry problems",
          "Provide intuitive developer tools to enhance productivity",
          "Implement sustainable tech solutions with positive social impact"
        ]
      },
      future: {
        title: "Future Plans & Homecoming",
        items: [
          "Establish a technology hub to nurture local talent",
          "Transfer knowledge and expertise gained internationally",
          "Contribute to the growing tech ecosystem back home",
        ]
      },
      // Navigation
      home: "Home",
      about: "Who I Am",
      projectMenu: "My Work",
      contact: "Say Hello",
      description: "I’m a software developer with a passion for building web applications",
      shortProfile: "For the past 6 years, I've been crafting backend architectures and web applications that solve real problems. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects. I thrive in collaborative environments and love sharing knowledge with others. My goal is to create impactful software that enhances user experiences and drives innovation.", 
      

       
      // Hero Section
      welcome: "Hi, I'm John Raphy",
      role: "Software Engineer /Full-Stack Developer",
      location: "Based in Braunschweig, Germany",
      hobbies: {gaming: "Gaming", photography: "Photography", travel: "Traveling"},
      
      // About Section
      aboutTitle: "About Me",
      aboutContent: "I specialize in creating robust backend systems and modern web applications with clean, maintainable code. My approach combines technical excellence with practical problem-solving.",
      techFocusTitle: "Technical Focus",
      backend: "Backend Architecture",
      frontend: "Frontend Development",
      devops: "DevOps & CI/CD Pipelines",
      databases: "Database Systems",
      otherTechnologies: "Other Technologies",
      testing: "Testing Frameworks",

      // Skills Section
      skillsTitle: "Skills and Technologies",

      
      // Projects Section
      projectsTitle: "My Projects",
      project: [
        {
          title: "Smart-Skills",
          description: "Smart-Skill is a web application designed to streamline the process of employee skill management within a company. With a large number of employees, it can be challenging for a company to identify the perfect candidate for a new project.",
          technologies: "Django, Celery, Docker, PostgreSQL, Redis",
          githubLink: "https://github.com/karippery/smartskill"
        },
        {
          title: "Facility Feed Service",
          description: "The Facility Feed Service is a Django-based application designed to generate and manage JSON feed files from facility data stored in a PostgreSQL database. It processes data in chunks for efficiency, compresses feeds with gzip, and uploads them to AWS S3 using asynchronous tasks.",
          technologies: "Python, asyncio, asyncpg, Django, PostgreSQL, AWS S3, Redis, CI/CD",
          githubLink: "https://github.com/karippery/facility-feed-service"
        },
        {
          title: "Basic Genetic Algorithm",
          description: "Implementation of a simple genetic algorithm operator code. Can be modified based on specific population requirements.",
          technologies: "Python, numpy, matplotlib",
          githubLink: "https://github.com/karippery/Genetic-Algorithm"
        }
      ],
      
      // Contact Section
      contactTitle: "Get In Touch",
      contactSubtitle: "Have a project in mind? Let's talk!",
      formName: "Your Name",
      formEmail: "Your Email",
      formSubject: "Subject",
      formMessage: "Your Message",
      formSubmit: "Send Message",
      
      // Footer
      copyright: "© {year} John Raphy Karippery",
      rights: "All rights reserved",

      // policy and terms
      privacyShortTitle: "We sprinkle cookies to make your browsing as sweet as pie! By continuing, you're saying 'yes' to our digital treats.",
      privacyLink: "Get the full scoop here.",
      privacyButton: "Mmm, Accept Cookies!",
      privacyButton2: "No Cookies for Me, Thanks!",
      privacyTitle: "Privacy Yum-yum Policy",
      cookiePolicy: "Our Cookie Magic",
      cookieText1: "Cookies make everything better, including your experience on our site.",
      cookieText2: "We use session cookies that vanish like magic when you close your browser, and persistent cookies that stick around to help us improve.",
      typesOfCookies: "The Cookie Menu",
      essentialCookies: "Essential Cookies: Like flour in baking—they're a must!",
      analyticsCookies: "Analytics Cookies: These help us whip up a better experience for you.",
      manageCookies: "Take the Cookie Wheel!",
      cookieControl: "Want to be the cookie boss? Adjust your preferences in your browser settings.",
    
},
    de: {
      // About me
      name: "John Raphy Karippery",
      title: "Software Engineer /Full-Stack Entwickler",
      downloadCv: "Lebenslauf herunterladen",
      navLinks: [
        { id: "experience", text: "Berufserfahrung" },
        { id: "education", text: "Ausbildung" },
        { id: "dream", text: "Meine Vision" },
        { id: "future", text: "Zukunftspläne" }
      ],
      experience: {
        title: "Berufserfahrung",
        currentTitle: "Senior Software Engineer",
        currentPeriod: "2022 - Heute",
        currentSubtitle: "EDAG Engineering GmbH, Deutschland",
        currentDescription: [
          "Leitender Backend-Entwickler für SAFIR (Django/FastAPI + React)",
          "Implementierung von CI/CD-Pipelines und Docker-Containerisierung",
          "Entwicklung von Python-Automatisierungstools zur Optimierung von Workflows"
        ],
        previousTitle: "Softwareentwickler",
        previousPeriod: "2019 - 2022",
        previousSubtitle: "Siemens Mobility, Deutschland",
        previousDescription: [
          "Entwicklung eines Live-Dashboards für Bahnsysteme",
          "Migration der Datenbank von SQLite zu PostgreSQL",
          "Konfiguration von Hochverfügbarkeitsserver-Clustern"
        ]
      },
      education: {
        title: "Ausbildung",
        masterTitle: "Master of Informatik",
        masterPeriod: "2017 - 2022",
        masterSubtitle: "Technische Universität Clausthal, Deutschland",
        masterDescription: "Thesis: Machine Learning-Programm mit NSGA-II-Algorithmus zur Optimierung von Fahrzeugplatooning",
        bachelorTitle: "Bachelor of Computer Applications",
        bachelorPeriod: "2012 - 2015",
        bachelorSubtitle: "Christ College, Indien",
        bachelorDescription: "Thesis: Krankenhausverwaltungssystem mit Patientenakten und Terminplanung"
      },
      dream: {
        title: "Meine Vision & Unternehmerischer Traum",
        items: [
          "KI und Automatisierung nutzen, um komplexe Branchenprobleme zu lösen",
          "Intuitive Entwickler-Tools bereitstellen, um die Produktivität zu steigern",
          "Nachhaltige technische Lösungen mit positivem sozialen Einfluss implementieren"
        ]
      },
      future: {
        title: "Zukunftspläne & Heimkehr",
        items: [
          "Ein Technologiezentrum gründen, um lokale Talente zu fördern",
          "Wissen und Expertise international transferieren",
          "Zur wachsenden Tech-Ökosystem in der Heimat beitragen",
        ],
      },

      // Navigation
      home: "Startseite",
      about: "Über Mich",
      projectMenu: "Projekte",
      contact: "Kontakt",
      description: "Ich bin ein Software Entwickler mit einer Leidenschaft für den Bau von Webanwendungen",
      shortProfile: "für die letzten 6 Jahre habe ich Backend-Architekturen und Webanwendungen entwickelt, die echte Probleme lösen. Wenn ich nicht programmiere, finden Sie mich beim Erkunden neuer Technologien oder beim Mitwirken an Open-Source-Projekten. Ich gedeihe in kollaborativen Umgebungen und liebe es, Wissen mit anderen zu teilen. Mein Ziel ist es, Software zu schaffen, die das Benutzererlebnis verbessert und Innovationen vorantreibt.",
      
      // Hero Section
      welcome: "Hallo, ich bin John Raphy",
      role: "SOftware Entwickler",
      location: "Wohnhaft in Braunschweig, Deutschland",
      hobbies: {gaming: "Gaming", photography: "Fotografie", travel: "Reisen"},
      
      // About Section
      aboutTitle: "Über Mich",
      aboutContent: "Ich spezialisiere mich auf die Entwicklung robuster Backend-Systeme und moderner Webanwendungen mit sauberem, wartbarem Code. Mein Ansatz verbindet technische Exzellenz mit praktischer Problemlösung.",
      techFocusTitle: "Technische Schwerpunkte",
      backend: "Backend-Architektur",
      frontend: "Frontend-Entwicklung",
      devops: "DevOps & CI/CD Pipelines",
      databases: "Datenbanksysteme",
      otherTechnologies: "Andere Technologien",
      testing: "Testframeworks",

      // Skills Section
      skillsTitle: "Fähigkeiten und Technologien",

      // Projects Section
      projectsTitle: "Meine Projekte",
      project: [
        { 
          title: "Smart-Skills",
          description: "Smart-Skill ist eine Webanwendung, die den Prozess der Verwaltung von Mitarbeiterfähigkeiten innerhalb eines Unternehmens optimiert. Bei einer großen Anzahl von Mitarbeitern kann es eine Herausforderung sein, den perfekten Kandidaten für ein neues Projekt zu finden.",
          technologies: "Django, Celery, Docker, PostgreSQL, Redis",
          githubLink: "https://github.com/karippery/smartskill"
        },
        {
          title: "Facility Feed Service",
          description: "Der Facility Feed Service ist eine Django-basierte Anwendung, die JSON-Feed-Dateien aus in einer PostgreSQL-Datenbank gespeicherten Facility-Daten generiert und verwaltet. Er verarbeitet Daten in Blöcken zur Effizienz, komprimiert Feeds mit gzip und lädt sie mit asynchronen Aufgaben auf AWS S3 hoch.",
          technologies: "Python, asyncio, asyncpg, Django, PostgreSQL, AWS S3, Redis, CI/CD",
          githubLink: "https://github.com/karippery/facility-feed-service"
        },
        {
          title: "Basic Genetic Algorithm",
          description: "Implementierung eines einfachen genetischen Algorithmus-Operatorcodes. Kann basierend auf spezifischen Populationsanforderungen modifiziert werden.",
          technologies: "Python, numpy, matplotlib",
          githubLink: "https://github.com/karippery/Genetic-Algorithm"
        }
      ],
      
      // Contact Section
      contactTitle: "Kontakt",
      contactSubtitle: "Haben Sie ein Projekt? Lassen Sie uns reden!",
      formName: "Ihr Name",
      formEmail: "Ihre E-Mail",
      formSubject: "Betreff",
      formMessage: "Ihre Nachricht",
      formSubmit: "Nachricht senden",
      
      // Footer
      copyright: "© {year} John Raphy Karippery",
      rights: "Alle Rechte vorbehalten",
      
      // policy and terms
      privacyShortTitle: "Wir verwenden Cookies, um Ihr Besuchserlebnis zu versüßen! Indem Sie weiterhin surfen, stimmen Sie unseren digitalen Leckereien zu.",
      privacyLink: "Mehr erfahren",
      privacyButton: "Mmm, Cookies akzeptieren!",
      privacyButton2: "Nein, danke!",
      privacyTitle: "Datenschutzrichtlinien",
      cookiePolicy: "Cookie-Richtlinien",
      cookieText1: "Unsere Website verwendet Cookies, um die Benutzererfahrung zu verbessern.",
      cookieText2: "Wir verwenden Sitzungscookies (die beim Schließen des Browsers ablaufen) und dauerhafte Cookies (die für eine bestimmte Zeit auf Ihrem Gerät bleiben).",
      typesOfCookies: "Verwendete Cookie-Typen",
      essentialCookies: "Unverzichtbare Cookies: Notwendig für die Funktionalität der Website.",
      analyticsCookies: "Analyse-Cookies: Helfen uns zu verstehen, wie Besucher mit unserer Seite interagieren.",
      manageCookies: "Cookies verwalten",
      cookieControl: "Sie können Cookies über die Einstellungen Ihres Browsers steuern und/oder löschen.",
      
    }
  };
  
  // Helper function for dynamic content
  export const translateWithValues = (text: string, values: Record<string, string>) => {
    return Object.entries(values).reduce(
      (result, [key, value]) => result.replace(`{${key}}`, value),
      text
    );
  };