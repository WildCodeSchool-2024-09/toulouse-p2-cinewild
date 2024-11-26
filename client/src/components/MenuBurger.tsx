import "../assets/styles/MenuBurger.css";
import { useState } from "react";
import FavoritesPage from "./FavoritesPage";
import Genre from "./Genre";
import Annee from "./Years";

interface Props {
  setSelectGenreId: React.Dispatch<React.SetStateAction<number | null>>;
  setSelectYears: React.Dispatch<React.SetStateAction<number | null>>;
  setSelectPopular: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectNews: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectFavorites: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuBurger({
  setSelectNews,
  setSelectPopular,
  setSelectGenreId,
  setSelectYears,
  setIsOpen,
}: Props) {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isOpenYear, setisOpenYear] = useState(false);
  const [isOpenFavorite, setIsOpenFavorite] = useState(false);
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
              setIsOpenFavorite(!isOpenFavorite);
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
