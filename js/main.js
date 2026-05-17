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
   3.5 DYNAMIC CONTENT RENDER
───────────────────────────────────────────── */
(function initDynamicContent() {
    // 1. Skills
    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid) {
        skills.forEach(skill => {
            const el = document.createElement('div');
            el.className = 'glass-card p-6 rounded-3xl flex flex-col justify-between hover:scale-[1.02] tilt-card reveal-item';
            el.setAttribute('onclick', `openSkillModal('${skill.title.replace(/'/g, "\\'")}', '${skill.description.replace(/'/g, "\\'")}')`);
            el.innerHTML = `
                <span class="material-symbols-outlined ${skill.iconColor} text-4xl mb-4">${skill.icon}</span>
                <h4 class="text-headline-md font-bold">${skill.title}</h4>
            `;
            skillsGrid.appendChild(el);
        });
    }

    // 2. Projects
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projects.forEach((project, index) => {
            const isEven = index % 2 === 0;
            const tagsHtml = project.tags.map(tag => `<span class="text-xs font-label-mono bg-${tag.color}/10 text-${tag.color} px-3 py-1 rounded-full">${tag.label}</span>`).join('');
            const highlightsHtml = project.highlights.map(hl => `<li class="flex items-center gap-3"><span class="material-symbols-outlined text-primary">check_circle</span>${hl}</li>`).join('');
            
            const el = document.createElement('div');
            el.className = 'grid grid-cols-1 md:grid-cols-2 gap-gutter items-center reveal-item';
            
            if (isEven) {
                el.innerHTML = `
                    <div class="order-2 md:order-1 space-y-6">
                        <div class="flex gap-2">${tagsHtml}</div>
                        <h3 class="font-headline-lg text-headline-lg">${project.title}</h3>
                        <p class="text-body-lg text-on-surface-variant">${project.description}</p>
                        <ul class="space-y-3 font-body-md">${highlightsHtml}</ul>
                        <button class="border border-outline-variant hover:border-primary px-6 py-3 rounded-xl flex items-center gap-2 group transition-all duration-300 hover:scale-105" onclick="openProjectModal('${project.id}')">
                            View Details
                            <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">open_in_new</span>
                        </button>
                    </div>
                    <div class="order-1 md:order-2 rounded-3xl overflow-hidden bg-surface-container shadow-2xl project-img-container h-80 md:h-[400px]">
                        <img alt="${project.imageAlt}" class="w-full h-full object-cover parallax-img transition-transform duration-700" src="${project.image}" />
                    </div>
                `;
            } else {
                el.innerHTML = `
                    <div class="rounded-3xl overflow-hidden bg-surface-container shadow-2xl project-img-container h-80 md:h-[400px]">
                        <img alt="${project.imageAlt}" class="w-full h-full object-cover parallax-img transition-transform duration-700" src="${project.image}" />
                    </div>
                    <div class="space-y-6">
                        <div class="flex gap-2">${tagsHtml}</div>
                        <h3 class="font-headline-lg text-headline-lg">${project.title}</h3>
                        <p class="text-body-lg text-on-surface-variant">${project.description}</p>
                        <ul class="space-y-3 font-body-md">${highlightsHtml}</ul>
                        <button class="border border-outline-variant hover:border-primary px-6 py-3 rounded-xl flex items-center gap-2 group transition-all duration-300 hover:scale-105" onclick="openProjectModal('${project.id}')">
                            View Details
                            <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">open_in_new</span>
                        </button>
                    </div>
                `;
            }
            projectsContainer.appendChild(el);
        });
    }

    // 3. Experience
    const experienceContainer = document.getElementById('experience-container');
    if (experienceContainer) {
        experience.forEach(exp => {
            const getTextColor = (bgClass) => {
                if (bgClass === 'bg-primary') return 'text-on-primary';
                if (bgClass === 'bg-tertiary') return 'text-on-tertiary';
                return 'text-on-surface-variant';
            };
            const getPeriodColor = (bgClass) => {
                if (bgClass === 'bg-primary') return 'text-primary';
                if (bgClass === 'bg-tertiary') return 'text-tertiary';
                return 'text-on-surface-variant';
            };
            
            const isRight = exp.align === 'right';
            const el = document.createElement('div');
            el.className = `flex flex-col md:flex-row${isRight ? '-reverse' : ''} items-center gap-gutter milestone reveal-item`;
            
            const shadowStyle = exp.shadowColor !== 'none' ? `style="box-shadow: 0 0 20px ${exp.shadowColor}"` : '';
            const borderClass = exp.iconBg === 'bg-surface-container-highest' ? 'border border-outline-variant' : '';
            
            el.innerHTML = `
                <div class="flex-1 md:text-${isRight ? 'left' : 'right'}">
                    <span class="${getPeriodColor(exp.iconBg)} font-label-mono">${exp.period}</span>
                    <h4 class="text-headline-md">${exp.role}</h4>
                    <p class="text-on-surface-variant text-body-md">${exp.company}</p>
                </div>
                <div class="w-12 h-12 rounded-full ${exp.iconBg} ${borderClass} flex items-center justify-center z-10 transition-transform duration-500 hover:scale-125" ${shadowStyle}>
                    <span class="material-symbols-outlined ${getTextColor(exp.iconBg)}">${exp.icon}</span>
                </div>
                <div class="flex-1 glass-card p-6 rounded-2xl">
                    <p class="text-on-surface-variant">${exp.description}</p>
                </div>
            `;
            experienceContainer.appendChild(el);
        });
    }

    // 4. Credentials
    const credentialsGrid = document.getElementById('credentials-grid');
    if (credentialsGrid) {
        credentials.forEach(cred => {
            const el = document.createElement('div');
            el.className = 'group flex flex-col items-center text-center p-8 rounded-3xl hover:bg-surface-container-high transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden reveal-item';
            el.innerHTML = `
                <div class="w-20 h-20 rounded-2xl bg-surface-container-highest border border-outline-variant mb-4 flex items-center justify-center group-hover:scale-110 ${cred.borderHover} transition-all duration-300">
                    <span class="material-symbols-outlined text-4xl ${cred.iconColor}" style="font-variation-settings:'FILL' 1">${cred.icon}</span>
                </div>
                <h5 class="text-body-lg font-bold">${cred.title}</h5>
                <p class="text-on-surface-variant text-label-mono text-xs mt-1">${cred.subtitle}</p>
                <div class="absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] ${cred.iconColor} uppercase font-bold tracking-tighter">${cred.hoverLabel}</div>
            `;
            credentialsGrid.appendChild(el);
        });
    }
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