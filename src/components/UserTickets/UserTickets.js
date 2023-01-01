import { useContext, useEffect, useState } from 'react';
import { AuthCotnext } from '../../contexts/AuthContext';
import useHttp from '../../hooks/useHttp';
import Panel from '../Panel/Panel';
import ReserveTicketsResult from '../ReserveTickets/ReserveTicketsResult';
import styles from './UserTickets.module.css';
const UserTickets = () => {
  const { user } = useContext(AuthCotnext);
  const [tickets, setTickets] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const { isLoading, error, sendRequest } = useHttp(setTickets);
  console.log(tickets);

  useEffect(() => {
    const getTotalCost = (tickets) => {
      const sum = tickets.reduce((prev, curr) => prev + curr.total, 0);
      return sum;
    };
    setTotalCost(getTotalCost(tickets));
  }, [tickets]);

  useEffect(() => {
    sendRequest({
      endpoint: `/tickets/${user._id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });
  }, [sendRequest, user]);
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
      <div className={styles.total}>Total: ${totalCost.toFixed(2)}</div>
    </Panel>
  );
};

export default UserTickets;
