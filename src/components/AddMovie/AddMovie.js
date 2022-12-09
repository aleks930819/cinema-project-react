import { useState } from 'react';
import { addMovie } from '../../services/movieServices';
import styles from './AddMovie.module.css';


const AddMovie = () => {

  const [values, setValues] = useState({
    title: '',
    director: '',
    actors: '',
    poster: '',
    overview: '',
    runtime: '',
  });

  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    e.value = e.target.value;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addMovie(values);
    

    setValues((oldState) => ({
      ...oldState,
      title: '',
      director: '',
      actors: '',
      poster: '',
      overview: '',
      runtime: '',
    }));


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
            placeholder="Movie Title"
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
            placeholder="Director"
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
            placeholder="Actors"
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
            placeholder="Poster URL"
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
            placeholder="Runtime"
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
            placeholder="Overview"
            required

          ></textarea>
        </div>
        <div>
          <button className={styles['form-btn']}>Send</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
