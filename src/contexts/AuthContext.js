import { createContext, useContext, useState } from 'react';

export const AuthCotnext = createContext();



export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const userLogin = (authData) => {
    setAuth(authData);
  };

  const userLogout = () => {
    setAuth({});
  };
  return (
    <AuthCotnext.Provider value={{ auth, userLogin, userLogout }}>
      {children}
    </AuthCotnext.Provider>
  );
};

export const useAuthContext = () => {
  const authState = useContext(AuthCotnext);

  return authState;
};
