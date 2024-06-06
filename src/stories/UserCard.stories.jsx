import React from 'react';
import UserCard from '@/components/shared/UserCard';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default {
  title: 'Twigstagram/shared/UserCard',
  component: UserCard,
  parameters: {
    layout: 'fullscreen',
  },
};

const queryClient = new QueryClient();

const Template = (args) => (
  <QueryClientProvider client={queryClient}>
    <MemoryRouter>
      <UserCard {...args} />
    </MemoryRouter>
  </QueryClientProvider>
);

export const Default = Template.bind({});
Default.args = {
  user: {
    $id: 'user_id',
    imageUrl: '/assets/icons/profile-placeholder.svg', // Example profile image URL
    name: 'John Doe',
    username: 'johndoe',
  },
};
