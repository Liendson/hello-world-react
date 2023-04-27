import img from './../../assets/logo512.png';

export default function CSSComponent() {
  return (
    <div>
      <img className="img" src={img} alt="react-img" />
      <p>O CSS está vindo de um arquivo .css!</p>
    </div>
  );
}