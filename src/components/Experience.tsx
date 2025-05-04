
import { Briefcase } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'AdroitMinds',
    period: 'October 2023 – Present',
    description: [
      'Front-End Developer',
      'Customized BigCommerce storefronts using Stencil framework',
      'Enhanced SEO and site structure'
    ]
  },
  {
    title: 'Intern',
    company: 'Luminar Technolab, Kochi',
    period: 'December 2023 – July 2023',
    description: [
      'MEARN Stack Developer'
    ]
  },
  {
    title: 'Web Designer',
    company: 'Singularium Technologies, Bangalore',
    period: 'July 2021 – November 2022',
    description: [
      'HTML/CSS Developer',
      'Front-End Data Management'
    ]
  }
];

export const Experience = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section-padding bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div
          ref={sectionRef}
          className={cn(
            'mb-12 text-center transition-all duration-700',
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Work Experience</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            My professional journey in web development and design
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

            {/* Experience Items */}
            {experiences.map((exp, index) => {
              const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ 
                threshold: 0.2,
                rootMargin: '0px 0px -100px 0px'
              });
              
              return (
                <div 
                  key={index}
                  ref={ref}
                  className={cn(
                    'relative flex flex-col md:flex-row mb-12 transition-all duration-700',
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-1.5 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-portfolio-primary text-white">
                    <Briefcase size={16} />
                  </div>
                  
                  {/* Content Card */}
                  <div className={cn(
                    "ml-12 md:ml-0 md:w-1/2 card-hover bg-white rounded-lg shadow p-6",
                    index % 2 === 0 ? "md:pr-12 md:mr-8" : "md:pl-12 md:ml-8"
                  )}>
                    <h3 className="text-xl font-bold text-portfolio-primary">{exp.title}</h3>
                    <h4 className="text-lg font-medium mb-1">{exp.company}</h4>
                    <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                    <ul className="list-disc list-inside text-gray-700">
                      {exp.description.map((item, i) => (
                        <li key={i} className="mb-1">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
