import { useEffect, useState } from 'react';
import { addMovie } from '../../services/movieServices';
import styles from './EditMovie.module.css';
import * as movieService from '../../services/movieServices';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const EditMovie = () => {
  const [values, setValues] = useState({
    title: '',
    director: '',
    actors: '',
    poster: '',
    overview: '',
    runtime: '',
  });

  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  console.log(movie);
  const navigate = useNavigate();

  useEffect(() => {
    movieService.getByID(id).then((movie) => setMovie(movie));
  }, [id]);

  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    e.value = e.target.value;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(id, values);
    let url = `${'http://localhost:3030/jsonstore/movies-spa'}/${id}`;

    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
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
