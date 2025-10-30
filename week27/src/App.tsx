import { useState } from 'react';
import { useMovieSearch } from './hooks/useMovieSearch';
import { useMovieDetail } from './hooks/useMovieDetail';
import MovieCard from './components/MovieCard';
import MovieModal from './components/MovieModal';
import styled from 'styled-components';
import type { Movie } from './types/movie.types';

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { movies, status, error } = useMovieSearch(searchQuery);

  // 모달 및 상세 정보 상태
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { movie, loading: detailLoading, error: detailError } = useMovieDetail(selectedMovieId);

  // 영화 선택 핸들러
  const handleMovieSelect = (id: number): void => {
    setSelectedMovieId(id);
    setIsModalOpen(true);
  };

  // 검색어 변경 핸들러
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Homepage>
      {/* 헤더 */}
      <Header>
        <Title>🎬 Search Movie 🎬</Title>
        <Subtitle>전 세계의 영화 찾아보기</Subtitle>
      </Header>

      {/* 검색창 */}
      <Search>
        <SearchInput
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="영화 제목을 입력하세요..."
        />
      </Search>

      {/* 상태별 UI */}
      <Content>
        {/* 로딩 */}
        {status === 'loading' && (
          <StatusPage>
            <Spinner />
            <p>영화 검색 중...</p>
          </StatusPage>
        )}

        {/* 에러 */}
        {status === 'error' && (
          <StatusPage>
            <p>⚠️ {error}</p>
          </StatusPage>
        )}

        {/* 영화 목록 */}
        {status === 'success' && (
          <>
            {movies.length > 0 ? (
              <>
                <div>
                  <Result>총 {movies.length}개의 영화가 검색되었습니다.</Result>
                </div>
                <MovieGrid>
                  {movies.map((movie: Movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      onSelect={handleMovieSelect}
                    />
                  ))}
                </MovieGrid>
              </>
            ) : (
              <StatusPage>
                <p>😭 검색 결과가 없습니다.</p>
              </StatusPage>
            )}
          </>
        )}

        {/* 초기 상태 */}
        {status === 'idle' && (
          <StatusPage>
            <p>🔎 영화 제목을 검색해보세요!</p>
          </StatusPage>
        )}
      </Content>

      {/* 상세정보 모달 */}
      {isModalOpen && (
        <MovieModal
          movie={movie}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* 로딩 중일 때 모달 내부에 표시 (선택사항) */}
      {detailLoading && isModalOpen && (
        <ModalLoading>
          <Spinner />
          <p>상세 정보를 불러오는 중...</p>
        </ModalLoading>
      )}

      {/* 상세 정보 로딩 에러 */}
      {detailError && isModalOpen && (
        <ModalLoading>
          <p style={{ color: 'white' }}>⚠️ {detailError}</p>
        </ModalLoading>
      )}
    </Homepage>
  );
}

export default App;

const Homepage = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  margin-bottom: 40px;
  padding: 20px;
  gap: 15px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 1200;
  margin: 0;
`;

const Subtitle = styled.div`
  font-size: 18px;
  opacity: 0.9;
  margin: 8px 0 0 0;
`;

const Search = styled.div`
  max-width: 600px;
  margin: 0 auto 40px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  font-size: 18px;
  border: none;
  border-radius: 50px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  outline: none;
  transition: box-shadow 0.3s;
  &:focus {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Result = styled.div`
  color: white;
  text-align: center;
  font-size: 18px;
  margin-bottom: 25px;
  font-weight: 500;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const StatusPage = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: white;
  font-size: 20px;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ModalLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;