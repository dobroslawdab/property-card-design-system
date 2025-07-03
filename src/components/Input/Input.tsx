import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { designTokens } from '../../tokens';
import { cn } from '../../lib/utils';
import './Input.css';

/**
 * Input variants using CVA (Class Variance Authority)
 * All styles use CSS custom properties connected to our design tokens
 */
const inputVariants = cva(
  // Base classes
  "input-base",
  {
    variants: {
      variant: {
        default: "input-default",
        filled: "input-filled",
        ghost: "input-ghost",
      },
      size: {
        sm: "input-sm",
        md: "input-md",
        lg: "input-lg",
      },
      state: {
        default: "input-state-default",
        error: "input-state-error",
        success: "input-state-success",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      state: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  /**
   * Input label
   */
  label?: string;
  /**
   * Helper text shown below input
   */
  helperText?: string;
  /**
   * Error message (overrides helperText and sets error state)
   */
  error?: string;
  /**
   * Success message (overrides helperText and sets success state)
   */
  success?: string;
  /**
   * Icon to display on the left side
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon to display on the right side
   */
  rightIcon?: React.ReactNode;
  /**
   * Custom wrapper className
   */
  wrapperClassName?: string;
}

/**
 * Input component built with our design tokens and CVA variants
 * 
 * @example
 * <Input 
 *   label="Email" 
 *   placeholder="Enter your email"
 *   type="email"
 *   leftIcon={<MailIcon />}
 * />
 * 
 * @example
 * <Input 
 *   label="Password" 
 *   type="password"
 *   error="Password is required"
 * />
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className,
    wrapperClassName,
    variant, 
    size, 
    state,
    label,
    helperText,
    error,
    success,
    leftIcon,
    rightIcon,
    disabled,
    id,
    ...props 
  }, ref) => {
    
    // Generate unique ID if not provided
    const inputId = id || React.useId();
    
    // Determine actual state based on props
    const actualState = error ? 'error' : success ? 'success' : state || 'default';
    
    // Determine helper text to show
    const displayHelperText = error || success || helperText;
    
    // CSS custom properties from design tokens
    const tokenStyles = {
      '--color-primary': designTokens.colors.primary.main,
      '--color-primary-light': designTokens.colors.primary.light,
      '--color-neutral-black': designTokens.colors.neutral.black,
      '--color-neutral-white': designTokens.colors.neutral.white,
      '--color-neutral-gray-100': designTokens.colors.neutral.gray[100],
      '--color-neutral-gray-200': designTokens.colors.neutral.gray[200],
      '--color-neutral-gray-300': designTokens.colors.neutral.gray[300],
      '--color-neutral-gray-400': designTokens.colors.neutral.gray[400],
      '--color-neutral-gray-500': designTokens.colors.neutral.gray[500],
      '--color-neutral-gray-600': designTokens.colors.neutral.gray[600],
      '--color-semantic-success': designTokens.colors.semantic.success,
      '--color-semantic-warning': designTokens.colors.semantic.warning,
      '--color-semantic-error': designTokens.colors.semantic.error,
      '--color-semantic-info': designTokens.colors.semantic.info,
      '--font-family': designTokens.typography.fontFamily.primary,
      '--transition': designTokens.transitions.fast,
      '--radius-sm': designTokens.borderRadius.sm,
      '--radius-md': designTokens.borderRadius.md,
    } as React.CSSProperties;

    return (
      <div 
        className={cn('input-wrapper', wrapperClassName)}
        style={tokenStyles}
      >
        {label && (
          <label 
            htmlFor={inputId}
            className="input-label"
          >
            {label}
          </label>
        )}
        
        <div className="input-container">
          {leftIcon && (
            <div className="input-icon input-icon--left" aria-hidden="true">
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            id={inputId}
            className={cn(
              inputVariants({ variant, size, state: actualState }),
              leftIcon && 'input-with-left-icon',
              rightIcon && 'input-with-right-icon',
              className
            )}
            disabled={disabled}
            aria-invalid={actualState === 'error'}
            aria-describedby={
              displayHelperText ? `${inputId}-helper` : undefined
            }
            {...props}
          />
          
          {rightIcon && (
            <div className="input-icon input-icon--right" aria-hidden="true">
              {rightIcon}
            </div>
          )}
        </div>
        
        {displayHelperText && (
          <div 
            id={`${inputId}-helper`}
            className={cn(
              'input-helper',
              actualState === 'error' && 'input-helper--error',
              actualState === 'success' && 'input-helper--success'
            )}
          >
            {displayHelperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
export type { InputProps };