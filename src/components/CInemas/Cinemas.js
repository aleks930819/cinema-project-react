import styles from './Cinemas.module.css';

import CinemaCard from './CinemaCard';
import LoadingSpinner from '../Spinner/Spinner';
import { useGetCinemasQuery } from '../../store';

const Cinemas = () => {
  const { data: cinemas, error, isLoading } = useGetCinemasQuery();

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className={styles['cinemas-container']}>
          {cinemas?.map((x) => (
            <CinemaCard key={x._id} cinema={x} />
          ))}
        </div>
      )}
    </>
  );
};

export default Cinemas;
