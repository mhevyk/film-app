import axios from 'axios';

export function addPageQueryParam(initialUrl, page) {
  const url = new URL(initialUrl);
  url.searchParams.set('page', page);
  return url.toString();
}

export function countInitialRating(rate) {
  return Math.round(rate / 2);
}

export async function fetchAllRequests(requests) {
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
