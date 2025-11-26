import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Box, Scissors, Maximize2 } from 'lucide-react';
import { VARIANTS, WHATSAPP_LINK } from '../constants';
import { ProductVariant } from '../types';

const HeroSection: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(VARIANTS[0]);

  return (
    <section id="home" className="min-h-screen pt-24 pb-12 flex flex-col lg:flex-row items-center container mx-auto px-6 gap-12">
      
      {/* Left Column: Text & CTA */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-8 z-10"
      >
        <div className="space-y-2">
           <span className="inline-block px-3 py-1 bg-brand-light text-brand-gold border border-brand-gold/20 rounded-full text-xs font-bold tracking-widest uppercase">
             New Arrival
           </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
            Hijab Box Motif <br/>
            <span className="italic text-brand-gold">Digital Scarves V.15</span>
          </h1>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed font-light max-w-xl">
          Digital Scarves adalah produk premium dari Umama Scarves. Menggunakan Umamascarves box yang kokoh dengan desain motif yang sesuai dengan motif hijab. Harga terjangkau dengan kualitas yang premium.
        </p>

        <p className="text-gray-600 leading-relaxed font-light max-w-xl">
          Memiliki material kerudung yang lembut dan sangat nyaman untuk digunakan sehari-hari. Cocok sekali untuk kamu jadikan sebagai hadiah untuk orang terkasih.
        </p>

        {/* Color Selection */}
        <div className="space-y-3">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Select Color</p>
          <div className="flex gap-4">
            {VARIANTS.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className={`w-10 h-10 rounded-full border-2 transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
                  selectedVariant.id === variant.id ? 'border-brand-dark ring-2 ring-brand-light' : 'border-transparent'
                }`}
                aria-label={`Select ${variant.name}`}
              >
                <span 
                  className="w-8 h-8 rounded-full block shadow-sm"
                  style={{ backgroundColor: variant.colorCode }}
                />
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-500 font-serif italic">{selectedVariant.name}</p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-b border-gray-100 py-6">
           <div className="flex items-center gap-3">
             <div className="p-2 bg-gray-50 rounded-lg text-gray-600">
                <Box size={20} />
             </div>
             <div>
               <p className="text-xs text-gray-400 uppercase tracking-wide">Material</p>
               <p className="font-semibold text-gray-800">Voal Digital Premium</p>
             </div>
           </div>
           <div className="flex items-center gap-3">
             <div className="p-2 bg-gray-50 rounded-lg text-gray-600">
                <Maximize2 size={20} />
             </div>
             <div>
               <p className="text-xs text-gray-400 uppercase tracking-wide">Size</p>
               <p className="font-semibold text-gray-800">110 x 110 cm</p>
             </div>
           </div>
           <div className="flex items-center gap-3">
             <div className="p-2 bg-gray-50 rounded-lg text-gray-600">
                <Scissors size={20} />
             </div>
             <div>
               <p className="text-xs text-gray-400 uppercase tracking-wide">Finishing</p>
               <p className="font-semibold text-gray-800">Laser Cut</p>
             </div>
           </div>
        </div>

        {/* CTA */}
        <div className="space-y-4 pt-4">
           <p className="text-sm text-gray-500 italic">
             Sangat mudah untuk mendapatkan hijab ini. Cukup ikuti arahan dan baca penjelasan.
           </p>
           <a 
             href={WHATSAPP_LINK}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-green-200 transition-all hover:translate-y-[-2px] hover:shadow-xl w-full md:w-auto justify-center"
           >
             <MessageCircle size={24} />
             <span>Join Sekarang</span>
           </a>
        </div>
      </motion.div>

      {/* Right Column: Dynamic Image */}
      <motion.div 
        className="flex-1 relative w-full h-[500px] md:h-[700px] bg-brand-light rounded-3xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedVariant.id}
            src={selectedVariant.imageUrl}
            alt={selectedVariant.imageDescription}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        
        {/* Decorative Badge */}
        <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-[150px]">
          <p className="font-serif font-bold text-2xl text-brand-dark">V.15</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest">US Series</p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;