import { useContext, useState } from 'react';

import setChangedValue from '../Utils/changeHandler';

import AddForm from '../AddForm/AddForm';
import AddFormInput from '../AddForm/AddFormInput';

import Button from '../Button/Button';

import * as userServices  from '../../services/userServices';
import { AuthCotnext } from '../../contexts/AuthContext';

const EditUser = () => {

  const { user } = useContext(AuthCotnext);
  console.log(user.accessToken);

  const [values, setValues] = useState({
    username: '',
    email: '',
  });

 const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };

   const submitHandler = (e) => {
    e.preventDefault();


    userServices.editUser(user.accessToken)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => err.message);
  };

  return (
    <AddForm handler={submitHandler}>

 <AddFormInput
        element="input"
        name="username"
        type="text"
        label="Username"
        placeholder="Username"
        htmlFor="username"
        value={values.name}
        handler={changeHandler}
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


      <Button type='submit'>Save Changes</Button>
    </AddForm>
      
  );
};

export default EditUser;
