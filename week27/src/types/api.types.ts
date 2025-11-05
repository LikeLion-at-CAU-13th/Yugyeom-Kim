import type { Movie } from "./movie.types";

export interface ApiResponse {
    results: Movie[];
    total_results: number;
    page: number;
    total_pages: number;
}

export interface ApiError {
    status_code: number;
    status_message: string;
}