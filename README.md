# 🏠 PropertyCard Design System

Design system z PropertyCard komponentem wygenerowanym automatycznie z **Figma MCP**.

## ✨ Features

- 🎨 **Pixel-perfect** komponent PropertyCard z Figmy
- 📱 **Storybook** documentation 
- 🔧 **TypeScript** support
- 🎯 **Design tokens** extracted z Figma API
- 🖼️ **Real 3D renders** z Z500.pl
- ⚡ **Open Sans** typography
- 🔄 **Auto-generated** z Claude + MCP

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/dobroslawdab/property-card-design-system.git
cd property-card-design-system

# Install dependencies
npm install

# Start Storybook
npm run storybook
```

**🎯 Storybook będzie dostępny na:** `http://localhost:6006`

## 📖 Gdzie zobaczyć komponent?

Po uruchomieniu Storybook znajdziesz komponent w:

**Design System → PropertyCard**

### 📚 Dostępne stories:

1. **Default** - Główny komponent z wizualizacją Z500
2. **WithoutAdditionalArea** - Wariant bez dodatkowej powierzchni  
3. **LuxuryHouse** - Luksusowy dom z wyższą ceną
4. **CompactHouse** - Mały dom budżetowy
5. **PopularProject** - Popularny projekt z wysokimi statystykami
6. **NonInteractive** - Bez interakcji
7. **LoadingState** - Stan ładowania

### 🎮 Interactive Controls:

W Storybook możesz edytować:
- **Tekst** (title, area, price, description)
- **Liczby** (variants, comments, realizations)  
- **URL obrazu** (imageUrl)
- **Zdarzenia** (onClick)

## 📁 Structure

```
├── src/
│   ├── components/
│   │   └── PropertyCard/
│   │       ├── PropertyCard.tsx        # Main component
│   │       ├── PropertyCard.stories.tsx # Storybook stories
│   │       └── index.ts               # Exports
│   └── styles/
│       └── globals.css                # Design tokens
├── .storybook/                        # Storybook config
│   ├── main.ts
│   └── preview.ts
└── package.json
```

## 🎨 Design Tokens

Extracted automatically from Figma MCP:

```css
:root {
  --color-primary: #D9308A;      /* Różowy tag */
  --color-secondary: #1B1B1B;    /* Czarny tag */
  --color-neutral: #F4F3EF;      /* Beżowy tag */
  --font-family: 'Open Sans';    /* Typography */
  --card-width: 389px;           /* Wymiary */
  --card-height: 395px;
}
```

## 🔗 Usage

```tsx
import { PropertyCard } from './src/components/PropertyCard';

<PropertyCard
  imageUrl="https://image.z500.pl/..."
  title="Z357 D"
  area="177 m²"
  additionalArea="34 m²"
  price="650 tys. zł"
  variants={5}
  comments={120}
  realizations={1023}
  description="Dom parterowy z przestronnym salonem..."
  onClick={() => console.log('Clicked!')}
/>
```

## 🛠️ Development

```bash
# Start development server  
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Build Storybook for deployment
npm run build-storybook
```

## 🚀 Deployment

Storybook może być zdeployowany na:
- **Vercel** - `npm run build-storybook`
- **Netlify** - Auto-deploy z GitHub
- **GitHub Pages** - Static hosting
- **Chromatic** - Visual testing

## 🔄 MCP Workflow

Ten projekt został wygenerowany z:

1. **Figma MCP** - Extract design tokens i layout
2. **Claude AI** - Generate React component  
3. **GitHub MCP** - Auto-commit do repository
4. **Storybook** - Interactive documentation

---

Generated with ❤️ using **Figma MCP** + **Claude AI**

**Repository:** https://github.com/dobroslawdab/property-card-design-system
