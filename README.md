# Hindware Premium - Luxury Bathroom Website

A complete, responsive, premium website for Hindware Premium - a luxury bathroom shower and textiles brand.

## 🌟 Features

### Pages
- **Home** (`index.html`) - Hero, features, collections showcase, shower types, textiles, technology, testimonials, showrooms, newsletter
- **Showers** (`pages/showers.html`) - Product catalog with filtering, sorting, comparison table, buying guide
- **Collections** (`pages/collections.html`) - Four detailed collections (Rain Symphony, Cascade, Precision, Heritage) with galleries
- **Bath Textiles** (`pages/textiles.html`) - Towels, robes, mats, accessories with material guide and care instructions
- **Inspiration** (`pages/inspiration.html`) - Project gallery with filtering, design tips
- **Contact** (`pages/contact.html`) - Appointment booking, quote requests, showroom info, FAQ
- **Catalog** (`pages/catalog.html`) - Download center with PDF resources

### Technical Highlights
- **Vanilla JS** - No frameworks, lightweight (~15KB gzipped)
- **CSS Custom Properties** - Complete design system with dark mode support
- **Intersection Observer** - Scroll-triggered animations
- **Accessibility** - ARIA labels, keyboard navigation, focus management, skip links
- **Responsive** - Mobile-first, breakpoints at 480/768/992/1200px
- **Performance** - Lazy loading, preloading, debounced/throttled events
- **Modern CSS** - Grid, Flexbox, clamp(), container queries ready

## 🚀 Quick Start

```bash
# Serve locally (any static server)
npx serve hindware-premium
# or
cd hindware-premium && python3 -m http.server 8000
# or
cd hindware-premium && php -S localhost:8000
```

Open `http://localhost:8000` in your browser.

## 📁 Structure

```
hindware-premium/
├── index.html              # Homepage
├── css/
│   ├── main.css           # Complete design system + components
│   └── animations.css     # Reveal, stagger, micro-interactions
├── js/
│   ├── main.js            # Core: nav, scroll, reveal, counters, toast
│   ├── showers.js         # Product filtering, sorting, modal
│   ├── collections.js     # Gallery thumbnails, scroll spy
│   ├── textiles.js        # Category tabs, color swatches
│   ├── inspiration.js     # Project gallery, load more
│   ├── contact.js         # Form validation, submission
│   └── catalog.js         # Download handlers
├── pages/                 # All sub-pages
└── images/
    └── favicon.svg        # Brand favicon
```

## 🎨 Design System

### Colors
```css
--color-primary: #1a1a2e;      /* Deep navy */
--color-secondary: #c9a962;    /* Gold */
--color-accent: #d4a574;       /* Light gold */
--color-white: #ffffff;
--color-off-white: #faf9f6;
--color-text: #2d2d2d;
```

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Scale**: clamp() fluid sizing

### Spacing
- Base: 1rem (16px)
- Scale: xs(4px) → 4xl(96px)

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML5
- Focus indicators
- Reduced motion support
- Screen reader optimized
- Keyboard navigable

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔧 Customization

### Colors
Edit CSS custom properties in `css/main.css`:
```css
:root {
  --color-primary: #your-brand-color;
  --color-secondary: #your-accent-color;
}
```

### Content
Update product data in respective JS files (`showers.js`, `textiles.js`, `inspiration.js`)

### Images
Replace Unsplash URLs with your assets in HTML and JS

## 📄 License

MIT License - Feel free to use for your projects.

---

**Built with ❤️ for Hindware Premium**