import React from "react";
import "./../styles/About.css";

const About: React.FC = () => {
  return (
    <section id="about">
  <div className="about-container">
    <div className="about-text">
      <h2>Sobre Mim</h2>
      <p>
        Olá! Sou [Seu Nome], um profissional apaixonado por Garantia de Qualidade (QA) e Automação de Testes. Tenho 7 anos de experiência na área, com forte foco em testes de integração, E2E e automação utilizando ferramentas como Cypress, Playwright e mais. Acredito na importância de garantir a qualidade desde as primeiras etapas do desenvolvimento, sempre colaborando com as equipes para otimizar processos e entregas.
      </p>
      <p>
        Sou entusiasta de novas tecnologias e estou sempre em busca de aprender e aplicar novas práticas no meu trabalho. Além disso, sou comprometido com a entrega de soluções de alta qualidade e na melhoria contínua de processos.
      </p>
    </div>
  
  </div>
</section>
  );
};

export default About;
