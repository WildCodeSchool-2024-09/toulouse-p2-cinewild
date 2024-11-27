import { useState } from "react";
import "../assets/styles/Years.css";

interface ShowAnneeProps {
  isOpenYear: boolean;
  setisOpenYear: (open: boolean) => void;
  setSelectYears: React.Dispatch<React.SetStateAction<number | null>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Annee({
  isOpenYear,
  setisOpenYear,
  setSelectYears,
  setIsOpen,
}: ShowAnneeProps) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [firstFilmYear, setFirstFilmYear] = useState<number>(0);

  async function getOldestMovieDate() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=release_date.asc`,
      );

      const data = await response.json();

      const movies = data.results;

      if (movies.length > 0) {
        const oldestMovie = movies[0];
        setFirstFilmYear(oldestMovie.release_date.split("-")[0]);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  }

  getOldestMovieDate();

  const YearList = () => {
    const endYear = 2024;

    for (let year = endYear; year >= firstFilmYear; year--) {
      years.push(year);
    }
  };

  const years: number[] = [];
  YearList();
  return (
    isOpenYear && (
      <div className="buttons-years">
        <img
          src="../src/assets/images/return.png"
          alt="retour"
          onClick={() => setisOpenYear(false)}
          onKeyDown={() => setisOpenYear(false)}
          className="return"
        />

        <h2 className="year-title-categorie">
          Année
          <img
            className="logo-year-button"
            src="../src/assets/images/year.png"
            alt="genre"
          />
        </h2>
        {years.map((year: number) => (
          <button
            key={year}
            className="button-years"
            type="button"
            onClick={() => {
              setSelectYears(year);
              setIsOpen(false);
            }}
          >
            {year}
          </button>
        ))}
      </div>
    )
  );
}
