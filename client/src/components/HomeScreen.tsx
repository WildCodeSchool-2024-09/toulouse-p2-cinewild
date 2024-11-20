import "../assets/styles/HomeScreen.css";
import { useState } from "react";
import { useEffect } from "react";
import FilmSearchBar from "./FilmSearchBar";
import MiniCard from "./MiniCard";
import ButtonBurger from "./ButtonBurger";
import Card from "./Card";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number[];
}

export default function HomeScreen() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showCard, setShowCard] = useState<boolean>(false);
  const [idMovie, setIdMovie] = useState<number | null>(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const getRandomMovies = async () => {
      try {
        setError(null);

        const randomPage = Math.floor(Math.random() * 499) + 1;
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?adult=false&page=${randomPage}&api_key=${apiKey}`,
        );

        const data = await response.json();
        const shuffledResults = data.results.sort(() => 0.5 - Math.random());

        const finalArray: Movie[] = shuffledResults.slice(0, 20);

        setMovies(finalArray);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    getRandomMovies();
  }, []);

  const [genres, setGenres] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?language=fr&api_key=${apiKey}`,
        );
        const data = await response.json();
        const genreMap: { [key: number]: string } = {};
        for (const genre of data.genres) {
          genreMap[genre.id] = genre.name;
        }
        setGenres(genreMap);
      } catch (error) {
        console.error("Erreur lors de la récupération des genres:", error);
      }
    };

    fetchGenres();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <nav>
        <h1 className="site-title">CinéWild</h1>
        <ButtonBurger />
      </nav>
      <section className="suggestion-section">
        <div className="intro-section">
          <h2 className="intro-sentence">
            Découvrez votre prochain <span>film préféré</span>
          </h2>
          <div className="home-searchbar">
            <FilmSearchBar />
          </div>
        </div>
        <div className="tendance">
          <h3 className="tendance-title">Tendances</h3>
        </div>
        <div className="tendance-grid">
          {movies.map((movie) => {
            const genreNames = movie.genre_ids
              .map((id) => genres[id])
              .join(", ");
            return (
              <div
                key={movie.id}
                onClick={() => {
                  setShowCard(true);
                  setIdMovie(movie.id);
                }}
                onKeyDown={() => {
                  setShowCard(true);
                  setIdMovie(movie.id);
                }}
              >
                <MiniCard
                  id={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path}
                  genre={genreNames}
                />
              </div>
            );
          })}
        </div>
      </section>
      {showCard && (
        <Card id={idMovie} showCard={true} setShowCard={setShowCard} />
      )}
    </>
  );
}
