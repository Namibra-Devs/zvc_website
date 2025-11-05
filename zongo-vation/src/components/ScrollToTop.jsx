// components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll without animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // This prevents any visible animation
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;