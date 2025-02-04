import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function SingleUser() {
  const { id } = useParams();
  const { users } = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const profile = users.find((user) => user.id === parseInt(id));
    setUser(profile);
  }, [users, id]);

  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Single-User-Page</h1>
      <p>User ID from URL: {id}</p>
      <p>User ID: {user.id}</p>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
    </>
  );
}

export default SingleUser;