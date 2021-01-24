import React, { useState } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');

  return (
    <div>
      <h2>Signup Page</h2>

      <form>
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
      </form>

      {error && <p>{error}</p>}
    </div>
  )
}