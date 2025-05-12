import React from 'react';
import PostList from '../../components/PostList/PostList';
import NewPostButton from '../../components/NewPostButton/NewPostButton';
import QuestionList from '../../components/QuestionList/QuestionList';
import { useAuth } from '../../hooks/useAuth';
import './style.css';

const HomePage = () => {
  const { isAuthenticated, isAdmin } = useAuth();

  return (
    <div className="home-container">
      <h1 className="home-title">Bem-vindo à LUPP</h1>
      <p className="home-subtitle">
        Site onde se encontra os melhores tutoriais para resolver problemas do dia a dia
      </p>

      <div className="home-grid">


        <div className="right-content">
          <NewPostButton />
                    {isAuthenticated ? (
            <QuestionList />
          ) : (
            <p className="auth-warning">
              Você não está logado. Faça login para acessar mais funcionalidades.
            </p>
          )}
          <PostList />

        </div>
      </div>
    </div>
  );
};

export default HomePage;
