import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from "../../Component/UI/Button";

export default {
    title: 'UI/Button/Outlined',
    component: Button
} as ComponentMeta<typeof Button>;

const callback = () => {
    console.log('It`s callback')
}

const Template: ComponentStory<typeof Button> = (args) => <Button variant='outlined' {...args}/>
export const Primary = Template.bind({});
Primary.args ={
    ...Primary.args,
    label:'Button text',
    color: "primary",
    disabled:false
}
export const Secondary = Template.bind({});
Secondary.args ={
    ...Secondary.args,
    label:'Button text',
    color: "secondary",
    disabled:false
}
export const Error = Template.bind({});
Error.args ={
    ...Error.args,
    label:'Button text',
    color: "error",
    disabled:false
}
export const Success = Template.bind({});
Success.args ={
    ...Success.args,
    label:'Button text',
    color: "success",
    disabled:false
}

