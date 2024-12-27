"use client";
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-montserrat font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            CoC
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {['About', 'Features', 'Teams', 'Community', 'Blog'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-green-400 transition-colors font-montserrat text-sm"
              >
                {item}
              </Link>
            ))}
          </div>

          <button className="px-4 py-2 text-sm font-montserrat text-green-400 border border-green-400/20 rounded-lg hover:bg-green-400/10 transition-all">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 