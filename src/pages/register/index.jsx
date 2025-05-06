import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { register } from "../../services/Auth";


export default function RegisterPage() {
  const [form, setForm] = useState({
    login: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (form.password !== form.confirmPassword) {
      return alert("Senhas não coincidem.");
    }

    try {
      await register({ login: form.login, password: form.password, role: "USER" });
      alert("Cadastro realizado!");
      // Redirecionar ou limpar form
    } catch (error) {
      alert("Erro ao cadastrar.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={10}>
        <Typography variant="h4" gutterBottom>Cadastro</Typography>
        <TextField fullWidth label="E-mail" name="login" onChange={handleChange} margin="normal" />
        <TextField fullWidth label="Senha" name="password" type="password" onChange={handleChange} margin="normal" />
        <TextField fullWidth label="Confirmar Senha" name="confirmPassword" type="password" onChange={handleChange} margin="normal" />
        <Button fullWidth variant="contained" color="primary" onClick={handleSubmit}>Cadastrar</Button>
      </Box>
    </Container>
  );
}
