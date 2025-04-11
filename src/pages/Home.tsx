import Skills from '../components/Skills';
import { useLanguage } from '../context/LanguageContext';
import Profileimage from '../images/profile.png';
import { translations } from '../translation/translations';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <main className="container mx-auto px-4 py-8"> 
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <img 
            src={Profileimage}
            alt="John Raphy Karippery" 
            className="rounded-full w-40 h-40 object-cover mb-5 md:mb-0 md:mr-9 hover:scale-150 transition-transform duration-300"
          />
          <div className="space-y-6">
            {/* Name/Title Section */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {t.welcome}
              </h1>
            </div>

            {/* Professional Identity */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl text-gray-700 font-medium">
                {t.description}
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed max-w-5xl">
                {t.shortProfile}
                <br />
              </p>
            </div>

            {/* Personal Details */}
            <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="https://www.google.com/maps?q=Braunschweig,+Germany" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-100 px-4 py-2 rounded-full hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-gray-700">📍 {t.location}</span>
                </a>
              <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full hover:scale-110 transition-transform duration-300">
                <span className="text-gray-700">📸 {t.hobbies.photography}</span>
              </div>
              <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full hover:scale-110 transition-transform duration-300">
                <span className="text-gray-700">🌍 {t.hobbies.travel}</span>
              </div>
              <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full hover:scale-110 transition-transform duration-300">
                <span className="text-gray-700">🎮 {t.hobbies.gaming}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <Skills />
      </section>
    </main>
  );
};

export default Home;