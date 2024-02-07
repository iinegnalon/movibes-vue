export interface APIListResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface MovieListItem {
  id: number;
  backdrop_path?: string;
  genre_ids: number[];
  name?: string;
  media_type?: string;
  original_title?: string;
  overview: string;
  poster_path?: string;
  release_date: string;
  title?: string;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetails {
  id: number;
  backdrop_path?: string;
  genres: MovieGenre[];
  original_title?: string;
  overview: string;
  poster_path?: string;
  release_date: string;
  runtime?: number;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface TVSeriesDetails {
  id: number;
  backdrop_path: string;
  episode_run_time: number[];
  first_air_date: string;
  genres: MovieGenre[];
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface MovieGenre {
  id: number;
  name: string;
}
