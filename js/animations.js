/* =============================================
   PORTFOLIO - ANIME.JS ANIMATIONS
   File: js/animations.js
   Purpose: All premium animations powered by anime.js
   Depends on: anime.js (CDN), main.js, data.js
   ============================================= */

/* ─────────────────────────────────────────────
   WAIT FOR DOM
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

    /* ─────────────────────────────────────────────
       1. HERO SECTION - STAGGERED ENTRANCE
       Overrides the CSS entrance-anim with a more
       powerful anime.js driven entrance sequence.
    ───────────────────────────────────────────── */
    // Immediately make hero elements invisible so anime.js controls them
    const heroEls = document.querySelectorAll('.entrance-anim');
    heroEls.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px) scale(0.95)';
        el.style.animation = 'none'; // disable CSS animation
    });

    anime.timeline({ easing: 'easeOutExpo' })
        .add({
            targets: heroEls,
            opacity: [0, 1],
            translateY: [40, 0],
            scale: [0.95, 1],
            duration: 900,
            delay: anime.stagger(150, { start: 300 }),
        });

    /* ─────────────────────────────────────────────
       2. HERO AVATAR - HOVER GLOW EFFECT
       Glows green when hovered, fades when not.
    ───────────────────────────────────────────── */
    const avatarWrapper = document.getElementById('avatar-wrapper');
    if (avatarWrapper) {
        // Inject the glow overlay element (starts invisible)
        const glow = document.createElement('div');
        glow.id = 'avatar-glow';
        glow.style.cssText = `
            position: absolute;
            inset: -20px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(75,226,119,0.35) 0%, transparent 70%);
            pointer-events: none;
            opacity: 0;
            filter: blur(8px);
        `;
        const parent = avatarWrapper.parentElement;
        parent.style.position = 'relative';
        parent.appendChild(glow);

        parent.addEventListener('mouseenter', () => {
            anime({
                targets: '#avatar-glow',
                opacity: [0, 1],
                scale: [0.9, 1.05],
                duration: 500,
                easing: 'easeOutQuad',
            });
        });

        parent.addEventListener('mouseleave', () => {
            anime({
                targets: '#avatar-glow',
                opacity: [1, 0],
                scale: [1.05, 0.9],
                duration: 600,
                easing: 'easeInQuad',
            });
        });
    }

    /* ─────────────────────────────────────────────
       3. NAVBAR - SLIDE DOWN ON LOAD
    ───────────────────────────────────────────── */
    anime({
        targets: 'nav',
        translateY: [-60, 0],
        opacity: [0, 1],
        duration: 700,
        easing: 'easeOutExpo',
        delay: 100,
    });

    /* ─────────────────────────────────────────────
       4. SCROLL REVEAL - INTERSECTION OBSERVER
       Replaces the CSS-only reveal with anime.js
       animations fired when elements enter view.
    ───────────────────────────────────────────── */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const type = el.dataset.animeReveal;

            const fromProps = {
                'up'    : { translateY: 50, opacity: 0 },
                'left'  : { translateX: -60, opacity: 0 },
                'right' : { translateX: 60, opacity: 0 },
                'scale' : { scale: 0.88, opacity: 0 },
            };
            const from = fromProps[type] || fromProps['up'];

            anime({
                targets: el,
                ...from,
                translateY: 0,
                translateX: 0,
                scale: 1,
                opacity: 1,
                duration: 850,
                easing: 'easeOutExpo',
                delay: parseInt(el.dataset.animeDelay || '0'),
            });

            revealObserver.unobserve(el);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });

    // Observe static HTML reveal items (skills section header, etc.)
    document.querySelectorAll('[data-anime-reveal]').forEach(el => {
        // Set initial hidden state
        if (el.dataset.animeReveal === 'scale') {
            el.style.transform = 'scale(0.88)';
        } else if (el.dataset.animeReveal === 'left') {
            el.style.transform = 'translateX(-60px)';
        } else if (el.dataset.animeReveal === 'right') {
            el.style.transform = 'translateX(60px)';
        } else {
            el.style.transform = 'translateY(50px)';
        }
        el.style.opacity = '0';
        revealObserver.observe(el);
    });

    // Watch for dynamically injected content (projects, experience, etc.)
    const contentMutationObserver = new MutationObserver(() => {
        document.querySelectorAll('[data-anime-reveal]:not([data-observed])').forEach(el => {
            el.setAttribute('data-observed', 'true');
            if (el.dataset.animeReveal === 'scale') {
                el.style.transform = 'scale(0.88)';
            } else if (el.dataset.animeReveal === 'left') {
                el.style.transform = 'translateX(-60px)';
            } else if (el.dataset.animeReveal === 'right') {
                el.style.transform = 'translateX(60px)';
            } else {
                el.style.transform = 'translateY(50px)';
            }
            el.style.opacity = '0';
            revealObserver.observe(el);
        });
    });

    contentMutationObserver.observe(document.body, { childList: true, subtree: true });

    /* ─────────────────────────────────────────────
       5. CURSOR SPLASH - ANIME.JS POWERED
       Replaces the basic CSS splash with an anime.js
       burst that fans 8 particles outward.
    ───────────────────────────────────────────── */
    window.addEventListener('click', (e) => {
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        if (isTouch) return;

        const particleCount = 10;
        const colors = ['#4be277', '#7cd0ff', '#ffffff'];

        for (let i = 0; i < particleCount; i++) {
            const p = document.createElement('div');
            const size = 4 + Math.random() * 4;
            const color = colors[Math.floor(Math.random() * colors.length)];
            p.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                transform: translate(-50%, -50%);
            `;
            document.body.appendChild(p);

            const angle = (i / particleCount) * Math.PI * 2;
            const distance = 40 + Math.random() * 50;

            anime({
                targets: p,
                translateX: Math.cos(angle) * distance,
                translateY: Math.sin(angle) * distance,
                opacity: [1, 0],
                scale: [1, 0],
                duration: 600 + Math.random() * 200,
                easing: 'easeOutExpo',
                complete: () => p.remove(),
            });
        }
    });

    /* ─────────────────────────────────────────────
       6. SKILL CARDS - STAGGERED COUNT-UP PULSE
       When the skills section enters view, pulse
       each skill card in with a stagger.
    ───────────────────────────────────────────── */
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const cards = entry.target.querySelectorAll('.glass-card');
            anime({
                targets: cards,
                scale: [0.85, 1],
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 700,
                delay: anime.stagger(120, { from: 'center' }),
                easing: 'easeOutBack',
            });
            skillsObserver.unobserve(entry.target);
        });
    }, { threshold: 0.15 });

    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid) {
        // hide cards initially (observer may fire before main.js injects them)
        setTimeout(() => {
            skillsGrid.querySelectorAll('.glass-card').forEach(c => {
                c.style.opacity = '0';
                c.style.transform = 'scale(0.85) translateY(20px)';
            });
            skillsObserver.observe(skillsGrid);
        }, 400);
    }

    /* ─────────────────────────────────────────────
       7. EXPERIENCE TIMELINE - MILESTONE PING
       Each milestone icon gets a sonar ping when it
       enters the viewport.
    ───────────────────────────────────────────── */
    const pingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const icon = entry.target.querySelector('[style*="box-shadow"]');
            if (icon) {
                const ping = document.createElement('div');
                ping.style.cssText = `
                    position: absolute;
                    inset: 0;
                    border-radius: 50%;
                    border: 2px solid rgba(75,226,119,0.5);
                    pointer-events: none;
                `;
                icon.style.position = 'relative';
                icon.appendChild(ping);

                anime({
                    targets: ping,
                    scale: [1, 2.5],
                    opacity: [0.8, 0],
                    duration: 1200,
                    easing: 'easeOutExpo',
                    delay: 300,
                    loop: false,
                    complete: () => ping.remove(),
                });
            }
            pingObserver.unobserve(entry.target);
        });
    }, { threshold: 0.5 });

    // Observe milestones injected by main.js
    const milestoneObserverInit = new MutationObserver(() => {
        document.querySelectorAll('.milestone:not([data-pinged])').forEach(m => {
            m.setAttribute('data-pinged', 'true');
            pingObserver.observe(m);
        });
    });
    milestoneObserverInit.observe(document.body, { childList: true, subtree: true });

    /* ─────────────────────────────────────────────
       8. MARQUEE - GRADIENT TEXT CYCLE
       Cycles through an accent color on hovered marquee items
    ───────────────────────────────────────────── */
    const marqueeContainer = document.querySelector('.marquee-container');
    if (marqueeContainer) {
        marqueeContainer.querySelectorAll('span').forEach(span => {
            span.addEventListener('mouseenter', () => {
                anime({
                    targets: span,
                    color: ['#bccbb9', '#4be277'],
                    duration: 300,
                    easing: 'easeOutQuad',
                });
            });
            span.addEventListener('mouseleave', () => {
                anime({
                    targets: span,
                    color: ['#4be277', '#bccbb9'],
                    duration: 300,
                    easing: 'easeOutQuad',
                });
            });
        });
    }

    /* ─────────────────────────────────────────────
       9. PAGE TRANSITION - FADE IN ON LOAD
    ───────────────────────────────────────────── */
    anime({
        targets: document.body,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutQuad',
    });

    /* ─────────────────────────────────────────────
       10. CONTACT MODAL - OPEN ANIMATION
       Staggered entrance: backdrop fade → modal
       scale-up → header → links → form fields.
    ───────────────────────────────────────────── */
    document.addEventListener('contact-modal-open', ({ detail: { modal, backdrop } }) => {
        // Reset
        backdrop.style.opacity = '0';
        modal.style.transform  = 'scale(0.88)';
        modal.style.opacity    = '0';

        anime.timeline({ easing: 'easeOutExpo' })
            // 1. Fade backdrop in
            .add({
                targets: backdrop,
                opacity: [0, 1],
                duration: 300,
            })
            // 2. Pop the modal card in
            .add({
                targets: modal,
                scale: [0.88, 1],
                opacity: [0, 1],
                duration: 500,
            }, '-=150')
            // 3. Slide header down
            .add({
                targets: '#contact-modal .contact-modal-header',
                translateY: [-20, 0],
                opacity: [0, 1],
                duration: 400,
            }, '-=300')
            // 4. Stagger the 4 link cards
            .add({
                targets: '#contact-modal .contact-link-card',
                translateY: [20, 0],
                opacity: [0, 1],
                duration: 400,
                delay: anime.stagger(60),
            }, '-=250')
            // 5. Stagger form fields
            .add({
                targets: '#contact-modal .contact-form-field',
                translateY: [16, 0],
                opacity: [0, 1],
                duration: 380,
                delay: anime.stagger(80),
            }, '-=200')
            // 6. Submit button slides up last
            .add({
                targets: '#contact-submit',
                translateY: [12, 0],
                opacity: [0, 1],
                duration: 350,
            }, '-=150');
    });

    document.addEventListener('contact-modal-close', ({ detail: { modal, backdrop } }) => {
        anime.timeline({ easing: 'easeInExpo' })
            .add({
                targets: modal,
                scale: [1, 0.9],
                opacity: [1, 0],
                duration: 280,
            })
            .add({
                targets: backdrop,
                opacity: [1, 0],
                duration: 220,
                complete: () => {
                    backdrop.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                },
            }, '-=100');
    });

    /* ─────────────────────────────────────────────
       11. HIRE ME BUTTON - SHIMMER BORDER GLOW
       The button breathes with a subtle pulsing
       box-shadow to draw attention to it.
    ───────────────────────────────────────────── */
    const hireMeBtn = document.getElementById('hire-me-btn');
    if (hireMeBtn) {
        anime({
            targets: hireMeBtn,
            boxShadow: [
                '0 0 0px 0px rgba(75,226,119,0)',
                '0 0 18px 6px rgba(75,226,119,0.45)',
                '0 0 0px 0px rgba(75,226,119,0)',
            ],
            duration: 2400,
            easing: 'easeInOutSine',
            loop: true,
            delay: 1500,
        });
    }

});
