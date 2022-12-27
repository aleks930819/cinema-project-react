import { createContext, useEffect, useState } from 'react';

import * as movieService from '../services/movieServices';

export const MovieContext = createContext({
  movies: [],
});

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState('');

  useEffect(() => {
    movieService.getAll().then((movies) => {
      setMovies(Object.values(movies));
    });
  }, []);

  const value =  movies ;

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
