/**
 * Live Demo Modal Engine for Mouleeshwaran V Portfolio
 * Handles interactive project iframe preview, responsive device toggling, and fallback actions.
 */

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('demo-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalTags = document.getElementById('modal-tags');
  const modalIframe = document.getElementById('modal-iframe');
  const modalExternalLink = document.getElementById('modal-external-link');
  const modalLoader = document.getElementById('modal-loader');
  const iframeContainer = document.getElementById('iframe-container');
  const deviceWrapper = document.getElementById('device-wrapper');
  
  const closeModalBtns = document.querySelectorAll('.close-modal-btn');
  const deviceBtns = document.querySelectorAll('.device-btn');
  const refreshIframeBtn = document.getElementById('refresh-iframe-btn');
  const fullscreenIframeBtn = document.getElementById('fullscreen-iframe-btn');

  // Open Modal function
  window.openDemoModal = function(projectData) {
    if (!modal) return;

    modalTitle.textContent = projectData.title || 'Project Live Demo';
    modalDesc.textContent = projectData.description || '';
    modalExternalLink.href = projectData.url || '#';
    
    // Render tags
    modalTags.innerHTML = '';
    if (projectData.tags && Array.isArray(projectData.tags)) {
      projectData.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'px-2.5 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20';
        span.textContent = tag;
        modalTags.appendChild(span);
      });
    }

    // Show Loader & Load iframe
    modalLoader.style.display = 'flex';
    modalIframe.src = projectData.url;

    // Handle iframe load completion
    modalIframe.onload = () => {
      modalLoader.style.display = 'none';
    };

    // Show modal with GSAP animation
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    if (window.gsap) {
      gsap.fromTo('#modal-content', 
        { scale: 0.85, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.4)' }
      );
      gsap.fromTo('#modal-backdrop', 
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
    }
  };

  // Close Modal function
  window.closeDemoModal = function() {
    if (!modal) return;

    if (window.gsap) {
      gsap.to('#modal-content', {
        scale: 0.9,
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: 'power2.in'
      });
      gsap.to('#modal-backdrop', {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
          modalIframe.src = 'about:blank';
          document.body.style.overflow = '';
        }
      });
    } else {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      modalIframe.src = 'about:blank';
      document.body.style.overflow = '';
    }
  };

  // Close modal listeners
  closeModalBtns.forEach(btn => btn.addEventListener('click', closeDemoModal));

  // Device switcher logic
  deviceBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetBtn = e.currentTarget;
      const device = targetBtn.dataset.device;

      deviceBtns.forEach(b => {
        b.classList.remove('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40');
        b.classList.add('text-slate-400', 'hover:text-slate-200');
      });

      targetBtn.classList.add('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40');
      targetBtn.classList.remove('text-slate-400', 'hover:text-slate-200');

      // Update Device Frame Class
      deviceWrapper.className = 'device-wrapper transition-all duration-300 flex items-center justify-center h-full w-full';
      
      if (device === 'tablet') {
        deviceWrapper.classList.add('device-tablet');
      } else if (device === 'mobile') {
        deviceWrapper.classList.add('device-mobile');
      } else {
        deviceWrapper.classList.add('device-desktop');
      }
    });
  });

  // Refresh iframe
  if (refreshIframeBtn) {
    refreshIframeBtn.addEventListener('click', () => {
      if (modalIframe.src) {
        modalLoader.style.display = 'flex';
        modalIframe.src = modalIframe.src;
      }
    });
  }

  // Fullscreen iframe toggle
  if (fullscreenIframeBtn) {
    fullscreenIframeBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        iframeContainer.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    });
  }

  // Escape key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeDemoModal();
    }
  });
});
