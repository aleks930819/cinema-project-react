import { Link, useParams } from 'react-router-dom';
import { BsFillHeartFill } from 'react-icons/bs';

import { useContext, useEffect, useState } from 'react';

import styles from './DetailsCard.module.css';

import { AuthCotnext } from '../../contexts/AuthContext';
import * as movieService from '../../services/movieServices';

import FancyButton from '../Button/FancyButton';
import Reviews from '../Reviews/Reviews';



const DetailsCard = () => {
  const [movie, setMovie] = useState([]);
  const { user } = useContext(AuthCotnext);



  
  const { id } = useParams();
  
  useEffect(() => {
    movieService.getByID(id).then((movie) => setMovie(movie));
  }, [id]);
  
  console.log(movie.reviews);


  
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
              <p>
             
                Rating: {movie.rating}
              </p>
            </div>

            <div className={styles['details-buttons']}>
              <FancyButton to={`/ticket/${movie._id}`} >Tickets</FancyButton>
              {user.isAdmin && (
                <FancyButton to={`/edit/${movie._id}`}>Edit</FancyButton>
              )}

            </div>
          </div>
        </div>
      </div>
      <div className={styles['comments']}>
      {movie.reviews?.map((x) => <Reviews key={x._id} name={x.name} rating={x.rating} comment={x.comment}/>)}
      </div>


     
    </>
  );
};

export default DetailsCard;
