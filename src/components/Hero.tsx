
import { ArrowDown } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

export const Hero = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section id="home" className="relative min-h-screen flex items-center animated-bg pt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-portfolio-dark/5 to-transparent"></div>
      <div 
        className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center"
      >
        <div
          ref={titleRef}
          className={cn(
            'transition-all duration-1000 delay-100',
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-portfolio-accent/10 text-portfolio-accent text-sm font-medium mb-4">
            Front-End Web Developer
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Adarsh RG</span>
          </h1>
        </div>

        <div
          ref={subtitleRef}
          className={cn(
            'max-w-2xl mx-auto transition-all duration-1000 delay-300',
            subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Web Developer with 3 years of experience specializing in BigCommerce and MERN stack,
            creating engaging and functional digital experiences.
          </p>
        </div>

        <div
          ref={ctaRef}
          className={cn(
            'flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500',
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-lg bg-portfolio-accent text-white font-medium hover:bg-portfolio-primary transition-colors duration-300 card-hover"
          >
            Contact Me
          </a>
          <a 
            href="https://github.com/AdarshRG" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-3 rounded-lg border-2 border-portfolio-accent text-portfolio-accent font-medium hover:bg-portfolio-accent/10 transition-colors duration-300 card-hover"
          >
            View Projects
          </a>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-gray-600 hover:text-portfolio-accent transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
