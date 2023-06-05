import '../../../App.css';
import './listar-alunos.css';
import React, { useEffect, useState } from 'react';
import logo512 from '../../../assets/logo512.png';

const url = "https://randomuser.me/api/"

export default function ListarAlunosPage() {
  const [listaDeAlunos, setListaDeAlunos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setListaDeAlunos(data.results);
    }
    fetchData();
  }, [])

  return (
    <div>
      <header className="App-header">
        <h1><img className="img" src={logo512} alt="react-img" />Listar Alunos</h1>
      </header>
      {listaDeAlunos.map(p => {
        return <div className="card">
          <h4>Nome do Aluno: {p.name.first}</h4>
          <div>Código do Curso do Aluno: {p.cell}</div>
          <div>Email do Aluno: {p.email}</div>
        </div>
      })}
    </div>
  );
}