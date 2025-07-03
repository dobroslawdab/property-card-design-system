import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { designTokens } from '../../tokens';
import { cn } from '../../lib/utils';
import './Badge.css';

/**
 * Badge variants using CVA (Class Variance Authority)
 * All styles use CSS custom properties connected to our design tokens
 */
const badgeVariants = cva(
  // Base classes
  "badge-base",
  {
    variants: {
      variant: {
        primary: "badge-primary",
        secondary: "badge-secondary",
        success: "badge-success",
        warning: "badge-warning",
        error: "badge-error",
        info: "badge-info",
        outline: "badge-outline",
        ghost: "badge-ghost",
      },
      size: {
        sm: "badge-sm",
        md: "badge-md",
        lg: "badge-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * Icon to display before text
   */
  icon?: React.ReactNode;
  /**
   * Show dot indicator
   */
  dot?: boolean;
  /**
   * Handler for remove button click
   */
  onRemove?: () => void;
  /**
   * Handler for badge click
   */
  onClick?: () => void;
}

/**
 * Badge component built with our design tokens and CVA variants
 * 
 * @example
 * <Badge variant="primary" size="md">
 *   Featured
 * </Badge>
 * 
 * @example
 * <Badge variant="success" icon={<CheckIcon />} dot>
 *   Available
 * </Badge>
 * 
 * @example
 * <Badge variant="outline" onRemove={() => console.log('removed')}>
 *   Removable
 * </Badge>
 */
const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ 
    className, 
    variant, 
    size, 
    icon,
    dot,
    onRemove,
    onClick,
    children,
    ...props 
  }, ref) => {
    
    const isClickable = Boolean(onClick);
    const isRemovable = Boolean(onRemove);
    
    // CSS custom properties from design tokens
    const tokenStyles = {
      '--color-primary': designTokens.colors.primary.main,
      '--color-primary-light': designTokens.colors.primary.light,
      '--color-primary-dark': designTokens.colors.primary.dark,
      '--color-primary-contrast': designTokens.colors.primary.contrast,
      '--color-neutral-black': designTokens.colors.neutral.black,
      '--color-neutral-white': designTokens.colors.neutral.white,
      '--color-neutral-gray-100': designTokens.colors.neutral.gray[100],
      '--color-neutral-gray-200': designTokens.colors.neutral.gray[200],
      '--color-neutral-gray-300': designTokens.colors.neutral.gray[300],
      '--color-neutral-gray-500': designTokens.colors.neutral.gray[500],
      '--color-semantic-success': designTokens.colors.semantic.success,
      '--color-semantic-warning': designTokens.colors.semantic.warning,
      '--color-semantic-error': designTokens.colors.semantic.error,
      '--color-semantic-info': designTokens.colors.semantic.info,
      '--font-family': designTokens.typography.fontFamily.primary,
      '--transition': designTokens.transitions.fast,
      '--radius-sm': designTokens.borderRadius.sm,
      '--radius-md': designTokens.borderRadius.md,
      '--radius-full': designTokens.borderRadius.full,
    } as React.CSSProperties;

    const handleClick = (event: React.MouseEvent) => {
      if (onClick) {
        event.preventDefault();
        onClick();
      }
    };

    const handleRemove = (event: React.MouseEvent) => {
      if (onRemove) {
        event.stopPropagation();
        event.preventDefault();
        onRemove();
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (onClick && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        onClick();
      }
    };

    return (
      <div
        className={cn(
          badgeVariants({ variant, size }),
          isClickable && 'badge-clickable',
          className
        )}
        style={tokenStyles}
        ref={ref}
        onClick={isClickable ? handleClick : undefined}
        onKeyDown={isClickable ? handleKeyDown : undefined}
        tabIndex={isClickable ? 0 : undefined}
        role={isClickable ? 'button' : undefined}
        aria-label={isClickable && typeof children === 'string' ? `Badge: ${children}` : undefined}
        {...props}
      >
        {dot && (
          <span className="badge-dot" aria-hidden="true" />
        )}
        
        {icon && (
          <span className="badge-icon" aria-hidden="true">
            {icon}
          </span>
        )}
        
        {children && (
          <span className="badge-content">
            {children}
          </span>
        )}
        
        {isRemovable && (
          <button
            className="badge-remove"
            onClick={handleRemove}
            aria-label={typeof children === 'string' ? `Remove ${children}` : 'Remove badge'}
          >
            <X className="badge-remove-icon" />
          </button>
        )}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
export type { BadgeProps };