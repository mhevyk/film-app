export const publicURL = process.env.PUBLIC_URL;
export const isDevelopmentMode = process.env.NODE_ENV === 'development';

export const FILM_API_BASE_URL = 'https://api.themoviedb.org/3';
export const FILM_API_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const API_KEY_PARAM = `api_key=${process.env.REACT_APP_FILM_API_KEY}`;
const LANGUAGE_PARAM = 'language=en-US';
const PARAMS = '?' + [API_KEY_PARAM, LANGUAGE_PARAM].join('&');

export const FILM_API_NEW_RELEASES_URL = `${FILM_API_BASE_URL}/movie/now_playing${PARAMS}`;
export const FILM_API_POPULAR_TV_SHOWS_URL = `${FILM_API_BASE_URL}/tv/popular${PARAMS}`;
export const FILM_API_TOP_RATED_URL = `${FILM_API_BASE_URL}/movie/top_rated${PARAMS}`;
export const FILM_API_GENRES_FILM_URL = `${FILM_API_BASE_URL}/genre/movie/list${PARAMS}`;
export const FILM_API_GENRES_TV_URL = `${FILM_API_BASE_URL}/genre/tv/list${PARAMS}`;
export const FILM_API_IMAGE_FULL_HD = `${FILM_API_IMAGE_BASE_URL}/w1920_and_h800_multi_faces_filter(dark)`;
export const FILM_API_IMAGE_ORIGINAL = `${FILM_API_IMAGE_BASE_URL}/original`;
