import { useContext, useEffect, useState } from 'react';
import { FaUserEdit, FaTrash } from 'react-icons/fa';

import { AuthCotnext } from '../../contexts/AuthContext';

import './UserList.css';

import Panel from '../Panel/Panel';
import useHttp from '../../hooks/useHttp';
import LoadingSpinner from '../Spinner/Spinner';
import Table from '../Table/Table';
const GetAllUsers = () => {
  const { user } = useContext(AuthCotnext);
  const [usersList, setUsersList] = useState([]);

  const { isLoading, error, sendRequest } = useHttp(setUsersList);

  useEffect(() => {
    sendRequest({ endpoint: '/users' });
  }, [sendRequest]);

  const deleteUserHandler = (id) => {
    sendRequest({
      endpoint: `/users/${id}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });
  };

  const config = [
    { label: 'Name', render: (user) => user.name },
    { label: 'Email', render: (user) => user.email },
    { label: 'CreatedAt', render: (user) => user.createdAt },
    {
      label: 'Delete',
      render: (user) => <FaTrash onClick={() => deleteUserHandler(user._id)} />,
    },
  ];

  return (
    <Panel>
      <Table data={usersList} config={config} />
    </Panel>
  );
};

export default GetAllUsers;
