import { useContext } from 'react';
import { FaUserEdit, FaTrash } from 'react-icons/fa';
import { AuthCotnext } from '../../contexts/AuthContext';
import { deleteUser } from '../../services/userServices';


import './UserList.css';


const deleteUserHandler = (currentUserId,adminToken) => {
  deleteUser(currentUserId,adminToken)
  .then(res => console.log(res));
}; 


const UsersList = ({ id,name, email, createdAt }) => {


const { user } = useContext(AuthCotnext);

  return (
    <div className="users-container" id={id}>
      <div className='users-name'>
        <p>Name: {name}</p>
      </div>

      <div className='users-email'>
        <p>Email: {email}</p>
      </div>
      <div className='-users-cratedAt'>
        <p>Created at: {createdAt}</p>
      </div>
      <div className="users-icons">
        <FaUserEdit />
        <FaTrash onClick={() => deleteUserHandler(id,user.token)}/>
      </div>
    </div>
  );
};

export default UsersList;
