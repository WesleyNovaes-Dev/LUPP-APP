import React from 'react';
import PostList from '../../components/PostList/PostList';
import NewPostButton from '../../components/NewPostButton/NewPostButton';
import QuestionList from '../../components/QuestionList/QuestionList';
import { useAuth } from '../../hooks/useAuth';

const HomePage = () => {
  const { isAuthenticated, isAdmin } = useAuth();

  
 

  

  return (
    <div>
      <h1>Bem-vindo à Home Page</h1>

      {/* Botão de novo post, visível apenas para administradores */}
      {isAdmin && <NewPostButton />}

      {/* Exibindo a lista de posts */}
      <PostList />

      {/* Caso o usuário esteja autenticado, exibe algo específico */}
      {isAuthenticated ? (
       
        <QuestionList/>
      ) : (
        <p>Você não está logado. Faça login para acessar mais funcionalidades.</p>
      )}
      {console.log(isAuthenticated)}
    </div>
  );
};

export default HomePage;
