import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translation/translations";
import { motion } from "framer-motion";

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      title: t.frontend,
      emoji: "🖥️",
      skills: ["JavaScript", "TypeScript", "React", "HTML5", "CSS3", "Angular"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: t.backend,
      emoji: "🔧",
      skills: ["Python", "Django", "Django REST", "FastAPI", "Java", "Spring Boot"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: t.databases,
      emoji: "🗃️",
      skills: ["PostgreSQL", "SQLite", "Neo4j", "MySQL"],
      color: "bg-green-100 text-green-800"
    },
    {
      title: t.devops,
      emoji: "☁️",
      skills: ["Docker", "CI/CD", "Git", "Jenkins", "AWS"],
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      title: t.testing,
      emoji: "🧪",
      skills: ["Robot Framework", "Pytest", "Cypress"],
      color: "bg-red-100 text-red-800"
    },
    {
      title: t.otherTechnologies,
      emoji: "🛠️",
      skills: ["GraphQL", "REST API", "Microservices", "JWT", "OAuth2", "Redis", "Celery", "Postman"],
      color: "bg-indigo-100 text-indigo-800"
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          {t.skillsTitle || "Skills and Technologies"}
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveCategory(category.title)}
              onMouseLeave={() => setActiveCategory(null)}
              className={`relative p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden z-0 ${activeCategory === category.title ? 'scale-[1.02]' : ''}`}
              style={{ transformStyle: 'preserve-3d' }} 
              >
              {activeCategory === category.title && (
                <motion.div 
                  layoutId="activeBackground"
                  className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              
              <div className="relative z-10">
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
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${category.color} px-3 py-1 rounded-full text-sm font-medium hover:shadow-md transition-all cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;