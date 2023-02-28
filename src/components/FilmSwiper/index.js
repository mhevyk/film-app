import './FilmSwiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import ChevronArrow from '../ChevronArrow';
import Film from '../Film';
import { useId } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from 'swiper';
import { useCallback } from 'react';

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

function FilmSwiper({
  slides,
  slidesPerView = 1,
  isPagination = false,
  isAutoplay = false,
  spaceBetween = 15,
  onReachEnd = null,
  isZoom = true,
  ...otherProps
}) {
  const id = useId();

  const reachEndHandler = useCallback(
    (SwiperCore) => {
      if (SwiperCore.progress > 0.9) {
        onReachEnd?.();
      }
    },
    [onReachEnd]
  );

  return (
    <div data-id={id} className="swiper-container">
      <ChevronArrow direction="left" />
      <ChevronArrow direction="right" />
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={{
          nextEl: `[data-id='${id}'] .chevron-arrow__right`,
          prevEl: `[data-id='${id}'] .chevron-arrow__left`,
          disabledClass: 'chevron-arrow__disabled',
        }}
        speed={300}
        autoplay={
          isAutoplay && {
            delay: 5000,
            disableOnInteraction: true,
          }
        }
        pagination={
          isPagination && {
            clickable: false,
          }
        }
        className={slidesPerView > 1 ? 'blurred' : ''}
        onReachEnd={reachEndHandler}
        {...otherProps}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Film {...slide} isZoom={isZoom} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FilmSwiper;
