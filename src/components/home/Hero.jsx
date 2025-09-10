import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32" style={{ backgroundImage: 'url(/Images/bgHero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/** <div className="absolute inset-0 bg-teal-50 bg-opacity-70"></div> */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 text-center md:text-left md:pr-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
            Your <span className="text-teal-600">Perfect Smile</span> Begins With Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Experience exceptional dental care with our team of experts dedicated to your comfort and oral health.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 text-center">
              Book Appointment
            </Link>
            <Link to="/services" className="bg-white text-teal-600 border-2 border-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300 text-center">
              Our Services
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="relative">
            <div className="absolute inset-0 bg-teal-200 rounded-full opacity-20 transform -translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1170&auto=format&fit=crop" 
              alt="Dentist with patient" 
              className="relative z-10 rounded-lg shadow-2xl max-w-full mx-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/600x400/teal/white?text=Zen+Smile';
              }}
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;