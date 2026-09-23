import React from 'react';
import { Layers, Play, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 'appointment-pro',
    title: 'Appointment Pro',
    description: 'Modern appointment booking single-page web app with seamless scheduling, doctor/specialist selection, and dynamic slot reservation UI.',
    url: 'https://appoinment-pro-git-main-mouleesh0805-2099s-projects.vercel.app/',
    tags: ['React.js', 'Tailwind CSS', 'GSAP', 'Appointment Booking'],
    mediaSrc: '/assets/images/gif1.mp4',
    poster: '/assets/images/appointment-pro.svg',
    category: 'React & GSAP'
  },
  {
    id: 'job-opportunity-hub',
    title: 'Job Opportunity Hub',
    description: 'Comprehensive career & employment opportunity portal allowing candidates to search openings, filter job roles, and submit applications.',
    url: 'https://job-opportunity-hub-nync.vercel.app',
    tags: ['React.js', 'Tailwind CSS', 'Search Filter', 'Job Board'],
    mediaSrc: '/assets/images/gif2.mp4',
    poster: '/assets/images/job-hub.svg',
    category: 'React & GSAP'
  },
  {
    id: 'campus-connect',
    title: 'Campus Connect',
    description: 'Interactive student networking portal connecting campus members for event updates, academic discussion feeds, and resource sharing.',
    url: 'https://campus-connect-jadh.vercel.app',
    tags: ['React.js', 'Tailwind CSS', 'Campus Portal', 'Social UI'],
    mediaSrc: '/assets/images/gif3.mp4',
    poster: '/assets/images/campus-connect.svg',
    category: 'Web Apps'
  },
  {
    id: 'where-is-my-bus',
    title: 'Where Is My Bus',
    description: 'Smart public transit and bus tracking interface rendering live route locations, arrival ETAs, and interactive stop navigation.',
    url: 'https://where-is-my-bus-wheat.vercel.app',
    tags: ['JavaScript', 'Live Transit', 'Map UI', 'Tailwind CSS'],
    mediaSrc: '/assets/images/gif4.mp4',
    poster: '/assets/images/where-is-my-bus.svg',
    category: 'Web Apps'
  },
  {
    id: 'college-subject',
    title: 'College Subject Hub',
    description: 'Academic subject hub organizing BCA course syllabi, practical lab manuals, subject modules, and study resources.',
    url: 'https://college-subject.vercel.app',
    tags: ['HTML5/CSS3', 'JavaScript', 'Academic Portal', 'BCA Course'],
    mediaSrc: '/assets/images/gif5.mp4',
    poster: '/assets/images/college-subject.svg',
    category: 'Web Apps'
  }
];

export default function Projects({ onOpenDemoModal }) {
  return (
    <section id="projects" class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider border border-cyan-500/20">
          <Layers class="w-3.5 h-3.5" />
          <span>Featured Live Projects</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
          Explore Live Demo Applications
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          Featuring animated GIF visual loops on the front of every project card. Click <strong class="text-cyan-400">"Live Demo"</strong> to launch the interactive frame viewer or visit the live site!
        </p>
      </div>

      {/* Projects Grid */}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            class="glass-card rounded-2xl overflow-hidden border border-white/10 group hover:border-cyan-500/50 transition-all flex flex-col justify-between"
          >
            {/* Front Animated GIF Media Header */}
            <div class="gif-frame aspect-video bg-slate-950 relative overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={project.poster}
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={project.mediaSrc}
              ></video>
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cyan-500/90 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg">
                Live Demo
              </span>
            </div>

            {/* Content Body */}
            <div class="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div class="space-y-2">
                <h3 class="text-xl font-heading font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p class="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div class="space-y-4 pt-4 border-t border-slate-800">
                {/* Tech Tags */}
                <div class="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      class="px-2.5 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div class="flex items-center gap-3">
                  {/* Live Demo Trigger */}
                  <button
                    onClick={() => onOpenDemoModal(project)}
                    class="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/20 transition-all hover:scale-[1.02]"
                  >
                    <Play class="w-4 h-4 fill-current" />
                    <span>Live Demo</span>
                  </button>

                  {/* Direct Launch URL */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                    title="Open Live Site in New Tab"
                  >
                    <ExternalLink class="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
