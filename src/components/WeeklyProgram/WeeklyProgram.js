import ImageSlider from '../ImageSlider/ImageSlider';
import styles from './WeeklyProgram.module.css';


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