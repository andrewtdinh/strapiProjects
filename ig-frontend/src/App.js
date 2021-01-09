import './App.css';
import Post from './components/Post';

const posts = [
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
