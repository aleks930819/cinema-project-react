import { createContext, useState } from 'react';

export const AuthCotnext = createContext();

const initialState = {
  _id: '',
  email: '',
  accesstoken: '',
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const userLogin = (authData) => {
    setAuth(authData);
  };

  const userLogout = () => {
    setAuth({});
  };
  return (
    <AuthCotnext.Provider value={{ auth,userLogin,userLogout}}>{children}</AuthCotnext.Provider>
  );
};
