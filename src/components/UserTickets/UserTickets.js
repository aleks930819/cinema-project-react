import { useContext, useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';

import { AuthCotnext } from '../../contexts/AuthContext';
import useHttp from '../../hooks/useHttp';
import Panel from '../Panel/Panel';
import Table from '../Table/Table';
import styles from './UserTickets.module.css';
const UserTickets = () => {
  const { user } = useContext(AuthCotnext);
  const [tickets, setTickets] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const { isLoading, error, sendRequest } = useHttp(setTickets);

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

  const deleteTicketHandler = (id) =>
    sendRequest({
      endpoint: `/tickets/${id}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });

  const config = [
    { label: 'Name', render: (user) => user.movieName },
    { label: 'Tickets Count', render: (user) => user.count },
    { label: 'Total', render: (user) => `$${user.total.toFixed(2)}` },
    {
      label: 'Delete',
      render: (user) => (
        <FaRegEdit onClick={() => deleteTicketHandler(user._id)} />
      ),
    },
  ];
  console.log(tickets);

  return (
    <Panel>
      <Table data={tickets} config={config} />

      <div className={styles.total}>
        {totalCost === 0 ? (
          <p>No tickets</p>
        ) : (
          <h2>Total: ${totalCost.toFixed(2)}</h2>
        )}
      </div>
    </Panel>
  );
};

export default UserTickets;
