import React from 'react';
import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction } from "@/components/ui/toast";

export default {
  title: 'Twigstagram/ui/Toast',
  component: Toast,
} ;

const Template = (args) => (
  <ToastProvider>
    <ToastViewport>
      <Toast {...args}>
        <ToastTitle>This is a toast title</ToastTitle>
        <ToastDescription>This is a toast description</ToastDescription>
        <ToastClose />
        <ToastAction>Undo</ToastAction>
      </Toast>
    </ToastViewport>
  </ToastProvider>
);

export const DefaultToast = Template.bind({});
DefaultToast.args = {};

export const DestructiveToast = Template.bind({});
DestructiveToast.args = {
  variant: 'destructive',
};
