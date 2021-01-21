import { useState } from 'react';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <div>
      <h2>Login</h2>

      <form> 
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
    </div>
  )
}