import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollToBottom: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      
      // Show button if not at bottom and page is scrollable
      setIsVisible(scrolled < totalHeight - viewportHeight - 100);
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return isVisible ? (
    <button
      onClick={scrollToBottom}
      className="fixed bottom-8 right-8 bg-black/80 text-white p-3 rounded-full shadow-lg hover:bg-black transition-all duration-200 hover:scale-110 hover:shadow-xl z-40"
      aria-label="Scroll to bottom"
    >
      <ChevronDown className="h-6 w-6" />
    </button>
  ) : null;
};

export default ScrollToBottom;
