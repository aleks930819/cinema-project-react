import { useContext, useEffect, useState } from 'react';

import styles from './ReserveTickets.module.css';

import { useNavigate } from 'react-router-dom';

import { AuthCotnext } from '../../contexts/AuthContext';

import setChangedValue from '../Utils/changeHandler';
import FormInput from '../AddForm/FormInput';
import Form from '../AddForm/Form';
import Panel from '../Panel/Panel';
import Button from '../Button/Button';
import Table from '../Table/Table';
import { useGetTicketsQuery } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { searchForUserTickets } from '../../features/searchTickets';
import LoadingSpinner from '../Spinner/Spinner';

const ReserveTickets = () => {
  const { user } = useContext(AuthCotnext);
  const userToken = user.token;
  const { searchQuery } = useSelector((state) => state.searchTicket);

  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: '',
  });

  const {
    data: tickets,
    error,
    isLoading,
  } = useGetTicketsQuery({ userToken, searchQuery });

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(searchForUserTickets(values.name));
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
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Table data={tickets} config={config} />
        )}
      </Panel>
      ;
    </>
  );
};

export default ReserveTickets;
