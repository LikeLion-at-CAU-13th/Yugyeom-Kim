//authAxios.js

import axios from "axios";
import { getNewRefreshToken } from "./user";

export const getAuthAxios = (token) => {
  const authAxios = axios.create({
    baseURL: "https://likelion-cau.r-e.kr",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  authAxios.interceptors.response.use(
    (response) => response.data, // 응답이 잘 왔으면 받은 응답을 반환
    async (error) => {
      try {
        // 1. 리프레시 토큰으로 새 토큰 요청
        const result = await getNewRefreshToken();

        // 2. 새 accessToken으로 헤더 갱신
        error.config.headers.Authorization = `Bearer ${result.accessToken}`;

        // 3. localStorage 갱신, 오류가 발생한 요청을 했을 때, 헤더에 담아서 보낸 토큰을 새 토큰으로 변경
        localStorage.setItem("access", result.accessToken);
        localStorage.setItem("refresh", result.refreshToken);

        // 4. 원래 요청 재시도
        return (await axios.get(error.config.url, error.config)).data;

      } catch (refreshError) {
        // 리프레시 토큰도 만료된 경우
        alert("다시 로그인 해주세요.");
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");

        // location.href로 강제 이동 (React Router 외부)
        window.location.href = "/";

        return Promise.reject(refreshError);
      }
    }
  );

  return authAxios;
};
