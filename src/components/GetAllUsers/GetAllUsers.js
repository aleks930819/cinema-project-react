import { useContext, useEffect, useState } from 'react';
import { AuthCotnext } from '../../contexts/AuthContext';

import './UserList.css';

import { getAllUsers } from '../../services/userServices';
import UsersList from './UsersList';

const GetAllUsers = () => {
  const { user } = useContext(AuthCotnext);
  const [usersList, setUsersList] = useState();

  useEffect(() => {
    getAllUsers(user.token)
      .then((response) => response.json())
      .then((data) => setUsersList(data));
  }, [user,usersList]);

  return (
    <div className="users-list-box">
      {usersList?.map((x) =>
        x._id !== user._id ? (
          <UsersList
            id={x._id}
            key={x._id}
            name={x.name}
            email={x.email}
            createdAt={x.createdAt}
          />
        ) : null
      )}
    </div>
  );
};

export default GetAllUsers;
