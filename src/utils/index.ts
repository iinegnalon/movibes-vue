import type { Movie } from '@/models/movie';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Movie 1',
    image: '/images/movie.png',
    description: 'Description of Movie 1',
    slug: '/movies/movie-1',
    rating: 4.5,
  },
  {
    id: '2',
    title: 'Movie 2',
    image: '/images/movie.png',
    description: 'Description of Movie 2',
    slug: '/movies/movie2',
    rating: 3.8,
  },
  {
    id: '3',
    title: 'Movie 3',
    image: '/images/movie.png',
    description: 'Description of Movie 3',
    slug: '/movies/movie3',
    rating: 10.0,
  },
  {
    id: '4',
    title: 'Movie 4',
    image: '/images/movie.png',
    description: 'Description of Movie 4',
    slug: '/movies/movie4',
    rating: 4.0,
  },
];
