import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { within, userEvent, expect } from '@storybook/test';
import { Heart, Download, ArrowRight, Plus } from 'lucide-react';
import { Button } from './Button';

const meta = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button komponent zbudowany z naszymi Design Tokens. Obsługuje różne warianty, rozmiary, ikony i stany loading.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'link'],
      description: 'Wariant wizualny buttona',
    },
    size: {
      control: 'select', 
      options: ['sm', 'md', 'lg', 'icon'],
      description: 'Rozmiar buttona',
    },
    loading: {
      control: 'boolean',
      description: 'Stan ładowania z spinnerem',
    },
    disabled: {
      control: 'boolean',
      description: 'Stan wyłączony',
    },
    children: {
      control: 'text',
      description: 'Tekst buttona',
    },
    onClick: {
      action: 'button-clicked',
      description: 'Handler kliknięcia',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: 'Click me',
    onClick: action('button-clicked'),
  },
};

// All variants
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary" onClick={action('primary-clicked')}>Primary</Button>
      <Button variant="secondary" onClick={action('secondary-clicked')}>Secondary</Button>
      <Button variant="outline" onClick={action('outline-clicked')}>Outline</Button>
      <Button variant="ghost" onClick={action('ghost-clicked')}>Ghost</Button>
      <Button variant="destructive" onClick={action('destructive-clicked')}>Destructive</Button>
      <Button variant="link" onClick={action('link-clicked')}>Link</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Wszystkie dostępne warianty buttona z naszymi design tokens.',
      },
    },
  },
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button size="sm" onClick={action('small-clicked')}>Small</Button>
      <Button size="md" onClick={action('medium-clicked')}>Medium</Button>
      <Button size="lg" onClick={action('large-clicked')}>Large</Button>
      <Button size="icon" onClick={action('icon-clicked')}>
        <Heart />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Różne rozmiary buttonów, włącznie z wariantem tylko z ikoną.',
      },
    },
  },
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button leftIcon={<Heart />} onClick={action('left-icon-clicked')}>
        Add to favorites
      </Button>
      <Button rightIcon={<ArrowRight />} onClick={action('right-icon-clicked')}>
        Continue
      </Button>
      <Button leftIcon={<Download />} rightIcon={<ArrowRight />} onClick={action('both-icons-clicked')}>
        Download & Continue
      </Button>
      <Button variant="outline" leftIcon={<Plus />} onClick={action('outline-icon-clicked')}>
        Add new
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttony z ikonami po lewej i prawej stronie. Ikony automatycznie mają odpowiedni rozmiar.',
      },
    },
  },
};

// Loading states
export const LoadingStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button loading onClick={action('loading-primary')}>Loading...</Button>
      <Button variant="outline" loading onClick={action('loading-outline')}>Saving...</Button>
      <Button variant="secondary" loading onClick={action('loading-secondary')}>Processing...</Button>
      <Button size="icon" loading onClick={action('loading-icon')} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Stany ładowania z animowanym spinnerem. Buttony są automatycznie wyłączone podczas ładowania.',
      },
    },
  },
};

// Disabled states
export const DisabledStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button disabled onClick={action('disabled-primary')}>Disabled Primary</Button>
      <Button variant="outline" disabled onClick={action('disabled-outline')}>Disabled Outline</Button>
      <Button variant="ghost" disabled onClick={action('disabled-ghost')}>Disabled Ghost</Button>
      <Button variant="destructive" disabled onClick={action('disabled-destructive')}>Disabled Destructive</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Wyłączone buttony z obniżoną przezroczystością i brakiem interakcji.',
      },
    },
  },
};

// Interactive test
export const WithInteractions: Story = {
  args: {
    children: 'Test Button',
    variant: 'primary',
    onClick: action('interaction-test'),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /test button/i });
    
    // Test button existence
    await expect(button).toBeInTheDocument();
    
    // Test hover state
    await userEvent.hover(button);
    
    // Test click
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
    
    // Test keyboard navigation
    button.focus();
    await expect(button).toHaveFocus();
    
    // Test keyboard activation
    await userEvent.keyboard('{Enter}');
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  },
  parameters: {
    docs: {
      description: {
        story: 'Automatyczne testy interakcji - hover, click, focus, keyboard navigation.',
      },
    },
  },
};

// Real-world examples
export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 600 }}>Property Card Actions</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button 
            variant="primary" 
            size="md"
            leftIcon={<Heart />}
            onClick={action('add-to-favorites')}
          >
            Dodaj do ulubionych
          </Button>
          <Button 
            variant="outline" 
            size="md"
            leftIcon={<Download />}
            onClick={action('download-project')}
          >
            Pobierz projekt
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={action('more-options')}
          >
            <Plus />
          </Button>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 600 }}>Form Actions</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button 
            variant="primary" 
            rightIcon={<ArrowRight />}
            onClick={action('form-submit')}
          >
            Wyślij formularz
          </Button>
          <Button 
            variant="outline" 
            onClick={action('form-cancel')}
          >
            Anuluj
          </Button>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 600 }}>Dangerous Actions</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button 
            variant="destructive" 
            size="sm"
            onClick={action('delete-project')}
          >
            Usuń projekt
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={action('cancel-delete')}
          >
            Anuluj
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Przykłady użycia buttonów w rzeczywistych scenariuszach - akcje na kartach projektów, formularze, działania niebezpieczne.',
      },
    },
  },
};