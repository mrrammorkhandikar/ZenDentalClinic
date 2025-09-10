import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full bg-white ${isScrolled ? 'bg-opacity-90 shadow-lg' : 'bg-opacity-80'} backdrop-blur-md z-50 transition-all duration-300`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold text-teal-700">Zen Smile</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 text-gray-700 font-medium text-lg">
          <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-teal-600 transition-colors">About</Link>
          <Link to="/services" className="hover:text-teal-600 transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-teal-600 transition-colors">Contact</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMobileMenu} 
            className="text-gray-700 focus:outline-none z-50 relative border border-white p-2 rounded"
            aria-label="Toggle mobile menu"
          >
            <div className="w-8 flex flex-col items-end justify-center">
              <span 
                className={`block h-0.5 bg-gray-700 rounded-full w-full transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
              ></span>
              <span 
                className={`block h-0.5 bg-gray-700 rounded-full w-3/4 my-1.5 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              ></span>
              <span 
                className={`block h-0.5 bg-gray-700 rounded-full w-full transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              ></span>
            </div>
          </button>
        </div>
        
        {/* Book Now Button - Only visible on desktop */}
        <Link 
          to="/contact#contact-form" 
          className="hidden md:block bg-teal-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 text-center"
        >
          Book Now
        </Link>
        
        {/* Mobile Navigation Menu - Backdrop */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Mobile Navigation Menu - Content */}
        <div 
          className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white z-40 transform transition-all duration-500 ease-in-out shadow-xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          
        >
          <div className="container mx-auto px-6 py-24 flex flex-col items-center space-y-8"
          style={{ backgroundColor: 'white' }}>
            <Link 
              to="/" 
              className={`text-2xl font-medium text-gray-800 hover:text-teal-600 transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ transitionDelay: '100ms' }}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-2xl font-medium text-gray-800 hover:text-teal-600 transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ transitionDelay: '150ms' }}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`text-2xl font-medium text-gray-800 hover:text-teal-600 transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ transitionDelay: '200ms' }}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`text-2xl font-medium text-gray-800 hover:text-teal-600 transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ transitionDelay: '250ms' }}
            >
              Contact
            </Link>
            <Link 
              to="/contact#contact-form"
              className={`mt-6 bg-teal-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} text-center`}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ transitionDelay: '300ms' }}
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;