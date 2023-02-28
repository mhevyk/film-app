import axios from 'axios';
import { useState, useEffect } from 'react';
import { FILM_API_PAGE_MAX_LIMIT } from '../api';
import { addPageQueryParam } from '../utils';

export default function useNextSlides(initialUrl) {
  const [slides, setSlides] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchNextSlides = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage > FILM_API_PAGE_MAX_LIMIT ? 0 : newPage);
  };

  useEffect(() => {
    const url = addPageQueryParam(initialUrl, currentPage);
    setLoading(true);
    axios
      .get(url)
      .then((response) => setSlides([...(slides || []), ...response.data.results]))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [currentPage, initialUrl]);

  return {
    slides,
    loading,
    error,
    fetchNextSlides,
  };
}
