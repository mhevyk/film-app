import React from 'react';
import FilmSwiper from '../FilmSwiper';

function FadeSwiper({ slides, ...otherProps }) {
  return (
    <FilmSwiper
      slides={slides}
      effect="fade"
      speed={1000}
      slidesPerView={1}
      isPagination={true}
      noSwiping={true}
      noSwipingClass="swiper-slide"
      {...otherProps}
    />
  );
}

export default FadeSwiper;
