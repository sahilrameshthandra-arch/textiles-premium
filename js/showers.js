/* ==========================================================================
   HINDWARE PREMIUM - SHOWERS PAGE JAVASCRIPT
   ========================================================================== */

(function() {
    'use strict';

    // ==========================================================================
    // PRODUCT DATA
    // ==========================================================================

    const products = [
        // Rain Showers
        {
            id: 'rain-500',
            name: 'Rain Symphony 500',
            category: 'rain',
            collection: 'rain-symphony',
            price: 120000,
            originalPrice: 135000,
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
            images: [
                'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
                'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80'
            ],
            finish: ['chrome', 'brushed-nickel', 'matte-black', 'brushed-gold'],
            features: ['thermostatic', 'water-saving', 'easy-clean'],
            rating: 4.9,
            reviews: 127,
            badge: 'Best Seller',
            description: 'Ultra-wide 500mm rainfall coverage with AirBoost™ technology for 50% more volume perception.',
            specs: {
                'Diameter': '500mm',
                'Spray Patterns': 'Rain, Mist, Rain+Mist',
                'Flow Rate': '9 L/min (EcoFlow™)',
                'Material': '316L Stainless Steel',
                'Warranty': '10 Years'
            }
        },
        {
            id: 'rain-400',
            name: 'Rain Symphony 400',
            category: 'rain',
            collection: 'rain-symphony',
            price: 85000,
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
            finish: ['chrome', 'brushed-nickel', 'matte-black', 'brushed-gold', 'gunmetal'],
            features: ['water-saving', 'easy-clean'],
            rating: 4.8,
            reviews: 89,
            description: '400mm rain shower with adjustable intensity and silicone EasyClean™ nozzles.',
            specs: {
                'Diameter': '400mm',
                'Spray Patterns': 'Rain, Mist',
                'Flow Rate': '8 L/min',
                'Material': 'Brass with PVD coating',
                'Warranty': '10 Years'
            }
        },
        {
            id: 'rain-300-ceiling',
            name: 'Precision Ceiling 300',
            category: 'rain',
            collection: 'precision',
            price: 45000,
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
            finish: ['chrome', 'brushed-nickel', 'matte-black'],
            features: ['water-saving', 'easy-clean'],
            rating: 4.7,
            reviews: 56,
            badge: 'New',
            description: 'Minimalist 300mm ceiling-mounted rain shower for clean architectural lines.',
            specs: {
                'Diameter': '300mm',
                'Spray Patterns': 'Rain',
                'Flow Rate': '7.5 L/min',
                'Material': 'Solid Brass',
                'Warranty': '10 Years'
            }
        },
        {
            id: 'rain-300-wall',
            name: 'Precision Wall 300',
            category: 'rain',
            collection: 'precision',
            price: 38000,
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
            finish: ['chrome', 'brushed-nickel', 'matte-black', 'brushed-gold'],
            features: ['water-saving', 'easy-clean'],
            rating: 4.7,
            reviews: 43,
            description: 'Wall-mounted 300mm rain shower with adjustable arm for flexible positioning.',
            specs: {
                'Diameter': '300mm',
                'Spray Patterns': 'Rain',
                'Flow Rate': '7.5 L/min',
                'Material': 'Solid Brass',
                'Warranty': '10 Years'
            }
        },
        {
            id: 'rain-heritage',
            name: 'Heritage Rain 250',
            category: 'rain',
            collection: 'heritage',
            price: 55000,
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
            finish: ['chrome', 'brushed-nickel', 'brushed-gold'],
            features: ['easy-clean'],
            rating: 4.6,
            reviews: 34,
            description: 'Classic Victorian-style 250mm rain shower with exposed pipework option.',
            specs: {
                'Diameter': '250mm',
                'Spray Patterns': 'Rain',
                'Flow Rate': '9 L/min',
                'Material': 'Solid Brass',
                'Warranty': '10 Years'
            }
        },

        // Handheld Showers
        {
            id: 'handheld-pro',
            name: 'Precision Handheld Pro',
            category: 'handheld',
            collection: 'precision',
            price: 18000,
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
            finish: ['chrome', 'brushed-nickel', 'matte-black', 'brushed-gold', 'gunmetal'],
            features: ['water-saving', 'easy-clean'],
            rating: 4.8,
            reviews: 156,
            badge: 'Best Seller',
            description: 'Ergonomic 5-mode handheld with Magnetic DockPro™ and 1.5m tangle-free hose.',
            specs: {
                'Spray Patterns': 'Rain, Massage, Mist, Jet, Eco',
                'Flow Rate': '6.5 L/min (EcoFlow™)',
                'Hose Length': '1.5m',
                'Material': 'ABS body, Brass connections',
                'Warranty': '5 Years'
            }
        },
        {
            id: 'handheld-rain',
            name: 'Rain Symphony Handheld',
            category: 'handheld',
            collection: 'rain-symphony',
            price: 22000,
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
            finish: ['chrome', 'brushed-nickel', 'matte-black', 'brushed-gold'],
            features: ['water-saving', 'easy-clean'],
            rating: 4.7,
            reviews: 78,
            description: 'Large-face handheld matching Rain Symphony aesthetics with 4 spray modes.',
            specs: {
                'Spray Patterns': 'Rain, Massage, Mist, Eco',
                'Flow Rate': '7 L/min',
                'Hose Length': '1.5m',
                'Material': 'Brass face, ABS body',
                'Warranty': '5 Years'
            }
        },
        {
            id: 'handheld-wellness',
            name: 'Cascade Wellness Wand',
            category: 'handheld',
            collection: 'cascade',
            price: 35000,
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
            finish: ['chrome', 'brushed-gold'],
            features: ['water-saving', 'easy-clean', 'chromotherapy'],
            rating: 4.9,
            reviews: 45,
            description: 'Therapeutic handheld with chromotherapy LED ring and aromatherapy capsule.',
            specs: {
                'Spray Patterns': 'Rain, Massage, Mist, Pulse, Eco',
                'Flow Rate': '6 L/min',
                'Hose Length': '1.5m',
                'Special': 'Chromotherapy + Aromatherapy',
                'Warranty': '5 Years'
            }
        },
        {
            id: 'handheld-basic',
            name: 'Essential Handheld 3-Mode',
            category: 'handheld',
            collection: 'precision',
            price: 8500,
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
            finish: ['chrome', 'brushed-nickel', 'matte-black'],
            features: ['water-saving', 'easy-clean'],
            rating: 4.5,
            reviews: 234,
            description: 'Affordable 3-mode handheld with magnetic docking and EasyClean™ nozzles.',
            specs: {
                'Spray Patterns': 'Rain, Massage, Eco',
                'Flow Rate': '7 L/min',
                'Hose Length': '1.5m',
                'Material': 'ABS body',
                'Warranty': '3 Years'
            }
        },

        // Body Jets
        {
            id: 'body-jet-round',
            name: 'Precision Body Jet Round (Set of 4)',
            category: 'body',
            collection: 'precision',
            price: 42000,
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
            finish: ['chrome', 'brushed-nickel', 'matte-black', 'brushed-gold'],
            features: ['water-saving'],
            rating: 4.7,
            reviews: 67,
            description: 'Flush-mount round body jets with 360° directional adjustment and pulsating mode.',
            specs: {
                'Configuration': '4 Jets',
                'Adjustment': '360° directional',
                'Modes': 'Steady, Pulsating',
                'Flow Rate': '3 L/min per jet',
                'Warranty': '10 Years'
            }
        },
        {
            id: 'body-jet-square',
            name: 'Precision Body Jet Square (Set of 6)',
            category: 'body',
            collection: 'precision',
            price: 58000,
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
            finish: ['chrome', 'brushed-nickel', 'matte-black'],
            features: ['water-saving'],
            rating: 4.8,
            reviews: 38,
            description: 'Architectural square body jets for modern bathrooms. 6-jet configuration.',
            specs: {
                'Configuration': '6 Jets',
                'Adjustment': '360° directional',
                'Modes': 'Steady, Pulsating, Wave',
                'Flow Rate': '2.5 L/min per jet',
                'Warranty': '10 Years'
            }
        },
        {
            id: 'body-jet-therapy',
            name: 'Cascade Therapy Jets (Set of 4)',
            category: 'body',
            collection: 'cascade',
            price: 78000,
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
            finish: ['chrome', 'brushed-gold'],
            features: ['water-saving', 'chromotherapy'],
            rating: 4.9,
            reviews: 29,
            description: 'Therapy jets with chromotherapy lighting and adjustable massage intensity.',
            specs: {
                'Configuration': '4 Jets',
                'Adjustment': '360° + intensity control',
                'Modes': 'Steady, Pulsating, Wave, Massage',
                'Special': 'Chromotherapy LEDs',
                'Warranty': '10 Years'
            }
        },

        // Smart Showers
        {
            id: 'smart-digital',
            name: 'Precision Digital Smart Valve',
            category: 'digital',
            collection: 'precision',
            price: 95000,
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
            finish: ['chrome', 'brushed-nickel', 'matte-black', 'brushed-gold', 'gunmetal'],
            features: ['thermostatic', 'water-saving', 'smart'],
            rating: 4.9,
            reviews: 89,
            badge: 'Best Seller',
            description: 'WiFi-enabled thermostatic valve with app control, 6 user profiles, and voice activation.',
            specs: {
                'Control': 'App, Voice, Touch panel',
                'Profiles': '6 user presets',
                'Temperature': '±0.5°C accuracy',
                'Safety': 'Auto shutoff at 38°C',
                'Connectivity': 'WiFi, Bluetooth',
                'Warranty': '5 Years Electronics / 10 Years Valve'
            }
        },
        {
            id: 'smart-complete',
            name: 'Rain Symphony Smart System',
            category: 'digital',
            collection: 'rain-symphony',
            price: 185000,
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
            finish: ['chrome', 'brushed-nickel', 'matte-black', 'brushed-gold'],
            features: ['thermostatic', 'water-saving', 'smart'],
            rating: 5.0,
            reviews: 23,
            description: 'Complete smart shower: 400mm rain head + handheld + digital valve + app control.',
            specs: {
                'Includes': 'Rain 400, Handheld, Digital Valve',
                'Control': 'App, Voice, Touch panel',
                'Profiles': '6 user presets',
                'Monitoring': 'EcoSense™ water/energy tracking',
                'Warranty': '5 Years Electronics / 10 Years Fixtures'
            }
        },
        {
            id: 'smart-wellness',
            name: 'Cascade Smart Wellness',
            category: 'digital',
            collection: 'cascade',
            price: 285000,
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
            finish: ['chrome', 'brushed-gold'],
            features: ['thermostatic', 'water-saving', 'smart', 'chromotherapy'],
            rating: 5.0,
            reviews: 12,
            description: 'Ultimate wellness: Rain + Waterfall + Body Jets + Chromotherapy + Aromatherapy + App.',
            specs: {
                'Includes': 'Rain 500, Waterfall, 4 Therapy Jets, Handheld, Digital Valve',
                'Control': 'App, Voice, Touch panel',
                'Wellness': 'Chromotherapy, Aromatherapy, Sound',
                'Monitoring': 'EcoSense™ + Health insights',
                'Warranty': '5 Years Electronics / 10 Years Fixtures'
            }
        },

        // Complete Systems
        {
            id: 'system-dual',
            name: 'Precision Dual System',
            category: 'combo',
            collection: 'precision',
            price: 85000,
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
            finish: ['chrome', 'brushed-nickel', 'matte-black', 'brushed-gold'],
            features: ['thermostatic', 'water-saving'],
            rating: 4.8,
            reviews: 112,
            badge: 'Best Value',
            description: 'Rain 300mm + Handheld Pro + Thermostatic valve. Single control for both.',
            specs: {
                'Includes': 'Rain 300, Handheld Pro, Thermostatic Valve',
                'Control': 'Single lever diverter',
                'Valve': 'ThermoLock™ thermostatic',
                'Installation': 'EasyFit™ compatible',
                'Warranty': '10 Years'
            }
        },
        {
            id: 'system-triple',
            name: 'Rain Symphony Triple System',
            category: 'combo',
            collection: 'rain-symphony',
            price: 145000,
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
            finish: ['chrome', 'brushed-nickel', 'matte-black', 'brushed-gold'],
            features: ['thermostatic', 'water-saving'],
            rating: 4.9,
            reviews: 78,
            description: 'Rain 400mm + Handheld + 4 Body Jets + Thermostatic valve. Complete hydrotherapy.',
            specs: {
                'Includes': 'Rain 400, Handheld, 4 Body Jets, Thermostatic Valve',
                'Control': '3-way diverter',
                'Valve': 'ThermoLock™ thermostatic',
                'Jets': '360° adjustable round jets',
                'Warranty': '10 Years'
            }
        },
        {
            id: 'system-heritage',
            name: 'Heritage Classic System',
            category: 'combo',
            collection: 'heritage',
            price: 125000,
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
            finish: ['chrome', 'brushed-nickel', 'brushed-gold'],
            features: ['thermostatic'],
            rating: 4.7,
            reviews: 45,
            description: 'Victorian exposed system: Rain 250 + Handheld + Cross-handle thermostatic valve.',
            specs: {
                'Includes': 'Rain 250, Handheld, Exposed Thermostatic Valve',
                'Control': 'Cross-handle diverter',
                'Style': 'Victorian exposed pipework',
                'Valve': 'ThermoLock™ thermostatic',
                'Warranty': '10 Years'
            }
        },
        {
            id: 'system-wellness',
            name: 'Cascade Wellness Complete',
            category: 'combo',
            collection: 'cascade',
            price: 225000,
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
            finish: ['chrome', 'brushed-gold'],
            features: ['thermostatic', 'water-saving', 'chromotherapy'],
            rating: 4.9,
            reviews: 31,
            description: 'Rain 500 + Waterfall + 4 Therapy Jets + Handheld + Chromotherapy + Thermostatic.',
            specs: {
                'Includes': 'Rain 500, Waterfall, 4 Therapy Jets, Handheld, Thermostatic Valve',
                'Control': '4-way diverter',
                'Wellness': 'Chromotherapy on jets',
                'Valve': 'ThermoLock™ thermostatic',
                'Warranty': '10 Years'
            }
        }
    ];

    // ==========================================================================
    // STATE
    // ==========================================================================

    const state = {
        currentFilter: 'all',
        currentSort: 'featured',
        currentView: 'grid',
        priceRange: { min: 0, max: 200000 },
        selectedFinishes: [],
        selectedFeatures: [],
        currentPage: 1,
        productsPerPage: 12,
        filteredProducts: [...products]
    };

    // ==========================================================================
    // DOM ELEMENTS
    // ==========================================================================

    const elements = {
        productGrid: $('#productGrid'),
        pagination: $('#pagination'),
        productCount: $('#productCount'),
        filterTabs: $$('.filter-tab'),
        sortSelect: $('#sortSelect'),
        filterToggle: $('#filterToggle'),
        filterPanel: $('#filterPanel'),
        filterPanelClose: $('.filter-panel-close'),
        priceMin: $('#priceMin'),
        priceMax: $('#priceMax'),
        priceMinInput: $('#priceMinInput'),
        priceMaxInput: $('#priceMaxInput'),
        clearFilters: $('#clearFilters'),
        applyFilters: $('#applyFilters'),
        viewButtons: $$('.view-btn'),
        finishCheckboxes: $$('.filter-options input[value^="chrome"], .filter-options input[value^="brushed"], .filter-options input[value^="matte"], .filter-options input[value^="gunmetal"]'),
        featureCheckboxes: $$('.filter-options input[value="thermostatic"], .filter-options input[value="water-saving"], .filter-options input[value="chromotherapy"], .filter-options input[value="smart"], .filter-options input[value="easy-clean"]')
    };

    // ==========================================================================
    // INITIALIZATION
    // ==========================================================================

    function init() {
        parseUrlParams();
        setupEventListeners();
        applyFilters();
        renderProducts();
        renderPagination();
        updateProductCount();
    }

    function parseUrlParams() {
        const params = new URLSearchParams(window.location.search);
        const type = params.get('type');
        if (type && ['rain', 'handheld', 'body', 'digital', 'combo'].includes(type)) {
            state.currentFilter = type;
            updateFilterTabs();
        }
    }

    // ==========================================================================
    // EVENT LISTENERS
    // ==========================================================================

    function setupEventListeners() {
        // Filter tabs
        elements.filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                state.currentFilter = tab.dataset.filter;
                state.currentPage = 1;
                updateFilterTabs();
                applyFilters();
                renderProducts();
                renderPagination();
                updateProductCount();
                updateUrl();
            });
        });

        // Sort select
        elements.sortSelect.addEventListener('change', () => {
            state.currentSort = elements.sortSelect.value;
            applyFilters();
            renderProducts();
        });

        // View toggle
        elements.viewButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                state.currentView = btn.dataset.view;
                elements.viewButtons.forEach(b => b.classList.toggle('active', b === btn));
                elements.productGrid.classList.toggle('list-view', state.currentView === 'list');
            });
        });

        // Filter panel toggle
        elements.filterToggle.addEventListener('click', () => {
            const isOpen = elements.filterPanel.hasAttribute('hidden');
            elements.filterPanel.hidden = !isOpen;
            elements.filterToggle.setAttribute('aria-expanded', isOpen);
        });

        elements.filterPanelClose.addEventListener('click', () => {
            elements.filterPanel.hidden = true;
            elements.filterToggle.setAttribute('aria-expanded', 'false');
        });

        // Price range sync
        elements.priceMin.addEventListener('input', syncPriceInputs);
        elements.priceMax.addEventListener('input', syncPriceInputs);
        elements.priceMinInput.addEventListener('change', syncPriceSliders);
        elements.priceMaxInput.addEventListener('change', syncPriceSliders);

        // Clear filters
        elements.clearFilters.addEventListener('click', clearAllFilters);

        // Apply filters
        elements.applyFilters.addEventListener('click', () => {
            state.currentPage = 1;
            applyFilters();
            renderProducts();
            renderPagination();
            updateProductCount();
            updateUrl();
            elements.filterPanel.hidden = true;
            elements.filterToggle.setAttribute('aria-expanded', 'false');
        });

        // Checkbox changes
        $$('.filter-options input[type="checkbox"]').forEach(cb => {
            cb.addEventListener('change', () => {
                updateSelectedFilters();
            });
        });

        // Close filter panel on outside click
        document.addEventListener('click', (e) => {
            if (!elements.filterPanel.hidden && 
                !elements.filterPanel.contains(e.target) && 
                !elements.filterToggle.contains(e.target)) {
                elements.filterPanel.hidden = true;
                elements.filterToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Product card clicks (delegate)
        elements.productGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            if (card && !e.target.closest('.btn')) {
                const productId = card.dataset.productId;
                openProductModal(productId);
            }
        });
    }

    // ==========================================================================
    // FILTER LOGIC
    // ==========================================================================

    function updateFilterTabs() {
        elements.filterTabs.forEach(tab => {
            const isActive = tab.dataset.filter === state.currentFilter;
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', isActive);
        });
    }

    function syncPriceInputs() {
        state.priceRange.min = parseInt(elements.priceMin.value);
        state.priceRange.max = parseInt(elements.priceMax.value);
        elements.priceMinInput.value = state.priceRange.min;
        elements.priceMaxInput.value = state.priceRange.max;
        validatePriceRange();
    }

    function syncPriceSliders() {
        state.priceRange.min = parseInt(elements.priceMinInput.value) || 0;
        state.priceRange.max = parseInt(elements.priceMaxInput.value) || 200000;
        elements.priceMin.value = state.priceRange.min;
        elements.priceMax.value = state.priceRange.max;
        validatePriceRange();
    }

    function validatePriceRange() {
        if (state.priceRange.min > state.priceRange.max) {
            state.priceRange.min = state.priceRange.max;
            elements.priceMin.value = state.priceRange.min;
            elements.priceMinInput.value = state.priceRange.min;
        }
    }

    function updateSelectedFilters() {
        state.selectedFinishes = $$('.filter-options input[value^="chrome"], .filter-options input[value^="brushed"], .filter-options input[value^="matte"], .filter-options input[value^="gunmetal"]:checked')
            .map(cb => cb.value);
        state.selectedFeatures = $$('.filter-options input[value="thermostatic"], .filter-options input[value="water-saving"], .filter-options input[value="chromotherapy"], .filter-options input[value="smart"], .filter-options input[value="easy-clean"]:checked')
            .map(cb => cb.value);
    }

    function clearAllFilters() {
        state.currentFilter = 'all';
        state.priceRange = { min: 0, max: 200000 };
        state.selectedFinishes = [];
        state.selectedFeatures = [];
        state.currentSort = 'featured';
        
        elements.filterTabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.filter === 'all');
            tab.setAttribute('aria-selected', tab.dataset.filter === 'all');
        });
        elements.sortSelect.value = 'featured';
        elements.priceMin.value = 0;
        elements.priceMax.value = 200000;
        elements.priceMinInput.value = 0;
        elements.priceMaxInput.value = 200000;
        $$('.filter-options input[type="checkbox"]').forEach(cb => cb.checked = false);
        
        state.currentPage = 1;
        applyFilters();
        renderProducts();
        renderPagination();
        updateProductCount();
        updateUrl();
    }

    function applyFilters() {
        let filtered = [...products];

        // Category filter
        if (state.currentFilter !== 'all') {
            filtered = filtered.filter(p => p.category === state.currentFilter);
        }

        // Price filter
        filtered = filtered.filter(p => p.price >= state.priceRange.min && p.price <= state.priceRange.max);

        // Finish filter
        if (state.selectedFinishes.length > 0) {
            filtered = filtered.filter(p => 
                state.selectedFinishes.some(f => p.finish.includes(f))
            );
        }

        // Feature filter
        if (state.selectedFeatures.length > 0) {
            filtered = filtered.filter(p => 
                state.selectedFeatures.every(f => p.features.includes(f))
            );
        }

        // Sort
        filtered = sortProducts(filtered, state.currentSort);

        state.filteredProducts = filtered;
    }

    function sortProducts(products, sortBy) {
        const sorted = [...products];
        switch (sortBy) {
            case 'price-low':
                return sorted.sort((a, b) => a.price - b.price);
            case 'price-high':
                return sorted.sort((a, b) => b.price - a.price);
            case 'newest':
                return sorted.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0));
            case 'rating':
                return sorted.sort((a, b) => b.rating - a.rating);
            case 'featured':
            default:
                return sorted.sort((a, b) => {
                    // Featured: best sellers first, then by rating
                    const aFeatured = a.badge === 'Best Seller' ? 2 : a.badge === 'Best Value' ? 1 : 0;
                    const bFeatured = b.badge === 'Best Seller' ? 2 : b.badge === 'Best Value' ? 1 : 0;
                    return bFeatured - aFeatured || b.rating - a.rating;
                });
        }
    }

    // ==========================================================================
    // RENDERING
    // ==========================================================================

    function renderProducts() {
        const start = (state.currentPage - 1) * state.productsPerPage;
        const end = start + state.productsPerPage;
        const pageProducts = state.filteredProducts.slice(start, end);

        if (pageProducts.length === 0) {
            elements.productGrid.innerHTML = `
                <div class="no-results reveal">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <h3>No products found</h3>
                    <p>Try adjusting your filters or search terms</p>
                    <button class="btn btn-outline" onclick="window.HindwarePremium.showers.clearAllFilters()">Clear All Filters</button>
                </div>
            `;
            return;
        }

        elements.productGrid.innerHTML = pageProducts.map(product => createProductCard(product)).join('');
        
        // Add reveal animation
        requestAnimationFrame(() => {
            $$('.product-card', elements.productGrid).forEach((card, index) => {
                card.style.transitionDelay = `${index * 50}ms`;
                card.classList.add('visible');
            });
        });
    }

    function createProductCard(product) {
        const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
        
        return `
            <article class="product-card reveal" data-product-id="${product.id}" role="listitem">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                    ${discount ? `<span class="product-discount">-${discount}%</span>` : ''}
                    <div class="product-quick-view" aria-label="Quick view ${product.name}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-meta">
                        <span class="product-category">${formatCategory(product.category)}</span>
                        <span class="product-collection">${formatCollection(product.collection)}</span>
                    </div>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-rating">
                        <div class="stars" aria-label="${product.rating} out of 5 stars">
                            ${renderStars(product.rating)}
                        </div>
                        <span class="review-count">(${product.reviews})</span>
                    </div>
                    <div class="product-price">
                        <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
                        ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                    </div>
                    <div class="product-finishes" aria-label="Available finishes">
                        ${product.finish.map(f => `<span class="finish-swatch" data-finish="${f}" style="background: ${getFinishColor(f)}" title="${formatFinish(f)}"></span>`).join('')}
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary btn-sm" data-product-id="${product.id}">View Details</button>
                        <button class="btn btn-outline btn-sm compare-btn" data-product-id="${product.id}" aria-label="Add ${product.name} to comparison">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 16 18 8 22 12"/><polyline points="6 16 6 8 2 12"/></svg>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }

    function formatCategory(category) {
        const labels = {
            'rain': 'Rain Shower',
            'handheld': 'Handheld',
            'body': 'Body Jets',
            'digital': 'Smart Shower',
            'combo': 'Complete System'
        };
        return labels[category] || category;
    }

    function formatCollection(collection) {
        const labels = {
            'rain-symphony': 'Rain Symphony',
            'cascade': 'Cascade',
            'precision': 'Precision',
            'heritage': 'Heritage'
        };
        return labels[collection] || collection;
    }

    function formatFinish(finish) {
        const labels = {
            'chrome': 'Chrome',
            'brushed-nickel': 'Brushed Nickel',
            'matte-black': 'Matte Black',
            'brushed-gold': 'Brushed Gold',
            'gunmetal': 'Gunmetal'
        };
        return labels[finish] || finish;
    }

    function getFinishColor(finish) {
        const colors = {
            'chrome': 'linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 50%, #e8e8e8 100%)',
            'brushed-nickel': 'linear-gradient(135deg, #b0b0b0 0%, #8c8c8c 50%, #b0b0b0 100%)',
            'matte-black': '#1a1a1a',
            'brushed-gold': 'linear-gradient(135deg, #e8c56d 0%, #c9a962 50%, #e8c56d 100%)',
            'gunmetal': 'linear-gradient(135deg, #4a4a4a 0%, #2d2d2d 50%, #4a4a4a 100%)'
        };
        return colors[finish] || '#ccc';
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

    function renderPagination() {
        const totalPages = Math.ceil(state.filteredProducts.length / state.productsPerPage);
        
        if (totalPages <= 1) {
            elements.pagination.innerHTML = '';
            return;
        }

        let paginationHTML = '';
        
        // Previous
        paginationHTML += `
            <button class="page-btn" ${state.currentPage === 1 ? 'disabled' : ''} data-page="${state.currentPage - 1}" aria-label="Previous page">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
        `;
        
        // Page numbers
        const maxVisiblePages = 5;
        let startPage = Math.max(1, state.currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        if (startPage > 1) {
            paginationHTML += `<button class="page-btn" data-page="1">1</button>`;
            if (startPage > 2) {
                paginationHTML += `<span class="page-ellipsis">…</span>`;
            }
        }
        
        for (let i = startPage; i <= endPage; i++) {
            paginationHTML += `
                <button class="page-btn ${i === state.currentPage ? 'active' : ''}" data-page="${i}" ${i === state.currentPage ? 'aria-current="page"' : ''}>${i}</button>
            `;
        }
        
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                paginationHTML += `<span class="page-ellipsis">…</span>`;
            }
            paginationHTML += `<button class="page-btn" data-page="${totalPages}">${totalPages}</button>`;
        }
        
        // Next
        paginationHTML += `
            <button class="page-btn" ${state.currentPage === totalPages ? 'disabled' : ''} data-page="${state.currentPage + 1}" aria-label="Next page">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
        `;
        
        elements.pagination.innerHTML = paginationHTML;
        
        // Add click handlers
        $$('.page-btn', elements.pagination).forEach(btn => {
            btn.addEventListener('click', () => {
                const page = parseInt(btn.dataset.page);
                if (!btn.disabled && page !== state.currentPage) {
                    state.currentPage = page;
                    renderProducts();
                    renderPagination();
                    updateProductCount();
                    updateUrl();
                    window.scrollTo({ top: elements.productGrid.offsetTop - 100, behavior: 'smooth' });
                }
            });
        });
    }

    function updateProductCount() {
        const start = (state.currentPage - 1) * state.productsPerPage + 1;
        const end = Math.min(state.currentPage * state.productsPerPage, state.filteredProducts.length);
        const total = state.filteredProducts.length;
        
        if (total === 0) {
            elements.productCount.textContent = 'No products found';
        } else {
            elements.productCount.textContent = `Showing ${start}–${end} of ${total} products`;
        }
    }

    // ==========================================================================
    // PRODUCT MODAL
    // ==========================================================================

    function openProductModal(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        // Remove existing modal
        $('.product-modal').remove();

        const modal = document.createElement('div');
        modal.className = 'product-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-labelledby', 'modal-title');
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close" aria-label="Close modal">&times;</button>
                <div class="modal-body">
                    <div class="modal-gallery">
                        <div class="main-image">
                            <img src="${product.images[0]}" alt="${product.name}" id="mainImage">
                        </div>
                        <div class="thumbnails">
                            ${product.images.map((img, i) => `
                                <button class="thumbnail ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="View image ${i + 1}">
                                    <img src="${img}" alt="${product.name} view ${i + 1}">
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    <div class="modal-details">
                        <div class="product-meta">
                            <span class="product-category">${formatCategory(product.category)}</span>
                            <span class="product-collection">${formatCollection(product.collection)}</span>
                        </div>
                        <h1 id="modal-title" class="product-title">${product.name}</h1>
                        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                        <div class="product-rating">
                            <div class="stars" aria-label="${product.rating} out of 5 stars">${renderStars(product.rating)}</div>
                            <span class="review-count">(${product.reviews} reviews)</span>
                        </div>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">
                            <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
                            ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                        </div>
                        <div class="product-finishes">
                            <label>Finish:</label>
                            <div class="finish-options">
                                ${product.finish.map(f => `
                                    <button class="finish-option ${product.finish[0] === f ? 'selected' : ''}" data-finish="${f}" aria-label="${formatFinish(f)}" style="background: ${getFinishColor(f)}" title="${formatFinish(f)}"></button>
                                `).join('')}
                            </div>
                        </div>
                        <div class="product-features">
                            <h4>Key Features</h4>
                            <ul>
                                ${product.features.map(f => `<li>${formatFeature(f)}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="product-specs">
                            <h4>Specifications</h4>
                            <dl>
                                ${Object.entries(product.specs).map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
                            </dl>
                        </div>
                        <div class="modal-actions">
                            <button class="btn btn-primary btn-large" onclick="window.HindwarePremium.showers.addToCart('${product.id}')">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                                Add to Cart
                            </button>
                            <button class="btn btn-outline btn-large" onclick="window.HindwarePremium.showers.requestQuote('${product.id}')">
                                Request Quote
                            </button>
                        </div>
                        <div class="modal-assurance">
                            <div class="assurance-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                <span>10 Year Warranty</span>
                            </div>
                            <div class="assurance-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                                <span>Free Shipping</span>
                            </div>
                            <div class="assurance-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                <span>Easy Returns</span>
                            </div>
                            <div class="assurance-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                <span>Expert Installation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // Animate in
        requestAnimationFrame(() => modal.classList.add('active'));

        // Event handlers
        modal.querySelector('.modal-close').addEventListener('click', () => closeModal(modal));
        modal.querySelector('.modal-overlay').addEventListener('click', () => closeModal(modal));
        
        // Thumbnail clicks
        $$('.thumbnail', modal).forEach(thumb => {
            thumb.addEventListener('click', () => {
                const index = parseInt(thumb.dataset.index);
                const mainImage = modal.querySelector('#mainImage');
                mainImage.src = product.images[index];
                $$('.thumbnail', modal).forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        });

        // Finish options
        $$('.finish-option', modal).forEach(opt => {
            opt.addEventListener('click', () => {
                $$('.finish-option', modal).forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
            });
        });

        // Keyboard handling
        const handleKeydown = (e) => {
            if (e.key === 'Escape') {
                closeModal(modal);
                document.removeEventListener('keydown', handleKeydown);
            }
            if (e.key === 'Tab') {
                trapFocus(modal, e);
            }
        };
        document.addEventListener('keydown', handleKeydown);

        // Focus first focusable element
        modal.querySelector('.modal-close').focus();
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }

    function trapFocus(modal, e) {
        const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }

    function formatFeature(feature) {
        const labels = {
            'thermostatic': 'ThermoLock™ Thermostatic Control',
            'water-saving': 'EcoFlow™ Water Saving Technology',
            'chromotherapy': 'Chromotherapy Lighting',
            'smart': 'Smart App & Voice Control',
            'easy-clean': 'EasyClean™ Silicone Nozzles'
        };
        return labels[feature] || feature;
    }

    // ==========================================================================
    // CART & QUOTE (Placeholder functions)
    // ==========================================================================

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        window.HindwarePremium.showToast(`Added ${product.name} to cart`, 'success');
        closeModal($('.product-modal'));
    }

    function requestQuote(productId) {
        const product = products.find(p => p.id === productId);
        window.HindwarePremium.showToast(`Quote requested for ${product.name}. Our team will contact you shortly.`, 'success');
        closeModal($('.product-modal'));
    }

    // ==========================================================================
    // URL MANAGEMENT
    // ==========================================================================

    function updateUrl() {
        const params = new URLSearchParams();
        if (state.currentFilter !== 'all') params.set('type', state.currentFilter);
        if (state.currentSort !== 'featured') params.set('sort', state.currentSort);
        if (state.currentPage > 1) params.set('page', state.currentPage);
        
        const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
        window.history.replaceState({}, '', newUrl);
    }

    // ==========================================================================
    // EXPOSE PUBLIC API
    // ==========================================================================

    window.HindwarePremium = window.HindwarePremium || {};
    window.HindwarePremium.showers = {
        products,
        state,
        init,
        applyFilters,
        renderProducts,
        clearAllFilters,
        addToCart,
        requestQuote,
        openProductModal
    };

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();