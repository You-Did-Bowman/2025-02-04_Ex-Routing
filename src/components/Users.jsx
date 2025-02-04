import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Users() {

  const {users} = useContext(UserContext)

  return (
    <>
      <Outlet />

      <div>
        {users.map(user => (
          <li>
            <Link to = {`/users/${user.id}`}>{user.first_name}</Link>
          </li>
        ))}
      </div>
    </>
  );
}

export default Users;
