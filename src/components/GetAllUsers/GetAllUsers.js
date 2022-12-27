import { useContext, useEffect, useState } from 'react';
import { AuthCotnext } from '../../contexts/AuthContext';

import './UserList.css';

import { getAllUsers } from '../../services/userServices';
import UsersList from './UsersList';
import Panel from '../Panel/Panel';
import useHttp from '../../hooks/useHttp';

const GetAllUsers = () => {
  const { user } = useContext(AuthCotnext);
  const [usersList, setUsersList] = useState();

  
  const { isLoading, error, sendRequest } = useHttp(setUsersList);

  useEffect(() => {
    sendRequest({
      endpoint: '/users',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });
  }, [sendRequest, user]);
  

  // useEffect(() => {
  //   getAllUsers(user.token)
  //     .then((result) => result.json())
  //     .then((data) => setUsersList(data));
  // }, [user]);

  return (
    <Panel>
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
    </Panel>
  );
};

export default GetAllUsers;
