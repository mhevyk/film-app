import Section from '../Section';
import FilmSwiper from '../FilmSwiper';
import useSlidesPerView from '../../hooks/useSlidesPerView';
import useNextSlides from '../../hooks/useNextSlides';
import { FILM_API_POPULAR_TV_SHOWS_URL } from '../../api';
import FetchError from '../FetchError';
import Loader from '../Loader';

function FeatureTVShowSection() {
  const slidesPerView = useSlidesPerView({
    breakpointPeriod: 500,
    oneSlideBreakpoint: 650,
    lastSlideVisiblePercent: 20,
  });
  
  const { slides, error, loading, fetchNextSlides } = useNextSlides(
    FILM_API_POPULAR_TV_SHOWS_URL
  );

  return (
    <Section title="Featured TV shows" className="section__featured-tv-shows">
      {slides && (
        <FilmSwiper
          slides={slides}
          slidesPerView={slidesPerView}
          spaceBetween={0}
          onReachEnd={fetchNextSlides}
        />
      )}
      {error && <FetchError error={error} />}
      {loading && <Loader />}
    </Section>
  );
}

export default FeatureTVShowSection;
