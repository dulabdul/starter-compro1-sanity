'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className='sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/70 backdrop-blur-md'>
      <div className='container mx-auto px-4 md:px-8'>
        <nav
          className='flex items-center justify-between h-16'
          aria-label='Global'>
          {/* Corporate Logo Placeholder */}
          <Link
            href='/'
            className='font-bold text-xl tracking-tight text-blue-900'>
            Corp<span className='text-blue-600'>Starter</span>
          </Link>

          {/* Desktop Nav */}
          <ul className='hidden md:flex space-x-8'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className='text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors'>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className='md:hidden p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle Navigation'
            aria-expanded={isOpen}>
            {isOpen ? (
              <X
                size={24}
                aria-hidden='true'
              />
            ) : (
              <Menu
                size={24}
                aria-hidden='true'
              />
            )}
          </button>
        </nav>

        {/* Mobile Nav Menu */}
        {isOpen && (
          <div className='md:hidden border-t border-gray-200/50 bg-white'>
            <ul className='flex flex-col space-y-4 px-4 py-6'>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='block text-base font-medium text-gray-800 hover:text-blue-600'
                    onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
