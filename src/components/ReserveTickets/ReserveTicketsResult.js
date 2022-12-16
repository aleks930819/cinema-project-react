
import styles from './ReserveTickets.module.css';


const ReserveTicketsResult = ({
    movieName,
    username,
    ticketsCount,
    total
}) => {
  return (

      <div className={styles['reserve-tickets-user']}>
        <h2>{movieName}</h2>
        <p>Name: {username}</p>
        <p>Tickets: {ticketsCount}</p>
        <p>Total: ${total}</p>
      </div>
  );
};

export default ReserveTicketsResult;
