import { useContext, useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';

import { AuthCotnext } from '../../contexts/AuthContext';
import { useGetTicketsByUserIdQuery } from '../../store';
import Panel from '../Panel/Panel';
import LoadingSpinner from '../Spinner/Spinner';
import Table from '../Table/Table';
import styles from './UserTickets.module.css';
const UserTickets = () => {
  const { user } = useContext(AuthCotnext);
  const userToken = user.token;
  const id = user._id;
  const [totalCost, setTotalCost] = useState(0);

  const {
    data: tickets,
    error,
    isLoading,
  } = useGetTicketsByUserIdQuery({
    userToken,
    id,
  });

  useEffect(() => {
    const getTotalCost = (tickets) => {
      const sum = tickets?.reduce((prev, curr) => prev + curr.total, 0);
      return sum;
    };
    setTotalCost(getTotalCost(tickets));
  }, [tickets]);



  const config = [
    { label: 'Name', render: (user) => user.movieName },
    { label: 'Tickets Count', render: (user) => user.count },
    { label: 'Total', render: (user) => `$${user.total.toFixed(2)}` },
    {
      label: 'Delete',
      render: (user) => <FaRegEdit onClick={() => {}} />,
    },
  ];

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Panel>
          <Table data={tickets} config={config} />

          <div className={styles.total}>
            {totalCost === 0 ? (
              <p>No tickets</p>
            ) : (
              <h2>Total: ${totalCost?.toFixed(2)}</h2>
            )}
          </div>
        </Panel>
      )}
    </>
  );
};

export default UserTickets;
