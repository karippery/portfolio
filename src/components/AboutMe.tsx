// components/AboutMe.tsx
const AboutMe = () => {
    return (
      <section id="about" className="max-w-4xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 group relative inline-block">
        <span className="relative">
            John Raphy Karippery
            {/* Underline animation */}
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </span>
        </h1>
          <h2 className="text-2xl text-gray-600">Full-Stack Developer</h2>
        </div>
  
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <a href="#experience" className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition">
            Professional Experience
          </a>
          <a href="#education" className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition">
            Education
          </a>
          <a href="#dream" className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition">
            My Vision
          </a>
          <a href="#future" className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition">
            Future Plans
          </a>
        </div>
  
        {/* Timeline Section */}
        <div className="space-y-16">
          {/* Experience Timeline */}
          <div id="experience" className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">Professional Experience</h3>
  
            <div className="relative pl-8 border-l-2 border-blue-200 space-y-10">
              {/* Current Job */}
              <div className="relative">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-1.5"></div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h4 className="text-xl font-bold">Senior Software Engineer</h4>
                    <span className="text-blue-600 font-medium">2022 - Present</span>
                  </div>
                  <h5 className="text-lg text-gray-700 mb-2">EDAG Engineering GmbH, Germany</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Lead backend developer for SAFIR (Django/FastAPI + React)</li>
                    <li>Implemented CI/CD pipelines and Docker containerization</li>
                    <li>Developed Python automation tools to optimize workflows</li>
                  </ul>
                </div>
              </div>
  
              {/* Previous Jobs */}
              <div className="relative">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-1.5"></div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h4 className="text-xl font-bold">Software Developer</h4>
                    <span className="text-blue-600 font-medium">2019 - 2022</span>
                  </div>
                  <h5 className="text-lg text-gray-700 mb-2">Siemens Mobility, Germany</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Developed live dashboard for railway systems</li>
                    <li>Migrated database from SQLite to PostgreSQL</li>
                    <li>Configured high-availability server clusters</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
          {/* Education Timeline */}
          <div id="education" className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">Education</h3>
  
            <div className="relative pl-8 border-l-2 border-green-200 space-y-10">
              <div className="relative">
                <div className="absolute w-3 h-3 bg-green-600 rounded-full -left-[7px] top-1.5"></div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h4 className="text-xl font-bold">Master of Informatics</h4>
                    <span className="text-green-600 font-medium">2017 - 2022</span>
                  </div>
                  <h5 className="text-lg text-gray-700 mb-2">Technische Universität Clausthal, Germany</h5>
                  <p className="text-gray-700">
                    Thesis: Machine learning program using NSGA-II algorithm for vehicle platooning optimization
                  </p>
                </div>
              </div>
  
              <div className="relative">
                <div className="absolute w-3 h-3 bg-green-600 rounded-full -left-[7px] top-1.5"></div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h4 className="text-xl font-bold">Bachelor of Computer Applications</h4>
                    <span className="text-green-600 font-medium">2012 - 2015</span>
                  </div>
                  <h5 className="text-lg text-gray-700 mb-2">Christ College, India</h5>
                  <p className="text-gray-700">
                    Thesis: Hospital management system with patient records and appointment scheduling
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          {/* My Dream Section */}
          <div id="dream" className="space-y-6 bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800">My Vision & Entrepreneurial Dream</h3>
            <p className="text-gray-700">
              My ultimate goal is to establish my own tech startup focused on developing innovative solutions
              that bridge the gap between cutting-edge technology and real-world business needs. I envision
              creating products that:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Leverage AI and automation to solve complex industry problems</li>
              <li>Provide intuitive developer tools to enhance productivity</li>
              <li>Implement sustainable tech solutions with positive social impact</li>
            </ul>
          </div>
  
          {/* Future Plans */}
          <div id="future" className="space-y-6 bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800">Future Plans & Homecoming</h3>
            <p className="text-gray-700">
              While I've built a successful career in Germany, my long-term plan includes returning to my
              home country to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Establish a technology hub to nurture local talent</li>
              <li>Transfer knowledge and expertise gained internationally</li>
              <li>Contribute to the growing tech ecosystem back home</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;