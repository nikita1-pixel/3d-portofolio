/* =============================================
   PORTFOLIO - MAIN SCRIPT
   File: js/main.js
   Purpose: All interactivity — typing, scroll,
            parallax, tilt, modals, reveal.
   Depends on: js/data.js (must load first)
   ============================================= */

/* ─────────────────────────────────────────────
   1. TYPING ANIMATION
   Uses techStack array from data.js
───────────────────────────────────────────── */
(function initTyping() {
    let currentIdx = 0;
    let currentChar = 0;
    let isDeleting = false;
    const el = document.getElementById('typing-stack');

    function type() {
        const currentText = techStack[currentIdx];

        if (isDeleting) {
            el.textContent = currentText.substring(0, currentChar - 1);
            currentChar--;
        } else {
            el.textContent = currentText.substring(0, currentChar + 1);
            currentChar++;
        }

        let speed = isDeleting ? 70 : 150;

        if (!isDeleting && currentChar === currentText.length) {
            isDeleting = true;
            speed = 2000; // pause at end of word
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentIdx = (currentIdx + 1) % techStack.length;
            speed = 500; // pause before next word
        }

        setTimeout(type, speed);
    }

    type();
})();


/* ─────────────────────────────────────────────
   2. INTERACTIVE BACKGROUND (mouse tracking)
───────────────────────────────────────────── */
(function initBackground() {
    const bgMesh = document.getElementById('bg-mesh');
    if (!bgMesh) return;

    window.addEventListener('mousemove', (e) => {
        const mx = (e.clientX / window.innerWidth) * 100;
        const my = (e.clientY / window.innerHeight) * 100;
        bgMesh.style.setProperty('--mx', `${mx}%`);
        bgMesh.style.setProperty('--my', `${my}%`);
    });
})();


/* ─────────────────────────────────────────────
   3. SCROLL EFFECTS
   - Hero avatar shrink + nav logo reveal
   - Experience timeline progress line
   - Project parallax images
───────────────────────────────────────────── */
(function initScrollEffects() {
    const avatarWrapper = document.getElementById('avatar-wrapper');
    const navLogoTarget = document.getElementById('nav-logo-target');
    const scrollLine = document.getElementById('scroll-progress-line');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        // --- Hero avatar shrink ---
        const heroHeight = 600;
        if (scrolled < heroHeight) {
            const progress = scrolled / heroHeight;
            avatarWrapper.style.transform = `scale(${1 - progress * 0.8})`;
            avatarWrapper.style.opacity = String(1 - progress * 0.6);
            navLogoTarget.classList.add('opacity-0', 'scale-50');
        } else {
            avatarWrapper.style.opacity = '0';
            navLogoTarget.classList.remove('opacity-0', 'scale-50');
            navLogoTarget.classList.add('opacity-100', 'scale-100');
        }

        // --- Experience line progress ---
        const expSection = document.getElementById('experience');
        if (expSection) {
            const rect = expSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight && rect.bottom > 0) {
                const progress = Math.max(
                    0,
                    Math.min(100, ((windowHeight - rect.top) / (rect.height + windowHeight)) * 130)
                );
                scrollLine.style.height = `${progress}%`;
            }
        }

        // --- Parallax on project images ---
        document.querySelectorAll('.parallax-img').forEach(img => {
            const rect = img.parentElement.getBoundingClientRect();
            const offset = (window.innerHeight - rect.top) * 0.1;
            img.style.transform = `translateY(${offset}px) scale(1.1)`;
        });
    });
})();


/* ─────────────────────────────────────────────
   4. SCROLL REVEAL (Intersection Observer)
───────────────────────────────────────────── */
(function initReveal() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    document.querySelectorAll('.reveal-item').forEach((item, index) => {
        // Stagger items that enter viewport at the same time
        item.style.transitionDelay = `${(index % 4) * 100}ms`;
        observer.observe(item);
    });
})();


