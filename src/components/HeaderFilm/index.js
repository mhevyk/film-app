import './HeaderFilm.css';
import Stars from '../Stars';
import Button from '../Button';
import Genre from '../Genre';

function HeaderFilm({ data }) {
  const { image, genre, name, description } = data;

  return (
    <div
      className="slide header__slide background-cover"
      style={{
        backgroundImage: `linear-gradient(var(--overlay-color), var(--overlay-color)), url(${image})`,
      }}
    >
      <article className="film__card">
        <Genre text={genre} className="card__item" />
        {/* <span className="film__genre">{genre}</span> */}
        <Stars count={5} className="card__item film__stars" />
        <h2 className="card__item film__name">{name}</h2>
        <p className="card__item film__description">{description}</p>
        <Button variant="gradient-bordered">Watch now</Button>
      </article>
    </div>
  );
}

export default HeaderFilm;
