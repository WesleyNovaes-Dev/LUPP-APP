// src/Services/Question/index.js
import API_BASE_URL from "../index";
import { getToken } from "../../utils/auth";

export const getQuestionsMedia = async () => {
  const token = getToken();
  const response = await fetch(`${API_BASE_URL}/api/media/type/QUESTION`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar mídias com perguntas");
  }

  return response.json();
};
