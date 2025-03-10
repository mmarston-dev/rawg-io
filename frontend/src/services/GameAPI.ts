import axios from 'axios';

const apiKey = import.meta.env.VITE_RAWG_API_KEY;
const client = axios.create({
    baseURL: 'https://api.rawg.io/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

interface Game {
    id: number;
    name: string;
    background_image: string;
  }

export const GameApi = {
    GetGames: async (): Promise<Game[]> => {
        const response = await client.get(`games?key=${apiKey}`);
        return response.data.results;
    },
    GetGame: async (id: number): Promise<Game> => {
        const response = await client.get(`games/${id}?key=${apiKey}`);
        return response.data;
    }
}