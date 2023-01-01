import { useNavigate, useParams } from 'react-router-dom';

import { useContext, useState } from 'react';

import styles from './EditMovie.module.css';

import * as movieService from '../../services/movieServices';
import { AuthCotnext } from '../../contexts/AuthContext';

import Button from '../Button/Button';
import Dialog from '../Dialog/Dialog';
import setChangedValue from '../Utils/changeHandler';
import useHttp from '../../hooks/useHttp';
import AddForm from '../AddForm/AddForm';
import AddFormInput from '../AddForm/AddFormInput';

const EditMovie = () => {
  const { user } = useContext(AuthCotnext);

  const [showDialog, setShowDialog] = useState(false);
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  const deleteMovie = () => {
    movieService.deleteMovie(id, user.token);
    navigate('/');
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

  const { isLoading, error, sendRequest } = useHttp(setMessage);

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    sendRequest({
      endpoint: `/movies/${id}`,
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },

      body: {
        title: values.title,
        director: values.director,
        actors: values.actors,
        poster: values.poster,
        overview: values.overview,
        runtime: values.runtime,
        price: values.price,
        trailer: values.trailer,
      },
    });

    if (!message) {
      navigate('/');
    }
  };

  const dialog = (
    <Dialog onCLose={handleClose} action={action}>
      <h2>Are you sure you want to delete this movie?</h2>
    </Dialog>
  );
  return (
    <div className={styles['add-movie']}>
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
          element="input"
          name="price"
          type="number"
          label="Price"
          htmlFor="price"
          placeholder="Price"
          value={values.name}
          handler={changeHandler}
        />

        <AddFormInput
          element="input"
          name="trailer"
          type="text"
          label="Trailer"
          htmlFor="trailer"
          placeholder="Trailer"
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

        <div>
          <Button green rounded>Edit</Button>
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
