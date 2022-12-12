import { useNavigate } from 'react-router-dom';

import { useContext, useState } from 'react';

import { AuthCotnext } from '../../contexts/AuthContext';
import * as cinemaServices from '../../services/cinemaServices';

import Button from '../Button/Button';
import AddForm from '../AddForm/AddForm';
import AddFormInput from '../AddForm/AddFormInput';

const AddCinema = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthCotnext);

  const [values, setValues] = useState({
    city: '',
    location: '',
    name: '',
    features: '',
    phone: '',
    imgUrl: '',
  });

  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    e.value = e.target.value;
  };

  const submitHandler = (e) => {
    e.preventDefault();
         cinemaServices.addCinema(values,user.accessToken)
        .then((response) => response.json())
        .then((data) => navigate('/cinemas'))
        .catch((err) => err.message);
  };

  return (
    <AddForm handler={submitHandler}>
      <AddFormInput
        element="input"
        name="city"
        type="text"
        label="City"
        placeholder="City"
        htmlFor="city"
        value={values.name}
        handler={changeHandler}
      />
      <AddFormInput
        element="input"
        name="location"
        type="text"
        label="Location"
        placeholder="Location"
        htmlFor="location"
        value={values.name}
        handler={changeHandler}
      />
      <AddFormInput
        element="input"
        name="name"
        type="text"
        label="Name"
        placeholder="Name"
        htmlFor="name"
        value={values.name}
        handler={changeHandler}
      />
      <AddFormInput
        element="input"
        name="features"
        type="text"
        label="Features"
        placeholder="Features"
        htmlFor="features"
        value={values.name}
        handler={changeHandler}
      />

      <AddFormInput
        element="input"
        name="phone"
        type="text"
        label="Phone"
        placeholder="Phone"
        htmlFor="phone"
        value={values.name}
        handler={changeHandler}
      />

      <AddFormInput
        element="input"
        name="imgUrl"
        type="text"
        label="Image URL"
        placeholder="Image URL"
        htmlFor="imgUrl"
        value={values.name}
        handler={changeHandler}
      />

      <Button>Add Cinema</Button>
    </AddForm>
  );
};

export default AddCinema;
