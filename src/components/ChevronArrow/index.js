import './ChevronArrow.css';

import chevronLeftIcon from '../../assets/chevron-left.png';
import chevronRightIcon from '../../assets/chevron-right.png';

function ChevronArrow({ direction }) {
  let icon = null;
  switch (direction) {
    case 'right':
      icon = chevronRightIcon;
      break;
    case 'left':
    default:
      icon = chevronLeftIcon;
      break;
  }

  return (
    <div className={`chevron-arrow chevron-arrow__${direction}`}>
      <img src={icon} alt={direction} />
    </div>
  );
}

export default ChevronArrow;
