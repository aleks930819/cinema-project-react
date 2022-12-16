import styles from './Reviews.module.css';

const Reviews = ({name,rating,comment}) => {
  return (
    <div className={styles.reviews}>
      <div className={styles['reviews-content']}>
        <div className={styles['reviews-name']}>
          <h2>{name}:</h2>
          <p>Rating: {rating}</p>
        </div>
        <div className={styles['reviews-comment']}>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
