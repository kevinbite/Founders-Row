# Founders Row - Private Equity Firm Landing Page

A modern, professional landing page for Founders Row, a private equity firm. Built with Next.js, TypeScript, and TailwindCSS.

## Features

- **Modern Design**: Clean, professional layout with a sophisticated color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Accessible**: Built with accessibility best practices including ARIA labels, keyboard navigation, and focus management
- **Performance**: Optimized for speed with Next.js and efficient CSS
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## Sections

1. **Navigation Bar**: Fixed navigation with responsive mobile menu
2. **Hero Section**: Compelling headline with key statistics and call-to-action buttons
3. **Founder's Letter**: Personal message from the founder with professional styling
4. **Footer**: Contact information, quick links, newsletter signup, and legal information

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Heroicons (via SVG)
- **Fonts**: Inter (sans-serif) and Playfair Display (serif)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main homepage
├── components/
│   ├── Navigation.tsx       # Header navigation component
│   ├── Hero.tsx            # Hero section component
│   ├── FounderLetter.tsx   # Founder's letter section
│   └── Footer.tsx          # Footer component
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Customization

### Colors
The design uses a navy blue color scheme that can be customized in `tailwind.config.js`:
- Primary colors (navy): For main branding elements
- Accent colors (primary): For call-to-action buttons and highlights

### Content
Update the following files to customize content:
- `components/Hero.tsx`: Hero section content and statistics
- `components/FounderLetter.tsx`: Founder information and letter content
- `components/Footer.tsx`: Contact information and company details
- `app/layout.tsx`: Page metadata and SEO information

### Styling
Global styles are defined in `app/globals.css` with component-specific styles using Tailwind classes.

## Deployment

The site can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): `npm run build` then deploy
- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **Traditional hosting**: `npm run build` then serve the `.next` folder

## Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management
- High contrast colors
- Responsive text sizing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.
