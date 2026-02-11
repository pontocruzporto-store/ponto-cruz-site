# Image Placement Guide

## Required Images

This file explains which images you need to add to complete the website.

### Hero & Homepage Images (public/images/hero/)

1. **hero-image.jpg** (1920x1080px min)
   - Main homepage hero background
   - Recommendation: High-quality photo of store products or Porto scene
   - Should be visually striking and represent the brand

2. **store-interior.jpg** (1600x1200px)
   - Interior view of Ponto Cruz store
   - Used in homepage About preview section

3. **family-photo.jpg** (1200x1600px)
   - Photo of Susana, Joaquim, and Renato Cruz
   - Used in About page "Family Business" section

4. **porto-view.jpg** (1600x1200px)
   - Scenic view of Porto
   - Used in About page "Porto Roots" section

5. **craftsmanship.jpg** (1600x1200px)
   - Close-up of artisan work or products
   - Used in About page "Craftsmanship" section

6. **store-detail.jpg** (1600x1200px)
   - Detail shot of store or products
   - Used in About page "Philosophy" section

### Brand Logos (public/images/brands/)

- Add one logo file per brand
- Format: PNG with transparent background (preferred) or JPG
- Size: 800x800px recommended
- Filename should match brand slug in brands.js

Example:
- `/images/brands/artisan-leather.png`
- `/images/brands/porto-ceramics.jpg`

### Product Photos (public/images/products/)

Organize by brand:
```
public/images/products/
├── brand-slug-1/
│   ├── product-1.jpg
│   ├── product-2.jpg
│   └── product-3.jpg
├── brand-slug-2/
│   ├── product-1.jpg
│   └── product-2.jpg
```

- Square format: 1200x1200px
- Clean background
- Good lighting
- High quality

### Porto Recommendations (public/images/places/)

- One photo per recommended place
- Format: JPG or PNG
- Size: 1600x1200px (4:3 aspect ratio)
- Filename should match place slug in places.js

Examples:
- `/images/places/livraria-lello.jpg`
- `/images/places/cafe-majestic.jpg`
- `/images/places/clerigos-tower.jpg`

## Where to Place Images

1. Download/prepare your images
2. Place them in the appropriate folder under `public/images/`
3. Update file references in data files if needed:
   - `src/data/brands.js` - brand logos and product images
   - `src/data/places.js` - place photos
4. Rebuild: `npm run build`
5. Deploy

## Image Optimization Tips

Before uploading images:
1. Resize to recommended dimensions
2. Compress using tools like TinyPNG or ImageOptim
3. Convert to WebP for better performance (optional)
4. Use descriptive filenames: `leather-wallet-brown.jpg` not `IMG_1234.jpg`

## Testing Images Locally

After adding images:
```bash
npm run dev
```

Visit http://localhost:5173 and check:
- Homepage hero loads
- Brands show logos
- Products display correctly
- Porto recommendations have photos
- About page images appear

## Need Help?

If images don't appear:
1. Check filename matches exactly (case-sensitive)
2. Ensure file is in `public/` folder (not `src/`)
3. Path starts with `/` e.g., `/images/hero/hero-image.jpg`
4. Clear browser cache and reload
5. Check browser console for 404 errors
