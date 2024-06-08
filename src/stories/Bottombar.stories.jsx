import React from 'react';
import Bottombar from '@/components/shared/Bottombar'
import { MemoryRouter } from 'react-router-dom';
import { bottombarLinks } from "@/constants";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default {
    title: 'Twigstagram/msc/Bottombar',
    component: Bottombar,
    parameters: {
      layout: 'fullscreen',
    },
  };
  
  const styles = `
    .bottom-bar {
      display: flex;
      justify-content: space-between;
      width: 100%;
      position: sticky;
      bottom: 0;
      background-color: #09090A; /* Update with your dark-2 color from Tailwind CSS */
      padding: 1rem 2rem;
    }
  `;
  
  const queryClient = new QueryClient();
  
  const Template = (args) => (
    <div>
      <style>{styles}</style>
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Bottombar {...args} />
        </MemoryRouter>
      </QueryClientProvider>
    </div>
  );
  
  export const Default = Template.bind({});
  Default.args = {};
