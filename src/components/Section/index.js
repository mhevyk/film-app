import './Section.css';
import WithChevronRight from '../WithChevronRight';

function Section({ title, children, className }) {
  return (
    <section className={`section ${className}`}>
      <WithChevronRight>
        <h5 className="section__title">{title}</h5>
      </WithChevronRight>
      <div className="section__content">{children}</div>
    </section>
  );
}

export default Section;
