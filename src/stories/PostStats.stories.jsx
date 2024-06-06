import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import QueryClient and QueryClientProvider
import PostStats from '@/components/shared/PostStats'; // Update the import path as per your directory structure

export default {
  title: 'Twigstagram/shared/PostStats',
  component: PostStats,
  decorators: [
    (Story) => (
      <QueryClientProvider client={new QueryClient()}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

const mockUser = {
  id: 'mockUserId',
  name: 'Mock User',
  imageUrl: '/assets/icons/profile-placeholder.svg',
};

const mockPost = {
  $id: '1',
  likes: [mockUser],
  // Add more properties as needed
};

const Template = () => <PostStats post={mockPost} userId={mockUser.id} />;

export const Default = Template.bind({});
