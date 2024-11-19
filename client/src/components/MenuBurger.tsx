import "../assets/styles/MenuBurger.css";
import { useState } from "react";
import Annee from "./Years";
import Genre from "./Genre";

export default function MenuBurger() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenYear, setisOpenYear] = useState(false);
  return (
    <>
      <div className="buttons">
        <button
          type="button"
          className={`button ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={() => setIsOpen(!isOpen)}
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
      {isOpen && <Genre isOpen={isOpen} setIsOpen={setIsOpen} />}
      {isOpen && (
        <Annee isOpenYear={isOpenYear} setisOpenYear={setisOpenYear} />
      )}
    </>
  );
}
