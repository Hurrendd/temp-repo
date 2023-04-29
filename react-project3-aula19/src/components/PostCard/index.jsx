import './styles.css';

export const PostCard = ({title, body, id, cover}) => {

  return (
    <div className="post">
      <img src={cover} alt={title}></img>
      <div className="post-content">
        <h2>{id}</h2>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
}