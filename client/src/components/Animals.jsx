import React, {useState, useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';

const Animals = ({petFinderToken}) => {

  const [animals, setAnimals] = useState(null);

  useEffect(async () => {

    const animals = await axios.get('https://api.petfinder.com/v2/animals', {
      headers: {
        'Authorization': `Bearer ${petFinderToken}`,
      }
    });

    setAnimals(animals.data);
    console.log(animals)
  } ,[]);


  return (
    <>
      <p>Animals</p>
    </>
  )

};

export default Animals;