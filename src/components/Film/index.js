import './Film.css';
import './HeaderFilm.css';
import './NewReleaseFilm.css';
import './FeatureTVShow.css';
import Stars from '../Stars';
import Button from '../Button';
import Genre from '../Genre';
import LazyDarkenedBackground from '../LazyDarkenedBackground';
import HeadingWithCaret from '../HeadingWithCaret';

function Film({ image, genre, name, description = null, watchButton = null }) {
  return (
    <LazyDarkenedBackground
      src={image}
      className={`slide ${
        watchButton ? 'background-cover' : 'zoom-background'
      }`}
    >
      <article className="film__card">
        <Genre text={genre} className="card__item" />
        <Stars count={5} className="card__item film__stars" />
        <h2 className="card__item film__name">{name}</h2>
        {description && (
          <p className="card__item film__description">{description}</p>
        )}
        {watchButton ? (
          <Button variant="gradient-bordered">Watch now</Button>
        ) : (
          <HeadingWithCaret
            text="Watch now"
            className="card__item film__watch-now"
            as="link"
            href="#watch-now"
          />
        )}
      </article>
    </LazyDarkenedBackground>
  );
}

export default Film;
