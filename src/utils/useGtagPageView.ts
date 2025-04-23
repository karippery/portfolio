import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function useGtagPageView() {
  const location = useLocation();

  useEffect(() => {
    const handleRouteChange = () => {
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: window.location.pathname + 
                    window.location.search + 
                    window.location.hash,
          page_title: document.title
        });
      }
    };

    // Initial load
    handleRouteChange();
    
    // Listen to hash changes (for HashRouter)
    window.addEventListener('hashchange', handleRouteChange);
    
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, [location]);
}