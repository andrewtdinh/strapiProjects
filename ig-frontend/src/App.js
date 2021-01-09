import { useState, useEffect } from 'react';
import './App.css';
import Post from './components/Post';

const mockPosts = [
  {
    "description":  "The first post",
    "likes": 26,
    "image": {
      "url": "/uploads/Andrew_In_Panat_Ni_Khom_1117079e76.jpeg",
    }
  },
  {
    "description":  "The second post",
    "likes": 16,
    "image": {
      "url": "/uploads/Andrew_In_Panat_Ni_Khom_1117079e76.jpeg",
    }
  },
  {
    "description":  "The third post",
    "likes": 33,
    "image": {
      "url": "/uploads/Andrew_In_Panat_Ni_Khom_1117079e76.jpeg",
    }
  },
]

function App() {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch('http://localhost:1337/posts');
      const data = response.json();
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

export default App;
