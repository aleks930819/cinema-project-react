import { Link } from 'react-router-dom';



const MoviesCard = ({ movie }) => {
console.log(movie._id);
  return (

    <Link to={`/details/${movie._id}`}>
      <div key={movie._id} id={movie._id} className="movie-card">
        <img
          className="movie-card-img"
          src={movie.poster}
          alt="poster"
        />
      </div>
    </Link>

  );
};

export default MoviesCard;
