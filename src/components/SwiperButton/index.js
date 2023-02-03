import './SwiperButton.css';

import swiperPrevIcon from '../../assets/chevron-left.png';
import swiperNextIcon from '../../assets/chevron-right.png';

function SwiperButton({ variant, isInline = false }) {
  let icon = null;
  switch (variant) {
    case 'next':
      icon = swiperNextIcon;
      break;
    case 'prev':
    default:
      icon = swiperPrevIcon;
      break;
  }

  return (
    <div className={`swiper-button swiper-button__${variant} ${isInline ? 'inline' : ''}`}>
      <img src={icon} alt={variant} />
    </div>
  );
}

export default SwiperButton;
