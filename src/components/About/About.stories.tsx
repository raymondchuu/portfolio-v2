import { Story } from '@storybook/react';

import About, { AboutProps } from './About';

export default { title: 'components/About' };

export const Default: Story<AboutProps> = (args) => <About {...args} />;

Default.args = {};

Default.argTypes = {};
