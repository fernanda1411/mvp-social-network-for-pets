import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // handle the name change
  // handle the email change
  // handle the password change
  // handle the form submission

  // validate for empty name
  // validate for empty email
  // validate for empty password

  // validate for valid email

  return(
    <div className="form">
      <div>
        <h1>Pet registration</h1>
      </div>
      <form>

        <label>Name <input name="firstName"/></label>
        <label>email <input email="email"/></label>
        <label>password <input password="password"/></label>
        <button className="btn" type="submit">submit</button>

      </form>
    </div>
  );
};

export default Signup;