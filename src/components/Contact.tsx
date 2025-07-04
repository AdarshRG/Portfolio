
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Phone, Mail, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export const Contact = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast.success('Message sent successfully!', {
      description: 'Thank you for reaching out. I will get back to you soon.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="container mx-auto px-4">
        <div
          ref={sectionRef}
          className={cn(
            'mb-12 text-center transition-all duration-700',
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Get In Touch</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Feel free to contact me for any opportunities or collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            ref={formRef}
            className={cn(
              'bg-white rounded-lg shadow-lg p-6 transition-all duration-700',
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[150px]"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-portfolio-accent hover:bg-portfolio-primary"
              >
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          <div
            ref={infoRef}
            className={cn(
              'bg-white rounded-lg shadow-lg p-6 transition-all duration-700',
              infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-portfolio-accent/10 rounded-full">
                  <Phone className="w-5 h-5 text-portfolio-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-600">+91 8547855799</p>
                  <p className="text-gray-600">+91 8848141147</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-portfolio-accent/10 rounded-full">
                  <Mail className="w-5 h-5 text-portfolio-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">rg.adarsh1@gmail.com</p>
                  <p className="text-gray-600">adarshrg1998@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-portfolio-accent/10 rounded-full">
                  <MapPin className="w-5 h-5 text-portfolio-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Location</h4>
                  <p className="text-gray-600">Trivandrum, Kerala, India</p>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-medium text-gray-900 mb-3">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/adarsh-rg-367a0a1ba/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-portfolio-accent/10 rounded-full hover:bg-portfolio-accent/20 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-portfolio-accent" />
                  </a>
                  <a 
                    href="https://github.com/AdarshRG" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-portfolio-accent/10 rounded-full hover:bg-portfolio-accent/20 transition-colors"
                  >
                    <Github className="w-5 h-5 text-portfolio-accent" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
