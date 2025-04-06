import Skills from '../components/Skills';
import { useLanguage } from '../context/LanguageContext';
import Profileimage from '../images/profile.png';
import { translations } from '../translation/translations';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <img 
            src={Profileimage}
            alt="John Raphy Karippery" 
            className="rounded-full w-40 h-40 object-cover mb-4 md:mb-0 md:mr-8"
          />
          <div className="space-y-6">
            {/* Name/Title Section */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {t.welcome}
              </h1>
              <div className="w-20 h-1 bg-blue-600"></div>
            </div>

            {/* Professional Identity */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl text-gray-700 font-medium">
                {t.description}
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                For the past <span className="font-semibold text-blue-600">6 years</span>, I've been crafting
                <span className="text-purple-600"> backend architectures</span> and
                <span className="text-green-600"> web applications</span> that solve real problems.
                When I'm not coding, you'll find me exploring new technologies or
                <span className="text-yellow-600"> contributing to open-source</span> projects.
                I thrive in collaborative environments and love sharing knowledge with others.
                My goal is to create impactful software that enhances user experiences and drives innovation.
                <br />
              </p>
            </div>

            {/* Personal Details */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                <span className="text-gray-700">📍 Based in Braunschweig</span>
              </div>
              <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                <span className="text-gray-700">📸 Photography enthusiast</span>
              </div>
              <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                <span className="text-gray-700">🌍 Travel lover</span>
              </div>
              <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                <span className="text-gray-700">🎮 Casual gamer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4"><Skills /></h2>
      </section>
    </div>
  );
};

export default Home;