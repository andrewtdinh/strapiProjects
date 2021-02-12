import { useEffect, useState, useContext } from 'react';
import Post from '../components/Post';

import { UserContext } from '../context/UserContext';
import { LikesContext } from '../context/LikesContext';

export default function SinglePost({match, history}) {
  const { id } = match.params;

  const { user, setUser } = useContext(UserContext);
  const { likesGiven, likesReceived } = useContext(LikesContext);

  const [ post, setPost ] = useState({});
  const [ loading, setLoading ] = useState(false);
  const [ edit, setEdit ] = useState(false);

  // Use for the edit form
  const [ description, setDescription ] = useState('');

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:1337/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.jwt}`
      }
    });
    await response.json();
    history.push('/')
  }

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`http://localhost:1337/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.jwt}`
      },
      body: JSON.stringify({
        description,
      })
    });
    await response.json();
    fetchPost();
  }

  const handleLike = async () => {
    try {
      await fetch('http://localhost:1337/likes', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${user.jwt}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          post: parseInt(id)
        })
      });
      fetchPost();
    } catch (error) {
      console.log("Exception: ", error);
    }
  }

  const isPostAlreadyLiked = (() => {
    return likesGiven && likesGiven.find(like => like.post && like.post.id === id)
  })();

  console.log({isPostAlreadyLiked})

  const handleUnlike = async () => {
    try {
      await fetch(`http://localhost:1337/likes/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.jwt}`,
        },
      });
      fetchPost();
    } catch (error) {
      console.log("Exception: ", error);
    }
  }

  const fetchPost = async () => {
    const response = await fetch(`http://localhost:1337/posts/${id}`);
    const data = await response.json();

    setPost(data);
    setDescription(data.description);
    setLoading(false);
  }

  useEffect(() => {
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

              {user &&
                <>
                  { isPostAlreadyLiked 
                      ? <button onClick={handleUnlike}>Unlike</button>
                      : <button onClick={handleLike}>Like</button>
                  }
                </>
              }

              {user &&
                <>
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
