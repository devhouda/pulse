import { useParams } from "react-router";
import styles from "./Post.module.css";
import { useState } from "react";
import { useEffect } from "react";

const Post = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let params = useParams();
  let id = params.id;

  useEffect(() => {
    fetch(`http://localhost:3000/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (error) return <p style={{ textAlign: "center" }}>Error: {error}</p>;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.post}>
          <h3 className={styles.title}>
            {post.title} - id:{id}
          </h3>
          <p className={styles.description}>{post.description}</p>
        </div>
      </div>
    </>
  );
};

export default Post;
