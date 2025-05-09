import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoList from '../../components/VideoList/VideoList';
import './Videos.css';

const VideosPage = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const navigate = useNavigate();

  // Dados organizados por categoria com IDs únicos
  const videosData = {
    todos: [
      {
        id: 'm1',
        title: 'Como trocar o pneu do carro',
        thumbnail: 'https://i.ytimg.com/vi/x0byqTuIKZI/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDgYzoQB5SaMvMK64f9sOJkMmcohA',
        duration: '04:48',
        channel: 'Autoesporte'
      },
      {
        id: 'm2',
        title: 'Como calibrar o pneu no posto',
        thumbnail: 'https://i.ytimg.com/vi/8P4TMLLfu88/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDQBiRsgzPilLIr9ZuTPjblNU_ePg',
        duration: '02:20',
        channel: 'Pensando Bem'
      },
      {
        id: 'm3',
        title: 'Tudo sobre ferramentas',
        thumbnail: 'https://i.ytimg.com/vi/5JxN3ELqo9I/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDsYTO3UctvlWtBx5WcZWuhU920vg',
        duration: '40:44',
        channel: 'Manual do Mundo'
      },
      {
        id: 'm4',
        title: 'Como trocar a resistencia do chuveiro',
        thumbnail: 'https://i.ytimg.com/vi/bdlIP50OAKA/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLC_PvFWwIKLNVvLbMAmiDv-Gs57KQ',
        duration: '6:22',
        channel: 'DP Elétrica'
      },
      {
        id: 's1',
        title: 'Como Fazer a barba com Gillette',
        thumbnail: 'https://i.ytimg.com/vi/ev2A84ocHaQ/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDhE4zkvR4cmf3Gv4FFnUjYq_XnnA',
        duration: '3:49',
        channel: 'Manual do Homem Moderno',
        category: 'saude'
      },
      {
        id: 's2',
        title: 'Como lavar as mãos',
        thumbnail: 'https://i.ytimg.com/vi/rsQlyIwetsE/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBncpLgFbQbgDhIWCrR-P8vJfLNcw',
        duration: '2:51',
        channel: 'Drauzio Varella',
        category: 'saude'
      },
      {
        id: 's3',
        title: 'Como amarrar um tenis',
        thumbnail: 'https://i.ytimg.com/vi/qSRbst4gswE/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAQQSynNRMtmgS-2BMbhwwmMK71Tg',
        duration: '1:51',
        channel: 'SALEX',
        category: 'saude'
      },
      {
        id: 'r1',
        title: 'Como Fazer arroz soltinho',
        thumbnail: 'https://i.ytimg.com/vi/IhUKu07aFkM/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBNj2BqBlabz17uoaRN6g1XwwoHmA',
        duration: '2:11',
        channel: 'Gastronomismo',
        category: 'receitas'
      },
      {
        id: 'r2',
        title: 'Qual tempero usar?',
        thumbnail: 'https://i.ytimg.com/vi/QCt_8yIB0xI/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCmhdrcUi2wcAU0FgS2pXvaHmqojA',
        duration: '9:19',
        channel: 'Guilherme Guzela',
        category: 'receitas'
      },
      {
        id: 'r3',
        title: 'Bolo de caneca de micro-ondas',
        thumbnail: 'https://i.ytimg.com/vi/0HDC2BrgvL8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAt4Qj40HUy7LhYqSv6XhskLL1tOA',
        duration: '01:07',
        channel: 'TudoGostoso',
        category: 'receitas'
      },
      {
        id: 'r4',
        title: 'Massinha de modelar de gelatina',
        thumbnail: 'https://i.ytimg.com/vi/G9diDi8FEwI/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBpKHhNGrcJp7uKNLpda61mG-PNxg',
        duration: '02:40',
        channel: 'Elenice Carneiro',
        category: 'receitas'
      },
      {
        id: 'r5',
        title: 'Doce Simples',
        thumbnail: 'https://i.ytimg.com/vi/aGfd730CBg8/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4AbYIgAKAD4oCDAgAEAEYVCBhKGUwDw==&rs=AOn4CLCqkyeelkAVKN6dOBmnxhkGaJAeUg',
        duration: '00:20',
        channel: 'Cozinheiro Tommy',
        category: 'receitas'
      }
    ],
    manutencao: [
      {
        id: 'm1',
        title: 'Como trocar o pneu do carro',
        thumbnail: 'https://i.ytimg.com/vi/x0byqTuIKZI/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDgYzoQB5SaMvMK64f9sOJkMmcohA',
        duration: '04:48',
        channel: 'Autoesporte'
      },
      {
        id: 'm2',
        title: 'Como calibrar o pneu no posto',
        thumbnail: 'https://i.ytimg.com/vi/8P4TMLLfu88/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDQBiRsgzPilLIr9ZuTPjblNU_ePg',
        duration: '02:20',
        channel: 'Pensando Bem'
      },
      {
        id: 'm3',
        title: 'Tudo sobre ferramentas',
        thumbnail: 'https://i.ytimg.com/vi/5JxN3ELqo9I/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDsYTO3UctvlWtBx5WcZWuhU920vg',
        duration: '40:44',
        channel: 'Manual do Mundo'
      },
      {
        id: 'm4',
        title: 'Como trocar a resistencia do chuveiro',
        thumbnail: 'https://i.ytimg.com/vi/bdlIP50OAKA/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLC_PvFWwIKLNVvLbMAmiDv-Gs57KQ',
        duration: '6:22',
        channel: 'DP Elétrica'
      }
    ],
    saude: [
      {
        id: 's1',
        title: 'Como Fazer a barba com Gillette',
        thumbnail: 'https://i.ytimg.com/vi/ev2A84ocHaQ/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDhE4zkvR4cmf3Gv4FFnUjYq_XnnA',
        duration: '3:49',
        channel: 'Manual do Homem Moderno',
        category: 'saude'
      },
      {
        id: 's2',
        title: 'Como lavar as mãos',
        thumbnail: 'https://i.ytimg.com/vi/rsQlyIwetsE/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBncpLgFbQbgDhIWCrR-P8vJfLNcw',
        duration: '2:51',
        channel: 'Drauzio Varella',
        category: 'saude'
      },
      {
        id: 's3',
        title: 'Como amarrar um tenis',
        thumbnail: 'https://i.ytimg.com/vi/qSRbst4gswE/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAQQSynNRMtmgS-2BMbhwwmMK71Tg',
        duration: '1:51',
        channel: 'SALEX',
        category: 'saude'
      }
    ],
    receitas: [
      {
        id: 'r1',
        title: 'Como Fazer arroz soltinho',
        thumbnail: 'https://i.ytimg.com/vi/IhUKu07aFkM/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBNj2BqBlabz17uoaRN6g1XwwoHmA',
        duration: '2:11',
        channel: 'Gastronomismo',
        category: 'receitas'
      },
      {
        id: 'r2',
        title: 'Qual tempero usar?',
        thumbnail: 'https://i.ytimg.com/vi/QCt_8yIB0xI/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCmhdrcUi2wcAU0FgS2pXvaHmqojA',
        duration: '9:19',
        channel: 'Guilherme Guzela',
        category: 'receitas'
      },
      {
        id: 'r3',
        title: 'Bolo de caneca de micro-ondas',
        thumbnail: 'https://i.ytimg.com/vi/0HDC2BrgvL8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAt4Qj40HUy7LhYqSv6XhskLL1tOA',
        duration: '01:07',
        channel: 'TudoGostoso',
        category: 'receitas'
      },
      {
        id: 'r4',
        title: 'Massinha de modelar de gelatina',
        thumbnail: 'https://i.ytimg.com/vi/G9diDi8FEwI/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBpKHhNGrcJp7uKNLpda61mG-PNxg',
        duration: '02:40',
        channel: 'Elenice Carneiro',
        category: 'receitas'
      },
      {
        id: 'r5',
        title: 'Doce Simples',
        thumbnail: 'https://i.ytimg.com/vi/aGfd730CBg8/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4AbYIgAKAD4oCDAgAEAEYVCBhKGUwDw==&rs=AOn4CLCqkyeelkAVKN6dOBmnxhkGaJAeUg',
        duration: '00:20',
        channel: 'Cozinheiro Tommy',
        category: 'receitas'
      }
    ]
  };

  const filteredVideos = activeCategory === 'todos' 
    ? videosData.todos 
    : videosData[activeCategory] || [];

  const handleSubmitVideo = () => {
    navigate('/enviar-video');
  };

  return (
    <div className="videos-container">
      <h1>Vídeos Tutoriais</h1>
      
      <div className="categories-nav">
        <button 
          className={activeCategory === 'todos' ? 'active' : ''}
          onClick={() => setActiveCategory('todos')}
        >
          Todos
        </button>
        <button 
          className={activeCategory === 'manutencao' ? 'active' : ''}
          onClick={() => setActiveCategory('manutencao')}
        >
          Manutenção
        </button>
        <button 
          className={activeCategory === 'saude' ? 'active' : ''}
          onClick={() => setActiveCategory('saude')}
        >
          Saúde
        </button>
        <button 
          className={activeCategory === 'receitas' ? 'active' : ''}
          onClick={() => setActiveCategory('receitas')}
        >
          Receitas
        </button>
      </div>
      
      <VideoList videos={filteredVideos} />
      
      <div className="submit-video-section">
        <h2>Quer compartilhar um vídeo?</h2>
        <p>Se você tem um vídeo útil que gostaria de compartilhar com nossa comunidade, envie-o para nós!</p>
        <button 
          onClick={handleSubmitVideo}
          className="submit-video-button"
        >
          Enviar um Vídeo
        </button>
      </div>
    </div>
  );
};

export default VideosPage;