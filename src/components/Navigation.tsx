import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage?: 'home' | 'video' | 'image' | 'uxui' | 'digital-marketing' | 'automation' | 'about' | 'other';
  noSpacer?: boolean;
  hidden?: boolean;
}

export function Navigation({ currentPage = 'other', noSpacer = false, hidden = false }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/', id: 'home' },
    { name: 'VIDEO GENERATION', path: '/examples/content-media', id: 'video' },
    { name: 'IMAGE GENERATION', path: '/examples/image-generation', id: 'image' },
    { name: 'UX/UI DESIGN', path: '/ux-ui-design', id: 'uxui' },
    { name: 'DIGITAL MARKETING', path: '/digital-marketing', id: 'digital-marketing' },
    { name: 'AI AUTOMATION', path: '/services/ai-automation', id: 'automation' },
    { name: 'ABOUT ME', path: '/about', id: 'about' },
  ];

  return (
    <>
    {!noSpacer && <div className="h-16 w-full" />}
    <nav className={`fixed top-4 left-0 right-0 z-[100] flex justify-center px-4 transition-all duration-300 ${hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="w-full max-w-5xl bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
        <div className="flex items-center min-h-14 py-2 px-4 gap-3">
          <Link to="/" className="flex items-center flex-shrink-0 self-start mt-1">
            <img
              src="/1.PNG"
              alt="Nova by Tally"
              className="h-8 w-8"
            />
          </Link>

          <div className="hidden sm:flex flex-1 items-center justify-center flex-wrap gap-x-1 gap-y-1 min-w-0">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`relative px-3 py-1.5 rounded-lg text-xs tracking-widest font-light transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  currentPage === link.id
                    ? 'text-white font-normal'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
                {currentPage === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="sm:hidden flex-1" />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex-shrink-0 sm:hidden text-white p-1.5"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10">
            <div className="flex flex-col space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm tracking-wider font-light px-3 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === link.id
                      ? 'bg-white/15 text-white font-normal'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
}
