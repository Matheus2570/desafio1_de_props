import "./MainProps.css";

function Perfil(props) {
  return (
    <>
    <div className="blocoPerfil">
        <img className="img" src={props.img} alt={props.alt} />
        <h2>{props.nome}</h2>
        <h4>Hobbys:</h4>
        <p>{props.hobby}</p>
        <p>{props.link}</p>
      </div>
    </>
  );
}

export default Perfil;
