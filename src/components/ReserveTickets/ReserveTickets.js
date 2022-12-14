import { useContext, useState } from 'react';

import styles from './ReserveTickets.module.css';

import { checkTickets } from '../../services/ticketsServices';
import { AuthCotnext } from '../../contexts/AuthContext';

import setChangedValue from '../Utils/changeHandler';

const ReserveTickets = () => {
    const { user } = useContext(AuthCotnext);
    const [values, setValues] = useState({
        email: '',
      });

      const changeHandler = (e) => {
        setChangedValue(e, setValues);
      };;

    const submitHandler = (e) => {
        e.preventDefault();

    };

    console.log(values.email);

  return (
    <div className={styles['reserve-tickets-box']}>
      <div className={styles['reserve-tickets-search']}>
        <form>
          <input onChange={changeHandler} name='email' placeholder="Search for user" />
        </form>
      </div>

      <div className={styles['reserve-tickets-user']}>
        <h2>The Batman</h2>
        <p>Name: Alex</p>
        <p>Tickets: 3</p>
        <p>Total: $56</p>
      </div>
    </div>
  );
};

export default ReserveTickets;
