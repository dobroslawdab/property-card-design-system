import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { designTokens } from '../tokens';

// Komponent do pokazywania kolorów
const ColorPalette = ({ colors, title }: { colors: any; title: string }) => (
  <div style={{ marginBottom: '32px' }}>
    <h3 style={{ marginBottom: '16px', fontFamily: 'Inter', fontWeight: 700 }}>{title}</h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
      {Object.entries(colors).map(([name, color]) => {
        if (typeof color === 'object' && color !== null) {
          return (
            <div key={name}>
              <h4 style={{ marginBottom: '8px', fontFamily: 'Inter', fontWeight: 600, textTransform: 'capitalize' }}>{name}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {Object.entries(color).map(([shade, value]) => (
                  <div key={shade} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: value as string,
                        borderRadius: '4px',
                        border: '1px solid #e5e5e5',
                      }}
                    />
                    <div style={{ fontFamily: 'Inter', fontSize: '14px' }}>
                      <div style={{ fontWeight: 600 }}>{shade}</div>
                      <div style={{ color: '#666', fontFamily: 'monospace' }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        } else {
          return (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: color as string,
                  borderRadius: '4px',
                  border: '1px solid #e5e5e5',
                }}
              />
              <div style={{ fontFamily: 'Inter', fontSize: '14px' }}>
                <div style={{ fontWeight: 600, textTransform: 'capitalize' }}>{name}</div>
                <div style={{ color: '#666', fontFamily: 'monospace' }}>{color}</div>
              </div>
            </div>
          );
        }
      })}
    </div>
  </div>
);

// Komponent do pokazywania typografii
const TypographyScale = () => (
  <div style={{ marginBottom: '32px' }}>
    <h3 style={{ marginBottom: '16px', fontFamily: 'Inter', fontWeight: 700 }}>Typography Scale</h3>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {Object.entries(designTokens.typography.fontSize).map(([name, size]) => (
        <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ minWidth: '60px', fontFamily: 'monospace', fontSize: '12px', color: '#666' }}>
            {name}
          </div>
          <div style={{ fontFamily: 'Inter', fontSize: size, fontWeight: 400 }}>
            {size} - The quick brown fox jumps over the lazy dog
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Komponent do pokazywania spacingu
const SpacingScale = () => (
  <div style={{ marginBottom: '32px' }}>
    <h3 style={{ marginBottom: '16px', fontFamily: 'Inter', fontWeight: 700 }}>Spacing Scale</h3>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {Object.entries(designTokens.spacing).map(([name, value]) => (
        <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ minWidth: '40px', fontFamily: 'monospace', fontSize: '12px', color: '#666' }}>
            {name}
          </div>
          <div style={{ minWidth: '60px', fontFamily: 'monospace', fontSize: '12px' }}>
            {value}
          </div>
          <div
            style={{
              width: value,
              height: '16px',
              backgroundColor: '#D9308A',
              borderRadius: '2px',
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

// Komponent do pokazywania shadows
const ShadowScale = () => (
  <div style={{ marginBottom: '32px' }}>
    <h3 style={{ marginBottom: '16px', fontFamily: 'Inter', fontWeight: 700 }}>Shadow Scale</h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
      {Object.entries(designTokens.shadows).map(([name, shadow]) => (
        <div key={name} style={{ textAlign: 'center' }}>
          <div
            style={{
              width: '120px',
              height: '80px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: shadow,
              margin: '0 auto 8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Inter',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            {name}
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: '10px', color: '#666' }}>
            {shadow}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Meta konfiguracja
const meta = {
  title: 'Design System/Design Tokens',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Centralne Design Tokens dla Z500 Design System. Wszystkie wartości wyciągnięte pixel-perfect z Figmy.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories dla różnych kategorii tokenów
export const Colors: Story = {
  render: () => (
    <div style={{ fontFamily: 'Inter' }}>
      <h2 style={{ marginBottom: '24px', fontWeight: 700 }}>Color Tokens</h2>
      <ColorPalette colors={designTokens.colors.primary} title="Primary Colors" />
      <ColorPalette colors={designTokens.colors.neutral} title="Neutral Colors" />
      <ColorPalette colors={designTokens.colors.semantic} title="Semantic Colors" />
      <ColorPalette colors={designTokens.colors.surface} title="Surface Colors" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Paleta kolorów Z500 Design System. Kolory główne (primary) to różowy brand color z Figmy.',
      },
    },
  },
};

export const Typography: Story = {
  render: () => (
    <div style={{ fontFamily: 'Inter' }}>
      <h2 style={{ marginBottom: '24px', fontWeight: 700 }}>Typography Tokens</h2>
      <TypographyScale />
      
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Inter', fontWeight: 700 }}>Font Weights</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {Object.entries(designTokens.typography.fontWeight).map(([name, weight]) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ minWidth: '80px', fontFamily: 'monospace', fontSize: '12px', color: '#666' }}>
                {name}
              </div>
              <div style={{ fontFamily: 'Inter', fontSize: '18px', fontWeight: weight }}>
                {weight} - Font weight example
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Skala typograficzna z font Inter. Line-height 1.21 oraz letter-spacing z Figmy.',
      },
    },
  },
};

export const Spacing: Story = {
  render: () => (
    <div style={{ fontFamily: 'Inter' }}>
      <h2 style={{ marginBottom: '24px', fontWeight: 700 }}>Spacing Tokens</h2>
      <SpacingScale />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Skala odstępów. Spacing 4 (12px) to padding PropertyCard, spacing 6 (20px) to gap w statystykach.',
      },
    },
  },
};

export const Shadows: Story = {
  render: () => (
    <div style={{ fontFamily: 'Inter', padding: '20px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ marginBottom: '24px', fontWeight: 700 }}>Shadow Tokens</h2>
      <ShadowScale />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Cienie używane w komponencie PropertyCard. Shadow "sm" to default, "md" to hover state.',
      },
    },
  },
};

export const BorderRadius: Story = {
  render: () => (
    <div style={{ fontFamily: 'Inter' }}>
      <h2 style={{ marginBottom: '24px', fontWeight: 700 }}>Border Radius Tokens</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
        {Object.entries(designTokens.borderRadius).map(([name, radius]) => (
          <div key={name} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '100px',
                height: '60px',
                backgroundColor: '#D9308A',
                borderRadius: radius,
                margin: '0 auto 8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 600,
                fontSize: '12px',
              }}
            >
              {name}
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#666' }}>
              {radius}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Border radius tokens. "sm" (4px) używane w tagach i obrazie, "md" (8px) w PropertyCard.',
      },
    },
  },
};

export const AllTokens: Story = {
  render: () => (
    <div style={{ fontFamily: 'Inter' }}>
      <h1 style={{ marginBottom: '32px', fontWeight: 700, fontSize: '32px' }}>
        Z500 Design System - All Tokens
      </h1>
      
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '24px', fontWeight: 700 }}>Usage Example</h2>
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '16px', 
          borderRadius: '8px',
          fontFamily: 'monospace',
          fontSize: '14px',
          border: '1px solid #e9ecef'
        }}>
          <div>{'import { designTokens } from "../tokens";'}</div>
          <div style={{ marginTop: '8px' }}>{'// Używanie tokenów:'}</div>
          <div>{'backgroundColor: designTokens.colors.primary.main'}</div>
          <div>{'padding: designTokens.spacing[4]'}</div>
          <div>{'borderRadius: designTokens.borderRadius.md'}</div>
          <div>{'boxShadow: designTokens.shadows.sm'}</div>
        </div>
      </div>

      <ColorPalette colors={designTokens.colors.primary} title="Primary Colors" />
      <ColorPalette colors={designTokens.colors.neutral} title="Neutral Colors" />
      <TypographyScale />
      <SpacingScale />
      <ShadowScale />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Kompletny przegląd wszystkich Design Tokens z przykładami użycia w kodzie.',
      },
    },
  },
};