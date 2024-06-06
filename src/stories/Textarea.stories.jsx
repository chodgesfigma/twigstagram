import React from 'react';
import { Textarea } from '@/components/ui/textarea';

export default {
  title: 'Twigstagram/ui/Textarea',
  component: Textarea,
};

export const DefaultTextarea = () => <Textarea placeholder="Enter text here" />;

export const DisabledTextarea = () => (
  <Textarea placeholder="Disabled textarea" disabled />
);
