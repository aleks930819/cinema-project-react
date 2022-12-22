import { useEffect, useState } from 'react';

const useLocalStorage = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setCurrentUser(foundUser);
    }
  }, []);
  return currentUser;
};

export default useLocalStorage;
