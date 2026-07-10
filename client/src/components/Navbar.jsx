import styles from "./Navbar.module.css";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Feed
      </NavLink>
      {/* change later to "/post/:id" */}
      <NavLink
        to="/post/post1id123"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Post1
      </NavLink>
      {/* change later to "/profile/:username" */}
      <NavLink
        to="/profile/devhouda"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Profile
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;
