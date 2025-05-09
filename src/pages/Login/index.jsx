import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/Auth';
import './style.css';
import Membros from '../../assets/images/Membro LUPP.png';

export default function LoginPage() {
  const [form, setForm] = useState({ login: '', password: '' });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const showMessage = (msg, type = 'success') => {
    setMessage({ text: msg, type });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { token } = await login(form);
      localStorage.setItem('auth_token', token);
      showMessage('Login bem-sucedido!', 'success');
      navigate('/home');
    } catch (error) {
      showMessage('Falha no login. Verifique suas credenciais.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Redireciona para a página de cadastro
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
              <label htmlFor="login">E-mail</label>
              <input
                type="email"
                name="login"
                required
                placeholder="E-mail"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                required
                placeholder="Senha"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="cadastro-button" disabled={loading}>
              {loading ? 'Entrando...' : 'Entrar'}
            </button>

            {/* Botão de redirecionamento para o cadastro */}
            <button
              type="button"
              className="cadastro-button secondary"
              onClick={handleRegisterRedirect}
            >
              Cadastrar-se
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
