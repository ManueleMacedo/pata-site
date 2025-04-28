import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Telainicial from "./pages/telainicial";
import TelaLogin from "./pages/telalogin";
import TelaEsqueciSenha from "./pages/telaesquecisenha";
import TelaAgendamento from "./pages/telaagendamento"; // <-- Corrigi aqui

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Telainicial />} />
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/esqueci-senha" element={<TelaEsqueciSenha />} />
        <Route path="/agendamento-consulta" element={<TelaAgendamento />} />
      </Routes>
    </Router>
  );
}

export default App;
