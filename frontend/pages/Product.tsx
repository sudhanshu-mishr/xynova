
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Battery, Cpu, Layers, Maximize, RotateCw } from 'lucide-react';
import { PenViewer } from '../components/PenModel';

const Product: React.FC = () => {
  const [activeTab, setActiveTab] = useState('design');

  const tabs = [
    { id: 'design', label: 'Design', title: 'Aerospace Grade.', desc: 'Lightweight aluminum meets precision engineering. Built to last.', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1200' },
    { id: 'tech', label: 'Technology', title: 'Intelligence Inside.', desc: 'Dual IMU sensors working in perfect harmony with neural processors.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200' },
    { id: 'experience', label: 'Experience', title: 'Ink to Digital.', desc: '95% accuracy out of the box. Zero learning curve.', img: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&q=80&w=1200' }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Product Hero */}
      <section className="relative min-h-[90vh] bg-[#fafafa] overflow-hidden flex flex-col items-center py-20">
        <div className="text-center mb-4 relative z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black hero-text mb-6"
          >
            Xynova Note
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-zinc-500 font-medium"
          >
            Precision in every stroke.
          </motion.p>
        </div>

        {/* 3D Model Viewer Container */}
        <div className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center z-0">
          <PenViewer />

          {/* Floating UI Badges */}
          <div className="absolute top-1/2 left-10 md:left-20 -translate-y-1/2 p-6 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/50 hidden md:block shadow-xl">
             <div className="flex items-center gap-4 mb-4">
                <Battery className="text-cyan-500" />
                <span className="font-bold text-sm tracking-tight">10h Battery</span>
             </div>
             <div className="flex items-center gap-4">
                <RotateCw className="text-cyan-500" />
                <span className="font-bold text-sm tracking-tight">360° Tracking</span>
             </div>
          </div>

          <div className="absolute bottom-10 flex flex-col items-center gap-2 text-zinc-400">
            <div className="flex gap-4 items-center animate-bounce">
              <Maximize size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Interactive 3D View • Zoom to explore</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-4 relative z-10">
          <Link to="/pricing" className="bg-black text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-black/10">
            Pre-order Now
          </Link>
          <button className="text-cyan-600 font-bold flex items-center gap-1 hover:gap-3 transition-all">
            Watch the video <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Tabs / Features Section */}
      <section className="py-40">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex justify-center gap-12 mb-20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xl font-bold pb-4 border-b-2 transition-all ${activeTab === tab.id ? 'border-black text-black' : 'border-transparent text-zinc-400'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {tabs.filter(t => t.id === activeTab).map(tab => (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
              >
                <div>
                  <h2 className="text-5xl md:text-7xl font-bold hero-text mb-8">{tab.title}</h2>
                  <p className="text-2xl text-zinc-500 leading-relaxed mb-12">{tab.desc}</p>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                       <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center shrink-0"><Cpu className="w-5 h-5" /></div>
                       <div>
                          <p className="font-bold text-lg">Neural Processor</p>
                          <p className="text-zinc-500">Real-time stroke interpretation with zero lag.</p>
                       </div>
                    </li>
                    <li className="flex items-start gap-4">
                       <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center shrink-0"><Layers className="w-5 h-5" /></div>
                       <div>
                          <p className="font-bold text-lg">Unlimited Layers</p>
                          <p className="text-zinc-500">Organize your thoughts chronologically or by topic.</p>
                       </div>
                    </li>
                  </ul>
                </div>
                <div className="relative rounded-[40px] overflow-hidden shadow-2xl h-[600px]">
                  <img src={tab.img} className="w-full h-full object-cover" alt={tab.label} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Comparisons */}
      <section className="py-40 bg-zinc-50">
        <div className="max-w-[1024px] mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-20 hero-text">Which model is right for you?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[40px] shadow-sm flex flex-col items-center group">
               <motion.div whileHover={{ rotate: 15 }} className="w-48 h-48 mb-10">
                  <img src="https://images.unsplash.com/photo-1583484963886-cfe2bef37d5b?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-contain" />
               </motion.div>
               <h3 className="text-3xl font-bold mb-2">Xynova Note</h3>
               <p className="text-zinc-500 mb-8">₹2,499</p>
               <hr className="w-full mb-8 border-zinc-100" />
               <div className="space-y-4 mb-12 text-sm font-medium text-zinc-600">
                  <p>6-Axis Tracking</p>
                  <p>10h Battery</p>
                  <p>Any Surface Support</p>
               </div>
               <Link to="/pricing" className="bg-cyan-500 text-white px-10 py-3 rounded-full font-bold hover:bg-cyan-600 transition-all">Pre-order</Link>
            </div>
            <div className="bg-white p-12 rounded-[40px] shadow-sm flex flex-col items-center group">
               <motion.div whileHover={{ rotate: -15 }} className="w-48 h-48 mb-10">
                  <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-contain" />
               </motion.div>
               <h3 className="text-3xl font-bold mb-2">Note Pro</h3>
               <p className="text-zinc-500 mb-8">₹4,499</p>
               <hr className="w-full mb-8 border-zinc-100" />
               <div className="space-y-4 mb-12 text-sm font-medium text-zinc-600">
                  <p>9-Axis Ultra-Tracking</p>
                  <p>18h Battery</p>
                  <p>Haptic Feedback</p>
               </div>
               <Link to="/pricing" className="bg-cyan-500 text-white px-10 py-3 rounded-full font-bold hover:bg-cyan-600 transition-all">Pre-order Pro</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
