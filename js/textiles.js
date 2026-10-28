/* ==========================================================================
   HINDWARE PREMIUM - TEXTILES PAGE JAVASCRIPT
   ========================================================================== */

(function() {
    'use strict';

    // ==========================================================================
    // PRODUCT DATA
    // ==========================================================================

    const textileProducts = {
        towels: [
            {
                id: 'towel-egyptian-bath',
                name: 'Royal Egyptian Bath Towel',
                price: 3200,
                originalPrice: 3800,
                image: 'https://images.unsplash.com/photo-1584417512347-57e05d16d528?w=500&q=80',
                material: 'Egyptian Cotton',
                gsm: 700,
                size: '70x140cm',
                colors: 8,
                badge: 'Best Seller',
                rating: 4.9,
                reviews: 234
            },
            {
                id: 'towel-egyptian-sheet',
                name: 'Royal Egyptian Bath Sheet',
                price: 4800,
                image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&q=80',
                material: 'Egyptian Cotton',
                gsm: 700,
                size: '100x150cm',
                colors: 8,
                badge: 'New',
                rating: 5.0,
                reviews: 89
            },
            {
                id: 'towel-egyptian-hand',
                name: 'Royal Egyptian Hand Towel',
                price: 1800,
                image: 'https://images.unsplash.com/photo-1584417512347-57e05d16d528?w=500&q=80',
                material: 'Egyptian Cotton',
                gsm: 700,
                size: '40x70cm',
                colors: 8,
                rating: 4.8,
                reviews: 156
            },
            {
                id: 'towel-egyptian-wash',
                name: 'Royal Egyptian Wash Cloth',
                price: 950,
                image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&q=80',
                material: 'Egyptian Cotton',
                gsm: 700,
                size: '30x30cm',
                colors: 8,
                rating: 4.7,
                reviews: 78
            },
            {
                id: 'towel-turkish-bath',
                name: 'Turkish Cotton Bath Towel',
                price: 2200,
                image: 'https://images.unsplash.com/photo-1584417512347-57e05d16d528?w=500&q=80',
                material: 'Turkish Cotton',
                gsm: 550,
                size: '70x140cm',
                colors: 6,
                rating: 4.6,
                reviews: 189
            },
            {
                id: 'towel-turkish-sheet',
                name: 'Turkish Cotton Bath Sheet',
                price: 3400,
                image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&q=80',
                material: 'Turkish Cotton',
                gsm: 550,
                size: '100x150cm',
                colors: 6,
                rating: 4.7,
                reviews: 92
            },
            {
                id: 'towel-bamboo-bath',
                name: 'Bamboo Cotton Bath Towel',
                price: 2800,
                image: 'https://images.unsplash.com/photo-1584417512347-57e05d16d528?w=500&q=80',
                material: 'Bamboo Viscose Blend',
                gsm: 600,
                size: '70x140cm',
                colors: 5,
                badge: 'Eco-Friendly',
                rating: 4.8,
                reviews: 67
            },
            {
                id: 'towel-bamboo-sheet',
                name: 'Bamboo Cotton Bath Sheet',
                price: 4200,
                image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&q=80',
                material: 'Bamboo Viscose Blend',
                gsm: 600,
                size: '100x150cm',
                colors: 5,
                badge: 'Eco-Friendly',
                rating: 4.9,
                reviews: 45
            }
        ],
        robes: [
            {
                id: 'robe-bamboo-kimono',
                name: 'Bamboo Silk Kimono Robe',
                price: 8500,
                image: 'https://images.unsplash.com/photo-1584417512347-57e05d16d528?w=500&q=80',
                material: 'Bamboo Viscose',
                weight: 'Lightweight',
                lengths: ['Knee', 'Calf'],
                colors: 6,
                badge: 'Best Seller',
                rating: 4.9,
                reviews: 178
            },
            {
                id: 'robe-bamboo-shawl',
                name: 'Bamboo Silk Shawl Collar Robe',
                price: 9800,
                image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&q=80',
                material: 'Bamboo Viscose',
                weight: 'Medium',
                lengths: ['Calf', 'Ankle'],
                colors: 5,
                rating: 4.8,
                reviews: 92
            },
            {
                id: 'robe-egyptian-waffle',
                name: 'Egyptian Cotton Waffle Robe',
                price: 7200,
                image: 'https://images.unsplash.com/photo-1584417512347-57e05d16d528?w=500&q=80',
                material: 'Egyptian Cotton',
                weight: 'Lightweight',
                lengths: ['Knee', 'Calf'],
                colors: 4,
                badge: 'New',
                rating: 4.7,
                reviews: 56
            },
            {
                id: 'robe-egyptian-terry',
                name: 'Egyptian Cotton Terry Robe',
                price: 11000,
                image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&q=80',
                material: 'Egyptian Cotton',
                weight: 'Plush',
                lengths: ['Calf', 'Ankle'],
                colors: 4,
                rating: 4.9,
                reviews: 134
            },
            {
                id: 'robe-organic-kids',
                name: 'Organic Cotton Kids Robe',
                price: 3500,
                image: 'https://images.unsplash.com/photo-1584417512347-57e05d16d528?w=500&q=80',
                material: 'Organic Cotton',
                weight: 'Medium',
                lengths: ['Knee'],
                colors: 6,
                badge: 'Kids',
                rating: 4.8,
                reviews: 89
            }
        ],
        mats: [
            {
                id: 'mat-memory-premium',
                name: 'Premium Memory Foam Bath Mat',
                price: 3800,
                originalPrice: 4500,
                image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&q=80',
                material: 'Memory Foam + Microfiber',
                size: '50x80cm',
                thickness: '2.5cm',
                colors: 6,
                badge: 'Best Seller',
                rating: 4.9,
                reviews: 312
            },
            {
                id: 'mat-memory-large',
                name: 'Large Memory Foam Bath Mat',
                price: 5200,
                image: 'https://images.unsplash.com/photo-1584417512347-57e05d16d528?w=500&q=80',
                material: 'Memory Foam + Microfiber',
                size: '60x90cm',
                thickness: '3cm',
                colors: 5,
                badge: 'New',
                rating: 4.8,
                reviews: 87
            },
            {
                id: 'mat-bamboo-teak',
                name: 'Bamboo Teak Bath Mat',
                price: 4500,
                image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&q=80',
                material: 'Solid Bamboo',
                size: '55x55cm',
                thickness: '1.5cm',
                colors: 2,
                badge: 'Eco-Friendly',
                rating: 4.7,
                reviews: 156
            },
            {
                id: 'mat-cotton-tufted',
                name: 'Egyptian Cotton Tufted Mat',
                price: 2800,
                image: 'https://images.unsplash.com/photo-1584417512347-57e05d16d528?w=500&q=80',
                material: 'Egyptian Cotton',
                size: '50x80cm',
                thickness: '1.8cm',
                colors: 8,
                rating: 4.6,
                reviews: 98
            },
            {
                id: 'mat-diatomite',
                name: 'Diatomite Quick-Dry Mat',
                price: 3200,
                image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&q=80',
                material: 'Diatomaceous Earth',
                size: '60x39cm',
                thickness: '0.9cm',
                colors: 4,
                badge: 'Innovation',
                rating: 4.5,
                reviews: 67
            }
        ],
        accessories: [
            {
                id: 'acc-towel-warmer',
                name: 'Towel Warmer Rack',
                price: 15000,
                image: 'https://images.unsplash.com/photo-1584417512347-57e05d16d528?w=500&q=80',
                material: 'Stainless Steel',
                finish: ['Chrome', 'Matte Black', 'Brushed Gold'],
                badge: 'Luxury',
                rating: 4.8,
                reviews: 45
            },
            {
                id: 'acc-bath-caddy',
                name: 'Bamboo Bath Caddy',
                price: 3200,
                image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&q=80',
                material: 'Bamboo',
                finish: ['Natural', 'Dark Walnut'],
                badge: 'Eco-Friendly',
                rating: 4.7,
                reviews: 89
            },
            {
                id: 'acc-robe-hook',
                name: 'Designer Robe Hook Set (2)',
                price: 1800,
                image: 'https://images.unsplash.com/photo-1584417512347-57e05d16d528?w=500&q=80',
                material: 'Solid Brass',
                finish: ['Chrome', 'Brushed Nickel', 'Matte Black', 'Brushed Gold', 'Gunmetal'],
                rating: 4.6,
                reviews: 134
            },
            {
                id: 'acc-towel-ring',
                name: 'Designer Towel Ring',
                price: 2200,
                image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&q=80',
                material: 'Solid Brass',
                finish: ['Chrome', 'Brushed Nickel', 'Matte Black', 'Brushed Gold', 'Gunmetal'],
                rating: 4.7,
                reviews: 98
            },
            {
                id: 'acc-soap-dispenser',
                name: 'Automatic Soap Dispenser',
                price: 2800,
                image: 'https://images.unsplash.com/photo-1584417512347-57e05d16d528?w=500&q=80',
                material: 'Stainless Steel + ABS',
                finish: ['Chrome', 'Matte Black', 'White'],
                badge: 'Smart',
                rating: 4.5,
                reviews: 76
            },
            {
                id: 'acc-toothbrush-holder',
                name: 'Magnetic Toothbrush Holder',
                price: 1500,
                image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&q=80',
                material: 'ABS + Magnetic',
                finish: ['White', 'Black', 'Gray'],
                badge: 'Innovation',
                rating: 4.6,
                reviews: 112
            }
        ]
    };

    // ==========================================================================
    // STATE
    // ==========================================================================

    const state = {
        activeCategory: 'all',
        activeColor: 'white'
    };

    // ==========================================================================
    // DOM ELEMENTS
    // ==========================================================================

    const elements = {
        categoryTabs: $$('.category-tab'),
        categorySections: $$('.category-section'),
        colorSwatches: $$('.color-swatch'),
        featuredMainImage: $('#featured-main'),
        featuredThumbnails: $$('.featured-media .thumbnail'),
        grids: {
            towels: $('#towels-grid'),
            robes: $('#robes-grid'),
            mats: $('#mats-grid'),
            accessories: $('#accessories-grid')
        }
    };

    // ==========================================================================
    // INITIALIZATION
    // ==========================================================================

    function init() {
        renderAllProducts();
        setupCategoryTabs();
        setupColorSwatches();
        setupFeaturedGallery();
        setupScrollAnimations();
    }

    // ==========================================================================
    // RENDERING
    // ==========================================================================

    function renderAllProducts() {
        Object.keys(textileProducts).forEach(category => {
            renderCategory(category);
        });
    }

    function renderCategory(category) {
        const grid = elements.grids[category];
        if (!grid) return;

        const products = textileProducts[category];
        grid.innerHTML = products.map(product => createProductCard(product, category)).join('');

        // Stagger animation
        requestAnimationFrame(() => {
            $$('.product-card', grid).forEach((card, index) => {
                card.style.transitionDelay = `${index * 50}ms`;
                card.classList.add('visible');
            });
        });
    }

    function createProductCard(product, category) {
        const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
        const hasOriginalPrice = product.originalPrice && product.originalPrice > product.price;

        return `
            <article class="product-card reveal" data-product-id="${product.id}" data-category="${category}" role="listitem">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                    ${discount ? `<span class="product-discount">-${discount}%</span>` : ''}
                </div>
                <div class="product-info">
                    <div class="product-meta">
                        <span class="product-material">${product.material}</span>
                        ${product.gsm ? `<span class="product-gsm">${product.gsm} GSM</span>` : ''}
                        ${product.weight ? `<span class="product-weight">${product.weight}</span>` : ''}
                    </div>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-specs">
                        ${product.size ? `<span class="spec"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>${product.size}</span>` : ''}
                        ${product.thickness ? `<span class="spec"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="19" x2="12" y2="5"/><line x1="5" y1="12" x2="19" y2="12"/></svg>${product.thickness}</span>` : ''}
                        ${product.colors ? `<span class="spec"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>${product.colors} colors</span>` : ''}
                    </div>
                    <div class="product-rating">
                        <div class="stars" aria-label="${product.rating} out of 5 stars">${renderStars(product.rating)}</div>
                        <span class="review-count">(${product.reviews})</span>
                    </div>
                    <div class="product-price">
                        <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
                        ${hasOriginalPrice ? `<span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary btn-sm" data-product-id="${product.id}">Add to Cart</button>
                        <button class="btn btn-outline btn-sm wishlist-btn" data-product-id="${product.id}" aria-label="Add ${product.name} to wishlist">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }

    function renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 >= 0.5;
        let stars = '';
        for (let i = 0; i < fullStars; i++) {
            stars += '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
        }
        if (hasHalf) {
            stars += '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
        }
        const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
        }
        return stars;
    }

    // ==========================================================================
    // CATEGORY TABS
    // ==========================================================================

    function setupCategoryTabs() {
        elements.categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const category = tab.dataset.category;
                
                // Update tabs
                elements.categoryTabs.forEach(t => {
                    t.classList.toggle('active', t === tab);
                    t.setAttribute('aria-selected', t === tab);
                });
                
                // Update sections visibility
                elements.categorySections.forEach(section => {
                    const isActive = category === 'all' || section.dataset.category === category;
                    section.style.display = isActive ? 'block' : 'none';
                    
                    if (isActive) {
                        requestAnimationFrame(() => {
                            section.classList.add('visible');
                        });
                    }
                });
                
                state.activeCategory = category;
                
                // Smooth scroll to first section if not 'all'
                if (category !== 'all') {
                    const targetSection = document.getElementById(`${category}-section`);
                    if (targetSection) {
                        setTimeout(() => {
                            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 100);
                    }
                }
            });
        });
    }

    // ==========================================================================
    // COLOR SWATCHES
    // ==========================================================================

    function setupColorSwatches() {
        elements.colorSwatches.forEach(swatch => {
            swatch.addEventListener('click', () => {
                elements.colorSwatches.forEach(s => s.classList.remove('active'));
                swatch.classList.add('active');
                state.activeColor = swatch.dataset.color;
                
                // Could filter products by color here
                // For now, just visual feedback
                window.HindwarePremium.showToast(`Selected color: ${swatch.dataset.color.charAt(0).toUpperCase() + swatch.dataset.color.slice(1)}`, 'info');
            });
        });
    }

    // ==========================================================================
    // FEATURED GALLERY
    // ==========================================================================

    function setupFeaturedGallery() {
        elements.featuredThumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                const src = thumb.dataset.src;
                
                elements.featuredThumbnails.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                
                if (elements.featuredMainImage.src !== src) {
                    elements.featuredMainImage.style.opacity = '0';
                    elements.featuredMainImage.style.transform = 'scale(0.98)';
                    
                    setTimeout(() => {
                        elements.featuredMainImage.src = src;
                        elements.featuredMainImage.style.opacity = '1';
                        elements.featuredMainImage.style.transform = 'scale(1)';
                    }, 150);
                }
            });
        });
    }

    // ==========================================================================
    // SCROLL ANIMATIONS
    // ==========================================================================

    function setupScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    const children = entry.target.querySelectorAll('.reveal');
                    children.forEach((child, index) => {
                        child.style.transitionDelay = `${index * 80}ms`;
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

        $$('.category-section, .material-card, .care-card').forEach(el => observer.observe(el));
    }

    // ==========================================================================
    // EXPOSE PUBLIC API
    // ==========================================================================

    window.HindwarePremium = window.HindwarePremium || {};
    window.HindwarePremium.textiles = {
        products: textileProducts,
        state,
        init,
        renderCategory
    };

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();