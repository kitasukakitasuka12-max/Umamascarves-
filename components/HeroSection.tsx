import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Tag, CheckCircle } from 'lucide-react';
import { VARIANTS, WHATSAPP_LINK } from '../constants';
import { ProductVariant } from '../types';

const HeroSection: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(VARIANTS[0]);

  return (
    <section id="home" className="min-h-screen pt-24 pb-12 flex flex-col lg:flex-row items-center container mx-auto px-6 gap-12 bg-white">
      
      {/* Left Column: Text & CTA */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6 z-10"
      >
        <div className="space-y-2">
           <span className="inline-block px-3 py-1 bg-white text-brand-gold border border-brand-gold/30 rounded-full text-xs font-bold tracking-widest uppercase">
             Premium Collection
           </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            Umamascarves - <br/>
            <span className="text-brand-gold">Hijab Box Motif Digital Scarves V.15</span>
          </h1>
        </div>

        <div className="space-y-4 text-gray-600 leading-relaxed font-light text-lg">
          <p>
            Digital Scarves adalah produk premium dari Umama Scarves. Menggunakan Umamascarves box yang kokoh dengan desain motif yang sesuai dengan motif hijab. Harga terjangkau dengan kualitas yang premium.
          </p>
          <p>
            Memiliki material kerudung yang lembut dan sangat nyaman untuk digunakan sehari-hari. Cocok sekali untuk kamu jadikan sebagai hadiah untuk orang terkasih.
          </p>
        </div>

        {/* Color Selection */}
        <div className="space-y-3 pt-2">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Pilih Warna</p>
          <div className="flex gap-4">
            {VARIANTS.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className={`w-12 h-12 rounded-full border-2 transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
                  selectedVariant.id === variant.id ? 'border-brand-gold ring-2 ring-brand-light ring-offset-2' : 'border-gray-200'
                }`}
                aria-label={`Select ${variant.name}`}
              >
                <span 
                  className="w-9 h-9 rounded-full block shadow-sm"
                  style={{ backgroundColor: variant.colorCode }}
                />
              </button>
            ))}
          </div>
          <p className="text-sm text-brand-gold font-serif italic">{selectedVariant.name}</p>
        </div>

        {/* Specs Grid */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-4">
           <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-3">
              <Tag size={18} className="text-brand-gold"/>
              <h3 className="font-bold text-brand-dark uppercase tracking-wide text-sm">Digital Scarves – US Series</h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="space-y-1">
               <p className="text-xs text-gray-400 uppercase tracking-wide">Bahan</p>
               <p className="font-bold text-gray-800 text-sm">Voal Digital Premium</p>
             </div>
             <div className="space-y-1">
               <p className="text-xs text-gray-400 uppercase tracking-wide">Ukuran</p>
               <p className="font-bold text-gray-800 text-sm">110 x 110 cm</p>
             </div>
             <div className="space-y-1">
               <p className="text-xs text-gray-400 uppercase tracking-wide">Pinggir</p>
               <p className="font-bold text-gray-800 text-sm">Laser Cut</p>
             </div>
           </div>
        </div>

        {/* CTA */}
        <div className="space-y-6 pt-4">
           <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg border border-gray-100">
              <CheckCircle size={24} className="text-brand-gold shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600 italic">
                Sangat mudah untuk mendapatkan hijab Umamascarves Hijab Box Motif Digital Scarves, cukup ikuti arahan yang ada dan membaca setiap penjelasan yang diberikan.
              </p>
           </div>
           
           <a 
             href={WHATSAPP_LINK}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-green-100 transition-all hover:translate-y-[-2px] hover:shadow-xl w-full md:w-auto justify-center group"
           >
             <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
             <span>Join Grup WhatsApp</span>
           </a>
        </div>
      </motion.div>

      {/* Right Column: Dynamic Image */}
      <motion.div 
        className="flex-1 relative w-full aspect-square md:h-[650px] bg-white rounded-3xl overflow-hidden shadow-2xl shadow-gray-100 border border-gray-50"
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
        <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white">
          <p className="font-serif font-bold text-3xl text-brand-dark">V.15</p>
          <div className="h-0.5 w-12 bg-brand-gold my-2"></div>
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Limited Edition</p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
