import "../assets/styles/miniCard.css";
import type { MiniCardProps } from "../types/interface";

export default function MiniCard({ title, poster_path, genre }: MiniCardProps) {
  return (
    <>
      <div className="mini-card">
        <img
          className="picture"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "src/assets/images/sans-image.svg"
          }
          alt="film poster"
        />
        <h2 className="title">{title}</h2>
        <p className="types">{genre}</p>
      </div>
    </>
  );
}
