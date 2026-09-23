import React, { useState } from 'react';
import { Play, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenLiveDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header class="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#hero" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center font-heading font-extrabold text-white text-xl shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            M
          </div>
          <div class="flex flex-col">
            <span class="font-heading font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Mouleeshwaran V
            </span>
            <span class="text-xs font-code text-cyan-400/80">&lt;Frontend Developer /&gt;</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" class="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" class="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#projects" class="hover:text-cyan-400 transition-colors">Projects & Live Demos</a>
          <a href="#experience" class="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#contact" class="hover:text-cyan-400 transition-colors">Contact</a>
        </nav>

        {/* Action Button */}
        <div class="hidden md:flex items-center gap-4">
          <a
            href="#projects"
            class="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2"
          >
            <Play class="w-4 h-4 fill-current" />
            <span>Live Demos</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          class="md:hidden p-2 rounded-lg bg-slate-800/60 text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X class="w-6 h-6" /> : <Menu class="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div class="md:hidden glass-nav border-t border-slate-800 px-6 py-6 space-y-4">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} class="block text-base font-medium text-slate-200 hover:text-cyan-400">About</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} class="block text-base font-medium text-slate-200 hover:text-cyan-400">Skills</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} class="block text-base font-medium text-slate-200 hover:text-cyan-400">Projects & Live Demos</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} class="block text-base font-medium text-slate-200 hover:text-cyan-400">Experience</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} class="block text-base font-medium text-slate-200 hover:text-cyan-400">Contact</a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-sm"
          >
            <Play class="w-4 h-4 fill-current" />
            <span>Explore Live Demos</span>
          </a>
        </div>
      )}
    </header>
  );
}
