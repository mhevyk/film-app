import styles from './FetchError.module.css';

function FetchError({ error }) {
  let errorText = null;
  switch (error.code) {
    case 'ECONNABORTED':
      errorText = 'Bad internet connection';
      break;
    default:
      errorText = error.message;
      break;
  }
  console.log(error);
  return <div className={styles.error}>{errorText}</div>;
}

export default FetchError;
