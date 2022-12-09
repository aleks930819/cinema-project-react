import { useEffect, useState } from 'react';

import styles from './EditMovie.module.css';
import * as movieService from '../../services/movieServices';
import { useNavigate, useParams } from 'react-router-dom';

const EditMovie = () => {
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
    movieService.editMovie(id, values);
    navigate('/');
  };

  const deleteMovie = () => {
    movieService.deleteMovie(id);
    navigate('/');
  };

  return (
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
          ></textarea>
        </div>
        <div>
          <button className={styles['form-btn']}>Send</button>
          <span className={styles['form-btn']} onClick={deleteMovie}>
            Delete
          </span>
        </div>
      </form>
    </div>
  );
};

export default EditMovie;
