import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Telainicial from "./pages/telainicial";
import TelaLogin from "./pages/telalogin";
import TelaEsqueciSenha from "./pages/telaesquecisenha";
import TelaAgendamento from "./pages/telaagendamento";
import TelaCadastro from "./pages/telacadastro";
import TelaConsultasExames from "./pages/telaconsultas";
import TelaEmergencia from "./pages/telaemergencia";
import TelaEducaPet from "./pages/telaeducapet";
import TelaExames from "./pages/telaexames";
import TelaResultadosExames from "./pages/telaresultados";
import Telafinalizacao from "./pages/telafinalizacao";
import TelaDesmarcarExames from "./pages/teladesmarcarex";
import TelaDesmarcarConsultas from "./pages/teladesmarcarcon";
import TelaContato from "./pages/telacontato";


function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Telainicial />} />
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/cadastro" element={<TelaCadastro />} />
        <Route path="/esqueci-senha" element={<TelaEsqueciSenha />} />
        <Route path="/agendamento-consulta" element={<TelaAgendamento />} />
        <Route path="/tela-consulta" element={<TelaConsultasExames />} />
        <Route path="/tela-emergencia" element={<TelaEmergencia />} />
        <Route path="/tela-educa-pet" element={<TelaEducaPet />} />
        <Route path="/tela-exames" element={<TelaExames />} />
        <Route path="/resultado-exames" element={<TelaResultadosExames />} />
        <Route path="/telafinalizacao" element={<Telafinalizacao />} />
        <Route path="/desmarcar-exames" element={<TelaDesmarcarExames />} />
        <Route path="/desmarcar-consultas" element={<TelaDesmarcarConsultas />} />
        <Route path="/tela-contato" element={<TelaContato />} />
      </Routes>
    </Router>
  );
}

export default App;
