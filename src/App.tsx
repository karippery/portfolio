import { AnimatePresence, motion } from 'framer-motion';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CookieConsent from './components/CookieConsent';
import Privacy from './pages/Privacy';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col min-h-screen"
          >
            <CookieConsent />
            <Header />
            
            <main className="flex-grow">
              <Routes>
                {/* Base route redirect */}
                <Route path="/" element={<Navigate to="/home" replace />} />
                
                {/* Main routes */}
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/privacy" element={<Privacy />} />
                
                {/* Fallback route */}
                <Route path="*" element={<Navigate to="/home" replace />} />
              </Routes>
            </main>
            
            <Footer />
          </motion.div>
        </AnimatePresence>
      </Router>
    </LanguageProvider>
  );
}

export default App;