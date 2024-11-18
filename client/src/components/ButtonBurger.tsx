import { useState } from "react";
import MenuBurger from "../components/MenuBurger";
import "../styles/ButtonBurger.css";

export default function ButtonBurger() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen ? <MenuBurger /> : ""}

      <div
        className={`burger-menu ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={() => setIsOpen(!isOpen)}
      >
        <span />
        <span />
        <span />
      </div>
    </>
  );
}