/* ─────────────────────────────────────────────
   5. 3D TILT EFFECT
───────────────────────────────────────────── */
(function initTilt() {
    document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--rx', `${((y - centerY) / centerY) * -12}deg`);
            card.style.setProperty('--ry', `${((x - centerX) / centerX) * 12}deg`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--rx', '0deg');
            card.style.setProperty('--ry', '0deg');
        });
    });
})();


/* ─────────────────────────────────────────────
   6. MODAL SYSTEM
───────────────────────────────────────────── */
function showModal() {
    const backdrop = document.getElementById('modal-backdrop');
    const content = document.getElementById('modal-content');
    backdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        backdrop.classList.add('opacity-100');
        content.classList.remove('scale-90', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeModal() {
    const backdrop = document.getElementById('modal-backdrop');
    const content = document.getElementById('modal-content');
    backdrop.classList.remove('opacity-100');
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-90', 'opacity-0');
    setTimeout(() => {
        backdrop.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 300);
}

function openSkillModal(title, description) {
    const body = document.getElementById('modal-body');

    body.innerHTML = `
    <div class="space-y-4">
      <span class="text-primary font-label-mono uppercase tracking-widest entrance-anim"
            style="animation-delay:0.1s">Skill Deep Dive</span>
      <h3 class="text-headline-lg entrance-anim" style="animation-delay:0.2s">${title}</h3>
      <p class="text-body-lg text-on-surface-variant leading-relaxed entrance-anim"
         style="animation-delay:0.3s">${description}</p>

      <div class="pt-6 border-t border-outline-variant/20 entrance-anim"
           style="animation-delay:0.4s">
        <h4 class="text-label-mono mb-4">Proficiency Matrix</h4>
        <div class="space-y-4">
          ${['Logic Architecture', 'Performance Tuning', 'Maintainability'].map((skill, i) => `
            <div class="space-y-1">
              <div class="flex justify-between text-xs text-on-surface-variant">
                <span>${skill}</span>
                <span>${85 + Math.floor(Math.random() * 10)}%</span>
              </div>
              <div class="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <div class="h-full bg-primary transition-all duration-1000 ease-out"
                     style="width:0%" id="skill-bar-${i}"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

    showModal();

    // Animate bars after modal opens
    setTimeout(() => {
        [0, 1, 2].forEach(i => {
            const bar = document.getElementById(`skill-bar-${i}`);
            if (bar) bar.style.width = `${85 + Math.floor(Math.random() * 10)}%`;
        });
    }, 500);
}

function openProjectModal(projectId) {
    // Find project from data.js
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const body = document.getElementById('modal-body');

    body.innerHTML = `
    <div class="space-y-6">
      <h3 class="text-headline-lg entrance-anim" style="animation-delay:0.1s">${project.title}</h3>

      <div class="aspect-video rounded-2xl bg-surface-container-highest overflow-hidden relative entrance-anim"
           style="animation-delay:0.2s">
        <img src="${project.image}" alt="${project.imageAlt}"
             class="w-full h-full object-cover" />
      </div>

      <div class="space-y-4">
        <p class="text-body-lg text-on-surface-variant entrance-anim"
           style="animation-delay:0.3s">${project.description}</p>

        <div class="flex flex-wrap gap-3 entrance-anim" style="animation-delay:0.4s">
          ${project.techStack.map(t =>
        `<span class="bg-surface-container-highest border border-outline-variant/30
                         px-4 py-2 rounded-xl text-label-mono text-sm">${t}</span>`
    ).join('')}
        </div>

        <div class="flex gap-4 pt-6 entrance-anim" style="animation-delay:0.5s">
          <a href="${project.liveDemo}"
             class="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold flex-1
                    text-center hover:scale-105 transition-all shadow-md">
            Live Demo
          </a>
          <a href="${project.sourceCode}"
             class="border border-outline-variant px-6 py-3 rounded-xl font-bold flex-1
                    text-center hover:bg-surface-container-highest hover:scale-105 transition-all">
            Source Code
          </a>
        </div>
      </div>
    </div>
  `;

    showModal();
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});