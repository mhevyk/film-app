import axios from 'axios';
import {
  GET_FILM_BY_ID,
  FILM_API_GENRES_FILM_URL,
  FILM_API_GENRES_TV_URL,
} from '../api';

export function addPageQueryParam(initialUrl, page) {
  const url = new URL(initialUrl);
  url.searchParams.set('page', page);
  return url.toString();
}

export function countInitialRating(rate) {
  return Math.round(rate / 2);
}

export function createNaturalSequence(count) {
  const initialNaturalNumber = 1;
  const sequence = [];
  for (let number = initialNaturalNumber; number <= count; number++) {
    sequence.push(number);
  }
  return sequence;
}

async function fetchAllRequests(requests) {
  return await axios.all(requests).then(
    axios.spread((...responses) => {
      return responses.reduce(
        (result, response) => [
          ...result,
          ...(Array.isArray(response.data) ? response.data : [response.data]),
        ],
        []
      );
    })
  );
}

export function fetchHeaderSlides() {
  const films = {
    'Godzilla vs. Kong': 399566,
    'Wonder Woman': 297762,
    "Zack Snyder's Justice League": 791373,
  };

  const requests = Object.keys(films).map((filmName) => {
    const filmId = films[filmName];
    return axios.get(GET_FILM_BY_ID(filmId));
  });

  return fetchAllRequests(requests);
}

export async function fetchGenres() {
  const filmGenresRequest = axios.get(FILM_API_GENRES_FILM_URL);
  const tvGenresRequest = axios.get(FILM_API_GENRES_TV_URL);
  const requests = [filmGenresRequest, tvGenresRequest];

  const data = await fetchAllRequests(requests);
  return data.reduce((result, item) => [...result, ...item.genres], []);
}
