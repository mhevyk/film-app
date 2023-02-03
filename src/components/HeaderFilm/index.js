import './HeaderFilm.css';
import Stars from '../Stars';
import Button from '../Button';

function HeaderFilm({ data }) {
  const { image, genre, name, description } = data;

  return (
    <div
      className="slide header__slide"
      style={{
        backgroundImage: `linear-gradient(var(--overlay-color), var(--overlay-color)), url(${image})`,
      }}
    >
      <article className="film__card">
        <span className="card__item film__genre">{genre}</span>
        <Stars count={5} className="card__item film__stars" />
        <h2 className="card__item film__name">{name}</h2>
        <p className="card__item film__description">{description}</p>
        <Button variant="gradient-bordered">
          <a href={`#watch-film-${name}`.replace(/\s/g, '-')}>Watch now</a>
        </Button>
      </article>
    </div>
  );
}

export default HeaderFilm;
