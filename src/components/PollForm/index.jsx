import React, { useState } from 'react';
import {
  TextField, IconButton, Radio, Box, Typography, Button
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const PollForm = ({ id, onRemove }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['']);
  const [correctIndex, setCorrectIndex] = useState(null);

  const handleOptionChange = (value, idx) => {
    const updated = [...options];
    updated[idx] = value;
    setOptions(updated);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleRemoveOption = (idx) => {
    const updated = options.filter((_, i) => i !== idx);
    setOptions(updated);
    if (correctIndex === idx) setCorrectIndex(null);
  };

  return (
    <Box border={1} borderColor="grey.300" borderRadius={2} p={2} position="relative">
      <IconButton
        size="small"
        onClick={() => onRemove(id)}
        sx={{ position: 'absolute', top: 8, right: 8 }}
      >
        <CloseIcon />
      </IconButton>

      <TextField
        label="Pergunta"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        fullWidth
        margin="dense"
        required
      />

      {options.map((opt, idx) => (
        <Box key={idx} display="flex" alignItems="center" gap={1} mt={1}>
          <Radio
            checked={correctIndex === idx}
            onChange={() => setCorrectIndex(idx)}
          />
          <TextField
            value={opt}
            onChange={(e) => handleOptionChange(e.target.value, idx)}
            placeholder={`Opção ${idx + 1}`}
            fullWidth
            required
          />
          {options.length > 1 && (
            <IconButton size="small" onClick={() => handleRemoveOption(idx)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
      ))}

      <Button onClick={handleAddOption} size="small" sx={{ mt: 1 }}>
        + Adicionar Opção
      </Button>
    </Box>
  );
};

export default PollForm;
