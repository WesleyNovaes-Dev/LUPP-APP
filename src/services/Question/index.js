// src/Services/Question/index.js
import API_BASE_URL from "../index";
import { getToken } from "../../utils/auth";

// Função para obter perguntas da mídia
export const getQuestionsMedia = async () => {
  try {
    const token = getToken();  // Obtém o token de autenticação
    const response = await fetch(`${API_BASE_URL}/api/media/type/QUESTION`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar mídias com perguntas");
    }

    return await response.json();  // Retorna o JSON com as perguntas
  } catch (error) {
    console.error("Erro ao buscar perguntas:", error);
    throw new Error("Falha ao buscar perguntas da mídia");
  }
};
