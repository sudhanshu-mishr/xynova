
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Check, Cpu, Zap, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, 45]);
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  useEffect(() => {
    if (heroRef.current) {
      // Sophisticated text reveal
      const revealElements = heroRef.current.querySelectorAll('.reveal');
      gsap.fromTo(
        revealElements,
        {
          opacity: 0,
          y: 60,
          skewY: 3
        },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "expo.out",
          delay: 0.2
        }
      );

      // Section reveal animation
      const sections = document.querySelectorAll('section');
      sections.forEach((section, i) => {
        if (i === 0) return; // Skip hero
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Cinematic Hero */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-40">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>
           <img src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Hero background" />
        </div>

        <div className="relative z-10 text-center max-w-5xl px-4">
          <div className="overflow-hidden mb-6">
            <motion.p
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="text-cyan-400 font-bold uppercase tracking-[0.4em] text-[10px]"
            >
              Introducing Xynova Note
            </motion.p>
          </div>

          <h1 className="text-6xl md:text-[140px] font-black leading-[0.85] mb-8 hero-text reveal tracking-tighter">
            Write.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] animate-[shimmer_5s_infinite_linear]">Learn. Instantly.</span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 font-medium mb-12 max-w-3xl mx-auto reveal leading-relaxed">
            The world's first motion-sensing pen that digitizes your thoughts on any surface. No special paper required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal">
            <Link to="/pricing" className="bg-white text-black px-12 py-5 rounded-full font-bold text-lg hover:scale-105 hover:bg-cyan-400 transition-all flex items-center gap-3 group shadow-2xl shadow-white/10">
              Pre-order Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="flex items-center gap-4 text-white font-semibold group hover:text-cyan-400 transition-colors">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <Play className="w-6 h-6 fill-current" />
              </div>
              Watch the film
            </button>
          </div>
        </div>

        {/* Floating 3D Device Reveal */}
        <motion.div
          style={{ rotate, scale: smoothScale }}
          className="absolute -bottom-1/4 md:-bottom-1/2 left-1/2 -translate-x-1/2 w-full max-w-[1000px] pointer-events-none"
        >
          <img
            src="https://images.unsplash.com/photo-1583484963886-cfe2bef37d5b?auto=format&fit=crop&q=80&w=1200"
            className="w-full drop-shadow-[0_120px_120px_rgba(0,212,255,0.4)]"
            alt="Xynova Pen Render"
          />
        </motion.div>
      </section>

      {/* Stats Section with improved spacing */}
      <section className="py-48 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-[1024px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {[
              { label: 'Accuracy', value: '95%', sub: 'AI Handwriting Recognition' },
              { label: 'Surface', value: 'Any', sub: 'No Special Paper Required' },
              { label: 'Battery', value: '10h', sub: 'Continuous Performance' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <p className="text-[10px] font-bold uppercase text-zinc-400 tracking-[0.3em] mb-6 group-hover:text-cyan-500 transition-colors">{stat.label}</p>
                <p className="text-7xl font-black mb-3 tracking-tighter">{stat.value}</p>
                <p className="text-zinc-500 font-medium text-lg">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid - Enhanced Visual Depth */}
      <section className="py-48 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-32">
            <span className="text-cyan-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 inline-block">Innovations</span>
            <h2 className="text-6xl md:text-8xl font-bold hero-text mb-8 tracking-tighter">Designed for what's next.</h2>
            <p className="text-2xl text-zinc-500 font-medium max-w-2xl mx-auto">Magic hardware meets deep intelligence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-zinc-950 rounded-[60px] overflow-hidden group col-span-1 md:col-span-2 relative h-[700px] flex items-end p-20 text-white shadow-2xl shadow-black/20"
            >
              <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-[3s]" alt="Motion Fusion" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="relative z-10 max-w-2xl">
                <span className="bg-cyan-500 text-black px-5 py-1.5 rounded-full text-[10px] font-black uppercase mb-8 inline-block tracking-widest">The Intelligence</span>
                <h3 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">6-Axis Motion Fusion.</h3>
                <p className="text-zinc-300 text-2xl leading-relaxed">Proprietary IMU sensor algorithms track your pen strokes with surgical precision, even while the world moves around you.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-zinc-100 rounded-[50px] p-16 h-[600px] flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-10">
                  <Cpu className="w-8 h-8 text-cyan-500" />
                </div>
                <h3 className="text-4xl font-bold mb-6 tracking-tight">Neural Handwriting.</h3>
                <p className="text-zinc-500 text-xl leading-relaxed">Our models learn your unique signature. The more you write, the smarter the conversion becomes.</p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl h-56">
                <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Writing" />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-black text-white rounded-[50px] p-16 h-[600px] flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shadow-sm mb-10">
                  <Globe className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-4xl font-bold mb-6 tracking-tight">Cloud Native.</h3>
                <p className="text-zinc-400 text-xl leading-relaxed">Instant sync to Notion, Obsidian, and Slack. Your thoughts available across every platform instantly.</p>
              </div>
              <div className="flex gap-6">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center border border-white/5 hover:border-cyan-400 transition-colors"><Zap className="text-cyan-400" /></div>
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center font-bold border border-white/5">PDF</div>
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center font-bold border border-white/5">DOC</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-60 bg-[#f5f5f7] overflow-hidden text-center relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-7xl md:text-9xl font-black mb-16 hero-text tracking-tighter">Your next pen <br/><span className="text-zinc-400">is already here.</span></h2>
            <div className="flex flex-col items-center gap-8">
              <Link to="/pricing" className="bg-black text-white px-16 py-7 rounded-full font-bold text-2xl hover:scale-105 hover:bg-cyan-500 transition-all shadow-3xl shadow-black/30">
                Pre-order from ₹2,499
              </Link>
              <p className="text-zinc-500 font-medium text-lg">Free express delivery across India • 14-day trial</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
