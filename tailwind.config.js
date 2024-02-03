import defaultTheme from 'tailwindcss/defaultTheme';

export const content = [
  // Paths to your components or pages that use Tailwind classes
  './src/**/*.{js,jsx,ts,tsx}',
  // other files
];
export const theme = {
  extend: {
    fontSize: {
      moma: '9rem'
    },
    fontFamily: {
      Lexend: ['Lexend'],
      Inter: ['Inter']
    },
    colors: {
      primary: '#0CBB5C',
      secondary: '#ffffff'
    },
    screens: {
      'myLS': '850px',
    }
  },
  // Include default configuration
  ...defaultTheme,
};
export const plugins = [
  // Include any Tailwind plugins you're using
  // ...
];