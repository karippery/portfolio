import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();
    
    return (
      <div className="flex items-center space-x-1">
        <button 
          onClick={() => setLanguage('en')}
          className={`px-2 py-1 text-sm rounded ${language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          EN
        </button>
        <button 
          onClick={() => setLanguage('de')}
          className={`px-2 py-1 text-sm rounded ${language === 'de' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          DE
        </button>
      </div>
    );
  };

export default LanguageSwitcher;