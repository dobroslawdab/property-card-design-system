/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens from Figma MCP
        'property-primary': '#D9308A',
        'property-secondary': '#1B1B1B',
        'property-neutral': '#F4F3EF',
        'property-background': '#FFFFFF',
        'property-text': '#000000',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'property-caption': ['10px', { lineHeight: '1.21', letterSpacing: '-1.1%' }],
        'property-label': ['13px', { lineHeight: '1.21', letterSpacing: '-1.1%' }],
        'property-description': ['14px', { lineHeight: '1.21', letterSpacing: '-1.1%' }],
        'property-body': ['18px', { lineHeight: '1.21', letterSpacing: '-1.1%' }],
        'property-title': ['18px', { lineHeight: '1.21', letterSpacing: '-1.9%' }],
      },
      width: {
        'property-card': '389px',
        'property-image': '365.27px',
      },
      height: {
        'property-card': '395px',
        'property-image': '227px',
        'property-tag': '40px',
      },
    },
  },
  plugins: [],
}
