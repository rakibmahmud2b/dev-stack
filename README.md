# Dev Stack
Dev Stack is a responsive web application that helps developers explore modern web development technologies and create their own personalized technology stack.
# Features
 -Responsive design for desktop, tablet, and mobile
-Explore modern web development technologies
-Technology name, icon, category, description, difficulty, rating, and badge
-Add technologies to a personal stack
 -Prevent duplicate technologies from being added
 -Remove individual technologies
 -Remove all selected technologies
 -Dynamic selected technology count
 -Loading state while fetching technology data
-Error handling with toast notifications
-Responsive mobile navigation
-Smooth section navigation
- Modern gradient-based UI

## Technologies Used
 React
 TypeScript
 Tailwind CSS
 React Toastify
 Lucide React
 Vite
 ### React Questions

1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React UI code easier to write and understand.

2. What is the difference between props and state?
Props are data passed from a parent component to a child. State is data managed inside a component that can change over time.

3. What does the `useState` hook do, and where did you use it in this project?
`useState` lets us store and update data in a component. I used it to manage the selected category and the technology stack.

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs code after a component renders. I used it to load the technology data from the JSON file when the page loads.

5. Why does every item in a `.map()` list need a unique `key` prop?
A unique `key` helps React identify each item and efficiently update the list when something changes.

6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI based on a condition. I used it to show an empty stack message when no technology is selected.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent sends data to a child using props. A child can send data back by calling a function passed from the parent through props.


