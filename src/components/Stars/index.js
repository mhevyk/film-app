import { useCallback, useState } from 'react';
import { createNaturalSequence } from '../../utils';
import Star from '../Star';

function Stars({ count = 5, initialRating = 0, ...props }) {
  const [rating, setRating] = useState(initialRating);
  const starPositions = createNaturalSequence(count);

  const clickHandler = useCallback((event) => {
    const value = Number(event.target.dataset.value);
    setRating(value);
  }, []);

  return (
    <div {...props}>
      {starPositions.map((starPosition) => (
        <Star
          key={starPosition}
          value={starPosition}
          isFilled={starPosition <= rating}
          onClick={clickHandler}
        />
      ))}
    </div>
  );
}

export default Stars;
