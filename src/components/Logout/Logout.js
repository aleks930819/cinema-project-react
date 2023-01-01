import { useNavigate } from 'react-router-dom';

import { useContext, useEffect } from 'react';

import { AuthCotnext } from '../../contexts/AuthContext';
import useHttp from '../../hooks/useHttp';

const Logout = () => {
  const navigate = useNavigate();
  const { user, userLogout } = useContext(AuthCotnext);

  const {sendRequest } = useHttp(userLogout);

  useEffect(() => {
    sendRequest({
      endpoint: '/users/logout',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });

    localStorage.clear();
    navigate('/');
  });


  return null;
};

export default Logout;
