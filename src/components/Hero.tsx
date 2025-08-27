import sfihasImage from '@/assets/sfihas-hero.jpg';
import NewLogo from '@/assets/newlogo.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${sfihasImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
              <img
                src={NewLogo}
                alt="Logo da Sfiha's USA"
                className="w-300 h-300 rounded-2xl shadow-x1 mb-6 mx-auto "
              />
        <p className="text-xl md:text-2xl text-foreground mb-8 font-light">
          Authentic Brazilian Flavors in Orlando
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experience the taste of Brazil with our traditional sfihas, made fresh daily with authentic recipes passed down through generations.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://sfihasorder.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            ORDER NOW
          </a>
          <a
            href="/menu"
            className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            VIEW MENU
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;