import { Color } from '@/types/Color';
import React, {
  AnchorHTMLAttributes,
  AriaRole,
  ButtonHTMLAttributes,
} from 'react';

type ButtonExtends = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

interface ButtonType extends ButtonExtends {
  size?: 'small' | 'medium' | 'large';
  kind: 'filled' | 'outlined' | 'link' | 'icon' | 'iconText' | 'tag';
  color?: Color;
  disabled?: boolean;
  loading?: boolean;
  rounded?: boolean;
  block?: boolean;
  role?: AriaRole;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  iconColor?: Color;
  children: React.ReactNode;
}

export type { ButtonExtends, ButtonType };
