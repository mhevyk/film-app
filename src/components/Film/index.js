import './Film.css';
import './HeaderFilm.css';
import './NewReleaseFilm.css';
import Stars from '../Stars';
import Button from '../Button';
import LazyDarkenedBackground from '../LazyDarkenedBackground';
import WithChevronRight from '../WithChevronRight';
import { memo } from 'react';
import {
  FILM_API_IMAGE_FULL_HD_URL,
  FILM_API_IMAGE_ORIGINAL_URL,
} from '../../api';
import { countInitialRating } from '../../utils';
import Genres from '../Genres';

function Film(props) {
  const {
    poster_path,
    vote_average,
    backdrop_path = '',
    overview = '',
    isZoom,
  } = props;

  const name = props.name || props.title;
  const genres = props.genre_ids || props.genres;
  const rating = countInitialRating(vote_average);
  const afterLoadedClassName = isZoom ? 'zoom-background' : 'background-cover';

  const image = !isZoom
    ? `${FILM_API_IMAGE_FULL_HD_URL}${backdrop_path}`
    : `${FILM_API_IMAGE_ORIGINAL_URL}${poster_path}`;

  return (
    <LazyDarkenedBackground
      src={image}
      className="slide"
      afterLoadedClassName={afterLoadedClassName}
    >
      <article className="film__card">
        <Genres genres={genres} />
        <Stars initialRating={rating} className="card__item film__stars" />
        <h2 className="card__item film__name">{name}</h2>
        {!isZoom && overview && (
          <p className="card__item film__description">{overview}</p>
        )}
        {!isZoom ? (
          <Button variant="gradient-bordered">Watch now</Button>
        ) : (
          <WithChevronRight className="card__item film__watch-now">
            <a href="#watch-now" className="section__title">
              Watch now
            </a>
          </WithChevronRight>
        )}
      </article>
    </LazyDarkenedBackground>
  );
}

export default memo(Film);
