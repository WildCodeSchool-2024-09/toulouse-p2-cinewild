import { useEffect } from "react";
import { useState } from "react";
import "../assets/styles/Card.css";
import type { Movie } from "../types/interface";
import type { CardProps } from "../types/interface";

export default function Card({ id, setShowCard }: CardProps) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showSynopsys, setShowSynopsis] = useState<boolean>(false);

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
          <img
            className="image"
            src={
              movie?.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "fallback-image-url.jpg"
            }
            alt={movie?.title || "Movie Poster"}
          />
          <section className="details-film-section">
            <h2 className="film-detail-title">{movie?.title}</h2>
            <div className="film-genre">
              {movie.genres.slice(0, 2).map((genre) => (
                <button key={genre.id} type="button">
                  {genre.name.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="first-part-details">
              <div className="origine">
                <h3>Langue</h3>
                <p>{movie.original_language?.toUpperCase() || "N/A"}</p>
              </div>
              <div className="detail-film-date">
                <h3>Année de sortie</h3>
                <p>{movie?.release_date?.split("-")[0]}</p>
              </div>
            </div>
            <div className="detail-film-note">
              <h3>Note globale</h3>
              <p>{movie.vote_average}</p>
            </div>
            <div className="resume">
              <h3>Résumé</h3>
              <p>
                {movie.overview &&
                movie.overview.length > 100 &&
                !showSynopsys ? (
                  <>
                    {movie.overview.slice(0, 100)}
                    {"... "}
                    <button
                      className="button-plus"
                      type="button"
                      onClick={() => {
                        setShowSynopsis(true);
                      }}
                    >
                      plus
                    </button>
                  </>
                ) : (
                  movie.overview
                )}
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
