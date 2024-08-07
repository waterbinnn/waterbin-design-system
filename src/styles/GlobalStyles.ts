'use client';

import { createGlobalStyle, css } from 'styled-components';

const styles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  #__next,
  html,
  body {
    box-sizing: border-box;
    font-weight: 400;
  }
`;

const GlobalStyles = createGlobalStyle`
${styles}
`;

export default GlobalStyles;
