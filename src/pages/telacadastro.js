import React from "react";
import { Link } from "react-router-dom";

function TelaCadastro() {
  return (
    <div className="tela-cadastro">
      <div className="registro-container">
        <div className="cadastro-box">
          <img
            src={`${process.env.PUBLIC_URL}/imagens/logo-pref.png`}
            alt="Prefeitura do Recife"
            className="logo-cadastro"
          />

          <div className="formularios">
            <div className="dados-pessoais">
              <h3>Dados pessoais</h3>
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Sobrenome" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Senha" />
              <input type="password" placeholder="Confirmação de senha" />
            </div>

            <div className="dados-animal">
              <h3>Dados do animal</h3>
              <input type="text" placeholder="Nome do animal" />
              <input type="text" placeholder="Espécie" />
              <input type="text" placeholder="Raça" />
              <input type="text" placeholder="Idade" />
              <input type="text" placeholder="Informações médicas relevantes" />
            </div>
          </div>

          <button className="botao-cadastrar">Cadastrar</button>
          <div className="link-voltar-login">
            <Link to="/login">Voltar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaCadastro;
