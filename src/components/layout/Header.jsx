import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`fixed top-0 left-0 w-full bg-white ${isScrolled ? 'bg-opacity-90 shadow-lg' : 'bg-opacity-80'} backdrop-blur-md z-50 transition-all duration-300`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold text-teal-700">Zen Smile</Link>
        <div className="hidden md:flex space-x-10 text-gray-700 font-medium text-lg">
          <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-teal-600 transition-colors">About</Link>
          <Link to="/services" className="hover:text-teal-600 transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-teal-600 transition-colors">Contact</Link>
        </div>
        <button className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105">
          Book Now
        </button>
      </nav>
    </header>
  );
};

export default Header;