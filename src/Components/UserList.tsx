import React, { useEffect } from "react";
import { UseTypedSelector } from "../hooks/UseTypedSelector";
import { UseActions } from "../hooks/UseActions";

const UserList: React.FC = () => {
  const { users, loading, error } = UseTypedSelector(state => state.user);

  //? тут у нас кастомный хук который заменяет диспатч и позволяет вызываеть экшн криэйтер напрямую
  const { fetchUsers } = UseActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Идёт загрузка</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      {users.map(user => (
        <div key={user.id}> {user.name}</div>
      ))}
    </>
  );
};

export default UserList;
