import { Color } from '@/styles';
import { AnchorHTMLAttributes, AriaRole, ButtonHTMLAttributes } from 'react';

type ButtonExtends = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

interface ButtonType extends ButtonExtends {
  size?: 'small' | 'medium' | 'large';
  kind?: 'filled' | 'outlined' | 'link' | 'icon' | 'iconText' | 'tag';
  color?: Color;
  disabled?: boolean;
  loading?: boolean;
  $rounded?: boolean;
  block?: boolean;
  role?: AriaRole;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  iconColor?: Color;
}

export type { ButtonExtends, ButtonType };
