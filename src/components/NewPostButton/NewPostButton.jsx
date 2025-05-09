// src/components/NewPostButton.jsx
import React from "react";
import { Button } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import NewPostDialog from "../NewPostDialog/NewPostDialog";

const NewPostButton = () => {
  const { user } = useAuth();
  const [openDialog, setOpenDialog] = React.useState(false);

  if (!user || user.role !== "ADMIN") return null;

  return (
    <>
      <Button variant="contained" onClick={() => setOpenDialog(true)}>
        Nova Postagem
      </Button>
      <NewPostDialog open={openDialog} onClose={() => setOpenDialog(false)} />
    </>
  );
};

export default NewPostButton;
