import { createContext, ReactNode, useContext, useState, useEffect } from 'react';

type LanguageContextType = {
  language: 'en' | 'de';
  setLanguage: (lang: 'en' | 'de') => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Initialize state with a default value (will be updated after mount)
  const [language, setLanguage] = useState<'en' | 'de'>('en');
  
  useEffect(() => {
    // Detect browser language on component mount
    const detectLanguage = () => {
      // Get browser language (first two characters)
      const browserLanguage = navigator.language.substring(0, 2).toLowerCase();
      
      // Set to German only if browser language is explicitly German
      if (browserLanguage === 'de') {
        setLanguage('de');
      } else {
        // Default to English for all other languages
        setLanguage('en');
      }
    };

    detectLanguage();
  }, []); // Empty dependency array means this runs only once on mount

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};