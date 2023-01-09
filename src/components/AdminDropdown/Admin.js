import { useState } from 'react';
import DropDown from './Dropdown';

const Admin = () => {
  const options = [
    { label: 'Add Movie', value: '/add-movie' },
    { label: 'Add Cinema', value: '/add-cinema' },
    { label: 'Reserve Tickets', value: '/reserve-tickets' },
    { label: 'Users', value: '/users-list' },
    { label: 'Movies', value: '/movies-list' },
    { label: 'Cinemas', value: '/cinemas-list' },
  ];

  return <DropDown options={options} buttonName={'Admin'} />;
};

export default Admin;
