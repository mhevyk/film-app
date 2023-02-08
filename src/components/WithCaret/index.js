import './WithCaret.css';
import ChevronArrow from '../ChevronArrow';

function WithCaret({ children, className }) {
  return (
    <div className={`with-caret-container ${className}`}>
      {children}
      <ChevronArrow direction="right" isActionIcon={false} />
    </div>
  );
}

export default WithCaret;
