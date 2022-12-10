import styles from './Footer.module.css';

import { BsFacebook,BsTwitter,BsInstagram,BsYoutube } from "react-icons/bs";



const Footer = () => {

  return (
    <footer className={styles.footer}>
     <h3>Alex &copy; All Rights Reserved 2022</h3>

      <div className={styles['footer-links']}>
           <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
           </ul>
      </div>

      <div className={styles['footer-links']}>
           <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
           </ul>
      </div>
      <div className={styles['footer-icons']}>
           <ul>
               <p>Follow Us</p>
              <BsFacebook/>
              <BsTwitter/>
              <BsInstagram/>
              <BsYoutube/>
           </ul>
           </div>
    </footer>




  );
};

export default Footer;
