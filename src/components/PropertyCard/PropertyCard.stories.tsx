import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PropertyCard } from './PropertyCard';

const meta = {
  title: 'Design System/PropertyCard',
  component: PropertyCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'PropertyCard komponent wygenerowany z Figma MCP z pixel-perfect precision. Używa prawdziwych wizualizacji 3D z Z500.pl i design tokens extracted bezpośrednio z Figmy.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Kod projektu domu (np. "Z357 D")',
    },
    area: {
      control: 'text',
      description: 'Główna powierzchnia w m²',
    },
    additionalArea: {
      control: 'text',
      description: 'Dodatkowa powierzchnia (opcjonalna)',
    },
    price: {
      control: 'text',
      description: 'Cena w PLN',
    },
    variants: {
      control: 'number',
      description: 'Liczba dostępnych wariantów',
    },
    comments: {
      control: 'number',
      description: 'Liczba komentarzy',
    },
    realizations: {
      control: 'number',
      description: 'Liczba realizacji',
    },
    description: {
      control: 'text',
      description: 'Opis projektu domu',
    },
    imageUrl: {
      control: 'text',
      description: 'URL do wizualizacji 3D',
    },
    onClick: {
      action: 'clicked',
      description: 'Handler kliknięcia w kartę',
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof PropertyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story z prawdziwą wizualizacją Z500
export const Default: Story = {
  args: {
    id: 'z357d',
    imageUrl: 'https://image.z500.pl/eyJidWNrZXQiOiJ6NTAwLXByb2QiLCJrZXkiOiJpbWFnZXMvcHJvamVjdF92aWV3LzIyNzc3LzE3MjQ5MjU0OTNZNVlTSS5wbmciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjgwfSwiZmxhdHRlbiI6eyJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTV9fSwicmVzaXplIjp7IndpZHRoIjoxOTIwLCJoZWlnaHQiOjEwODAsImZpdCI6ImNvdmVyIn19fQ==',
    title: 'Z357 D',
    area: '177 m²',
    additionalArea: '34 m²',
    price: '650 tys. zł',
    variants: 5,
    comments: 120,
    realizations: 1023,
    description: 'Projekt domu Z357 D - Dom parterowy z przestronnym salonem i otwartą kuchnią',
  },
};

// Wariant bez dodatkowej powierzchni
export const WithoutAdditionalArea: Story = {
  args: {
    ...Default.args,
    title: 'Z442 A',
    area: '165 m²',
    additionalArea: undefined,
    price: '580 tys. zł',
    variants: 3,
    comments: 89,
    realizations: 756,
    description: 'Projekt domu Z442 A - Nowoczesny dom z tarasem i dużymi przeszkleniami',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=365&h=227',
  },
};

// Luksusowy dom - wyższa cena
export const LuxuryHouse: Story = {
  args: {
    ...Default.args,
    title: 'Z358 B',
    area: '190 m²',
    additionalArea: '45 m²',
    price: '850 tys. zł',
    variants: 7,
    comments: 156,
    realizations: 892,
    description: 'Projekt domu Z358 B - Dwukondygnacyjny dom rodzinny z garażem i basenem',
    imageUrl: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=365&h=227',
  },
};

// Mały dom - budżetowy
export const CompactHouse: Story = {
  args: {
    ...Default.args,
    title: 'Z120 C',
    area: '85 m²',
    additionalArea: '15 m²',
    price: '420 tys. zł',
    variants: 2,
    comments: 45,
    realizations: 234,
    description: 'Projekt domu Z120 C - Kompaktowy dom parterowy dla młodej rodziny',
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=365&h=227',
  },
};

// Popularny projekt - wysokie statystyki
export const PopularProject: Story = {
  args: {
    ...Default.args,
    title: 'Z500 A',
    area: '220 m²',
    additionalArea: '55 m²',
    price: '950 tys. zł',
    variants: 12,
    comments: 450,
    realizations: 2156,
    description: 'Projekt domu Z500 A - Najpopularniejszy projekt z naszej oferty, dom z poddaszem użytkowym',
    imageUrl: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=365&h=227',
  },
};

// Interactive state - bez onClick
export const NonInteractive: Story = {
  args: {
    ...Default.args,
    onClick: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Komponent bez interakcji - brak click handlera, hover effects, czy keyboard navigation.',
      },
    },
  },
};

// Loading state placeholder
export const LoadingState: Story = {
  args: {
    ...Default.args,
    imageUrl: 'https://via.placeholder.com/365x227/f0f0f0/cccccc?text=Ładowanie...',
    title: '---',
    area: '--- m²',
    price: '--- tys. zł',
    variants: 0,
    comments: 0,
    realizations: 0,
    description: 'Ładowanie danych projektu...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Stan loading z placeholder image i pustymi danymi.',
      },
    },
  },
};
