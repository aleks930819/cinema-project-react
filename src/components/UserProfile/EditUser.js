import { useNavigate } from 'react-router-dom';

import { useContext,
   useState } from 'react';

import setChangedValue from '../Utils/changeHandler';

import AddForm from '../AddForm/AddForm';
import AddFormInput from '../AddForm/AddFormInput';

import Button from '../Button/Button';

import { AuthCotnext } from '../../contexts/AuthContext';
import useHttp from '../../hooks/useHttp';

const EditUser = () => {
  const { user } = useContext(AuthCotnext);
  const [response, setResponse] = useState();

  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };


  const { error, sendRequest } = useHttp(setResponse);

  const submitHandler = (e) => {
    e.preventDefault();

    sendRequest({
      endpoint: `/users/${user._id}`,
      method: 'PATCH',

      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: {
        name: values.name,
        email: values.email,
        password: values.password,
      },
    });
    if (!error) {
      navigate('/');
    }
  };

  return (
    <AddForm handler={submitHandler}>
      <h2>Edit Profile</h2>
      <AddFormInput
        element="input"
        name="name"
        type="text"
        label="Name"
        placeholder="Name"
        htmlFor="name"
        value={values.name}
        handler={changeHandler}
        requred={false}
      />

      <AddFormInput
        element="input"
        name="email"
        type="text"
        label="Email"
        placeholder="Email"
        htmlFor="email"
        value={values.name}
        handler={changeHandler}
      />

      <AddFormInput
        element="input"
        name="password"
        type="password"
        label="Old Password"
        placeholder="Old Password"
        htmlFor="password"
        value={values.name}
        handler={changeHandler}
      />

      <AddFormInput
        element="input"
        name="password"
        type="password"
        label="New Password"
        placeholder="New Password"
        htmlFor="password"
        value={values.name}
        handler={changeHandler}
      />

      <Button hover green rounded type="submit">
        Save Changes
      </Button>
    </AddForm>
  );
};

export default EditUser;
