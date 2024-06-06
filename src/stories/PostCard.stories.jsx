import React from 'react';
import PostCard from '@/components/shared/PostCard';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default {
  title: 'Twigstagram/shared/PostCard',
  component: PostCard,
  parameters: {
    layout: 'fullscreen',
  },
};

const queryClient = new QueryClient();

// Mock useUserContext hook
const MockAuthProvider = ({ children, user }) => {
  const mockUseUserContext = () => ({
    user,
  });

  const AuthContext = React.createContext({
    user: mockUseUserContext().user,
  });

  return <AuthContext.Provider value={mockUseUserContext()}>{children}</AuthContext.Provider>;
};

const Template = (args) => (
  <QueryClientProvider client={queryClient}>
    <MemoryRouter>
      <MockAuthProvider user={args.user}>
        <PostCard {...args} />
      </MockAuthProvider>
    </MemoryRouter>
  </QueryClientProvider>
);

export const Default = Template.bind({});
Default.args = {
  user: {
    id: 'user_id',
    imageUrl: '/assets/icons/profile-placeholder.svg', // Example profile image URL
  },
  post: {
    $id: 'post_id',
    creator: {
      $id: 'creator_id',
      name: 'John Doe',
      imageUrl: '/assets/icons/profile-placeholder.svg',
    },
    $createdAt: '2023-05-15T12:34:56.789Z',
    caption: 'This is an example caption for the post.',
    imageUrl: 'https://images.unsplash.com/photo-1462143338528-eca9936a4d09?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJlZXN8ZW58MHx8MHx8fDA%3D',
    location: 'Example Location',
    tags: ['nature', 'travel', 'adventure'], // Ensure tags is an array
    likes: [], // Ensure likes is an array
    comments: [] // Ensure comments is an array
  },
};
