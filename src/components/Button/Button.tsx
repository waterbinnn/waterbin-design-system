import { ButtonExtends, ButtonType } from './ButtonType';
import { forwardRef } from 'react';

import {
  ButtonText,
  FilledButton,
  IconButton,
  IconTextButton,
  LinkButton,
  OutlinedButton,
  TagButton,
} from './ButtonStyle';
import { Loading } from '../Loading/Loading';

export const Button = forwardRef<ButtonExtends, ButtonType>(
  (
    {
      kind = 'filled',
      rounded = false,
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
          kind={'filled'}
          color={color}
          rounded={rounded}
          disabled={disabled}
          {...rest}
        >
          {loading ? (
            <>
              <Loading /> {children}
            </>
          ) : (
            <ButtonText>{children}</ButtonText>
          )}
        </FilledButton>
      ),
      outlined: (
        <OutlinedButton
          kind={'outlined'}
          color={color}
          rounded={rounded}
          disabled={disabled}
          {...rest}
        >
          {loading ? <Loading /> : children}
        </OutlinedButton>
      ),
      iconText: (
        <IconTextButton
          kind={'iconText'}
          color={color}
          iconColor={iconColor}
          rounded={rounded}
          disabled={disabled}
          iconPosition={iconPosition}
          {...rest}
        >
          {loading ? (
            <Loading />
          ) : (
            <>
              {icon}
              {children}
            </>
          )}
        </IconTextButton>
      ),
      icon: (
        <IconButton
          kind={'icon'}
          color={color}
          rounded={rounded}
          disabled={disabled}
          iconColor={iconColor}
          {...rest}
        >
          {loading ? <Loading /> : icon}
        </IconButton>
      ),
      tag: (
        <TagButton
          kind={'tag'}
          color={color}
          rounded={rounded}
          disabled={disabled}
          {...rest}
        >
          {loading ? <Loading /> : icon}

          {/* 삭제를 위한 x 아이콘 추후 추가 예정 */}
        </TagButton>
      ),
      link: (
        <LinkButton kind={'link'} href={href} disabled={disabled} {...rest}>
          {loading ? <Loading /> : children}
        </LinkButton>
      ),
    };
    return kinds[kind];
  }
);

Button.displayName = 'Button';

export default Button;
