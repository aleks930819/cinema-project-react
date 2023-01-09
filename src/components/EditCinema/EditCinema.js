import { useNavigate, useParams } from 'react-router-dom';

import { useContext, useState } from 'react';

import styles from './EditCinema.module.css';

import { AuthCotnext } from '../../contexts/AuthContext';

import Button from '../Button/Button';
import Dialog from '../Dialog/Dialog';
import setChangedValue from '../Utils/changeHandler';
import AddForm from '../AddForm/Form';
import FormInput from '../AddForm/FormInput';
import { useRemoveCinemaMutation, useUpdateCinemaMutation } from '../../store';

const EditCinema = () => {
  const { user } = useContext(AuthCotnext);

  const [removeCinema] = useRemoveCinemaMutation();
  const [updateCinema] = useUpdateCinemaMutation();

  const [showDialog, setShowDialog] = useState(false);

  const handleClick = () => {
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  const deleteCinema = () => {
    const userToken = user.token;
    removeCinema({ id, userToken });
    navigate('/cinemas-list');
  };

  const action = (
    <div className="dialogs-btns">
      <Button rounded green onClick={deleteCinema}>
        YES
      </Button>
      <Button rounded danger onClick={handleClose}>
        NO
      </Button>
    </div>
  );

  const [values, setValues] = useState({
    city: '',
    location: '',
    name: '',
    features: '',
    phone: '',
    imgUrl: '',
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

    updateCinema({
      payload: {
        city: values.city,
        location: values.location,
        name: values.name,
        features: values.features,
        phone: values.phone,
        imgUrl: values.imgUrl,
      },
      id,
      userToken,
    });

    navigate('/cinemas');
  };

  const dialog = (
    <Dialog onCLose={handleClose} action={action}>
      <h2>Are you sure you want to delete this movie?</h2>
    </Dialog>
  );
  return (
    <div className={styles['add-cinema']}>
      <AddForm handler={submitHandler}>
        <h2>Edit Cinema</h2>
        <FormInput
          element="input"
          name="city"
          type="text"
          label="City"
          placeholder="City"
          htmlFor="city"
          value={values.name}
          handler={changeHandler}
        />
        <FormInput
          element="input"
          name="location"
          type="text"
          label="Location"
          placeholder="Location"
          htmlFor="location"
          value={values.name}
          handler={changeHandler}
        />
        <FormInput
          element="input"
          name="name"
          type="text"
          label="Name"
          placeholder="Name"
          htmlFor="name"
          value={values.name}
          handler={changeHandler}
        />
        <FormInput
          element="input"
          name="features"
          type="text"
          label="Features"
          placeholder="Features"
          htmlFor="features"
          value={values.name}
          handler={changeHandler}
        />

        <FormInput
          element="input"
          name="phone"
          type="text"
          label="Phone"
          placeholder="Phone"
          htmlFor="phone"
          value={values.name}
          handler={changeHandler}
        />

        <FormInput
          element="input"
          name="imgUrl"
          type="text"
          label="Image URL"
          placeholder="Image URL"
          htmlFor="imgUrl"
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

export default EditCinema;
