import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind classes with proper precedence
 * Used throughout the design system for conditional styling
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Utility to create CSS custom properties from design tokens
 * Useful for creating theme-aware components
 */
export function createCSSVars(tokens: Record<string, string>) {
  return Object.entries(tokens).reduce((acc, [key, value]) => {
    acc[`--${key}`] = value;
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Format numbers with locale-specific formatting
 * Used for displaying statistics, prices, etc.
 */
export function formatNumber(num: number, locale = 'pl-PL'): string {
  return new Intl.NumberFormat(locale).format(num);
}

/**
 * Clamp a value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Generate a random ID for components
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}