import styled, { css } from 'styled-components';
import { color, colorMap, fontMain } from '@/styles';
import { ButtonType } from './ButtonType';

const ButtonCommonStyle = styled.button<ButtonType>`
  font-family: ${fontMain};
  font-weight: 500;
  border: none;
  background-color: transparent;
  display: inline-block;
  font-size: 14px;
  padding: 10px 24px;
  min-width: 30px;
  user-select: none;
  border-radius: ${(props) => (props.$rounded ? '500px' : '12px')};
  cursor: pointer;

  &:disabled {
    background-color: ${color['gray-300']};
    color: ${color['gray-500']};
    cursor: not-allowed;
  }
`;

const FilledButton = styled(ButtonCommonStyle)<ButtonType>`
  background-color: ${(props) =>
    props.color ? colorMap[props.color] : color.blue};
  color: ${(props) => (props.color !== 'white' ? color.white : color.blue)};

  &:hover {
    opacity: 0.88;
  }
`;

const OutlinedButton = styled(ButtonCommonStyle)<ButtonType>`
  background-color: transparent;
  color: ${(props) => (props.color ? colorMap[props.color] : color.black)};
  border: 1px solid
    ${(props) => (props.color ? colorMap[props.color] : color.black)};

  &:hover {
    background-color: ${color['gray-200']};
  }
`;

/* 배경이 투명색 일 때 스타일 정의위함 */
const isTransparent = (props: ButtonType) => props.color === 'transparent';

/* 공통 색상 로직을 처리위함 */
const setTextColor = (props: ButtonType, whiteColor: string) => {
  if (isTransparent(props)) {
    return props.iconColor ? colorMap[props.iconColor] : color['gray-900'];
  } else if (props.color === 'white') {
    return whiteColor;
  } else {
    return color.white;
  }
};

const TransparentStyle = css<ButtonType>`
  background-color: ${(props) =>
    isTransparent(props) ? 'transparent' : colorMap[props.color!]};
  border: 1px solid ${(props) => setTextColor(props, color.blue)};

  color: ${(props) => setTextColor(props, color.blue)};

  svg > path {
    fill: ${(props) => setTextColor(props, color.blue)};
  }

  &:hover {
    background-color: ${(props) => isTransparent(props) && color['gray-200']};
  }
`;

const IconTextButton = styled(FilledButton)<ButtonType>`
  ${TransparentStyle}
  padding: 10px 16px 10px 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  flex-direction: ${({ iconPosition }) =>
    iconPosition === 'start' ? 'row' : 'row-reverse'};
  padding: ${({ iconPosition }) =>
    iconPosition === 'start' ? '10px 16px 10px 12px' : '10px 12px 10px 16px'};
`;

const IconButton = styled(FilledButton)<ButtonType>`
  ${TransparentStyle}
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg > path {
    fill: ${(props) => setTextColor(props, color['gray-900'])};
  }
  border: none;
`;

const TagButton = styled(FilledButton)<ButtonType>`
  padding: 8px 10px;
`;

const LinkButton = styled.a<ButtonType>`
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  padding: 8px 10px;
  user-select: none;
  color: ${({ disabled }) =>
    disabled ? color['gray-500'] : color['gray-900']};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};

  &:hover {
    color: ${({ disabled }) => !disabled && color.mint};
  }
`;

export {
  FilledButton,
  OutlinedButton,
  IconTextButton,
  IconButton,
  TagButton,
  LinkButton,
};
