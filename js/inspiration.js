/* ==========================================================================
   HINDWARE PREMIUM - INSPIRATION PAGE JAVASCRIPT
   ========================================================================== */

(function() {
    'use strict';

    const projects = [
        {
            id: 'proj-1',
            title: 'Mumbai Penthouse Master Bath',
            location: 'Mumbai, India',
            category: 'residential',
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
            collections: ['Rain Symphony', 'Precision'],
            description: 'Floor-to-ceiling marble with Rain Symphony 500 ceiling mount and Precision digital valve.',
            featured: true
        },
        {
            id: 'proj-2',
            title: 'Taj Palace Hotel Spa Suite',
            location: 'New Delhi, India',
            category: 'hospitality',
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
            collections: ['Cascade'],
            description: 'Cascade Wellness System with chromotherapy, aromatherapy, and waterfall feature.',
            featured: true
        },
        {
            id: 'proj-3',
            title: 'Bangalore Wellness Retreat',
            location: 'Bangalore, India',
            category: 'wellness',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
            collections: ['Cascade', 'Precision'],
            description: 'Multi-station hydrotherapy with Precision body jets and Cascade therapy programs.',
            featured: true
        },
        {
            id: 'proj-4',
            title: 'Compact Luxury Apartment',
            location: 'Mumbai, India',
            category: 'compact',
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
            collections: ['Precision'],
            description: 'Precision Dual System in 40 sq ft - rain head, handheld, and thermostatic valve.',
            featured: false
        },
        {
            id: 'proj-5',
            title: 'Heritage Villa Restoration',
            location: 'Jaipur, India',
            category: 'residential',
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
            collections: ['Heritage'],
            description: 'Heritage Classic System with exposed pipework matching original 1920s architecture.',
            featured: false
        },
        {
            id: 'proj-6',
            title: 'Oberoi Hotel Presidential Suite',
            location: 'Gurgaon, India',
            category: 'hospitality',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
            collections: ['Rain Symphony', 'Cascade'],
            description: 'Dual shower zones: Rain Symphony 400 + Cascade waterfall with smart controls.',
            featured: false
        },
        {
            id: 'proj-7',
            title: 'Modern Farmhouse Bathroom',
            location: 'Pune, India',
            category: 'residential',
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
            collections: ['Rain Symphony'],
            description: 'Rain Symphony 300 wall mount with matte black finish, Shiplap walls, freestanding tub.',
            featured: false
        },
        {
            id: 'proj-8',
            title: 'Urban Wellness Center',
            location: 'Hyderabad, India',
            category: 'wellness',
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
            collections: ['Cascade', 'Precision'],
            description: '6-station therapy suite with Cascade chromotherapy and Precision digital monitoring.',
            featured: false
        },
        {
            id: 'proj-9',
            title: 'Minimalist City Loft',
            location: 'Chennai, India',
            category: 'compact',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
            collections: ['Precision'],
            description: 'Precision 300 ceiling rain + handheld in gunmetal. Concrete walls, floating vanity.',
            featured: false
        },
        {
            id: 'proj-10',
            title: 'Luxury Resort Villas',
            location: 'Goa, India',
            category: 'hospitality',
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
            collections: ['Rain Symphony', 'Heritage'],
            description: 'Outdoor shower garden with Rain Symphony 500 and Heritage handheld in brushed gold.',
            featured: false
        },
        {
            id: 'proj-11',
            title: 'Contemporary Spa Bath',
            location: 'Kochi, India',
            category: 'wellness',
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
            collections: ['Cascade'],
            description: 'Cascade Waterfall 600 as feature wall. Steam integration, heated bench, mood lighting.',
            featured: false
        },
        {
            id: 'proj-12',
            title: 'Art Deco Apartment Reno',
            location: 'Kolkata, India',
            category: 'residential',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
            collections: ['Heritage', 'Precision'],
            description: 'Heritage cross-handle valve with Precision body jets. Geometric tile, brass accents.',
            featured: false
        }
    ];

    const elements = {
        galleryGrid: $('#galleryGrid'),
        filterTabs: $$('.filter-tab'),
        loadMore: $('#loadMore')
    };

    let displayedCount = 8;
    let currentFilter = 'all';

    function init() {
        renderGallery();
        setupFilters();
        setupLoadMore();
    }

    function renderGallery() {
        const filtered = currentFilter === 'all' 
            ? projects 
            : projects.filter(p => p.category === currentFilter);
        
        const toShow = filtered.slice(0, displayedCount);
        
        elements.galleryGrid.innerHTML = toShow.map((project, index) => `
            <article class="gallery-item reveal" data-category="${project.category}" style="transition-delay: ${index * 80}ms" role="listitem">
                <div class="gallery-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                    ${project.featured ? '<span class="gallery-badge">Featured</span>' : ''}
                    <div class="gallery-overlay">
                        <button class="btn btn-white gallery-view" data-project="${project.id}">View Details</button>
                    </div>
                </div>
                <div class="gallery-info">
                    <div class="gallery-meta">
                        <span class="gallery-location">${project.location}</span>
                        <span class="gallery-category">${formatCategory(project.category)}</span>
                    </div>
                    <h3 class="gallery-title">${project.title}</h3>
                    <p class="gallery-desc">${project.description}</p>
                    <div class="gallery-collections">
                        ${project.collections.map(c => `<span class="collection-tag">${c}</span>`).join('')}
                    </div>
                </div>
            </article>
        `).join('');

        requestAnimationFrame(() => {
            $$('.gallery-item', elements.galleryGrid).forEach(item => item.classList.add('visible'));
        });

        elements.loadMore.style.display = displayedCount >= filtered.length ? 'none' : 'block';
    }

    function formatCategory(cat) {
        const labels = {
            'residential': 'Residential',
            'hospitality': 'Hotels & Spas',
            'wellness': 'Wellness Centers',
            'compact': 'Compact Bathrooms'
        };
        return labels[cat] || cat;
    }

    function setupFilters() {
        elements.filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                currentFilter = tab.dataset.filter;
                displayedCount = 8;
                
                elements.filterTabs.forEach(t => {
                    t.classList.toggle('active', t === tab);
                    t.setAttribute('aria-selected', t === tab);
                });
                
                renderGallery();
            });
        });
    }

    function setupLoadMore() {
        elements.loadMore.addEventListener('click', () => {
            displayedCount += 4;
            renderGallery();
        });
    }

    window.HindwarePremium = window.HindwarePremium || {};
    window.HindwarePremium.inspiration = { init, projects };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();