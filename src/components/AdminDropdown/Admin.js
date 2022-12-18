import { useState } from 'react';
import AdminDropDown from './AdminDropdown';

const Admin = () => {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  };

  const options = [
    { label: 'Add Movie', value: '/add-movie' },
    { label: 'Add Cinema', value: '/add-cinema' },
    { label: 'Reserve Tickets', value: '/reserve-tickets' },
    { label: 'Users', value: '/users-list' },

  ];

  return <AdminDropDown options={options} onChange={handleSelection} buttonName={'Admin'} />;
};

export default Admin;
