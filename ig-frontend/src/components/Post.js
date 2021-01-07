const API_URL = 'http://localhost:1337';

const formatImageUrl = (url) => `${API_URL}${url}`;
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const url = props.post.image && props.post.image.url;
  const { description, likes } = props.post;

  return (
    <div className="Post">
      <img className="Post__Image" src={formatImageUrl(url)} alt="post hero" />
      <h4>{description}</h4>
      <div>
        <span>Likes: {likes}</span>
      </div>
    </div>
  );
}