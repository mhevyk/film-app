import './Genre.css';

function Genre({ genre, className }) {
  return <div className={`genre ${className}`}>{genre}</div>;
}

export default Genre;
