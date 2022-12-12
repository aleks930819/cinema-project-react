import { useNavigate } from 'react-router-dom';

import styles from './AddMovie.module.css';

import { useContext, useState } from 'react';

import { AuthCotnext } from '../../contexts/AuthContext';
import { addMovie } from '../../services/movieServices';

import Button from '../Button/Button';
import AddFormInput from '../AddForm/AddFormInput';
import AddForm from '../AddForm/AddForm';
import setChangedValue from '../Utils/changeHandler';

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

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };

  // const changeHandler = (e) => {
  //   setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  //   e.value = e.target.value;
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    addMovie(values, user.accessToken)
      .then((response) => response.json())
      .then((data) => navigate(`/details/${data._id}`))
      .catch((err) => err.message);
  };

  return (
    <AddForm handler={submitHandler}>

      <AddFormInput
        element="input"
        name="title"
        type="text"
        label="Movie Title"
        placeholder="Movie Title"
        htmlFor="title"
        value={values.name}
        handler={changeHandler}
      />

      <AddFormInput
        element="input"
        name="director"
        type="text"
        label="Director"
        htmlFor="director"
        placeholder="Director"
        value={values.name}
        handler={changeHandler}
      />

      <AddFormInput
        element="input"
        name="actors"
        type="text"
        label="Actors"
        placeholder="Actors"
        htmlFor="actors"
        value={values.name}
        handler={changeHandler}
      />

      <AddFormInput
        element="input"
        name="poster"
        type="text"
        label="Poster URL"
        htmlFor="poster"
        placeholder="Poster URL"
        value={values.name}
        handler={changeHandler}
      />

      <AddFormInput
        element="input"
        name="runtime"
        type="text"
        label="Runtime"
        htmlFor="runtime"
        placeholder="Runtime"
        value={values.name}
        handler={changeHandler}
      />

      <AddFormInput
        element="textearea"
        name="overview"
        type="text"
        rows="6"
        label="Overview"
        htmlFor="overview"
        placeholder="Overview"
        value={values.name}
        handler={changeHandler}
      />
    
      <Button>Add Movie</Button>
      
    </AddForm>
  );
};

export default AddMovie;
