'use client';

import theme from '@/styles/theme';
import StyledComponentsRegistry from './registry';
import { ThemeProvider } from 'styled-components';

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
