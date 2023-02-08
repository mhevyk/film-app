import './Film.css';
import './HeaderFilm.css';
import './NewReleaseFilm.css';
import './FeatureTVShow.css';
import Stars from '../Stars';
import Button from '../Button';
import Genre from '../Genre';
import LazyDarkenedBackground from '../LazyDarkenedBackground';
import WithCaret from '../WithCaret';

function Film({ image, genre, name, description = null, watchButton = null }) {
  return (
    <LazyDarkenedBackground
      src={image}
      className="slide"
      afterLoadedClassName={watchButton ? 'background-cover' : 'zoom-background'}
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
          <WithCaret className="card__item film__watch-now">
            <a href="#watch-now" className="section__title">
              Watch now
            </a>
          </WithCaret>
        )}
      </article>
    </LazyDarkenedBackground>
  );
}

export default Film;
