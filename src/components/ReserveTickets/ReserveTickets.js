import { useContext, useEffect, useState } from 'react';

import styles from './ReserveTickets.module.css';

import { useNavigate } from 'react-router-dom';

import { AuthCotnext } from '../../contexts/AuthContext';

import { checkTickets } from '../../services/ticketsServices';

import setChangedValue from '../Utils/changeHandler';
import ReserveTicketsResult from './ReserveTicketsResult';
import LoadingSpinner from '../Spinner/Spinner';
import AddFormInput from '../AddForm/AddFormInput';
import AddForm from '../AddForm/AddForm';

const ReserveTickets = () => {
  const { user } = useContext(AuthCotnext);

  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [values, setValues] = useState({
    name: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    checkTickets(user.token)
      .then((response) => response.json())
      .then((data) => setTickets(data));
    setLoading(false);
  }, [user.token]);

  if (!user.isAdmin) {
    navigate('/');
  }

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  

   

  };
  const findTicketByName = (name) => {
   const ticket = tickets.filter(t => t.userName === name);
     return ticket;

  };
  console.log(findTicketByName('Alex'));

  console.log(values.name);
  return (
    <>
      <div className={styles['reserve-tickets-box']}>
        <div className={styles['reserve-tickets-search']}>
           <AddForm onSubmit={submitHandler}>
          <AddFormInput
            element="input"
            type="text"
            htmlFor="name"
            placeholder="Search for user"
            name="name"
            value={values.name}
            handler={changeHandler}
            email={values.email}
          />
          </AddForm>
        </div>

        {tickets?.map((x) => (
          <ReserveTicketsResult
            key={x._id}
            movieName={x.movieName}
            username={x.userName}
            ticketsCount={x.count}
            total={x.total.toFixed(2)}
            id={x._id}
            token={user.token}
          />
        ))}
      </div>
    </>
  );
};

export default ReserveTickets;
