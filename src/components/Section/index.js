import HeadingWithCaret from '../HeadingWithCaret';

function Section({ title, children, className }) {
  return (
    <section className={`section ${className}`}>
      <HeadingWithCaret text={title} />
      {children}
    </section>
  );
}

export default Section;
