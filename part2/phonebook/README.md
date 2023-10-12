# phonebook

## Overview
This project is a simple React application that serves as a phonebook. It allows users to add contacts with names and numbers, and provides a search functionality to filter contacts.

## Components

### App
The main component representing the entire application. It manages the state for contacts, new contact input fields, and search functionality. Renders the Filter, PersonForm, and Persons components.

### Filter
A functional component that provides a search input field to filter contacts.

### PersonForm
A component responsible for adding new contacts. It includes input fields for name and number, and a button to submit the form.

### Persons
A component that displays the list of contacts. It dynamically renders the Person component for each contact.

### Person
Represents an individual contact. It receives information about the contact and displays their name and number.

## Functionality
-  **Adding Contacts:** Users can add new contacts by entering a name and number, then clicking the "add" button.
-  **Duplicate Check:** The app checks for duplicate names (case-insensitive) before adding a new contact.
-  **Filtering Contacts:** Users can filter contacts by entering a search term in the provided input field.

## Project Structure
The project is organized into separate components for better modularity and readability.

## Practice Highlights
-  **State Management:** Utilized the `useState` hook to manage state variables.
-  **Conditional Rendering:** Implemented conditional rendering to display alerts for duplicate names and empty input fields.
-  **Array Mapping:** Dynamically rendered components by mapping over arrays of contacts.
-  **Case-Insensitive Search:** Ensured that the search functionality is case-insensitive.