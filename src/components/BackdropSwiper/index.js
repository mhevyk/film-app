import FilmSwiper from '../FilmSwiper';
import withFetch from '../../hocs/withFetch';

function BackdropSwiper({ response, ...otherProps }) {
  return (
    <FilmSwiper
      slides={response}
      effect="fade"
      speed={1000}
      slidesPerView={1}
      isPagination
      noSwiping
      noSwipingClass="swiper-slide"
      isZoom={false}
      {...otherProps}
    />
  );
}

export default withFetch(BackdropSwiper);
