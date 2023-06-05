import logo512 from './../../assets/logo512.png';
import './header-component.css';

export default function HeaderComponent() {
  return (
    <header className="App-header">
      <h1><img className="img" src={logo512} alt="react-img" />Aluno Online</h1>
    </header>
  );
}