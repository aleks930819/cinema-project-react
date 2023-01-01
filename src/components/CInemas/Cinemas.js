import { useEffect, useState } from 'react';

import styles from './Cinemas.module.css';

import CinemaCard from './CinemaCard';
import useHttp from '../../hooks/useHttp';
import LoadingSpinner from '../Spinner/Spinner';

const Cinemas = () => {
  const [cinemas, setCinemas] = useState([]);

  const { isLoading, error, sendRequest } = useHttp(setCinemas);

  useEffect(() => {
    sendRequest({ endpoint: '/cinemas' });
  }, [sendRequest]);

  return (
    <div className={styles['cinemas-container']}>
      {cinemas.map((x) => (
        <CinemaCard key={x._id} cinema={x} />
      ))}
    </div>
  );
};

export default Cinemas;
