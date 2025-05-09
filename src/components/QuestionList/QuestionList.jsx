import React, { useEffect, useState } from "react";
import { getQuestions } from "../../services/PostService/";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";

const QuestionList = () => {
  const { isAuthenticated } = useAuth();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('auth_token'); // Recupera o token do localStorage

    if (isAuthenticated && token) {
      const fetchQuestions = async () => {
        const data = await getQuestions(token); // Passa o token aqui!
        setQuestions(data);
      };
      fetchQuestions();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Typography>Você precisa estar logado para acessar as enquetes.</Typography>;
  }

  return (
    <div>
      {questions.map((question) => (
        <Card key={question.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{question.title}</Typography>
            <Typography variant="body2">{question.description}</Typography>
            <Button variant="contained">Realizar tarefa</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuestionList;
