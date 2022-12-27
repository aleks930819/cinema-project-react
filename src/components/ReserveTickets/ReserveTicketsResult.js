import { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { deleteTicket } from '../../services/ticketsServices';

import styles from './ReserveTickets.module.css';

const deleteTicketHandler = (id, token) => {
  deleteTicket(id, token).then((res) => console.log(res));
};

const ReserveTicketsResult = ({
  movieName,
  username,
  ticketsCount,
  total,
  id,
  token,
}) => {
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
        <FaTrash  onClick={() => deleteTicketHandler(id, token)} />
      </div>
    </div>
  );
};

export default ReserveTicketsResult;
