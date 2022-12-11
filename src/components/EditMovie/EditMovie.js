import { useContext, useEffect, useState } from 'react';

import styles from './EditMovie.module.css';
import * as movieService from '../../services/movieServices';
import { useNavigate, useParams } from 'react-router-dom';
import Dialog from '../Dialog/Dialog';
import { MovieContext } from '../../contexts/MovieContext';
import { AuthCotnext } from '../../contexts/AuthContext';

const EditMovie = () => {
  const { user } = useContext(AuthCotnext);

  const [dialog, setDialog] = useState({
    isLoading: false,
  });

  const [values, setValues] = useState({
    title: '',
    director: '',
    actors: '',
    poster: '',
    overview: '',
    runtime: '',
  });

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    movieService.getByID(id).then((movie) => setValues(movie));
  }, [id]);

  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    e.value = e.target.value;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user.accessToken);
    movieService
      .editMovie(id, values, user.accessToken)
      .then((response) => response.json())
      .then((data) => navigate(`/details/${data._id}`))
      .catch((err) => err.message);
  };

  const showAreUSure = () => {
    setDialog({
      isLoading: true,
    });
  };

  const deleteMovie = () => {
    movieService.deleteMovie(id, user.accessToken);
    navigate('/');
  };

  return (
    <MovieContext.Provider value={{ deleteMovie, setDialog }}>
      <div className={styles['add-movie']}>
        <form className={styles['add-movie-form']} onSubmit={submitHandler}>
          <div>
            <label id="movie-title">Movie Title</label>
            <input
              type="text"
              htmlFor="movie-title"
              name="title"
              value={values.title}
              onChange={changeHandler}
              required
            ></input>
          </div>

          <div>
            <label id="dircetor">Director</label>
            <input
              type="text"
              htmlFor="director"
              name="director"
              value={values.director}
              onChange={changeHandler}
              required
            ></input>
          </div>

          <div>
            <label id="actors">Actors</label>
            <input
              type="text"
              htmlFor="actors"
              name="actors"
              value={values.actors}
              onChange={changeHandler}
              required
            ></input>
          </div>

          <div>
            <label id="poster-url">Poster URL</label>
            <input
              type="text"
              htmlFor="poster"
              name="poster"
              onChange={changeHandler}
              value={values.poster}
              required
            ></input>
          </div>

          <div>
            <label id="poster-url">Runtime</label>
            <input
              type="text"
              htmlFor="runtime"
              name="runtime"
              onChange={changeHandler}
              value={values.runtime}
              required
            ></input>
          </div>

          <div>
            <label id="overview">Overview</label>
            <textarea
              type="textarea"
              htmlFor="overview"
              name="overview"
              rows="6"
              onChange={changeHandler}
              value={values.overview}
              required
            ></textarea>
          </div>
          <div>
            <button className={styles['form-btn']}>Edit</button>
            <span className={styles['form-btn']} onClick={showAreUSure}>
              Delete Movie
            </span>
          </div>
          {dialog.isLoading && <Dialog />}
        </form>
      </div>
    </MovieContext.Provider>
  );
};

export default EditMovie;
