import React from 'react';
import './PropertyCard.css';

export interface PropertyCardProps {
  id: string;
  imageUrl: string;
  title: string;
  area: string;
  additionalArea?: string;
  price: string;
  variants: number;
  comments: number;
  realizations: number;
  description: string;
  onClick?: () => void;
}

export const designTokens = {
  colors: {
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    secondary: '#64748b',
    surface: '#ffffff',
    surfaceHover: '#f8fafc',
    border: '#e2e8f0',
    borderHover: '#cbd5e1',
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
      accent: '#2563eb',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    xxl: '24px',
  },
  typography: {
    title: {
      fontSize: '18px',
      fontWeight: '600',
      lineHeight: '1.2',
    },
    body: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '1.4',
    },
    caption: {
      fontSize: '12px',
      fontWeight: '500',
      lineHeight: '1.3',
    },
  },
  borderRadius: {
    sm: '6px',
    md: '8px',
    lg: '12px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
  transitions: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
  },
} as const;

export const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  imageUrl,
  title,
  area,
  additionalArea,
  price,
  variants,
  comments,
  realizations,
  description,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (onClick && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick();
    }
  };

  const isInteractive = Boolean(onClick);

  return (
    <div
      className={`property-card ${isInteractive ? 'property-card--interactive' : ''}`}
      onClick={isInteractive ? handleClick : undefined}
      onKeyDown={isInteractive ? handleKeyDown : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      role={isInteractive ? 'button' : undefined}
      aria-label={isInteractive ? `Zobacz projekt ${title}` : undefined}
      data-testid={`property-card-${id}`}
    >
      <div className="property-card__image-container">
        <img
          src={imageUrl}
          alt={`Wizualizacja projektu domu ${title}`}
          className="property-card__image"
          loading="lazy"
        />
        <div className="property-card__stats-overlay">
          <div className="property-card__stat">
            <span className="property-card__stat-value">{variants}</span>
            <span className="property-card__stat-label">wariantów</span>
          </div>
          <div className="property-card__stat">
            <span className="property-card__stat-value">{comments}</span>
            <span className="property-card__stat-label">komentarzy</span>
          </div>
          <div className="property-card__stat">
            <span className="property-card__stat-value">{realizations}</span>
            <span className="property-card__stat-label">realizacji</span>
          </div>
        </div>
      </div>
      
      <div className="property-card__content">
        <div className="property-card__header">
          <h3 className="property-card__title">{title}</h3>
          <div className="property-card__area">
            {area}
            {additionalArea && (
              <span className="property-card__additional-area">+ {additionalArea}</span>
            )}
          </div>
        </div>
        
        <p className="property-card__description">{description}</p>
        
        <div className="property-card__footer">
          <div className="property-card__price">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
