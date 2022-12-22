import { useParams } from 'react-router-dom';

import { useContext, useEffect, useState } from 'react';

import * as movieService from '../../services/movieServices';

import { MovieContext } from '../../contexts/MovieContext';

import TicketView from './TicketView';

const Ticket = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState('');

 

  // // const currentMovie = context.movies?.find(movie => movie._id === id);
  // // context.movies.forEach(x => console.log(x));
  // console.log(context.movies);

  useEffect(() => {
    movieService.getByID(id).then((movie) => setMovie(movie));
  }, [id]);

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