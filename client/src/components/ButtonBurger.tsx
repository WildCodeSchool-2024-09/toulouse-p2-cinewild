import { useState } from "react";
import MenuBurger from "../components/MenuBurger";
import "../assets/styles/ButtonBurger.css";
import Background from "./Background";

interface Props {
  setSelectGenreId: React.Dispatch<React.SetStateAction<number | null>>;
  setSelectYears: React.Dispatch<React.SetStateAction<number | null>>;
  setSelectPopular: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectNews: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLight: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ButtonBurger({
  setSelectNews,
  setSelectPopular,
  setSelectGenreId,
  setSelectYears,
  setIsLight,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const resetAllFilters = () => {
    setSelectGenreId(null);
    setSelectYears(null);
    setSelectPopular(false);
    setSelectNews(false);
  };

  return (
    <>
      {isOpen ? (
        <>
          <Background />
          <MenuBurger
            setSelectGenreId={(id) => {
              resetAllFilters();
              setSelectGenreId(id);
            }}
            setSelectYears={(year) => {
              resetAllFilters();
              setSelectYears(year);
            }}
            setSelectPopular={(value) => {
              resetAllFilters();
              setSelectPopular(value);
            }}
            setSelectNews={(value) => {
              resetAllFilters();
              setSelectNews(value);
            }}
            setIsOpen={setIsOpen}
            setIsLight={setIsLight}
          />
        </>
      ) : (
        ""
      )}
      <div className="burger-menu-box">
        <div
          className={`burger-menu ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </>
  );
}
