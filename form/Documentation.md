# Introduction

This project is a reusable UI component system built using React.  
It includes form components such as Input, Button, Dropdown, Modal, and Password Toggle.

The goal of this project is to create scalable, maintainable, and reusable components for authentication flows like Login, Signup, and Forgot Password.

--------------------------------------------------

# Project Structure

The project is organized into the following folders:

- assets -> Contians all images and icons
- components → Reusable UI elements
- hooks → Logic and State management
- utils → Validation functions
- pages → Application screens
- styles → CSS variable file

--------------------------------------------------

# Flow of Data

                      "text"
                        ↓
                User Interaction
                        ↓
                Page (UI Structure)
                        ↓
                Components (Input, Button, etc.)
                        ↓
                Hooks (State + Logic)
                        ↓
                Utils (Validation)
                        ↓
                Result back to UI

--------------------------------------------------

# Components

Reusable UI components that are imported into pages to build the user interface.

## Input

### Description
    A reusable input field used to capture user data such as email, username, and password. It also handles validation errors.

### Props
- `type` – defines input type (text, email, password)  
- `placeholder` – default placeholder text  
- `value` – input value  
- `onChange` – function to handle input changes  
- `error` – displays validation error message  
- `onFocus` – function triggered on focus  
- `onBlur` – function triggered on blur  

### Behavior
- Shows placeholder when no error exists  
- Displays error message when validation fails  
- Clears input when error is present  
- Works as a controlled component  

## Button

### Description
    A reusable button used for user actions like form submission and navigation.

### Props
- `text` – button label  
- `onClick` – function to handle click  
- `type` – style type (primary, secondary)  
- `disabled` – disables the button  

### Behavior
- Uses semantic `<button>` element  
- Supports keyboard interaction  
- Prevents unintended form submission  

## PasswordToggle

### Description
    An input component with a toggle feature to show or hide the password.

### Props 
- `placeholder` – input placeholder  
- `value` – password value  
- `error` – error message  
- `onChange` – function to handle input changes  
- `onFocus` – function triggered on focus  
- `onBlur` – function triggered on blur  

### Behavior
- Toggles password visibility  
- Uses icon/button for interaction  
- Improves user experience for password entry  

## Dropdown

### Description
    A custom dropdown component used to select one option from a list.

### Props
- `options` – list of selectable options  
- `label` – default label text  
- `value` – selected value  
- `onSelect` – function triggered on selection  
- `error` – displays error message  

### Behavior
- Opens and closes on click  
- Displays selected value or label  
- Allows option selection  
- Styled similar to input fields  
- Supports keyboard interaction  

## Modal

### Description
    A reusable modal used to display messages such as success notifications or alerts.

### Props
- `open` – controls visibility  
- `message` – message to display  
- `onClose` – function to close modal  

### Behavior
- Renders only when `open` is true  
- Displays message clearly  
- Closes when button is clicked  

## ToggleSwitch

### Description  
A reusable toggle switch component used to represent a binary state (on/off). Commonly used for features like dark mode, notifications, and enabling/disabling settings.

### Props  
- `checked` – controls the current state of the toggle (true/false)  
- `onChange` – function triggered when the toggle state changes  
- `label` – optional text displayed beside the toggle  
- `disabled` – disables the toggle interaction (optional)  

### Behavior  
- Reflects the state based on the `checked` prop  
- Calls `onChange` when user toggles the switch  
- Works as a controlled component (state managed by parent)  
- Shows label when provided  
- Prevents interaction when `disabled` is true 

--------------------------------------------------

# Hooks

Hooks are used to manage state and logic separately from UI components.

## Loginhook

## Description
    Handles all logic related to the login process, including managing input state and validation.

### Behavior
- Stores email and password values  
- Validates inputs using utility functions  
- Manages error states  
- Controls success modal visibility  
- Handles login submission  

## Signuphook

### Description
    Manages all logic required for user registration, including multiple inputs and validations.

### Behavior
- Stores username, email, password, confirm password, and region  
- Validates all fields using utility functions  
- Checks if passwords match  
- Manages error messages for each field  
- Controls password rules visibility  
- Handles signup submission  
- Triggers success modal  

## Forgothook

### Description
    Handles logic for the forgot password flow.

### Behavior
- Stores email input  
- Validates email format  
- Manages error state  
- Handles reset action  
- Displays success modal  

