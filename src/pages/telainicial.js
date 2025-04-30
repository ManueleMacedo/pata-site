import React from "react";
import { Link } from "react-router-dom";


function TelaInicial() {
  return (
    <div className="App">
      <header className="header">
        <img src="imagens/logo pref.png" alt="Logo" className="logo" />
        <input type="text" placeholder="Pesquise aqui!" className="search" />
        <Link to="/login">
          <button className="login-button">Entrar</button>
        </Link>
      </header>

      <main className="main-content">
      <h2>Cuide do seu pet com carinho e segurança! Agende uma consulta agora mesmo.</h2>
      <div className="imagem-container">
        <img className="img-principal" src="imagens/HVR imagem.webp" alt="" />
        <div className="agendar-button ilustrativo">Agende uma consulta</div>
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

export default TelaInicial;
