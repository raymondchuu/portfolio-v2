import { Story } from '@storybook/react';

import Experience, { ExperienceProps } from './Experience';

export default { title: 'components/Experience' };

export const Default: Story<ExperienceProps> = (args) => <Experience {...args} />;

Default.args = {};

Default.argTypes = {};
