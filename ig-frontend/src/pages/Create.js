import { useState } from 'react';

export default function Create() {
  const [ description, setDescription ] = useState('');

  return (
    <div className="Create">
      <h2>Create</h2>

      <form>
        <input 
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </form>
    </div>
  )
}