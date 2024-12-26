// Import Bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

// Import necessary libraries and components
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Main application component
import './index.css'; // Custom styles for your application
import ErrorBoundary from './ErrorBoundary'; // Error boundary for handling errors

// Create a root element to render the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application inside the root element
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
