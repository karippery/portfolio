import { AnimatePresence, motion } from 'framer-motion';
import { HashRouter as Router, Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CookieConsent from './components/CookieConsent';
import Privacy from './pages/Privacy';
import AboutMe from './pages/AboutMe';
import { useEffect, useState, useCallback } from 'react';
import ContactModal from './components/ContactModal';
import useGtagPageView from './utils/useGtagPageView';

// Route order for swipe navigation (excluding privacy)
const swipeRoutes = ['/home', '/aboutme', '/projects'];

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

function AppContent() {
  useGtagPageView(); // Custom hook to track page views with Google Analytics
  const navigate = useNavigate();
  const location = useLocation();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check if device is touch-enabled
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.maxTouchPoints > 0
      );
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Minimum swipe distance required
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd || !isMobile) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe || isRightSwipe) {
      // Only allow swipe navigation for routes in swipeRoutes array
      if (!swipeRoutes.includes(location.pathname)) return;

      const currentIndex = swipeRoutes.indexOf(location.pathname);
      if (currentIndex === -1) return;

      if (isLeftSwipe && currentIndex < swipeRoutes.length - 1) {
        navigate(swipeRoutes[currentIndex + 1]);
      } else if (isRightSwipe && currentIndex > 0) {
        navigate(swipeRoutes[currentIndex - 1]);
      }
    }
  }, [touchStart, touchEnd, navigate, location.pathname, isMobile]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col min-h-screen"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <CookieConsent />
        <Header setIsModalOpen={setIsModalOpen} />
        
        <main className="flex-grow">
          <Routes>
            {/* Base route redirect */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            
            {/* Main routes */}
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/privacy" element={<Privacy />} />
            
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;