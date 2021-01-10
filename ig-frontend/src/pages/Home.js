import { useEffect, useState } from 'react';
import Post from '../components/Post';

const Home = () => {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch('http://localhost:1337/posts');
      const data = await response.json();
      setPosts(data);
    }

    getPosts();
  }, []);

  return (
    <div className="App">
      {posts.map((post) => {
        return (
          <Post
            description={post.description}
            likes={post.likes}
            url={post.image.url}
          />
        );
      })}
    </div>
  );
}

export default Home;