// src/components/CreateQuestionForm.jsx
import React, { useState } from "react";
import { Button, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { createPost } from "../../services/PostService/index";

const CreateQuestionForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [questions, setQuestions] = useState([{ description: "", alternatives: [] }]);

  const handleSubmit = async () => {
    const data = {
      title,
      description,
      category,
      type: "QUESTION",
      questions,
    };
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify(data));

    await createPost(formData);
  };

  return (
    <form>
      <TextField label="Título" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth margin="normal" />
      <TextField label="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth margin="normal" />
      <FormControl fullWidth margin="normal">
        <InputLabel>Categoria</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <MenuItem value="Categoria1">Categoria 1</MenuItem>
          <MenuItem value="Categoria2">Categoria 2</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" component="label">
        Escolher arquivo
        <input type="file" hidden onChange={(e) => setFile(e.target.files[0])} />
      </Button>
      <Button variant="contained" onClick={handleSubmit} fullWidth>Criar Enquete</Button>
    </form>
  );
};

export default CreateQuestionForm;
