import { Color } from '@/types/Color';

const colors = {
  black: '#000000',
  white: '#ffffff',
  'gray-200': '#f5f5f5',
  'gray-300': '#eeeeee',
  'gray-400': '#e0e0e0',
  'gray-500': '#bdbdbd',
  'gray-600': '#9e9e9e',
  'gray-700': '#757575',
  'gray-800': '#616161',
  'gray-900': '#424242',
  red: '#ff453a',
  orange: '#ff9f0a',
  yellow: '#ffd60a',
  green: '#32d74b',
  mint: '#66d4cf',
  teal: '#6ac4dc',
  cyan: '#5ac8f5',
  blue: '#0a84ff',
  indigo: '#5e5ce6',
  purple: '#bf5af2',
  pink: '#ff375f',
  brown: '#ac8e68',
  transparent: 'transparent',
};

const colorName = Object.keys(colors);

const colorMap: Record<Color | string, string> = {
  white: colors.white,
  black: colors.black,
  red: colors.red,
  orange: colors.orange,
  yellow: colors.yellow,
  green: colors.green,
  mint: colors.mint,
  teal: colors.teal,
  cyan: colors.cyan,
  blue: colors.blue,
  indigo: colors.indigo,
  purple: colors.purple,
  pink: colors.pink,
  brown: colors.brown,
  'gray-200': colors['gray-200'],
  'gray-300': colors['gray-300'],
  'gray-400': colors['gray-400'],
  'gray-500': colors['gray-500'],
  'gray-600': colors['gray-600'],
  'gray-700': colors['gray-700'],
  'gray-800': colors['gray-800'],
  'gray-900': colors['gray-900'],
  transparent: colors['transparent'],
};

export type { Color };
export { colors, colorMap, colorName };
