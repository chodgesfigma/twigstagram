// .storybook/storybookTheme.ts
import { create } from '@storybook/theming';

export default create({
  base: 'dark', // You can also use 'light'

  // Base colors
  colorPrimary: '#007E4F', // Primary color
  colorSecondary: '#5D5FEF', // Secondary color

  // UI
  appBg: '#000000', // Dark background
  appContentBg: '#09090A', // Slightly lighter background for content
  appBorderColor: '#1F1F22', // Border color
  appBorderRadius: 8,

  // Typography
  fontBase: '"Inter", sans-serif', // Base font
  fontCode: 'monospace',

  // Text colors
  textColor: '#FFFFFF', // Primary text color
  textInverseColor: '#EFEFEF', // Inverse text color

  // Toolbar default and active colors
  barTextColor: '#D0DFFF',
  barSelectedColor: '#007E4F',
  barBg: '#1F1F22',

  // Form colors
  inputBg: '#101012',
  inputBorder: '#1F1F22',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 4,

  // Brand
  brandTitle: 'Twigstagram',
  brandUrl: 'https://yourcompanywebsite.com',
  brandImage: 'https://i.ibb.co/K2T2FT4/name-logo.png', 
});
