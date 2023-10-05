# unicafe

## Overview

This project is a React application that serves as an introduction to fundamental React concepts, such as components, props, state management, and rendering dynamic content. The app allows users to provide feedback and displays statistics based on the feedback given.

### Components

#### App

The main component representing the entire application. It includes the state for feedback variables (`good`, `neutral`, `bad`) and renders the Header, Button, and Statistics components.

#### Button

A reusable functional component for feedback buttons. It handles user interactions and triggers state updates.

#### Statistics

Responsible for rendering feedback statistics dynamically. Calculates and displays the total count, average, and percentage of positive feedback.

#### StatisticLine

A component used by Statistics to display individual feedback statistics. It utilizes conditional rendering for the positive feedback percentage.

### Practice Highlights

1. **React Hooks (`useState`):**
   - Implemented the `useState` hook to manage feedback variables.

2. **Component Composition:**
   - Organized the application into modular components for clarity and reusability.

3. **Event Handling:**
   - Demonstrated event handling with React components.

4. **Dynamic Content Rendering:**
   - Dynamically rendered feedback statistics based on the state.

5. **Conditional Rendering:**
   - Used conditional rendering for specific components based on application state.