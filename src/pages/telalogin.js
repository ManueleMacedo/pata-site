import React from "react";
import { Link } from "react-router-dom";

function TelaLogin() {
  return (
    <div className="tela-login">

      <div className="login-container">
      
        <Link to="/" className="voltar-link">
          ← Voltar para Início
        </Link>

        <div className="login-box">
          <img src="imagens/logo pref.png" alt="Prefeitura do Recife" className="logo-login" />
          <h2>
              Faça login em sua conta ou <Link to="/cadastro">cadastre-se</Link>
          </h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button>Entrar</button>
          <div className="forgot-password">
            <Link to="/esqueci-senha">Esqueceu a senha?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaLogin;
