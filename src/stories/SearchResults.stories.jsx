import React from 'react';
import SearchResults from '@/components/shared/SearchResults';

export default {
  title: 'Twigstagram/shared/SearchResults',
  component: SearchResults,
};

const mockPosts = [
  // Mocked post data
];

// Define your Template
const Template = (args) => <SearchResults {...args} />;

// Define your Default story
export const Default = Template.bind({});
Default.args = {
  isSearchFetching: false,
  searchedPosts: { documents: mockPosts }, // Ensure searchedPosts is structured correctly
};
