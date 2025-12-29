
import React from 'react';
import { Smartphone, Laptop, Cloud, Search, Download, ChevronRight, Zap, Target, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const AppFeatures: React.FC = () => {
  return (
    <div className="pt-24 bg-white overflow-hidden">
      {/* Cinematic Hero */}
      <section className="py-24 text-center">
        <div className="max-w-[1024px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 inline-block">Xynova Intelligence</span>
            <h1 className="text-6xl md:text-8xl font-black hero-text mb-8 tracking-tighter">
              Software as refined <br />as the hardware.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Xynova OS transforms every stroke into a searchable, structured, and collaborative digital asset.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Feature Reveal */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mock iPhone Frame */}
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative w-[320px] h-[640px] bg-black rounded-[50px] border-[8px] border-zinc-900 shadow-2xl p-4 overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 rounded-b-2xl z-20" />
              <div className="h-full w-full bg-zinc-100 rounded-[34px] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover opacity-90"
                  alt="App interface"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">Real-time Capture</p>
                  <div className="space-y-2">
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '80%' }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-full bg-cyan-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col justify-center space-y-12">
            {[
              {
                icon: <Search className="text-cyan-500" />,
                title: "Semantic Search",
                desc: "Search by keyword, date, or even the intent of your notes. Our LLM-powered engine finds the logic in your lines."
              },
              {
                icon: <Zap className="text-cyan-500" />,
                title: "Instant Digitization",
                desc: "Handwriting is converted to typed text in real-time. Export directly to Word, Notion, or Slack with 95% accuracy."
              },
              {
                icon: <Target className="text-cyan-500" />,
                title: "Smart Tags",
                desc: "The app recognizes when you're writing a task, a deadline, or a title, and automatically organizes your calendar."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">{feature.title}</h3>
                    <p className="text-zinc-500 text-lg leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Features Showcase */}
      <section className="py-40 bg-zinc-950 text-white rounded-[60px] mx-4 mb-12">
        <div className="max-w-[1024px] mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-bold hero-text mb-12">Take it further with Pro.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div className="p-10 bg-white/5 rounded-3xl border border-white/10">
               <Layers className="text-cyan-400 mb-6" size={32} />
               <h4 className="text-xl font-bold mb-4">Unlimited Canvas</h4>
               <p className="text-zinc-400">Collaborate with your team on a shared digital whiteboard in real-time.</p>
            </div>
            <div className="p-10 bg-white/5 rounded-3xl border border-white/10">
               <Cloud className="text-cyan-400 mb-6" size={32} />
               <h4 className="text-xl font-bold mb-4">Vault Storage</h4>
               <p className="text-zinc-400">End-to-end encrypted backup for all your sensitive documentation.</p>
            </div>
            <div className="p-10 bg-white/5 rounded-3xl border border-white/10">
               <Target className="text-cyan-400 mb-6" size={32} />
               <h4 className="text-xl font-bold mb-4">Obsidian Integration</h4>
               <p className="text-zinc-400">Native bidirectional sync with the world's best personal knowledge tools.</p>
            </div>
          </div>
          <div className="mt-20">
             <button className="bg-white text-black px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl">
               Start Pro Trial – ₹99/mo
             </button>
             <p className="mt-6 text-zinc-500 text-sm italic">6 months included with Creator Bundle.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppFeatures;
