import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Heart, Download, ArrowRight, Plus } from 'lucide-react';
import { Button } from './Button';

const meta = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button component built with our Design Tokens. Supports different variants, sizes, icons and loading states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'link'],
      description: 'Visual variant of button',
    },
    size: {
      control: 'select', 
      options: ['sm', 'md', 'lg', 'icon'],
      description: 'Size of button',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as child component (e.g. Link)',
    },
    onClick: {
      action: 'button-clicked',
      description: 'Click handler',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: 'Button',
    onClick: action('button-clicked'),
  },
};

// All variants
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants with our design tokens.',
      },
    },
  },
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Plus />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different button sizes - small, medium, large and icon-only.',
      },
    },
  },
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button leftIcon={<Download />}>Download</Button>
      <Button rightIcon={<ArrowRight />}>Continue</Button>
      <Button leftIcon={<Heart />} rightIcon={<ArrowRight />}>
        Add to favorites
      </Button>
      <Button variant="outline" leftIcon={<Plus />}>
        Add item
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with icons on left, right or both sides.',
      },
    },
  },
};

// Loading states
export const LoadingStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button loading>Loading...</Button>
      <Button variant="secondary" loading>
        Please wait
      </Button>
      <Button variant="outline" loading leftIcon={<Download />}>
        Downloading
      </Button>
      <Button size="icon" loading>
        <Plus />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons in loading state with spinner animation.',
      },
    },
  },
};

// Disabled states
export const DisabledStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button disabled>Disabled</Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>
      <Button variant="outline" disabled leftIcon={<Heart />}>
        Disabled with icon
      </Button>
      <Button size="icon" disabled>
        <Plus />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled buttons with reduced opacity and no interactions.',
      },
    },
  },
};

// Interactive example
export const Interactive: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Click me!',
    onClick: action('button-clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive button for testing different props in controls panel.',
      },
    },
  },
};