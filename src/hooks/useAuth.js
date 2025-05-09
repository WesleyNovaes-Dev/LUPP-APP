import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('auth_token'); // Recupera o token

    // Verifica se o token existe e é válido
    if (token) {
      setIsAuthenticated(true);
        

    } else {
      setIsAuthenticated(false);
        

    }
  }, []);
  return { isAuthenticated };
};

export { useAuth };
