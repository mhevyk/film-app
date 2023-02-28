import { useContext } from 'react';
import { GenreContext } from '../../context/GenreContext';
import Genre from '../Genre';

function Genres({ genres }) {
  const { getGenreById } = useContext(GenreContext);

  return (
    <div className="genres">
      {genres.length ? (
        genres.map((genre) => {
          const genreName =
            genre?.name ||
            getGenreById(genre)?.name ||
            `Genre ${genre.toString()}`;
          return (
            <Genre key={genreName} genre={genreName} className="card__item" />
          );
        })
      ) : (
        <Genre genre="No genres" className="card__item" />
      )}
    </div>
  );
}

export default Genres;
