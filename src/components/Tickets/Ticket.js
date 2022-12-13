import { useContext } from 'react';
import { AuthCotnext } from '../../contexts/AuthContext';

import { MovieContext } from '../../contexts/MovieContext';
import TicketView from './TicketView';

const ticketData = [
  {
    id: 1,
    title: 'Black Adam',
    price: 13,
  },
];
const Ticket = () => {
  const { user } = useContext(AuthCotnext);
  return (
    <>
      {ticketData.map((x) => (
        <TicketView key={x.id} ticket={x} />
      ))}
    </>
  );
};

export default Ticket;
