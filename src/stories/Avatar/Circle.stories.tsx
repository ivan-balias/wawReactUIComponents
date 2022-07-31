import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Alert} from "../../Component/UI/Avatar";

export default {
    title: 'UI/Avatar/Circle',
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
export const withThumb = Template.bind({});
withThumb.args ={
    ...withThumb.args,
    thumb: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    name:'',
    surname:'',
    type:"circle",
    size:'medium',
    bg:'#317887'
}
export const withName = Template.bind({});
withName.args ={
    ...withName.args,
    thumb: '',
    name:'Viktor',
    surname:'Petrov',
    type:"circle",
    size:'medium',
    bg:'#317887'
}

