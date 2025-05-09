// src/Services/Search/index.js
import axios from "axios";
import API_BASE_URL from "../index";

// Função de busca de mídia
export const searchMedia = async (searchQuery) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/media/search/${searchQuery}`);
    return res.data;  // Retorna os dados da mídia encontrada
  } catch (error) {
    console.error("Erro ao buscar mídia:", error);
    throw new Error("Falha na busca de mídia");
  }
};
