import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const gerarHorarios = (inicio, fim) => {
  const horarios = [];
  let [hora, minuto] = inicio.split(":").map(Number);
  const [fimHora, fimMinuto] = fim.split(":").map(Number);
  while (hora < fimHora || (hora === fimHora && minuto <= fimMinuto)) {
    const horaFormatada = `${hora.toString().padStart(2, "0")}:${minuto
      .toString()
      .padStart(2, "0")}`;
    horarios.push(horaFormatada);
    minuto += 45;
    if (minuto >= 60) {
      hora += 1;
      minuto -= 60;
    }
  }
  return horarios;
};

export default function TelaAgendamento() {
  const navigate = useNavigate();
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);
  const [mostrarMaisHorarios, setMostrarMaisHorarios] = useState(false);

  const horariosSegunda = gerarHorarios("06:00", "15:45");
  const horariosQuarta = gerarHorarios("07:00", "13:45");
  const horariosExtras = gerarHorarios("14:30", "20:45");

  const handleSelecionarHorario = (data, hora) => {
    setHorarioSelecionado(`${data} ${hora}`);
  };

  const finalizarAgendamento = () => {
    if (horarioSelecionado?.includes("08/04")) {
      alert("Não é possível agendar para essa data.");
      return;
    }
    if (horarioSelecionado) {
      navigate("/telafinalizacao");
    } else {
      alert("Por favor, selecione um horário antes de finalizar.");
    }
  };

  return (
    <div className="tela-agendamento-sem-caixa">
      <div className="container-agendamento">
        <div className="lado-esquerdo-agendamento">
          <img
            src={`${process.env.PUBLIC_URL}/imagens/logo-pref.png`}
            alt="Logo"
            className="logo-agendamento"
          />
          <div className="perfil-medico-agendamento">
            <img
              src={`${process.env.PUBLIC_URL}/imagens/dr.avif`}
              alt="Médica"
              className="foto-medico-agendamento"
            />
            <h3 className="agendamento-titulo">Dra. Carla Andrade</h3>
            <p className="agendamento-subtitulo">
              Agenda: Dra. Carla (<Link to="#">alterar</Link>)
            </p>
          </div>
        </div>

        <div className="lado-direito-agendamento">
          <h4 className="agendamento-subtitulo">
            Selecione o horário desejado:
          </h4>

          <div className="data-horarios-agendamento">
            <strong>07/04 Segunda</strong>
            <div className="horarios-grid-agendamento">
              {horariosSegunda.map((hora, i) => (
                <button
                  key={i}
                  className={`horario-agendamento ${
                    horarioSelecionado === `07/04 ${hora}` ? "selecionado" : ""
                  }`}
                  onClick={() => handleSelecionarHorario("07/04", hora)}
                >
                  {hora}
                </button>
              ))}
            </div>
          </div>

          <div className="data-horarios-agendamento">
            <strong>08/04 Terça</strong>
            <p className="dia-inativo">Não atende</p>
          </div>

          <div className="data-horarios-agendamento">
            <strong>09/04 Quarta</strong>
            <div className="horarios-grid-agendamento">
              {horariosQuarta.map((hora, i) => (
                <button
                  key={i}
                  className={`horario-agendamento ${
                    horarioSelecionado === `09/04 ${hora}` ? "selecionado" : ""
                  }`}
                  onClick={() => handleSelecionarHorario("09/04", hora)}
                >
                  {hora}
                </button>
              ))}

              {!mostrarMaisHorarios ? (
                <button
                  className="mais-horarios-agendamento"
                  onClick={() => setMostrarMaisHorarios(true)}
                >
                  Mostrar mais horários
                </button>
              ) : (
                horariosExtras.map((hora, i) => (
                  <button
                    key={`extra-${i}`}
                    className={`horario-agendamento ${
                      horarioSelecionado === `09/04 ${hora}`
                        ? "selecionado"
                        : ""
                    }`}
                    onClick={() => handleSelecionarHorario("09/04", hora)}
                  >
                    {hora}
                  </button>
                ))
              )}
            </div>
          </div>

          <div className="botoes-agendamento-container">
            <button
              className="btn-finalizar-agendamento"
              onClick={finalizarAgendamento}
            >
              Finalizar
            </button>
            <button className="btn-finalizar-agendamento">
              <Link to="/tela-consulta" className="link-botao-voltar">
                Voltar
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
