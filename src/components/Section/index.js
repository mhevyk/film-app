import './Section.css';
import ChevronArrow from '../ChevronArrow';

function Section({ title, children, className }) {
  return (
    <section className={`section ${className}`}>
      <h5 className="section__title">
        {title}
        <ChevronArrow direction="right" isActionIcon={false} />
      </h5>
      {children}
    </section>
  );
}

export default Section;
