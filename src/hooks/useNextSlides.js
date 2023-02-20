import axios from 'axios';
import { useState, useEffect } from 'react';
import { FILM_API_PAGE_MAX_LIMIT } from '../api';
import { addPageQueryParam } from '../utils';

export default function useNextSlides(initialUrl) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchNextSlides = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage > FILM_API_PAGE_MAX_LIMIT ? 0 : newPage);
  };

  useEffect(() => {
    const url = addPageQueryParam(initialUrl, currentPage);
    axios
      .get(url)
      .then((response) => setData([...data, ...response.data.results]))
      .catch((error) => setError(error));
  }, [currentPage, initialUrl]);

  return {
    data,
    error,
    fetchNextSlides,
  };
}
