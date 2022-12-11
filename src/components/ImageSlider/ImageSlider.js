import { useEffect, useState } from 'react';
import styles from './ImageSlider.module.css';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const images = [
  'https://i.pinimg.com/236x/d0/a6/dd/d0a6ddb16e0af1f29c64fca802e0c0c4.jpg',
  'https://i.pinimg.com/236x/57/64/3a/57643a75fc83aa37be9035cf57c2f15c.jpg',
  'https://i.pinimg.com/236x/1f/9a/fa/1f9afa50899bbc289844b20d992f5f4f.jpg',
  'https://i.pinimg.com/236x/9a/2d/1b/9a2d1bcc06620b5997e4ae08f20ca8b6.jpg'
];

const ImageSlider = () => {
  let [current, setCurrent] = useState(0);
  const length = images.length;

    useEffect(() => {
      const interval = setInterval(() => {
        let newImage = current++;
        if (newImage >= length) {
          newImage = 0;
        }
        setCurrent(newImage);
      }, 2000);
      return () => clearInterval(interval);
    }, [current,length]);

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };
  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className={styles.slider}>
      {/* <BiChevronLeft className={styles['left-arrow']} onClick={prevSlide} />
      <BiChevronRight className={styles['right-arrow']} onClick={nextSlide} /> */}

      {/* <img className={styles.image} src={images[current]} alt='hero' /> */}

      <div
        className={styles.image}
        style={{ backgroundImage: `url(${images[current]})` }}
      ></div>
    </div>
  );
};

export default ImageSlider;
