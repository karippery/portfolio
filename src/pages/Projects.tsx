// pages/Projects.tsx
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translation/translations';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = t.project.map(project => ({
    ...project,
    technologies: project.technologies.split(', ') // Convert string to array if needed
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{t.projectsTitle}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;