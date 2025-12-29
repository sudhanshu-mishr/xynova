
import React from 'react';
import { Check, Info, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  return (
    <div className="pt-32 bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-24">
          <h1 className="text-6xl md:text-7xl font-bold hero-text mb-6">Choose your Note.</h1>
          <p className="text-xl text-zinc-500">Free delivery and 14-day returns on every order.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {/* Note */}
          <motion.div
            whileHover={{ y: -10 }}
            className="flex flex-col h-full bg-[#fbfbfd] p-10 rounded-[40px] border border-zinc-100"
          >
            <div className="mb-10">
              <span className="text-xs font-black uppercase text-zinc-400 tracking-widest mb-2 block">Standard</span>
              <h2 className="text-4xl font-bold mb-2">Xynova Note</h2>
              <p className="text-3xl font-bold text-zinc-400">₹2,499</p>
            </div>
            <ul className="space-y-6 mb-12 flex-grow">
              <li className="flex gap-4 text-zinc-600 font-medium">
                <Check className="text-cyan-500 w-5 h-5 shrink-0" />
                <span>Basic IMU Tracking</span>
              </li>
              <li className="flex gap-4 text-zinc-600 font-medium">
                <Check className="text-cyan-500 w-5 h-5 shrink-0" />
                <span>10h Continuous Battery</span>
              </li>
              <li className="flex gap-4 text-zinc-600 font-medium">
                <Check className="text-cyan-500 w-5 h-5 shrink-0" />
                <span>Single Device Pairing</span>
              </li>
            </ul>
            <button className="w-full bg-cyan-500 text-white py-4 rounded-full font-bold hover:scale-105 transition-all">
              Pre-order
            </button>
          </motion.div>

          {/* Bundle */}
          <motion.div
            whileHover={{ y: -10 }}
            className="flex flex-col h-full bg-black text-white p-10 rounded-[40px] relative shadow-2xl shadow-cyan-500/10"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black px-6 py-1 rounded-full text-[10px] font-black uppercase">Most Popular</div>
            <div className="mb-10">
              <span className="text-xs font-black uppercase text-zinc-500 tracking-widest mb-2 block">The Experience</span>
              <h2 className="text-4xl font-bold mb-2">Creator Bundle</h2>
              <p className="text-3xl font-bold text-cyan-400">₹2,999</p>
            </div>
            <ul className="space-y-6 mb-12 flex-grow">
              <li className="flex gap-4 font-medium">
                <Check className="text-cyan-400 w-5 h-5 shrink-0" />
                <span>Xynova Note Hardware</span>
              </li>
              <li className="flex gap-4 font-medium">
                <Check className="text-cyan-400 w-5 h-5 shrink-0" />
                <span>6 Months App Pro Subscription</span>
              </li>
              <li className="flex gap-4 font-medium">
                <Check className="text-cyan-400 w-5 h-5 shrink-0" />
                <span>Executive Carrying Sleeve</span>
              </li>
              <li className="flex gap-4 font-medium">
                <Check className="text-cyan-400 w-5 h-5 shrink-0" />
                <span>Priority Support</span>
              </li>
            </ul>
            <button className="w-full bg-white text-black py-4 rounded-full font-bold hover:scale-105 transition-all">
              Pre-order Bundle
            </button>
          </motion.div>

          {/* Pro */}
          <motion.div
            whileHover={{ y: -10 }}
            className="flex flex-col h-full bg-[#fbfbfd] p-10 rounded-[40px] border border-zinc-100"
          >
            <div className="mb-10">
              <span className="text-xs font-black uppercase text-zinc-400 tracking-widest mb-2 block">Performance</span>
              <h2 className="text-4xl font-bold mb-2">Note Pro</h2>
              <p className="text-3xl font-bold text-zinc-400">₹4,499</p>
            </div>
            <ul className="space-y-6 mb-12 flex-grow">
              <li className="flex gap-4 text-zinc-600 font-medium">
                <Check className="text-cyan-500 w-5 h-5 shrink-0" />
                <span>9-Axis Ultra Tracking</span>
              </li>
              <li className="flex gap-4 text-zinc-600 font-medium">
                <Check className="text-cyan-500 w-5 h-5 shrink-0" />
                <span>18h High-Res Battery</span>
              </li>
              <li className="flex gap-4 text-zinc-600 font-medium">
                <Check className="text-cyan-500 w-5 h-5 shrink-0" />
                <span>Multi-Device Sync</span>
              </li>
              <li className="flex gap-4 text-zinc-600 font-medium">
                <Check className="text-cyan-500 w-5 h-5 shrink-0" />
                <span>Haptic Writing Feedback</span>
              </li>
            </ul>
            <button className="w-full bg-cyan-500 text-white py-4 rounded-full font-bold hover:scale-105 transition-all">
              Pre-order Pro
            </button>
          </motion.div>
        </div>

        {/* Apple-style Table */}
        <section className="py-20 border-t border-zinc-100">
           <h3 className="text-3xl font-bold mb-16 hero-text text-center">Compare models in detail.</h3>
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead>
                    <tr className="border-b border-zinc-100">
                       <th className="py-8 text-zinc-400 font-medium uppercase text-xs tracking-widest">Feature</th>
                       <th className="py-8 font-bold text-xl">Note</th>
                       <th className="py-8 font-bold text-xl">Note Pro</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
                       <td className="py-8 font-bold text-lg">Tracking Sensor</td>
                       <td className="py-8 text-zinc-600">6-Axis IMU</td>
                       <td className="py-8 text-zinc-600">9-Axis Ultra High Precision</td>
                    </tr>
                    <tr className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
                       <td className="py-8 font-bold text-lg">Pressure Sensitivity</td>
                       <td className="py-8 text-zinc-600">Standard</td>
                       <td className="py-8 text-zinc-600">4096 Levels</td>
                    </tr>
                    <tr className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
                       <td className="py-8 font-bold text-lg">Storage</td>
                       <td className="py-8 text-zinc-600">50 Pages (Offline)</td>
                       <td className="py-8 text-zinc-600">250 Pages (Offline)</td>
                    </tr>
                    <tr className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
                       <td className="py-8 font-bold text-lg">Battery Life</td>
                       <td className="py-8 text-zinc-600">10 Hours</td>
                       <td className="py-8 text-zinc-600">18 Hours</td>
                    </tr>
                 </tbody>
              </table>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
