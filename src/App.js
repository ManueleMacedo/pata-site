import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="imagens/logo pref.png" alt="Logo" className="logo" />
        <input type="text" placeholder="Pesquise aqui!" className="search" />
        <button className="login-button">Entrar</button>
      </header>

      <main className="main-content">
        <h2>Cuide do seu pet com carinho e segurança! Agende uma consulta agora mesmo.</h2>
        <img className="img-principal"  src="imagens/HVR imagem.webp" alt=""/>
        <button className="agendar-button">Agende uma consulta.</button>
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

export default App;
