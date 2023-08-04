import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
  const PF = "http://localhost:5000/images/"
  return (
    <div className="post">
      { post.photo && <img
        className="postImg"
        src={PF + post.photo}
        alt=""
      />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((cat) => (
            <span className="postCat" key={cat.name}>
              <Link className="link" to={`/posts?cat=${cat.name}`}>{cat.name}</Link>
            </span>))}

        </div>
        <span className="postTitle">
          <Link to = {`/post/${post._id}`} className="link">{post.title}</Link>
        </span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
      <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
    </div>
  );
} 
