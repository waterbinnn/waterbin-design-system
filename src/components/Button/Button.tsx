import { ButtonExtends, ButtonType } from './Button.type';
import { forwardRef } from 'react';

import {
  ButtonText,
  FilledButton,
  IconButton,
  IconTextButton,
  LinkButton,
  OutlinedButton,
  TagButton,
  TextButton,
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
      block = false,
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
          block={block}
          loading={loading}
          {...rest}
        >
          {loading ? (
            <>
              <Loading />
              <ButtonText>{children}</ButtonText>
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
          loading={loading}
          block={block}
          {...rest}
        >
          {loading ? (
            <>
              <Loading />
              <ButtonText>{children}</ButtonText>
            </>
          ) : (
            <ButtonText>{children}</ButtonText>
          )}
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
          loading={loading}
          block={block}
          {...rest}
        >
          {loading ? (
            <Loading />
          ) : (
            <>
              {icon}
              <ButtonText>{children}</ButtonText>
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
          loading={loading}
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
          <ButtonText>{children}</ButtonText>
          {/* 삭제를 위한 x 아이콘 추후 추가 예정 */}
        </TagButton>
      ),
      link: (
        <LinkButton
          loading={loading}
          kind={'link'}
          href={href}
          disabled={disabled}
          color={color}
          {...rest}
        >
          {loading ? <Loading /> : <ButtonText>{children}</ButtonText>}
        </LinkButton>
      ),
      text: (
        <TextButton color={color} kind={'text'} disabled={disabled} {...rest}>
          {children}
        </TextButton>
      ),
    };
    return kinds[kind];
  }
);

Button.displayName = 'Button';

export default Button;
