import { useContext, useEffect, useState } from 'react';

import setChangedValue from '../Utils/changeHandler';

import AddForm from '../AddForm/AddForm';
import AddFormInput from '../AddForm/AddFormInput';

import Button from '../Button/Button';

import * as userServices from '../../services/userServices';
import { AuthCotnext } from '../../contexts/AuthContext';
import { Form, Navigate, useNavigate } from 'react-router-dom';

const EditUser = () => {
  const { user } = useContext(AuthCotnext);
  const navigate = useNavigate();

   const [image,setImage] = useState('');

  const [values, setValues] = useState({
    name: '',
    email: '',
  });

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append('image', file);

       fetch(`http://localhost:8000/api/users/${user._id}`, {
        method: 'PATCH',
        body:  formData
      })
      .then(res => res)
      .then(data => console.log(data)) ;

    //  const data = await response;

    //   console.log(data);
    //   setImage(response);


    
  };
  
  const submitHandler = (e) => {
    e.preventDefault();

    userServices
    .editUser(values, user._id, user.token,)
    .then((response) => response.json())
    .then((data) => navigate('/profile'))
    .catch((err) => err.message);
  };

  return (
    <AddForm handler={submitHandler}>
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
        name="email"
        type="text"
        label="Email"
        placeholder="Email"
        htmlFor="email"
        value={values.name}
        handler={changeHandler}
      />

      <input
        type="file"
        multiple
        accept="image/*"
        onChange={uploadFileHandler}
      />

      <Button type="submit">Save Changes</Button>
    </AddForm>
  );
};

export default EditUser;
