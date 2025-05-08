// src/pages/Home/HomePage.jsx
import React, { useEffect, useState } from "react";
import { getPosts } from "../../services/PostService";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import "./style.css";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        const list = Array.isArray(data) ? data : data?.content || [];
        setPosts(list);
      } catch (err) {
        console.error("Erro ao carregar os posts:", err);
        setError("Erro ao carregar os posts");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleOpenDialog = (post) => {
    setCurrentPost(post);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentPost(null);
  };

  const renderMedia = (url) => {
    if (!url) {
      return <Typography color="error">Mídia não encontrada.</Typography>;
    }

    const u = url.toLowerCase();

    if (/\.(jpeg|jpg|png|gif|bmp|webp)$/.test(u)) {
      return <img src={url} alt="Post media" className="media-content" />;
    }

    if (/\.(mp4|webm|ogg|mov)$/.test(u)) {
      return (
        <video controls className="media-content">
          <source src={url} type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      );
    }

    return (
      <Typography>
        Tipo de mídia não suportado.&nbsp;
        <a href={url} target="_blank" rel="noopener noreferrer">
          Clique para abrir
        </a>
      </Typography>
    );
  };

  return (
    <Box className="home-container">
      <Box className="home-content">
        <Typography variant="h4" gutterBottom align="center">
          Posts
        </Typography>

        {loading ? (
          <Box className="loading-box">
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" align="center">
            {error}
          </Typography>
        ) : posts.length === 0 ? (
          <Typography align="center">Nenhum post encontrado.</Typography>
        ) : (
          <Box className="posts-grid">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="post-card"
                onClick={() => handleOpenDialog(post)}
              >
                <CardContent>
                  <Typography variant="h6" align="center">
                    {post.title}
                  </Typography>
                  <Box className="media-wrapper">
                    {renderMedia(post.mediaUrl)}
                  </Box>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="center"
                    className="description"
                  >
                    {post.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
      </Box>

      {/* Dialog para exibir mídia em destaque */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>{currentPost?.title}</DialogTitle>
        <DialogContent className="dialog-media">
          {renderMedia(currentPost?.mediaUrl)}
          <Typography mt={2}>{currentPost?.description}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HomePage;
