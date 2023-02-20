import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { FILM_API_GENRES_FILM_URL, FILM_API_GENRES_TV_URL } from '../api';
import { fetchAllRequests } from '../utils';

export const GenreContext = createContext();

function GenreContextProvider({ children }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenres().then((genres) => setGenres(genres));
  }, []);

  const fetchGenres = async () => {
    const filmGenresRequest = axios.get(FILM_API_GENRES_FILM_URL);
    const tvGenresRequest = axios.get(FILM_API_GENRES_TV_URL);
    const requests = [filmGenresRequest, tvGenresRequest];

    const data = await fetchAllRequests(requests);
    return data.reduce((result, item) => [...result, ...item.genres], []);
  };

  const getGenreById = (id) => {
    return genres.find((genre) => genre.id === id);
  };

  return (
    <GenreContext.Provider
      value={{
        getGenreById,
      }}
    >
      {children}
    </GenreContext.Provider>
  );
}

export default GenreContextProvider;
