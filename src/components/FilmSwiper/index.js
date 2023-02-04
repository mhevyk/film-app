import './FilmSwiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useMemo } from 'react';
import { createId } from '../../helpers';
import ChevronArrow from '../ChevronArrow';
import Film from '../Film';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function FilmSwiper({ slides, slidesPerView = 1, isPagination = false }) {
  const modules = [Navigation, Pagination];
  const id = useMemo(() => createId(), []);

  return (
    <div data-id={id} className="swiper-container">
      <ChevronArrow direction="left" />
      <ChevronArrow direction="right" />
      <Swiper
        modules={modules}
        spaceBetween={8}
        slidesPerView={slidesPerView}
        navigation={{
          nextEl: `[data-id='${id}'] .chevron-arrow__right`,
          prevEl: `[data-id='${id}'] .chevron-arrow__left`,
          disabledClass: 'chevron-arrow__disabled',
        }}
        pagination={
          isPagination && {
            clickable: true,
          }
        }
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
