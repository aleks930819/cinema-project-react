import { useContext, useEffect, useState } from 'react';

import styles from './ReserveTickets.module.css';

import { useNavigate } from 'react-router-dom';

import { AuthCotnext } from '../../contexts/AuthContext';

import setChangedValue from '../Utils/changeHandler';
import ReserveTicketsResult from './ReserveTicketsResult';
import AddFormInput from '../AddForm/AddFormInput';
import AddForm from '../AddForm/AddForm';
import Panel from '../Panel/Panel';
import useHttp from '../../hooks/useHttp';
import Button from '../Button/Button';

const ReserveTickets = () => {
  const { user } = useContext(AuthCotnext);

  const [tickets, setTickets] = useState([]);

  const [values, setValues] = useState({
    name: '',
  });

  const navigate = useNavigate();

  const { isLoading, error, sendRequest } = useHttp(setTickets);
  if (!user.isAdmin) {
    navigate('/');
  }

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    sendRequest({
      endpoint: `/tickets/search?name=${values.name}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });
  };

  return (
    <>
      <AddForm handler={submitHandler}>
        <AddFormInput
          element="input"
          type="text"
          htmlFor="name"
          placeholder="Name"
          name="name"
          value={values.name}
          handler={changeHandler}
          label="Name"
        />
        <Button rounded>Search</Button>
      </AddForm>
      <Panel>
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
      </Panel>
      ;
    </>
  );
};

export default ReserveTickets;
