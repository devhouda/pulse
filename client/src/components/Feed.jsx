import styles from "./Feed.module.css";

const Feed = () => {
  return (
    <div className={styles.feed}>
      <div className={styles.post}>
        <h3 className={styles.title}>Post1</h3>
        <p className={styles.description}>
          lorem desc pro max iphone pc laptop macbook
        </p>
      </div>
      <div className={styles.post}>
        <h3 className={styles.postTitle}>Post2</h3>
        <p className={styles.description}>
          lorem desc pro max iphone pc laptop macbook
        </p>
      </div>
      <div className={styles.post}>
        <h3 className={styles.postTitle}>Post3</h3>
        <p className={styles.description}>
          lorem desc pro max iphone pc laptop macbook
        </p>
      </div>
    </div>
  );
};

export default Feed;
