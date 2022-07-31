import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Alert from "../../Component/UI/Alert";

export default {
    title: 'UI/Alert/Filled',
    component: Alert,
    parameters: {
        docs: {
            description: {
                component: '',
            },
        },
    },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args}/>
export const info = Template.bind({});
info.args ={
    ...info.args,
    variant:'filled',
    close:false,
    autoClose:false,
    description:'Default alert description',
    type:'info'
}
export const success = Template.bind({});
success.args ={
    ...success.args,
    variant:'filled',
    close:false,
    autoClose:false,
    description:'Default alert description',
    type:'success'
}

export const warning = Template.bind({});
warning.args ={
    ...warning.args,
    variant:'filled',
    close:false,
    autoClose:false,
    description:'Default alert description',
    type:'warning'
}

export const error = Template.bind({});
error.args ={
    ...error.args,
    variant:'filled',
    close:false,
    autoClose:false,
    description:'Default alert description',
    type:'error'
}

export const withClose = Template.bind({});
withClose.args ={
    ...withClose.args,
    variant:'filled',
    close:true,
    autoClose:false,
    title:'Default alert title',
    description:'Default alert description',
    type:'error',
}

export const withTitle = Template.bind({});
withTitle.args ={
    ...withTitle.args,
    variant:'filled',
    close:false,
    autoClose:false,
    title:'Default alert title',
    description:'Default alert description',
    type:'error'
}

export const withLongDescription = Template.bind({});
withLongDescription.args ={
    ...withLongDescription.args,
    variant:'filled',
    close:false,
    autoClose:false,
    title:'Default alert title',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    type:'error',
}

