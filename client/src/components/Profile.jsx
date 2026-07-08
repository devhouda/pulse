import { useParams } from "react-router";

const Profile = () => {
  let params = useParams();
  let username = params.username;

  return (
    <>
      <div>{username}</div>
    </>
  );
};

export default Profile;
