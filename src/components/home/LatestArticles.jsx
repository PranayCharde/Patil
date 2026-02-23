import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    category: "BUSINESS",
    date: "April 21, 2020",
    title: "Consulting & methodical service",
    excerpt: "Q Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsan.",
    link: "/blog/1"
  },
  {
    category: "BUSINESS",
    date: "April 21, 2020",
    title: "Restoration of accounting systems",
    excerpt: "Q Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsan.",
    link: "/blog/2"
  },
  {
    category: "BUSINESS",
    date: "April 21, 2020",
    title: "The most common accounting problems",
    excerpt: "Q Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsan.",
    link: "/blog/3"
  }
];

export function LatestArticles() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Latest articles</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                <span className="text-primary">{article.category}</span> • {article.date}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                {article.title}
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                {article.excerpt}
              </p>
              <Link to={article.link} className="inline-flex items-center text-slate-900 hover:text-primary transition-colors">
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog" className="inline-block bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-4 px-10 rounded shadow transition-colors">
            View More Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
