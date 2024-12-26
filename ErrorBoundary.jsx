import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      isLoading: false 
    };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  handleRetry = () => {
    // Reset the error state and allow the child components to re-render
    this.setState({ hasError: false, isLoading: true });
    
    // Simulate a loading period before resetting the loading state
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000); // Adjust time as needed
  };

  render() {
    if (this.state.isLoading) {
      return <h1>Loading...</h1>; // Show loading indicator
    }

    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <button onClick={this.handleRetry}>Try Again</button> {/* Retry button */}
        </div>
      );
    }

    return this.props.children; // Render children if no errors
  }
}

export default ErrorBoundary;
