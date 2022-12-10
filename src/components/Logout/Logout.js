import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthCotnext } from '../../contexts/AuthContext';

import * as authService from '../../services/authServices';

const Logout = () => {
  const navigate = useNavigate();
  const {user,userLogout} = useContext(AuthCotnext);

  useEffect(() => {
    authService
      .logout(user.accessToken)
      .then(() => {
        userLogout();
        navigate('/');
      })
      .catch(() => {
        navigate('/');
      });
  });

  return null;
};

export default Logout;
