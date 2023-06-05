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
  ])
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <div className="app">
        <p>Menu:</p>
        {menu.map((menu) => {return <NavLink to={menu.path}>{menu.nome}</NavLink>})}
      </div>
    </div>
  );
}