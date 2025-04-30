import React from "react";
import { Link } from "react-router-dom";

function TelaConsultasExames() {
  return (
    <div className="App">
      <header className="header">
        <img src="imagens/logo pref.png" alt="Logo" className="logo" />
        <input type="text" placeholder="Pesquise aqui!" className="search" />
        <Link to="/">
          <button className="login-button">Voltar</button>
        </Link>
      </header>

      <main className="main-content">
        <div className="card-consultas">
          <h2 className="titulo-consultas">Consultas e exames</h2>

          <div className="botoes-exames">
            <button className="botao-exame">Marcar Exame</button>
            <button className="botao-exame">Resultado de Exames</button>
            <button className="botao-exame">Desmarcar Exame</button>
          </div>

          <div className="botoes-consultas">
          <Link to="/agendamento-consulta">
                      <button className="botao-consulta">Marcar consulta</button>
                    </Link>
            <button className="botao-consulta">Desmarcar Consulta</button>
          </div>
        </div>
        <div className="imagem-animais">
           <img src="/imagens/imagem-animais.png" alt="Animais" className="img-animais" />
        </div>
      </main>

      <footer className="footer">
        <nav>
          <a href="#">Início</a> |
          <a href="#">Agendamento</a> |
          <a href="#">Emergência</a> |
          <a href="#">Veterinários</a> |
          <a href="#">Transparência</a> |
          <a href="#">EducaPet</a> |
          <a href="#">Contato</a>
        </nav>
      </footer>
    </div>
  );
}

export default TelaConsultasExames;
