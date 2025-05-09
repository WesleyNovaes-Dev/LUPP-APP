// src/components/ScoreSummary.jsx
import React from "react";
import { Typography } from "@mui/material";

const ScoreSummary = ({ score, total }) => {
  const percentage = (score / total) * 100;

  return (
    <div>
      <Typography variant="h6">Sua pontuação: {score} de {total}</Typography>
      <Typography variant="body1">Você acertou {percentage}% das perguntas!</Typography>
    </div>
  );
};

export default ScoreSummary;
