import axios from "axios";

export const baseURL = "https://week11-server.onrender.com";

export const getPerPage = async(page) => {
    const response = await axios.get(`${baseURL}/lionlist?page=${page}`);
    return response.data;
}

// 성별
export const getGenderUser = async(gender) => {
    const response = await axios.get(`${baseURL}/lionlist?gender=${gender}`);
    return response.data;
}

// 파트별
export const getPartUser = async(part) => {
    const response = await axios.get(`${baseURL}/lionlist?part=${part}`);
    return response.data;
}

// 전체 데이터 불러오기
export const getAllUsers = async () => {
    const response = await axios.get(`${baseURL}/lionlist?page=0`);
    return response.data;
}  