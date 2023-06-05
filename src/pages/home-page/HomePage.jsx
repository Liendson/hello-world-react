import '../../App.css';
import React, { useState } from 'react';
import HeaderComponent from '../../components/header-component/HeaderComponent';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
  const [menu, setMenu] = useState([
    {
      nome: "Listar Alunos",
      path: "alunos"
    },
    {
      nome: "Cadastrar Alunos",
      path: "alunos/cadastrar"
    }
  ])
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <div className="app">
        <p>Menu:</p>
        {menu.map((menu) => {
          return <ul>
            <li><NavLink to={menu.path}>{menu.nome}</NavLink></li>
          </ul>
        })}
      </div>
    </div>
  );
}