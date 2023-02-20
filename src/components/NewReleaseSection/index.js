import FilmSwiper from '../FilmSwiper';
import Section from '../Section';
import { slides } from './slides';
import { useSlidesPerView } from '../../hooks/useSlidesPerView';

function NewReleaseSection() {
  const slidesPerView = useSlidesPerView({
    breakpointPeriod: 300,
    lastSlideVisiblePercent: 35,
  });

  return (
    <Section title="New Releases" className="section__new-releases">
      <FilmSwiper slides={slides} slidesPerView={slidesPerView} />
    </Section>
  );
}

export default NewReleaseSection;