import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import * as movieService from '../../services/movieServices';

const DetailsCard = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    movieService.getByID(id).then((movie) => setMovie(movie));
  }, [id]);

  return (
    <>
      <div className="container-details">
        <div className="container-details-box">
          <div className="details-box">
            <img
              className="movie-details-img"
              src={movie.posterUrl}
              alt={movie.title}
            />
          </div>
          <div className="details-content">
            <h2 className="details-card-h2">{movie.title}</h2>
            <p className="details-card-budget">Runtime: {movie.runtime} min.</p>
            <p>Director: {movie.director}</p>
            <p>Actors: {movie.actors}</p>
            <p className="details-card-overview">{movie.plot}</p>
            <div className='details-buttons'>
              <Link  to='/tickets'>Tickets</Link>
              <Link  to='/edit'>Edit</Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
