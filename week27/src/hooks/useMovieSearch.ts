import { useState, useEffect } from 'react';
import axios from 'axios';
import { type Movie, type SearchStatus } from '../types/movie.types';
import { type ApiResponse } from '../types/api.types';

interface UseMovieSearchReturn {
  movies: Movie[];
  status: SearchStatus;
  error: string | null;
}

export const useMovieSearch = (query: string): UseMovieSearchReturn => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [status, setStatus] = useState<SearchStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  

  useEffect(() => {
    // 검색어가 없으면 초기화
    if (!query.trim()) {
      setMovies([]); 
      setStatus('idle');
      return;
    }

    const searchMovies = async () => {
      try {
        setStatus('loading');
        // Generic으로 응답 타입 지정
        const response = await axios.get<ApiResponse>(
          'https://api.themoviedb.org/3/search/movie', 
          {
            params: {
              api_key: import.meta.env.VITE_TMDB_API_KEY,
              query: query,
              language: 'ko-KR',
            }
          }
        );

        setMovies(response.data.results);
        setStatus('success');
        setError(null);

      } catch (err) {
        setStatus('error');
        setError('영화 검색 중 오류가 발생했습니다.');
        setMovies([]);
        console.error('API error:', err);
      }
  };

  // 디바운스 적용(500ms 대기)
  const timer = setTimeout(() => {
    searchMovies();
  }, 500);

  // 클린업 함수에서 타이머 제거
  return () => clearTimeout(timer);
}, [query]);

	return { movies, status, error };
}; 