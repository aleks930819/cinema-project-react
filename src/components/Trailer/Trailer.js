import { Link, Navigate, useParams } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import './Trailer.css';
import Video from './Video';
import { useContext, useRef } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
import Dialog from '../Dialog/Dialog';

const Trailer = ({movieId,closeTrailerHandler}) => {

  const movies = useContext(MovieContext);
  const filterMovie = movies.filter((m) => m._id === movieId);
  const trailer = filterMovie[0].trailer.split('=');
  const trailerRef = useRef();


  const handler = () => {
    closeTrailerHandler();
  };

  return (
    // <div className="trailer-box" ref={trailerRef} onClick={handler}>
    //   <div className="trailer-btn">
    //     <Link to="/weekly-program">
    //       <IoIosClose className="trailer-icon" />
    //     </Link>
    //   </div>
    //   <div >
    <div ref={trailerRef} onClick={handler}  >

      <Dialog>
        <Video embed={trailer[1]} />
      </Dialog>
    </div>

    //   {/* </div>
    // </div> */}
  );
};

export default Trailer;
