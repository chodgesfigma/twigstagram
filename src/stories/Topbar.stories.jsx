import React from 'react';
import Topbar from '@/components/shared/Topbar';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default {
  title: 'Twigstagram/shared/Topbar',
  component: Topbar,
  parameters: {
    layout: 'fullscreen',
  },
};

const styles = `
  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #09090A; /* Update with your dark-2 color from Tailwind CSS */
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .topbar-logo {
    width: 130px;
    height: 32.5px;
  }

  .topbar-profile {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  .topbar-icons {
    display: flex;
    gap: 2rem; /* Adjust the gap between icons */
  }
`;

const queryClient = new QueryClient();

const Template = (args) => (
  <div>
    <style>{styles}</style>
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Topbar {...args} />
      </MemoryRouter>
    </QueryClientProvider>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  user: {
    id: 'user_id',
    imageUrl: '/assets/icons/profile-placeholder.svg', // Example profile image URL
  },
};
