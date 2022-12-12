import { useNavigate } from 'react-router-dom';

import styles from './AddMovie.module.css';

import { useContext, useState } from 'react';

import { AuthCotnext } from '../../contexts/AuthContext';
import { addMovie } from '../../services/movieServices';

import Button from '../Button/Button';
import AddFormInput from '../AddForm/AddFormInput';
import AddForm from '../AddForm/AddForm';

const AddMovie = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthCotnext);

  const [values, setValues] = useState({
    title: '',
    director: '',
    actors: '',
    poster: '',
    overview: '',
    runtime: '',
  });

  console.log(values);


  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    e.value = e.target.value;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addMovie(values, user.accessToken)
      .then((response) => response.json())
      .then((data) => navigate(`/details/${data._id}`))
      .catch((err) => err.message);
  };

  
  return (
    <AddForm handler={submitHandler}>

    {/* <div className={styles['add-movie']}>

      <form className={styles['add-movie-form']} onSubmit={submitHandler}>
         
        {/* <div>
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
        </div> */}

        <AddFormInput 
           element="input"
           name="title"
           type="text"
           label="Movie Title"
           placeholder="Movie Title"
           htmlFor="title"
           value= {values.name}
           handler={changeHandler}/>


         <AddFormInput 
           element="input"
           name="director"
           type="text"
           label="Director"
           htmlFor="director"
           placeholder="Director"
           value= {values.name}
           handler={changeHandler}/>

        {/* <div>
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
        </div> */}

        <AddFormInput 
           element="input"
           name="actors"
           type="text"
           label="Actors"
           placeholder="Actors"
           htmlFor="actors"
           value= {values.name}
           handler={changeHandler}/>

        {/* <div>
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
        </div> */}

        <AddFormInput 
           element="input"
           name="poster"
           type="text"
           label="Poster URL"
           htmlFor="poster"
           placeholder="Poster URL"
           value= {values.name}
           handler={changeHandler}/>

        {/* <div>
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
        </div> */}

        <AddFormInput 
           element="input"
           name="runtime"
           type="text"
           label="Runtime"
           htmlFor="runtime"
           placeholder="Runtime"
           value= {values.name}
           handler={changeHandler}/>
{/* 
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
        </div> */}

        <AddFormInput 
           element="textearea"
           name="overview"
           type="text"
           rows="6"
           label="Overview"
           htmlFor="overview"
           placeholder="Overview"
           value= {values.name}
           handler={changeHandler}/>
        {/* <div>
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
        </div> */}
          <Button>Add Movie</Button>
      {/* </form> */}
    {/* </div> */}
    </AddForm>
  );
};

export default AddMovie;
