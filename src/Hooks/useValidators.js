import { useState } from 'react';

const useValidators = ({ email, password, repassword,text }) => {
  const [message, setMessage] = useState('');

  const checkEmail = () => {
    let pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (email === '') {
      setMessage('Invalid email!');
    }
    if (!pattern.test(email.trim())) {
      setMessage('Invalid email!');
    } else {
      setMessage('');
    }
  };

  const checkPassword = () => {
    if (6 > password.length) {
      setMessage('Password must be at least 6 characters');
    } else {
      setMessage('');
    }
  };

  const checkRepassword = () => {
    if (6 > password.length) {
      setMessage('Password must be at least 6 characters');
    } else if (password !== repassword) {
      setMessage('Password dont match!');
    } else {
      setMessage('');
    }
  };

  const checkMessage = () => {
    if ( 20 > text.length) {
      setMessage('Message must be at least 20 characters');
    } else if (0  === text.length) {
      setMessage('Please enter a message');
    } else {
      setMessage('');
    }
  };

  return {
    checkEmail,
    checkPassword,
    checkRepassword,
    checkMessage,
    message,
    setMessage
  };
};

export default useValidators;
