import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import videoService from '../../services/videoService';
import './EnviarVideo.css';

const EnviarVideo = () => {
  const [form, setForm] = useState({
    title: '',
    url: '',
    category: 'manutencao',
    description: '',
    author: '',
    channel: '',       // Novo campo: nome do canal
    duration: '',      // Novo campo: duração do vídeo
    thumbnail: ''      // Novo campo: URL da thumbnail (opcional)
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleDurationChange = (e) => {
    // Validação básica para formato de duração (MM:SS)
    const value = e.target.value;
    if (/^\d{0,2}:?\d{0,2}$/.test(value)) {
      setForm(prev => ({ ...prev, duration: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação adicional da duração
    if (!/^\d{2}:\d{2}$/.test(form.duration)) {
      alert('Por favor, insira a duração no formato MM:SS');
      return;
    }

    try {
      await videoService.submitVideo(form);
      alert('Vídeo enviado para aprovação!');
      navigate('/videos');
    } catch (error) {
      alert('Erro ao enviar vídeo: ' + error.message);
    }
  };

  return (
    <div className="enviar-video-container">
      <h1>Enviar Novo Vídeo</h1>
      <form onSubmit={handleSubmit} className="video-form">
        {/* Campo: Nome do Canal */}
        <div className="form-group">
          <label>Nome do Canal*</label>
          <input
            type="text"
            name="channel"
            value={form.channel}
            onChange={handleChange}
            placeholder="Ex: Cozinha Criativa"
            required
          />
        </div>

        {/* Campo: Título do Vídeo */}
        <div className="form-group">
          <label>Título do Vídeo*</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Ex: Como fazer bolo de chocolate"
            required
          />
        </div>

        {/* Campo: Duração do Vídeo */}
        <div className="form-group">
          <label>Duração (MM:SS)*</label>
          <input
            type="text"
            name="duration"
            value={form.duration}
            onChange={handleDurationChange}
            placeholder="Ex: 10:30"
            required
          />
          <small>Formato: minutos:segundos (MM:SS)</small>
        </div>

        {/* Campo: URL do Vídeo */}
        <div className="form-group">
          <label>URL do Vídeo (YouTube/Vimeo)*</label>
          <input
            type="url"
            name="url"
            value={form.url}
            onChange={handleChange}
            placeholder="https://www.youtube.com/watch?v=..."
            required
          />
        </div>

        {/* Campo: Thumbnail (opcional) */}
        <div className="form-group">
          <label>URL da Thumbnail (opcional)</label>
          <input
            type="url"
            name="thumbnail"
            value={form.thumbnail}
            onChange={handleChange}
            placeholder="https://exemplo.com/thumbnail.jpg"
          />
        </div>

        {/* Campo: Categoria */}
        <div className="form-group">
          <label>Categoria*</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="manutencao">Manutenção</option>
            <option value="saude">Saúde</option>
            <option value="receitas">Receitas</option>
          </select>
        </div>

        {/* Campo: Descrição */}
        <div className="form-group">
          <label>Descrição</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            placeholder="Descreva o conteúdo do vídeo..."
          />
        </div>

        {/* Campo: Autor (pode ser o nome da pessoa que está enviando) */}
        <div className="form-group">
          <label>Seu Nome*</label>
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
            placeholder="Seu nome ou identificação"
            required
          />
        </div>

        <div className="form-actions">
          <button type="button" onClick={() => navigate('/videos')} className="cancel-button">
            Cancelar
          </button>
          <button type="submit" className="submit-button">
            Enviar Vídeo
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnviarVideo;