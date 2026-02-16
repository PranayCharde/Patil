import React from 'react';
import { Link } from 'react-router-dom';
import { BlogCard } from '../components/blog/BlogCard';

// Dummy data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "5 Strategies to Optimize Your Business Growth in 2024",
    excerpt: "Discover the key strategies that top-performing companies are using to scale their operations and increase revenue this year.",
    date: "May 15, 2024",
    author: "Sarah Johnson",
    category: "Business Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "The Future of Remote Work: Trends to Watch",
    excerpt: "Remote work is here to stay. Learn about the latest trends and technologies shaping the future of the reliable distributed workforce.",
    date: "May 12, 2024",
    author: "Michael Chen",
    category: "Workplace",
    image: "https://images.unsplash.com/photo-1593642632823-8f78536788c6?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Understanding Financial Health for SMEs",
    excerpt: "A comprehensive guide to analyzing your small business's financial statements and making data-driven decisions.",
    date: "May 10, 2024",
    author: "Emma Davis",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    title: "Effective Marketing on a Shoestring Budget",
    excerpt: "You don't need a massive budget to make a big impact. Here are creative ways to market your business effectively.",
    date: "May 05, 2024",
    author: "David Wilson",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    title: "Building a Resilient Supply Chain",
    excerpt: "Learn how to safeguard your supply chain against disruptions and ensure business continuity.",
    date: "April 28, 2024",
    author: "Robert Taylor",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    title: "Leadership Skills for the Digital Age",
    excerpt: "Essential leadership qualities needed to navigate the complexities of the modern digital landscape.",
    date: "April 22, 2024",
    author: "Jennifer White",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600"
  }
];

export function BlogPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
       {/* Page Header */}
       <section className="bg-slate-900 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <div className="flex justify-center gap-2 text-gray-400 text-sm font-medium uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary">Blog</span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
             <span className="text-sm font-bold tracking-wider text-primary uppercase">Latest News</span>
             <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">
               Insights & Updates
             </h2>
             <p className="text-gray-600">
               Stay updated with the latest trends, tips, and insights from our team of experts.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="flex justify-center mt-16 gap-2">
            <button className="w-10 h-10 rounded bg-primary text-white font-bold">1</button>
            <button className="w-10 h-10 rounded bg-white text-gray-600 hover:bg-gray-100 font-bold border border-gray-200">2</button>
            <button className="w-10 h-10 rounded bg-white text-gray-600 hover:bg-gray-100 font-bold border border-gray-200">3</button>
            <span className="flex items-end px-2 text-gray-400">...</span>
            <button className="w-10 h-10 rounded bg-white text-gray-600 hover:bg-gray-100 font-bold border border-gray-200">10</button>
          </div>
        </div>
      </section>
    </div>
  );
}
