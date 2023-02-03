import Swiper from '../Swiper';
import NewReleasesFilm from '../NewReleasesFilm';
import Section from '../Section';
import { slides } from './slides';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function NewReleasesSection() {
  const { width } = useWindowDimensions();
  const slidesPerView = width < 500 ? 1 : Math.round(width / 300) + 0.4;

  return (
    <Section title="New Releases" className="section__new-releases">
      <Swiper
        slides={slides}
        SlideItem={NewReleasesFilm}
        slidesPerView={slidesPerView}
      />
    </Section>
  );
}

export default NewReleasesSection;
