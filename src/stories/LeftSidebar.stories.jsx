import React from 'react';
import LeftSidebar from '@/components/shared/LeftSidebar'
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter to wrap your component
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import QueryClient and QueryClientProvider


export default {
    title: 'Twigstagram/shared/LeftSidebar',
    component: LeftSidebar,
    parameters: {
      layout: 'fullscreen',
    },
  };
  
  const styles = `
    .leftsidebar {
      display: flex;
      flex-direction: column;
      gap: 11px;
      padding: 10px;
    }
  `;
  
  // Create a new instance of QueryClient
  const queryClient = new QueryClient();
  
  const Template = (args) => (
    <div>
      <style>{styles}</style>
      {/* Wrap your component with QueryClientProvider and provide the queryClient instance */}
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <LeftSidebar {...args} />
        </MemoryRouter>
      </QueryClientProvider>
    </div>
  );
  
  export const Default = Template.bind({});
  Default.args = {
  };
