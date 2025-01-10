import apiClient from './apiClient';

const API_KEY = 'DU6OKC0XfoP5aESXBw5Di4WttXlWftqT';

// Tipos para las respuestas de la API
export interface Holiday {
  name: string;
  description: string;
  date: {
    iso: string;
  };
  type: string[];
}

export interface HolidaysResponse {
  meta: {
    code: number;
  };
  response: {
    holidays: Holiday[];
  };
}

// Función para obtener días festivos
export const getHolidays = async (country: string, year: number): Promise<Holiday[]> => {
  try {
    const response = await apiClient.get<HolidaysResponse>('/holidays', {
      params: {
        api_key: API_KEY,
        country,
        year,
      },
    });
    return response.data.response.holidays;
  } catch (error) {
    console.error('Error fetching holidays:', error);
    throw error;
  }
};
