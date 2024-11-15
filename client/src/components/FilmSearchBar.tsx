import { useEffect, useState } from "react";
import "../assets/styles/FilmSearchBar.css";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const apiKey = "a6624acbe4190aa63573701aac791391";

const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<Movie[]>([]);

  useEffect(() => {
    searchBarQuery(searchText);
  }, [searchText]);

  async function searchBarQuery(search: string) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?adult=false&api_key=${apiKey}&query=${search}`,
      );
      const responseJson = await response.json();
      const resultSearch = responseJson.results;
      setSearchResult(resultSearch);
    } catch (error) {
      console.error(error);
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
            setShowSuggestion(true);
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
          {showSuggestion ? (
            <ul className="ul-suggestion-list">
              {searchResult.length > 0 ? (
                searchResult.slice(0, 5).map((movie) => (
                  <li className="li-suggestion-list" key={movie.id}>
                    {movie.title}
                  </li>
                ))
              ) : (
                <li className="li-suggestion-list">Aucun film trouvé.</li>
              )}
            </ul>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};
export default SearchBar;
