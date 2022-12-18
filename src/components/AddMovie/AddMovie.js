import { useNavigate } from 'react-router-dom';

import styles from './AddMovie.module.css';

import { useContext, useEffect, useState } from 'react';

import { AuthCotnext } from '../../contexts/AuthContext';
import { addMovie } from '../../services/movieServices';

import Button from '../Button/Button';
import AddFormInput from '../AddForm/AddFormInput';
import AddForm from '../AddForm/AddForm';
import setChangedValue from '../Utils/changeHandler';

const AddMovie = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthCotnext);



  useEffect(() => {

    if(!user.isAdmin){
      navigate('/');
    }
  
  },[user,navigate]);

  const [values, setValues] = useState({
    title: '',
    director: '',
    actors: '',
    poster: '',
    overview: '',
    runtime: '',
    price:''
  });

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };


  const submitHandler = (e) => {
    e.preventDefault();
    addMovie(values, user.token)
      .then((response) => (response.json()))
      .then((data) =>  navigate(`/details/${data._id}`))
      .catch((err) => err.message);
  };

  return (
    <AddForm handler={submitHandler}>
    <h2>Add Movie</h2>

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
        element="input"
        name="price"
        type="text"
        label="Price"
        htmlFor="price"
        placeholder="Price"
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
