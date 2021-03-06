import React from 'react';

const AnimalDetails = ({breed, unselect}) => {


  return (
    <div className="animal-details">
      <button onClick={unselect}>back</button>
      <hr />
      <div>
        <h2>Breed: {breed.name}</h2>
        <img src={breed.image.url} />
        <div>
          <p>Bred for: {breed.bred_for}</p>
          <p>Group: {breed.breed_group}</p>
          <p>Height: {breed.height.imperial}</p>
          <p>Weight: {breed.weight.imperial}</p>
          <p>Life Span: {breed.life_span}</p>
          <p>Origin: {breed.origin}</p>
          <p>Temperament: {breed.temperament}</p>
        </div>
      </div>
    </div>
  )
};

export default AnimalDetails;