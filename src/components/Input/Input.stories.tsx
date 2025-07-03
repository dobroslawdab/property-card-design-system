import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Search, Mail, Lock, Eye, EyeOff, User, Phone } from 'lucide-react';
import { Input } from './Input';
import { useState } from 'react';

const meta = {
  title: 'Design System/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Input komponent z pełną integracją Design Tokens. Obsługuje różne warianty, rozmiary, ikony i stany walidacji.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'ghost'],
      description: 'Wariant wizualny inputa',
    },
    size: {
      control: 'select', 
      options: ['sm', 'md', 'lg'],
      description: 'Rozmiar inputa',
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'Stan walidacji',
    },
    label: {
      control: 'text',
      description: 'Etykieta inputa',
    },
    placeholder: {
      control: 'text',
      description: 'Tekst zastępczy',
    },
    helperText: {
      control: 'text',
      description: 'Tekst pomocniczy',
    },
    error: {
      control: 'text',
      description: 'Komunikat błędu',
    },
    success: {
      control: 'text',
      description: 'Komunikat sukcesu',
    },
    disabled: {
      control: 'boolean',
      description: 'Stan wyłączony',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email address',
    type: 'email',
  },
};

// All variants
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <Input
        label="Default Variant"
        placeholder="Default input"
        variant="default"
      />
      <Input
        label="Filled Variant"
        placeholder="Filled input"
        variant="filled"
      />
      <Input
        label="Ghost Variant"
        placeholder="Ghost input"
        variant="ghost"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Różne warianty wizualne inputa - default, filled i ghost.',
      },
    },
  },
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <Input
        label="Small Size"
        placeholder="Small input"
        size="sm"
      />
      <Input
        label="Medium Size (Default)"
        placeholder="Medium input"
        size="md"
      />
      <Input
        label="Large Size"
        placeholder="Large input"
        size="lg"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Różne rozmiary inputa - small, medium i large.',
      },
    },
  },
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <Input
        label="Search"
        placeholder="Search projects..."
        leftIcon={<Search />}
      />
      <Input
        label="Email"
        placeholder="your@email.com"
        type="email"
        leftIcon={<Mail />}
      />
      <Input
        label="Phone"
        placeholder="+48 123 456 789"
        type="tel"
        leftIcon={<Phone />}
        rightIcon={<User />}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inputy z ikonami po lewej i prawej stronie. Ikony automatycznie dostosowują padding.',
      },
    },
  },
};

// Validation states
export const ValidationStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <Input
        label="Default State"
        placeholder="Enter some text"
        helperText="This is helper text"
      />
      <Input
        label="Error State"
        placeholder="Enter some text"
        error="This field is required"
        value="invalid@"
      />
      <Input
        label="Success State"
        placeholder="Enter some text"
        success="Looks good!"
        value="valid@email.com"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Różne stany walidacji - default z helper text, error i success.',
      },
    },
  },
};

// Disabled state
export const DisabledState: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <Input
        label="Disabled Input"
        placeholder="You can't type here"
        disabled
        helperText="This input is disabled"
      />
      <Input
        label="Disabled with Value"
        value="Some disabled value"
        disabled
        leftIcon={<Mail />}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Wyłączone inputy z obniżoną przezroczystością i brakiem interakcji.',
      },
    },
  },
};