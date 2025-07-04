
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

export const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  
  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="container mx-auto px-4">
        <div
          ref={sectionRef}
          className={cn(
            'mb-12 text-center transition-all duration-700',
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">About Me</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A passionate front-end developer with a focus on creating seamless user experiences
          </p>
        </div>

        <div 
          ref={contentRef}
          className={cn(
            'grid md:grid-cols-2 gap-8 items-center transition-all duration-1000',
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <div className="rounded-lg p-6 bg-gradient-to-br from-portfolio-primary/5 to-portfolio-accent/10">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Who I Am</h3>
            <p className="text-gray-700 mb-4">
              I'm a Front-End Web Developer with 3 years of expertise in BigCommerce and the MERN stack. 
              My journey in web development has equipped me with a strong foundation in creating 
              responsive, user-focused websites and e-commerce solutions.
            </p>
            <p className="text-gray-700">
              Based in Trivandrum, Kerala, I'm passionate about combining technical innovation with 
              creative problem-solving to deliver exceptional digital experiences. I constantly 
              strive to stay updated with the latest web technologies and best practices to ensure 
              my work meets modern standards.
            </p>
          </div>
          
          <div className="rounded-lg p-6 bg-gradient-to-br from-portfolio-accent/10 to-portfolio-primary/5">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Education & Interests</h3>
            <div className="mb-4">
              <h4 className="font-semibold">Rajadhani Institute of Engineering and Technology</h4>
              <p className="text-gray-600">B.Tech, Kerala Technological University (CGPA: 6.5)</p>
              <p className="text-gray-500 text-sm">2016 - 2020</p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Christ Nagar Senior Secondary School</h4>
              <p className="text-gray-600">12th - Computer Science (65%)</p>
              <p className="text-gray-600">10th (80%)</p>
              <p className="text-gray-500 text-sm">CBSE</p>
            </div>
            <div>
              <h4 className="font-semibold">Interests</h4>
              <p className="text-gray-600">Software Development, Financial Markets, Fitness, Travel, Cue Sports, Team Sports</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
