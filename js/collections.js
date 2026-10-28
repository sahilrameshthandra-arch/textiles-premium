/* ==========================================================================
   HINDWARE PREMIUM - COLLECTIONS PAGE JAVASCRIPT
   ========================================================================== */

(function() {
    'use strict';

    // ==========================================================================
    // DOM ELEMENTS
    // ==========================================================================

    const elements = {
        thumbnailButtons: $$('.thumbnail'),
        mainImages: $$('.main-image img'),
        collectionCards: $$('.collection-detail'),
        comparisonCards: $$('.comparison-card')
    };

    // ==========================================================================
    // INITIALIZATION
    // ==========================================================================

    function init() {
        setupThumbnailGalleries();
        setupScrollAnimations();
        setupSmoothScroll();
        setupUrlHash();
    }

    // ==========================================================================
    // THUMBNAIL GALLERIES
    // ==========================================================================

    function setupThumbnailGalleries() {
        elements.thumbnailButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const gallery = btn.closest('.collection-gallery');
                const mainImage = gallery.querySelector('.main-image img');
                const src = btn.dataset.src;
                
                // Update active state
                gallery.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                btn.classList.add('active');
                
                // Animate image change
                if (mainImage.src !== src) {
                    mainImage.style.opacity = '0';
                    mainImage.style.transform = 'scale(0.98)';
                    
                    setTimeout(() => {
                        mainImage.src = src;
                        mainImage.style.opacity = '1';
                        mainImage.style.transform = 'scale(1)';
                    }, 150);
                }
            });
        });
    }

    // ==========================================================================
    // SCROLL ANIMATIONS
    // ==========================================================================

    function setupScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Stagger children
                    const children = entry.target.querySelectorAll('.reveal');
                    children.forEach((child, index) => {
                        child.style.transitionDelay = `${index * 100}ms`;
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        elements.collectionCards.forEach(card => observer.observe(card));
        elements.comparisonCards.forEach(card => observer.observe(card));
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
                    const headerHeight = 80;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update URL
                    history.pushState(null, null, targetId);
                }
            });
        });
    }

    // ==========================================================================
    // URL HASH HANDLING
    // ==========================================================================

    function setupUrlHash() {
        // Check for hash on load
        if (window.location.hash) {
            const target = document.querySelector(window.location.hash);
            if (target) {
                setTimeout(() => {
                    const headerHeight = 80;
                    const targetPosition = target.offsetTop - headerHeight;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }, 100);
            }
        }

        // Update hash on scroll (debounced)
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(updateHashFromScroll, 100);
        });
    }

    function updateHashFromScroll() {
        const sections = document.querySelectorAll('.collection-detail[id]');
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            
            if (scrollPos >= top && scrollPos < bottom) {
                const hash = '#' + section.id;
                if (window.location.hash !== hash) {
                    history.replaceState(null, null, hash);
                }
            }
        });
    }

    // ==========================================================================
    // EXPOSE PUBLIC API
    // ==========================================================================

    window.HindwarePremium = window.HindwarePremium || {};
    window.HindwarePremium.collections = {
        init
    };

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();