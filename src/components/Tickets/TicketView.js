import { useNavigate } from 'react-router-dom';

import { useContext, useState } from 'react';

import styles from './TicketView.module.css';

import { AuthCotnext } from '../../contexts/AuthContext';

import LoginRedirect from '../LoginRedirect/LoginRedirect';
import Button from '../Button/Button';
import useTicketsCount from '../../hooks/useTicketsCount';
import useHttp from '../../hooks/useHttp';
import { useAddTicketMutation } from '../../store';

const TicketView = (props) => {
  const { user } = useContext(AuthCotnext);

  const { count, total, increaseCount, decreaseCount } = useTicketsCount(props);
  const [addTicket] = useAddTicketMutation();
  const { sendRequest } = useHttp();

  const navigate = useNavigate();

  const reserveTicketHandler = (e) => {
    e.preventDefault();
    if (count === 0) {
      return;
    }

    const userToken = user.token;
    addTicket({
      payload: {
        movieName: props.title,
        count: count,
        user: user._id,
        userName: user.name,
        total: total,
      },
      userToken,
    });
    navigate('/my-tickets');
  };

  const disabled = count === 0 ? true : false;

  return (
    <>
      {user.email ? (
        <div className={styles['tickets-box']}>
          <div className={styles['tickets-container']}>
            <h2>{props.title}</h2>
            <div className={styles.projections}>
              <ul>
                {props.projections?.map((projection) => (
                  <li key={props.id}>{projection}</li>
                ))}
              </ul>
            </div>
            <div className={styles['price-per-ticket']}>
              <p>
                Price per ticket: $<span>{props.price}</span>
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
            <Button disabled={disabled} rounded onClick={reserveTicketHandler}>
              Book Tickets
            </Button>
          </div>
        </div>
      ) : (
        <LoginRedirect />
      )}
    </>
  );
};

export default TicketView;
