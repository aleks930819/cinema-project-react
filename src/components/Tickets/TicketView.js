import { useContext } from 'react';

import styles from './TicketView.module.css';

import { AuthCotnext } from '../../contexts/AuthContext';

import LoginRedirect from '../LoginRedirect/LoginRedirect';
import Button from '../Button/Button';

const TicketView = (props) => {
  const { user } = useContext(AuthCotnext);
  return (
<>   
 {user.email ?  (
     <div className={styles['tickets-box']}>
      <div className={styles['tickets-container']}>
        <h2>{props.title}</h2>
        <div className={styles.projections}>
          <ul>
            <li>12:30</li>
            <li>17:30</li>
            <li>10:30</li>
            <li>18:00</li>
            <li>21:00</li>
          </ul>
        </div>
        <div className={styles['price-per-ticket']}>
           <p>Price per ticket: $<span>{props.price}</span></p>
        </div>

        <div className={styles['tickets-count']}>
        <p>Tickets Count: </p>
          <span className={styles['left-arrow']}>&#60;</span>
          <p>1</p>
          <span className={styles['right-arrow']}>&#62;</span>
          
        </div>
        <div className={styles.total}>
             <p>Total: $<span>{props.price}</span></p>
        </div>
        <Button>Book Tickets</Button>
      </div>
    </div>
 ) :
   <LoginRedirect/>
 }  
  
    </>

  
  );
 };

export default TicketView;
