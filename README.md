# Z500 Property Card Design System 🏠✨

> Pixel-perfect design system built from Figma designs with React, TypeScript, and Storybook

## 🌐 **Live Storybook**
**[View Design System →](https://dobroslawdab.github.io/property-card-design-system/)**

## 🎯 **Components**

### 🏡 PropertyCard
Pixel-perfect implementation from Figma with:
- Horizontal tag layout (title, area, price)
- Interactive hover states
- Keyboard navigation
- Design tokens from Figma

### 🔘 Button  
CVA variants with Radix UI integration:
- 6 variants: primary, secondary, outline, ghost, destructive, link
- 4 sizes: sm, md, lg, icon
- Loading states with spinner
- Left/right icons support

### 🏷️ Badge
Flexible badge component:
- 8 variants with semantic colors
- Clickable and removable options
- Dot indicators
- Icon support

### 📝 Input
Form input with validation:
- 3 variants: default, filled, ghost
- 3 sizes with consistent padding
- Error/success states
- Left/right icon support

## 🛠️ **Tech Stack**

- **React 18** + TypeScript
- **Storybook 7** for component documentation
- **Class Variance Authority (CVA)** for variants
- **Radix UI** for accessibility primitives  
- **CSS Custom Properties** for design tokens
- **Vite** for fast development

## 🚀 **Development**

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build Storybook
npm run build-storybook
```

## 🎨 **Design Tokens**

All components use consistent design tokens extracted from Figma:

```css
:root {
  /* Colors from Figma */
  --color-primary: #D9308A;     /* Pink tag */
  --color-secondary: #1B1B1B;   /* Black tag */
  --color-neutral: #F4F3EF;     /* Beige tag */
  
  /* Typography */
  --font-family-primary: 'Inter', sans-serif;
  --font-size-xs: 10px;         /* Stat labels */
  --font-size-sm: 13px;         /* Stat values */
  --font-size-base: 14px;       /* Description */
  --font-size-lg: 18px;         /* Tags */
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
}
```

## 📱 **Responsive Design**

- Mobile-first approach
- Flexible layouts
- Touch-friendly interactions
- Dark mode support

## ♿ **Accessibility**

- ARIA labels and roles
- Keyboard navigation
- Focus management
- Screen reader support
- Reduced motion support

## 🔗 **Links**

- **[Live Storybook](https://dobroslawdab.github.io/property-card-design-system/)** 📖
- **[Figma Design](https://www.figma.com/design/VPq0dOwuuLHG9kLUXgMeJ9/DES_z500?node-id=12-42)** 🎨
- **[GitHub Repository](https://github.com/dobroslawdab/property-card-design-system)** 📦

## 📄 **License**

MIT License - feel free to use in your projects!

---

Built with ❤️ using pixel-perfect designs from Figma