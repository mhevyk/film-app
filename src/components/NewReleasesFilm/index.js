import './NewReleasesFilm.css';
import Stars from '../Stars';
import Genre from '../Genre';

function NewReleasesFilm({ data }) {
  const { name, image, genre } = data;
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(var(--overlay-color), var(--overlay-color)), url(${image})`,
      }}
      className="film__card new-releases__slide background-cover"
    >
      <article className="film__card">
        <Genre text={genre} className="card__item" />
        <Stars count={5} className="card__item film__stars" />
        <h2 className="card__item film__name">{name}</h2>
      </article>
    </div>
  );
}

export default NewReleasesFilm;
