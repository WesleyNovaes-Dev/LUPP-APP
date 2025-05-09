// src/components/NewPostDialog.jsx
import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import CreatePostForm from "../CreatePostForm/CreatePostForm";
import CreateQuestionForm from "../CreateQuestionForm/CreateQuestionForm";

const NewPostDialog = ({ open, onClose }) => {
  const [postType, setPostType] = useState("POST");

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Criar nova postagem</DialogTitle>
      <DialogContent>
        <RadioGroup value={postType} onChange={(e) => setPostType(e.target.value)}>
          <FormControlLabel value="POST" control={<Radio />} label="Nova Postagem" />
          <FormControlLabel value="QUESTION" control={<Radio />} label="Nova Enquete" />
        </RadioGroup>
        {postType === "POST" ? <CreatePostForm /> : <CreateQuestionForm />}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Fechar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewPostDialog;
