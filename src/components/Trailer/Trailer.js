import './Trailer.css';
import Video from './Video';
import { useRef } from 'react';
import Dialog from '../Dialog/Dialog';
import { useGetMoviesQuery } from '../../store';

const Trailer = ({ movieId, closeTrailerHandler }) => {
  const {
    data: movies,
    error,
    isLoading,
  } = useGetMoviesQuery({ refetchOnMountOrArgChange: true });

  const filterMovie = movies.filter((m) => m._id === movieId);
  const trailer = filterMovie[0].trailer.split('=');
  const trailerRef = useRef();

  const closeHandler = () => {
    closeTrailerHandler();
  };

  return (
    <div ref={trailerRef} onClick={closeHandler}>
      <Dialog>
        <Video embed={trailer[1]} />
      </Dialog>
    </div>
  );
};

export default Trailer;
