import { useState } from 'react';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:1337/auth/local/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        identifier: email,
        password
      })
    });
    
    const data = await response.json();

    if (data.message) {
      setError(data.message[0].messages[0].message);
    }
    console.log({data})
  }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}> 
        <input 
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input 
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Login</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  )
}