import { useEffect, useState } from "react";
import "../assets/styles/HomeScreen.css";
import Background from "./Background";
import ButtonBurger from "./ButtonBurger";
import Card from "./Card";
import FilmSearchBar from "./FilmSearchBar";
import MiniCard from "./MiniCard";
import ModalContactForm from "./ModalContactForm";
import "../assets/styles/ModalContactForm.css";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number[];
}

export default function HomeScreen() {
  const genresArray = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Aventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comédie",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentaire",
    },
    {
      id: 18,
      name: "Drame",
    },
    {
      id: 10751,
      name: "Familial",
    },
    {
      id: 14,
      name: "Fantastique",
    },
    {
      id: 36,
      name: "Histoire",
    },
    {
      id: 27,
      name: "Horreur",
    },
    {
      id: 10402,
      name: "Musique",
    },
    {
      id: 9648,
      name: "Mystère",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science-Fiction",
    },
    {
      id: 10770,
      name: "Téléfilm",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "Guerre",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showCard, setShowCard] = useState<boolean>(false);
  const [idMovie, setIdMovie] = useState<number | null>(null);
  const [selectedNews, setSelectNews] = useState<boolean>(false);
  const [selectedPopular, setSelectPopular] = useState<boolean>(false);
  const [selectedYears, setSelectYears] = useState<number | null>(null);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [selectedGenreId, setSelectGenreId] = useState<number | null>(null);
  const [categoryTitle, setcategoryTitle] = useState<string>("Tendance");
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const getRandomMovies = async () => {
      try {
        setError(null);

        if (selectedGenreId !== null) {
          const genreName =
            genresArray.find((genre) => genre.id === selectedGenreId)?.name ||
            "Genre";
          const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${selectedGenreId}`,
          );
          const data = await response.json();
          setcategoryTitle(`${genreName}`);
          setMovies(data.results);
        } else if (selectedYears !== null) {
          const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=${selectedYears}`,
          );
          const data = await response.json();
          setcategoryTitle(`${selectedYears}`);
          setMovies(data.results);
        } else if (selectedPopular) {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
          );
          const data = await response.json();
          setcategoryTitle("Populaire");
          setMovies(data.results);
        } else if (selectedNews) {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`,
          );
          const data = await response.json();
          setcategoryTitle("Film à l'affiche");
          setMovies(data.results);
        } else {
          const randomPage = Math.floor(Math.random() * 499) + 1;
          const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?adult=false&page=${randomPage}&api_key=${apiKey}`,
          );
          const data = await response.json();
          const shuffledResults = data.results.sort(() => 0.5 - Math.random());
          setMovies(shuffledResults.slice(0, 20));
          setcategoryTitle("Tendance");
        }
      } catch (error) {
        setError((error as Error).message);
      }
    };

    getRandomMovies();
  }, [selectedGenreId, selectedYears, selectedPopular, selectedNews]);

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

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav>
        <h1 className="site-title">CinéWild</h1>
        <ButtonBurger
          setSelectGenreId={setSelectGenreId}
          setSelectYears={setSelectYears}
          setSelectPopular={setSelectPopular}
          setSelectNews={setSelectNews}
        />
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
          <h3 className="tendance-title">{categoryTitle}</h3>
        </div>
        <div className="tendance-grid">
          {movies.map((movie) => {
            const genreNames = movie.genre_ids
              .slice(0, 2)
              .map((id) => genres[id])
              .join(", ");
            return (
              <div
                key={movie.id}
                onClick={() => {
                  setShowCard(true);
                  setIdMovie(movie.id);
                  handleScrollToTop();
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
        <>
          <Background />
          <Card id={idMovie} showCard={true} setShowCard={setShowCard} />
        </>
      )}
      <div className="footer">
        <div />
        <button
          type="button"
          className="open-modale"
          onClick={() => setIsContactOpen(true)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsContactOpen(true);
            }
          }}
        >
          CONTACT
        </button>
        <p>Made by wilder</p>
      </div>

      <ModalContactForm
        isContactOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
