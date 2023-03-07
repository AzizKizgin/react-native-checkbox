export const COLOR_SCHEME = {
  red: {
    light: '#ff0000',
    dark: '#cc0000',
  },
  cyan: {
    light: '#00ffff',
    dark: '#00cccc',
  },
  yellow: {
    light: '#ffff00',
    dark: '#cccc00',
  },
  pink: {
    light: '#ff80ed',
    dark: '#cc4dba',
  },
  black: {
    light: '#4d4d4d',
    dark: '#000000',
  },
  white: {
    light: '#ffffff',
    dark: '#cccccc',
  },
  darkGray: {
    light: '#666666',
    dark: '#333333',
  },
  lightGray: {
    light: '#cccccc',
    dark: '#999999',
  },
  gray: {
    light: '#eeeeee',
    dark: '#bbbbbb',
  },
  green: {
    light: '#00ff00',
    dark: '#00cc00',
  },
  navy: {
    light: '#000080',
    dark: '#00004d',
  },
  blue: {
    light: '#0000ff',
    dark: '#0000cc',
  },
  iceBlue: {
    light: '#c6e2ff',
    dark: '#93afcc',
  },
  orange: {
    light: '#ffa500',
    dark: '#cc7200',
  },
  purple: {
    light: '#8a2be2',
    dark: '#5700af',
  },
};

export interface ICheckBoxProps {
  isChecked: boolean;
  onChange: () => void;
  colorScheme?: string & keyof typeof COLOR_SCHEME;
  customColor?: string;
  iconColor?: string;
  size?: number;
}
