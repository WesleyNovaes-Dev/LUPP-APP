// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import Home from '../pages/Home';
import Midia from '../pages/Midia';
import Login from '../pages/Login';
import RegisterPage from '../pages/register';

import PostList from '../components/PostList/PostList';
import QuestionList from '../components/QuestionList/QuestionList';
import NewPostButton from '../components/NewPostButton/NewPostButton';
import TaskRunner from '../components/TaskRunner/TaskRunner';
import ScoreSummary from '../components/ScoreSummary/ScoreSummary';

import { useAuth } from '../hooks/useAuth';

const App = () => {
  const { isAuthenticated, isAdmin } = useAuth();

  return (
    <Router>
      <Navigation />
      <Routes>
        {/* Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/midia" element={<Midia />} />
        <Route path="/posts" element={<PostList />} />

        {/* Acessível SOMENTE se NÃO estiver logado */}
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!isAuthenticated ? <RegisterPage /> : <Navigate to="/" />} />

        {/* Logado */}
        <Route path="/questions" element={isAuthenticated ? <QuestionList /> : <Navigate to="/login" />} />
        <Route path="/task-runner" element={isAuthenticated ? <TaskRunner /> : <Navigate to="/login" />} />
        <Route path="/score-summary" element={isAuthenticated ? <ScoreSummary /> : <Navigate to="/login" />} />

        {/* Admin */}
        <Route path="/new-post" element={isAdmin ? <NewPostButton /> : <Navigate to="/posts" />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
