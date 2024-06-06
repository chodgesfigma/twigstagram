import React from 'react';
import GridPostList from "@/components/shared/GridPostList";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Twigstagram/shared/GridPostList',
  component: GridPostList,
};

const queryClient = new QueryClient();

const mockUser = {
  id: 'mockUserId',
  name: 'Mock User',
  imageUrl: '/assets/icons/profile-placeholder.svg',
};

const mockPosts = [
  {
    $id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    creator: mockUser,
    $createdAt: '2023-05-15T12:34:56.789Z',
    caption: 'This is an example caption for the post.',
    location: 'Example Location',
    tags: ['nature', 'travel', 'adventure'], // Ensure tags is an array
    likes: [], // Ensure likes is an array
    comments: [], // Ensure comments is an array
  },
  {
    $id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    creator: mockUser,
    $createdAt: '2023-05-16T12:34:56.789Z',
    caption: 'This is another example caption for the post.',
    location: 'Another Location',
    tags: ['city', 'nightlife'], // Ensure tags is an array
    likes: [], // Ensure likes is an array
    comments: [], // Ensure comments is an array
  },

  {
    $id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    creator: mockUser,
    $createdAt: '2023-05-16T12:34:56.789Z',
    caption: 'This is another example caption for the post.',
    location: 'Another Location',
    tags: ['city', 'nightlife'], // Ensure tags is an array
    likes: [], // Ensure likes is an array
    comments: [], // Ensure comments is an array
  },
  // Add more mock posts as needed
];

// Define your Template
const Template = (args) => (
  <QueryClientProvider client={queryClient}>
    <MemoryRouter>
      <GridPostList {...args} />
    </MemoryRouter>
  </QueryClientProvider>
);

// Define your Default story
export const Default = Template.bind({});
Default.args = {
  posts: mockPosts, // Pass the mockPosts array as the posts prop
  showUser: true,
  showStats: true,
};
