import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { designTokens } from '../../tokens';
import { cn } from '../../lib/utils';
import './Button.css';

/**
 * Button variants using CVA (Class Variance Authority)
 * All styles use CSS custom properties connected to our design tokens
 */
const buttonVariants = cva(
  // Base classes
  "button-base",
  {
    variants: {
      variant: {
        primary: "button-primary",
        secondary: "button-secondary", 
        outline: "button-outline",
        ghost: "button-ghost",
        destructive: "button-destructive",
        link: "button-link",
      },
      size: {
        sm: "button-sm",
        md: "button-md", 
        lg: "button-lg",
        icon: "button-icon",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Render as a different component (e.g., Link)
   */
  asChild?: boolean;
  /**
   * Show loading state
   */
  loading?: boolean;
  /**
   * Icon to display before text
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon to display after text
   */
  rightIcon?: React.ReactNode;
}

/**
 * Button component built with our design tokens and CVA variants
 * 
 * @example
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Click me
 * </Button>
 * 
 * @example
 * <Button variant="outline" leftIcon={<HeartIcon />}>
 *   Add to favorites
 * </Button>
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false, 
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    
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
      '--color-semantic-error': designTokens.colors.semantic.error,
      '--font-family': designTokens.typography.fontFamily.primary,
      '--transition': designTokens.transitions.normal,
      '--radius-sm': designTokens.borderRadius.sm,
      '--radius-md': designTokens.borderRadius.md,
      '--shadow-sm': designTokens.shadows.sm,
      '--shadow-md': designTokens.shadows.md,
    } as React.CSSProperties;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        style={tokenStyles}
        ref={ref}
        disabled={disabled || loading}
        data-loading={loading}
        {...props}
      >
        {loading && (
          <div className="button-spinner" aria-hidden="true" />
        )}
        {!loading && leftIcon && (
          <span className="button-icon button-icon--left" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        {children && (
          <span className="button-content">
            {children}
          </span>
        )}
        {!loading && rightIcon && (
          <span className="button-icon button-icon--right" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };