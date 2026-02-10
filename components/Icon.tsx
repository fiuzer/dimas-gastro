import React from 'react';

export type IconName =
  | 'ChefHat'
  | 'Menu'
  | 'Compass'
  | 'Users'
  | 'ClipboardList'
  | 'Calculator'
  | 'Sparkles'
  | 'Utensils'
  | 'ClipboardCheck'
  | 'ArrowRight'
  | 'Check'
  | 'X';

type IconProps = {
  name: IconName;
  className?: string;
};

const paths: Record<IconName, React.ReactNode> = {
  ChefHat: (
    <path d="M8 7a3 3 0 0 1 5-2.2A3 3 0 0 1 19 6v2a3 3 0 0 1-2 2.8V20H7v-9.2A3 3 0 0 1 5 8V6a3 3 0 0 1 3-3" />
  ),
  Menu: (
    <path d="M4 6h16M4 12h16M4 18h10" />
  ),
  Compass: (
    <path d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm3 6-4 2-2 4 4-2 2-4Z" />
  ),
  Users: (
    <path d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM4 20c0-3.3 3.6-5 8-5s8 1.7 8 5" />
  ),
  ClipboardList: (
    <path d="M9 4h6M9 4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-7 6h8m-8 4h8m-8 4h6" />
  ),
  Calculator: (
    <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 4h10M9 11h.01M12 11h.01M15 11h.01M9 15h.01M12 15h.01M15 15h.01" />
  ),
  Sparkles: (
    <path d="M5 10 3 9l2-1 1-2 1 2 2 1-2 1-1 2-1-2Zm12 0-2-1 2-1 1-2 1 2 2 1-2 1-1 2-1-2Zm-5 3 2 1-2 1-1 2-1-2-2-1 2-1 1-2 1 2Z" />
  ),
  Utensils: (
    <path d="M7 3v8m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m10-12v8m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4" />
  ),
  ClipboardCheck: (
    <path d="M9 4h6M9 4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-6 10 2 2 4-4" />
  ),
  ArrowRight: (
    <path d="M5 12h14m0 0-5-5m5 5-5 5" />
  ),
  Check: (
    <path d="m5 12 4 4 10-10" />
  ),
  X: (
    <path d="M6 6l12 12M18 6 6 18" />
  )
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
