import { useEffect, useState } from 'react';

import styles from './Movie.module.css';

import LoadingSpinner from '../Spinner/Spinner';
import Card from '../Card/Card';
import { useGetMoviesQuery } from '../../store/apis/moviesApi';

const MoviesData = () => {
  const { data: movies, error, isLoading } = useGetMoviesQuery();

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
