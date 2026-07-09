import styles from "./Navbar.module.css";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.link} to="/">
        Feed
      </Link>
      {/* change later to "/profile/:username" */}
      <Link className={styles.link} to="/profile/devhouda">
        Profile
      </Link>
      <Link className={styles.link} to="/login">
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
