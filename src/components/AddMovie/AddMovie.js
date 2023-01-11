import { useNavigate } from 'react-router-dom';

import { useContext, useEffect, useState } from 'react';

import { AuthCotnext } from '../../contexts/AuthContext';

import Button from '../Button/Button';
import FormInput from '../AddForm/FormInput';
import Form from '../AddForm/Form';
import setChangedValue from '../Utils/changeHandler';
import { useAddMovieMutation } from '../../store';

const AddMovie = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthCotnext);
  const [addMovie, results] = useAddMovieMutation();

  useEffect(() => {
    if (!user.isAdmin) {
      navigate('/');
    }
  }, [user, navigate]);

  const [values, setValues] = useState({
    title: '',
    director: '',
    actors: '',
    poster: '',
    overview: '',
    runtime: '',
    price: '' * 1,
    trailer: '',
  });

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userToken = user.token;
    addMovie({
      payload: {
        title: values.title,
        director: values.director,
        actors: values.actors,
        poster: values.poster,
        overview: values.overview,
        runtime: values.runtime,
        price: values.price,
        trailer: values.trailer,
      },
      userToken,
    });
  };

  return (
    <Form handler={submitHandler}>
      <h2>Add Movie</h2>

      <FormInput
        element="input"
        name="title"
        type="text"
        label="Movie Title"
        placeholder="Movie Title"
        htmlFor="title"
        value={values.name}
        handler={changeHandler}
      />

      <FormInput
        element="input"
        name="director"
        type="text"
        label="Director"
        htmlFor="director"
        placeholder="Director"
        value={values.name}
        handler={changeHandler}
      />

      <FormInput
        element="input"
        name="actors"
        type="text"
        label="Actors"
        placeholder="Actors"
        htmlFor="actors"
        value={values.name}
        handler={changeHandler}
      />

      <FormInput
        element="input"
        name="poster"
        type="text"
        label="Poster URL"
        htmlFor="poster"
        placeholder="Poster URL"
        value={values.name}
        handler={changeHandler}
      />

      <FormInput
        element="input"
        name="runtime"
        type="text"
        label="Runtime"
        htmlFor="runtime"
        placeholder="Runtime"
        value={values.name}
        handler={changeHandler}
      />

      <FormInput
        element="input"
        name="price"
        type="number"
        label="Price"
        htmlFor="price"
        placeholder="Price"
        value={values.name}
        handler={changeHandler}
      />

      <FormInput
        element="input"
        name="trailer"
        type="text"
        label="Trailer"
        htmlFor="trailer"
        placeholder="Trailer"
        value={values.name}
        handler={changeHandler}
      />

      <FormInput
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

      <Button green rounded>
        Add Movie
      </Button>
    </Form>
  );
};

export default AddMovie;
