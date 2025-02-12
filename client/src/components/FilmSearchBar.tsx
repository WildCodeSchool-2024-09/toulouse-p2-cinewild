import { useEffect, useState } from "react";
import "../assets/styles/FilmSearchBar.css";
import type { Movie } from "../types/interface";

interface SearchBarProps {
  setShowCard: (show: boolean) => void;
  setIdMovie: (id: number) => void;
  setSearchResult: (search: string) => void;
}

const apiKey = import.meta.env.VITE_API_KEY;

const SearchBar = ({
  setShowCard,
  setIdMovie,
  setSearchResult,
}: SearchBarProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const [search, setSearch] = useState<Movie[]>([]);

  useEffect(() => {
    if (searchText.trim()) {
      searchBarQuery(searchText);
      setShowSuggestion(true);
    } else {
      setSearch([]);
      setShowSuggestion(false);
    }
  }, [searchText]);

  async function searchBarQuery(search: string) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?adult=false&api_key=${apiKey}&query=${search}&without_genres=99,10749,18`,
      );
      const responseJson = await response.json();
      setSearch(responseJson.results);
    } catch (error) {
      console.error(error);
      setSearch([]);
    }
  }

  return (
    <div className="component-searchbar">
      <div className="search-bar">
        <input
          type="text"
          value={searchText}
          placeholder="Rechercher..."
          className="search-input"
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button
          type="button"
          className="search-button"
          onClick={() => {
            setSearchResult(searchText);
            setSearchText("");
          }}
        >
          <img
            className="image-loupe"
            src="src/assets/images/icon-loupe.svg"
            alt=""
          />
        </button>
      </div>
      {showSuggestion && (
        <div className="suggestionList">
          <ul className="ul-suggestion-list">
            {search && search.length > 0 ? (
              search.slice(0, 5).map((movie) => (
                <li
                  onClick={() => {
                    setIdMovie(movie.id);
                    setShowCard(true);
                  }}
                  onKeyDown={() => {
                    setIdMovie(movie.id);
                    setShowCard(true);
                  }}
                  className="li-suggestion-list"
                  key={movie.id}
                >
                  {movie.title}
                </li>
              ))
            ) : (
              <li className="li-suggestion-list">Aucun film trouvé.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
