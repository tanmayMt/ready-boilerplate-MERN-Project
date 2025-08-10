import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/userService';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user._id}>{user.name} - {user.email}</li>
      ))}
    </ul>
  );
}

export default UserList;
