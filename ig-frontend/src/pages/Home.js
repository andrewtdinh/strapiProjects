import { useEffect, useState } from 'react';
import Post from '../components/Post';
import { Link } from 'react-router-dom';

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
    <div className="Home">
      {posts.map((post) => {
        return (
          <Link to={`/${post.id}`}>
            <Post
              description={post.description}
              likes={post.likes}
              url={post.image.url}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Home;