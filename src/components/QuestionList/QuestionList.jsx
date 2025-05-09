// src/components/QuestionList/QuestionList.jsx
import React, { useEffect, useState } from "react";
import { getQuestions } from "../../services/PostService";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import "./style.css";

const QuestionList = () => {
  const { isAuthenticated } = useAuth();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (isAuthenticated && token) {
      const fetchQuestions = async () => {
        try {
          const data = await getQuestions(token);
          setQuestions(data);
        } catch (error) {
          console.error("Erro ao buscar questões:", error);
        }
      };
      fetchQuestions();
    }
  }, [isAuthenticated]);

  const renderMedia = (url) => {
    if (!url) return <Typography color="error">Mídia não encontrada.</Typography>;

    const lowerUrl = url.toLowerCase();
    if (lowerUrl.match(/\.(jpeg|jpg|png|gif|bmp|webp)$/)) {
      return <img src={url} alt="Mídia" className="media-content" />;
    }
    if (lowerUrl.match(/\.(mp4|webm|ogg|mov)$/)) {
      return (
        <video controls className="media-content">
          <source src={url} type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      );
    }

    return (
      <Typography>
        Tipo de mídia não suportado.{" "}
        <a href={url} target="_blank" rel="noopener noreferrer">
          Clique para abrir
        </a>
      </Typography>
    );
  };

  if (!isAuthenticated) {
    return <Typography>Você precisa estar logado para acessar as enquetes.</Typography>;
  }

  return (
    <Box className="question-container">
      <Typography variant="h5" gutterBottom>
        Tarefas Disponíveis
      </Typography>
      <div className="question-grid">
        {questions.map((question) => (
          <Card key={question.id} className="question-card">
            <CardContent>
              <Typography variant="h6" align="center">
                {question.title}
              </Typography>

              <Box className="media-wrapper">
                {renderMedia(question.mediaUrl)}
              </Box>

              <Typography variant="body2" className="description" align="center">
                {question.description}
              </Typography>

              <Box display="flex" justifyContent="center" marginTop={2}>
                <Button variant="contained">Realizar tarefa</Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </div>
    </Box>
  );
};

export default QuestionList;
