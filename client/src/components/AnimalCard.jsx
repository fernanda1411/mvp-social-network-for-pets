import React from 'react';

const AnimalCard = ({breed, onSelect}) => {
  const handleClick = () => {
    onSelect(breed.id)
  }
  return (
    <li className="animal-card" onClick={handleClick}>
      <img src={breed.image.url} />
      <div>
        <p>{breed.name}</p>
      </div>
    </li>
  )
};

export default AnimalCard;