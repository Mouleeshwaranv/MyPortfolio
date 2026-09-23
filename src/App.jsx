import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiveDemoModal from './components/LiveDemoModal';

export default function App() {
  const [activeDemoProject, setActiveDemoProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId;
    const animateFollower = () => {
      setFollowerPos((prev) => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.15,
        y: prev.y + (cursorPos.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(animateFollower);
    };
    animationFrameId = requestAnimationFrame(animateFollower);
    return () => cancelAnimationFrame(animationFrameId);
  }, [cursorPos]);

  return (
    <div class="min-h-screen bg-[#0a0d14] text-slate-100 antialiased relative">
      
      {/* Custom Cursor */}
      <div
        class="custom-cursor hidden md:block"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      ></div>
      <div
        class="custom-cursor-follower hidden md:block"
        style={{ left: `${followerPos.x}px`, top: `${followerPos.y}px` }}
      ></div>

      {/* Grid Pattern & Glows */}
      <div class="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0"></div>
      <div class="hero-glow-1 z-0"></div>
      <div class="hero-glow-2 z-0"></div>

      {/* App Components */}
      <div class="relative z-10">
        <Navbar />
        <main class="pt-20">
          <Hero />
          <About />
          <Skills />
          <Projects onOpenDemoModal={(project) => setActiveDemoProject(project)} />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Live Demo Modal */}
      {activeDemoProject && (
        <LiveDemoModal
          project={activeDemoProject}
          onClose={() => setActiveDemoProject(null)}
        />
      )}
    </div>
  );
}
