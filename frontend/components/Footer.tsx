
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, Github, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f5f7] pt-32 pb-20">
      <div className="max-w-[1024px] mx-auto px-4">

        {/* Newsletter Section */}
        <div className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-4 tracking-tight">Stay updated.</h3>
            <p className="text-zinc-500 text-lg">Receive exclusive launch offers and product updates.</p>
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Email address"
              className="w-full h-16 bg-white rounded-2xl px-8 pr-20 text-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-sm"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-cyan-500 transition-colors">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="pb-8 border-b border-zinc-200 mb-12 text-[12px] text-zinc-500 leading-relaxed">
          <p className="mb-4">1. Monthly pricing available for ₹99/mo after 6 months of trial included in the Creator Bundle. Subscriptions can be canceled at any time in the Xynova App.</p>
          <p>2. Handwriting recognition accuracy depends on individual writing styles and sensor calibration. Recommended for use with original Xynova tips for best performance.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
           <div className="flex flex-col space-y-3">
              <h4 className="text-xs font-bold text-zinc-800 uppercase tracking-widest mb-4">Shop and Learn</h4>
              <Link to="/product" className="text-[12px] text-zinc-600 hover:text-black">Xynova Note</Link>
              <Link to="/pricing" className="text-[12px] text-zinc-600 hover:text-black">Accessories</Link>
              <Link to="/pricing" className="text-[12px] text-zinc-600 hover:text-black">Bundle Offers</Link>
           </div>
           <div className="flex flex-col space-y-3">
              <h4 className="text-xs font-bold text-zinc-800 uppercase tracking-widest mb-4">Support</h4>
              <Link to="/support" className="text-[12px] text-zinc-600 hover:text-black">Get Help</Link>
              <Link to="/support" className="text-[12px] text-zinc-600 hover:text-black">Order Status</Link>
              <Link to="/support" className="text-[12px] text-zinc-600 hover:text-black">Returns</Link>
           </div>
           <div className="flex flex-col space-y-3">
              <h4 className="text-xs font-bold text-zinc-800 uppercase tracking-widest mb-4">Company</h4>
              <Link to="/about" className="text-[12px] text-zinc-600 hover:text-black">About Xynova</Link>
              <Link to="/blog" className="text-[12px] text-zinc-600 hover:text-black">Newsroom</Link>
              <Link to="/roadmap" className="text-[12px] text-zinc-600 hover:text-black">Roadmap</Link>
           </div>
           <div className="flex flex-col space-y-3">
              <h4 className="text-xs font-bold text-zinc-800 uppercase tracking-widest mb-4">Account</h4>
              <button className="text-[12px] text-zinc-600 hover:text-black text-left">Manage Account</button>
              <button className="text-[12px] text-zinc-600 hover:text-black text-left">Xynova ID</button>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[12px] text-zinc-500">
           <div className="flex flex-col gap-2 mb-6 md:mb-0">
             <p>Copyright © 2024 Xynova Technologies Pvt Ltd. All rights reserved.</p>
             <div className="flex gap-4">
                <Twitter size={14} className="hover:text-black cursor-pointer" />
                <Instagram size={14} className="hover:text-black cursor-pointer" />
                <Linkedin size={14} className="hover:text-black cursor-pointer" />
                <Github size={14} className="hover:text-black cursor-pointer" />
             </div>
           </div>
           <div className="flex space-x-6">
              <a href="#" className="hover:text-black">Privacy Policy</a>
              <a href="#" className="hover:text-black">Terms of Use</a>
              <a href="#" className="hover:text-black">Sales Policy</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
