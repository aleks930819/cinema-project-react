import { Link, useParams } from 'react-router-dom';
import { BsFillHeartFill } from 'react-icons/bs';

import { useContext, useEffect, useState } from 'react';

import styles from './DetailsCard.module.css';

import { AuthCotnext } from '../../contexts/AuthContext';
import * as movieService from '../../services/movieServices';

import FancyButton from '../Button/FancyButton';


const DetailsCard = () => {
  const [movie, setMovie] = useState([]);
  const [likeCounts,setLikeCounts] = useState(0);
  const { user } = useContext(AuthCotnext);


  const { id } = useParams();

  useEffect(() => {
    movieService.getByID(id).then((movie) => setMovie(movie));
  }, [id]);

  // TODO add likes button logic

  movieService.getLikes().then((result) => setLikeCounts(result.length));
  console.log(likeCounts);


  const likeButtonClick = () => {
    

    // movieService.like(user.email, user.accessToken,movie._id)
    //     .then((result) => console.log(result));
    
    // movieService.getLikes().then((result) => console.log(result.user));
  

  //   let likes = [...movie.likes, user._id];
  //   if (movie.likes.includes(user._id)) {
  //     return;
  //   }
   
  //   movieService.like(movie, user.accessToken)
  //     .then((result) => console.log(result));
  };

  
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
                <span  onClick={likeButtonClick} className={styles['details-icon']}>
                  <BsFillHeartFill />
                </span>
                Likes: {likeCounts}
              </p>
            </div>

            <div className={styles['details-buttons']}>
              <FancyButton to="/tickets">Tickets</FancyButton>
              {user.email === 'admin@abv.bg' && (
                <FancyButton to={`/edit/${movie._id}`}>Edit</FancyButton>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
