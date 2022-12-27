import { useContext, useEffect, useState } from 'react';
import { AuthCotnext } from '../../contexts/AuthContext';
import useHttp from '../../hooks/useHttp';
import { getUserTickets } from '../../services/ticketsServices';
import Panel from '../Panel/Panel';
import ReserveTicketsResult from '../ReserveTickets/ReserveTicketsResult';
import styles from './UserTickets.module.css';

const UserTickets = () => {
  const { user } = useContext(AuthCotnext);
  const [tickets, setTickets] = useState([]);


  const { isLoading, error, sendRequest } = useHttp(setTickets);

  useEffect(() => {
    sendRequest({
      endpoint: `/tickets/${user._id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });
  }, [sendRequest, user]);


  // useEffect(() => {
  //   getUserTickets(user._id, user.token)
  //     .then((response) => response.json())
  //     .then((data) => setTickets(data));
  // }, [user._id]);

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

export default UserTickets;
