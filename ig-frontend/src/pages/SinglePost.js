import { useEffect, useState } from 'react';
import Post from '../components/Post';

export default function SinglePost({match, history}) {
  const { id } = match.params;
  const [ post, setPost ] = useState({});
  const [ loading, setLoading ] = useState(false);
  const [ edit, setEdit ] = useState(false);

  // Use for the edit form
  const [ description, setDescription ] = useState('');

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:1337/posts/${id}`, {
      method: 'DELETE'
    });
    await response.json();
    history.push('/')
  }

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    console.log('Handle Edit Submit')
  }

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`http://localhost:1337/posts/${id}`);
      const data = await response.json();

      setPost(data);
      setDescription(data.description);
      setLoading(false);
    }
    fetchPost();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading &&
        <>
          {post.id && 
            <>
              <Post 
                description={post.description}
                url={post.image && post.image.url}
                likes={post.likes}
              />
              <button onClick={handleDelete}>Delete this post.</button>
              <button onClick={() => setEdit(true)}>Edit this post.</button>
              {edit &&
                <form onSubmit={handleEditSubmit}>
                  <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="New description" />
                  <button>Confirm</button>
                </form>
              }
            </>
          }
          {!post.id && 
            <p>404 - Page not found!</p>
          }
        </>
      }
    </div>
  )
}
