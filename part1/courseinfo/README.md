# courseinfo

## Overview

This project is a simple React application that serves as an introduction to fundamental React concepts, such as components, props, and rendering dynamic content. The app displays information about a course, including its name and individual parts.

## Components

### `App`

The main component that represents the entire application. It includes the course information and renders the `Header`, `Content`, and `Total` components.

### `Header`

A functional component that receives `props` and displays the course name in an `<h1>` tag.

### `Content`

Responsible for rendering the individual parts of the course. It uses the `map` method to dynamically generate `<p>` elements for each part, showing both the name and the number of exercises.

### `Total`

Calculates the total number of exercises in the course using the `reduce` method. It iterates over the array of parts and sums up the exercises. The result is displayed in a `<p>` tag.

## Practice Highlights

1. **Defining Components:** Demonstrated how to create functional components (`Header`, `Content`, `Total`) to organize the UI.

2. **Props Handling:** Passed course information as props to child components (`Header`, `Content`, `Total`).

3. **Mapping Over Arrays:** Utilized the `map` method to dynamically render content based on an array of parts.

4. **Calculating Totals:** Showed how to compute a total by iterating over an array using the `reduce` method.

5. **Key Prop Usage:** Included the `key` prop when rendering lists for better performance.