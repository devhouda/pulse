import Navbar from "./Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <form>
        <input placeholder="Username" />
        <input placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
