import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-200 rounded-lg opacity-20 transform translate-x-4 -translate-y-4"></div>
              <img
                src="/Images/About/dental-clinic.jpg"
                alt="Modern dental clinic"
                className="relative z-10 rounded-lg shadow-xl max-w-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/600x400/teal/white?text=About+Us';
                }}
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Dr. Amit Patel</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Zen Smile, I believe that a healthy smile is the foundation of overall well-being. My state-of-the-art dental clinic in Mumbai combines advanced technology with compassionate care to provide you with the best dental experience possible.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With over 15 years of experience in cosmetic dentistry and dental implants, I am dedicated to making your visit comfortable and stress-free. I take the time to understand your unique needs and develop personalized treatment plans that deliver exceptional results.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Experienced Specialist</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Modern Equipment</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Comfortable Environment</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Personalized Care</span>
              </div>
            </div>
            <Link to="/about" className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-teal-700 transition-all duration-300 inline-block">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;