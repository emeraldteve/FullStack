# courseinfo

## Overview

This project is a React application that introduces fundamental concepts such as components, props, and dynamic content rendering. The app displays information about a course, including its name and individual parts.

## Components

### App

The main component representing the entire application. It includes the course information and renders the Course component.

### Course

Represents an individual course. It receives information about the course, including its name and parts, and renders the Header, Content, Part and Total components.

### Header

A functional component that receives a prop and displays the course name in an `<h1>` tag.

### Content

Responsible for rendering the individual parts of the course. It uses the map method to dynamically generate `<Part>` components for each part.

### Part

Represents an individual part of the course. It receives information about the part and can be extended to display additional details.

### Total

Calculates the total number of exercises in the course using the reduce method. It iterates over the array of parts and sums up the exercises. The result is displayed in a `<p>` tag.

## Practice Highlights

- **Defining Components:** Created modular components (Course, Header, Content, Part, Total) for better organization.
- **Props Handling:** Passed course information as props to child components for efficient communication.
- **Mapping Over Arrays:** Utilized the map method to dynamically render content based on an array of parts.
- **Calculating Totals:** Demonstrated how to compute totals by iterating over an array using the reduce method.
- **Key Prop Usage:** Included the key prop when rendering lists for better performance.
