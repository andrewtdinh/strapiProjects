import './App.css';
import Post from './components/Post';

const post = {
  "description": "This is an old picture of me in Panatnikhom.  This picture was taken when I was 12 years old and living in a refugee camp.",
  "likes": 26,
  "image": {
    "url": "/uploads/Andrew_In_Panat_Ni_Khom_1117079e76.jpeg",
  }
};

function App() {

  return (
    <div className="App">
      <Post 
        description={post.description}
        likes={post.likes}
        url={post.image.url}
      />
    </div>
  );
}

export default App;
