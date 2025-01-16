export interface genresProps {
  id: number;
  name: string;
}

export interface Movie {
  adult?: boolean;
  id: number;
  title: string;
  poster_path: string;
  budget?: number;
  release_date?: string;
  original_language?: string;
  genre_ids?: number[];
  vote_average?: number;
  genres: genresProps[];
  overview?: string;
  backdrop_path?: string;
  original_title?: string;
  video?: boolean;
  vote_count?: number;
  popularity?: number;
  total_pages?: number;
}

export interface CardProps {
  id: number | null;
  showCard: boolean;
  setShowCard: (showCard: boolean) => void;
  onToggleFavorite?: (movieId: number) => void;
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
