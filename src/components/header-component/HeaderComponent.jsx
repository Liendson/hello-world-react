import logo512 from './../../assets/logo512.png';
import './header.css';

export default function HeaderComponent() {
  return (
    <header className="App-header">
      <h1><img className="img" src={logo512} alt="react-img" />QUIZ Front-end</h1>
    </header>
  );
}