import { useState } from "react";
import "../assets/styles/Genre.css";

interface GenreProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

interface GenreItemsProps {
  id: number;
  name: string;
}

export default function Genre({ isOpen, setIsOpen }: GenreProps) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [genreList, setGenreList] = useState<Array<GenreItemsProps>>([]);

  async function getGenreList() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`,
      );

      const data = await response.json();

      const genres = data.genres;

      setGenreList(genres);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  }

  getGenreList();

  return (
    isOpen && (
      <div className="buttons-genre">
        <img
          src="../src/assets/images/return.png"
          alt="retour"
          onClick={() => setIsOpen(false)}
          onKeyDown={() => setIsOpen(false)}
          className="return"
        />

        <h2>
          Genre
          <img
            className="logobutton"
            src="../src/assets/images/genre.png"
            alt="genre"
          />
        </h2>
        {genreList.map((genre) => {
          return (
            <button key={genre.id} className="button-genre" type="button">
              {genre.name}
            </button>
          );
        })}
      </div>
    )
  );
}
