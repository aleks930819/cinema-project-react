import { createContext, useEffect, useState } from 'react';
import useHttp from '../hooks/useHttp';


export const MovieContext = createContext({
  movies: [],
});

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState('');

  const { sendRequest } = useHttp(setMovies);

  useEffect(() => {
    sendRequest({ endpoint: '/movies' });
  }, [sendRequest]);

  const value = movies;

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
