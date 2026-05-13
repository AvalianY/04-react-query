import axios from 'axios';
import type { MoviesResponse } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (
  query: string,
  page: number
): Promise<MoviesResponse> => {
  const token = import.meta.env.VITE_TMDB_TOKEN as string;

  const response = await axios.get<MoviesResponse>(`${BASE_URL}/search/movie`, {
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
