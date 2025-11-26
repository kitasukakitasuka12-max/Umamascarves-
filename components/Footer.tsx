import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Umamascarves</h2>
        
        <div className="flex justify-center space-x-8 mb-8">
          <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
            <Twitter size={24} />
          </a>
        </div>
        
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Umamascarves. All rights reserved. <br/>
          Designed with elegance.
        </p>
      </div>
    </footer>
  );
};

export default Footer;