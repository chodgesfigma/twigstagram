import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import QueryClient and QueryClientProvider
import ProfileUploader from '@/components/shared/ProfileUploader'; // Update the import path as per your directory structure

export default {
  title: 'Twigstagram/shared/ProfileUploader',
  component: ProfileUploader,
  decorators: [
    (Story) => (
      <QueryClientProvider client={new QueryClient()}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

const Template = () => <ProfileUploader fieldChange={(files) => console.log('Field changed:', files)} mediaUrl="/assets/images/profile.png" />;

export const Default = Template.bind({});
