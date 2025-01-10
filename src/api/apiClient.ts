import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://calendarific.com/api/v2', // Base URL de la API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
