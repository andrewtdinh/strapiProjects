import { useEffect, useState } from 'react';
import Post from '../components/Post';

export default function SinglePost({match}) {
  const { id } = match.params;
  const [ post, setPost ] = useState({});
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`http://localhost:1337/posts/${id}`);
      const data = await response.json();
      console.log({data});
      setPost(data);
      setLoading(false);
    }
    fetchPost();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      <Post 
        description={post.description}
        url={post.image && post.image.url}
        likes={post.likes}
      />
    </div>
  )
}
