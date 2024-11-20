import { createContext, useContext, useEffect, useState } from "react";
import type { Genre } from "../types/interface";

interface GenreContextType {
  genres: Genre[];
  setGenres: React.Dispatch<React.SetStateAction<Genre[]>>;
}

export const GenreContext = createContext<GenreContextType | undefined>(
  undefined,
);

export const GenreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=fr&api_key=a6624acbe4190aa63573701aac791391",
      );
      const data = await response.json();
      setGenres(data.genres);
    };

    fetchGenres();
  }, []);

  return (
    <GenreContext.Provider value={{ genres, setGenres }}>
      {children}
    </GenreContext.Provider>
  );
};

export const useGenreContext = (): GenreContextType => {
  const context = useContext(GenreContext);
  if (!context) {
    throw new Error("useGenreContext must be used within a GenreProvider");
  }
  return context;
};
