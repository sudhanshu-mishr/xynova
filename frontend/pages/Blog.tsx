import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    fetch(`${API_URL}/api/blog-posts`)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch posts", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="pt-32 text-center">Loading...</div>;
  }

  if (posts.length === 0) {
    return <div className="pt-32 text-center">No posts found.</div>;
  }

  return (
    <div className="pt-32 bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4">
        <header className="mb-24">
          <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 inline-block">The Newsroom</span>
          <h1 className="text-6xl md:text-8xl font-black hero-text mb-8">Journal.</h1>
          <p className="text-2xl text-zinc-500 font-medium max-w-2xl">Reflections on intelligence, hardware, and the future of human output.</p>
        </header>

        {/* Featured Post */}
        {posts[0] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative h-[600px] rounded-[50px] overflow-hidden mb-32 cursor-pointer shadow-2xl"
          >
            <img src={posts[0].image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Featured" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-12 flex flex-col justify-end">
              <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-4">{posts[0].category}</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">{posts[0].title}</h2>
              <div className="flex items-center gap-8 text-zinc-300 text-sm">
                <span className="flex items-center gap-2"><Calendar size={14} /> {posts[0].date}</span>
                <span className="flex items-center gap-2"><User size={14} /> {posts[0].author}</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-40">
          {posts.slice(1).map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="aspect-[16/10] rounded-[40px] overflow-hidden mb-8 shadow-xl">
                <img src={post.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={post.title} />
              </div>
              <span className="text-cyan-500 font-bold uppercase tracking-widest text-[10px] mb-4 inline-block">{post.category}</span>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-500 transition-colors">{post.title}</h3>
              <p className="text-zinc-500 text-lg leading-relaxed mb-6">{post.excerpt}</p>
              <button className="flex items-center gap-2 font-bold text-black group-hover:gap-4 transition-all">
                Read Story <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
