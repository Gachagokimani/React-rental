import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login-form.css'; // Adjusted to import the correct CSS file

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Add your login logic here (e.g., API call)
    console.log("Login submitted"); // Placeholder for login logic
  };

  return (
    <div className="login-container">
      <div className="login-background"></div>
      <nav className="login-nav">
        <button className="back-btn" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </nav>
      <div className="login-form-wrapper">
        <h2 className="login-title">Login</h2> {/* Added a title for clarity */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="login-input"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
