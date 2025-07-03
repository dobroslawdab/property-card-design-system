import type { Meta, StoryObj } from '@storybook/react';
import { PropertyCard } from './PropertyCard';

const meta = {
  title: 'Design System/PropertyCard',
  component: PropertyCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'PropertyCard komponent pixel-perfect z Figmy. Używa dokładnie tych samych kolorów, typografii i layoutu co design z Figma.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Kod projektu domu (np. "Z357 Der")',
    },
    area: {
      control: 'text', 
      description: 'Główna powierzchnia w m² (np. "177")',
    },
    additionalArea: {
      control: 'text',
      description: 'Dodatkowa powierzchnia (np. "34 m²")',
    },
    price: {
      control: 'text',
      description: 'Cena (np. "650 tys. zł")',
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
} satisfies Meta<typeof PropertyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story - dokładnie jak w Figmie
export const Default: Story = {
  args: {
    id: 'z357der',
    imageUrl: 'https://image.z500.pl/eyJidWNrZXQiOiJ6NTAwLXByb2QiLCJrZXkiOiJpbWFnZXMvcHJvamVjdF92aWV3LzIyNzc3LzE3MjQ5MjU0OTNZNVlTSS5wbmciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjgwfSwiZmxhdHRlbiI6eyJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTV9fSwicmVzaXplIjp7IndpZHRoIjoxOTIwLCJoZWlnaHQiOjEwODAsImZpdCI6ImNvdmVyIn19fQ==',
    title: 'Z357 Der',
    area: '177',
    additionalArea: '34 m²',
    price: '650 tys. zł',
    variants: 5,
    comments: 120,
    realizations: 1023,
    description: 'Projekt domu Z441 D - Dom parterowy z przestronnym salonem i otwartą kuchnią',
    onClick: () => console.log('Clicked on Z357 Der'),
  },
};

export const WithoutAdditionalArea: Story = {
  args: {
    ...Default.args,
    id: 'z442a',
    title: 'Z442 A',
    area: '165',
    additionalArea: undefined,
    price: '580 tys. zł',
    variants: 3,
    comments: 89,
    realizations: 756,
    description: 'Projekt domu Z442 A - Nowoczesny dom z tarasem i dużymi przeszkleniami',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=365&h=227',
  },
};

export const LuxuryHouse: Story = {
  args: {
    ...Default.args,
    id: 'z358b',
    title: 'Z358 B',
    area: '190',
    additionalArea: '45 m²',
    price: '850 tys. zł',
    variants: 7,
    comments: 156,
    realizations: 892,
    description: 'Projekt domu Z358 B - Dwukondygnacyjny dom rodzinny z garażem i basenem',
    imageUrl: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=365&h=227',
  },
};

export const CompactHouse: Story = {
  args: {
    ...Default.args,
    id: 'z120c',
    title: 'Z120 C',
    area: '85',
    additionalArea: '15 m²',
    price: '420 tys. zł',
    variants: 2,
    comments: 45,
    realizations: 234,
    description: 'Projekt domu Z120 C - Kompaktowy dom parterowy dla młodej rodziny',
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=365&h=227',
  },
};

export const PopularProject: Story = {
  args: {
    ...Default.args,
    id: 'z500a',
    title: 'Z500 A',
    area: '220',
    additionalArea: '55 m²',
    price: '950 tys. zł',
    variants: 12,
    comments: 450,
    realizations: 2156,
    description: 'Projekt domu Z500 A - Najpopularniejszy projekt z naszej oferty, dom z poddaszem użytkowym',
    imageUrl: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=365&h=227',
  },
};

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