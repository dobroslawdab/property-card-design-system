import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { within, userEvent, expect } from '@storybook/test';
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

// Password input with toggle
const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <Input
      label="Password"
      placeholder="Enter your password"
      type={showPassword ? 'text' : 'password'}
      leftIcon={<Lock />}
      rightIcon={
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          style={{ 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      }
    />
  );
};

export const PasswordToggle: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <PasswordInput />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input hasła z przyciskiem toggle do pokazywania/ukrywania tekstu.',
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

// Different input types
export const InputTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <Input
        label="Text Input"
        type="text"
        placeholder="Enter text"
      />
      <Input
        label="Email Input"
        type="email"
        placeholder="Enter email"
        leftIcon={<Mail />}
      />
      <Input
        label="Password Input"
        type="password"
        placeholder="Enter password"
        leftIcon={<Lock />}
      />
      <Input
        label="Number Input"
        type="number"
        placeholder="Enter number"
        min={0}
        max={100}
      />
      <Input
        label="Date Input"
        type="date"
      />
      <Input
        label="File Input"
        type="file"
        accept=".pdf,.doc,.docx"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Różne typy inputów HTML z właściwym stylowaniem.',
      },
    },
  },
};

// Interactive test
export const WithInteractions: Story = {
  args: {
    label: 'Test Input',
    placeholder: 'Type something...',
    helperText: 'This is for testing',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/test input/i);
    
    // Test input existence
    await expect(input).toBeInTheDocument();
    
    // Test focus
    await userEvent.click(input);
    await expect(input).toHaveFocus();
    
    // Test typing
    await userEvent.type(input, 'Hello World');
    await expect(input).toHaveValue('Hello World');
    
    // Test clearing
    await userEvent.clear(input);
    await expect(input).toHaveValue('');
  },
  parameters: {
    docs: {
      description: {
        story: 'Automatyczne testy interakcji - focus, typing, clearing.',
      },
    },
  },
};

// Real-world examples
export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '400px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>Search Form</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input
            label="Search Projects"
            placeholder="Search by name, code, or description..."
            leftIcon={<Search />}
            size="lg"
          />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>Contact Form</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input
            label="Full Name"
            placeholder="John Doe"
            leftIcon={<User />}
            required
          />
          <Input
            label="Email Address"
            placeholder="john@example.com"
            type="email"
            leftIcon={<Mail />}
            required
          />
          <Input
            label="Phone Number"
            placeholder="+48 123 456 789"
            type="tel"
            leftIcon={<Phone />}
            helperText="Optional - we'll call you back"
          />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>Filter Inputs</h3>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Input
            placeholder="Min price"
            type="number"
            size="sm"
            variant="filled"
          />
          <Input
            placeholder="Max price"
            type="number"
            size="sm"
            variant="filled"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Przykłady użycia inputów w rzeczywistych scenariuszach - wyszukiwanie, formularze kontaktowe, filtry.',
      },
    },
  },
};