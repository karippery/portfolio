import { useState } from 'react';
import { Link } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translation/translations';
import ContactModal from './ContactModal';
import LanguageSwitcher from './LanguageSwitcher';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          <Link 
            to="/" 
            className="hover:text-blue-600 transition-colors duration-200"
          >
            John Raphy Karippery
          </Link>
        </h1>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes size={24} className="inline-block" />
          ) : (
            <FaBars size={24} className="inline-block" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-4 lg:space-x-5">
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
                {t.projectMenu}
              </Link>
            </li>
            <li>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary py-1 px-3 md:py-2 md:px-4 rounded-lg hover:bg-blue-700 hover:shadow-md 
                  transition-all duration-300 transform hover:-translate-y-0.5 text-sm md:text-base"
              >
                {t.contact}
              </button>
              <ContactModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
              />
            </li>
            <li className="ml-1 md:ml-2">
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="block text-gray-600 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.home}
                </Link>
              </li>
              <li>
                <Link 
                  to="/aboutme" 
                  className="block text-gray-600 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.about}
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className="block text-gray-600 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.projectMenu}
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="btn-primary w-full py-2 rounded-lg hover:bg-blue-700"
                >
                  {t.contact}
                </button>
              </li>
              <li className="pt-2">
                <LanguageSwitcher />
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;