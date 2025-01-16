import { useFavorites } from "../context/FavoritesContext";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
}

interface FavorisProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function FavoritesPage({ setIsOpen }: FavorisProps) {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div>
      <h2 className="favoris-title">Mes Favoris</h2>
      {favorites.length === 0 ? (
        <p>Aucun favori en favoris.</p>
      ) : (
        <ul className="favoris-list">
          {favorites.map((movie: Movie) => (
            <li key={movie.id}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
                <p className="movie-title">{movie.title}</p>
                <button
                  type="button"
                  onClick={() => removeFavorite(movie.id)}
                  className="remove-button"
                >
                  Retirer des favoris
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="close-button"
      >
        Fermer
      </button>{" "}
      {}
    </div>
  );
}

export default FavoritesPage;
