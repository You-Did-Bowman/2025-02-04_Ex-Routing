import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

function FindUser({children}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((result) => setUsers(result.data));
  });

  const userData = { users, setUsers };
  return (
    <>
      <UserContext.Provider value={userData}>
        {children}
      </UserContext.Provider>
    </>
  );
}

export default FindUser;
