import './App.css';
import HeaderComponent from './components/header-component/HeaderComponent';
import FooterComponent from './components/footer-component/FooterComponent';
import React, { useState } from 'react';

export default function App() {
  const [listaDePerguntas, setListaDePerguntas] = useState([
    {
      id: 1,
      nome: "O que é Front-end?",
      respostaSelecionada: null,
      resposta: 'Parte de um sistema que é visível e interativa ao usuário.',
      opcoes: [
        'Parte de um sistema que é oculta ao usuário.',
        'Parte de um sistema que é visível e interativa ao usuário.',
        'Parte lógica que recebe as regras de negócio.',
        'Nenhuma das alternativas anteriores.'
      ]
    },
    {
      id: 2,
      nome: "O que é React.js?",
      respostaSelecionada: null,
      resposta: 'Uma poderosa biblioteca Javascript.',
      opcoes: [
        'Uma poderosa biblioteca Javascript.',
        'Uma linguagem de programação.',
        'Um servidor de cloud.',
        'Todas as alternativas anteriores.'
      ]
    },
    {
      id: 3,
      nome: "Quais são as principais tecnologias do mundo Front-end?",
      respostaSelecionada: null,
      resposta: 'HTML, CSS e Javascript.',
      opcoes: [
        'HTML, CSS e Javascript.',
        'Java, Javascript.',
        '204, 200 e 203',
        'Todas as alternativas anteriores.'
      ],
    },
    {
      id: 4,
      nome: "Entre Vue.js, Angular e React.js, qual o melhor?",
      respostaSelecionada: null,
      resposta: 'Aquele que paga teu salário.',
      opcoes: [
        'Vue.js',
        'Angular',
        'React.js',
        'Aquele que paga teu salário.'
      ],
    },
  ])
  const getQuantidadePerguntasRespondidas = () => {
    return listaDePerguntas.filter(p => p.respostaSelecionada).length
  }
  const finalizarQuiz = () => {
    if (getQuantidadePerguntasRespondidas() === listaDePerguntas.length) {
      const questoesCorretas = listaDePerguntas.filter(p => p.respostaSelecionada === p.resposta)
      alert(`Você acertou ${questoesCorretas.length} de ${listaDePerguntas.length} perguntas!`)
    } else alert(`Responda todo o questionário!`)
  };
  const alterarResposta = (resposta, id) => {
    setListaDePerguntas(listaDePerguntas.map((p, i) => {
      if (p.id === id) { p.respostaSelecionada = resposta }
      return p;
    }));
  }
  const getBackgroundDivs = () => {
    return (
      <div className="background">
        <div className="tiles">
          <div className="tile tile-1"></div>
          <div className="tile tile-2"></div>
          <div className="tile tile-3"></div>
          <div className="tile tile-4"></div>
          <div className="tile tile-5"></div>
          <div className="tile tile-6"></div>
          <div className="tile tile-7"></div>
          <div className="tile tile-8"></div>
          <div className="tile tile-9"></div>
          <div className="tile tile-10"></div>
        </div>
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
    );
  };
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <div className="app">
        <p>Questões Respondidas: {listaDePerguntas.filter(p => p.respostaSelecionada).length}</p>
        {listaDePerguntas.map((p, i) => {
          return p.respostaSelecionada && <div><p>{`${i + 1}) ${p.respostaSelecionada}`}</p></div>
        })}
      </div>
      {listaDePerguntas.map(pergunta => {
        return (
          <div className="app">
            <div className="card">
              <h4>{pergunta.nome}</h4>
              {pergunta.opcoes.map((opcao, i) => (<p>{opcao}<button className="btn mb-1" onClick={() => alterarResposta(opcao, pergunta.id)} key={i}>Selecionar</button></p>))}
              <div className="shine"></div>
              {getBackgroundDivs()}
            </div>
          </div>
        )
      })
      }
      <button className="btn mb-3" onClick={finalizarQuiz}><span>Finalizar Quiz</span></button>
      <FooterComponent></FooterComponent>
    </div>
  );
}