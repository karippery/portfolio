import { AnimatePresence, motion } from 'framer-motion';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
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
    <Router>
      
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col min-h-screen"
        >
      <div className="min-h-screen flex flex-col">
      <LanguageProvider>
      <CookieConsent />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/aboutme" element={<AboutMe  />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </LanguageProvider>
      </div>
      </motion.div>
      </AnimatePresence>
    </Router>
  );
}

export default App;
