export interface genresProps {
  id: number;
  name: string;
}

export interface Movie {
  adult: boolean | undefined;
  id: number;
  title: string;
  poster_path: string;
  budget: number | undefined;
  release_date: string | undefined;
  original_language: string | undefined;
  genre_ids: number[] | undefined;
  vote_average: number | undefined;
  genres: genresProps[];
  overview: string | undefined;
  backdrop_path: string | undefined;
  original_title: string | undefined;
  video: boolean | undefined;
  vote_count: number | undefined;
  popularity: number | undefined;
}

export interface CardProps {
  id: number | null;
  showCard: boolean;
  setShowCard: (showCard: boolean) => void;
}

export interface GenreProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export interface GenreItemsProps {
  id: number;
  name: string;
}

export interface MiniCardProps {
  id: number;
  title: string;
  poster_path: string;
  genre: string;
}

export interface AnneeProps {
  isOpenYear: boolean;
  setisOpenYear: (open: boolean) => void;
}
