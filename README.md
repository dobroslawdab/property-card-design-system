# Z500 Property Card Design System

🏠 **Pixel-perfect React component system** stworzony z Figma MCP dla Z500.pl

## 🎯 Features

- ✅ **Pixel-perfect design** z Figmy
- ✅ **Design Tokens system** - centralne zarządzanie stylami
- ✅ **TypeScript support** - pełne typowanie
- ✅ **Storybook documentation** - interaktywna dokumentacja
- ✅ **Accessibility** - keyboard navigation, ARIA labels
- ✅ **Responsive design** - mobile-first approach
- ✅ **Dark mode support** - automatyczne przełączanie
- ✅ **Animation system** - smooth hover effects

## 🚀 Quick Start

```bash
npm install
npm run storybook
```

Otwórz http://localhost:6006 żeby zobaczyć komponenty w akcji!

## 🎨 Design System

### Design Tokens

Centralny system zarządzania stylami:

```typescript
import { designTokens } from '@z500/property-card-design-system';

// Kolory
designTokens.colors.primary.main // #D9308A
designTokens.colors.neutral.black // #1B1B1B

// Spacing
designTokens.spacing[4] // 12px
designTokens.spacing[6] // 20px

// Typography
designTokens.typography.fontSize.lg // 18px
designTokens.typography.fontWeight.bold // 700
```

### PropertyCard Component

```tsx
import { PropertyCard } from '@z500/property-card-design-system';

<PropertyCard
  id="z357der"
  title="Z357 Der"
  area="177"
  additionalArea="34 m²"
  price="650 tys. zł"
  variants={5}
  comments={120}
  realizations={1023}
  description="Dom parterowy z przestronnym salonem"
  imageUrl="https://..."
  onClick={() => console.log('Clicked!')}
/>
```

## 📚 Documentation

- **Storybook**: Interaktywna dokumentacja komponentów
- **Design Tokens**: Wizualna paleta kolorów, typografii, spacingu
- **Actions**: Testowanie interakcji i eventów
- **Controls**: Dynamiczne zmiany props w czasie rzeczywistym

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build for production
npm run build

# Run tests
npm test
```

## 🎭 Available Stories

- **Design System/PropertyCard** - Główny komponent
- **Design System/Design Tokens** - Paleta tokenów
  - Colors - Kolory brand, neutral, semantic
  - Typography - Skala typograficzna
  - Spacing - Odstępy i padding
  - Shadows - Cienie komponentów
  - Border Radius - Zaokrąglenia

## 🎨 Figma Integration

**Design File**: https://www.figma.com/design/VPq0dOwuuLHG9kLUXgMeJ9/DES_z500?node-id=12-42

Komponenty są pixel-perfect zgodne z designem z Figmy. Wszystkie wartości (kolory, spacing, typography) zostały wyciągnięte bezpośrednio z Figma MCP.

## 🏗️ Architecture

```
src/
├── components/          # React components
│   └── PropertyCard/    # PropertyCard component
├── tokens/              # Design tokens system
├── stories/             # Storybook stories
└── index.ts            # Main exports
```

## 🎯 Usage Patterns

### Custom Styling z Design Tokens

```css
.my-component {
  background: var(--color-primary, #D9308A);
  padding: var(--spacing-4, 12px);
  border-radius: var(--radius-md, 8px);
  box-shadow: var(--shadow-sm, 0 1px 3px 0 rgb(0 0 0 / 0.1));
}
```

### TypeScript Integration

```typescript
import type { PropertyCardProps } from '@z500/property-card-design-system';

const myProps: PropertyCardProps = {
  // Full type safety!
};
```

## 🌟 Best Practices

1. **Zawsze używaj Design Tokens** - nie hardcoduj wartości
2. **Testuj w Storybook** - sprawdź wszystkie warianty
3. **Keyboard accessibility** - wszystkie interakcje dostępne z klawiatury
4. **Responsive design** - testuj na różnych rozmiarach ekranu
5. **Performance** - lazy loading obrazów, optymalizowane animacje

## 📝 License

MIT © Z500 Design System

---

**Built with ❤️ using Figma MCP, Storybook, and Claude AI**