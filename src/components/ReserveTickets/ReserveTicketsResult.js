import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { deleteTicket } from '../../services/ticketsServices';
import Button from '../Button/Button';
import Dialog from '../Dialog/Dialog';

import styles from './ReserveTickets.module.css';

const ReserveTicketsResult = ({
  movieName,
  username,
  ticketsCount,
  total,
  id,
  token,
}) => {
  const [showDialog, setShowDialog] = useState(false);

  const handleClick = () => {
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };
  const navigate = useNavigate();

  const deleteTicketHandler = () => {
    deleteTicket(id, token);
    navigate('/');
  };

  const action = (
    <div className="dialogs-btns">
      <Button rounded green onClick={deleteTicketHandler}>
        YES
      </Button>
      <Button rounded danger onClick={handleClose}>
        NO
      </Button>
    </div>
  );

  const dialog = (
    <Dialog onCLose={handleClose} action={action}>
      <h2>Are you sure you want to cancel the ticket</h2>
    </Dialog>
  );

  return (
    <div className={styles['reserve-tickets-user']} id={id}>
      <div>
        <h2>{movieName}</h2>
      </div>
      <div>
        <p>Name: {username}</p>
      </div>
      <div>
        <p>Tickets: {ticketsCount}</p>
      </div>
      <div>
        <p>Total: ${total}</p>
      </div>
      <div className={styles['tickets-icon']}>
        <FaTrash onClick={handleClick} />
      </div>
      {showDialog && dialog}
    </div>
  );
};

export default ReserveTicketsResult;
