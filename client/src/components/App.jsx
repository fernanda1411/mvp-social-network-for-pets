import React from 'react';
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>MVP Social Network for Pets</h1>

      <nav>
        <Link to="/profile">My Profile</Link>
        |{" "}
        <Link to="/feed">My Feed</Link>
      </nav>

      <Outlet />
    </>
  )

};

export default App;