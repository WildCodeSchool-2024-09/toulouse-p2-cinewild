import "../assets/styles/MenuBurger.css";
import { useState } from "react";
import Genre from "./Genre";
import Annee from "./Years";

export default function MenuBurger() {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isOpenYear, setisOpenYear] = useState(false);
  return (
    <>
      {!isGenreOpen === true && !isOpenYear === true && (
        <div className="buttons">
          <button
            type="button"
            className={`button ${isGenreOpen ? "open" : ""}`}
            onClick={() => setIsGenreOpen(!isGenreOpen)}
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
          <button className="button" type="button">
            <div />
            Nouveautés
            <img
              className="logobutton"
              src="../src/assets/images/news.png"
              alt="Nouveautés"
            />
          </button>
          <button className="button" type="button">
            <div />
            Films à l'affiche
            <img
              className="logobutton"
              src="../src/assets/images/current.png"
              alt="Films à l'affiche"
            />
          </button>
          <button className="button" type="button">
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
          <button className="button" type="button">
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
      {isGenreOpen && <Genre isOpen={isGenreOpen} setIsOpen={setIsGenreOpen} />}
      {isOpenYear && (
        <Annee isOpenYear={isOpenYear} setisOpenYear={setisOpenYear} />
      )}
    </>
  );
}
