import { useParams } from "react-router";
import Navbar from "./Navbar";

const Profile = () => {
  let params = useParams();
  let username = params.username;

  return (
    <>
      <Navbar />
      <div>{username}</div>
    </>
  );
};

export default Profile;
