// 기본 Movie 타입
export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
  popularity: number;
}

// 검색 상태
export type SearchStatus = 'idle' | 'loading' | 'success' | 'error';

// 상세 정보 타입 추가 (2번 과제)
export interface MovieDetail extends Movie {
  overview: string;
  runtime: number;
  genres: { id: number; name: string }[];
}