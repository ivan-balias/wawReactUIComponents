import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Button from "../../Component/UI/Button";

export default {
    title: 'UI/Button/Link',
    component: Button
} as ComponentMeta<typeof Button>;

const callback = () => {
    console.log('It`s callback')
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>
export const Primary = Template.bind({});
Primary.args = {
    ...Primary.args,
    label: 'Button text',
    color: "primary",
    variant: 'link',
    disabled: false
}
export const Secondary = Template.bind({});
Secondary.args = {
    ...Secondary.args,
    label: 'Button text',
    color: "secondary",
    variant: 'link',
    disabled: false
}
export const Error = Template.bind({});
Error.args = {
    ...Error.args,
    label: 'Button text',
    color: "error",
    variant: 'link',
    disabled: false
}
export const Success = Template.bind({});
Success.args = {
    ...Success.args,
    label: 'Button text',
    color: "success",
    variant: 'link',
    disabled: false
}

