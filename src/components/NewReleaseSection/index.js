import Section from '../Section';
import FilmSwiper from '../FilmSwiper';
import useSlidesPerView from '../../hooks/useSlidesPerView';
import useNextSlides from '../../hooks/useNextSlides';
import { FILM_API_NEW_RELEASES_URL } from '../../api';
import FetchError from '../FetchError';
import Loader from '../Loader';

function NewReleaseSection() {
  const slidesPerView = useSlidesPerView({
    breakpointPeriod: 300,
    lastSlideVisiblePercent: 35,
  });

  const { slides, error, loading, fetchNextSlides } = useNextSlides(
    FILM_API_NEW_RELEASES_URL
  );

  return (
    <Section title="New Releases" className="section__new-releases">
      {slides && (
        <FilmSwiper
          slides={slides}
          slidesPerView={slidesPerView}
          onReachEnd={fetchNextSlides}
        />
      )}
      {error && <FetchError error={error} />}
      {loading && <Loader />}
    </Section>
  );
}

export default NewReleaseSection;
