import { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
import useHttp from '../../hooks/useHttp';
import Panel from '../Panel/Panel';
import MoviesListView from './MoviesListView';

const MoviesList = () => {
  const [movies,setMovies] = useState([]);

  const { isLoading, error, sendRequest } = useHttp(setMovies);

  useEffect(() => {
    sendRequest({
      endpoint:'/movies'
    });
  }, [sendRequest]);

  return (
    <>
      <Panel>
        {movies?.map((x) => (
          <MoviesListView key={x._id} movieId={x._id} movieName={x.title} />
        ))}
      </Panel>
    </>
  );
};

export default MoviesList;
