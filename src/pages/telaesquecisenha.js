import React from "react";
import { Link } from "react-router-dom";

function TelaEsqueciSenha() {
  return (
    <div className="tela-login">
      <div className="login-box">
        <img src="imagens/logo pref.png" alt="Prefeitura do Recife" className="logo" />
        <h2>Esqueci minha senha</h2>
        <p>Para redefinir sua senha, informe o email cadastrado na sua conta e lhe enviaremos um link com as instruções.</p>
        <input type="email" placeholder="Email" className="search" />
        <button className="agendar-button">Enviar link de recuperação</button>
        <div style={{ marginTop: "20px" }}>
          <Link to="/login" style={{ marginRight: "10px" }}>Cancelar</Link> 
        </div>
      </div>
    </div>
  );
}

export default TelaEsqueciSenha;
