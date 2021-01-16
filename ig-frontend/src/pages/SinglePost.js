import { useEffect, useState } from 'react';

export default function SinglePost({match}) {
  const { id } = match.params;
  const [ post, setPost ] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`http://localhost:1337/posts/${id}`);
      const data = await response.json();
      console.log({data});
      setPost(data);
    }
    fetchPost();
  });

  return (
    <div>
      Single Post
    </div>
  )
}
