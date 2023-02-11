import './ChevronArrow.css';

import chevronLeftIcon from '../../assets/chevron-left.svg';
import chevronRightIcon from '../../assets/chevron-right.svg';

function ChevronArrow({ direction, isActionIcon = true }) {
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
    <span
      className={`chevron-arrow chevron-arrow__${direction} ${
        isActionIcon ? 'action-icon' : ''
      }`}
    >
      <img src={icon} alt={direction} />
    </span>
  );
}

export default ChevronArrow;
