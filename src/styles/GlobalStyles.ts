'use client';

import { createGlobalStyle, css } from 'styled-components';
import { fontFamily } from './constants/fonts';

const styles = css`
  @font-face {
    font-family: 'pretendard';
    font-style: normal;
    font-display: optional;
    src: url('../assets/fonts/PretendardVariable.woff2') format('woff2');
  }

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

const GlobalStyles = createGlobalStyle`
${styles}
`;

export default GlobalStyles;
