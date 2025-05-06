// src/pages/QuestionList.jsx
import React, { useEffect, useState } from "react";
import { getQuestionsMedia } from "../Services/Question";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Chip,
  Divider,
  CircularProgress,
} from "@mui/material";

export default function QuestionList() {
  const [mediaList, setMediaList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuestionsMedia()
      .then(setMediaList)
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Vídeos com Perguntas</Typography>
      {mediaList.map((media) => (
        <Card key={media.id} sx={{ my: 2, p: 2 }}>
          <CardMedia
            component="img"
            height="200"
            image={media.mediaUrl}
            alt={media.title}
          />
          <CardContent>
            <Typography variant="h6">{media.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {media.description}
            </Typography>

            <Typography variant="subtitle1" mt={2}>Perguntas:</Typography>
            <List>
              {media.questions.map((q) => (
                <div key={q.id}>
                  <ListItem>
                    <ListItemText
                      primary={q.description}
                      secondary={`Valor: ${q.value}`}
                    />
                  </ListItem>
                  {q.alternatives.map((alt) => (
                    <Chip
                      key={alt.id}
                      label={alt.text}
                      color={alt.correct ? "success" : "default"}
                      sx={{ m: 0.5 }}
                    />
                  ))}
                  <Divider sx={{ my: 1 }} />
                </div>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
