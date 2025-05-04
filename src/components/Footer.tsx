
import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold gradient-text">
              Adarsh RG
            </a>
            <p className="mt-2 text-gray-400">Front-End Web Developer</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end text-gray-400 mb-2">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Adarsh RG
            </p>
            <p className="text-gray-500">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
