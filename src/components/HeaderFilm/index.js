import './HeaderFilm.css';
import Stars from '../Stars';

function HeaderFilm({ data }) {
  const { image, genre, name, description } = data;
  return (
    <article
      className="slide"
      style={{
        backgroundImage: `linear-gradient(var(--overlay-color), var(--overlay-color)), url(${image})`,
      }}
    >
      <div className="genre">{genre}</div>
      <Stars count={5} />
      <h2>{name}</h2>
      <div className="genre"></div>
      <p>{description}</p>
    </article>
  );
}

export default HeaderFilm;
