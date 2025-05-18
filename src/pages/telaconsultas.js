import React from "react";
import { Link } from "react-router-dom";

function TelaConsultasExames() {
  return (
    <div className="App">
      <header className="header">
        <img
          src={`${process.env.PUBLIC_URL}/imagens/logo-pref.png`}
          alt="Logo"
          className="logo"
        />
        <input type="text" placeholder="Pesquise aqui!" className="search" />
        <Link to="/">
          <button className="login-button">Voltar</button>
        </Link>
      </header>

      <main className="main-content">
        <div className="card-consultas">
          <h2 className="titulo-consultas">Consultas e exames</h2>

          <div className="botoes-exames">
            <Link to="/tela-exames">
              <button className="botao-exame">Marcar Exame</button>
            </Link>
            <Link to="/resultado-exames">
              <button className="botao-exame">Resultado de Exames</button>
            </Link>
            <Link to="/desmarcar-exames">
              <button className="botao-exame">Desmarcar Exame</button>
            </Link>

          </div>

          <div className="botoes-consultas">
            <Link to="/agendamento-consulta">
              <button className="botao-consulta">Marcar consulta</button>
            </Link>
            <Link to="/desmarcar-consultas">
              <button className="botao-consulta">Desmarcar Consulta</button>
            </Link>
          </div>
        </div>
        <div className="imagem-animais">
          <img
            src={`${process.env.PUBLIC_URL}/imagens/imagem-animais.png`}
            alt="Animais"
            className="img-animais"
          />
        </div>
      </main>

      <footer className="footer">
        <nav>
          <a href="#">Início</a> |
          <a href="/tela-agendamento">Agendamento</a> |
          <a href="/tela-emergencia">Emergência</a> |
          <a href="/tela-veterinarios">Veterinários</a> |
          <a href="#">Transparência</a> |
          <a href="/tela-educa-pet">EducaPet</a> |
          <a href="/tela-contato">Contato</a>
        </nav>
      </footer>
    </div>
  );
}

export default TelaConsultasExames;
