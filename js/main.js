/* ==========================================================================
   HINDWARE PREMIUM - MAIN JAVASCRIPT
   ========================================================================== */

(function() {
    'use strict';

    // ==========================================================================
    // UTILITY FUNCTIONS
    // ==========================================================================

    const $ = (selector, context = document) => context.querySelector(selector);
    const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

    const debounce = (fn, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(null, args), delay);
        };
    };

    const throttle = (fn, limit) => {
        let inThrottle;
        return (...args) => {
            if (!inThrottle) {
                fn.apply(null, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    // ==========================================================================
    // STATE MANAGEMENT
    // ==========================================================================

    const state = {
        isMenuOpen: false,
        currentTab: 'rain',
        testimonialIndex: 0,
        scrollY: 0,
        headerHeight: 80
    };

    // ==========================================================================
    // DOM ELEMENTS
    // ==========================================================================

    const elements = {
        navbar: $('#navbar'),
        navToggle: $('#navToggle'),
        navMenu: $('#navMenu'),
        navLinks: $$('.nav-link'),
        hero: $('#hero'),
        heroScroll: $('#heroScroll'),
        backToTop: $('#backToTop'),
        tabButtons: $$('.tab-btn'),
        tabPanels: $$('.tab-panel'),
        testimonialTrack: $('#testimonialTrack'),
        testimonialCards: $$('.testimonial-card'),
        prevTestimonial: $('#prevTestimonial'),
        nextTestimonial: $('#nextTestimonial'),
        sliderDots: $('#sliderDots'),
        newsletterForm: $('#newsletterForm'),
        statNumbers: $$('.stat-number'),
        revealElements: $$('.reveal')
    };

    // ==========================================================================
    // INITIALIZATION
    // ==========================================================================

    function init() {
        setupNavigation();
        setupHeroScroll();
        setupTabs();
        setupTestimonials();
        setupScrollEffects();
        setupBackToTop();
        setupCounterAnimation();
        setupNewsletter();
        setupSmoothScroll();
        setupPageLoadAnimations();
        
        // Initial checks
        handleScroll();
        checkRevealElements();
    }

    // ==========================================================================
    // NAVIGATION
    // ==========================================================================

    function setupNavigation() {
        // Toggle mobile menu
        elements.navToggle.addEventListener('click', toggleMenu);
        
        // Close menu on link click
        elements.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (state.isMenuOpen) {
                    closeMenu();
                }
                
                // Update active link
                elements.navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
        
        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (state.isMenuOpen && 
                !elements.navMenu.contains(e.target) && 
                !elements.navToggle.contains(e.target)) {
                closeMenu();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && state.isMenuOpen) {
                closeMenu();
            }
        });
        
        // Navbar scroll effect
        window.addEventListener('scroll', throttle(handleNavbarScroll, 10));
    }

    function toggleMenu() {
        state.isMenuOpen = !state.isMenuOpen;
        elements.navMenu.classList.toggle('active', state.isMenuOpen);
        elements.navToggle.setAttribute('aria-expanded', state.isMenuOpen);
        elements.navToggle.classList.toggle('active', state.isMenuOpen);
        document.body.style.overflow = state.isMenuOpen ? 'hidden' : '';
    }

    function closeMenu() {
        state.isMenuOpen = false;
        elements.navMenu.classList.remove('active');
        elements.navToggle.setAttribute('aria-expanded', 'false');
        elements.navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }

    function handleNavbarScroll() {
        const scrolled = window.scrollY > 50;
        elements.navbar.classList.toggle('scrolled', scrolled);
    }

    // ==========================================================================
    // HERO SCROLL INDICATOR
    // ==========================================================================

    function setupHeroScroll() {
        elements.heroScroll.addEventListener('click', () => {
            const nextSection = elements.hero.nextElementSibling;
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
        
        // Hide scroll indicator after scroll
        window.addEventListener('scroll', throttle(() => {
            const heroHeight = elements.hero.offsetHeight;
            const scrollPercent = window.scrollY / heroHeight;
            elements.heroScroll.style.opacity = clamp(1 - scrollPercent * 2, 0, 1);
        }, 50));
    }

    // ==========================================================================
    // TABS
    // ==========================================================================

    function setupTabs() {
        elements.tabButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const tabId = btn.dataset.tab;
                activateTab(tabId, index);
            });
            
            // Keyboard navigation
            btn.addEventListener('keydown', (e) => {
                let newIndex = index;
                if (e.key === 'ArrowRight') newIndex = (index + 1) % elements.tabButtons.length;
                if (e.key === 'ArrowLeft') newIndex = (index - 1 + elements.tabButtons.length) % elements.tabButtons.length;
                if (e.key === 'Home') newIndex = 0;
                if (e.key === 'End') newIndex = elements.tabButtons.length - 1;
                
                if (newIndex !== index) {
                    e.preventDefault();
                    elements.tabButtons[newIndex].click();
                    elements.tabButtons[newIndex].focus();
                }
            });
        });
    }

    function activateTab(tabId, index) {
        state.currentTab = tabId;
        
        // Update buttons
        elements.tabButtons.forEach((btn, i) => {
            const isActive = i === index;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', isActive);
        });
        
        // Update panels
        elements.tabPanels.forEach(panel => {
            const isActive = panel.id === `panel-${tabId}`;
            panel.classList.toggle('active', isActive);
            panel.setAttribute('aria-hidden', !isActive);
        });
    }

    // ==========================================================================
    // TESTIMONIALS SLIDER
    // ==========================================================================

    function setupTestimonials() {
        createSliderDots();
        
        elements.prevTestimonial.addEventListener('click', () => navigateTestimonials(-1));
        elements.nextTestimonial.addEventListener('click', () => navigateTestimonials(1));
        
        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        
        elements.testimonialTrack.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        elements.testimonialTrack.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                navigateTestimonials(diff > 0 ? 1 : -1);
            }
        }
        
        // Auto-play
        let autoPlayInterval = setInterval(() => navigateTestimonials(1), 5000);
        
        elements.testimonialTrack.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
        elements.testimonialTrack.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(() => navigateTestimonials(1), 5000);
        });
    }

    function createSliderDots() {
        elements.testimonialCards.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'slider-dot';
            dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
            dot.addEventListener('click', () => goToTestimonial(index));
            elements.sliderDots.appendChild(dot);
        });
        updateSliderDots();
    }

    function navigateTestimonials(direction) {
        const maxIndex = elements.testimonialCards.length - 1;
        state.testimonialIndex = clamp(state.testimonialIndex + direction, 0, maxIndex);
        goToTestimonial(state.testimonialIndex);
    }

    function goToTestimonial(index) {
        state.testimonialIndex = clamp(index, 0, elements.testimonialCards.length - 1);
        
        const cardWidth = elements.testimonialCards[0].offsetWidth + 24; // card + gap
        const scrollPosition = state.testimonialIndex * cardWidth;
        
        elements.testimonialTrack.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        
        updateSliderDots();
    }

    function updateSliderDots() {
        const dots = $$('.slider-dot', elements.sliderDots);
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === state.testimonialIndex);
        });
    }

    // ==========================================================================
    // SCROLL EFFECTS
    // ==========================================================================

    function setupScrollEffects() {
        window.addEventListener('scroll', throttle(handleScroll, 50));
        
        // Intersection Observer for reveal animations
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        elements.revealElements.forEach(el => revealObserver.observe(el));
    }

    function handleScroll() {
        state.scrollY = window.scrollY;
        
        // Parallax effect for hero background
        if (elements.hero) {
            const heroBg = $('.hero-bg-image', elements.hero);
            if (heroBg && state.scrollY < elements.hero.offsetHeight) {
                const translateY = state.scrollY * 0.3;
                heroBg.style.transform = `scale(1.05) translateY(${translateY}px)`;
            }
        }
    }

    function checkRevealElements() {
        elements.revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.85;
            if (isVisible) {
                el.classList.add('visible');
            }
        });
    }

    // ==========================================================================
    // BACK TO TOP
    // ==========================================================================

    function setupBackToTop() {
        window.addEventListener('scroll', throttle(() => {
            elements.backToTop.classList.toggle('visible', window.scrollY > 300);
        }, 100));
        
        elements.backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ==========================================================================
    // COUNTER ANIMATION
    // ==========================================================================

    function setupCounterAnimation() {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        elements.statNumbers.forEach(el => counterObserver.observe(el));
    }

    function animateCounter(element) {
        const target = parseInt(element.dataset.count, 10);
        const duration = 2000;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);
            const current = Math.floor(target * easedProgress);
            
            element.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
            }
        }
        
        requestAnimationFrame(updateCounter);
    }

    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    // ==========================================================================
    // NEWSLETTER FORM
    // ==========================================================================

    function setupNewsletter() {
        elements.newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const emailInput = elements.newsletterForm.querySelector('input[type="email"]');
            const submitBtn = elements.newsletterForm.querySelector('button[type="submit"]');
            const email = emailInput.value.trim();
            
            if (!validateEmail(email)) {
                showToast('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate API call
            submitBtn.disabled = true;
            submitBtn.textContent = 'Subscribing...';
            
            try {
                await simulateApiCall(1000);
                showToast('Successfully subscribed to our newsletter!', 'success');
                emailInput.value = '';
            } catch (error) {
                showToast('Something went wrong. Please try again.', 'error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Subscribe';
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function simulateApiCall(delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate 90% success rate
                Math.random() > 0.1 ? resolve() : reject(new Error('API Error'));
            }, delay);
        });
    }

    function showToast(message, type = 'info') {
        // Remove existing toasts
        $$('.toast').forEach(toast => toast.remove());
        
        const toast = document.createElement('div');
        toast.className = `toast toast-${type} toast-enter`;
        toast.innerHTML = `
            <div class="toast-content">
                <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    ${type === 'success' ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' : 
                      type === 'error' ? '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>' :
                      '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'}
                </svg>
                <span class="toast-message">${message}</span>
            </div>
            <button class="toast-close" aria-label="Close">&times;</button>
        `;
        
        // Add styles
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            padding: '1rem 1.5rem',
            background: type === 'success' ? '#27ae60' : type === 'error' ? '#c0392b' : '#1a1a2e',
            color: 'white',
            borderRadius: '8px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            zIndex: 9999,
            maxWidth: '400px',
            animation: 'slideInRight 0.3s ease forwards'
        });
        
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.classList.replace('toast-enter', 'toast-exit');
            setTimeout(() => toast.remove(), 300);
        });
        
        document.body.appendChild(toast);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (toast.parentNode) {
                toast.classList.replace('toast-enter', 'toast-exit');
                setTimeout(() => toast.remove(), 300);
            }
        }, 5000);
    }

    // ==========================================================================
    // SMOOTH SCROLL
    // ==========================================================================

    function setupSmoothScroll() {
        $$('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - state.headerHeight;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                    
                    // Update URL without scroll
                    history.pushState(null, null, targetId);
                }
            });
        });
    }

    // ==========================================================================
    // PAGE LOAD ANIMATIONS
    // ==========================================================================

    function setupPageLoadAnimations() {
        // Add loaded class to body for CSS animations
        document.body.classList.add('loaded');
        
        // Stagger hero elements
        const heroElements = $$('.hero-text > *');
        heroElements.forEach((el, index) => {
            el.style.transitionDelay = `${index * 150}ms`;
        });
        
        // Trigger initial reveal check
        setTimeout(checkRevealElements, 100);
    }

    // ==========================================================================
    // IMAGE LAZY LOADING ENHANCEMENT
    // ==========================================================================

    function setupLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            // Native lazy loading supported
            return;
        }
        
        // Fallback for older browsers
        const lazyImages = $$('img[loading="lazy"]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.removeAttribute('loading');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ==========================================================================
    // PERFORMANCE OPTIMIZATIONS
    // ==========================================================================

    // Preload critical images
    function preloadCriticalImages() {
        const criticalImages = [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80'
        ];
        
        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    // ==========================================================================
    // ACCESSIBILITY ENHANCEMENTS
    // ==========================================================================

    function setupAccessibility() {
        // Skip link focus
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        Object.assign(skipLink.style, {
            position: 'absolute',
            top: '-100%',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '1rem 2rem',
            background: 'var(--color-primary)',
            color: 'white',
            zIndex: 10000,
            borderRadius: 'var(--radius-md)',
            transition: 'top 0.3s'
        });
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '1rem';
        });
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-100%';
        });
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Ensure main content has id
        const main = $('main') || $('.hero').nextElementSibling;
        if (main && !main.id) {
            main.id = 'main-content';
        }
    }

    // ==========================================================================
    // ERROR HANDLING
    // ==========================================================================

    window.addEventListener('error', (e) => {
        console.error('Global error:', e.error);
        // Could send to error tracking service
    });

    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled promise rejection:', e.reason);
        // Could send to error tracking service
    });

    // ==========================================================================
    // INITIALIZE ON DOM READY
    // ==========================================================================

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Initialize additional features
    document.addEventListener('DOMContentLoaded', () => {
        setupLazyLoading();
        preloadCriticalImages();
        setupAccessibility();
    });

    // ==========================================================================
    // EXPOSE PUBLIC API
    // ==========================================================================

    window.HindwarePremium = {
        state,
        elements,
        utils: { debounce, throttle, clamp },
        showToast,
        animateCounter
    };

})();