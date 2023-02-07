import Section from '../Section';
import FilmSwiper from '../FilmSwiper';
import { slides } from './slides';
import { useSlidesPerView } from '../../hooks/useSlidesPerView';

function FeatureTVShowSection() {
  const slidesPerView = useSlidesPerView(500, 3.4);

  return (
    <Section title="Featured TV shows" className="section__featured-tv-shows">
      <FilmSwiper slides={slides} slidesPerView={slidesPerView} />
    </Section>
  );
}

export default FeatureTVShowSection;
