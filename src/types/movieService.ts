import axios from 'axios';

import type { Movie } from '../types/movie';

interface MoviesResponse {
  results: Movie[];
  total_pages: number;
}

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;

const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const fetchMovies = async (
  query: string,
  page: number
): Promise<MoviesResponse> => {
  const response = await tmdbApi.get<MoviesResponse>('/search/movie', {
    params: {
      query,
      page,
    },
  });

  return response.data;
};