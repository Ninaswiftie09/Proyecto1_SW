import React from 'react'
import Keyboard from '../components/Keyboard'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Keyboard',
  component: Keyboard,
}

const Template = (args) => <Keyboard {...args} />

export const Default = Template.bind({})
Default.args = {
  onButtonClick: action('button-click'),
}
