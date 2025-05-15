import React from "react";
import { Link } from "react-router-dom";


export default function telafinalizacao() {
  return (
    <div className="tela-agendamento-sem-caixa">
      <div className="container-agendamento">
        <div className="lado-esquerdo-agendamento">
          <img
            src={`${process.env.PUBLIC_URL}/imagens/logo-pref.png`}
            alt="Logo"
            className="logo-agendamento"
          />
          <h3 className="agendamento-titulo">Agendamento</h3>
          <p className="agendamento-subtitulo">Confirmação</p>
        </div>

        <div className="lado-direito-agendamento">
          <h2 className="mensagem-finalizacao">Seu agendamento foi finalizado com sucesso!</h2>

          <Link to="/tela-consulta">
            <button className="btn-finalizar-agendamento">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
