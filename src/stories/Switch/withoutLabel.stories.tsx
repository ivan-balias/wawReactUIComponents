import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from "../../Component/UI/Switch";

export default {
    title: 'UI/Switch/Without label',
    component: Switch,
    argTypes: {
        change: { action: 'change' }
    }
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args}/>

export const Primary = Template.bind({});
Primary.args ={
    ...Primary.args,
    color: "primary",
    disabled:false,
    checked:true
}

export const Secondary = Template.bind({});
Secondary.args ={
    ...Secondary.args,
    color: "secondary",
    disabled:false,
    checked:true
}

export const Warning = Template.bind({});
Warning.args ={
    ...Warning.args,
    color: "warning",
    disabled:false,
    checked:true
}

export const Default = Template.bind({});
Default.args ={
    ...Default.args,
    color: "default",
    disabled:false,
    checked:true
}



