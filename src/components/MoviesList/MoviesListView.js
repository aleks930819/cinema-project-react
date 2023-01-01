import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './MoviesListView.module.css';


const MoviesListView = ({ movieName, movieId }) => {

  return (
    <div className={styles['movies-list-view']} id={movieId}>
      <div>
        <h2>{movieName}</h2>
      </div>

      <div className={styles['movies-list-icons']}>
      <Link to={`/edit/${movieId}`}>
        <FaRegEdit/>
      </Link>
      </div>
    </div>
  );
};
export default MoviesListView;
