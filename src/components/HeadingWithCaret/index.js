import './HeadingWithCaret.css';
import ChevronArrow from '../ChevronArrow';

function HeadingWithCaret({ text, className, as = null, href = null }) {
  return (
    <h5 className={`section__title ${className}`}>
      {as === 'link' ? <a href={href}>{text}</a> : text}
      <ChevronArrow direction="right" isActionIcon={false} />
    </h5>
  );
}

export default HeadingWithCaret;
