// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://18.226.159.101:8080/api/media/type'
});

export const fetchProducts = () => api.get('/POST');
