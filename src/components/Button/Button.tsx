'use client';

import { ButtonExtends, ButtonType } from './ButtonType';
import { forwardRef } from 'react';

import {
  FilledButton,
  IconButton,
  IconTextButton,
  LinkButton,
  OutlinedButton,
  TagButton,
} from './ButtonStyle';

export const Button = forwardRef<ButtonExtends, ButtonType>(
  (
    {
      kind = 'filled',
      $rounded = false,
      color = 'blue',
      children,
      disabled = false,
      loading = false,
      href,
      icon,
      type = 'button',
      iconPosition = 'start',
      iconColor,
      ...rest
    },
    ref
  ) => {
    const kinds = {
      filled: (
        <FilledButton
          color={color}
          $rounded={$rounded}
          disabled={disabled}
          {...rest}
        >
          {children}
        </FilledButton>
      ),
      outlined: (
        <OutlinedButton
          color={color}
          $rounded={$rounded}
          disabled={disabled}
          {...rest}
        >
          {children}
        </OutlinedButton>
      ),
      iconText: (
        <IconTextButton
          color={color}
          iconColor={iconColor}
          $rounded={$rounded}
          disabled={disabled}
          iconPosition={iconPosition}
          {...rest}
        >
          {icon}
          {children}
        </IconTextButton>
      ),
      icon: (
        <IconButton
          color={color}
          $rounded={$rounded}
          disabled={disabled}
          iconColor={iconColor}
          {...rest}
        >
          {icon}
        </IconButton>
      ),
      tag: (
        <TagButton
          color={color}
          $rounded={$rounded}
          disabled={disabled}
          {...rest}
        >
          {children}
          {/* 삭제를 위한 x 아이콘 추후 추가 예정 */}
        </TagButton>
      ),
      link: (
        <LinkButton href={href} disabled={disabled} {...rest}>
          {children}
        </LinkButton>
      ),
    };

    return kinds[kind];
  }
);

Button.displayName = 'Button';

export default Button;
