import img from './../../assets/logo512.png';

export default function CSSComponent() {
  return (
    <div>
      <img className="img" src={img} alt="react-img" />
      <p>O CSS está vindo de um arquivo .css!</p>
      <p style={{
        color: '#ff0000',
        backgroundColor: '#0000ff',
        textAlign: 'center',
        height: '200px',
        width: '200px'
      }}>Texto Centralizado</p>
    </div>
  );
}