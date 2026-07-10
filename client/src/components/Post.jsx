import { useParams } from "react-router";
import styles from "./Post.module.css";

const Post = () => {
  let params = useParams();
  let id = params.id;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.post}>
          <h3 className={styles.title}>Post1 - id:{id}</h3>
          <p className={styles.description}>
            lorem desc pro max iphone pc laptop macbook
          </p>
        </div>
      </div>
    </>
  );
};

export default Post;
