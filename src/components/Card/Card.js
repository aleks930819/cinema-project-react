import styles from './Card.module.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Trailer from '../Trailer/Trailer';

const Card = ({ movie }) => {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const openTrailerHandler = () => {
    setIsTrailerOpen(true);
  };

  const closeTrailerHandler = () => {
    setIsTrailerOpen(false);
  };

  return (
    <div className="moveInRight">
      {isTrailerOpen && (
        <Trailer
          movieId={movie._id}
          closeTrailerHandler={closeTrailerHandler}
        />
      )}
      <div className={styles.card}>
        <div className={styles.content}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>

          <Link
            to={`/ticket/${movie._id}`}
            className={styles['card-box-btn']}
            href="#"
          >
            <span>Tickets</span>
          </Link>
          <Link onClick={openTrailerHandler} className={styles['card-box-btn']}>
            <span>Trailer</span>
          </Link>
        </div>
        <img
          className={styles['card-image']}
          src={movie.poster}
          alt={movie.title}
        />
      </div>
    </div>
  );
};

export default Card;
