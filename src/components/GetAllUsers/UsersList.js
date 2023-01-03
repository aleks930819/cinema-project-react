import { useContext } from 'react';
import { FaUserEdit, FaTrash } from 'react-icons/fa';
import { AuthCotnext } from '../../contexts/AuthContext';
import useHttp from '../../hooks/useHttp';

import './UserList.css';

const UsersList = ({ id, name, email, createdAt }) => {
  const { isLoading, error, sendRequest } = useHttp();
  const { user } = useContext(AuthCotnext);

  const deleteUserHandler = () => {
    sendRequest({
      endpoint: `/users/${id}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });
  };

  return (
    <div className="users-container" id={id}>
      <div className="users-name">
        <p>Name: {name}</p>
      </div>

      <div className="users-email">
        <p>Email: {email}</p>
      </div>
      <div className="-users-cratedAt">
        <p>Created at: {createdAt}</p>
      </div>
      <div className="users-icons">
        <FaUserEdit />
        <FaTrash onClick={deleteUserHandler} />
      </div>
    </div>
  );
};

export default UsersList;
