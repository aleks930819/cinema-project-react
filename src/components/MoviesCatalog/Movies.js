import { useEffect, useState } from 'react';
import * as movieService from '../../services/movieServices';
import MoviesCard from './MoviesCard';
import LoadingSpinner from '../Spinner/Spinner';

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
        <div className='container'>
      {loading ? (<LoadingSpinner />) : (
        movies.map((x) => <MoviesCard key={x.id} movie={x} />)
      )}
        </div>

  );
};

export default MoviesData;
