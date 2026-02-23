import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp, ShoppingCart, Image as ImageIcon, Layout, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function FloatingUI() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Presale Chat (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        >
          {isChatOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </button>
        <div className="bg-white px-4 py-2 rounded-lg shadow-md text-sm font-medium text-gray-700 animate-bounce">
          Presale Chat
        </div>
      </div>

      {/* Right Side Fixed Menu */}
      {/* <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-2">
        <button className="bg-cyan-400 hover:bg-cyan-500 text-white p-3 shadow-lg transition-colors rounded-l-md">
          <ShoppingCart className="w-5 h-5" />
        </button>
        <button className="bg-cyan-400 hover:bg-cyan-500 text-white p-3 shadow-lg transition-colors rounded-l-md">
           <ImageIcon className="w-5 h-5" />
        </button>
        <button className="bg-cyan-400 hover:bg-cyan-500 text-white p-3 shadow-lg transition-colors rounded-l-md">
           <Layout className="w-5 h-5" />
        </button>
      </div> */}

      {/* Scroll To Top (Bottom Right) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-slate-800 hover:bg-slate-900 text-white p-3 rounded-md shadow-lg transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
