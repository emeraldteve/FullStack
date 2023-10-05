# anecdote

## Overview

This React application allows users to browse anecdotes, vote for their favorites, and see which anecdote has the most votes. It showcases React concepts such as components, state management, event handling, and dynamic content rendering.

## Components

### App

The main component representing the entire application. It manages state for selected anecdotes and their votes, rendering the Quote, Upvote, NextAnecdote, and MostPopularQuote components.

### Quote

Displays the anecdote of the day, including the number of votes it has received.

### MostPopularQuote

Renders the anecdote with the most votes, along with the total vote count.

### Upvote

A button component to upvote the current anecdote.

### NextAnecdote

A button component to fetch a random anecdote for the user.

## Practice Highlights

- **React Hooks (useState):** Utilized the useState hook for managing state variables.
- **Component Composition:** Organized the application into modular components for clarity and reusability.
- **Event Handling:** Demonstrated event handling with React components.
- **Dynamic Content Rendering:** Dynamically rendered anecdote and vote statistics based on the state.
- **Conditional Rendering:** Used conditional rendering for specific components based on application state.