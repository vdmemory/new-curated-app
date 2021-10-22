import { Story, Meta } from '@storybook/react';
import {
    SharedUiComponents,
    SharedUiComponentsProps,
} from './shared-ui-components';

export default {
    component: SharedUiComponents,
    title: 'SharedUiComponents',
} as Meta;

const Template: Story<SharedUiComponentsProps> = args => (
    <SharedUiComponents {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
