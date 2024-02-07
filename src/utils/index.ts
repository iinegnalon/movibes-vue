import type { MovieListItem } from '@/models/movie';

export const movies: MovieListItem[] = [
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

export function getPosterImage(posterPath: string) {
  return `https://image.tmdb.org/t/p/original${posterPath}`;
}

export function formatCount(count: number) {
  if (count < 10000) {
    return count.toString();
  }

  if (count < 1000000) {
    return (count / 1000).toFixed(0) + 'k';
  }

  return (count / 1000000).toFixed(0) + 'M';
}

export function formatRundown(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hoursString = `${hours}h`;
  const minutesString = `${remainingMinutes}m`;

  if (hours === 0) {
    return minutesString;
  }

  if (remainingMinutes === 0) {
    return hoursString;
  }

  return `${hoursString} ${minutesString}`;
}
