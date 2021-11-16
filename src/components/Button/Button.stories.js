import React from 'react';
import Button from './Button';
import Center from '../Center/Center'

export default {
    title: 'Button',
    component: Button,
    decorators: [story => <Center>{story()}</Center>]
    // args: {
    //     children: 'Button'
    // }
}



export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>


const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({});

PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args'
}