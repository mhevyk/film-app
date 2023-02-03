import './Swiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper';
import { Swiper as SwiperWrapper, SwiperSlide } from 'swiper/react';
import SwiperButton from '../SwiperButton';

function Swiper({ slides, isPagination = false, SlideItem }) {
  const modules = [Navigation, Pagination];

  return (
    <div className="swiper-container">
      <SwiperButton variant="prev" />
      <SwiperButton variant="next" />
      <SwiperWrapper
        modules={modules}
        spaceBetween={50}
        navigation={{
          nextEl: '.swiper-button__next',
          prevEl: '.swiper-button__prev',
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
