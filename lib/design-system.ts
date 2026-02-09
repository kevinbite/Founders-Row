// Design System Tokens for Founders Row
// Luxury, high-end aesthetic inspired by Ferrari-like sophistication

export const colors = {
  // Primary palette
  black: '#000000',
  white: '#FFFFFF',
  
  // Neutral grays with warm undertones for luxury feel
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0A0A0A',
  },
  
  // Accent colors for subtle highlights
  accent: {
    gold: '#C9A962',
    silver: '#C0C0C0',
    platinum: '#E5E4E2',
  },
} as const

export const typography = {
  // Font families
  fonts: {
    heading: 'var(--font-cinzel), Cinzel, serif',
    body: 'var(--font-montserrat), Montserrat, sans-serif',
    sans: 'var(--font-inter), Inter, sans-serif',
  },
  
  // Font sizes (in rem)
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
  },
  
  // Line heights
  leading: {
    tight: '1.1',
    snug: '1.25',
    normal: '1.5',
    relaxed: '1.625',
    loose: '1.75',
  },
  
  // Letter spacing
  tracking: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const

export const spacing = {
  section: {
    sm: '3rem',    // 48px
    md: '5rem',    // 80px
    lg: '8rem',    // 128px
    xl: '10rem',   // 160px
  },
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const

export const animation = {
  // Durations
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '700ms',
    slowest: '1000ms',
  },
  
  // Easing functions
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Luxury, smooth easing
    smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    // Elegant bounce for subtle interactions
    elegant: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  
  // Animation presets (class names)
  presets: {
    fadeIn: 'animate-fadeIn',
    fadeInUp: 'animate-fadeInUp',
    fadeInDown: 'animate-fadeInDown',
    scaleIn: 'animate-scaleIn',
    slideUp: 'animate-slideUp',
    slideDown: 'animate-slideDown',
    shimmer: 'animate-shimmer',
  },
} as const

export const effects = {
  // Box shadows
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glow: '0 0 20px rgba(255, 255, 255, 0.1)',
    glowStrong: '0 0 40px rgba(255, 255, 255, 0.15)',
  },
  
  // Backdrop blur
  blur: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
  },
  
  // Border radius
  radius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
} as const

// Breakpoints (matching Tailwind)
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

// Z-index scale
export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
} as const
