// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.24:8081/api/media/type'
});

export const fetchProducts = () => api.get('/POST');
