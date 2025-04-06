import { useState } from 'react';
import { Link } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translation/translations';
import ContactModal from './ContactModal';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          <Link 
            to="/" 
            className="hover:text-blue-600 transition-colors duration-200"
          >
            John Raphy Karippery
          </Link>
        </h1>
        
        <nav>
          <ul className="flex items-center space-x-5">
            <li>
              <Link 
                to="/" 
                className="relative text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200
                  after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 
                  after:transition-all after:duration-300 hover:after:w-full"
              >
                {t.home}
              </Link>
            </li>
            <li>
              <Link 
                to="/aboutme" 
                className="relative text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200
                  after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 
                  after:transition-all after:duration-300 hover:after:w-full"
              >
                {t.about}
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className="relative text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200
                  after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 
                  after:transition-all after:duration-300 hover:after:w-full"
              >
                {t.projects}
              </Link>
            </li>
            <li>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary py-2 px-4 rounded-lg hover:bg-blue-700 hover:shadow-md 
                  transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {t.contact}
              </button>
              <ContactModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
              />
            </li>
            <li className="ml-2"> {/* Reduced left margin */}
            <LanguageSwitcher />
          </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;