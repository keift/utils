import TailwindColors from 'tailwindcss/colors';
import { formatHex, formatHex8, formatRgb, formatHsl, formatCss } from 'culori';

const convertColor = (value: string) => ({
  hex: formatHex(value) ?? '',
  hex8: formatHex8(value) ?? '',
  rgb: formatRgb(value) ?? '',
  hsl: formatHsl(value) ?? '',
  css: formatCss(value) ?? ''
});

const mapColors = (color: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone') => ({
  50: convertColor(TailwindColors[color][50]),
  100: convertColor(TailwindColors[color][100]),
  200: convertColor(TailwindColors[color][200]),
  300: convertColor(TailwindColors[color][300]),
  400: convertColor(TailwindColors[color][400]),
  500: convertColor(TailwindColors[color][500]),
  600: convertColor(TailwindColors[color][600]),
  700: convertColor(TailwindColors[color][700]),
  800: convertColor(TailwindColors[color][800]),
  900: convertColor(TailwindColors[color][900]),
  950: convertColor(TailwindColors[color][950])
});

export const Colors = {
  red: mapColors('red'),
  orange: mapColors('orange'),
  amber: mapColors('amber'),
  yellow: mapColors('yellow'),
  lime: mapColors('lime'),
  green: mapColors('green'),
  emerald: mapColors('emerald'),
  teal: mapColors('teal'),
  cyan: mapColors('cyan'),
  sky: mapColors('sky'),
  blue: mapColors('blue'),
  indigo: mapColors('indigo'),
  violet: mapColors('violet'),
  purple: mapColors('purple'),
  fuchsia: mapColors('fuchsia'),
  pink: mapColors('pink'),
  rose: mapColors('rose'),
  slate: mapColors('slate'),
  gray: mapColors('gray'),
  zinc: mapColors('zinc'),
  neutral: mapColors('neutral'),
  stone: mapColors('stone')
};
