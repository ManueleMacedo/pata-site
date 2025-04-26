import React from "react";
import { Link } from "react-router-dom";

function TelaLogin() {
  return (
    <div className="tela-login">
      <div className="login-box">
        <img src="imagens/logo pref.png" alt="Prefeitura do Recife" className="logo" />
        <h2>Faça login em sua conta ou <a href="#">cadastre-se</a></h2>
        <input type="email" placeholder="Email" className="search" />
        <input type="password" placeholder="Senha" className="search" />
        <button className="agendar-button">Entrar</button>
        <Link to="/esqueci-senha">Esqueceu a senha?</Link>
      </div>
    </div>
  );
}

export default TelaLogin;
