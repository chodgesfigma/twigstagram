import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import storybookTheme from './storybookTheme'; // Import the custom theme


const theme = create({
  base: 'light', // or 'light'
  brandTitle: 'Twigstagram',
  brandUrl: 'https://yourcompanywebsite.com',
  brandImage: './public/assets/images/twigma.svg', // Path to your logo image in the public directory
});

addons.setConfig({
  theme: storybookTheme,
});
