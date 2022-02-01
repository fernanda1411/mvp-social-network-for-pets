import React from 'react';

const AnimalCard = ({breed, onSelect}) => {
  const handleClick = () => {
    onSelect(breed.id)
  }
  return (
    <li className="animal-card" onClick={handleClick}>
      <div className='animal-card__image' style={{backgroundImage: `url(${breed.image.url})`}}>
      </div>
      <div className="animal-card__details">
        <p>{breed.name}</p>
      </div>
    </li>
  )
};

export default AnimalCard;