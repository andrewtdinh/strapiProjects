import React, { useState } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:1337/auth/local/register', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          username: email,
          email,
          password
        })
      });
      
    } catch (err) {
      setError('Somthing went wrong during signup: ' + err)
    }
  }

  return (
    <div>
      <h2>Signup Page</h2>

      <form onSubmit={handleSubmit}>
        <input 
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Signup</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  )
}