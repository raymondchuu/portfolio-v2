import { Story } from '@storybook/react';

import Home, { HomeProps } from './Home';

export default { title: 'components/Home' };

export const Default: Story<HomeProps> = (args) => <Home {...args} />;

Default.args = {};

Default.argTypes = {};
