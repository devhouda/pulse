import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Feed</Link>
      {/* change later to "/profile/:username" */}
      <Link to="/profile/devhouda">Profile</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
