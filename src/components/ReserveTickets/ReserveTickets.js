import { useContext, useEffect, useState } from 'react';

import styles from './ReserveTickets.module.css';

import { useNavigate } from 'react-router-dom';

import { AuthCotnext } from '../../contexts/AuthContext';

import setChangedValue from '../Utils/changeHandler';
import FormInput from '../AddForm/FormInput';
import Form from '../AddForm/Form';
import Panel from '../Panel/Panel';
import useHttp from '../../hooks/useHttp';
import Button from '../Button/Button';
import Table from '../Table/Table';

const ReserveTickets = () => {
  const { user } = useContext(AuthCotnext);

  const [tickets, setTickets] = useState([]);

  const [values, setValues] = useState({
    name: '',
  });

  const navigate = useNavigate();

  const { isLoading, error, sendRequest } = useHttp(setTickets);
  if (!user.isAdmin) {
    navigate('/');
  }

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    sendRequest({
      endpoint: `/tickets/search?name=${values.name}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });
  };

  const config = [
    { label: 'Name', render: (user) => user.movieName },
    { label: 'Username', render: (user) => user.userName },
    { label: 'Tickets Count', render: (user) => user.count },
    { label: 'Total', render: (user) => `$${user.total.toFixed(2)}` },
  ];

  return (
    <>
      <Form handler={submitHandler}>
        <FormInput
          element="input"
          type="text"
          htmlFor="name"
          placeholder="Name"
          name="name"
          value={values.name}
          handler={changeHandler}
          label="Name"
        />
        <Button rounded>Search</Button>
      </Form>
      <Panel>
        <Table data={tickets} config={config} />
      </Panel>
      ;
    </>
  );
};

export default ReserveTickets;
