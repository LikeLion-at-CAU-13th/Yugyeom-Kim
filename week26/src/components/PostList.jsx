// src/components/PostList.jsx
import styled from "styled-components";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts, getPostsByUsername, uploadPost } from "../api";
import Post from "./Post";
import { FEED_VARIANT } from "../values";
import LoadingPage from "../pages/LoadingPage";
import ErrorPage from "../pages/ErrorPage";
import PostForm from "./PostForm";
import { toast } from "react-toastify";

function PostList({ variant = FEED_VARIANT.HOME_FEED, showPostForm }) {
  const queryClient = useQueryClient();

  // 1. variant 값에 따라 queryKey와 queryFn 동적 설정
  let postsQueryKey;
  let postsQueryFn;

  if (variant === FEED_VARIANT.HOME_FEED) {
    postsQueryKey = ["posts", "home"];
    postsQueryFn = getPosts; // 모든 포스트 조회
  } else if (variant === FEED_VARIANT.MY_FEED) {
    postsQueryKey = ["posts", "myfeed"];
    postsQueryFn = getPostsByUsername; // 내 피드 전용 포스트 조회
  }

  // 2. useQuery로 데이터 불러오기
  const {
    data: postsData,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: postsQueryKey,
    queryFn: postsQueryFn,
  });

  // 3. useMutation으로 업로드 기능 구현 + invalidateQueries로 자동 새로고침
  const uploadPostMutation = useMutation({
    mutationFn: uploadPost,
    onSuccess: () => {
      toast("포스트가 성공적으로 업로드 되었습니다!");
      queryClient.invalidateQueries(["posts"]); // 캐시된 포스트 목록 자동 갱신
    },
    onError: () => {
      toast.error("업로드 중 오류가 발생했습니다.");
    },
  });

  // 4. 업로드 핸들러
  const handleUploadPost = (newPost) => {
    uploadPostMutation.mutate(newPost);
  };

  // 5. 로딩 & 에러 처리
  if (isPending) return <LoadingPage />;
  if (isError) return <ErrorPage message={error?.message} />;

  const posts = postsData?.results ?? [];

  return (
    <ListContainer>
      {showPostForm && (
        <PostForm
          onSubmit={handleUploadPost}
          // 업로드 중 버튼 비활성화
          buttonDisabled={uploadPostMutation.isPending}
        />
      )}

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ListContainer>
  );
}

export default PostList;

const ListContainer = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;
`;
