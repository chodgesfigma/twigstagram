# Twigstagram

Twigstagram is a social media application built with React, TypeScript, and Tailwind CSS. This project showcases various reusable components, state management with React Context, and data fetching using react-query.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Storybook](#storybook)
- [Chromatic](#chromatic)
- [Figma](#figma)
- [Changelog](#changelog)

## Project Structure

twigstagram/
│
├── public/ # Public assets
├── src/
│ ├── components/ # Reusable components
│ │ ├── shared/ # Shared components
│ │ ├── ui/ # UI components
│ │ └── forms/ # Form components
│ ├── context/ # Context providers
│ ├── lib/ # Utility functions and hooks
│ ├── pages/ # Page components
│ ├── styles/ # Global styles
│ ├── App.tsx # Main application component
│ └── index.tsx # Application entry point
├── .storybook/ # Storybook configuration
│ ├── main.ts # Storybook main configuration
│ ├── manager.ts # Storybook manager configuration
│ └── preview.ts # Storybook preview configuration
├── .env # Environment variables
├── .gitignore # Git ignore file
├── package.json # NPM package configuration
└── README.md # Project documentation

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/adrianhajdin/social_media_app.git
   cd social_media_app
```

2. Install dependencies:

  ```sh
   npm install
# or
yarn install
```

3. Start the development server:

  ```sh
npm run dev
```

## Scripts

npm start / yarn start: Start the development server.
npm run build / yarn build: Build the application for production.
npm run lint / yarn lint: Run ESLint to check for linting errors.
npm run storybook / yarn storybook: Start Storybook.
npm run build-storybook / yarn build-storybook: Build the Storybook static site.
npm run chromatic / yarn chromatic: Publish Storybook to Chromatic.

## Storybook

Storybook is used to develop and test UI components in isolation.

### Running Storybook

To run Storybook locally, use the following command:

```sh
npm run storybook
# or
yarn storybook
```
This will start Storybook on http://localhost:6006.

### Custom Theme
The Storybook setup includes a custom theme that aligns with the Twigstagram branding. You can find the theme configuration in .storybook/storybookTheme.ts.

## Chromatic

Chromatic is used for visual regression testing and publishing Storybook. To publish your Storybook to Chromatic, run:

```sh
npm run build-storybook
npx chromatic --project-token=your-chromatic-project-token
# or
yarn build-storybook
npx chromatic --project-token=your-chromatic-project-token
```
Visit your Chromatic project to see the published Storybook and visual tests.

## Figma

[Twigstagram Figma Files](https://www.figma.com/design/QDnCwBviX7zV7SF00Bh512/Twigstagram---Design-System?node-id=8-12&t=tc0CvYEN7zAp0YMe-0) | Figma is a collaborative design and prototyping tool. It's the heart of the design process, allowing designers to work together seamlessly.

Get Access: If you're not already part of the Figma project, request DevMode access from the project lead or manager.

## Changelog

All notable changes to this project will be documented in this file.

### [Unreleased]
- Add support for dark mode.
- Improve performance on mobile devices.

### [1.2.0] - 2024-06-01
#### Added
- New feature: User Stories. Users can now create and view stories that disappear after 24 hours.
- Integrated Figma design library for consistent UI components.
- Added accessibility improvements across the app, including better keyboard navigation and screen reader support.

#### Changed
- Updated the user profile page with a new design.
- Improved the loading speed of images on the home feed.
- Enhanced security for user authentication.

#### Fixed
- Fixed a bug where the 'like' button would not register on the first click.
- Resolved an issue where the search bar would overlap with other UI elements on small screens.
- Corrected the alignment of icons in the navigation bar.

### [1.1.0] - 2024-05-25
#### Added
- Introduced the ability for users to comment on posts.
- Added a new 'Explore' section to discover popular posts and users.
- Implemented a notification system to alert users of new likes, comments, and follows.

#### Changed
- Redesigned the post creation form for a more user-friendly experience.
- Updated the color scheme to match the new branding guidelines.
- Improved the search functionality with autocomplete suggestions.

#### Fixed
- Fixed a bug causing the app to crash when uploading large images.
- Resolved issues with inconsistent font sizes on different devices.
- Fixed broken links in the footer.

### [1.0.0] - 2024-05-15
#### Added
- Initial release of Twigstagram.
- Features include user registration, login, post creation, and following other users.
- Basic feed displaying posts from followed users.
- Profile pages with user bio and posts.


## License

This project is licensed under the MIT License.


Feel free to contribute to this project by opening issues or submitting pull requests. For any questions or suggestions, contact the project maintainer.



