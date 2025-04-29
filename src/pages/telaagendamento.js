import React, { useState } from "react";
import { Link } from "react-router-dom";

function TelaAgendamento() {
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);
  const [mostrarMaisHorarios, setMostrarMaisHorarios] = useState(false);

  const horariosSegunda = Array(12).fill("07:00");
  const horariosQuarta = Array(9).fill("07:00");
  const horariosExtras = Array(17).fill("08:00");

  const handleSelecionarHorario = (horario) => {
    setHorarioSelecionado(horario);
  };

  const finalizarAgendamento = () => {
    if (horarioSelecionado) {
      alert(`Agendamento finalizado para ${horarioSelecionado}`);
    } else {
      alert("Por favor, selecione um horário antes de finalizar.");
    }
  };

  return (
    <div className="tela-login-agendamento">
      <div className="login-box-agendamento">
        <img src="imagens/logo pref.png" alt="Logo" className="logo-agendamento" />
        <h2>Agendamento de Consulta</h2>

        <div className="perfil-medico-agendamento">
          <img src="imagens/dr.jpg" alt="" className="foto-medico-agendamento" />
          <h3 className="agendamento-titulo">Dra. Carla Andrade</h3>
          <p className="agendamento-subtitulo">
            Agenda: Dra. Carla (<Link to="#">alterar</Link>)
          </p>
        </div>

        <div className="selecao-horarios-agendamento">
          <h4 className="agendamento-subtitulo">Selecione o horário desejado:</h4>

          <div className="data-horarios-agendamento">
            <strong>07/04 Segunda</strong>
            <div className="horarios-grid-agendamento">
              {horariosSegunda.map((hora, index) => (
                <button
                  key={`segunda-${index}`}
                  className={horarioSelecionado === `07/04 ${hora}` ? "horario-agendamento selecionado" : "horario-agendamento"}
                  onClick={() => handleSelecionarHorario(`07/04 ${hora}`)}
                >
                  {hora}
                </button>
              ))}
            </div>
          </div>

          <div className="data-horarios-agendamento">
            <strong>08/04 Terça</strong>
            <p>Não atende</p>
          </div>

          <div className="data-horarios-agendamento">
            <strong>09/04 Quarta</strong>
            <div className="horarios-grid-agendamento">
              {horariosQuarta.map((hora, index) => (
                <button
                  key={`quarta-${index}`}
                  className={horarioSelecionado === `09/04 ${hora}` ? "horario-agendamento selecionado" : "horario-agendamento"}
                  onClick={() => handleSelecionarHorario(`09/04 ${hora}`)}
                >
                  {hora}
                </button>
              ))}

              {!mostrarMaisHorarios ? (
                <button className="mais-horarios-agendamento" onClick={() => setMostrarMaisHorarios(true)}>
                  +{horariosExtras.length}
                </button>
              ) : (
                horariosExtras.map((hora, index) => (
                  <button
                    key={`extra-${index}`}
                    className={horarioSelecionado === `09/04 Extra ${hora}` ? "horario-agendamento selecionado" : "horario-agendamento"}
                    onClick={() => handleSelecionarHorario(`09/04 Extra ${hora}`)}
                  >
                    {hora}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>

        <button className="btn-finalizar-agendamento" onClick={finalizarAgendamento}>
          Finalizar Agendamento
        </button>

        <div style={{ marginTop: "20px" }}>
          <Link to="/" className="link-cancelar-agendamento">Cancelar</Link>
        </div>

        <div style={{ marginTop: "10px" }}>
          <Link to="/agendamento-consulta">
            <button className="agendar-button-agendamento">Agende uma consulta</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TelaAgendamento;
