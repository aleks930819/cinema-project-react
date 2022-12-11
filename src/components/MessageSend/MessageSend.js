import styles from './MessageSend.module.css';

const MessageSend = () => {
    return (
        <div className={styles['message-send']}>
               <h2>Your message has benn send!</h2>
               <p>You will resirve a answer in the shortest time</p>
        </div>
    );
};

export default MessageSend;