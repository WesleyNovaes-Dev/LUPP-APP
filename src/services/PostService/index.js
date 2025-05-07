import axios from "axios";
import API_BASE_URL from "../index"; // Importa a URL base da API


export const getPosts = async (searchQuery) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/media/type/POST`);
    return res.data; // Retorna os dados recebidos da API
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw new Error("Falha na busca");
  }
};