--------------------------------------------------

# Utils (Validation)

Utility functions are used to handle validation logic independently from components and hooks.

## validateEmail

### Description
    Validates email input format.

### Behavior
- Checks if email is empty  
- Validates correct email structure  
- Returns appropriate error message  
- Returns empty string if valid  

## validatePassword

### Description
    Validates password strength based on defined rules.

### Behavior
- Checks if password is empty  
- Ensures minimum length  
- Validates presence of uppercase, lowercase, number, and special character  
- Triggers alert or error for invalid input  

# validateUsername

### Description
    Validates username input based on length and allowed characters.

### Behavior
- Checks if username is empty  
- Ensures minimum length requirement  
- Allows only letters, numbers, and underscore  
- Returns appropriate error message  

--------------------------------------------------

# Pages

Pages represent complete screens that combine components and hooks to create full user flows.

## Login

### Description
    A screen that allows users to log into the application.

### Behavior
- Accepts email and password input  
- Uses Login hook for state and validation  
- Displays validation errors when inputs are invalid  
- Submits valid data  
- Shows success message in modal  

## Signup

### Description
    A screen that allows new users to create an account.

### Behavior
- Accepts username, email, password, confirm password, and region  
- Uses Signup hook for state management  
- Validates all inputs  
- Ensures passwords match  
- Displays error messages when validation fails  
- Shows success modal on successful submission  

## Forgot

### Description
    A screen that allows users to reset their password.

### Behavior
- Accepts email input  
- Uses Forgot hook for logic  
- Validates email input  
- Displays error message if invalid  
- Shows success message when reset action is triggered  

--------------------------------------------------

# Integration

This project follows a structured integration approach where the main connection happens at the **page level**.

## How Integration Works

- Pages act as the central layer of the application  
- Each page imports and combines:
    - UI components (Input, Button, Dropdown, etc.)  
    - Custom hooks (for state and logic)  
    - Hooks internally use utility functions for validation  

## Role of Pages

Each page is responsible for integrating all parts of the application.

- **Login Page**
    - Imports Input, PasswordToggle, Button, Modal  
    - Uses Login hook for handling state and logic 
    - Uses Validation for validating inputs

- **Signup Page**
    - Imports Input, PasswordToggle, Dropdown, Button, Modal  
    - Uses Signup hook for managing multiple staes and logic
    - Uses Validation for validating inputs 

- **Forgot Page**
    - Imports Input, Button, Modal  
    - Uses Forgot hook for reset logic  
    - Uses Validation for validating inputs

--------------------------------------------------

# Testing

Testing ensures that all components and logic work correctly from the user’s perspective.

## Component Testing

### Description
    Tests individual UI components to verify rendering and interaction.

### Behavior
    - Checks if components render correctly  
    - Verifies user input handling  
    - Ensures click events work properly  
    - Validates conditional rendering (error messages, modal visibility)  

## Page Testing

### Description
    Tests complete pages to ensure proper integration of components and hooks.

### Behavior
    - Simulates user interactions (typing, clicking)  
    - Validates form behavior  
    - Checks error handling  
    - Verifies successful form submission  

## Validation Testing

### Description
    Tests utility functions to ensure validation logic works correctly.

### Behavior
    - Tests valid and invalid inputs  
    - Verifies correct error messages  
    - Ensures edge cases are handled properly   

--------------------------------------------------

# Responsiveness

- Works across mobile, tablet, and desktop  
- Uses flexible layouts  
- No fixed widths that break UI  

--------------------------------------------------

# Accessibility

- Uses semantic HTML elements (`input`, `button`)  
- Supports keyboard navigation  
- Displays clear error messages  
- Dropdown supports improved accessibility behavior  

--------------------------------------------------

# Theme Switch UI

A custom toggle switch is implemented using a checkbox input styled with CSS, positioned absolutely within the layout, and synchronized with the global theme state for accurate visual feedback.

--------------------------------------------------

# Best Practices Followed

- Reusable component design  
- Separation of concerns (UI, logic, validation)  
- Clean and readable code  
- Unit testing for reliability  
- Responsive and accessible UI  

--------------------------------------------------

# Conclusion

This project demonstrates a clean and scalable approach to building reusable UI components in React.  
It follows best practices in structure, testing, and user experience, making it suitable for real-world applications.

--------------------------------------------------