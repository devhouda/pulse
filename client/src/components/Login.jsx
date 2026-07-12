import { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.login}>
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        className={styles.input}
        placeholder="Username"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className={styles.input}
        placeholder="Password"
        required
      />
      <button className={styles.btn} type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
