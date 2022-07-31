import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Alert from "../../Component/UI/Alert";

export default {
    title: 'UI/Alert/Outline',
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
info.args = {
    ...info.args,
    variant: 'outline',
    close: false,
    autoClose: false,
    description: 'Default alert description',
    type: 'info'
}

export const success = Template.bind({});
success.args = {
    ...success.args,
    variant: 'outline',
    close: false,
    autoClose: false,
    description: 'Default alert description',
    type: 'success'
}

export const warning = Template.bind({});
warning.args = {
    ...warning.args,
    variant: 'outline',
    close: false,
    autoClose: false,
    description: 'Default alert description',
    type: 'warning'
}

export const error = Template.bind({});
error.args = {
    ...error.args,
    variant: 'outline',
    close: false,
    autoClose: false,
    description: 'Default alert description',
    type: 'error'
}

export const withClose = Template.bind({});
withClose.args = {
    ...withClose.args,
    variant: 'outline',
    close: true,
    autoClose: false,
    title: 'Default alert title',
    description: 'Default alert description',
    type: 'error',
}

export const withTitle = Template.bind({});
withTitle.args = {
    ...withTitle.args,
    variant: 'outline',
    close: false,
    autoClose: false,
    title: 'Default alert title',
    description: 'Default alert description',
    type: 'error'
}

export const withLongDescription = Template.bind({});
withLongDescription.args = {
    ...withLongDescription.args,
    variant: 'outline',
    close: false,
    autoClose: false,
    title: 'Default alert title',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    type: 'error',
}