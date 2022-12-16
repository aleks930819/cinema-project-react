import styles from './Card.module.css';
import blackadam from './blackadam.png';
import wolverine from './wolverine.png';
import batman from './batman.png';
import { Link } from 'react-router-dom';

const Card = ({movie}) => {
  return (
    <div>
    
      <div className={styles.card}>
        <div className={styles.content}>
          <h2>{movie.title}</h2>
          <p>
            {movie.overview}
          </p>
       
          <Link    to={`/ticket/${movie._id}`}   className={styles['card-box-btn']} href="#"><span>Tickets</span></Link>
          <a  className={styles['card-box-btn']} href="#"><span>Trailer</span></a>

        </div>

        <img className={styles['card-image']} src={movie.poster} alt="hero" />
      </div>

      {/* <div className={styles['card']}>
        <div className={styles.content}>
          <h2>The Wolverine</h2>
          <p>
            Wolverine comes to Japan to meet an old friend whose life he saved
            years ago, and gets embroiled in a conspiracy involving yakuza and
            mutants.
          </p>
          <a  className={styles['card-box-btn']} href="#"><span>Tickets</span></a>
          <a  className={styles['card-box-btn']} href="#"><span>Trailer</span></a>

        </div>

        <img className={styles['card-image']} src={wolverine} alt="hero" />
      </div>

      <div className={styles['card']}>
        <div className={styles.content}>
          <h2>The Batman</h2>
          <p>
            When a sadistic serial killer begins murdering key political figures
            in Gotham, Batman is forced to investigate the city's hidden
            corruption and question his family's involvement.
          </p>
          <a  className={styles['card-box-btn']} href="#"><span>Tickets</span></a>
          <a  className={styles['card-box-btn']} href="#"><span>Trailer</span></a>


        </div>

        <img className={styles['card-image']} src={batman} alt="hero" />
      </div> */}
    </div>
  );
};

export default Card;
