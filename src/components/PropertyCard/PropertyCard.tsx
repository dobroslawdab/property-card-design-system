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
    primary: '#D9308A',      // Różowy tag z Figmy
    secondary: '#1B1B1B',    // Czarny tag z Figmy  
    neutral: '#F4F3EF',      // Beżowy tag z Figmy
    text: '#000000',         // Czarny tekst z Figmy
    background: '#FFFFFF',   // Białe tło z Figmy
  },
  typography: {
    title: {
      fontFamily: 'Inter',
      fontWeight: '700',
      fontSize: '18px',
      lineHeight: '1.21',
      letterSpacing: '-1.9%',
    },
    area: {
      fontFamily: 'Inter', 
      fontWeight: '300',
      fontSize: '18px',
      lineHeight: '1.21',
      letterSpacing: '-1.1%',
    },
    price: {
      fontFamily: 'Inter',
      fontWeight: '300', 
      fontSize: '18px',
      lineHeight: '1.21',
      letterSpacing: '-1.1%',
    },
    description: {
      fontFamily: 'Inter',
      fontWeight: '300',
      fontSize: '14px', 
      lineHeight: '1.21',
      letterSpacing: '-1.1%',
    },
    statLabel: {
      fontFamily: 'Inter',
      fontWeight: '300',
      fontSize: '10px',
      lineHeight: '1.21', 
      letterSpacing: '-1.1%',
    },
    statValue: {
      fontFamily: 'Inter',
      fontWeight: '700',
      fontSize: '13px',
      lineHeight: '1.21',
      letterSpacing: '-1.1%',
    },
  },
  layout: {
    width: '368.46px',
    padding: '12px',
    gap: '10px',
    imageHeight: '227px',
    tagHeight: '40px',
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

  const areaText = additionalArea ? `${area}+ ${additionalArea}` : area;

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
      {/* Obraz */}
      <div className="property-card__image-container">
        <img
          src={imageUrl}
          alt={`Wizualizacja projektu domu ${title}`}
          className="property-card__image"
          loading="lazy"
        />
      </div>
      
      {/* Tagi poziome */}
      <div className="property-card__tags">
        <div className="property-card__tag property-card__tag--primary">
          <span className="property-card__tag-text">{title}</span>
        </div>
        <div className="property-card__tag property-card__tag--secondary">
          <span className="property-card__tag-text">{areaText}</span>
        </div>
        <div className="property-card__tag property-card__tag--neutral">
          <span className="property-card__tag-text">{price}</span>
        </div>
      </div>
      
      {/* Opis */}
      <p className="property-card__description">{description}</p>
      
      {/* Statystyki poziome */}
      <div className="property-card__stats">
        <div className="property-card__stat-group">
          <span className="property-card__stat-label">Warianty:</span>
          <span className="property-card__stat-value">{variants}</span>
        </div>
        <div className="property-card__stat-group">
          <span className="property-card__stat-label">Komentarze:</span>
          <span className="property-card__stat-value">{comments}</span>
        </div>
        <div className="property-card__stat-group">
          <span className="property-card__stat-label">Realizacje:</span>
          <span className="property-card__stat-value">{realizations.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;