import React from "react";
import { Search } from "lucide-react";
import "./style.css";
import Logo from "../../assets/icons/logo.png"

const NavigationBar = () => {
  return (
    <nav className="nav-container">

      
      <div className="logo"><img src={Logo}/></div>

      {/* Links */}
      <ul className="nav-links">
        <li>Manutenções Básicas</li>
        <li>Saúde e Bem Estar</li>
        <li>Receitas</li>
        <li>Área Membros</li>
      </ul>

      {/* Busca */}
      <div className="search-container">
        <input type="text" placeholder="Buscar..." className="search-input" />
        <Search className="search-icon" />
      </div>
    </nav>
  );
};

export default NavigationBar;
