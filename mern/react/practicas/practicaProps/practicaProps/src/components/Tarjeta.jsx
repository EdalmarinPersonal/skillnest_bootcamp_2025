import React from "react";
import "./Tarjeta.css";
const TarjetaProducto = (props) => {
  const { nombre, precio, descripcion, stock } = props;
  const mensajeStock = stock ? 'En Stock' : 'Agotado';
  return (
    
      <div className="contenido-tarjeta">
        <h2>{nombre}</h2>
        <p>${precio}</p>
        <p>{descripcion}</p>
        <p className={stock ? "stock-verde" : "stock-rojo"}>{mensajeStock}</p>
      </div>
    
  );
};

export default TarjetaProducto;
