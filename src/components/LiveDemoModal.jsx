import React, { useState, useEffect } from 'react';
import { Monitor, Tablet, Smartphone, RotateCw, Maximize, ExternalLink, X } from 'lucide-react';

export default function LiveDemoModal({ project, onClose }) {
  const [device, setDevice] = useState('desktop');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div class="fixed inset-0 z-[999] flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
      
      {/* Backdrop */}
      <div
        onClick={onClose}
        class="absolute inset-0 bg-slate-950/90 backdrop-blur-xl transition-opacity"
      ></div>

      {/* Modal Container */}
      <div class="relative w-full max-w-6xl h-[92vh] glass-card rounded-2xl border border-white/15 shadow-2xl flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-300">
        
        {/* Modal Top Header */}
        <div class="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-4">
          
          {/* Title & Info */}
          <div class="flex items-center gap-3 overflow-hidden">
            <div class="w-3 h-3 rounded-full bg-emerald-500 pulse-dot flex-shrink-0"></div>
            <div class="truncate">
              <h3 class="font-heading font-bold text-white text-base sm:text-lg truncate">
                {project.title}
              </h3>
              <p class="text-xs text-slate-400 truncate hidden sm:block">
                {project.description}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div class="flex items-center gap-2">
            
            {/* Device Frame Switcher */}
            <div class="hidden sm:flex items-center bg-slate-950 rounded-lg p-1 border border-slate-800">
              <button
                onClick={() => setDevice('desktop')}
                class={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  device === 'desktop'
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Desktop View"
              >
                <Monitor class="w-4 h-4" />
              </button>

              <button
                onClick={() => setDevice('tablet')}
                class={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  device === 'tablet'
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Tablet View"
              >
                <Tablet class="w-4 h-4" />
              </button>

              <button
                onClick={() => setDevice('mobile')}
                class={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  device === 'mobile'
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Mobile View"
              >
                <Smartphone class="w-4 h-4" />
              </button>
            </div>

            {/* Refresh */}
            <button
              onClick={() => {
                setLoading(true);
                const iframe = document.getElementById('live-demo-iframe');
                if (iframe) iframe.src = project.url;
              }}
              class="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Reload Frame"
            >
              <RotateCw class="w-4 h-4" />
            </button>

            {/* Fullscreen */}
            <button
              onClick={() => {
                const elem = document.getElementById('demo-iframe-container');
                if (elem) {
                  if (!document.fullscreenElement) elem.requestFullscreen();
                  else document.exitFullscreen();
                }
              }}
              class="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Toggle Fullscreen"
            >
              <Maximize class="w-4 h-4" />
            </button>

            {/* Launch Site direct link button */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              class="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <span>Open Tab</span>
              <ExternalLink class="w-3.5 h-3.5" />
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              class="p-2 rounded-lg bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white transition-colors"
              title="Close Preview"
            >
              <X class="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Frame Canvas */}
        <div id="demo-iframe-container" class="flex-1 bg-slate-950 relative overflow-hidden flex items-center justify-center p-2 sm:p-4">
          
          {/* Loader Overlay */}
          {loading && (
            <div class="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center gap-3 z-20">
              <div class="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
              <div class="text-sm font-code text-cyan-400 animate-pulse">
                Loading Application...
              </div>
            </div>
          )}

          {/* Device Wrapper */}
          <div class={`device-wrapper device-${device} transition-all duration-300 flex items-center justify-center h-full w-full`}>
            <iframe
              id="live-demo-iframe"
              src={project.url}
              onLoad={() => setLoading(false)}
              class="w-full h-full border-0 bg-white rounded-lg shadow-inner"
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

        </div>

      </div>

    </div>
  );
}
