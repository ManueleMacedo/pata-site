import React, { useState } from "react";
import { Link } from "react-router-dom";

function TelaAvaliacao() {
  const [nivel, setNivel] = useState(null);
  const [comentario, setComentario] = useState("");
  const [avaliacoes, setAvaliacoes] = useState([]);

  const enviarAvaliacao = () => {
    if (nivel) {
      const novaAvaliacao = { nivel, comentario };
      setAvaliacoes([...avaliacoes, novaAvaliacao]);
      alert("Obrigado pela sua avaliação!");
      setNivel(null);
      setComentario("");
    } else {
      alert("Por favor, selecione um nível de satisfação.");
    }
  };

  return (
    <div className="App">
      <header className="header">
        <img
          src={`${process.env.PUBLIC_URL}/imagens/logo-pref.png`}
          alt="Logo"
          className="logo"
        />
        <input type="text" placeholder="Pesquise aqui!" className="search" />
        <Link to="/login">
          <button className="login-button">Entrar</button>
        </Link>
      </header>

      <main className="main-content">
        <div className="cartoes-container">
          <div className="cartao azul-bebe">
            <h2>Avalie nosso atendimento</h2>
            <p>Como você avalia sua experiência?</p>

            <div className="botoes-avaliacao">
              <button
                className={`botao-avaliacao ${nivel === 1 ? "ativo" : ""}`}
                onClick={() => setNivel(1)}
              >
                😞 Nível 1
              </button>
              <button
                className={`botao-avaliacao ${nivel === 2 ? "ativo" : ""}`}
                onClick={() => setNivel(2)}
              >
                🙂 Nível 2
              </button>
              <button
                className={`botao-avaliacao ${nivel === 3 ? "ativo" : ""}`}
                onClick={() => setNivel(3)}
              >
                😀 Nível 3
              </button>
            </div>

            <textarea
              className="comentario"
              placeholder="Deixe um comentário (opcional)"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
            ></textarea>

            <button className="botao-enviar" onClick={enviarAvaliacao}>
              Enviar Avaliação
            </button>
          </div>

         <div className="cartao azul-bebe">
  <h2>Avaliações feitas</h2>

 
  <div className="avaliacao-item">
    <strong>Nível 3</strong>
    <p>Excelente atendimento, todos foram muito atenciosos!</p>
  </div>

  
  {avaliacoes.length === 0 ? (
    <p>.</p>
  ) : (
    avaliacoes.map((av, index) => (
      <div key={index} className="avaliacao-item">
        <strong>Nível {av.nivel}</strong>
        <p>{av.comentario}</p>
      </div>
    ))
  )}
</div>
        </div>
      </main>

      <footer className="footer">
        <nav>
          <a href="/">Início</a> |
          <a href="/login">Agendamento</a> |
          <a href="/tela-emergencia">Emergência</a> |
          <a href="/tela-veterinarios">Veterinários</a> |
          <a href="/tela-educa-pet">EducaPet</a> |
          <a href="/tela-contato">Contato</a> |
          <a href="/tela-avaliacao">Avaliação</a>
        </nav>
      </footer>
    </div>
  );
}

export default TelaAvaliacao;
