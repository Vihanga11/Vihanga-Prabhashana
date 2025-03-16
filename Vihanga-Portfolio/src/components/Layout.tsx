import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Camera, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ScrollToBottom from './ScrollToBottom';

const NavigationLink = React.memo(({ item, location, onClick }: {
  item: { name: string; path: string };
  location: { pathname: string };
  onClick?: () => void;
}) => (
  <Link
    key={item.name}
    to={item.path}
    onClick={(e) => {
      scrollToSection(e, item.path);
      onClick?.();
    }}
    className={`${
      location.pathname === item.path
        ? 'text-black dark:text-white'
        : 'text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white'
    } ${onClick ? 'block px-3 py-2 text-base' : ''} transition-all duration-200 hover:scale-105`}
  >
    {item.name}
  </Link>
));

const Layout: React.FC<{ children: React.ReactNode }> = React.memo(({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navigation = [
    { name: 'Home', path: '#hero' },
    { name: 'About', path: '#about' },
    { name: 'Gallery', path: '#gallery' },
    { name: 'Blog', path: '#blog' },
    { name: 'Contact', path: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const element = document.querySelector(path);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-black dark:text-dark-text">
      <nav className="fixed w-full bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm z-50 border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Camera className="h-8 w-8" />
                <span className="font-semibold text-xl">Glamora Frame</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <NavigationLink key={item.name} item={item} location={location} />
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transform transition-all duration-200 hover:scale-110 hover:shadow-lg"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-black"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
              {navigation.map((item) => (
                <NavigationLink
                  key={item.name}
                  item={item}
                  location={location}
                  onClick={() => setIsMenuOpen(false)}
                />
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="min-h-screen">
        {children}
        <ScrollToBottom />
      </main>

      <footer className="bg-gray-50 dark:bg-dark-surface border-t dark:border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-600 dark:text-dark-muted">vihangaprabhashana4@gmail.com</p>
              <p className="text-gray-600 dark:text-dark-muted">glamoraframe@gmail.com</p>
              <p className="text-gray-600 dark:text-dark-muted">+94 72 361 5111</p>
              <p className="text-gray-600 dark:text-dark-muted">+94 77 033 5729</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 dark:text-dark-muted hover:text-black dark:hover:text-white transform transition-all duration-200 hover:scale-105 hover:translate-y-[-2px]">Instagram</a>
                <a href="#" className="text-gray-600 dark:text-dark-muted hover:text-black dark:hover:text-white transform transition-all duration-200 hover:scale-105 hover:translate-y-[-2px]">Facebook</a>
                <a href="#" className="text-gray-600 dark:text-dark-muted hover:text-black dark:hover:text-white transform transition-all duration-200 hover:scale-105 hover:translate-y-[-2px]">Twitter</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-600 dark:text-dark-muted mb-2">Subscribe to get updates on my latest work</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-dark-text"
                />
                <button className="px-4 py-2 bg-black text-white rounded-r hover:bg-gray-800 dark:bg-dark-text dark:hover:bg-dark-muted transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600 dark:text-dark-muted">
            © {new Date().getFullYear()} Glamora Frame. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
});

export default Layout;