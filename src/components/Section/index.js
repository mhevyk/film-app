import WithCaretAfter from '../WithCaret';

function Section({ title, children, className }) {
  return (
    <section className={`section ${className}`}>
      <WithCaretAfter>
        <h5 className={`section__title`}>{title}</h5>
      </WithCaretAfter>
      {children}
    </section>
  );
}

export default Section;
