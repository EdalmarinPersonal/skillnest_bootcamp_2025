import { useState } from "react";


const MyComponent = (props) => {
  const [msaje,setMsaje] = useState(false);
  const fnClick = () => {
    alert('Me diste click desde MyComponent');
    setMsaje(true);
  }  

  return (
    <div>
      <p>{props.title} <br />{props.edad}<br /> <img src={props.img}></img><br /></p>
      {props.activo =="true" ? <p>El usuario está activo</p> : <p>El usuario no está activo</p>}

      <button onClick={fnClick} >Mi botón</button>
      <p>{msaje && <p>Persona Eliminada</p>}</p>
    </div>
  );
}

export default MyComponent;