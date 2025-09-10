import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Marketing Executive',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    quote: 'I was always anxious about dental visits until I found Zen Smile. Dr. Patel and his team made me feel so comfortable. My teeth whitening results are amazing!'
  },
  {
    id: 2,
    name: 'Raj Malhotra',
    role: 'Software Engineer',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    quote: 'After my dental implant procedure at Zen Smile, I can smile confidently again. The process was much smoother than I expected, and the results are fantastic.'
  },
  {
    id: 3,
    name: 'Ananya Desai',
    role: 'Teacher',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    quote: 'The entire staff at Zen Smile is exceptional. They take the time to explain procedures and make sure you\'re comfortable. My children actually look forward to their dental checkups!'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'Business Owner',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    quote: 'I had extensive cosmetic work done at Zen Smile, and the results exceeded my expectations. Dr. Patel is truly an artist when it comes to creating beautiful smiles.'
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (testimonialRef.current) {
      testimonialRef.current.scrollTo({
        left: activeIndex * testimonialRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  return (
    <section className="py-20 bg-teal-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Patients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied patients about their experience at Zen Smile.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div 
            ref={testimonialRef}
            className="testimonial-carousel flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="testimonial-item flex-shrink-0 w-full snap-center px-4"
              >
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                  <div className="flex flex-col md:flex-row items-center md:items-start">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-20 h-20 rounded-full object-cover mb-6 md:mb-0 md:mr-6"
                    />
                    <div>
                      <p className="text-gray-600 italic mb-6 text-lg">"{testimonial.quote}"</p>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800">{testimonial.name}</h4>
                        <p className="text-teal-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-teal-600 w-6' : 'bg-teal-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;