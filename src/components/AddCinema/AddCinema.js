import { useNavigate } from 'react-router-dom';

import { useContext, useEffect, useState } from 'react';

import { AuthCotnext } from '../../contexts/AuthContext';

import Button from '../Button/Button';
import AddForm from '../AddForm/Form';
import FormInput from '../AddForm/FormInput';
import setChangedValue from '../Utils/changeHandler';
import useHttp from '../../hooks/useHttp';

const AddCinema = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthCotnext);

  useEffect(() => {
    if (!user.isAdmin) {
      navigate('/');
    }
  }, [user, navigate]);

  const [values, setValues] = useState({
    city: '',
    location: '',
    name: '',
    features: '',
    phone: '',
    imgUrl: '',
  });

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };

  const { sendRequest } = useHttp();

  const submitHandler = (e) => {
    e.preventDefault();

    sendRequest({
      endpoint: '/cinemas',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: {
        city: values.city,
        location: values.location,
        name: values.name,
        features: values.features,
        phone: values.phone,
        imgUrl: values.imgUrl,
      },
    });

    navigate('/cinemas');
  };

  return (
    <AddForm handler={submitHandler}>
      <h2>Add Cinema</h2>
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

      <Button rounded> Add Cinema</Button>
    </AddForm>
  );
};

export default AddCinema;
