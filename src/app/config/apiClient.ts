import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const apiClient = axios.create({
	baseURL: SERVER_URL,
});
