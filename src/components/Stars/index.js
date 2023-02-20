import { useState } from 'react';
import Star from '../Star';

function Stars({ count, initialRating = 0, ...otherProps }) {
  const [rating, setRating] = useState(initialRating);

  const clickHandler = (event) => {
    const value = Number(event.target.dataset.value);
    setRating(value);
  };

  return (
    <div {...otherProps}>
      {[...Array(count).keys()].map((index) => (
        <Star
          key={index}
          value={index + 1}
          isFilled={index + 1 <= rating}
          onClick={clickHandler}
        />
      ))}
    </div>
  );
}

export default Stars;