import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="bg-white min-h-screen text-gray-900 font-sans selection:bg-brand-gold selection:text-white">
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-yellow-50 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-pink-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <Navbar />
      
      <div className="relative z-10">
        <HeroSection />
        
        {/* Additional "In the box" Section to emphasize the prompt's focus on the box */}
        <section className="py-20 bg-gray-50/50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">The Premium Box Experience</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                   Setiap helai Umamascarves V.15 dikemas dalam box kokoh eksklusif dengan desain motif yang senada. Hadiah sempurna untuk diri sendiri atau orang terkasih.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left">
                        <h3 className="text-xl font-bold mb-2 text-brand-dark">Proteksi Maksimal</h3>
                        <p className="text-gray-500">Box yang kokoh menjaga kualitas kain tetap prima saat pengiriman hingga sampai di tangan Anda.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left">
                        <h3 className="text-xl font-bold mb-2 text-brand-dark">Desain Senada</h3>
                        <p className="text-gray-500">Motif pada box didesain khusus mengikuti motif hijab di dalamnya, menambah nilai estetika koleksi Anda.</p>
                    </div>
                </div>
            </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default App;