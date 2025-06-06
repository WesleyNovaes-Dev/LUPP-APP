import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/Auth";

import "./style.css"; 
import Membros from "../../assets/images/Membro LUPP.png";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", login: "", password: "", confirmPassword: "" });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const showMessage = (msg, type = "success") => {
    setMessage({ text: msg, type });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return showMessage("Senhas não coincidem", "error");
    }

    setLoading(true);
    try {
      // Cadastro
      await register({ name: form.name, login: form.login, password: form.password, role: "ADMIN" });
      showMessage("Cadastro realizado com sucesso!", "success");

      // Redirecionar para login
      navigate("/login");
    } catch (error) {
      showMessage("Erro ao cadastrar. Verifique os dados.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cadastro-page">
      <div className="cadastro-container">
        <div className="membro-lupp-section">
          <div className="coroa-container">
            <div className="coroa-icon">
              <img src={Membros} alt="Membro LUPP" />
            </div>
          </div>
        </div>
        <div className="form-section">
          <form className="cadastro-form" onSubmit={handleSubmit}>
            {message && <div className={`alert ${message.type}`}>{message.text}</div>}

            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" required placeholder="Nome" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="login">E-mail</label>
              <input type="email" name="login" required placeholder="E-mail" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input type="password" name="password" required placeholder="Senha" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar Senha</label>
              <input type="password" name="confirmPassword" required placeholder="Confirmar senha" onChange={handleChange} />
            </div>

            <button type="submit" className="cadastro-button" disabled={loading}>
              {loading ? "Cadastrando..." : "Cadastrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
