import { useParams } from "react-router";

const Profile = () => {
  let params = useParams();
  let username = params.username;

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>{username}</div>
    </>
  );
};

export default Profile;
