import React from 'react';
import { Label } from '@/components/ui/label';

export default {
  title: 'Twigstagram/msc/Label',
  component: Label,
};

export const DefaultLabel = () => <Label>Label Text</Label>;

export const DisabledLabel = () => <Label disabled>Label Text (Disabled)</Label>;
