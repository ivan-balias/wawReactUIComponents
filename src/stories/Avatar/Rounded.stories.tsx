import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Alert} from "../../Component/UI/Avatar";

export default {
    title: 'UI/Avatar/Rounded',
    component: Alert,
    parameters: {
        docs: {
            description: {
                component: '',
            },
        },
    },
    controls: {
        bg: [{color: '#ff4785', title: 'Coral'}, 'rgba(0, 159, 183, 1)', '#fe4a49'],
    },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args}/>
export const withThumb = Template.bind({});
withThumb.args = {
    ...withThumb.args,
    thumb: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    name: '',
    surname: '',
    type: "rounded",
    size: 'medium',
    bg: '#317887'
}
export const withName = Template.bind({});
withName.args = {
    ...withName.args,
    thumb: '',
    name: 'Viktor',
    surname: 'Petrov',
    type: "rounded",
    size: 'medium',
    bg: '#317887'}

