import "../assets/styles/HomeScreen.css";
import { useState } from "react";
import { useEffect } from "react";

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

export default function HomeScreen() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const getRandomMovies = async () => {
      try {
        setError(null);

        const randomPage = Math.floor(Math.random() * 499) + 1;
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?page=${randomPage}&api_key=${apiKey}`,
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

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <nav>
        <h1 className="site-title">CinéWild</h1>
        <img
          className="menu-burger-button"
          src="../src/assets/images/menu-burger.svg"
          alt="menu-burger-button"
        />
      </nav>
      <section className="suggestion-section">
        <div className="intro-section">
          <h2 className="intro-sentence">
            Découvrez votre prochain <span>film préféré</span>
          </h2>
        </div>
        <div className="categorie">
          <h3 className="categorie-title">Tendances</h3>
        </div>
        <div className="films-grid">
          {movies.map((movie: Movie) => (
            <img
              key={movie.id}
              alt="image-card"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
