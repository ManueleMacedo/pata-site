import React from "react";
import { Link } from "react-router-dom";

function EducaPet() {
  return (
    <div className="educa-background">
      {/* Header com logo, busca e botão voltar */}
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

      {/* Conteúdo principal */}
      <div className="educa-container">
        <h1>EducaPet 🐾</h1>

        <section className="educa-section">
          <h2>🔍 Como saber se meu pet precisa de atendimento médico?</h2>
          <ul>
            <li>Letargia (muito quieto ou sonolento)</li>
            <li>Falta de apetite por mais de 24h</li>
            <li>Diarreia ou vômito persistente</li>
            <li>Dificuldade para respirar</li>
            <li>Feridas visíveis ou sangramento</li>
          </ul>
        </section>

        <section className="educa-section">
          <h2>🚫 Alimentos que os pets NÃO podem comer:</h2>
          <ul>
            <li>Chocolate 🍫</li>
            <li>Uvas e passas 🍇</li>
            <li>Cebola e alho 🧄</li>
            <li>Álcool e cafeína ☕</li>
            <li>Ossos cozidos (podem lascar e causar ferimentos)</li>
          </ul>
        </section>

        <section className="educa-section">
          <h2>✅ Alimentos que PODEM ser oferecidos (com moderação):</h2>
          <ul>
            <li>Cenoura crua ou cozida 🥕</li>
            <li>Frango cozido sem tempero 🍗</li>
            <li>Arroz branco 🍚</li>
            <li>Maçã sem sementes 🍎</li>
            <li>Abóbora cozida 🎃</li>
          </ul>
        </section>

        <section className="educa-section">
          <h2>🧼 Higiene e cuidados básicos</h2>
          <ul>
            <li>Dê banho no pet a cada 15-30 dias, com produtos próprios.</li>
            <li>Mantenha as vacinas em dia e consulte o veterinário regularmente.</li>
            <li>Limpe os ouvidos com frequência e apare as unhas se necessário.</li>
            <li>Use antipulgas e vermífugos conforme orientação profissional.</li>
          </ul>
        </section>

        <section className="educa-section">
          <h2>🏃 Enriquecimento ambiental e bem-estar</h2>
          <ul>
            <li>Brinquedos ajudam a evitar estresse e comportamentos destrutivos.</li>
            <li>Caminhadas regulares são essenciais para cães.</li>
            <li>Gatos gostam de arranhadores e lugares altos para observar.</li>
            <li>Troque brinquedos periodicamente para estimular o pet.</li>
          </ul>
        </section>

        <section className="educa-section">
          <h2>💉 Vacinas essenciais</h2>
          <ul>
            <li><strong>Cães:</strong> V8 ou V10, Raiva, Gripe Canina</li>
            <li><strong>Gatos:</strong> V3, V4 ou V5, Raiva</li>
            <li>Consulte sempre um veterinário para o cronograma adequado.</li>
          </ul>
        </section>

        <section className="educa-section">
          <h2>🌿 Plantas tóxicas para animais</h2>
          <ul>
            <li>Comigo-ninguém-pode</li>
            <li>Lírio (especialmente para gatos)</li>
            <li>Espada-de-São-Jorge</li>
            <li>Antúrio</li>
            <li>Evite que pets mastiguem plantas sem saber se são seguras.</li>
          </ul>
        </section>
      </div>

      {/* Footer padrão */}
      <footer className="footer-veterinarios">
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

export default EducaPet;
