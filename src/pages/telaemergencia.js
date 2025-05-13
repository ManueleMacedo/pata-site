import React, { useState } from "react";
import { Link } from "react-router-dom";

function TelaEmergencia() {
  const [nivelEmergencia, setNivelEmergencia] = useState(null);

  const handleNivelChange = (nivel) => {
    setNivelEmergencia(nivel);
  };

  const handleSubmit = () => {
    if (nivelEmergencia) {
      alert(`Emergência nível ${nivelEmergencia} enviada!`);
    } else {
      alert("Por favor, selecione o nível de emergência");
    }
  };

  const tiposEmergencia = [
    {
      nivel: 1,
      titulo: "Emergência Leve (Pode Aguardar Atendimento Programado)",
      descricao: "Situações que não representam um risco grave no momento, mas que exigem atenção veterinária para evitar complicações.",
      itens: [
        "Pequenos cortes ou arranhões",
        "Manqueira leve sem sinais de dor intensa",
        "Pequena alteração no apetite ou comportamento",
        "Coceira excessiva ou irritações na pele",
        "Secreção ocular ou nasal moderada"
      ]
    },
    {
      nivel: 2,
      titulo: "Emergência Moderada (Precisa de Atendimento Rápido, mas não Imediato)",
      descricao: "Casos que não ameaçam a vida do animal imediatamente, mas que podem piorar rapidamente",
      itens: [
        "Ferimentos profundos, mas sem sangramento intenso",
        "Vômitos ou diarreia persistentes",
        "Febre alta",
        "Dificuldade leve a moderada para respirar",
        "Intoxicação leve",
        "Fraturas sem exposição do osso"
      ]
    },
    {
      nivel: 3,
      titulo: "Emergência Crítica (Risco de Vida Imediato)",
      descricao: "Situações em que o animal precisa de atendimento veterinário imediato, pois corre risco de morte.",
      itens: [
        "Trauma grave (atropelamento, queda de grande altura, ataque violento)",
        "Sangramento intenso e incontrolável",
        "Dificuldade extrema para respirar",
        "Convulsões frequentes ou prolongadas",
        "Envenenamento grave",
        "Parada cardíaca ou respiratória"
      ]
    }
  ];

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
        <div className="card-emergencia">
          <h1 className="titulo-emergencia">Emergência</h1>

          <div className="tipos-container">
            {tiposEmergencia.map((tipo) => (
              <div key={tipo.nivel} className="tipo-emergencia">
                <h2>{tipo.nivel}. {tipo.titulo}</h2>
                <p>{tipo.descricao}</p>
                <ul>
                  {tipo.itens.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="selecionar-nivel">
            <h3>Nível de emergência</h3>
            <div className="niveis-container">
              {[1, 2, 3].map((nivel) => (
                <button
                  key={nivel}
                  className={`nivel-btn ${nivelEmergencia === nivel ? "selecionado" : ""}`}
                  onClick={() => handleNivelChange(nivel)}
                >
                  {nivel}
                </button>
              ))}
            </div>
            <button className="btn-enviar" onClick={handleSubmit}>
              Enviar
            </button>
          </div>
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

export default TelaEmergencia;