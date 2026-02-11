# Ponto Cruz Concept Store - Website

> From Porto Artisans to the World—Authentically Portuguese, Thoughtfully Selected

A museum-quality, multilingual static website for Ponto Cruz Concept Store built with React, featuring Portuguese/English/Korean/Japanese translations, SEO optimization, and Netlify deployment.

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Development](#development)
4. [Content Management](#content-management)
5. [Translations](#translations)
6. [Images & Media](#images--media)
7. [Deployment](#deployment)
8. [Analytics & Compliance](#analytics--compliance)
9. [Customization](#customization)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Building for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
ponto-cruz-site/
├── public/
│   ├── images/
│   │   ├── hero/           # Homepage hero images
│   │   ├── brands/         # Brand logos
│   │   ├── products/       # Product photos by brand
│   │   └── places/         # Porto recommendations photos
│   └── logo-placeholder.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation with language switcher
│   │   ├── Footer.jsx      # Footer with contact info
│   │   └── CookieConsent.jsx
│   ├── pages/
│   │   ├── Home.jsx        # Homepage
│   │   ├── About.jsx       # About the family business
│   │   ├── Brands.jsx      # Brands listing
│   │   ├── BrandDetail.jsx # Individual brand page
│   │   ├── Visit.jsx       # Store location & info
│   │   ├── Porto.jsx       # Porto recommendations
│   │   └── Contact.jsx     # Contact form
│   ├── data/
│   │   ├── brands.js       # Brands data with schema
│   │   ├── places.js       # Porto places data
│   │   └── visitInfo.js    # Store location info
│   ├── locales/
│   │   ├── pt.json         # Portuguese translations
│   │   ├── en.json         # English translations
│   │   ├── ko.json         # Korean translations
│   │   └── ja.json         # Japanese translations
│   ├── utils/
│   │   ├── LanguageContext.jsx
│   │   └── analytics.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── netlify.toml
└── README.md
```

---

## 🛠 Development

### Available Scripts

```bash
npm run dev       # Start development server (hot reload)
npm run build     # Create production build
npm run preview   # Preview production build
```

### Development Workflow

1. **Start dev server**: `npm run dev`
2. **Make changes**: Edit files in `src/`
3. **Auto-reload**: Browser updates automatically
4. **Test**: Check all languages (pt, en, ko, ja)
5. **Build**: `npm run build` before deploying

---

## 📝 Content Management

### Adding Brands

**File**: `src/data/brands.js`

```javascript
{
  "slug": "brand-name",  // URL-friendly identifier
  "logo": "/images/brands/brand-logo.jpg",
  "featured": true,  // Show on homepage
  "translations": {
    "pt": {
      "name": "Nome da Marca",
      "tagline": "Descrição breve",
      "origin": "Porto, Portugal",
      "philosophy": "Filosofia da marca...",
      "story": "História completa..."
    },
    "en": { /* English translations */ },
    "ko": { /* Korean translations */ },
    "ja": { /* Japanese translations */ }
  },
  "products": [
    {
      "image": "/images/products/brand-name/product-1.jpg",
      "translations": {
        "pt": { "name": "...", "description": "..." },
        // ... other languages
      }
    }
  ]
}
```

**Steps**:
1. Add entry to array in `brands.js`
2. Upload brand logo to `public/images/brands/`
3. Create folder `public/images/products/brand-slug/`
4. Add product images to that folder
5. Translate all text fields to 4 languages
6. Rebuild: `npm run build`

### Adding Porto Recommendations

**File**: `src/data/places.js`

```javascript
{
  "slug": "place-name",
  "image": "/images/places/place-photo.jpg",
  "category": "visit" | "eat",  // Category filter
  "featured": true,  // Show on homepage
  "location": {
    "lat": 41.1579,
    "lng": -8.6291,
    "address": "Rua Exemplo, Porto"
  },
  "translations": {
    "pt": {
      "name": "Nome do Local",
      "description": "Porque recomendamos...",
      "tips": "Dicas úteis (opcional)"
    },
    // ... other languages
  }
}
```

**Steps**:
1. Add entry to array in `places.js`
2. Upload place photo to `public/images/places/`
3. Set category: "visit" or "eat"
4. Add GPS coordinates for map link
5. Translate to 4 languages
6. Rebuild

### Updating Store Information

**File**: `src/data/visitInfo.js`

Update:
- Address, phone, email
- Opening hours
- GPS coordinates (for map)
- Public transport info
- Parking details
- Accessibility info
- Languages spoken

All fields support 4-language translations.

---

## 🌍 Translations

### Translation Files

Located in `src/locales/`:
- `pt.json` - Portuguese (default)
- `en.json` - English
- `ko.json` - Korean
- `ja.json` - Japanese

### Adding New Translation Keys

1. Add key to all 4 language files:

```json
// pt.json
{
  "newSection": {
    "title": "Título em Português"
  }
}

// en.json
{
  "newSection": {
    "title": "Title in English"
  }
}
// ... ko.json, ja.json
```

2. Use in components:

```jsx
import { useLanguage } from '../utils/LanguageContext';

function Component() {
  const { t } = useLanguage();
  return <h1>{t('newSection.title')}</h1>;
}
```

### Language URL Structure

- Portuguese: `https://yoursite.com/pt`
- English: `https://yoursite.com/en`
- Korean: `https://yoursite.com/ko`
- Japanese: `https://yoursite.com/ja`

All pages follow this pattern:
- `/pt/about`, `/en/about`, `/ko/about`, `/ja/about`
- `/pt/brands`, `/en/brands`, etc.

---

## 🖼 Images & Media

### Image Organization

```
public/images/
├── hero/              # Homepage images
│   ├── hero-image.jpg       # Main hero background
│   ├── store-interior.jpg   # About preview
│   ├── family-photo.jpg     # About page
│   ├── porto-view.jpg       # About page
│   ├── craftsmanship.jpg    # About page
│   └── store-detail.jpg     # About page
├── brands/            # Brand logos
│   └── [brand-name].jpg
├── products/          # Product photos
│   └── [brand-slug]/
│       ├── product-1.jpg
│       ├── product-2.jpg
│       └── ...
└── places/            # Porto recommendations
    └── [place-name].jpg
```

### Image Guidelines

**Formats**: JPG, PNG, WebP
**Hero Images**: 1920x1080px minimum
**Brand Logos**: 800x800px, transparent PNG preferred
**Product Photos**: 1200x1200px, square format
**Place Photos**: 1600x1200px (4:3 ratio)

### Optimizing Images

Before uploading:
1. Resize to recommended dimensions
2. Compress with tools like:
   - [TinyPNG](https://tinypng.com/)
   - [ImageOptim](https://imageoptim.com/)
   - [Squoosh](https://squoosh.app/)
3. Use descriptive filenames: `leather-wallet-brown.jpg`

### Replacing Hero Image

1. Place new image in `public/images/hero/`
2. Name it `hero-image.jpg` OR
3. Update path in `src/pages/Home.jsx`:

```jsx
<img src="/images/hero/your-new-hero.jpg" alt="..." />
```

### Replacing Logo

**Option 1: Simple replacement**
1. Export logo as SVG or PNG
2. Name it `logo-placeholder.svg`
3. Replace file in `public/`

**Option 2: Custom logo**
1. Place logo file in `public/images/`
2. Update `src/components/Header.jsx`:

```jsx
<img src="/images/your-logo.svg" alt="Ponto Cruz" />
```

3. Update `index.html`:

```html
<link rel="icon" type="image/svg+xml" href="/images/your-logo.svg" />
```

---

## 🚀 Deployment

### Deploying to Netlify

#### Method 1: Git Integration (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Netlify auto-detects settings from `netlify.toml`
   - Click "Deploy"

3. **Auto-Deploy**:
   - Every push to `main` branch automatically deploys
   - Preview deployments for other branches

#### Method 2: Manual Deploy

```bash
# Build the site
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Custom Domain

1. In Netlify dashboard → Domain settings
2. Add custom domain
3. Follow DNS configuration instructions
4. SSL certificate auto-provisions

### Environment Variables (if needed)

Netlify Dashboard → Site settings → Environment variables

---

## 📊 Analytics & Compliance

### Google Analytics 4 Setup

**File**: `src/utils/analytics.js`

```javascript
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Your GA4 ID
const ENABLED = true; // Enable tracking
```

**Getting your GA4 ID**:
1. Go to [Google Analytics](https://analytics.google.com)
2. Create property (if new)
3. Go to Admin → Data Streams → Web
4. Copy Measurement ID (G-XXXXXXXXXX)
5. Paste into `analytics.js`
6. Set `ENABLED = true`
7. Rebuild and deploy

### Cookie Consent Banner

Automatically shows on first visit. User choices:
- **Accept**: Enables GA4 tracking
- **Decline**: No tracking, respects privacy

Preference stored in browser localStorage.

**To disable cookie banner**:
Remove `<CookieConsent />` from `src/App.jsx`

### GDPR Compliance

- Cookie banner meets EU requirements
- Tracking only after explicit consent
- No tracking cookies without acceptance
- User can decline analytics

---

## 🎨 Customization

### Changing Colors

**File**: `src/styles/global.css`

```css
:root {
  --color-cream: #faf8f5;      /* Background */
  --color-black: #1a1a1a;      /* Text */
  --color-grey-dark: #2d2d2d;  /* Headings */
  --color-grey-mid: #666666;   /* Body text */
  --color-border: #e8e6e3;     /* Borders */
}
```

### Changing Fonts

Current fonts:
- **Headings**: Cormorant Garamond (serif)
- **Body**: Work Sans (sans-serif)

To change:

1. **Google Fonts**:
   ```html
   <!-- index.html -->
   <link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
   ```

2. **Update CSS**:
   ```css
   /* global.css */
   :root {
     --font-serif: 'Your Serif Font', serif;
     --font-sans: 'Your Sans Font', sans-serif;
   }
   ```

### Customizing Spacing

```css
:root {
  --spacing-sm: 1rem;   /* Small gaps */
  --spacing-md: 2rem;   /* Medium gaps */
  --spacing-lg: 4rem;   /* Large sections */
  --spacing-xl: 6rem;   /* Extra spacing */
}
```

---

## 📧 Contact Form Configuration

### Netlify Forms Setup

The contact form automatically works with Netlify Forms.

**To receive submissions**:

1. Deploy to Netlify
2. Go to Netlify Dashboard → Forms
3. Set notification email in Form notifications
4. Test by submitting the form

**No additional configuration needed** - the form includes:
```html
<form name="contact" method="POST" data-netlify="true">
```

### Custom Email Handler (Alternative)

To use your own email service:

1. Replace form submission in `src/pages/Contact.jsx`
2. Use services like:
   - [Formspree](https://formspree.io/)
   - [EmailJS](https://www.emailjs.com/)
   - Custom serverless function

---

## 🔧 Troubleshooting

### Build Errors

**Issue**: `Module not found`
**Fix**: `npm install` to ensure dependencies are installed

**Issue**: Image not showing
**Fix**: Check image path starts with `/` e.g., `/images/hero/hero.jpg`

### Language Switching

**Issue**: Language doesn't change
**Fix**: Ensure all 4 language files have the same structure

### Deployment Issues

**Issue**: 404 on routes
**Fix**: `netlify.toml` redirects should handle this. Verify file exists.

**Issue**: Images not loading on Netlify
**Fix**: Ensure images are in `public/` folder before building

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Netlify Docs](https://docs.netlify.com)
- [Google Analytics 4](https://support.google.com/analytics)

---

## 🤝 Support

For questions or issues:
- Email: conceptstore.cruz@gmail.com
- Instagram: [@pontocruzporto](https://instagram.com/pontocruzporto)

---

## 📄 License

© 2026 Ponto Cruz Concept Store. All rights reserved.
