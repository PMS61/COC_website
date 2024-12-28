"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { posthog } from '@/lib/posthog';
import Image from 'next/image';

const Navbar = () => {
  const [isClubsOpen, setIsClubsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { data: session } = useSession();

  const handleSignIn = async () => {
    posthog.capture('sign_in_clicked', { location: 'navbar' });
    await signIn('google', { callbackUrl: '/dashboard' });
  };

  const handleSignOut = async () => {
    posthog.capture('sign_out_clicked', { location: 'navbar' });
    await signOut({ callbackUrl: '/' });
  };

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
          <div className="flex items-center space-x-2">
            <Image src="/coc_dark_ukajqb.png" alt="COC VJTI Logo" width={32} height={32} />
            <Link href="/" className="text-xl font-montserrat font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              CoC
            </Link>
          </div>
          
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

          {session ? (
            <div className="relative" onMouseEnter={() => setIsProfileOpen(true)} onMouseLeave={() => setIsProfileOpen(false)}>
              <button className="flex items-center space-x-2 focus:outline-none">
                {session.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full border border-gray-600"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                    {session.user?.name?.[0] || session.user?.email?.[0]}
                  </div>
                )}
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-neutral-900/95 ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    <div className="px-4 py-2 text-sm text-gray-300 border-b border-gray-700">
                      <p className="font-medium truncate">{session.user?.name}</p>
                      <p className="text-xs text-gray-500 truncate">{session.user?.email}</p>
                    </div>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-neutral-800 hover:text-green-400"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-neutral-800 hover:text-green-400"
                    >
                      Profile Settings
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-neutral-800"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleSignIn}
              className="px-4 py-2 text-sm font-montserrat text-emerald-400 border border-emerald-400/20 rounded-lg hover:bg-emerald-400/10 transition-all"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;