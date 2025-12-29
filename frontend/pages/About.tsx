
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Zap, Globe, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Editorial Hero */}
      <section className="py-40 bg-zinc-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500 blur-[120px] rounded-full animate-pulse" />
        </div>

        <div className="max-w-[1024px] mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cyan-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 inline-block">Our Identity</span>
            <h1 className="text-6xl md:text-9xl font-black hero-text mb-12 leading-[0.9]">
              Think faster <br />than you type.
            </h1>
            <p className="text-2xl md:text-3xl text-zinc-400 font-medium max-w-2xl leading-relaxed">
              We are engineers, designers, and creators building the bridge between the physical and digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Mission Section */}
      <section className="py-40">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000" />
            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200"
              className="relative rounded-[60px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              alt="Engineering"
            />
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-10 hero-text">Democratizing intelligence.</h2>
            <p className="text-xl text-zinc-500 leading-relaxed mb-8">
              At Xynova, we believe that the most natural way to express a thought is through a pen. But the most efficient way to organize it is through AI.
            </p>
            <p className="text-xl text-zinc-500 leading-relaxed mb-12">
              Our mission is to build tools that don't get in your way. Tools that feel invisible, yet possess the power to transform how we learn and collaborate globally.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-bold mb-2">1,000+</h4>
                <p className="text-zinc-400 font-medium uppercase text-xs tracking-widest">Early Creators</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold mb-2">Made in</h4>
                <p className="text-zinc-400 font-medium uppercase text-xs tracking-widest">Bengaluru, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-40 bg-zinc-50">
        <div className="max-w-[1024px] mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold hero-text">The Xynova Standard.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: <Target className="text-cyan-500" />, title: "Precision First", desc: "We obsess over microns. If the stroke isn't perfect, the tool isn't done." },
              { icon: <Globe className="text-cyan-500" />, title: "Open Ecosystem", desc: "Your data belongs to you. We sync with your favorite tools, no silos." },
              { icon: <Shield className="text-cyan-500" />, title: "Deep Privacy", desc: "On-device processing ensures your thoughts stay between you and your pen." }
            ].map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-8 border border-zinc-100">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* "Made in India" Section */}
      <section className="py-40 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Heart className="w-12 h-12 text-red-500 mb-8 mx-auto fill-current" />
          <h2 className="text-5xl md:text-7xl font-bold hero-text mb-8">Designed and Crafted in India.</h2>
          <p className="text-2xl text-zinc-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Bengaluru's tech legacy meets global design standards. We are proud to contribute to the 'Make in India' initiative with a product that competes on the world stage.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      </section>
    </div>
  );
};

export default About;
