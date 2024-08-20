// .storybook/preview.jsx

import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { createGlobalStyle } from 'styled-components';
import { fontFamily } from '../src/styles/constants/fonts';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  #__next,
  html,
  body {
    font-family: ${fontFamily};
    box-sizing: border-box;
    font-weight: 400;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];
