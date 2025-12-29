
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
