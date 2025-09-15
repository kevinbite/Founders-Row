# Public Assets Folder

This folder contains all static assets for the Founders Row website. All files in this folder will be served from the root URL path.

## Folder Structure

### `/logos`
Place company logos and branding assets here:
- `logo.png` - Main company logo (recommended: PNG with transparent background)
- `logo-white.png` - White version for dark backgrounds
- `logo-horizontal.png` - Horizontal layout version
- `favicon.ico` - Website favicon (16x16, 32x32, 48x48 pixels)

### `/images`
Place general images here:
- `founder-photo.jpg` - Founder headshot for the letter section
- `hero-background.jpg` - Optional hero section background image
- `team-photos/` - Team member photos
- `portfolio/` - Portfolio company logos or images

### `/icons`
Place icon files here:
- Social media icons
- Custom SVG icons
- Interface icons

## Usage in Components

To use these assets in your React components:

```jsx
// For images
<img src="/logos/logo.png" alt="Company Logo" />
<img src="/images/founder-photo.jpg" alt="Founder" />

// For Next.js Image component (recommended)
import Image from 'next/image'
<Image src="/logos/logo.png" alt="Company Logo" width={200} height={50} />
```

## Recommended File Formats

- **Logos**: PNG (with transparency) or SVG
- **Photos**: JPG or WebP
- **Icons**: SVG or PNG
- **Favicon**: ICO format

## File Naming Convention

- Use lowercase with hyphens: `founder-photo.jpg`
- Be descriptive: `team-john-doe.jpg`
- Include size for multiple versions: `logo-large.png`, `logo-small.png`

## Image Optimization Tips

- Compress images before uploading
- Use appropriate dimensions (don't upload 4K images for small icons)
- Consider using WebP format for better compression
- For logos, SVG is preferred for scalability
