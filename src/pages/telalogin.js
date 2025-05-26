import React from "react";
import { Link, useLocation } from "react-router-dom";

function TelaLogin() {
  const location = useLocation();
  const mensagem = location.state?.mensagem;

  return (
    <div className="tela-login">
      <div className="login-container">

        <Link to="/" className="voltar-link">
          ← Voltar para Início
        </Link>

        <div className="login-box">
          <img
            src={`${process.env.PUBLIC_URL}/imagens/logo-pref.png`}
            alt="Prefeitura do Recife"
            className="logo-login"
          />

          {/* Mensagem de sucesso vinda do cadastro */}
          {mensagem && (
            <div className="mensagem-sucesso">{mensagem}</div>
          )}

          <h2>
            Faça login em sua conta ou <Link to="/cadastro">cadastre-se</Link>
          </h2>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <Link to="/tela-consulta">
            <button className="agendar-button">Entrar</button>
          </Link>

          <div className="forgot-password">
            <Link to="/esqueci-senha">Esqueceu a senha?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaLogin;
