import React, { useState, useEffect } from 'react';
import { Eye, Mail, Code, Sparkles } from 'lucide-react';

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
    <section id="hero" class="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden">
      <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Intro Column */}
        <div class="lg:col-span-7 space-y-6">
          
          {/* Status Badge */}
          <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-dot"></span>
            <span>Available for Hire & Frontend Roles</span>
          </div>

          {/* Heading */}
          <div class="space-y-2">
            <h2 class="text-slate-400 text-lg sm:text-xl font-medium tracking-wide">Hello, I'm</h2>
            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white">
              Mouleeshwaran V
            </h1>
            <div class="text-2xl sm:text-3xl font-bold flex items-center gap-2 h-10">
              <span class="text-slate-300">Specializing in</span>
              <span class="gradient-text font-heading transition-all duration-500">
                {roles[roleIndex]}
              </span>
              <span class="animate-pulse text-cyan-400">|</span>
            </div>
          </div>

          {/* Description */}
          <p class="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Results-driven Frontend Developer with practical experience crafting high-performance, responsive web interfaces using <strong class="text-cyan-400">React.js, Tailwind CSS, JavaScript (ES6+), GSAP</strong>, and <strong class="text-indigo-400">Framer Motion</strong>. Passionate about interactive animations and smooth UI/UX workflows.
          </p>

          {/* CTAs */}
          <div class="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              class="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 text-white font-semibold text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all flex items-center gap-3"
            >
              <Eye class="w-5 h-5" />
              <span>View Projects & Live Demos</span>
            </a>

            <a
              href="#contact"
              class="px-7 py-3.5 rounded-xl glass-card text-slate-200 font-semibold text-base hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-2"
            >
              <Mail class="w-5 h-5" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Metrics */}
          <div class="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 max-w-lg">
            <div class="space-y-1">
              <div class="text-2xl sm:text-3xl font-heading font-bold text-cyan-400">5</div>
              <div class="text-xs sm:text-sm text-slate-400">Live Web Apps</div>
            </div>
            <div class="space-y-1">
              <div class="text-2xl sm:text-3xl font-heading font-bold text-indigo-400">78%</div>
              <div class="text-xs sm:text-sm text-slate-400">BCA Degree</div>
            </div>
            <div class="space-y-1">
              <div class="text-2xl sm:text-3xl font-heading font-bold text-violet-400">React</div>
              <div class="text-xs sm:text-sm text-slate-400">Frontend Stack</div>
            </div>
          </div>
        </div>

        {/* Right Hero Video GIF Card */}
        <div class="lg:col-span-5 relative flex justify-center">
          <div class="relative w-full max-w-md aspect-square">
            <div class="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 rounded-3xl blur-2xl -z-10"></div>
            
            {/* Visual Container featuring GIF 1 video */}
            <div class="glass-card rounded-3xl p-4 border border-white/10 shadow-2xl relative overflow-hidden group">
              <div class="gif-frame w-full h-full rounded-2xl overflow-hidden relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  class="w-full h-full object-cover rounded-2xl"
                  src="/assets/images/gif1.mp4"
                ></video>
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badges */}
              <div class="absolute top-6 right-6 glass-card px-3 py-1.5 rounded-lg border border-cyan-500/30 flex items-center gap-2 text-xs text-cyan-300 shadow-lg animate-float-delayed">
                <Code class="w-4 h-4 text-cyan-400" />
                <span>React & Tailwind</span>
              </div>

              <div class="absolute bottom-8 left-8 glass-card px-3 py-1.5 rounded-lg border border-indigo-500/30 flex items-center gap-2 text-xs text-indigo-300 shadow-lg animate-float">
                <Sparkles class="w-4 h-4 text-indigo-400" />
                <span>Interactive UI</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
