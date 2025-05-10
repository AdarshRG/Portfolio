
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Code, Database, Layout, Laptop, Palette, Search } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code className="w-6 h-6 text-portfolio-accent" />,
    skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS']
  },
  {
    title: 'Frameworks',
    icon: <Layout className="w-6 h-6 text-portfolio-accent" />,
    skills: ['BigCommerce Stencil', 'Graph QL', 'React', 'Node.js', 'Express']
  },
  {
    title: 'Tools',
    icon: <Laptop className="w-6 h-6 text-portfolio-accent" />,
    skills: ['Git', 'AutoCAD', 'MongoDB', 'MS Office', 'macOS', 'Windows', 'Ubuntu', 'Linux']
  },
  {
    title: 'Other Skills',
    icon: <Palette className="w-6 h-6 text-portfolio-accent" />,
    skills: ['SEO', 'Responsive Design', 'Handlebars', 'Cross-Browser Compatibility', 'Testing']
  }
];

export const Skills = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLDivElement>();
  
  return (
    <section id="skills" className="section-padding bg-white relative">
      <div className="container mx-auto px-4">
        <div
          ref={sectionRef}
          className={cn(
            'mb-12 text-center transition-all duration-700',
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Technical Skills</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The technologies and tools I specialize in
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
              threshold: 0.2,
              rootMargin: '0px 0px -100px 0px'
            });
            
            return (
              <div
                key={index}
                ref={ref}
                className={cn(
                  'bg-white rounded-lg shadow-lg p-6 card-hover transition-all duration-700',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-portfolio-accent/10 p-2 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="max-w-3xl mx-auto">
            <div 
              className="bg-gradient-to-br from-portfolio-primary to-portfolio-accent rounded-lg p-6 text-white text-center shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-white/20 p-3">
                  <Database className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Achievements & Continuous Learning</h3>
              <ul className="space-y-2 mb-4 text-left list-disc pl-6">
                <li>Developed fully dynamic e-commerce sites through Bigcommerce and stencil framework </li>
                <li>Completed Workshop on Python in national level technical fest Pantheon @CET</li>
                <li>Completed course on MEARN Stack</li>
                <li>Built a banking page using MongoDB</li>
              </ul>
              <p className="italic">
                Committed to continuous learning and improving my skills in web development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
