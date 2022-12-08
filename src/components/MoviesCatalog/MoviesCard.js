import { Link } from 'react-router-dom';



const MoviesCard = ({ movie }) => {

  return (

    <Link to={`/details/${movie.id}`}>
      <div key={movie.id} id={movie.id} className="movie-card">
        <img
          className="movie-card-img"
          src={movie.posterUrl}
          alt="poster"
        />
      </div>
    </Link>

  );
};

export default MoviesCard;
