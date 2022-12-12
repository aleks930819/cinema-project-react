
import styles from './WeeklyProgram.module.css';

import ImageSlider from '../ImageSlider/ImageSlider';


const WeeklyProgram = () => {
  return (
    <>
    <ImageSlider/>
     
    <div className={styles['weekly-program']}>
      <h2>04.12.2022 - 10.12.2022</h2>
    </div>
    </>
  );

};


export default WeeklyProgram;