import './Star.css';
import starFill from '../../assets/star-fill.svg';
import starStroke from '../../assets/star-stroke.svg';
import { memo } from 'react';

function Star({ value, isFilled, onClick }) {
  return (
    <img
      className="star"
      src={isFilled ? starFill : starStroke}
      alt={`Rating ${isFilled ? 'filled' : 'stroked'} star`}
      data-value={value}
      onClick={onClick}
    />
  );
}

export default memo(Star);
