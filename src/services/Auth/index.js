// src/Services/Auth/index.js
import axios from "axios";
import API_BASE_URL from "../index";

// Login do usuário
export const login = async (loginData) => {
  try {
    const res = await axios.post(
      `${API_BASE_URL}/auth/login`,
      loginData,
      { headers: { 'Content-Type': 'application/json' } }
    );
    console.log(res.datas)
    return res.data;  // Retorna o token JWT
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw new Error('Falha ao realizar o login');
  }
};

// Registro do usuário
export const register = async (registerData) => {
  try {
    const res = await axios.post(
      `${API_BASE_URL}/auth/register`,
      registerData,
      { headers: { "Content-Type": "application/json" } }
    );
    return res.data;  // Retorna os dados após o registro
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    throw new Error("Falha ao registrar o usuário");
  }
};
