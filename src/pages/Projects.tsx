import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Smart-Skills",
      description: "Smart-Skill is a web application designed to streamline the process of employee skill management within a company. With a large number of employees, it can be challenging for a company to identify the perfect candidate for a new project. ",
      technologies: ["Django", "celery", "Docker", "Postgresql", "Redis"],
      githubLink: "https://github.com/karippery/smartskill"
    },
    {
      title: "Facility Feed Service",
      description: "The Facility Feed Service is a Django-based application designed to generate and manage JSON feed files from facility data stored in a PostgreSQL database. It processes data in chunks for efficiency, compresses feeds with gzip, and uploads them to AWS S3 using asynchronous",
      technologies: ["Python", "asyncio", "asyncpg", "Django", "Postgresql"," AWS S3","redis","CI/CD"],
      githubLink: "https://github.com/karippery/facility-feed-service"
    },
    {
      title: "implement a simple and Basic genetic Algorithm",
      description: "Implement a simple and Basic genetic Algorithm operator code. you should modify basiced on your population.",
      technologies: ["Python", "numpy", "matplotlib"],
      githubLink: "https://github.com/karippery/Genetic-Algorithm"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;