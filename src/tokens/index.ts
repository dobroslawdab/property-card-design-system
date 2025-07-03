/**
 * Design Tokens - Z500 Design System
 * Pixel-perfect tokens extracted from Figma
 */

// Kolory główne
export const colors = {
  // Brand colors
  primary: {
    main: '#D9308A',     // Różowy - główny brand color
    light: '#E73C96',    // Jaśniejszy różowy (hover)
    dark: '#C22A7A',     // Ciemniejszy różowy (active)
    contrast: '#FFFFFF',  // Biały tekst na różowym
  },
  
  // Neutralne kolory
  neutral: {
    black: '#1B1B1B',     // Czarny z Figmy
    white: '#FFFFFF',     // Czysty biały
    gray: {
      50: '#F9F9F9',
      100: '#F4F3EF',     // Beżowy z Figmy
      200: '#E5E5E5',
      300: '#D0D0D0',
      400: '#A0A0A0',
      500: '#707070',
      600: '#505050',
      700: '#404040',
      800: '#2A2A2A',
      900: '#1A1A1A',
    }
  },
  
  // Semantic colors
  semantic: {
    success: '#22C55E',
    warning: '#F59E0B', 
    error: '#EF4444',
    info: '#3B82F6',
  },
  
  // Powierzchnie
  surface: {
    background: '#FFFFFF',
    card: '#FFFFFF',
    overlay: 'rgba(0, 0, 0, 0.5)',
  }
} as const;

// Typography tokens
export const typography = {
  fontFamily: {
    primary: '"Inter", system-ui, -apple-system, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", monospace',
  },
  
  fontSize: {
    xs: '10px',    // Stat labels
    sm: '13px',    // Stat values  
    base: '14px',  // Description
    lg: '18px',    // Tags
    xl: '24px',
    '2xl': '32px',
    '3xl': '48px',
  },
  
  fontWeight: {
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
  },
  
  lineHeight: {
    tight: 1.21,   // Z Figmy
    normal: 1.5,
    relaxed: 1.75,
  },
  
  letterSpacing: {
    tight: '-0.019em',  // Tytuły
    normal: '-0.011em', // Zwykły tekst
    wide: '0.025em',
  }
} as const;

// Spacing tokens
export const spacing = {
  0: '0px',
  1: '2px',
  2: '4px',
  3: '8px',
  4: '12px',   // Padding PropertyCard
  5: '16px',
  6: '20px',   // Gap w statystykach
  8: '24px',
  10: '32px',
  12: '40px',  // Wysokość tagów
  16: '48px',
  20: '64px',
  24: '80px',
} as const;

// Border radius
export const borderRadius = {
  none: '0px',
  sm: '4px',    // Tagi, obraz
  md: '8px',    // PropertyCard
  lg: '12px',
  xl: '16px',
  full: '9999px',
} as const;

// Shadows
export const shadows = {
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1)',                    // PropertyCard default
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', // PropertyCard hover
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)',
} as const;

// Transitions
export const transitions = {
  fast: '150ms ease-in-out',
  normal: '250ms ease-in-out',  // PropertyCard
  slow: '350ms ease-in-out',
} as const;

// Layout tokens
export const layout = {
  propertyCard: {
    width: '368.46px',
    padding: spacing[4],
    gap: spacing[3],
    imageHeight: '227px',
    tagHeight: spacing[12],
  }
} as const;

// Breakpoints
export const breakpoints = {
  sm: '480px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Export all tokens
export const designTokens = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  transitions,
  layout,
  breakpoints,
} as const;

export default designTokens;