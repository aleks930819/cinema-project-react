import { createContext, useContext, useEffect, useState } from 'react';

export const AuthCotnext = createContext();


export const AuthProvider = ({ children }) => {
  
  const [auth, setAuth] = useState({});

  const userLogin = (authData) => {
    setAuth(authData);
  };

  const userLogout = () => {
    setAuth({});
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setAuth(foundUser);
    }
  }, []);


  return (
    <AuthCotnext.Provider value={{ user:auth, userLogin, userLogout }}>
      {children}
    </AuthCotnext.Provider>
  );
};

export const useAuthContext = () => {
  const authState = useContext(AuthCotnext);

  return authState;
};
