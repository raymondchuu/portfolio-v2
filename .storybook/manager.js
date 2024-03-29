import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Jam3 NextJS Boilerplate',
    brandUrl: 'https://jam3.com',
    brandImage: '/common/favicons/boy-favicon.png',
    colorSecondary: 'deepskyblue'
  })
});
