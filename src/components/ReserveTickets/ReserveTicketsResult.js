import { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { deleteTicket } from '../../services/ticketsServices';

import styles from './ReserveTickets.module.css';


  const deleteTicketHandler = (id, token) =>  {
    deleteTicket(id, token)
  .then(res => console.log(res));

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
      <h2>{movieName}</h2>
      <p>Name: {username}</p>
      <p>Tickets: {ticketsCount}</p>
      <p>Total: ${total}</p>
      <FaTrash onClick={() => deleteTicketHandler(id, token)} />
    </div>
  );
};

export default ReserveTicketsResult;
