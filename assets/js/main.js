/**
 * Main Interactive & Animation Script for Mouleeshwaran V Portfolio
 * Uses GSAP 3.12+ with ScrollTrigger & TextPlugin
 */

document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP Plugins
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    if (window.TextPlugin) gsap.registerPlugin(TextPlugin);
  }

  // Init Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  /* -------------------------------------------------------------------------- */
  /* 1. Custom Glowing Cursor Follower */
  /* -------------------------------------------------------------------------- */
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.custom-cursor-follower');

  if (cursor && follower && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    });

    // Lerp animation loop for smooth follower
    function renderCursor() {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;

      requestAnimationFrame(renderCursor);
    }
    renderCursor();

    // Hover effect on interactive elements
    const hoverables = document.querySelectorAll('a, button, .interactive-card, input, textarea, select');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 2. Hero Section Typing & GSAP Entrance */
  /* -------------------------------------------------------------------------- */
  if (window.gsap) {
    const heroTl = gsap.timeline();

    heroTl.from('#hero-badge', {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    })
    .from('#hero-name', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.3')
    .from('#hero-role-wrapper', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4')
    .from('#hero-description', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4')
    .from('#hero-ctas > *', {
      scale: 0.9,
      opacity: 0,
      stagger: 0.15,
      duration: 0.5,
      ease: 'back.out(1.7)'
    }, '-=0.3')
    .from('#hero-card', {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')
    .from('.hero-float-badge', {
      y: 15,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: 'back.out(1.5)'
    }, '-=0.4');

    // Role Typing Loop Effect using GSAP TextPlugin
    const typedRole = document.getElementById('typed-role');
    if (typedRole && window.TextPlugin) {
      const roles = [
        'Frontend Developer',
        'React.js Specialist',
        'Tailwind & GSAP Animator',
        'Interactive UI/UX Creator'
      ];
      let roleIndex = 0;

      function typeNextRole() {
        roleIndex = (roleIndex + 1) % roles.length;
        gsap.to(typedRole, {
          duration: 1.2,
          text: roles[roleIndex],
          ease: 'none',
          onComplete: () => {
            gsap.delayedCall(2, typeNextRole);
          }
        });
      }

      gsap.delayedCall(2.5, typeNextRole);
    }
  }

  /* -------------------------------------------------------------------------- */
  /* 3. GSAP ScrollTrigger Section Reveals */
  /* -------------------------------------------------------------------------- */
  if (window.gsap && window.ScrollTrigger) {
    // Section Header Animations
    gsap.utils.toArray('.section-header').forEach(header => {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    });

    // Staggered Card Reveals
    const revealContainers = [
      '#about-highlights',
      '#skills-grid',
      '#projects-grid',
      '#experience-timeline',
      '#certifications-grid'
    ];

    revealContainers.forEach(containerSelector => {
      const container = document.querySelector(containerSelector);
      if (container) {
        const cards = container.children;
        gsap.from(cards, {
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out'
        });
      }
    });

    // Animated Skill Progress Bar Widths
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    skillBars.forEach(bar => {
      const targetWidth = bar.dataset.width || '80%';
      gsap.to(bar, {
        scrollTrigger: {
          trigger: bar,
          start: 'top 90%'
        },
        width: targetWidth,
        duration: 1.2,
        ease: 'power2.out'
      });
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 4. Project Filtering Logic */
  /* -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.filter;

      // Toggle active style
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter animation
      projectCards.forEach(card => {
        const cardCategory = card.dataset.category;
        const matches = category === 'all' || cardCategory === category || cardCategory.includes(category);

        if (matches) {
          card.style.display = 'block';
          if (window.gsap) {
            gsap.fromTo(card,
              { opacity: 0, scale: 0.9, y: 20 },
              { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power2.out' }
            );
          }
        } else {
          if (window.gsap) {
            gsap.to(card, {
              opacity: 0,
              scale: 0.9,
              duration: 0.25,
              onComplete: () => {
                card.style.display = 'none';
              }
            });
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });

  /* -------------------------------------------------------------------------- */
  /* 5. Magnetic Buttons Hover Effect */
  /* -------------------------------------------------------------------------- */
  const magneticBtns = document.querySelectorAll('.btn-magnetic');
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      if (window.gsap) {
        gsap.to(btn, {
          x: x * 0.2,
          y: y * 0.2,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    });

    btn.addEventListener('mouseleave', () => {
      if (window.gsap) {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.4)'
        });
      }
    });
  });

  /* -------------------------------------------------------------------------- */
  /* 6. Mobile Navigation Drawer Toggle */
  /* -------------------------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        mobileMenu.classList.add('hidden');
      } else {
        mobileMenu.classList.remove('hidden');
        if (window.gsap) {
          gsap.fromTo(mobileMenu,
            { opacity: 0, y: -15 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
          );
        }
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 7. Contact Form Simulation */
  /* -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg> Sending...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();

        formStatus.className = 'mt-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-2';
        formStatus.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Thank you! Your message has been sent successfully. Mouleeshwaran will get back to you shortly.
        `;
        formStatus.classList.remove('hidden');

        setTimeout(() => {
          formStatus.classList.add('hidden');
        }, 6000);
      }, 1200);
    });
  }
});
