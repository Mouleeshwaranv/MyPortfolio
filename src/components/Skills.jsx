import React from 'react';
import { Cpu, Code, Sparkles, Terminal } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-900/30 rounded-3xl border border-white/5 my-10">
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-wider border border-indigo-500/20">
          <Cpu class="w-3.5 h-3.5" />
          <span>Technical Arsenal</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
          Core Competencies & Technologies
        </h2>
        <p class="text-slate-400 text-base">
          Proven skills across modern web frameworks, animation engines, and development tools.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Skill Group 1 */}
        <div class="glass-card p-6 rounded-2xl space-y-6">
          <div class="flex items-center gap-3 border-b border-slate-800 pb-4">
            <Code class="w-5 h-5 text-cyan-400" />
            <h3 class="font-heading font-bold text-lg text-white">Frontend Frameworks</h3>
          </div>

          <div class="space-y-4">
            <div>
              <div class="flex justify-between text-sm font-medium mb-1.5">
                <span class="text-slate-200">React.js</span>
                <span class="text-cyan-400">88%</span>
              </div>
              <div class="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-[88%]"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-sm font-medium mb-1.5">
                <span class="text-slate-200">Tailwind CSS</span>
                <span class="text-cyan-400">92%</span>
              </div>
              <div class="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div class="h-full bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full w-[92%]"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-sm font-medium mb-1.5">
                <span class="text-slate-200">JavaScript (ES6+)</span>
                <span class="text-cyan-400">85%</span>
              </div>
              <div class="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div class="h-full bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full w-[85%]"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-sm font-medium mb-1.5">
                <span class="text-slate-200">HTML5 & CSS3</span>
                <span class="text-cyan-400">95%</span>
              </div>
              <div class="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div class="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-[95%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Group 2 */}
        <div class="glass-card p-6 rounded-2xl space-y-6">
          <div class="flex items-center gap-3 border-b border-slate-800 pb-4">
            <Sparkles class="w-5 h-5 text-indigo-400" />
            <h3 class="font-heading font-bold text-lg text-white">Animation & Interactive</h3>
          </div>

          <div class="space-y-4">
            <div>
              <div class="flex justify-between text-sm font-medium mb-1.5">
                <span class="text-slate-200">GSAP (ScrollTrigger)</span>
                <span class="text-indigo-400">90%</span>
              </div>
              <div class="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div class="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full w-[90%]"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-sm font-medium mb-1.5">
                <span class="text-slate-200">Framer Motion</span>
                <span class="text-indigo-400">82%</span>
              </div>
              <div class="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div class="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-[82%]"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-sm font-medium mb-1.5">
                <span class="text-slate-200">Responsive Web Design</span>
                <span class="text-indigo-400">94%</span>
              </div>
              <div class="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div class="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full w-[94%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Group 3 */}
        <div class="glass-card p-6 rounded-2xl space-y-6">
          <div class="flex items-center gap-3 border-b border-slate-800 pb-4">
            <Terminal class="w-5 h-5 text-violet-400" />
            <h3 class="font-heading font-bold text-lg text-white">Tools & Languages</h3>
          </div>

          <div class="flex flex-wrap gap-2.5">
            <span class="tech-badge px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-200 font-medium">Git & GitHub</span>
            <span class="tech-badge px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-200 font-medium">VS Code</span>
            <span class="tech-badge px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-200 font-medium">Python (Basics)</span>
            <span class="tech-badge px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-200 font-medium">SQL (Basics)</span>
            <span class="tech-badge px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-200 font-medium">UI/UX Principles</span>
            <span class="tech-badge px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-200 font-medium">Performance Optimization</span>
            <span class="tech-badge px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-200 font-medium">Bootstrap</span>
          </div>
        </div>

      </div>
    </section>
  );
}
