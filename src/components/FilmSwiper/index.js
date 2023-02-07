import './FilmSwiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import ChevronArrow from '../ChevronArrow';
import Film from '../Film';
import { useMemo } from 'react';
import { createId } from '../../helpers';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

function FilmSwiper({
  slides,
  slidesPerView = 1,
  isPagination = false,
  isAutoplay = false,
  ...otherProps
}) {
  const id = useMemo(() => createId(), []);

  return (
    <div data-id={id} className="swiper-container">
      <ChevronArrow direction="left" />
      <ChevronArrow direction="right" />
      <Swiper
        spaceBetween={8}
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
        {...otherProps}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Film {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FilmSwiper;
