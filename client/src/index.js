import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import App from './components/App.jsx';
import Animals from './components/Animals.jsx';
import Profile from './components/Profile.jsx';
import Signup from './components/Signup.jsx';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/animals" element={<Animals />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>,
  document.getElementById('app')
);