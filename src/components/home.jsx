import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="main-title">Teuzo-Web</h1>
        <h2 className="subtitle">Sistema de Gestão Estudantil</h2>
        <div className="hero-content">
          <p className="description">
            Bem-vindo à plataforma de gerenciamento de alunos da Escola de Programação Teuzo-Web.
            Aqui, os professores podem facilmente cadastrar e gerenciar informações dos alunos.
          </p>
        </div>
      </div>

      <div className="features-section">
        <h3>O que você pode fazer?</h3>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h4>Cadastrar Alunos</h4>
            <p>Adicione novos alunos com nome e e-mail estudantil</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✏️</div>
            <h4>Gerenciar Registros</h4>
            <p>Atualize ou remova registros quando necessário</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h4>Visualizar Lista</h4>
            <p>Veja todos os alunos cadastrados em um só lugar</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h3>Comece Agora</h3>
        <p>Acesse a seção "Students" para começar a gerenciar seus alunos</p>
      </div>
    </div>
  );
}

export default Home;