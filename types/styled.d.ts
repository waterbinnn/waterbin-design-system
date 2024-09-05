import 'styled-components';
import { theme } from '../src/styles/theme';
import { Color, ColorsArr } from './Color';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: ColorsArr;
    fontFamily: string;
    fontMain: string;
    fontPrice: string;
  }
}
