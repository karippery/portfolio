const ProjectCard = ({ title, description, technologies, githubLink }: { 
  title: string, 
  description: string, 
  technologies: string[], 
  githubLink: string 
}) => {
  const handleCodeClick = () => {
    window.open(githubLink, '_blank');
  };
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="inline-block bg-primary/10 text-primaryDark text-sm px-3 py-1 rounded-md font-medium 
                        hover:bg-primary/20 hover:scale-105 transform transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
          <div className="flex space-x-3">
            <button onClick={handleCodeClick}
              className="border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white">
              Code
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;