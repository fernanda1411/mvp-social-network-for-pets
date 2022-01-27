import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Routes, Route  } from 'react-router-dom';
import App from './components/App.jsx';
import Feed from './components/Feed.jsx';
import Profile from './components/Profile.jsx';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>


        <Route path="feed" element={<Feed />} />
        <Route path="profile" element={<Profile />} />


      </Route>
    </Routes>
  </Router>,
  document.getElementById('app')
);