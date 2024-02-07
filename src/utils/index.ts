import {
  getMovieList,
  getTrendingList,
  getTvSeriesList,
  getUpcomingList,
} from '@/api';

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

export function getMoviesFunction(listType: string, currentPage: number) {
  switch (listType) {
    case 'movie': {
      return getMovieList(currentPage);
    }
    case 'tv': {
      return getTvSeriesList(currentPage);
    }
    case 'upcoming': {
      return getUpcomingList(currentPage);
    }
    case 'trending': {
      return getTrendingList(currentPage);
    }
    default: {
      return getMovieList(currentPage);
    }
  }
}
