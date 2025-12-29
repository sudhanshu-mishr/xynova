
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import HowItWorks from './pages/HowItWorks';
import AppFeatures from './pages/AppFeatures';
import Pricing from './pages/Pricing';
import Support from './pages/Support';
import About from './pages/About';
import Blog from './pages/Blog';

// Smooth Scroll Restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// Animation Wrapper for Pages
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, filter: 'blur(10px)' }}
    animate={{ opacity: 1, filter: 'blur(0px)' }}
    exit={{ opacity: 0, filter: 'blur(10px)' }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const UseCases = () => (
  <PageTransition>
    <div className="pt-32 pb-40 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-32">
          <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 inline-block">Impact</span>
          <h1 className="text-7xl font-black hero-text mb-8">Built for everyone.</h1>
          <p className="text-2xl text-zinc-500 font-medium">From lecture halls to creative studios.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-12">
             <motion.div
               whileHover={{ y: -15 }}
               className="group overflow-hidden rounded-[50px] bg-zinc-50 h-[650px] relative shadow-2xl"
             >
                <img src="https://images.unsplash.com/photo-1434031213662-89307429f81c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 p-16 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent text-white">
                   <h3 className="text-5xl font-bold mb-6 tracking-tight">The Student.</h3>
                   <p className="text-zinc-300 text-xl font-medium leading-relaxed">Digest 4-hour lectures into searchable knowledge. Instant conversion for math, diagrams, and notes.</p>
                </div>
             </motion.div>
          </div>
          <div className="space-y-12 md:pt-48">
             <motion.div
               whileHover={{ y: -15 }}
               className="group overflow-hidden rounded-[50px] bg-zinc-50 h-[650px] relative shadow-2xl"
             >
                <img src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 p-16 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent text-white">
                   <h3 className="text-5xl font-bold mb-6 tracking-tight">The Executive.</h3>
                   <p className="text-zinc-300 text-xl font-medium leading-relaxed">Lead the conversation, not the keyboard. Meeting summaries synced to your CRM before you leave the room.</p>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </div>
  </PageTransition>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/product" element={<PageTransition><Product /></PageTransition>} />
        <Route path="/how-it-works" element={<PageTransition><HowItWorks /></PageTransition>} />
        <Route path="/app" element={<PageTransition><AppFeatures /></PageTransition>} />
        <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
        <Route path="/support" element={<PageTransition><Support /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/use-cases" element={<UseCases />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
