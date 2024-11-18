import "../styles/MenuBurger.css";
import { useState } from "react";
import Annee from "./Annee";
import Genre from "./Genre";

export default function MenuBurger() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpena, setIsOpena] = useState(false);
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
            src="../src/assets/images/nouveautes.png"
            alt="Nouveautés"
          />
        </button>
        <button className="button" type="button">
          <div />
          Films à l'affiche
          <img
            className="logobutton"
            src="../src/assets/images/film-a-laffiche.png"
            alt="Films à l'affiche"
          />
        </button>
        <button className="button" type="button">
          <div />
          Populaire
          <img
            className="logobutton"
            src="../src/assets/images/populaire.png"
            alt="Populaire"
          />
        </button>
        <button
          type="button"
          className={`button ${isOpena ? "open" : ""}`}
          onClick={() => setIsOpena(!isOpena)}
          onKeyDown={() => setIsOpena(!isOpena)}
        >
          <div />
          Année
          <img
            className="logobutton"
            src="../src/assets/images/annee.png"
            alt="Année"
          />
        </button>
        <button className="button" type="button">
          <div />
          Favoris
          <img
            className="logobutton"
            src="../src/assets/images/favoris.png"
            alt="Favoris"
          />
        </button>
      </div>
      {isOpen && <Genre isOpen={isOpen} setIsOpen={setIsOpen} />}
      {isOpena && <Annee isOpena={isOpena} setIsOpena={setIsOpena} />}
    </>
  );
}
