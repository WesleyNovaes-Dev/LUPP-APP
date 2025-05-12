import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import SupportButton from '../../components/SupportButton/SuportButton.jsx';
import './VideoPlayer.css';

const VideoPlayer = () => {
  const { id } = useParams();
  const playerRef = useRef(null);
  const intervalRef = useRef(null);
  const [videoProgress, setVideoProgress] = useState(0);
  const [showPointsButton, setShowPointsButton] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [player, setPlayer] = useState(null);

  const videoData = {
    
'm1': {
  title: 'Como trocar o pneu do carro',
  videoId: 'x0byqTuIKZI', 
  description: 'Aprenda passo a passo como trocar o pneu do seu carro de forma segura e eficiente.',
},
'm2': {
  title: 'Como calibrar o pneu no posto',
  videoId: '8P4TMLLfu88', 
  description: 'Passo a passo completo para calibrar os pneus do carro no posto de gasolina! Saiba a pressão ideal, como usar o calibrador e evite desgaste precoce.',
},
'm3': {
  title: 'Tudo sobre ferramentas',
  videoId: '5JxN3ELqo9I', 
  description: 'Guia completo para iniciantes em ferramentas! Conheça os tipos, usos e dicas de manutenção. Martelo, chave de fenda, furadeira e muito mais explicados.',
},
'm4': {
  title: 'Como trocar a resistencia do chuveiro',
  videoId: 'bdlIP50OAKA', 
  description: 'Passo a passo simples para trocar a resistência do chuveiro elétrico! Economize com consertos em casa e evite banhos frios. Dicas de segurança inclusas!',
},
's1': {
  title: 'Como Fazer a barba com Gillette',
  videoId: 'ev2A84ocHaQ', 
  description: 'Aprenda o passo a passo para uma barba perfeita com o barbeador Gillette! Desde o preparo da pele até os movimentos certos para evitar irritações. Dicas de espuma, pós-barba e muito mais!',
},
's2': {
  title: 'Como lavar as mãos',
  videoId: 'rsQlyIwetsE', 
  description: 'Descubra a forma correta de lavar as mãos e se proteger de germes! Passo a passo rápido, desde a quantidade de sabão até a secagem ideal. Saúde começa com higiene!',
},
's3': {
  title: 'Como amarrar um tenis',
  videoId: 'qSRbst4gswE', 
  description: 'Ensine seus filhos (ou aprenda você mesmo) a amarrar os cadarços do tênis de um jeito fácil e rápido! Método simples que nunca mais se esquece.',
},
'r1': {
  title: 'Como Fazer arroz soltinho',
  videoId: 'IhUKu07aFkM', 
  description: 'O segredo do arroz soltinho e bem temperado está aqui! Aprenda a medida certa de água, o tempo de cozimento e dicas para não errar mais na panela.',
},
'r2': {
  title: 'Qual tempero usar?',
  videoId: 'QCt_8yIB0xI', 
  description: '"Guia definitivo para temperar seus pratos! Conheça as combinações perfeitas de ervas, especiarias e condimentos para carnes, saladas e muito mais.',
},
'r3': {
  title: 'Bolo de caneca de micro-ondas',
  videoId: '0HDC2BrgvL8', 
  description: 'Sabe aquela vontade de um docinho rápido? Aprenda a fazer um bolo de caneca no micro-ondas em apenas 5 minutos! Fácil, rápido e delicioso.',
},
'r4': {
  title: 'Massinha de modelar de gelatina',
  videoId: 'G9diDi8FEwI', 
  description: 'Diversão garantida para as crianças! Aprenda a fazer massinha de modelar caseira com gelatina, segura e colorida. Ótima para brincar e desenvolver a criatividade!',
},
'r5': {
  title: 'Doce Simples',
  videoId: 'aGfd730CBg8', 
  description: 'Receitas de doces fáceis e rápidos para impressionar! Brigadeiro, leite condensado caramelizado e mais. Perfeitos para sobremesas ou festinhas.',
},

    // ... outros vídeos
  };

  const video = videoData[id] || {
    title: 'Vídeo não encontrado',
    description: 'O vídeo solicitado não está disponível.'
  };

  const handleAddComment = () => {
    if (newComment.trim() === '') {
      alert('Por favor, digite um comentário.');
      return;
    }

    const comment = {
      id: comments.length + 1,
      user: 'Usuário Atual',
      text: newComment,
      timestamp: 'Agora'
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = initializePlayer;
    } else if (video.videoId) {
      initializePlayer();
    }

    return () => {
      if (player) player.destroy();
      clearInterval(intervalRef.current);
    };
  }, [video.videoId]);

  const initializePlayer = () => {
    if (window.YT && video.videoId) {
      if (playerRef.current) {
        const newPlayer = new window.YT.Player(playerRef.current, {
          height: '360',
          width: '640',
          videoId: video.videoId,
          playerVars: {
            controls: 1,
            rel: 0,
            modestbranding: 1,
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        setPlayer(newPlayer);
      }
    }
  };

  const onPlayerReady = () => {
    // Player está pronto
  };

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        if (player && player.getCurrentTime && player.getDuration) {
          const currentTime = player.getCurrentTime();
          const duration = player.getDuration();
          const progress = (currentTime / duration) * 100;
          setVideoProgress(progress);

          if (progress >= 95) {
            setShowPointsButton(true);
            clearInterval(intervalRef.current);
          }
        }
      }, 1000);
    } else if (event.data === window.YT.PlayerState.ENDED) {
      setVideoProgress(100);
      setShowPointsButton(true);
      clearInterval(intervalRef.current);
    } else {
      clearInterval(intervalRef.current);
    }
  };

  const handleClaimPoints = () => {
    alert('Pontos resgatados com sucesso!');
    setShowPointsButton(false);
  };

  return (
    <div className="video-player-container">
      <div className="video-content">
        <div className="video-main">
          <h1>{video.title}</h1>

          <div className="video-wrapper">
            {video.videoId ? (
              <div ref={playerRef} className="video-frame" />
            ) : (
              <div className="video-not-found">
                Vídeo não disponível
              </div>
            )}
          </div>

          <div className="video-actions">
            <span className="video-time">Progresso: {Math.round(videoProgress)}%</span>
            {showPointsButton && (
              <button className="points-button" onClick={handleClaimPoints}>
                Resgatar Pontos
              </button>
            )}
          </div>

          <div className="video-description">
            <h2>{video.title}</h2>
            <p>{video.description}</p>
          </div>
        </div>

        <div className="video-comments">
          <h2>Comentários</h2>

          <div className="comment-form">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Adicione um comentário..."
            />
            <button onClick={handleAddComment}>Enviar</button>
          </div>

          <div className="comments-list">
            {comments.map(comment => (
              <div key={comment.id} className="comment">
                <div className="comment-header">
                  <strong>{comment.user}</strong>
                  <span className="timestamp">{comment.timestamp}</span>
                </div>
                <p>{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Botão de Suporte */}
      <SupportButton />
    </div>
  );
};

export default VideoPlayer;
