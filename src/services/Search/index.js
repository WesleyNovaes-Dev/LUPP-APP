// src/Services/Search/index.js
import axios from "axios";
import API_BASE_URL from "../index";

export const searchMedia = async (searchQuery) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/media/search/${searchQuery}`);
    return res.data; // Retorna os dados recebidos da API
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw new Error("Falha na busca");
  }
};
