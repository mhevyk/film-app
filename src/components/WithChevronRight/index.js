import './WithChevronRight.css';
import ChevronArrow from '../ChevronArrow';

function WithChevronRight({ className, children }) {
  return (
    <div className={`with-chevron-container ${className || ''}`}>
      {children}
      <ChevronArrow direction="right" isActionIcon={false} />
    </div>
  );
}

export default WithChevronRight;
