import './Section.css';
import SwiperButton from '../SwiperButton';

function Section({ title, children, className }) {
  return (
    <section className={`section container ${className}`}>
      <h5 className="section__title">
        {title}
        <SwiperButton variant="next" isInline={true} />
      </h5>
      {children}
    </section>
  );
}

export default Section;
