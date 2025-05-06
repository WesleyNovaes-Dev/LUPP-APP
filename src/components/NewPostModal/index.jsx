import React, { useState } from 'react';
import {
  Modal, Box, Typography, TextField, Button,
  Checkbox, FormControlLabel, IconButton
} from '@mui/material';
import PollForm from './PollForm';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

const NewPostModal = ({ open, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [mediaFile, setMediaFile] = useState(null);
  const [enablePoll, setEnablePoll] = useState(false);
  const [polls, setPolls] = useState([]);

  const handleAddPoll = () => {
    setPolls([...polls, { id: Date.now() }]);
  };

  const handleRemovePoll = (id) => {
    setPolls(polls.filter(p => p.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, videoUrl, mediaFile, polls });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">Nova Postagem</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
          />

          <TextField
            label="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={4}
            fullWidth
          />

          <Box>
            <Button component="label" disabled={videoUrl !== ''}>
              Upload de Mídia
              <input
                type="file"
                hidden
                accept="image/*,video/*"
                onChange={(e) => {
                  setMediaFile(e.target.files[0]);
                  setVideoUrl('');
                }}
              />
            </Button>
            {mediaFile && <Typography mt={1}>{mediaFile.name}</Typography>}
          </Box>

          <TextField
            label="URL do Vídeo"
            value={videoUrl}
            onChange={(e) => {
              setVideoUrl(e.target.value);
              setMediaFile(null);
            }}
            disabled={!!mediaFile}
            fullWidth
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={enablePoll}
                onChange={() => setEnablePoll(!enablePoll)}
              />
            }
            label="Adicionar Enquete"
          />

          {enablePoll && (
            <Box display="flex" flexDirection="column" gap={2}>
              {polls.map((poll) => (
                <PollForm key={poll.id} id={poll.id} onRemove={handleRemovePoll} />
              ))}
              <Button onClick={handleAddPoll}>+ Adicionar Enquete</Button>
            </Box>
          )}

          <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
            <Button onClick={onClose} color="secondary">Cancelar</Button>
            <Button variant="contained" type="submit">Postar</Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default NewPostModal;
