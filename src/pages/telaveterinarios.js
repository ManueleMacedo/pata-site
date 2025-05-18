import React, { useState } from "react";
import { Link } from "react-router-dom";

function TelaVeterinarios() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    universidade: "",
    periodo: "",
    disponibilidade: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(formData.periodo) >= 3) {
      alert("Cadastro enviado com sucesso!");
      // Aqui você pode enviar os dados para uma API ou banco
    } else {
      alert("Apenas estudantes a partir do 3º período podem se cadastrar.");
    }
  };

  return (
    <div className="tela-veterinarios">
      <header className="header-veterinarios">
        <img
          src={`${process.env.PUBLIC_URL}/imagens/logo-pref.png`}
          alt="Logo"
          className="logo"
        />
        <input type="text" placeholder="Pesquise aqui!" className="search" />
        <Link to="/">
          <button className="voltar-button">Voltar</button>
        </Link>
      </header>

      <main className="main-veterinarios">
        <h1>Programa de Voluntariado Veterinário</h1>
        <p>
          Estudantes de Medicina Veterinária a partir do <strong>3º período</strong> podem se
          voluntariar para atuar no hospital e adquirir experiência prática.
        </p>

        <div className="beneficios-veterinarios">
          <h3>Você receberá:</h3>
          <ul>
            <li>✅ Certificado de horas complementares</li>
            <li>✅ Vivência em atendimentos e procedimentos reais</li>
            <li>✅ Carta de recomendação (para bons desempenhos)</li>
          </ul>
        </div>

        <form className="formulario-veterinarios" onSubmit={handleSubmit}>
          <label>Nome completo:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <label>Email institucional:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Universidade:</label>
          <input
            type="text"
            name="universidade"
            value={formData.universidade}
            onChange={handleChange}
            required
          />

          <label>Período atual:</label>
          <input
            type="number"
            name="periodo"
            value={formData.periodo}
            onChange={handleChange}
            required
          />

          <label>Disponibilidade (dias/horários):</label>
          <textarea
            name="disponibilidade"
            value={formData.disponibilidade}
            onChange={handleChange}
            required
          />

          <button type="submit" className="enviar-button">
            Cadastrar
          </button>
        </form>
      </main>

      <footer className="footer-veterinarios">
        <nav>
          <a href="#">Início</a> |
          <a href="#">Agendamento</a> |
          <Link to="/tela-emergencia">Emergência</Link> |
          <a href="#">Veterinários</a> |
          <a href="#">Transparência</a> |
          <a href="/tela-educa-pet">EducaPet</a> |
          <a href="/tela-contato">Contato</a>
        </nav>
      </footer>
    </div>
  );
}

export default TelaVeterinarios;
