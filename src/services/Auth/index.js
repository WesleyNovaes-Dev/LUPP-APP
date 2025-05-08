// src/Services/Auth/index.js
import axios from "axios";
import API_BASE_URL from "../index";

export const login = async (loginData) => {
  const res = await axios.post(
    `${API_BASE_URL}/auth/login`,
    loginData,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return res.data;
};

export const register = async (registerData) => {
  const res = await axios.post(
    `${API_BASE_URL}/auth/register`,
    registerData,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return res.data;
};
