import { useNavigate } from 'react-router-dom';

import { useContext, useState } from 'react';

import styles from './AddCinema.module.css';

import { AuthCotnext } from '../../contexts/AuthContext';
import Button from '../Button/Button';


const AddMovie = () => {
    const navigate = useNavigate();
  
    const {user} = useContext(AuthCotnext);
  
    
  
  
    const [values, setValues] = useState({
      title: '',
      director: '',
      actors: '',
      poster: '',
      overview: '',
      runtime: '',
    });
  
  
  
    const changeHandler = (e) => {
      setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
      e.value = e.target.value;
    };
  
    const submitHandler = (e) => {
      e.preventDefault();
      addMovie(values,user.accessToken)
        .then((response) => response.json())
        .then((data) => navigate(`/details/${data._id}`))
        .catch((err) => err.message);
        
    };
  
    return (
      <div className={styles['add-cinema']}>
        <form className={styles['add-cinema-form']} onSubmit={submitHandler}>
         
       
  
  
        
  
          <div>
            <label id="overview">Overview</label>
            <textarea
              type="textarea"
              htmlFor="overview"
              name="overview"
              rows="6"
              onChange={changeHandler}
              value={values.overview}
              placeholder="Overview"
              required
            ></textarea>
          </div>
          <div>
            <Button>Add Movie</Button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AddMovie;
  