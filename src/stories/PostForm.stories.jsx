import React from 'react';
import PostForm from "@/components/forms/PostForm";
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default {
  title: 'Twigstagram/forms/PostForm',
  component: PostForm,
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
        <PostForm {...args} />
      </MockAuthProvider>
    </MemoryRouter>
  </QueryClientProvider>
);

export const CreatePost = Template.bind({});
CreatePost.args = {
  user: {
    id: 'user_id',
    imageUrl: '/assets/icons/profile-placeholder.svg', // Example profile image URL
  },
  action: 'Create',
};

export const UpdatePost = Template.bind({});
UpdatePost.args = {
  user: {
    id: 'user_id',
    imageUrl: '/assets/icons/profile-placeholder.svg', // Example profile image URL
  },
  action: 'Update',
  post: {
    $id: 'post_id',
    caption: 'Existing caption',
    imageUrl: '/assets/images/sample.jpg',
    location: 'Existing location',
    tags: ['tag1', 'tag2'],
  },
};
