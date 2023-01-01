import { useEffect, useState } from 'react';

import styles from './Movie.module.css';

import LoadingSpinner from '../Spinner/Spinner';
import Card from '../Card/Card';
import useHttp from '../../hooks/useHttp';

const MoviesData = () => {
  const [movies, setMovies] = useState([]);

  const { isLoading,sendRequest, } = useHttp(setMovies);

  useEffect(() => {
    sendRequest({ endpoint: '/movies' });
  }, [sendRequest]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className={styles['movies-box']}>
          {movies?.map((x) => (
            <Card key={x._id} movie={x} />
          ))}
        </div>
      )}
      ;
    </>
  );
};

export default MoviesData;
