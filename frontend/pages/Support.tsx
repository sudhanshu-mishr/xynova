import React, { useState, useEffect } from 'react';
import { Search, MessageCircle, Phone, Mail, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  id: string;
  q: string;
  a: string;
}

const Support: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/faqs')
      .then(res => res.json())
      .then(data => {
        setFaqs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch FAQs", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-20 bg-white">
      {/* Support Hero */}
      <section className="bg-[#f5f5f7] py-40">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold hero-text mb-12">Xynova Support.</h1>
          <div className="relative mb-20 group">
             <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-cyan-500 transition-colors" />
             <input
                type="text"
                placeholder="Search topics, setup guides..."
                className="w-full bg-white h-16 rounded-2xl px-16 text-xl border-none focus:ring-2 focus:ring-cyan-500 shadow-sm transition-all"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-8 rounded-3xl shadow-sm cursor-pointer">
                <MessageCircle className="w-8 h-8 text-cyan-500 mb-4 mx-auto" />
                <p className="font-bold">Chat with us</p>
             </motion.div>
             <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-8 rounded-3xl shadow-sm cursor-pointer">
                <Phone className="w-8 h-8 text-cyan-500 mb-4 mx-auto" />
                <p className="font-bold">Call 1800-XYNOVA</p>
             </motion.div>
             <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-8 rounded-3xl shadow-sm cursor-pointer">
                <Mail className="w-8 h-8 text-cyan-500 mb-4 mx-auto" />
                <p className="font-bold">Email Support</p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-40">
        <div className="max-w-[800px] mx-auto px-4">
           <h2 className="text-4xl font-bold mb-16 hero-text">Frequently Asked Questions.</h2>
           {loading ? (
             <p className="text-center text-xl text-zinc-500">Loading FAQs...</p>
           ) : (
             <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={faq.id} className="border-b border-zinc-100 last:border-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full py-8 flex justify-between items-center text-left hover:text-cyan-500 transition-colors"
                    >
                      <span className="text-2xl font-bold tracking-tight">{faq.q}</span>
                      {openFaq === idx ? <ChevronUp className="text-zinc-400" /> : <ChevronDown className="text-zinc-400" />}
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-8 text-xl text-zinc-500 leading-relaxed">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
             </div>
           )}
        </div>
      </section>

      {/* Community Section */}
      <section className="py-40 bg-zinc-950 text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-8 hero-text">Join the Community.</h2>
            <p className="text-xl text-zinc-400 mb-12">Connect with over 10,000 students and creators using Xynova to build the future.</p>
            <div className="flex justify-center gap-8">
               <button className="text-white font-bold flex items-center gap-2 hover:text-cyan-400 transition-colors">Visit Forum <ChevronRight className="w-5 h-5" /></button>
               <button className="text-white font-bold flex items-center gap-2 hover:text-cyan-400 transition-colors">Developer Docs <ChevronRight className="w-5 h-5" /></button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Support;
