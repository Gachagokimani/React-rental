import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const LandingPage = lazy(() => import('./components/LandingPage'));
const LoginForm = lazy(() => import('./components/LoginForm'));
const SearchHomes = lazy(() => import('./components/SearchHomes'));
const About = lazy(() => import('./components/About'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/search" element={<SearchHomes />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App; 
