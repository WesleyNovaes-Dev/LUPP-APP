// src/services/PostService.js
import axios from "axios";
import API_URL from "../index";

// Função para buscar todos os posts
export const getPosts = async () => {
  try {
    const response = await fetch(`${API_URL}/api/media/type/POST`);
    if (!response.ok) {
      throw new Error("Erro ao buscar posts");
    }
    const data = await response.json();
   
    return data;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return [];
  }
};

// Função para criar um novo post
export const createPost = async (postData) => {
  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar post");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao criar post:", error);
    throw new Error("Falha ao criar o post");
  }
};

