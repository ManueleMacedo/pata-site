import React from "react";
import { Link } from "react-router-dom";

const resultadosExames = [
  { id: 1, nome: "Exame de Sangue", data: "01/04/2025", resultado: "Normal" },
  { id: 2, nome: "Exame de Urina", data: "15/03/2025", resultado: "Alterado" },
  { id: 3, nome: "Exame de Colesterol", data: "22/02/2025", resultado: "Normal" },
];

export default function TelaResultadosExames() {
  return (
    <div className="tela-agendamento-sem-caixa">
      <div className="container-agendamento">
        <div className="lado-esquerdo-agendamento">
          <img
            src={`${process.env.PUBLIC_URL}/imagens/logo-pref.png`}
            alt="Logo"
            className="logo-agendamento"
          />
          <h3 className="agendamento-titulo">Exames Laboratoriais</h3>
          <p className="nome-exame">Consulta de Resultados</p>
        </div>

        <div className="lado-direito-agendamento">
          <h4 className="agendamento-subtitulo">Seus resultados recentes:</h4>

          <ul className="lista-exames">
            {resultadosExames.map((exame) => (
              <li key={exame.id}>
                <strong>{exame.nome}</strong> <br />
                <small>Data: {exame.data}</small><br />
                <span className={exame.resultado === "Normal" ? "resultado-normal" : "resultado-alterado"}>
                  Resultado: {exame.resultado}
                </span>
              </li>
            ))}
          </ul>

          <Link to="/tela-consulta">
            <button className="btn-finalizar-agendamento">
              Voltar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
