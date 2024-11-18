import "../styles/Genre.css";

interface GenreProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Genre({ isOpen, setIsOpen }: GenreProps) {
  return (
    isOpen && (
      <div className="buttonsg">
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
        <button className="buttong" type="button">
          Fantastique
        </button>
        <button className="buttong" type="button">
          Since-fiction
        </button>
        <button className="buttong" type="button">
          Comédie
        </button>
        <button className="buttong" type="button">
          Romantique
        </button>
        <button className="buttong" type="button">
          Aventure
        </button>
        <button className="buttong" type="button">
          Thriller
        </button>
        <button className="buttong" type="button">
          Horreur
        </button>
        <button className="buttong" type="button">
          Documentaire
        </button>
      </div>
    )
  );
}
