
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA4 only once
    const GA_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
    
    if (GA_ID) {
      // Check if not already initialized to avoid warnings/dup calls if strict mode
      if (!window.ga4Initialized) {
          ReactGA.initialize(GA_ID);
          window.ga4Initialized = true;
      }
      
      // Send pageview with current path
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    } else {
        console.warn("Google Analytics ID not found in environment variables.");
    }
  }, [location]);

  return null;
};

// Add type definition for the window object to avoid TS errors
declare global {
    interface Window {
        ga4Initialized?: boolean;
    }
}

export default Analytics;
