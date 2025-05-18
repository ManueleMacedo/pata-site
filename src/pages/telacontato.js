import React from "react";
import { Link } from "react-router-dom";

export default function ContactScreen() {
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

            <main className="main-content tela-contato">
                <div className="contatos-grid">
                    <div className="contato-item">
                        <div className="icone-contato">📧</div>
                        <h2 className="titulo-contato">E-mail</h2>
                        <p className="descricao-contato">Tem alguma dúvida?</p>
                        <p className="detalhe-contato">ouvidoria@recife.pe.gov.br</p>
                    </div>

                    <div className="contato-item">
                        <div className="icone-contato">ℹ️</div>
                        <h2 className="titulo-contato">Informações</h2>
                        <p className="descricao-contato">Estamos aqui para ajudar!</p>
                        <p className="detalhe-contato">Atendimento disponível 24h</p>
                    </div>

                    <div className="contato-item">
                        <div className="icone-contato">📞</div>
                        <h2 className="titulo-contato">Telefone</h2>
                        <p className="descricao-contato">Ligue</p>
                        <p className="detalhe-contato">(81) 3355-1670</p> 
                    </div>
                </div>
            </main>

            <footer className="footer">
                <nav>
                    <a href="/">Início</a> |
                    <a href="/agendamento-consulta">Agendamento</a> |
                    <a href="/tela-emergencia">Emergência</a> |
                    <a href="/tela-veterinarios">Veterinários</a> |
                    <a href="#">Transparência</a> |
                    <a href="/tela-educa-pet">EducaPet</a> |
                    <a href="/tela-contato">Contato</a>
                </nav>
            </footer>
        </div>
    );
}
