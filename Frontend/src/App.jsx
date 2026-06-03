// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SignedOut, SignInButton, SignUpButton } from '@clerk/clerk-react';

import Home from './pages/HomePage';
import Main from './pages/MainPage';

function Header() {
  const location = useLocation();

  // Show header only on Home Page
  if (location.pathname !== '/') return null;

  return (
    <header className="app-header">
      <div className="logo">
    <img src="/logo.webp" alt="AI Code Reviewer Logo" className="logo-image" />
    <span>AI Code Reviewer</span>
    </div>
      <SignedOut>
        <div className="auth-buttons">
          <SignInButton mode="modal">
            <button className="btn">Login</button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button className="btn signup-btn">Sign Up</button>
          </SignUpButton>
        </div>
      </SignedOut>
    </header>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
