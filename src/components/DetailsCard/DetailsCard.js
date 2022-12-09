import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './DetailsCard.module.css';
import { BsFillHeartFill } from 'react-icons/bs';

import * as movieService from '../../services/movieServices';

const DetailsCard = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    movieService.getByID(id).then((movie) => setMovie(movie));
  }, [id]);

  return ( 
    <>
      <div className={styles['container-details']}>
        <div className={styles['container-details-box']}>
          <div>
            <img
              className={styles['movie-details-img']}
              src={movie.poster}
              alt={movie.title}
            />
          </div>
          <div className={styles['details-content']}>
            <h2 className={styles['details-card-title']}>{movie.title}</h2>
            <p>Runtime: {movie.runtime} min.</p>
            <p>Director: {movie.director}</p>
            <p>Actors: {movie.actors}</p>
            <p>{movie.overview}</p>
            <div className={styles['details-likes']}>
            <p><span className={styles['details-icon']}><BsFillHeartFill/></span>Likes: {movie.likes}</p>
            </div>

            <div className={styles['details-buttons']}>
              <Link to="/tickets">Tickets</Link>
              <Link to={`/edit/${movie._id}`}>Edit</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
