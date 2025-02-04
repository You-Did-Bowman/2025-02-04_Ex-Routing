import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./Users.css";

function Users() {

  const {users} = useContext(UserContext)

  return (
    <>
      <Outlet />

      <div className="userList">
        {users.map(user => (
          <li>
            <NavLink to = {`/users/${user.id}`}>{user.first_name}</NavLink>
          </li>
        ))}
      </div>
    </>
  );
}

export default Users;
