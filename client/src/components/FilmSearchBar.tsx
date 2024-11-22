import { useEffect, useState } from "react";
import "../assets/styles/FilmSearchBar.css";
import type { Movie } from "../types/interface";

const apiKey = import.meta.env.VITE_API_KEY;

const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<Movie[]>([]);

  useEffect(() => {
    if (searchText.trim()) {
      searchBarQuery(searchText);
      setShowSuggestion(true);
    } else {
      setSearchResult([]);
      setShowSuggestion(false);
    }
  }, [searchText]);

  async function searchBarQuery(search: string) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?adult=false&api_key=${apiKey}&query=${search}`,
      );
      const responseJson = await response.json();
      setSearchResult(responseJson.results);
    } catch (error) {
      console.error(error);
      setSearchResult([]);
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
        <button type="button" className="search-button">
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
            {searchResult && searchResult.length > 0 ? (
              searchResult.slice(0, 5).map((movie) => (
                <li className="li-suggestion-list" key={movie.id}>
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
