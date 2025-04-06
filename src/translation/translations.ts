// src/translations.ts
export type TranslationKeys = {
    // Navigation
    home: string;
    about: string;
    projects: string;
    contact: string;
    description: string;
    
    // Hero Section
    welcome: string;
    role: string;
    experience: string;
    location: string;
    hobbies: string;
    
    // About Section
    aboutTitle: string;
    aboutContent: string;
    techFocusTitle: string;
    backend: string;
    frontend: string;
    devops: string;
    databases: string;
    testing: string;
    
    // Projects Section
    projectsTitle: string;
    viewCode: string;
    viewDemo: string;
    technologies: string;
    
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
  };
  
  export const translations: Record<'en' | 'de', TranslationKeys> = {
    en: {
      // Navigation
      home: "Home",
      about: "Who I Am",
      projects: "My Work",
      contact: "Say Hello",
      description: "I’m a full-stack developer with a passion for building web applications",
      
      // Hero Section
      welcome: "Hi, I'm John Raphy",
      role: "Full-Stack Developer",
      experience: "6+ years building digital solutions",
      location: "Based in Braunschweig, Germany",
      hobbies: "Photography | Gaming | Travel",
      
      // About Section
      aboutTitle: "About Me",
      aboutContent: "I specialize in creating robust backend systems and modern web applications with clean, maintainable code. My approach combines technical excellence with practical problem-solving.",
      techFocusTitle: "Technical Focus",
      backend: "Backend Architecture",
      frontend: "Frontend Development",
      devops: "DevOps & CI/CD Pipelines",
      databases: "Database Systems",
      testing: "Testing Frameworks",
      
      // Projects Section
      projectsTitle: "My Projects",
      viewCode: "View Code",
      viewDemo: "View Demo",
      technologies: "Technologies Used",
      
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
      rights: "All rights reserved"
    },
    de: {
      // Navigation
      home: "Startseite",
      about: "Über Mich",
      projects: "Projekte",
      contact: "Kontakt",
      description: "Ich bin ein Full-Stack-Entwickler mit einer Leidenschaft für den Bau von Webanwendungen",

      // Hero Section
      welcome: "Hallo, ich bin John Raphy",
      role: "Full-Stack Entwickler",
      experience: "6+ Jahre Erfahrung in der Softwareentwicklung",
      location: "Wohnhaft in Braunschweig, Deutschland",
      hobbies: "Fotografie | Gaming | Reisen",
      
      // About Section
      aboutTitle: "Über Mich",
      aboutContent: "Ich spezialisiere mich auf die Entwicklung robuster Backend-Systeme und moderner Webanwendungen mit sauberem, wartbarem Code. Mein Ansatz verbindet technische Exzellenz mit praktischer Problemlösung.",
      techFocusTitle: "Technische Schwerpunkte",
      backend: "Backend-Architektur",
      frontend: "Frontend-Entwicklung",
      devops: "DevOps & CI/CD Pipelines",
      databases: "Datenbanksysteme",
      testing: "Testframeworks",
      
      // Projects Section
      projectsTitle: "Meine Projekte",
      viewCode: "Code ansehen",
      viewDemo: "Demo ansehen",
      technologies: "Verwendete Technologien",
      
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
      rights: "Alle Rechte vorbehalten"
    }
  };
  
  // Helper function for dynamic content
  export const translateWithValues = (text: string, values: Record<string, string>) => {
    return Object.entries(values).reduce(
      (result, [key, value]) => result.replace(`{${key}}`, value),
      text
    );
  };