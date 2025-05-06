// src/utils/auth.js

export const saveToken = (token) => {
    localStorage.setItem("authToken", token);
  };
  
  export const getToken = () => {
    return localStorage.getItem("authToken");
  };
  
  localStorage.removeItem("authToken");
