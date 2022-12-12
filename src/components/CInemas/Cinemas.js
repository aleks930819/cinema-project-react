import { useEffect, useState } from 'react';

import styles from './Cinemas.module.css';

import * as cinemaServices from '../../services/cinemaServices';
import CinemaCard from './CinemaCard';


const Cinemas = () => {

    const [cinemas,setCinemas] = useState([]);



    useEffect(() => {
     cinemaServices.getAll().then((cinemas) => {
      setCinemas(Object.values(cinemas));
     });
    },[]);



    return (
        
        <div className={styles['cinemas-container']}>
          {cinemas.map((x) => <CinemaCard key={x._id} cinema={x} />)}
 
        </div>
    );

};

export default Cinemas;