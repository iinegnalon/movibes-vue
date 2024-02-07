import axios from 'axios';
import type { MovieDetails, MovieListItem } from '@/models/movie';

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,

  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_KEY}`,
  },
});

export async function getTrending() {
  return await apiInstance.get<MovieListItem[]>('trending/all/week');
}

export async function getMovieDetails(type: string, movieId: string) {
  return await apiInstance.get<MovieDetails>(`${type}/${movieId}`);
}
