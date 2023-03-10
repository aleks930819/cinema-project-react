import { useNavigate, useParams } from 'react-router-dom';

import { useContext, useState } from 'react';

import styles from './EditMovie.module.css';

import { AuthCotnext } from '../../contexts/AuthContext';

import Button from '../Button/Button';
import Dialog from '../Dialog/Dialog';
import setChangedValue from '../Utils/changeHandler';
import AddForm from '../AddForm/Form';
import FormInput from '../AddForm/FormInput';
import { useRemoveMovieMutation, useUpdateMovieMutation } from '../../store';

const EditMovie = () => {
  const { user } = useContext(AuthCotnext);

  const [removeMovie] = useRemoveMovieMutation();
  const [updateMovie] = useUpdateMovieMutation();

  const [showDialog, setShowDialog] = useState(false);

  const handleClick = () => {
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  const deleteMovie = () => {
    const userToken = user.token;
    removeMovie({ id, userToken });
    navigate('/movies-list');
  };

  const action = (
    <div className="dialogs-btns">
      <Button rounded green onClick={deleteMovie}>
        YES
      </Button>
      <Button rounded danger onClick={handleClose}>
        NO
      </Button>
    </div>
  );

  const [values, setValues] = useState({
    title: '',
    director: '',
    actors: '',
    poster: '',
    overview: '',
    runtime: '',
    trailer: '',
    price: '',
  });

  const { id } = useParams();

  const navigate = useNavigate();

  if (!user.isAdmin) {
    navigate('/');
  }

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const userToken = user.token;

    updateMovie({
      data: {
        title: values.title,
        director: values.director,
        actors: values.actors,
        poster: values.poster,
        overview: values.overview,
        runtime: values.runtime,
        price: values.price,
        trailer: values.trailer,
      },
      id,
      userToken,
    });
    navigate('/movies-list');
  };

  const dialog = (
    <Dialog onCLose={handleClose} action={action}>
      <h2>Are you sure you want to delete this movie?</h2>
    </Dialog>
  );
  return (
    <div className={styles['add-movie']}>
      <AddForm handler={submitHandler}>
        <h2>Edit Movie</h2>
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

        <div>
          <Button green rounded>
            Edit
          </Button>
          <Button danger rounded type="button" onClick={handleClick}>
            Delete Movie
          </Button>
        </div>

        {showDialog && dialog}
      </AddForm>
    </div>
  );
};

export default EditMovie;
