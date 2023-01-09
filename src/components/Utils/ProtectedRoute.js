import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthCotnext } from '../../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthCotnext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isAdmin) {
      navigate('/');
    }
  }, [user, navigate]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default ProtectedRoute;
