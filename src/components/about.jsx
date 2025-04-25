import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Como Usar o Sistema</h1>
      
      <div className="tutorial-section">
        <div className="tutorial-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Acessando a Lista de Alunos</h3>
            <p>Clique em "Students" no menu de navegação para acessar a área de gerenciamento de alunos.</p>
          </div>
        </div>

        <div className="tutorial-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Cadastrando um Novo Aluno</h3>
            <p>No topo da página Students, você encontrará um formulário com dois campos:</p>
            <ul>
              <li>Nome do Aluno: Digite o nome completo do estudante</li>
              <li>E-mail: Insira o e-mail estudantil do aluno</li>
            </ul>
            <p>Após preencher os campos, clique em "Add Student" para cadastrar.</p>
          </div>
        </div>

        <div className="tutorial-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Gerenciando Registros</h3>
            <p>Para cada aluno na lista, você tem duas opções:</p>
            <ul>
              <li><strong>Delete:</strong> Remove o registro do aluno do sistema</li>
              <li><strong>Refresh:</strong> Atualiza as informações do registro</li>
            </ul>
          </div>
        </div>

        <div className="tutorial-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>Dicas Importantes</h3>
            <ul>
              <li>Verifique sempre se o e-mail está correto antes de cadastrar</li>
              <li>Confirme antes de deletar um registro</li>
              <li>Mantenha a lista atualizada</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h3>Precisa de Ajuda?</h3>
        <p>Em caso de dúvidas ou problemas, entre em contato com o suporte da Teuzo-Web.</p>
      </div>
    </div>
  );
}

export default About;  