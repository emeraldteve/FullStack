
#  Exercises 1.1.-1.2

## Table of Contents

- [Overview](#overview)
- [What I Practiced](#what-i-practiced)
- [Key Concepts](#key-concepts)
- [Breakdown](#breakdown)

---

## Overview

I've created a simple React application using React components and used props to pass data between these components to display information about a course and its parts.

---

## What I Practiced

I practiced the following:

1. **React Functional Components**: I defined React functional components (`Header`, `Part`, and `Total`) to structure my application's UI.

2. **Props**: I learned how to pass data and information between components using props. Each component receives props as arguments and uses them to display dynamic content.

3. **Rendering JSX**: I practiced rendering JSX (JavaScript XML) to create the user interface of my application. JSX allows me to write HTML-like code within my JavaScript.

4. **Component Composition**: I composed my application's UI by nesting components within each other. This promotes a modular and reusable code structure.

5. **Dynamic Content**: I displayed dynamic content by passing variables and expressions as props, making my components flexible and capable of showing different data.

---

## Key Concepts

### React Functional Components

React functional components are JavaScript functions that return JSX elements. They allow me to build reusable UI pieces.

### Props

Props (short for properties) are a way to pass data from a parent component to a child component. They are read-only and help make my components customizable and flexible.

### JSX

JSX is a syntax extension for JavaScript often used in React to describe what the UI should look like. It resembles HTML but is compiled into JavaScript.

### Component Composition

In React, I can compose complex UIs by combining and nesting multiple components. This promotes code reusability and maintainability.

### Dynamic Content

By passing different props to components, I can display dynamic content that changes based on the data I provide. This makes my UI adaptable and responsive to varying data.

---

## Breakdown

The provided code consists of the following main components:

1. `App`: The main application component that renders the entire application.
2. `Header`: A component for displaying the course title.
3. `Part`: A component for displaying the names of course parts and their respective exercise counts.
4. `Total`: A component for displaying the total number of exercises in the course.