import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Button from "../../Component/UI/Button";

export default {
    title: 'UI/Button/Link',
    component: Button,
    argTypes: {
        click: { action: 'clicked' }
    },
    parameters: {
        docs: {
            description: {
                component: '',
            },
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>
export const Primary = Template.bind({});
Primary.args = {
    ...Primary.args,
    label: 'Button text',
    color: "primary",
    size: 'medium',
    variant: 'link',
    disabled: false
}
export const Secondary = Template.bind({});
Secondary.args = {
    ...Secondary.args,
    label: 'Button text',
    color: "secondary",
    size: 'medium',
    variant: 'link',
    disabled: false
}
export const Error = Template.bind({});
Error.args = {
    ...Error.args,
    label: 'Button text',
    color: "error",
    size: 'medium',
    variant: 'link',
    disabled: false
}
export const Success = Template.bind({});
Success.args = {
    ...Success.args,
    label: 'Button text',
    color: "success",
    size: 'medium',
    variant: 'link',
    disabled: false
}

