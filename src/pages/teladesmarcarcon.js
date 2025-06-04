import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TelaDesmarcarConsultas() {
  const navigate = useNavigate();

  const [consultasMarcadas, setConsultasMarcadas] = useState([
    { id: 1, data: "07/04", horario: "09:00", nome: "Consulta com Dr. Silva" },
    { id: 2, data: "09/04", horario: "14:30", nome: "Consulta com Dra. Souza" },
    { id: 3, data: "10/04", horario: "08:00", nome: "Consulta com Dr. Almeida" },

  ]);

  const desmarcarConsulta = (id) => {
    const atualizado = consultasMarcadas.filter((consulta) => consulta.id !== id);
    setConsultasMarcadas(atualizado);
  };

  const finalizarAgendamento = () => {
    alert("Consulta desmarcada!");
    navigate("/tela-consulta");
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
            <h3 className="agendamento-titulo">Consultas</h3>
            <p className="nome-exame">Desmarcar Consultas</p>
            <p className="agendamento-subtitulo">Lista de consultas marcadas</p>
          </div>
        </div>

        <div className="lado-direito-agendamento">
          <h4 className="agendamento-subtitulo">Clique para desmarcar:</h4>

          {consultasMarcadas.length === 0 ? (
            <p className="dia-inativo">Nenhuma consulta marcada.</p>
          ) : (
            <div className="horarios-grid-agendamento">
              {consultasMarcadas.map((consulta) => (
                <div key={consulta.id} className="exame-marcado">
                  <span>
                    {consulta.data} - {consulta.horario} - {consulta.nome}
                  </span>
                  <button
                    className="btn-desmarcar"
                    onClick={() => desmarcarConsulta(consulta.id)}
                  >
                    Desmarcar
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="botoes-agendamento-container">
            <button className="btn-voltar" onClick={() => navigate("/tela-consulta")}>
              Voltar
            </button>
            <button className="btn-finalizar" onClick={finalizarAgendamento}>
              Finalizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
