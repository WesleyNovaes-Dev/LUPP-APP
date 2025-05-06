// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com'
});

export const fetchProducts = () => api.get('/products');
