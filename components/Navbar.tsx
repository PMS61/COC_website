"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isClubsOpen, setIsClubsOpen] = useState(false);

  const clubs = [
    { name: 'Dev Club', href: '/dev-club', description: 'Software Development Community' },
    { name: 'CP Club', href: '/cp-club', description: 'Competitive Programming Hub' },
    { name: 'AI Group', href: '/ai-group', description: 'Artificial Intelligence Research' },
    { name: 'ETH Club', href: '/eth-club', description: 'Blockchain Development' },
    { name: 'Proj X', href: '/proj-x', description: 'Open Source Projects' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-montserrat font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            CoC
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors font-montserrat text-sm">
              About
            </Link>
            <Link href="/features" className="text-gray-300 hover:text-green-400 transition-colors font-montserrat text-sm">
              Features
            </Link>
            <Link href="/teams" className="text-gray-300 hover:text-green-400 transition-colors font-montserrat text-sm">
              Teams
            </Link>
            
            {/* Clubs Dropdown */}
            <div className="relative" onMouseEnter={() => setIsClubsOpen(true)} onMouseLeave={() => setIsClubsOpen(false)}>
              <button className="text-gray-300 hover:text-green-400 transition-colors font-montserrat text-sm">
                Clubs
              </button>
              
              {isClubsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 rounded-md shadow-lg bg-neutral-900/95 ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    {clubs.map((club) => (
                      <Link
                        key={club.name}
                        href={club.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-neutral-800 hover:text-green-400"
                        role="menuitem"
                      >
                        <div className="font-medium">{club.name}</div>
                        <div className="text-xs text-gray-500">{club.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/community" className="text-gray-300 hover:text-green-400 transition-colors font-montserrat text-sm">
              Community
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-green-400 transition-colors font-montserrat text-sm">
              Blog
            </Link>
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