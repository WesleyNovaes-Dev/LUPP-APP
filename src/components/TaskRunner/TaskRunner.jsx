// src/components/TaskRunner.jsx
import React, { useState } from "react";
import { Button, Radio, RadioGroup, FormControlLabel, FormControl, Typography } from "@mui/material";

const TaskRunner = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleNext = () => {
    if (selectedAnswer !== null) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    }
  };

  const question = questions[currentQuestionIndex];

  return (
    <div>
      <Typography variant="h6">{question.description}</Typography>
      <FormControl>
        <RadioGroup value={selectedAnswer} onChange={(e) => setSelectedAnswer(e.target.value)}>
          {question.alternatives.map((alternative, index) => (
            <FormControlLabel key={index} value={alternative.text} control={<Radio />} label={alternative.text} />
          ))}
        </RadioGroup>
      </FormControl>
      <Button variant="contained" onClick={handleNext} disabled={selectedAnswer === null}>Próxima Pergunta</Button>
    </div>
  );
};

export default TaskRunner;
