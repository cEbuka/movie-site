import axios from "axios";
const API_BASE_URL = 'http://localhost:5000';

export async function getTrendingMovies() {
    try {
        const response = await axios.get(`${API_BASE_URL}/movie/week`);
        return response.data;
    } catch (error) {
        return error;
    }
}