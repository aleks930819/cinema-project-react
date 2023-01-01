import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';


import TicketView from './TicketView';
import useHttp from '../../hooks/useHttp';

const Ticket = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState('');

  const {sendRequest } = useHttp(setMovie);

  useEffect(() => {
    sendRequest({
      endpoint: `/movies/${id}`,
    });
  }, [sendRequest, id]);

  return (
    <>
      <TicketView
        key={id}
        price={movie.price}
        title={movie.title}
        tickets={movie.tickets}
        projections={movie.projections}
      />
    </>
  );
};

export default Ticket;
