export interface MovieListItem {
  id: number;
  backdrop_path?: string;
  genre_ids: number[];
  media_type: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetails {
  id: number;
  backdrop_path?: string;
  genres: MovieGenre[];
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  runtime?: number;
  tagline?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieGenre {
  id: number;
  name: string;
}
