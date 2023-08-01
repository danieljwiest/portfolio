import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if the URL contains an anchor link (e.g., mySite.com/projects/#demo)
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));

      // Scroll to the section smoothly
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

export default ScrollToSection;
