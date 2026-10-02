import React from 'react';

export default function Footer() {
  return (
    <footer class="border-t border-slate-800/80 py-8 px-4 text-center text-slate-400 text-sm relative z-10">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © 2026 <strong class="text-white">Mouleeshwaran V</strong>. Built with React.js, Tailwind CSS & HTML.
        </div>
        <div class="flex items-center gap-6">
          <a href="mailto:mouleesh05080@gmail.com" class="hover:text-cyan-400 transition-colors">Email</a>
          <a href="#hero" class="hover:text-cyan-400 transition-colors">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  );
}
