import React from 'react';
import { Textarea } from '@/components/ui/textarea';

export default {
  title: 'Twigstagram/ui/Textarea',
  component: Textarea,
};

export const DefaultTextareaWide = () => <Textarea placeholder="Enter text here" />;

export const DisabledTextareaWide = () => (
  <Textarea placeholder="Disabled textarea" disabled />
);
