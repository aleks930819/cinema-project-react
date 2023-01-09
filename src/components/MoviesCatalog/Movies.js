import styles from './Movie.module.css';

import LoadingSpinner from '../Spinner/Spinner';
import Card from '../Card/Card';
import { useGetMoviesQuery } from '../../store/apis/moviesApi';
import { useContext } from 'react';
import { AuthCotnext } from '../../contexts/AuthContext';

const MoviesData = () => {
  const { user } = useContext(AuthCotnext);

  if (user.email) {
    console.log('yes');
  }

  if (!user.email) {
    console.log('no');
  }
  const {
    data: movies,
    error,
    isLoading,
  } = useGetMoviesQuery({ refetchOnMountOrArgChange: true });

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className={styles['movies-box']}>
          {movies?.map((movie) => (
            <Card key={movie._id} movie={movie} />
          ))}
        </div>
      )}
      ;
    </>
  );
};

export default MoviesData;
