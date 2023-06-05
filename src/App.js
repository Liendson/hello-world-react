import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import ListarAlunosPage from './pages/alunos/listar/ListarAlunosPage';
import CadastrarAlunosPage from './pages/alunos/cadastrar/CadastrarAlunosPage';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/alunos" element={<ListarAlunosPage></ListarAlunosPage>}></Route>
          <Route path="/alunos/cadastrar" element={<CadastrarAlunosPage></CadastrarAlunosPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}