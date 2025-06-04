import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TelaDesmarcarExames() {
  const navigate = useNavigate();

  const [examesMarcados, setExamesMarcados] = useState([
    { id: 1, data: "07/04", horario: "09:00", nome: "Exame de Sangue" },
    { id: 2, data: "09/04", horario: "14:30", nome: "Exame de Urina" },
    { id: 3, data: "10/04", horario: "08:00", nome: "Exame de Fezes" },
  ]);

  const desmarcarExame = (id) => {
    const atualizado = examesMarcados.filter((exame) => exame.id !== id);
    setExamesMarcados(atualizado);
  };

  const finalizarAgendamento = () => {
    alert("Exame desmarcado!");
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
            <h3 className="agendamento-titulo">Exames Laboratoriais</h3>
            <p className="nome-exame">Desmarcar Exames</p>
            <p className="agendamento-subtitulo">Lista de exames marcados</p>
          </div>
        </div>

        <div className="lado-direito-agendamento">
          <h4 className="agendamento-subtitulo">Clique para desmarcar:</h4>

          {examesMarcados.length === 0 ? (
            <p className="dia-inativo">Nenhum exame marcado.</p>
          ) : (
            <div className="horarios-grid-agendamento">
              {examesMarcados.map((exame) => (
                <div key={exame.id} className="exame-marcado">
                  <span>
                    {exame.data} - {exame.horario} - {exame.nome}
                  </span>
                  <button
                    className="btn-desmarcar"
                    onClick={() => desmarcarExame(exame.id)}
                  >
                    Desmarcar
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="botoes-agendamento-container">
            <button
              className="btn-voltar"
              onClick={() => navigate("/tela-consulta")}
            >
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
