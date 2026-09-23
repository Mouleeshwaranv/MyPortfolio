import React from 'react';
import { User, Layout, Zap, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider border border-cyan-500/20">
          <User class="w-3.5 h-3.5" />
          <span>About Mouleeshwaran</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
          Passionate Frontend Developer Crafting Modern Web Experiences
        </h2>
        <p class="text-slate-400 text-base leading-relaxed">
          Based in Namakkal, Tamil Nadu. Specializing in React single-page applications, UI/UX performance optimization, and interactive GSAP animations.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div class="glass-card p-8 rounded-2xl space-y-4 hover:border-cyan-500/40 transition-all">
          <div class="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Layout class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-heading font-bold text-white">Modern Frontend UI</h3>
          <p class="text-slate-400 text-sm leading-relaxed">
            Proficient in React.js, Tailwind CSS, and HTML5/CSS3. Experienced in building mobile-responsive single-page applications with clean component hierarchy.
          </p>
        </div>

        {/* Card 2 */}
        <div class="glass-card p-8 rounded-2xl space-y-4 hover:border-indigo-500/40 transition-all">
          <div class="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Zap class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-heading font-bold text-white">Smooth Animations</h3>
          <p class="text-slate-400 text-sm leading-relaxed">
            Adept with GSAP and Framer Motion to build engaging micro-interactions, scroll-driven timelines, and fluid UI state transitions.
          </p>
        </div>

        {/* Card 3 */}
        <div class="glass-card p-8 rounded-2xl space-y-4 hover:border-violet-500/40 transition-all">
          <div class="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
            <GraduationCap class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-heading font-bold text-white">BCA Graduate & Intern</h3>
          <p class="text-slate-400 text-sm leading-relaxed">
            Pursuing BCA at K.S. Rangasamy College of Arts and Science (78%). Completed internship at Ksquare Softtech enhancing real-world project delivery.
          </p>
        </div>

      </div>
    </section>
  );
}
