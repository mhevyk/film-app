import styles from './Genre.module.css';

function Genre({ text, className }) {
  return <div className={`${className} ${styles.badge}`}>{text}</div>;
}

export default Genre;
