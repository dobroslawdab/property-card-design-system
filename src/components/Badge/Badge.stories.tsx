import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Star, Heart, CheckCircle, AlertTriangle, XCircle, Info, Zap } from 'lucide-react';
import { Badge } from './Badge';

const meta = {
  title: 'Design System/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Badge komponent do wyświetlania statusów, kategorii i etykiet. Zbudowany z naszymi Design Tokens i dostępny w wielu wariantach.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'outline', 'ghost'],
      description: 'Wariant wizualny badge',
    },
    size: {
      control: 'select', 
      options: ['sm', 'md', 'lg'],
      description: 'Rozmiar badge',
    },
    children: {
      control: 'text',
      description: 'Zawartość badge',
    },
    dot: {
      control: 'boolean',
      description: 'Pokaż kropkę wskaźnika',
    },
    onClick: {
      action: 'badge-clicked',
      description: 'Handler kliknięcia',
    },
    onRemove: {
      action: 'badge-removed',
      description: 'Handler usunięcia',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

// All variants
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Wszystkie dostępne warianty badge z naszymi design tokens.',
      },
    },
  },
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Różne rozmiary badge - small, medium i large.',
      },
    },
  },
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="primary" icon={<Star />}>Featured</Badge>
      <Badge variant="success" icon={<CheckCircle />}>Available</Badge>
      <Badge variant="warning" icon={<AlertTriangle />}>Limited</Badge>
      <Badge variant="error" icon={<XCircle />}>Sold Out</Badge>
      <Badge variant="info" icon={<Info />}>New</Badge>
      <Badge variant="outline" icon={<Heart />}>Favorite</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badge z ikonami do lepszego komunikowania statusu.',
      },
    },
  },
};

// With dots
export const WithDots: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="success" dot>Online</Badge>
      <Badge variant="warning" dot>Away</Badge>
      <Badge variant="error" dot>Offline</Badge>
      <Badge variant="ghost" dot>Inactive</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badge z kropką wskaźnika do oznaczania statusów.',
      },
    },
  },
};

// Clickable badges
export const ClickableBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge 
        variant="primary" 
        onClick={action('primary-clicked')}
      >
        Clickable
      </Badge>
      <Badge 
        variant="outline" 
        icon={<Star />}
        onClick={action('star-clicked')}
      >
        Click me
      </Badge>
      <Badge 
        variant="ghost" 
        dot
        onClick={action('dot-clicked')}
      >
        With dot
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badge które można klikać - automatycznie otrzymują hover effects i cursor pointer.',
      },
    },
  },
};

// Removable badges
export const RemovableBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge 
        variant="primary" 
        onRemove={action('remove-react')}
      >
        React
      </Badge>
      <Badge 
        variant="secondary" 
        onRemove={action('remove-typescript')}
      >
        TypeScript
      </Badge>
      <Badge 
        variant="outline" 
        icon={<Zap />}
        onRemove={action('remove-storybook')}
      >
        Storybook
      </Badge>
      <Badge 
        variant="ghost" 
        onRemove={action('remove-design')}
      >
        Design System
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badge z przyciskiem usunięcia - idealny do tagów i filtrów.',
      },
    },
  },
};