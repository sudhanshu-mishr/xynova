import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const posts = [
    {
      title: "The Future of Note-Taking is Motion",
      excerpt: "Why traditional tablets fail to capture the kinetic energy of human thought, and how IMU sensors change everything.",
      date: "Oct 24, 2024",
      author: "Arjun V.",
      category: "Engineering",
      image: "https://images.unsplash.com/photo-1503551723145-6c040742065b?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Why Paper + AI Beats Digital-Only",
      excerpt: "A deep dive into the haptic benefits of writing on physical paper vs. a glass screen.",
      date: "Nov 02, 2024",
      author: "Sarah J.",
      category: "Design",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "5 Ways Xynova Note Saves You Hours",
      excerpt: "From automated task extraction to semantic search, discover the power of intelligent handwriting.",
      date: "Nov 15, 2024",
      author: "Kabir M.",
      category: "Productivity",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  for (const post of posts) {
    await prisma.blogPost.create({
      data: post,
    });
  }

  const faqs = [
    { question: "Does it really work on any paper?", answer: "Yes. Xynova Note uses relative motion sensing. It calibrates every time you touch the tip to a surface, meaning your notebook, legal pad, or even a piece of wood works perfectly." },
    { question: "Is the app free?", answer: "The basic Xynova OS is free for all users. We offer a Pro subscription (₹99/mo) for unlimited cloud sync, handwriting-to-LaTeX conversion, and enterprise security features." },
    { question: "What is the return policy?", answer: "We offer a 14-day 'no questions asked' return policy. If you don't love it, we'll pick it up and refund you 100%." },
    { question: "How long does shipping take?", answer: "All orders are processed in 24 hours. Delivery takes 2-4 business days across India." }
  ];

  for (const faq of faqs) {
    await prisma.fAQ.create({
      data: faq,
    });
  }

  console.log('Seed data inserted');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
