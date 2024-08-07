type Color =
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'
  | 'white'
  | 'black'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'mint'
  | 'teal'
  | 'cyan'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'brown'
  | 'transparent';

const color = {
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

const colorMap: Record<Color | string, string> = {
  white: color.white,
  black: color.black,
  red: color.red,
  orange: color.orange,
  yellow: color.yellow,
  green: color.green,
  mint: color.mint,
  teal: color.teal,
  cyan: color.cyan,
  blue: color.blue,
  indigo: color.indigo,
  purple: color.purple,
  pink: color.pink,
  brown: color.brown,
  'gray-200': color['gray-200'],
  'gray-300': color['gray-300'],
  'gray-400': color['gray-400'],
  'gray-500': color['gray-500'],
  'gray-600': color['gray-600'],
  'gray-700': color['gray-700'],
  'gray-800': color['gray-800'],
  'gray-900': color['gray-900'],
  transparent: color['transparent'],
};

export type { Color };
export { color, colorMap };
