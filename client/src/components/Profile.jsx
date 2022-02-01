import React, {useState, useEffect} from 'react';

const CURRENT_PET_MOCK = {
  name: 'Bro',
  dob: 1643694761,

}

const Profile = () => {
  // State
  const [currentPet, setCurrentPet] = useState({});

  useEffect(() => {


  }, []);

  return (
    <>
      <img src="https://placedog.net/500" />
      <p>Pets name</p>
      <p>Pets age</p>
      <p>Pets specie</p>
      <p>Pets breed</p>

      <h2>Followers - 2</h2>
      <ul>
        <li>Pet 123</li>
        <li>Pet 131</li>
      </ul>

      <h2>Following - 4</h2>
      <ul>
        <li>Pet 163</li>
        <li>Pet 181</li>
        <li>Pet 162</li>
        <li>Pet 171</li>
      </ul>
    </>
  )

};

export default Profile;