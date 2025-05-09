import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { searchMedia } from "../../services/Search";
import "./style.css";
import Logo from "../../assets/icons/logo.png";

const NavigationBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    setIsAuthenticated(!!token);
  }, []);

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const data = await searchMedia(query);
      setResults(data);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAuthRedirect = () => {
    navigate(isAuthenticated ? "/perfil" : "/login");
  };

  return (
    <nav className="nav-container">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <ul className="nav-links">
        <li>Manutenções Básicas</li>
        <li>Saúde e Bem Estar</li>
        <li>Receitas</li>
        <li>Área Membros</li>
      </ul>

      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar..."
          className="search-input"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Search className="search-icon" />

        {searchQuery && (
          <div className="search-results">
            {loading ? (
              <div className="loading">Carregando...</div>
            ) : (
              <ul>
                {results.length > 0 ? (
                  results.map((item, index) => (
                    <li key={index}>{item.title}</li>
                  ))
                ) : (
                  <li>Nenhum resultado encontrado</li>
                )}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Botão de Perfil ou Login */}
      <div className="auth-button" onClick={handleAuthRedirect}>
        {isAuthenticated ? "Meu Perfil" : "Entrar / Cadastrar"}
      </div>
    </nav>
  );
};

export default NavigationBar;
