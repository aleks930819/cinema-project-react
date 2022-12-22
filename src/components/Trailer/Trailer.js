import { Link, useParams } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

import './Trailer.css';
import Video from './Video';
import { useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';

const Trailer = () => {
  const { id } = useParams();
  const movies = useContext(MovieContext);
  const filterMovie = Object.values(movies)[0].filter((m) => m._id === id);
  const trailer = filterMovie[0].trailer.split('=');

  return (
    <div className="trailer-box">
      <div className="trailer-btn">
        <Link to="/weekly-program">
          <FaAngleLeft className="trailer-icon" />
        </Link>
      </div>
      <Video embed={trailer[1]} />
    </div>
  );
};

export default Trailer;
