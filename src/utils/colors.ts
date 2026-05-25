import tailwindcss_colors from 'tailwindcss/colors';
import { formatHex, formatHex8, formatRgb, formatHsl, formatCss } from 'culori';

const convert_color = (color: string) => {
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

const map_color = (color: Color) => ({
  50: convert_color(tailwindcss_colors[color][50]),
  100: convert_color(tailwindcss_colors[color][100]),
  200: convert_color(tailwindcss_colors[color][200]),
  300: convert_color(tailwindcss_colors[color][300]),
  400: convert_color(tailwindcss_colors[color][400]),
  500: convert_color(tailwindcss_colors[color][500]),
  600: convert_color(tailwindcss_colors[color][600]),
  700: convert_color(tailwindcss_colors[color][700]),
  800: convert_color(tailwindcss_colors[color][800]),
  900: convert_color(tailwindcss_colors[color][900]),
  950: convert_color(tailwindcss_colors[color][950])
});

export const colors = {
  red: map_color('red'),
  orange: map_color('orange'),
  amber: map_color('amber'),
  yellow: map_color('yellow'),
  lime: map_color('lime'),
  green: map_color('green'),
  emerald: map_color('emerald'),
  teal: map_color('teal'),
  cyan: map_color('cyan'),
  sky: map_color('sky'),
  blue: map_color('blue'),
  indigo: map_color('indigo'),
  violet: map_color('violet'),
  purple: map_color('purple'),
  fuchsia: map_color('fuchsia'),
  pink: map_color('pink'),
  rose: map_color('rose'),
  slate: map_color('slate'),
  gray: map_color('gray'),
  zinc: map_color('zinc'),
  neutral: map_color('neutral'),
  stone: map_color('stone'),
  taupe: map_color('taupe'),
  mauve: map_color('mauve'),
  mist: map_color('mist'),
  olive: map_color('olive')
};
