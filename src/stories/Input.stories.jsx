import React from 'react';
import { Input } from '@/components/ui/input'; // Update the path to your Input component

export default {
  title: 'Twigstagram/ui/Input',
  component: Input,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email', 'number'], // Add any other supported input types
      },
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    value: {
      control: 'text',
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled input...',
  disabled: true,
};

export const WithValue = Template.bind({});
WithValue.args = {
  placeholder: 'Enter text...',
  value: 'Initial value',
};
