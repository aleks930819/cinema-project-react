import styles from './MessageSend.module.css';

const MessageSend = () => {
    return (
        <div className={styles['message-send']}>
               <h2>Your message has successfully  sent!</h2>
               <p>You will resirve an answer as soon as possible </p>
        </div>
    );
};

export default MessageSend;