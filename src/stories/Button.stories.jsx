import React from 'react';
import { Button } from "@/components/ui/button";

export default {
  title: 'Twigstagram/ui/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'sm', 'lg', 'icon'],
      },
    },
    asChild: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

// Define Tailwind CSS-like classes for different button variants and sizes
const variantClasses = {
  default: 'bg-primary-500 text-white',
  destructive: 'bg-red-500 text-white',
  outline: 'bg-transparent border border-primary-500 text-primary-500',
  secondary: 'bg-secondary-500 text-white',
  ghost: 'bg-transparent text-primary-500',
  link: 'bg-transparent text-primary-500 underline',
};

const sizeClasses = {
  default: 'h-12 px-6',
  sm: 'h-8 px-4',
  lg: 'h-16 px-8',
  icon: 'h-10 w-10',
};

const Template = ({ variant, size, ...args }) => {
  // Generate dynamic classNames based on variant and size
  const classNames = [
    'rounded-lg focus:outline-none transition',
    variantClasses[variant],
    sizeClasses[size],
  ].join(' ');

  return <Button className={classNames} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
  variant: 'default',
  size: 'default',
};

export const Destructive = Template.bind({});
Destructive.args = {
  children: 'Destructive Button',
  variant: 'destructive',
  size: 'default',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline Button',
  variant: 'outline',
  size: 'default',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary',
  size: 'default',
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: 'Ghost Button',
  variant: 'ghost',
  size: 'default',
};

export const Link = Template.bind({});
Link.args = {
  children: 'Link Button',
  variant: 'link',
  size: 'default',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small Button',
  variant: 'default',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large Button',
  variant: 'default',
  size: 'lg',
};

export const Icon = Template.bind({});
Icon.args = {
  children: 'Icon Button',
  variant: 'default',
  size: 'icon',
};
