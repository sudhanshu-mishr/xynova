
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PenTool, ShoppingBag, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Store', path: '/product' },
    { name: 'Hardware', path: '/how-it-works' },
    { name: 'Software', path: '/app' },
    { name: 'Stories', path: '/use-cases' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-700 ease-in-out ${scrolled ? 'apple-blur h-11' : 'bg-transparent h-16'}`}>
        <div className="absolute bottom-0 left-0 h-[1px] bg-cyan-500/30 transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
        <div className="max-w-[1024px] mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-5 h-5 bg-black text-white rounded-sm flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                <PenTool className="w-3 h-3" />
              </div>
              <span className="text-[12px] font-bold tracking-widest uppercase transition-colors group-hover:text-cyan-500">XYNOVA</span>
            </Link>

            <div className="hidden md:flex items-center space-x-9">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[12px] font-medium tracking-tight transition-all hover:text-cyan-500 ${
                    location.pathname === link.path ? 'text-black opacity-100' : 'text-zinc-500 opacity-80'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center space-x-7 pl-4 border-l border-zinc-200">
                <button className="text-zinc-500 hover:text-black transition-colors"><Search size={14} /></button>
                <Link to="/pricing" className="text-zinc-500 hover:text-black transition-colors"><ShoppingBag size={14} /></Link>
              </div>
            </div>

            <div className="md:hidden flex items-center space-x-6">
              <Link to="/pricing"><ShoppingBag size={16} className="text-zinc-500" /></Link>
              <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-500">
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Product-Specific Subnav (Sticks below main nav) */}
      {location.pathname === '/product' && (
        <div className="fixed top-11 w-full z-[90] apple-blur border-b border-zinc-200 hidden md:block">
          <div className="max-w-[1024px] mx-auto px-4 h-11 flex justify-between items-center">
            <h2 className="text-lg font-bold tracking-tight">Xynova Note</h2>
            <div className="flex items-center space-x-6">
              <span className="text-xs text-zinc-500 font-medium">Overview</span>
              <span className="text-xs text-zinc-500 hover:text-cyan-500 cursor-pointer transition-colors">Tech Specs</span>
              <Link to="/pricing" className="bg-cyan-500 text-white text-[11px] font-bold px-3 py-1 rounded-full hover:bg-cyan-600 transition-colors">Buy</Link>
            </div>
          </div>
        </div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 bg-white z-[98] px-10 pt-24"
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-bold text-zinc-900 border-b border-zinc-100 pb-4"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
