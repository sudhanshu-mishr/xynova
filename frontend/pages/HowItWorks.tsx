
import React from 'react';
import { PenTool, Bluetooth, Cpu, Layers, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Click & Write",
      desc: "Simply click the top of the pen and start writing on any paper, notebook, or flat surface. No cameras or receiver pads needed.",
      icon: <PenTool className="w-8 h-8" />
    },
    {
      title: "Real-time Sync",
      desc: "Xynova's Bluetooth 5.2 module streams your stroke coordinates to the app instantly with zero noticeable latency.",
      icon: <Bluetooth className="w-8 h-8" />
    },
    {
      title: "AI Processing",
      desc: "Our on-device and cloud-based neural models interpret your unique handwriting style and convert it to digital text.",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: "Smart Organize",
      desc: "AI automatically tags your notes by topic, recognizes dates for your calendar, and makes every word searchable.",
      icon: <Layers className="w-8 h-8" />
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Cinematic Hero */}
      <section className="bg-black text-white py-32 md:py-48 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-6 inline-block"
          >
            The Technology
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 hero-text"
          >
            The Magic of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Motion Sensor Fusion.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-medium"
          >
            Most smart pens use cameras that need special dotted paper. Xynova uses physics. Our proprietary 6-axis motion tracking calculates your pen's position 200 times per second.
          </motion.p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="text-[140px] font-black text-zinc-50 absolute -top-20 -left-6 z-0 pointer-events-none select-none">
                  {idx + 1}
                </div>
                <div className="relative z-10 pt-12">
                  <div className="w-16 h-16 bg-zinc-100 text-cyan-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500 shadow-sm">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black tracking-tight">{step.title}</h3>
                  <p className="text-zinc-500 text-lg leading-relaxed font-medium">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Tech Explainer */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white aspect-square lg:aspect-auto h-full min-h-[500px]"
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
              alt="Tech Diagram"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
          <div>
            <span className="text-cyan-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-6 inline-block">Engineering</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 hero-text">Why no special paper?</h2>
            <p className="text-xl text-zinc-500 mb-10 font-medium">Traditional smart pens rely on ODR (Optical Digital Recognition) which requires tiny dots printed on every page. Xynova's <strong>Motion-Sync Technology</strong> breaks free from the grid.</p>
            <ul className="space-y-10">
              <li className="flex gap-6">
                <div className="shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold shadow-lg">1</div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-2">Relative Origin Calibration</h4>
                  <p className="text-zinc-500 leading-relaxed font-medium">Every time you start writing, the IMU sets a new zero-point. This adaptive baseline allows for pinpoint accuracy on everything from sticky notes to giant whiteboard surfaces.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="shrink-0 w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg shadow-cyan-500/20">2</div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-2">Drift Correction Algorithms</h4>
                  <p className="text-zinc-500 leading-relaxed font-medium">Hand tremors and sensor drift are the enemies of motion tracking. Our AI models filter out the noise, ensuring your digital ink is as clean as your physical stroke.</p>
                </div>
              </li>
            </ul>
            <div className="mt-12">
              <button className="flex items-center gap-2 text-cyan-600 font-bold text-lg hover:gap-4 transition-all">
                Read the technical whitepaper <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 hero-text">Experience the physics of writing.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="/#/pricing" className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-cyan-500 transition-all shadow-xl shadow-black/10">
              Pre-order Note
            </a>
            <a href="/#/product" className="text-black font-bold flex items-center gap-1 hover:gap-3 transition-all text-lg">
              Explore Product <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
