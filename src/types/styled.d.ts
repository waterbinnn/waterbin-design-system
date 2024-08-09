import 'styled-components';
import { theme } from '../styles/theme';
import { color } from '@/styles';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    color: color;
    fontFamily: string;
    fontMain: string;
    fontPrice: string;
  }
}
