import "../assets/styles/MenuBurger.css";
import { useState } from "react";
import FavoritesPage from "./FavoritesPage";
import Genre from "./Genre";
import Annee from "./Years";
import "../App.css";

interface Props {
  setSelectGenreId: React.Dispatch<React.SetStateAction<number | null>>;
  setSelectYears: React.Dispatch<React.SetStateAction<number | null>>;
  setSelectPopular: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectNews: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLight: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectFavorites: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuBurger({
  setSelectNews,
  setSelectPopular,
  setSelectGenreId,
  setSelectYears,
  setSelectFavorites,
  setIsOpen,
  setIsLight,
}: Props) {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isOpenYear, setisOpenYear] = useState(false);
  const [isOpenDark, setIsOpenDark] = useState(false);

  const [isOpenFavorite] = useState(false);
  return (
    <>
      {!isGenreOpen === true && !isOpenYear === true && (
        <div className="buttons">
          <button
            type="button"
            className={`button ${isGenreOpen ? "open" : ""}`}
            onClick={() => {
              setIsGenreOpen(!isGenreOpen);
            }}
            onKeyDown={() => setIsGenreOpen(!isGenreOpen)}
          >
            <div />
            Genre
            <img
              className="logobutton"
              src="../src/assets/images/genre.png"
              alt="genre"
            />
          </button>
          <button
            className="button"
            type="button"
            onClick={() => {
              setSelectNews(true);
              setIsOpen(false);
            }}
          >
            <div />
            Films à l'affiche
            <img
              className="logobutton"
              src="../src/assets/images/current.png"
              alt="Films à l'affiche"
            />
          </button>
          <button
            className="button"
            type="button"
            onClick={() => {
              setSelectPopular(true);
              setIsOpen(false);
            }}
          >
            <div />
            Populaire
            <img
              className="logobutton"
              src="../src/assets/images/popular.png"
              alt="Populaire"
            />
          </button>
          <button
            type="button"
            className={`button ${isOpenYear ? "open" : ""}`}
            onClick={() => setisOpenYear(!isOpenYear)}
            onKeyDown={() => setisOpenYear(!isOpenYear)}
          >
            <div />
            Année
            <img
              className="logobutton"
              src="../src/assets/images/year.png"
              alt="year"
            />
          </button>
          <button
            className="button"
            type="button"
            onClick={() => {
              setSelectFavorites(true);
              setIsOpen(false);
            }}
          >
            <div />
            Favoris
            <img
              className="logobutton"
              src="../src/assets/images/favorite.png"
              alt="favorite"
            />
          </button>
          <button
            className="button"
            type="button"
            onClick={() => {
              setIsLight((prev) => !prev);
              setIsOpenDark(!isOpenDark);
            }}
            onKeyDown={() => {
              setIsLight(true);
            }}
          >
            <div />
            {`Mode ${!isOpenDark ? "sombre" : "clair"}`}
            <div className="box-mode">
              <div className="button-mode" />
              <div className={`logo-mode ${isOpenDark ? "open" : ""}`} />
            </div>
          </button>
        </div>
      )}
      {isGenreOpen && (
        <Genre
          isOpen={isGenreOpen}
          setIsOpen={setIsGenreOpen}
          setSelectGenreId={setSelectGenreId}
          setIsOpenM={setIsOpen}
        />
      )}
      {isOpenYear && (
        <Annee
          isOpenYear={isOpenYear}
          setisOpenYear={setisOpenYear}
          setSelectYears={setSelectYears}
          setIsOpen={setIsOpen}
        />
      )}
      {isOpenFavorite && <FavoritesPage setIsOpen={setIsOpen} />}
    </>
  );
}
