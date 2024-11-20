import { useState } from "react";
import MenuBurger from "../components/MenuBurger";
import "../assets/styles/ButtonBurger.css";
import Background from "./Background";

export default function ButtonBurger() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen ? (
        <>
          <Background />
          <MenuBurger />
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
