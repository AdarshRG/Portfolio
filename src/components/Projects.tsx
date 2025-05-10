
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const projectsData = [
  {
    title: 'Tobys Estate Australia',
    description: 'I recently developed an e-commerce platform for a leading coffee brand in Australia using the BigCommerce Stencil framework."',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    tags: ['BigCommerce','Stencil', 'JavaScript', 'Stencil', 'SEO','GraphQl'],
    links: {
      github: 'https://github.com/AdarshRG',
      live: 'https://www.tobysestate.com.au/'
    }
  },
  {
    title: 'Toolmart Australia',
    description: 'E-commerce platform for Tools and other mechanical parts using BigCommerce Stencil framework',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    tags: ['BigCommerce', 'JavaScript', 'Stencil', 'SEO','GraphQl'],
    links: {
      github: 'https://github.com/AdarshRG',
      live: 'https://www.toolmart.com.au/'
    }
  },
  {
    title: 'Medcart',
    description: 'E-commerce platform for medical supplies using BigCommerce Stencil framework',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    tags: ['BigCommerce', 'JavaScript', 'Stencil', 'SEO'],
    links: {
      github: 'https://github.com/AdarshRG',
      live: 'https://medcart.com.au/'
    }
  },
  {
    title: 'BarkControl',
    description: 'Pet products e-commerce site with enhanced user experience and functionality',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    tags: ['BigCommerce', 'CSS', 'JavaScript', 'Responsive Design'],
    links: {
      github: 'https://github.com/AdarshRG',
      live: 'https://www.barkcontrol.com.au/'
    }
  },
  {
    title: 'Equivont',
    description: 'E-commerce platform with optimized checkout flow and improved site performance',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    tags: ['BigCommerce', 'Front-end', 'Optimization'],
    links: {
      github: 'https://github.com/AdarshRG',
      live: 'https://www.equivont.com/'
    }
  },
  {
    title: 'Banking Application',
    description: 'Full-stack banking application built with MongoDB and Express',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    tags: ['MongoDB', 'Express', 'Node.js', 'JavaScript','React'],
    links: {
      github: 'https://github.com/AdarshRG',
      live: '#'
    }
  },
];

export const Projects = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLDivElement>();
  
  return (
    <section id="projects" className="section-padding bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div
          ref={sectionRef}
          className={cn(
            'mb-12 text-center transition-all duration-700',
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Projects</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent web development work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
              threshold: 0.1,
              rootMargin: '0px 0px -100px 0px'
            });
            
            return (
              <div
                key={index}
                ref={ref}
                className={cn(
                  'bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-700 card-hover',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white w-full">
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="bg-portfolio-primary/10 text-portfolio-primary px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-portfolio-accent transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-portfolio-accent transition-colors"
                    >
                      <span>View Project</span>
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/AdarshRG" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-portfolio-accent text-white rounded-lg font-medium hover:bg-portfolio-primary transition-colors card-hover"
          >
            <span>View More Projects</span>
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
