# Founders Row Website - Transfer Guide

## 🚀 Quick Setup for New Cursor Account

### **Repository Information**
- **GitHub URL**: https://github.com/kevinbite/Founders-Row.git
- **Latest Commit**: fd05ee2 - "Reduce spacing between hero and contact sections on mobile"
- **Status**: ✅ All changes saved and pushed

### **Step 1: Clone Repository**
```bash
git clone https://github.com/kevinbite/Founders-Row.git
cd Founders-Row
```

### **Step 2: Install Dependencies**
```bash
npm install
```

### **Step 3: Start Development Server**
```bash
npm run dev
```
- Opens at: http://localhost:3000

### **Step 4: Configure Git (Optional)**
If you want to make changes and push:
```bash
git config --global user.name "your-username"
git config --global user.email "your-email@example.com"
```

## 📁 Project Structure
```
├── app/                     # Next.js 13+ app directory
│   ├── about/page.tsx      # About page
│   ├── advisory/page.tsx   # Advisory page  
│   ├── partners/page.tsx   # Partners page
│   ├── contact/page.tsx    # Contact page
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── Navigation.tsx      # Main navigation
│   ├── Hero.tsx           # Landing hero section
│   ├── Tagline.tsx        # Tagline section
│   ├── Platform.tsx       # Our Platform section
│   ├── FounderLetter.tsx  # Founder letter section
│   └── Footer.tsx         # Footer component
├── public/                # Static assets
│   ├── images/            # Background images, photos
│   ├── logos/             # Company logos
│   └── icons/             # Favicon
└── package.json           # Dependencies
```

## 🎨 Technologies Used
- **Framework**: Next.js 14 with TypeScript
- **Styling**: TailwindCSS
- **Fonts**: Cinzel, Montserrat, Inter (Google Fonts)
- **Images**: Next.js Image component with optimization
- **Deployment**: Ready for Vercel

## 🔧 Key Features
- **Fully responsive** mobile-first design
- **Dark theme** with professional styling
- **Optimized typography** for all screen sizes
- **SEO-ready** with proper metadata
- **Performance optimized** with Next.js features

## 📱 Pages Overview
- **Landing**: Hero + Tagline + Platform + Founder Letter
- **About**: Company overview with mission and values
- **Advisory**: FR Advisory services and approach
- **Partners**: FR Partners investment information
- **Contact**: Contact information and services

## 🚨 Important Notes
- All images are in `/public` folder and properly referenced
- Fonts are pre-configured and working
- Mobile spacing has been carefully optimized
- All pages are complete and production-ready
- Git history includes full development process

## ✅ Verification Steps
1. Clone and install dependencies
2. Run `npm run dev`
3. Visit http://localhost:3000
4. Test all navigation links
5. Check mobile responsiveness
6. Verify all images load correctly

**Last Updated**: December 2024
**Version**: Production Ready
