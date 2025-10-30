export interface Movie {
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string | null;
  popularity: number;
}   

// 검색 상태 타입
export type SearchStatus = 'idle' | 'loading' | 'error' | 'success'; // 초기, 로딩, 에러, 성공 => union type
