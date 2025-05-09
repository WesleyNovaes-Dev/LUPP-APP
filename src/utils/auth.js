//src/utils/auth.js
// Salva o token no localStorage
export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

// Recupera o token
export const getToken = () => {
  return localStorage.getItem("token");
};

// Remove o token (para logout, por exemplo)
export const removeToken = () => {
  localStorage.removeItem("token");
};
