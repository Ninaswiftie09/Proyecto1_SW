import React from 'react'
import Display from '../components/Display'

export default {
  title: 'Display',
  component: Display,
  argTypes: {
    value: { control: 'text' },
  },
}

const Template = (args) => <Display {...args} />

export const Default = Template.bind({})
Default.args = {
  value: '0',
}

export const WithNumber = Template.bind({})
WithNumber.args = {
  value: '12345',
}

export const WithError = Template.bind({})
WithError.args = {
  value: 'ERROR',
}
