import axios from 'axios';

const API_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app';

// Axios örneği oluştur
const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {'Content-Type': 'application/json'},
});

// Kategorileri getiren fonksiyon
export const getCategories = async () => {
  const response = await api.get('/getCategories');
  console.log('getCategories', response.data.data);
  return response.data.data;
};

export const getQuestions = async () => {
  const response = await api.get('/getQuestions');
  console.log('getQuestions', response.data);
  return response.data;
};

export default api;
