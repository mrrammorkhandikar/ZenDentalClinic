import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, link, imageSrc }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {imageSrc && (
        <div className="mb-6 h-40 overflow-hidden rounded-lg">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://placehold.co/600x400?text=Zen+Smile";
            }}
          />
        </div>
      )}
      <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6">
        <div className="text-teal-600" dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link} className="text-teal-600 font-medium inline-flex items-center hover:text-teal-700">
        Learn More
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><line x1="8" y1="14" x2="8" y2="18"></line><line x1="16" y1="14" x2="16" y2="18"></line><line x1="12" y1="14" x2="12" y2="18"></line></svg>`,
      title: 'Teeth Whitening',
      description: 'Brighten your smile with our professional teeth whitening services that remove stains and discoloration.',
      link: '/services',
      imageSrc: '/Images/Services/teeth-whitening.jpg'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`,
      title: 'Dental Implants',
      description: 'Replace missing teeth with our natural-looking and durable dental implants for a complete smile.',
      link: '/services',
      imageSrc: '/Images/Services/dental-implants.jpg'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>`,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our range of cosmetic procedures designed to enhance your natural beauty.',
      link: '/services',
      imageSrc: '/Images/Services/cosmetic-dentistry.jpg'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M9 14l2 2 4-4"></path></svg>`,
      title: 'Modern & Clean',
      description: 'Experience dental care in our state-of-the-art facility with the latest technology and sterilization.',
      link: '/about',
      imageSrc: '/Images/About/dental-clinic.jpg'
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Dental Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I provide comprehensive dental care with a gentle touch and personalized approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-teal-700 transition-all duration-300 inline-block">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;