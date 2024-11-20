import { useEffect } from "react";
import { useState } from "react";
import "../assets/styles/Card.css";

interface genresProps {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  budget: number;
  title: string;
  poster_path: string;
  release_date: string;
  original_language: string;
  vote_average: number;
  genres: genresProps[];
  overview: string;
}

interface CardProps {
  id: number | null;
  showCard: boolean;
  setShowCard: (showCard: boolean) => void;
}

export default function Card({ id, setShowCard }: CardProps) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    async function searchIdQuery(id: number | null) {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=fr-FR`,
        );
        const responseJson = await response.json();

        setMovie(responseJson);
      } catch (error) {
        console.error(error);
      }
    }

    searchIdQuery(id);
  }, [id]);
  return (
    <>
      {movie && (
        <div className="modale">
          <h2>{movie?.title}</h2>
          <img
            className="image"
            src={
              movie?.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "fallback-image-url.jpg"
            }
            alt={movie?.title || "Movie Poster"}
          />
          <section className="section">
            <div className="date">
              <h3>Date de sortie</h3>
              <p>{movie?.release_date?.split("-")[0]}</p>
            </div>
            <div className="origine">
              <h3>Langue</h3>
              <p>{movie?.original_language}</p>
            </div>
            <div className="note">
              <h3>Note globale</h3>
              <p>{movie?.vote_average}</p>
            </div>
            <div className="type">
              <h3>Genre</h3>
              <p>{movie?.genres.map((genre) => genre.name).join(", ")}</p>
            </div>
            <div className="resume">
              <h3>Résumé</h3>
              <p>
                {movie?.overview?.length > 100
                  ? `${movie.overview.slice(0, 100)}...`
                  : movie.overview}
              </p>
            </div>
          </section>

          <button
            className="button-close"
            type="button"
            onClick={() => setShowCard(false)}
            onKeyDown={() => setShowCard(false)}
          >
            Fermer
          </button>
        </div>
      )}
    </>
  );
}
