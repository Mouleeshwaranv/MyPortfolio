import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider border border-violet-500/20">
          <Briefcase class="w-3.5 h-3.5" />
          <span>Career Journey</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
          Work Experience & Education
        </h2>
        <p class="text-slate-400 text-base">
          Practical industry experience alongside formal BCA computer applications education.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Experience Column */}
        <div class="space-y-8">
          <h3 class="text-2xl font-heading font-bold text-white flex items-center gap-3">
            <Briefcase class="w-6 h-6 text-cyan-400" />
            <span>Professional Experience</span>
          </h3>

          <div class="space-y-6 relative border-l-2 border-slate-800 ml-4 pl-6">
            <div class="relative group">
              <span class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#0a0d14]"></span>
              
              <div class="glass-card p-6 rounded-2xl space-y-3 border border-white/10 hover:border-cyan-500/40 transition-all">
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <h4 class="text-lg font-heading font-bold text-white">Frontend Developer Intern</h4>
                  <span class="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
                    May 2025 – June 2025
                  </span>
                </div>
                <div class="text-sm font-medium text-cyan-400">Ksquare Softtech</div>
                <ul class="space-y-2 text-slate-300 text-sm list-disc list-inside leading-relaxed pt-2">
                  <li>Collaborated with developers to design user-centric interfaces using React.js and Tailwind CSS.</li>
                  <li>Implemented animations using GSAP and Framer Motion to boost user engagement.</li>
                  <li>Enhanced site performance and ensured responsiveness across all devices.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Achievements Column */}
        <div class="space-y-8">
          <h3 class="text-2xl font-heading font-bold text-white flex items-center gap-3">
            <GraduationCap class="w-6 h-6 text-indigo-400" />
            <span>Education & Achievements</span>
          </h3>

          <div class="space-y-6">
            
            {/* BCA Degree */}
            <div class="glass-card p-6 rounded-2xl space-y-3 border border-white/10 hover:border-indigo-500/40 transition-all">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h4 class="text-lg font-heading font-bold text-white">Bachelor of Computer Applications (BCA)</h4>
                <span class="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20">
                  2023 – 2026
                </span>
              </div>
              <div class="text-sm font-medium text-slate-300">K.S. Rangasamy College of Arts and Science</div>
              <div class="text-xs text-indigo-300 font-semibold">Percentage: 78%</div>
            </div>

            {/* Higher Secondary */}
            <div class="glass-card p-6 rounded-2xl space-y-3 border border-white/10">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h4 class="text-lg font-heading font-bold text-white">Higher Secondary Education</h4>
                <span class="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
                  2022 – 2023
                </span>
              </div>
              <div class="text-sm font-medium text-slate-300">Government Higher Secondary School</div>
              <div class="text-xs text-slate-400 font-semibold">Percentage: 75%</div>
            </div>

            {/* Certifications Badges */}
            <div class="glass-card p-6 rounded-2xl space-y-4">
              <h4 class="text-base font-heading font-bold text-white flex items-center gap-2">
                <Award class="w-5 h-5 text-amber-400" />
                <span>Certifications & Extracurriculars</span>
              </h4>
              <ul class="space-y-2 text-slate-300 text-sm">
                <li class="flex items-center gap-2.5">
                  <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>Presented Technical PPT at Ramakrishna College of Arts and Science</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span>Completed Workshop on AI Tools for Developers</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Volleyball – District Level Participant</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
