import { useContext, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Button from '../Button/Button';
import Dialog from '../Dialog/Dialog';

import { AuthCotnext } from '../../contexts/AuthContext';

import './UserList.css';

import Panel from '../Panel/Panel';
import LoadingSpinner from '../Spinner/Spinner';
import Table from '../Table/Table';
import { useGetUsersQuery, useRemoveUserMutation } from '../../store';
const GetAllUsers = () => {
  const { user } = useContext(AuthCotnext);
  const [showDialog, setShowDialog] = useState(false);
  const [currentUserId, setCurrentUserId] = useState('');

  const [removeUser] = useRemoveUserMutation();
  const userToken = user.token;
  const { data: users, isLoading } = useGetUsersQuery({ userToken });

  const handleClick = () => {
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  const deleteUser = (id) => {
    const userToken = user.token;
    removeUser({ id, userToken });
  };

  const action = (
    <div className="dialogs-btns">
      <Button
        rounded
        green
        onClick={() => {
          deleteUser(currentUserId);
          handleClose();
        }}
      >
        YES
      </Button>
      <Button rounded danger onClick={handleClose}>
        NO
      </Button>
    </div>
  );

  const dialog = (
    <Dialog onCLose={handleClose} action={action}>
      <h2>Are you sure you want to delete this user?</h2>
    </Dialog>
  );

  const config = [
    { label: 'Name', render: (user) => user.name },
    { label: 'Email', render: (user) => user.email },
    { label: 'CreatedAt', render: (user) => user.createdAt },
    {
      label: 'Delete',
      render: (user) => (
        <FaTrash
          onClick={() => {
            setCurrentUserId(user._id);
            handleClick();
          }}
        />
      ),
    },
  ];

  return (
    <>
      <Panel>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Table data={users} config={config} />
        )}
      </Panel>
      {showDialog && dialog}
    </>
  );
};

export default GetAllUsers;
