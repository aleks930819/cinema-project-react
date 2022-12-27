import { useCallback, useContext, useEffect, useState } from 'react';

import styles from './Movie.module.css';

import * as movieService from '../../services/movieServices';

import LoadingSpinner from '../Spinner/Spinner';
import { MovieContext, MovieProvider } from '../../contexts/MovieContext';
import Card from '../Card/Card';
import useHttp from '../../hooks/useHttp';

const MoviesData = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // const moviesContext = useContext(MovieContext);
  
//  useEffect(() => {
//      setMovies(moviesContext);
//  },[moviesContext]);

//  console.log(moviesContext);

const {isLoading,error,sendRequest}  = useHttp(setMovies);

useEffect(() => {
  sendRequest({endpoint:'/movies'});
},[sendRequest]);


  // useEffect(() => {
  //   setLoading(true);
  //   movieService.getAll().then((movies) => {
  //     setMovies(Object.values(movies));
  //     setLoading(false);
  //   });
  // }, []);

  

  return (
    <>
  

      {isLoading ? (
            <LoadingSpinner />
          ) : (
      <div className={styles['movies-box']}>
     {movies.map((x) => <Card key={x._id} movie={x} />)}
      </div>
      )};

       
    </>
  );
};

export default MoviesData;
