import { Story } from '@storybook/react';

import Card, { CardProps } from './Card';

export default { title: 'components/Card' };

export const Default: Story<CardProps> = (args) => <Card {...args} />;

Default.args = {};

Default.argTypes = {};
