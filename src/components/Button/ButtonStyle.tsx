import styled, { css } from 'styled-components';
import { colors, colorMap, fontMain } from '@/styles';
import { ButtonType } from './Button.type';

const isDisabled = (props: ButtonType) => props.disabled;
const isLoading = (props: ButtonType) => props.loading;
const isTransparent = (props: ButtonType) => props.color === 'transparent';

/* 공통 색상 로직을 처리위함 */
const setTextColor = (props: ButtonType, whiteColor: string) => {
  if (isTransparent(props)) {
    return props.iconColor ? colorMap[props.iconColor] : colors['gray-900'];
  } else if (props.color === 'white') {
    return whiteColor;
  } else {
    return colors.white;
  }
};

const TransparentStyle = css<ButtonType>`
  background-color: ${(props) =>
    isTransparent(props) ? 'transparent' : colorMap[props.color!]};
  border: 1px solid ${(props) => setTextColor(props, colors.blue)};
  color: ${(props) => setTextColor(props, colors.blue)};

  &:hover {
    background-color: ${(props) => isTransparent(props) && colors['gray-200']};
  }

  ${(props) =>
    isLoading(props) &&
    css`
      svg {
        g {
          path {
            stroke: ${colors['gray-900']};
          }
        }
      }
    `};

  ${(props) => isDisabled(props) && DisabledStyle};
`;

const DisabledStyle = css`
  background-color: ${colors['gray-300']};
  color: ${colors['gray-500']};
  cursor: not-allowed;
  pointer-events: none;
  border: none;

  svg {
    g {
      path {
        stroke: ${colors['gray-500']};
      }
    }
  }
`;

const ButtonCommonStyle = styled.button<ButtonType>`
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  min-width: 60px;
  min-height: 42px;
  border-radius: ${(props) => (props.rounded ? '500px' : '12px')};
  user-select: none;
  cursor: pointer;

  ${(props) =>
    props.block &&
    css`
      width: 100%;
    `}
`;

const ButtonText = styled.span`
  font-family: ${fontMain};
  font-weight: 500;
  font-size: 14px;
`;

const FilledButton = styled(ButtonCommonStyle)<ButtonType>`
  background-color: ${(props) =>
    props.color ? colorMap[props.color] : colors.blue};
  color: ${(props) => (props.color !== 'white' ? colors.white : colors.blue)};

  &:hover {
    ${(props) =>
      !isLoading(props) &&
      css`
        opacity: 0.88;
      `}
  }

  ${TransparentStyle}
  ${(props) => isDisabled(props) && DisabledStyle};
  ${(props) =>
    isLoading(props) &&
    css`
      cursor: not-allowed;
      pointer-events: none;

      svg {
        g {
          path {
            stroke: ${props.color === 'transparent'
              ? colors['gray-900']
              : props.color === 'white'
                ? colors.blue
                : colors.white};
          }
        }
      }
    `}
`;

const OutlinedButton = styled(ButtonCommonStyle)<ButtonType>`
  background-color: transparent;
  color: ${(props) =>
    props.color && props.color !== 'transparent'
      ? colorMap[props.color]
      : colors.blue};
  border: 1px solid
    ${(props) =>
      props.color && props.color !== 'transparent'
        ? colorMap[props.color]
        : colors.blue};

  ${(props) => isTransparent(props) && TransparentStyle};
  ${(props) => isDisabled(props) && DisabledStyle};
  ${(props) =>
    isLoading(props) &&
    css`
      cursor: not-allowed;
      pointer-events: none;

      svg {
        g {
          path {
            stroke: ${props.color !== 'transparent'
              ? colorMap[props.color!]
              : colors['gray-900']};
          }
        }
      }
    `};

  &:hover {
    ${(props) =>
      !isLoading(props) &&
      css`
        background-color: ${colors['gray-200']};
        color: ${props.color === 'white'
          ? colors.blue
          : colorMap[props.color!]};
      `}
  }
`;

const IconTextButton = styled(FilledButton)<ButtonType>`
  padding: 10px 16px 10px 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  flex-direction: ${({ iconPosition }) =>
    iconPosition === 'start' ? 'row' : 'row-reverse'};
  padding: ${({ iconPosition }) =>
    iconPosition === 'start' ? '10px 16px 10px 12px' : '10px 12px 10px 16px'};

  ${(props) =>
    isDisabled(props) && {
      DisabledStyle,
    }};
`;

const IconButton = styled(FilledButton)<ButtonType>`
  ${TransparentStyle}

  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 36px;
  min-height: 36px;
  border: none;
  svg > path {
    fill: ${(props) => setTextColor(props, colors['gray-900'])};
  }

  ${(props) =>
    isDisabled(props) &&
    css`
      background-color: ${colors['gray-300']};
      cursor: not-allowed;
      pointer-events: none;
    `};

  ${(props) =>
    isLoading(props) &&
    css`
      cursor: not-allowed;
      pointer-events: none;

      svg {
        g {
          path {
            stroke: ${colors['gray-200']};
          }
        }
      }
    `};
`;

const TagButton = styled(FilledButton)<ButtonType>`
  padding: 6px 6px;
  min-height: 24px;
  min-width: 22px;
  border-radius: 8px;

  span {
    font-size: 12px;
  }
`;

const LinkButton = styled.a<ButtonType>`
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  padding: 8px 10px;
  user-select: none;
  cursor: pointer;
  color: ${(props) =>
    props.color && props.color !== 'transparent'
      ? colorMap[props.color]
      : colors.blue};

  ${(props) =>
    isDisabled(props) &&
    css`
      color: ${colors['gray-500']};
      cursor: not-allowed;
      pointer-events: none;
    `};

  &:hover {
    opacity: ${(props) => !isDisabled(props) && 0.88};
  }

  ${(props) =>
    isLoading(props) &&
    css`
      cursor: not-allowed;
      pointer-events: none;

      svg {
        g {
          path {
            stroke: ${props.color && props.color !== 'transparent'
              ? colorMap[props.color]
              : colors.blue};
          }
        }
      }
    `};
`;

const TextButton = styled.button<ButtonType>`
  font-family: ${fontMain};
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => (props.color ? colorMap[props.color] : colors.blue)};
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: inline-flex;
  padding: 6px;

  ${(props) =>
    isDisabled(props) &&
    css`
      color: ${colors['gray-500']};
      cursor: not-allowed;
      pointer-events: none;
    `};

  &:hover {
    opacity: ${(props) => !isDisabled(props) && 0.88};
  }
`;

export {
  FilledButton,
  OutlinedButton,
  IconTextButton,
  IconButton,
  TagButton,
  LinkButton,
  ButtonText,
  TextButton,
};
