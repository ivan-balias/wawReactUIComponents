import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from "../../Component/UI/Switch";

export default {
    title: 'UI/Switch/With label',
    component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args}/>

export const Primary = Template.bind({});
Primary.args ={
    ...Primary.args,
    label:'Switch text',
    color: "primary",
    disabled:false,
    checked:true
}

export const Secondary = Template.bind({});
Secondary.args ={
    ...Secondary.args,
    label:'Switch text',
    color: "secondary",
    disabled:false,
    checked:true
}

export const Warning = Template.bind({});
Warning.args ={
    ...Warning.args,
    label:'Switch text',
    color: "warning",
    disabled:false,
    checked:true
}

export const Default = Template.bind({});
Default.args ={
    ...Default.args,
    label:'Switch text',
    color: "default",
    disabled:false,
    checked:true
}



