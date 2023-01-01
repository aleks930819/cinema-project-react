import './Trailer.css';
import Video from './Video';
import { useContext, useRef } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
import Dialog from '../Dialog/Dialog';

const Trailer = ({ movieId, closeTrailerHandler }) => {
  const movies = useContext(MovieContext);
  const filterMovie = movies.filter((m) => m._id === movieId);
  const trailer = filterMovie[0].trailer.split('=');
  const trailerRef = useRef();

  const handler = () => {
    closeTrailerHandler();
  };

  return (
    <div ref={trailerRef} onClick={handler}>
      <Dialog>
        <Video embed={trailer[1]} />
      </Dialog>
    </div>
  );
};

export default Trailer;
