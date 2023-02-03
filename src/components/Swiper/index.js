import './Swiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper';
import { Swiper as SwiperWrapper, SwiperSlide } from 'swiper/react';
import SwiperButton from '../SwiperButton';
import { createId } from '../../helpers';
import { useMemo } from 'react';

function Swiper({
  slides,
  slidesPerView = 1,
  isPagination = false,
  SlideItem,
}) {
  const modules = [Navigation, Pagination];
  const id = useMemo(() => createId(), []);

  return (
    <div data-id={id} className="swiper-container">
      <SwiperButton variant="prev" />
      <SwiperButton variant="next" />
      <SwiperWrapper
        modules={modules}
        spaceBetween={8}
        slidesPerView={slidesPerView}
        navigation={{
          nextEl: `[data-id='${id}'] .swiper-button__next`,
          prevEl: `[data-id='${id}'] .swiper-button__prev`,
          disabledClass: 'swiper-button__disabled',
        }}
        pagination={{
          enabled: isPagination,
          clickable: true,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideItem data={slide} />
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </div>
  );
}

export default Swiper;
