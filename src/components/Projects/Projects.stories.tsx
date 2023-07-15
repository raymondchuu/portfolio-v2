import { Story } from '@storybook/react';

import Projects, { ProjectsProps } from './Projects';

export default { title: 'components/Projects' };

export const Default: Story<ProjectsProps> = (args) => <Projects {...args} />;

Default.args = {};

Default.argTypes = {};
