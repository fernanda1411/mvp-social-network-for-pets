import React, {useState, useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import './app.scss';

import AnimalCard from './AnimalCard.jsx';
import AnimalDetails from './AnimalDetails.jsx';

const App = () => {
  const [breeds, setBreeds] = useState([]);
  const [query, setQuery] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState(false);

  useEffect(async () => {
    setIsLoading(true);

    const breeds = await axios.get('https://api.thedogapi.com/v1/breeds', {
      headers: {
        'x-api-key': process.env.REACT_APP_THEDOGAPI_KEY,
      }
    });

    const categories = await axios.get('https://api.thedogapi.com/v1/categories', {
      headers: {
        'x-api-key': process.env.REACT_APP_THEDOGAPI_KEY,
      }
    });


    setBreeds(breeds.data);
    setFiltered(breeds.data);
    setCategories(categories.data);

    console.log(breeds.data[0])

    setIsLoading(false);
  } ,[]);

  if (isLoading) {
    return (
      <p>is loading...</p>
    )
  }

  const handleSearch = (evt) => {
    const q = evt.target.value;
    setQuery(q.toLowerCase());

    if (!query || (query && !query.length)) {
      setFiltered(breeds);
    } else {
      const filteredBreeds = breeds.filter(breed => {
        console.log(query)
        console.log(breed)
        return breed.name.toLowerCase().includes(query) ||
        (breed.bred_for && breed.bred_for.toLowerCase().includes(query)) ||
        (breed.breed_group && breed.breed_group.toLowerCase().includes(query)) ||
        (breed.origin && breed.origin.toLowerCase().includes(query)) ||
        (breed.temperament && breed.temperament.toLowerCase().includes(query))
      });

      setFiltered(filteredBreeds);
    }
  }

  const handleSelect = (id) => {
    setSelected(id);
  }

  const getSelected = () => {
    const sel = breeds.filter(breed => breed.id === selected);
    return sel[0];
  }

  const unselect = () => {
    setSelected(null);
  }

  return (
    <div className="app">
      <h1>Dogs Finder</h1>

      <div>
        Search <input onChange={handleSearch}  value={query} type="text"></input>
      </div>

      {selected > 0 ?
        <AnimalDetails breed={getSelected()} unselect={unselect}/>
        :
        <ul className="animal-cards-list">
          {filtered.map(breed => (
            <AnimalCard  key={breed.id} breed={breed} onSelect={handleSelect}/>
          ))}
        </ul>
      }
    </div>
  )

};

export default App;