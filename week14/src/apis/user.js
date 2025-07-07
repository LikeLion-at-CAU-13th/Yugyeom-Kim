import axios from "axios";
import { getAuthAxios } from "./authAxios";

const baseURL = `https://likelion-cau.r-e.kr`;

export const signup = async (id, pw, name, age) => {
    const result = await axios.post(`${baseURL}/accounts/signup/`, {
        id,
        pw,
        name,
        age,
    });
    return result;
}

export const login = async(id, pw) => {
    const result = await axios.post(`${baseURL}/accounts/login/`, {
        id,
        pw,
    });
    return result.data;
}

// export const getMyPage = async (token) => {
//     try {
//         const response = await axios.post(`${baseURL}/accounts/mypage`,{
//             headers: {
//                 Authorization: `Bearer ${accessToken}`,
//             },
//         });
//         return response.data;

//     } catch (error) {
//         if(error.response?.status === 401) {
//             try{
//                 // 1. 새 토큰 발급 시도
//                 const newToken = await getNewRefreshToken();

//                 // 2. 로컬 스토리지 업데이트
//                 localStorage.setItem("access", newTokens.accessToken);
//                 localStorage.setItem("refresh", newTokens.refreshToken);

//                 // 3. 새 토큰으로 재요청
//                 const retryResponse = await axios.get(`${baseURL}/accounts/mypage`,{
//                     headers: {
//                         Authorization: `Bearer ${newTokens.accessToken}`,
//                     },
//                 });
//                 return retryResponse.data;
//             } catch (refreshError) {
//                 alert("토큰이 만료되었습니다. 다시 로그인 해주세요");
//                 throw refreshError;
//             }
//         }else {
//             throw error;
//         }
//     }
// };

export const getMyPage = async (token) => {
    const authAxios = getAuthAxios(token);
    const result = authAxios.get("/accounts/mypage");
    return result;
}

export const getNewRefreshToken = async () => {
    try {
        const accessToken = localStorage.getItem("access");
        const refreshToken = localStorage.getItem("refresh");

        const result = await axios.post(
            `${baseURL}(/accounts/refresh`,
            {
                refreshToken,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return result.data
    } catch (error) {
        // 토큰이 만료되었을 경우
        alert("토큰이 만료되었습니다. 다시 로그인해주세요.")
    }
}