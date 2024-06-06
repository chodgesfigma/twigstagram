import React from 'react';
import FileUploader from '@/components/shared/FileUploader'; // Update the import path as per your directory structure

export default {
  title: 'Twigstagram/shared/FileUploader',
  component: FileUploader,
};

const Template = (args) => <FileUploader {...args} />;

export const Default = Template.bind({});
Default.args = {
  fieldChange: (files) => console.log('Field change:', files),
  mediaUrl: '', // Provide a media URL if necessary for testing
};
