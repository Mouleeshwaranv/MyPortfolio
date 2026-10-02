import React, { useState, useEffect } from 'react';
import { Eye, Mail } from 'lucide-react';

const roles = [
  'Frontend Developer',
  'React.js Specialist',
  'Tailwind CSS & GSAP Animator',
  'Interactive UI/UX Creator'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" class="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      <div class="max-w-5xl mx-auto w-full text-center space-y-8">
        
        {/* Status Badge */}
        <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium mx-auto">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-dot"></span>
          <span>Available for Hire & Frontend Roles</span>
        </div>

        {/* Heading */}
        <div class="space-y-4">
          <h2 class="text-slate-400 text-lg sm:text-2xl font-medium tracking-wide">Hello, I'm</h2>
          <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white leading-none whitespace-nowrap">
            Mouleeshwaran V
          </h1>
          <div class="text-xl sm:text-3xl font-bold flex items-center justify-center gap-2.5 h-12 pt-2">
            <span class="text-slate-300">Specializing in</span>
            <span class="gradient-text font-heading transition-all duration-500">
              {roles[roleIndex]}
            </span>
            <span class="animate-pulse text-cyan-400">|</span>
          </div>
        </div>

        {/* Description */}
        <p class="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed pt-2">
          Results-driven Frontend Developer with practical experience crafting high-performance, responsive web interfaces using <strong class="text-cyan-400">React.js, Tailwind CSS, JavaScript (ES6+), GSAP</strong>, and <strong class="text-indigo-400">Framer Motion</strong>. Passionate about interactive animations and smooth UI/UX workflows.
        </p>

        {/* CTAs */}
        <div class="flex flex-wrap items-center justify-center gap-4 pt-6">
          <a
            href="#projects"
            class="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 text-white font-semibold text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] transition-all flex items-center gap-3"
          >
            <Eye class="w-5 h-5" />
            <span>View Projects & Live Demos</span>
          </a>

          <a
            href="#contact"
            class="px-8 py-4 rounded-xl glass-card text-slate-200 font-semibold text-base hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-[1.03] transition-all flex items-center gap-2"
          >
            <Mail class="w-5 h-5" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Key Quick Metrics */}
        <div class="grid grid-cols-3 gap-6 pt-10 border-t border-slate-800/80 max-w-xl mx-auto">
          <div class="space-y-1">
            <div class="text-3xl sm:text-4xl font-heading font-bold text-cyan-400">5</div>
            <div class="text-xs sm:text-sm text-slate-400 font-medium">Live Web Apps</div>
          </div>
          <div class="space-y-1">
            <div class="text-3xl sm:text-4xl font-heading font-bold text-indigo-400">78%</div>
            <div class="text-xs sm:text-sm text-slate-400 font-medium">BCA Degree</div>
          </div>
          <div class="space-y-1">
            <div class="text-3xl sm:text-4xl font-heading font-bold text-violet-400">React</div>
            <div class="text-xs sm:text-sm text-slate-400 font-medium">Frontend Stack</div>
          </div>
        </div>

      </div>
    </section>
  );
}
