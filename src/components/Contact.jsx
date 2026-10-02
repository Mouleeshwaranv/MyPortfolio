import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 6000);
      e.target.reset();
    }, 1000);
  };

  return (
    <section id="contact" class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info */}
          <div class="lg:col-span-5 space-y-6">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider border border-cyan-500/20">
              <Send class="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Let's Build Something Amazing Together!
            </h2>
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
              Open for frontend developer job opportunities, freelance web projects, and creative collaborations. Feel free to reach out via email or message.
            </p>

            <div class="space-y-4 pt-4">
              <a href="mailto:mouleesh05080@gmail.com" class="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-cyan-500/40 transition-all group">
                <div class="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail class="w-5 h-5" />
                </div>
                <div>
                  <div class="text-xs text-slate-400">Email Me</div>
                  <div class="text-sm font-semibold text-white group-hover:text-cyan-400">mouleesh05080@gmail.com</div>
                </div>
              </a>

              <div class="flex items-center gap-4 p-4 rounded-xl glass-card">
                <div class="w-10 h-10 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center">
                  <MapPin class="w-5 h-5" />
                </div>
                <div>
                  <div class="text-xs text-slate-400">Location</div>
                  <div class="text-sm font-semibold text-white">Namakkal – 637204, Tamil Nadu</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div class="lg:col-span-7">
            <form onSubmit={handleSubmit} class="space-y-6 glass-card p-8 rounded-2xl border border-white/5">
              <h3 class="text-xl font-heading font-bold text-white mb-2">Send a Message</h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    class="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    class="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Job Opportunity / Project Inquiry"
                  class="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell me about your project or offer..."
                  class="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                class="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 text-white font-bold text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                <Send class="w-5 h-5" />
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
              </button>

              {submitted && (
                <div class="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-2">
                  <CheckCircle2 class="w-5 h-5 flex-shrink-0" />
                  <span>Thank you! Your message has been sent successfully. Mouleeshwaran will get back to you shortly.</span>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
