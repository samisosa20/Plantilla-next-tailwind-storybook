import React from 'react';

import Button from "./index"

import '../../styles/globals.css';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  className: 'bg-blue-600 shadow hv:bg-red-200'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  size: 'small',
};
