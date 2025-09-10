import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Zen Smile</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm dedicated to providing exceptional dental care in a comfortable and welcoming environment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-teal-200 rounded-lg opacity-20 transform translate-x-4 -translate-y-4"></div>
                <img 
                  src="/Images/Clinic/modern-dental-office.jpg" 
                  alt="My dental clinic" 
                  className="relative z-10 rounded-lg shadow-xl max-w-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/600x400/teal/white?text=My+Clinic';
                  }}
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, Zen Smile began with a simple mission: to transform the dental experience from one of anxiety to one of comfort and care. I recognized that many people avoided necessary dental care due to fear and anxiety, and I was determined to create a practice that addressed these concerns.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, my practice has grown from a small clinic to a comprehensive dental care center, but my commitment to patient comfort and exceptional care remains unchanged. I've invested in advanced technology and continuous education to provide the best care possible.
              </p>
              <p className="text-lg text-gray-600">
                Today, Zen Smile is proud to be one of Mumbai's most trusted dental practices, serving thousands of patients with a wide range of dental services delivered with expertise and compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">My Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that shape everything I do at Zen Smile.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Excellence</h3>
              <p className="text-gray-600 text-center">
                I strive for excellence in every aspect of my practice, from clinical skills to patient communication and service.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Compassion</h3>
              <p className="text-gray-600 text-center">
                I treat each patient with empathy and understanding, recognizing that dental visits can be stressful for many people.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Trust</h3>
              <p className="text-gray-600 text-center">
                I build relationships based on trust by being transparent about treatments, costs, and expected outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
    

      {/* CTA Section */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule your consultation today and take the first step towards a healthier, more beautiful smile.
          </p>
          <Link to="/contact" className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300 inline-block">
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;