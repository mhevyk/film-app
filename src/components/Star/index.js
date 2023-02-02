import styles from './Star.module.css';

import starFill from '../../assets/star-fill.png';
import starStroke from '../../assets/star-stroke.png';

function Star({ value, isFilled, onClick }) {
  const starStatus = isFilled ? 'filled' : 'stroked';
  return (
    <img
      className={`${styles.star} ${styles[starStatus]}`}
      src={isFilled ? starFill : starStroke}
      alt={`${starStatus} star`}
      data-value={value}
      onClick={onClick}
    ></img>
  );
}

export default Star;
