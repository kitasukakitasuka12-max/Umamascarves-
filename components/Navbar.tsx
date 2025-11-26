import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-serif font-bold text-brand-dark tracking-wide">
          Umamascarves
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-brand-dark hover:text-brand-gold transition-colors font-sans text-sm tracking-widest uppercase">Home</a>
          <a href="#details" className="text-brand-dark hover:text-brand-gold transition-colors font-sans text-sm tracking-widest uppercase">Collection</a>
          <a href="#specs" className="text-brand-dark hover:text-brand-gold transition-colors font-sans text-sm tracking-widest uppercase">Details</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="flex items-center gap-2 text-brand-dark hover:text-brand-gold transition-colors">
            <ShoppingBag size={20} />
            <span className="font-sans text-sm font-semibold">Shop V.15</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col space-y-4">
          <a href="#home" className="text-brand-dark font-sans" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#details" className="text-brand-dark font-sans" onClick={() => setIsMobileMenuOpen(false)}>Collection</a>
          <a href="#specs" className="text-brand-dark font-sans" onClick={() => setIsMobileMenuOpen(false)}>Details</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;