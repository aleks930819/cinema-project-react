import { useEffect, useState } from 'react';

import styles from './Movie.module.css';

import MoviesCard from './MoviesCard';
import * as movieService from '../../services/movieServices';
import LoadingSpinner from '../Spinner/Spinner';
import ImageSlider from '../ImageSlider/ImageSlider';



const MoviesData = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    movieService.getAll().then((movies) => {
      setMovies(Object.values(movies));
      setLoading(false);
    });
  }, []);


  return (
    <>
    <ImageSlider/>
    
      {/* <WeeklyProgram /> */}
      <div className={styles['movie-container']}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          movies.map((x) => <MoviesCard key={x._id} movie={x} />)
        )}
      </div>
    </>
  );
};

export default MoviesData;
