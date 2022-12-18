import { useContext } from 'react';

import { AuthCotnext } from '../../contexts/AuthContext';
import Button from '../Button/Button';

import styles from './UserProfile.module.css';

const UserProfile = () => {
  const { user } = useContext(AuthCotnext);
 
  return (
    <div className={styles['user-box']}>
      <div className={styles['user-box-container']}>
        <div className={styles['user-img']}>
        <img  src={user.photo} alt='profile'/>
        </div>

        <div className={styles['user-content']}>
          <h2>Name: {user.name}</h2>
          <h2>Email: {user.email}</h2>
          <div className={styles['user-button']}>
            <Button to='/profile/edit'>Edit</Button>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default UserProfile;
