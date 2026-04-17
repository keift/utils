import TailwindColors from 'tailwindcss/colors';
import { formatHex, formatHex8, formatRgb, formatHsl, formatCss } from 'culori';

const convertColor = (color: string) => {
  return {
    // eslint-disable-next-line no-restricted-syntax
    dec: parseInt(formatHex(color)?.slice(1) ?? '', 16),
    hex: formatHex(color)?.slice(1) ?? '',
    hex8: formatHex8(color)?.slice(1) ?? '',
    rgb: formatRgb(color)?.split('(')[1].split(')')[0] ?? '',
    hsl: formatHsl(color)?.split('(')[1].split(')')[0] ?? '',
    oklch: formatCss(color)?.split('(')[1].split(')')[0].replaceAll(' ', ', ') ?? ''
  };
};

type Color = 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'taupe' | 'mauve' | 'mist' | 'olive';

const mapColor = (color: Color) => ({
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
  red: mapColor('red'),
  orange: mapColor('orange'),
  amber: mapColor('amber'),
  yellow: mapColor('yellow'),
  lime: mapColor('lime'),
  green: mapColor('green'),
  emerald: mapColor('emerald'),
  teal: mapColor('teal'),
  cyan: mapColor('cyan'),
  sky: mapColor('sky'),
  blue: mapColor('blue'),
  indigo: mapColor('indigo'),
  violet: mapColor('violet'),
  purple: mapColor('purple'),
  fuchsia: mapColor('fuchsia'),
  pink: mapColor('pink'),
  rose: mapColor('rose'),
  slate: mapColor('slate'),
  gray: mapColor('gray'),
  zinc: mapColor('zinc'),
  neutral: mapColor('neutral'),
  stone: mapColor('stone'),
  taupe: mapColor('taupe'),
  mauve: mapColor('mauve'),
  mist: mapColor('mist'),
  olive: mapColor('olive')
};
