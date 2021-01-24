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
        
        />
        <input 
        
        />
      </form>

      {error && <p>{error}</p>}
    </div>
  )
}