import { useContext, useState } from 'react';

import styles from './TicketView.module.css';

import { reserveTicket } from '../../services/ticketsServices';

import { AuthCotnext } from '../../contexts/AuthContext';

import LoginRedirect from '../LoginRedirect/LoginRedirect';
import Button from '../Button/Button';

const TicketView = (props) => {
  const { user } = useContext(AuthCotnext);

  props.projections?.forEach((element) => {
    console.log(element);
  });

  let [count, setCount] = useState(0);
  let [total, setTotal] = useState(0);
  let [leftTickets, setLeftTickets] = useState('');

  const reserveTicketHandler = (e) => {
    e.preventDefault();
    reserveTicket(props.title, count, user._id,user.username, total).then((data) =>
      console.log(data)
    );
  };

  const increaseCount = () => {
    setCount(count + 1);
    setTotal(total + props.price);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
      setTotal(total - props.price);
    }
  };

  return (
    <>
      {user.email ? (
        <div className={styles['tickets-box']}>
          <div className={styles['tickets-container']}>
            <h2>{props.title}</h2>
            <div className={styles.projections}>
              <ul>
                 {props.projections?.map(x => <li key={x}>{x}</li>)}
                {/* <li>12:30</li>
                <li>17:30</li>
                <li>10:30</li>
                <li>18:00</li>
                <li>21:00</li> */}{' '}
                
              </ul>
            </div>
            <div className={styles['price-per-ticket']}>
              <p>
                Price per ticket: $<span>{props.price}</span>
              </p>
              <p>
                Left Tickets: <span>{props.tickets}</span>
              </p>
            </div>

            <div className={styles['tickets-count']}>
              <p>Tickets Count: </p>
              <span className={styles['left-arrow']} onClick={decreaseCount}>
                &#60;
              </span>
              <p>{count}</p>
              <span className={styles['right-arrow']} onClick={increaseCount}>
                &#62;
              </span>
            </div>
            <div className={styles.total}>
              <p>
                Total: $<span>{total.toFixed(2)}</span>
              </p>
            </div>
            <Button onClick={reserveTicketHandler}>Book Tickets</Button>
          </div>
        </div>
      ) : (
        <LoginRedirect />
      )}
    </>
  );
};

export default TicketView;
