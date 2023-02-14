import Section from '../Section';
import FilmSwiper from '../FilmSwiper';
import { slides } from './slides';
import { useSlidesPerView } from '../../hooks/useSlidesPerView';

function FeatureTVShowSection() {
  const slidesPerView = useSlidesPerView({
    breakpointPeriod: 500,
    oneSlideBreakpoint: 650,
    lastSlideVisiblePercent: 20
  });

  return (
    <Section title="Featured TV shows" className="section__featured-tv-shows">
      <FilmSwiper
        slides={slides}
        slidesPerView={slidesPerView}
        spaceBetween={0}
      />
    </Section>
  );
}

export default FeatureTVShowSection;
