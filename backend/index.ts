import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running.');
});

app.get('/api/blog-posts', async (req, res) => {
  try {
    const posts = await prisma.blogPost.findMany();
    // Convert ID to string to match frontend types if necessary, though frontend can handle numbers
    const postsWithStringId = posts.map(p => ({ ...p, id: p.id.toString() }));
    res.json(postsWithStringId);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/faqs', async (req, res) => {
  try {
    const faqs = await prisma.fAQ.findMany();
     // Map to format expected by frontend (q and a)
    const formattedFaqs = faqs.map(f => ({
      id: f.id.toString(),
      q: f.question,
      a: f.answer
    }));
    res.json(formattedFaqs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
