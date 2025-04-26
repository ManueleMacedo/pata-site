import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"

import Telainicial from "./pages/telainicial";
import TelaLogin from "./pages/telalogin";
import TelaEsqueciSenha from "./pages/telaesquecisenha"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Telainicial />} />
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/esqueci-senha" element={<TelaEsqueciSenha />} />
        {/* Aqui você adiciona outras rotas depois */}
      </Routes>
    </Router>
  );
}

export default App;
