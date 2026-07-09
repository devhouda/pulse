import styles from "./Login.module.css";

const Login = () => {
  return (
    <form className={styles.login}>
      <input className={styles.input} placeholder="Username" />
      <input className={styles.input} placeholder="Password" />
      <button className={styles.btn} type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
