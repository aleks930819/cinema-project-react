import { Link } from 'react-router-dom';

import styles from './Movie.module.css';




const MoviesCard = ({ movie }) => {
  return (
    <Link to={`/details/${movie._id}`}>
      <div key={movie._id} id={movie._id} className={styles['movie-card']}>
        <img
          className={styles['movie-card-img']}
          src={movie.poster}
          alt="poster"
        />
      </div>
    </Link>

  );
};

export default MoviesCard;
