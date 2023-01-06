import styles from './Cinemas.module.css';

const CinemaCard = ({ cinema }) => {
  return (
    <div className={styles['cinema-card']}>
      <div className={styles['cinema-img']}>
        <img src={cinema.imgUrl} alt={cinema.name} />
      </div>
      <div className={styles['cinema-content']}>
        <h2>{cinema.name}</h2>
        <p>{cinema.features}</p>
        <p>City: {cinema.city}</p>
        <p>Location: {cinema.location}</p>
        <p>Phone: +{cinema.phone}</p>
      </div>
    </div>
  );
};

export default CinemaCard;
