import React, { useState } from "react";
import { Search } from "lucide-react";
import { searchMedia } from "../../services/Search"; // Importe a função de pesquisa
import "./style.css";
import Logo from "../../assets/icons/logo.png";

const NavigationBar = () => {
  const [searchQuery, setSearchQuery] = useState("");  // Guarda o texto da pesquisa
  const [results, setResults] = useState([]);  // Guarda os resultados da pesquisa
  const [loading, setLoading] = useState(false);  // Estado para controle de carregamento

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Se a pesquisa estiver vazia, limpe os resultados
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    setLoading(true);

    try {
      // Chama a API para buscar os dados
      const data = await searchMedia(query);
      setResults(data); // Atualiza o estado com os resultados da pesquisa
    } catch (error) {
      setResults([]); // Limpa os resultados em caso de erro
    } finally {
      setLoading(false);
    }
  };

  return (
    <nav className="nav-container">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Links */}
      <ul className="nav-links">
        <li>Manutenções Básicas</li>
        <li>Saúde e Bem Estar</li>
        <li>Receitas</li>
        <li>Área Membros</li>
      </ul>

      {/* Barra de Pesquisa */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar..."
          className="search-input"
          value={searchQuery}
          onChange={handleSearchChange} // Atualiza os resultados enquanto digita
        />
        <Search className="search-icon" />

        {/* Exibe resultados se houverem */}
        {searchQuery && (
          <div className="search-results">
            {loading ? (
              <div className="loading">Carregando...</div>
            ) : (
              <ul>
                {results.length > 0 ? (
                  results.map((item, index) => (
                    <li key={index}>{item.title}</li> // Aqui você pode modificar o que exibir de acordo com a resposta da API
                  ))
                ) : (
                  <li>Nenhum resultado encontrado</li>
                )}
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
