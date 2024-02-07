import axios from 'axios';
import type {
  APIListResponse,
  MovieDetails,
  MovieListItem,
  TVSeriesDetails,
} from '@/models/movie';

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,

  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_KEY}`,
  },
});

export async function getMovieList(page: number = 1) {
  return await apiInstance.get<APIListResponse<MovieListItem>>(
    'movie/popular',
    {
      params: {
        page: page,
      },
    },
  );
}

export async function getTvSeriesList(page: number = 1) {
  return await apiInstance.get<APIListResponse<MovieListItem>>('tv/popular', {
    params: {
      page: page,
    },
  });
}

export async function getUpcomingList(page: number = 1) {
  return await apiInstance.get<APIListResponse<MovieListItem>>(
    'movie/upcoming',
    {
      params: {
        page: page,
      },
    },
  );
}

export async function getTrendingList(page: number = 1) {
  return await apiInstance.get<APIListResponse<MovieListItem>>(
    'trending/all/week',
    {
      params: {
        page: page,
      },
    },
  );
}

export async function getSearchList(page: number = 1, searchQuery: string) {
  const [movieResponse, tvSeriesResponse] = await Promise.all([
    apiInstance.get<APIListResponse<MovieListItem>>('search/movie', {
      params: {
        page: page,
        query: searchQuery,
      },
    }),
    apiInstance.get<APIListResponse<MovieListItem>>('search/tv', {
      params: {
        page: page,
        query: searchQuery,
      },
    }),
  ]);

  const movieResults = movieResponse.data.results;
  const tvSeriesResults = tvSeriesResponse.data.results;

  const mixedResults = [];
  for (
    let i = 0;
    i < Math.max(movieResults.length, tvSeriesResults.length);
    i++
  ) {
    const movie = movieResults[i];
    const tv = tvSeriesResults[i];

    if (movie) {
      movie.media_type = 'movie';
      mixedResults.push(movie);
    }

    if (tv) {
      tv.media_type = 'tv';
      mixedResults.push(tv);
    }
  }

  return {
    data: { results: mixedResults },
  };
}

export async function getMovieDetails(movieId: string) {
  return await apiInstance.get<MovieDetails>(`movie/${movieId}`);
}

export async function getTVSeriesDetails(movieId: string) {
  return await apiInstance.get<TVSeriesDetails>(`tv/${movieId}`);
}
