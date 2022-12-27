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
import Table from '../Table/Table';
import Panel from '../Panel/Panel';
import useHttp from '../../hooks/useHttp';

const ReserveTickets = () => {
  const { user } = useContext(AuthCotnext);

  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [values, setValues] = useState({
    name: '',
  });

  const navigate = useNavigate();

  const { isLoading, error, sendRequest } = useHttp(setTickets);

  useEffect(() => {
    sendRequest({
      endpoint: '/tickets',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });
  }, [sendRequest, user.token]);

  // useEffect(() => {
  //   setLoading(true);
  //   checkTickets(user.token)
  //     .then((response) => response.json())
  //     .then((data) => setTickets(data));
  //   setLoading(false);
  // }, [user.token]);

  console.log(tickets);
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
    const ticket = tickets.filter((t) => t.userName === name);
    return ticket;
  };

  return (
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
  );
};

export default ReserveTickets;
