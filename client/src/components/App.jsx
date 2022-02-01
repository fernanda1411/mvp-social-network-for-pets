import React, {useState, useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';

const App = () => {

  const [petFinderToken, setPetFinderToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    const token = await axios.post('https://api.petfinder.com/v2/oauth2/token', {
      grant_type: "client_credentials",
      client_id: process.env.REACT_APP_PETFINDER_API_KEY,
      client_secret: process.env.REACT_APP_PETFINDER_API_SECRET
    });

    setPetFinderToken(token.data.access_token);
    setIsLoading(false);
  } ,[]);


  return (
    <>
      <h1>MVP Social Network for Pets</h1>

      <nav>
        <Link to="/profile">My Profile</Link> {" | "} <Link to="/feed">My Feed</Link>
      </nav>

      {isLoading ? 'isLoading' : <Outlet petFinderToken={petFinderToken}/>}
    </>
  )

};

export default App;