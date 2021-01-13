import { useState } from 'react';

export default function Create() {
  const [ description, setDescription ] = useState('');
  const [ file, setFile ] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:1337/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description
      })
    });

    const data = await response.json();
  }

  return (
    <div className="Create">
      <h2>Create</h2>

      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          placeholder="Add a file"
          onChange={(event) => setFile(event.target.files[0])}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}