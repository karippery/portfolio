import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translation/translations";

// components/Skills.tsx
const Skills = () => {
  
    const { language } = useLanguage();
    const t = translations[language];
    
    const skillCategories = [
      {
        title: t.frontend,
        emoji: "🖥️",
        skills: ["JavaScript", "TypeScript", "React", "HTML5", "CSS3", "Angular"]
      },
      {
        title: t.backend,
        emoji: "🔧",
        skills: ["Python", "Django", "Django REST", "FastAPI", "Java", "Spring Boot"]
      },
      {
        title: t.databases,
        emoji: "🗃️",
        skills: ["PostgreSQL", "SQLite", "Neo4j", "MySQL"]
      },
      {
        title: t.devops,
        emoji: "☁️",
        skills: ["Docker", "CI/CD", "Git", "Jenkins", "AWS"]
      },
      {
        title: t.testing,
        emoji: "🧪",
        skills: [ "Robot Framework", "Pytest", "cypress"]
      },
      {
        title: "Other Technologies",
        emoji: "🛠️",
        skills: ["GraphQL", "REST API", "Microservices", "JWT", "OAuth2", "Redis", "Celery","Postman"]
      }
    ];
  
    return (
      <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Skills and Technology
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div 
                key={category.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3" aria-hidden="true">
                    {category.emoji}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="bg-blue-50 px-3 py-1 rounded-full text-sm text-blue-800 hover:bg-blue-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;