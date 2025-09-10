import Hero from './Hero';
import Services from './Services';
import About from './About';
import Testimonials from './Testimonials';
import Contact from './Contact';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default HomePage;