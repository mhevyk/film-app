import { createContext, useEffect, useState } from 'react';
import { fetchGenres } from '../utils';

export const GenreContext = createContext();

function GenreProvider({ children }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenres().then((genres) => setGenres(genres));
  }, []);

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

export default GenreProvider;
