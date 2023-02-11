import styles from './Star.module.css';

import starFill from '../../assets/star-fill.svg';
import starStroke from '../../assets/star-stroke.svg';

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
