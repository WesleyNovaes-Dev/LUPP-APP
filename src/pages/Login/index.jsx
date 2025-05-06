import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { login } from "../../services/Auth";
import { saveToken } from "../../utils/auth";

export default function LoginPage() {
  const [form, setForm] = useState({ login: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      const { token } = await login(form);
      saveToken(token);
      alert("Login bem-sucedido!");
      // Redirecionar ou atualizar UI
    } catch (error) {
      alert("Falha no login.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={10}>
        <Typography variant="h4" gutterBottom>Login</Typography>
        <TextField fullWidth label="Login" name="login" onChange={handleChange} margin="normal" />
        <TextField fullWidth label="Senha" name="password" type="password" onChange={handleChange} margin="normal" />
        <Button fullWidth variant="contained" color="primary" onClick={handleSubmit}>Entrar</Button>
      </Box>
    </Container>
  );
}
