import './Section.css';
import SwiperButton from '../SwiperButton';

function Section({ title, children, className }) {
  return (
    <section className={`section ${className} container`}>
      <h5 className="section__title">
        {title}
        <SwiperButton variant="next" />
      </h5>
      {children}
    </section>
  );
}

export default Section;
