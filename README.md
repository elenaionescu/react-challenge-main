# React Challenge

## Instructions

This repository includes a naive implementation of a React application designed to search for, and display, information about countries (using https://restcountries.com/).

Your task is to refactor and improve the application.

Focus on clean, maintainable code and your proficiency with components, state management, and API integration.

Commit your changes as you go & submit your work via a GitHub repository link.

Update this `README` with anything that you'd like to do if you had more time.

### Things to consider

1. Accessibility
2. Robust error handling
3. Testing
4. Responsiveness
5. Ease of updating the data source
6. Appearance: Style is secondary; however, a basic, user-friendly UI is appreciated
7. Anything else: You are welcome to add any features that highlight your capabilities

## Getting Started

### Scripts

1. Install packages

```sh
npm install
```

2. Run locally

```sh
npm run dev
```

### My Notes

This refactored version of the application addresses these:

- Accessibility: Added aria labels to input and button elements.
- Robust error handling: Implemented error handling in the API call and used an ErrorBoundary component.
- Testing: The component structure makes it easier to write unit tests for each component.
- Responsiveness: Used Tailwind CSS classes for a responsive design.
- Ease of updating the data source: API calls are isolated in a separate utility file.
- Appearance: Used Tailwind CSS for a basic, user-friendly UI.
Additional improvements:

- Used TypeScript for better type safety
- Implemented React Query for efficient data fetching and caching
- Split the application into smaller, reusable components
- Used modern React practices like functional components and hooks

```sh
npm install react-query @types/react-query tailwindcss @types/react @types/react-dom
npx tailwindcss init -p
```
- I used Jest as the test runner and React Testing Library for rendering and interacting with the components

Some additional testing considerations for the future:

- Integration tests: Test how components work together in larger parts of the application
- Accessibility tests: Using tools like jest-axe to test for accessibility issues
- Snapshot tests: Using Jest's snapshot testing to catch unexpected changes in component rendering
- Performance tests: Adding performance tests for critical parts of the application
