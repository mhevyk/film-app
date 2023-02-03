import styles from './Star.module.css';

import starFill from '../../assets/star-fill.png';
import starStroke from '../../assets/star-stroke.png';

function Star({ value, isFilled, onClick }) {
  return (
    <img
      className={styles.star}
      src={isFilled ? starFill : starStroke}
      alt={`${isFilled ? 'filled' : 'stroked'} star`}
      data-value={value}
      onClick={onClick}
    />
  );
}

export default Star;
